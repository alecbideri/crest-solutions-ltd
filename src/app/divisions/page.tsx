import type { Metadata } from "next";
import Image from "next/image";
import type { Route } from "next";
import {
  divisionsOrdered,
  sharedWork,
} from "@/content/divisions";
import { PageIntro } from "@/components/page-intro";
import { ArrowLink } from "@/components/arrow-link";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Materials logistics and construction from Crest Solutions Ltd, held to one operating standard across East Africa.",
  alternates: { canonical: "/divisions" },
};

export default function DivisionsPage() {
  return (
    <>
      <PageIntro
        kicker="Divisions"
        title="Two disciplines. One accountable team."
        intro="Crest works in two worlds that usually sit apart: moving materials and equipment, and building the places they arrive at. We keep both under one plan because our clients are usually managing both."
        aside={
          <div className="space-y-5">
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
              The shared advantage
            </p>
            <p className="text-sm leading-relaxed text-muted">
              One team can hold the inbound shipment, the site compound and the
              construction programme. Fewer interfaces, fewer handover gaps.
            </p>
            <ArrowLink href="/contact">Talk through a scope</ArrowLink>
          </div>
        }
      />

      {divisionsOrdered.map((division, index) => {
        const dark = division.id === "construction";
        return (
          <section
            key={division.id}
            className={cn(
              "border-b py-20 md:py-28",
              dark ? "border-bone/10 bg-basalt text-bone" : "border-line",
            )}
          >
            <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div
                className={cn(
                  "lg:col-span-5",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink/10">
                  <Image
                    src={division.image}
                    alt={division.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className={cn(
                  "lg:col-span-7",
                  index % 2 === 1 ? "lg:order-1" : "",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className={cn("label", dark && "label-light")}>
                    {division.index} / Division
                  </p>
                  <span
                    className={cn(
                      "font-mono text-[9px] tracking-[0.12em] uppercase",
                      dark ? "text-bone/45" : "text-muted",
                    )}
                  >
                    Crest Solutions Ltd
                  </span>
                </div>

                <h2 className="display-lg mt-5 max-w-[12ch]">
                  {division.headline}
                </h2>
                <p
                  className={cn(
                    "mt-5 max-w-[54ch] text-[15px] leading-relaxed md:text-base",
                    dark ? "text-bone/60" : "text-muted",
                  )}
                >
                  {division.description}
                </p>

                <dl
                  className={cn(
                    "mt-8 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2",
                    dark ? "border-bone/15" : "border-line",
                  )}
                >
                  {division.services.map((service) => (
                    <div key={service.title}>
                      <dt
                        className={cn(
                          "text-sm font-medium",
                          dark ? "text-bone" : "text-ink",
                        )}
                      >
                        {service.title}
                      </dt>
                      <dd
                        className={cn(
                          "mt-1 text-xs leading-relaxed",
                          dark ? "text-bone/55" : "text-muted",
                        )}
                      >
                        {service.body}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8">
                  <ArrowLink href={division.link as Route} light={dark}>
                    Explore {division.shortName.toLowerCase()}
                  </ArrowLink>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <p className="label">Where the two meet</p>
          <h2 className="display-lg mt-4 max-w-[16ch]">
            The work that needs both.
          </h2>
          <p className="mt-5 max-w-[54ch] text-sm leading-relaxed text-muted md:text-base">
            Some scopes do not fit neatly into one division. A remote site needs
            a compound before it needs a crane. A retail fit-out needs a build
            and a material call-off in the same week. These are the engagements
            where one lead matters most.
          </p>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {sharedWork.map((item, index) => (
              <article key={item.title} className="bg-paper p-6 md:p-7">
                <span className="font-mono text-[10px] tracking-[0.12em] text-signal-deep">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-[54ch] font-mono text-[9px] leading-relaxed text-muted">
            Shared scopes are planned against one budget, one schedule and one
            close-out file. The client does not manage the seam between the
            divisions.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
