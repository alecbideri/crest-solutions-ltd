import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: Route;
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export function ArrowLink({ href, children, light = false, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "link-underline group font-mono text-[10px] tracking-[0.14em] uppercase",
        light ? "text-bone" : "text-ink",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        size={13}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
