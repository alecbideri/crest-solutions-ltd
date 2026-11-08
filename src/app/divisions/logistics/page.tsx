import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/content/images";
import { divisionById } from "@/content/divisions";
import { projects } from "@/content/projects";
import { PageIntro } from "@/components/page-intro";
import { SectionHead } from "@/components/section-head";
import { StepList } from "@/components/step-list";
import { CorridorList } from "@/components/corridor-list";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Logistics",
  description:
    "Materials logistics, origin sourcing, freight forwarding, project cargo and site delivery from Crest Solutions Ltd, connecting Dubai, China and other markets to East Africa.",
  alternates: { canonical: "/divisions/logistics" },
};

const division = divisionById.logistics;

const stages = [
  {
    title: "Origin and demand plan",
    body: "What moves, where it is bought and when. We consolidate in Dubai or China, check the goods and book the route against site readiness.",
  },
  {
    title: "Route and mode",
    body: "Sea, air, road or a combination. Carrier selection, transit plan, permits and contingency built into the schedule.",
  },
  {
    title: "Clearance",
    body: "Documentation, customs, border timing and escort requirements, closed before the load reaches the border.",
  },
  {
    title: "Delivery and proof",
    body: "Site reception, proof of delivery, exception log and a cost reconciliation. The movement is not finished until the paper is.",
  },
];

const assurance = [
  {
    title: "One control room",
    body: "Every consignment sits on one register, with a named owner, a live status and a delivery window tied to site readiness.",
  },
  {
    title: "Cargo care",
    body: "Handling standards, driver checks, vehicle standards and an incident response plan are part of the quote, not an extra.",
  },
  {
    title: "Visible cost",
    body: "The movement is costed before it starts and reconciled after it closes. No surprise line items at the end of the month.",
  },
];

const relatedProjects = projects.filter((project) =>
  ["international-materials-programme", "meraki-new-residence"].includes(
    project.slug,
  ),
);

export default function LogisticsPage() {
  return (
    <>
      <PageIntro
        kicker="Division 02 / Logistics"
        title="Things that arrive."
        intro={division.description}
        aside={
          <dl className="grid gap-4">
            <div className="border-t border-line pt-3">
              <dt className="label">Scope</dt>
              <dd className="mt-1 text-sm">
                Origin sourcing, freight, project cargo, ground transport
              </dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="label">Coverage</dt>
              <dd className="mt-1 text-sm">Global origin markets / East Africa</dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="label">Control</dt>
              <dd className="mt-1 text-sm">One movement register, one lead</dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="label">Proof</dt>
              <dd className="mt-1 text-sm">Delivery record and cost reconciliation</dd>
            </div>
          </dl>
        }
      />

      <div className="border-b border-line">
        <div className="shell py-6 md:py-8">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink/10 md:aspect-[16/7]">
            <Image
              src={images.logistics}
              alt="Aerial view of a container terminal with stacked containers and ship-to-shore cranes."
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <SectionHead
            title="What we move."
            intro="The division handles the whole movement, not a single leg. That means the ticket, the truck, the border, the warehouse and the proof of delivery sit under one plan."
          />

          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {division.services.map((service, index) => (
              <div
                key={service.title}
                className="flex gap-5 border-t border-line py-5 md:py-6"
              >
                <span className="pt-0.5 font-mono text-[10px] tracking-[0.12em] text-signal-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg leading-tight tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-muted">
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-bone/10 bg-basalt py-20 text-bone md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label label-light">Operating model</p>
            <h2 className="display-lg mt-4 max-w-[11ch]">
              Plan. Move. Prove.
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-bone/60 md:text-base">
              A movement is a sequence of handovers. We design the sequence,
              hold the documentation and stay on the load until the receiver has
              signed for it.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <StepList steps={stages} tone="dark" />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-lg max-w-[12ch]">
              One corridor. One register.
            </h2>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-muted md:text-base">
              We source and consolidate in Dubai, China and other origin
              markets, move through the East African corridor and receive at
              site. The same desk that books the freight can clear the border
              and receive the load at site.
            </p>
            <div className="mt-8">
              <CorridorList />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="grid gap-6">
              {assurance.map((item) => (
                <div key={item.title} className="border-t border-line pt-5">
                  <dt className="text-lg tracking-[-0.02em]">{item.title}</dt>
                  <dd className="mt-2 max-w-[50ch] text-sm leading-relaxed text-muted">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <SectionHead
            title="Logistics records."
            intro="Current logistics and integrated records, including the international materials programme for residential and commercial sites."
            link={{ href: "/projects", label: "All projects" }}
          />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
