import type { ReactNode } from "react";
import type { Route } from "next";
import { cn } from "@/lib/cn";
import { ArrowLink } from "@/components/arrow-link";

type SectionHeadProps = {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  link?: { href: Route; label: string };
  light?: boolean;
  className?: string;
  titleClassName?: string;
};

export function SectionHead({
  label,
  title,
  intro,
  link,
  light = false,
  className,
  titleClassName,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-[62ch]">
        {label ? (
          <p className={cn("label", light && "label-light")}>{label}</p>
        ) : null}
        <h2
          className={cn(
            "mt-4 max-w-[18ch]",
            titleClassName ?? "display-lg",
            light ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={cn(
              "mt-5 max-w-[54ch] text-[15px] leading-relaxed md:text-base",
              light ? "text-bone/60" : "text-muted",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {link ? (
        <div className="shrink-0">
          <ArrowLink href={link.href} light={light}>
            {link.label}
          </ArrowLink>
        </div>
      ) : null}
    </div>
  );
}
