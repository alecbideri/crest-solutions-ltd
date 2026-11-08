"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { ArrowUpRight, List, WhatsappLogo, X } from "@phosphor-icons/react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import { company, contactIntent } from "@/content/company";

const navItems: { label: string; href: Route }[] = [
  { label: "Company", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Projects", href: "/projects" },
  { label: "Profile", href: "/profile" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      dialogRef.current?.close();
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function openMenu() {
    setOpen(true);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }

  function closeMenu() {
    setOpen(false);
    dialogRef.current?.close();
  }

  function isActive(href: Route) {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md supports-[backdrop-filter]:bg-paper/85"
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Crest Solutions Ltd, home"
          className="shrink-0 text-ink transition-opacity hover:opacity-70"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors",
                  active
                    ? "text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute right-0 -bottom-px left-0 h-px origin-left bg-signal transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Message Crest Solutions Ltd on WhatsApp"
            className="hidden h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone lg:inline-flex"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className="btn btn-primary hidden min-h-[40px] px-4 py-0 text-[10px] lg:inline-flex"
          >
            {contactIntent}
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-10 items-center gap-2 border border-ink px-3 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors hover:bg-ink hover:text-bone lg:hidden"
          >
            <List size={16} aria-hidden="true" />
            Menu
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeMenu();
          }
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-basalt/50"
      >
        <div className="flex min-h-dvh flex-col">
          <div className="shell flex h-[72px] shrink-0 items-center justify-between border-b border-line">
            <Logo />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="inline-flex h-10 items-center gap-2 border border-ink px-3 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors hover:bg-ink hover:text-bone"
            >
              <X size={16} aria-hidden="true" />
              Close
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="shell flex flex-1 flex-col justify-center py-10"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="display-md">{item.label}</span>
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-muted">
                        0{index + 1}
                      </span>
                      <ArrowUpRight
                        size={22}
                        aria-hidden="true"
                        className="text-signal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn btn-primary w-full sm:w-auto"
              >
                {contactIntent}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="font-mono text-[11px] tracking-[0.04em] text-muted underline decoration-line underline-offset-4"
              >
                {company.email}
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-muted underline decoration-line underline-offset-4"
              >
                <WhatsappLogo size={15} weight="fill" aria-hidden="true" />
                WhatsApp {company.phone}
              </a>
            </div>
          </nav>

          <div className="shell shrink-0 border-t border-line py-5">
            <p className="label">
              {company.location} / {company.hours}
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
