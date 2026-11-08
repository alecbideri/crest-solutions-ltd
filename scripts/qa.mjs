import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base = "http://127.0.0.1:3000";
const out = path.resolve("..", ".tmp", "shots");
fs.mkdirSync(out, { recursive: true });

const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["divisions", "/divisions"],
  ["construction", "/divisions/construction"],
  ["logistics", "/divisions/logistics"],
  ["projects", "/projects"],
  ["project", "/projects/meraki-new-residence"],
  ["project-rg", "/projects/rg-market-plaza"],
  ["profile", "/profile"],
  ["contact", "/contact"],
  ["privacy", "/privacy"],
  ["not-found", "/this-route-does-not-exist"],
];

const browser = await chromium.launch({ channel: "chrome" });
const issues = [];

async function capture(viewport, suffix) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    isMobile: viewport.width < 600,
    hasTouch: viewport.width < 600,
  });
  const page = await context.newPage();

  page.on("console", (message) => {
    if (message.type() === "error") {
      issues.push(`[console:${suffix}] ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    issues.push(`[pageerror:${suffix}] ${error.message}`);
  });

  for (const [name, route] of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(600);
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const timer = window.setInterval(() => {
          window.scrollBy(0, 500);
          y += 500;
          if (y >= document.body.scrollHeight) {
            window.clearInterval(timer);
            resolve();
          }
        }, 45);
      });
    });
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    if (overflow > 2) {
      issues.push(`[overflow:${suffix}] ${route} by ${overflow}px`);
    }
    if (response && response.status() >= 400 && route !== "/this-route-does-not-exist") {
      issues.push(`[status:${suffix}] ${route} -> ${response.status()}`);
    }
    const height = await page.evaluate(() => document.body.scrollHeight);
    console.log(`${suffix} ${route} status=${response?.status()} height=${height} overflow=${overflow}`);
    if (name === "home" && suffix === "desktop") {
      await page.screenshot({ path: path.join(out, "home-fold.png") });
    }
    await page.screenshot({
      path: path.join(out, `${name}-${suffix}.png`),
      fullPage: true,
    });
  }

  await context.close();
}

await capture({ width: 1440, height: 1000 }, "desktop");
await capture({ width: 390, height: 844 }, "mobile");

// Link audit
const context = await browser.newContext();
const page = await context.newPage();
for (const [name, route] of routes) {
  await page.goto(base + route, { waitUntil: "domcontentloaded" });
  const hrefs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a[href^='/']")).map((a) => a.getAttribute("href")),
  );
  for (const href of new Set(hrefs)) {
    if (!href || href.startsWith("/#")) continue;
    const res = await context.request.get(base + href);
    if (res.status() >= 400) {
      issues.push(`[link] ${route} -> ${href} (${res.status()})`);
    }
  }
}
await context.close();

await browser.close();

console.log("\n--- ISSUES ---");
if (issues.length === 0) {
  console.log("none");
} else {
  for (const issue of issues) console.log(issue);
}
