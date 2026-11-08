import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/content/images";
import { company } from "@/content/company";
import { divisionsOrdered } from "@/content/divisions";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Company profile (print)",
  robots: { index: false, follow: false },
};

export default function PrintProfilePage() {
  return (
    <div className="print-document bg-white text-ink">
      <div
        className="shell flex flex-col gap-4 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between"
        data-print-hide
      >
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to profile
        </Link>
        <a
          href="/crest-solutions-company-profile.pdf"
          download
          className="btn btn-primary min-h-[42px]"
        >
          <DownloadSimple size={15} aria-hidden="true" />
          Download PDF
        </a>
      </div>

      <article className="mx-auto max-w-[900px] px-5 pb-20 md:px-8">
        <section className="print-page print-cover border-b border-line py-8">
          <p className="label">Crest Solutions Ltd / Company profile / 2026</p>
          <h1 className="mt-5 max-w-[14ch] text-[clamp(2.4rem,6vw,4rem)] leading-[1.02] tracking-[-0.045em]">
            Movement and structure, held to one standard.
          </h1>
          <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-muted">
            {company.profile.intro}
          </p>

          <div className="print-cover-image relative mt-7 aspect-[16/9] overflow-hidden bg-ink/10">
            <Image
              src={images.profile}
              alt="The RG Market Plaza commercial building in Kigali, a multi-storey block with glass and cream facades."
              fill
              preload
              sizes="(min-width: 900px) 860px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 font-mono text-[9px] text-muted">
            <span>Kigali, Rwanda</span>
            <span>{company.profile.edition}</span>
            <span>{company.email}</span>
            <span>{company.phone}</span>
          </div>
        </section>

        <section className="print-page border-b border-line py-8">
          <p className="label">01 / Who we are</p>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.06] tracking-[-0.035em]">
            A company built around the handover.
          </h2>
          <p className="mt-5 max-w-[70ch] text-[15px] leading-relaxed text-muted">
            {company.intro}
          </p>
          <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted">
            {company.positioning}
          </p>

          <div className="print-avoid mt-7 grid gap-x-8 gap-y-4 border-t border-line pt-5 sm:grid-cols-2">
            {company.facts.map((fact) => (
              <div key={fact.label}>
                <p className="label">{fact.label}</p>
                <p className="mt-1 text-sm">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="print-avoid mt-7 border-t border-line pt-5">
            <p className="label">Team</p>
            <div className="print-cols-3 mt-3 grid gap-5 sm:grid-cols-3">
              {company.leadership.map((person) => (
                <div key={person.name}>
                  <p className="text-sm font-medium">{person.name}</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.1em] text-signal-deep uppercase">
                    {person.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {person.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="print-page border-b border-line py-8">
          <p className="label">02 / What we do</p>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.06] tracking-[-0.035em]">
            Two disciplines, one operating standard.
          </h2>
          <p className="mt-5 max-w-[70ch] text-[15px] leading-relaxed text-muted">
            Each division can stand alone. The advantage appears when a client
            needs both, and the seam between them disappears.
          </p>
          <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted">
            Logistics is not bounded by the East African corridor. We source and
            consolidate in Dubai, China and other origin markets, and can extend
            coverage as a client&apos;s supply chain requires.
          </p>

          <div className="print-cols-2 mt-6 grid gap-6 md:grid-cols-2">
            {divisionsOrdered.map((division) => (
              <div key={division.id} className="print-avoid border-t border-line pt-4">
                <p className="label">
                  {division.index} / {division.name}
                </p>
                <h3 className="mt-2 text-xl tracking-[-0.025em]">
                  {division.headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {division.description}
                </p>
                <ul className="mt-4 grid gap-1.5 border-t border-line pt-3 text-sm">
                  {division.services.map((service) => (
                    <li key={service.title} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-2.5 shrink-0 bg-signal"
                      />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="print-page border-b border-line py-8">
          <p className="label">03 / How we work</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.06] tracking-[-0.035em]">
            Read. Design. Deploy. Assure.
          </h2>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-relaxed text-muted">
            The method is the same whether the deliverable is a building or a
            movement. Every stage has a defined output, a named owner and a
            document that survives the team.
          </p>

          <div className="print-cols-2 mt-5 grid gap-5 md:grid-cols-2">
            {company.steps.map((step, index) => (
              <div key={step.title} className="print-avoid border-t border-line pt-3">
                <span className="font-mono text-[9px] text-signal-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="print-avoid mt-8 border-t border-line pt-5">
            <p className="label">04 / Where we work</p>
            <h2 className="mt-3 max-w-[18ch] text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.08] tracking-[-0.03em]">
              Global origins. East African delivery.
            </h2>
            <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted">
              Kigali is the base of operations. Our network connects Dubai and
              Guangzhou to the East African corridor, and can extend to other
              origin markets.
            </p>
            <div className="print-cols-2 mt-4 grid gap-x-8 gap-y-2 md:grid-cols-2">
              {company.corridor.map((node) => (
                <div
                  key={node.city}
                  className="flex items-baseline justify-between gap-3 border-t border-line pt-2"
                >
                  <p className="text-sm">
                    {node.city}
                    <span className="ml-1.5 text-xs text-muted">
                      {node.country}
                    </span>
                  </p>
                  <p className="font-mono text-[9px] text-muted">
                    {node.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="print-page py-8">
          <p className="label">05 / Project record</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.06] tracking-[-0.035em]">
            Current projects.
          </h2>
          <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted">
            Residential, commercial and international materials records. Each
            entry is confirmed with the project team as the record is completed.
          </p>

          <table className="mt-5">
            <thead>
              <tr>
                <th className="label py-2">No.</th>
                <th className="label py-2">Project</th>
                <th className="label py-2">Sector</th>
                <th className="label py-2">Location</th>
                <th className="label py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.slug}>
                  <td className="font-mono text-[9px] text-muted">
                    {project.index}
                  </td>
                  <td className="text-sm">
                    {project.title}
                    <span className="mt-0.5 block text-xs text-muted">
                      {project.scope}
                    </span>
                  </td>
                  <td className="text-sm text-muted">{project.sector}</td>
                  <td className="text-sm text-muted">{project.location}</td>
                  <td className="font-mono text-[9px] text-muted">
                    {project.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="print-avoid mt-8 border-t border-line pt-5">
            <p className="label">06 / Contact</p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.08] tracking-[-0.03em]">
              Start with the ground truth.
            </h2>
            <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted">
              Send the route, the site, the dates and the constraint. We will
              come back with a plan or a straight answer.
            </p>

            <div className="print-cols-2 mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="label">Email</p>
                <p className="mt-1 text-sm">{company.email}</p>
              </div>
              <div>
                <p className="label">Phone</p>
                <p className="mt-1 text-sm">{company.phone}</p>
              </div>
              <div>
                <p className="label">WhatsApp</p>
                <p className="mt-1 text-sm">{company.phone}</p>
              </div>
              <div>
                <p className="label">Office</p>
                <p className="mt-1 text-sm">{company.location}</p>
              </div>
            </div>

            <p className="mt-4 font-mono text-[8px] leading-relaxed text-muted">
              Crest Solutions Ltd. Registration details available on request.
              This profile is a working draft.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
