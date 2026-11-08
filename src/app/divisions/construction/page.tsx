import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/content/images";
import { divisionById } from "@/content/divisions";
import { projects } from "@/content/projects";
import { PageIntro } from "@/components/page-intro";
import { SectionHead } from "@/components/section-head";
import { StepList } from "@/components/step-list";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Construction",
  description:
    "Residential, commercial and fit-out construction from Crest Solutions Ltd, delivered from survey to close-out across Rwanda and the East African corridor.",
  alternates: { canonical: "/divisions/construction" },
};

const division = divisionById.construction;

const stages = [
  {
    title: "Pre-construction",
    body: "Survey, ground investigation, buildability review, programme and procurement plan. The build is designed before it is priced.",
  },
  {
    title: "Build",
    body: "Site establishment, frame, envelope and services, followed by fit-out and finishing. One weekly look-ahead and one materials plan.",
  },
  {
    title: "Commissioning",
    body: "Testing, snagging, systems handover and occupant readiness. The asset is proven before it is handed over.",
  },
  {
    title: "Close-out",
    body: "As-built record, warranties, maintenance schedule and final account, compiled into one handover file.",
  },
];

const assurance = [
  {
    title: "QHSE",
    body: "Risk register, method statements, inductions and a named QHSE lead on every site. Safety is planned into the sequence.",
  },
  {
    title: "Programme control",
    body: "Weekly look-ahead, procurement tracker and a single exception log. The client sees the same numbers as the site team.",
  },
  {
    title: "Documentation",
    body: "Inspection records, as-builts, warranties and a handover file the client can actually use after the team leaves.",
  },
];

const relatedProjects = projects.filter((project) =>
  ["rg-market-plaza", "meraki-new-residence"].includes(project.slug),
);

export default function ConstructionPage() {
  return (
    <>
      <PageIntro
        kicker="Division 01 / Construction"
        title="Things that stand."
        intro={division.description}
        aside={
          <dl className="grid gap-4">
            <div className="border-t border-line pt-3">
              <dt className="label">Scope</dt>
              <dd className="mt-1 text-sm">
                Residential, commercial, fit-out, finishing
              </dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="label">Delivery</dt>
              <dd className="mt-1 text-sm">Survey to close-out</dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="label">Coverage</dt>
              <dd className="mt-1 text-sm">Kigali and the East African corridor</dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="label">Standard</dt>
              <dd className="mt-1 text-sm">QHSE-led, one accountable lead</dd>
            </div>
          </dl>
        }
      />

      <div className="border-b border-line">
        <div className="shell py-6 md:py-8">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink/10 md:aspect-[16/7]">
            <Image
              src={images.rg}
              alt="The RG Market Plaza commercial building in Kigali, a multi-storey block with glass and cream facades."
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
            title="What we build."
            intro="We take on residential, commercial, fit-out and finishing work where the programme is tight and the client wants one team to carry the scope from materials to handover. The list below is the core of the division, not the limit of it."
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
            <p className="label label-light">Delivery model</p>
            <h2 className="display-lg mt-4 max-w-[11ch]">
              Survey. Build. Prove.
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-bone/60 md:text-base">
              The build is only finished when the record is finished. Every
              stage has a defined output, a named owner and a document that
              survives the team.
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
              Assurance is a deliverable.
            </h2>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-muted md:text-base">
              A clean site and a clean file are the same discipline. We plan the
              evidence at the same time as the work, so close-out is a
              confirmation rather than a scramble.
            </p>
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
            title="Construction records."
            intro="Current construction records across residential and commercial work, including the Meraki and Ohana residences and RG Market Plaza."
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
