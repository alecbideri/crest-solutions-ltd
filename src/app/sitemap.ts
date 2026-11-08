import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/company";
import { projects } from "@/content/projects";

const lastModified = new Date("2026-11-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/divisions", priority: 0.8 },
    { path: "/divisions/construction", priority: 0.8 },
    { path: "/divisions/logistics", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/profile", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
