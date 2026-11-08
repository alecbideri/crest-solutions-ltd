import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/content/images";
import { company, contactIntent } from "@/content/company";
import { divisionsOrdered } from "@/content/divisions";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { ArrowLink } from "@/components/arrow-link";
import { SectionHead } from "@/components/section-head";
import { StepList } from "@/components/step-list";
import { CorridorTimeline } from "@/components/corridor-timeline";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Materials logistics and construction",
  description: company.seo.home,
  alternates: { canonical: "/" },
};

const capabilityStrip = [
  {
    title: "Materials logistics",
    detail: "Construction materials, equipment and project cargo",
  },
  {
    title: "Construction",
    detail: "Residential, commercial and fit-out works",
  },
  {
    title: "Origin to site",
    detail: "Dubai, China and East Africa",
  },
];

const homeProjects = projects.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20">
          <div className="lg:col-span-6">
            <p
              className="label rise"
              style={{ "--rise-delay": "60ms" } as CSSProperties}
            >
              {company.hero.eyebrow}
            </p>
            <h1
              className="hero-title rise mt-6 max-w-[16ch] pb-1"
              style={{ "--rise-delay": "140ms" } as CSSProperties}
            >
              We <em className="font-medium italic">move</em> materials.
              <br />
              We <em className="font-medium italic">build</em> places.
            </h1>
            <p
              className="body-lg rise mt-6 max-w-[42ch] text-muted"
              style={{ "--rise-delay": "220ms" } as CSSProperties}
            >
              {company.hero.intro}
            </p>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ "--rise-delay": "300ms" } as CSSProperties}
            >
              <Link href="/contact" className="btn btn-primary">
                {contactIntent}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <a href="#approach" className="btn btn-ghost">
                {company.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="media-in relative aspect-[16/10] overflow-hidden bg-ink">
              <Image
                src={images.hero}
                alt="Kigali city centre at night, looking along the main road with lit office towers and the hills beyond."
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-basalt/30 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-line">
        <div className="shell grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {capabilityStrip.map((item) => (
            <div
              key={item.title}
              className="py-4 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="font-mono text-[10px] tracking-[0.14em] text-ink uppercase">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <section
        id="divisions"
        className="scroll-mt-24 border-b border-line py-20 md:py-28"
      >
        <div className="shell">
          <SectionHead
            title={
              <>
                Two disciplines.
                <br />
                <em className="font-medium italic">One standard.</em>
              </>
            }
            intro={company.positioning}
            link={{ href: "/divisions", label: "How the divisions connect" }}
          />

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-2">
            {divisionsOrdered.map((division) => {
              const dark = division.id === "construction";
              return (
                <article
                  key={division.id}
                  className={cn(
                    "group flex flex-col",
                    dark ? "bg-basalt text-bone" : "bg-paper text-ink",
                  )}
                >
                  <div className="image-zoom relative aspect-[16/10] overflow-hidden bg-ink/10">
                    <Image
                      src={division.image}
                      alt={division.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={cn("label", dark && "label-light")}>
                          {division.index} / Division
                        </p>
                        <h3 className="display-md mt-3">{division.headline}</h3>
                      </div>
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className={cn(
                          "mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          dark ? "text-signal-bright" : "text-signal",
                        )}
                      />
                    </div>

                    <p
                      className={cn(
                        "mt-4 max-w-[42ch] text-sm leading-relaxed md:text-[15px]",
                        dark ? "text-bone/60" : "text-muted",
                      )}
                    >
                      {division.summary}
                    </p>

                    <ul
                      className={cn(
                        "mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t pt-5",
                        dark ? "border-bone/15" : "border-line",
                      )}
                    >
                      {division.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className={cn(
                            "flex items-center gap-2 font-mono text-[9px] tracking-[0.08em] uppercase",
                            dark ? "text-bone/55" : "text-muted",
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className="h-px w-3 shrink-0 bg-signal"
                          />
                          {capability}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <ArrowLink href={division.link as Route} light={dark}>
                        Explore {division.shortName.toLowerCase()}
                      </ArrowLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-24 border-b border-line py-20 md:py-28"
      >
        <div className="shell">
          <SectionHead
            label="Selected work"
            title="Work in the ground."
            intro="A project record is judged by what it left behind: the asset in use, the movement closed out, the file that lets the next team take over."
            link={{ href: "/projects", label: "All projects" }}
          />

          <div className="mt-12 grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
            {homeProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 border-b border-bone/10 bg-basalt py-20 text-bone md:py-28"
      >
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label label-light">Operating model</p>
            <h2 className="display-lg mt-4 max-w-[12ch]">
              How a Crest engagement runs.
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-bone/60 md:text-base">
              The method is the same whether the deliverable is a building or a
              movement. Read the ground, design the route, deploy the team, then
              prove the handover.
            </p>
            <div className="mt-8">
              <ArrowLink href="/about#approach" light>
                Read the operating model
              </ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <StepList steps={company.steps} tone="dark" />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <blockquote className="lg:col-span-7">
            <p className="display-md max-w-[16ch]">
              “We are judged by what arrives, and by what stands.”
            </p>
            <footer className="mt-6 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
              Crest operating principle
            </footer>
          </blockquote>

          <div className="grid grid-cols-2 border-t border-l border-line lg:col-span-5">
            {company.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-b border-line p-5 md:p-6"
              >
                <p className="font-mono text-2xl tracking-[-0.02em] text-ink md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted md:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="display-lg max-w-[12ch]">
                From origin to handover.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-relaxed text-muted md:text-base">
                We source and consolidate in Dubai, China and other origin
                markets, move through the East African corridor and receive at
                site. The same team can carry the finishing works after the
                materials arrive.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <CorridorTimeline />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
