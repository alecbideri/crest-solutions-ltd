import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageIntroProps = {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  actions?: ReactNode;
  titleClassName?: string;
};

export function PageIntro({
  kicker,
  title,
  intro,
  aside,
  actions,
  titleClassName,
}: PageIntroProps) {
  return (
    <header className="border-b border-line">
      <div className="shell grid gap-10 py-14 md:py-18 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className={cn(aside ? "lg:col-span-8" : "lg:col-span-10")}>
          {kicker ? <p className="label">{kicker}</p> : null}
          <h1 className={cn("mt-6 max-w-[15ch]", titleClassName ?? "display-xl")}>
            {title}
          </h1>
          {intro ? (
            <p className="body-lg mt-7 max-w-[58ch] text-muted">{intro}</p>
          ) : null}
          {actions ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
          ) : null}
        </div>

        {aside ? (
          <div className="flex flex-col justify-end border-line lg:col-span-4 lg:border-l lg:pl-8">
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}
