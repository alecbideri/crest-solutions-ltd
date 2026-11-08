import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/content/images";
import { company } from "@/content/company";
import { divisionsOrdered } from "@/content/divisions";
import { projects } from "@/content/projects";
import { CorridorList } from "@/components/corridor-list";
import { StepList } from "@/components/step-list";

export const metadata: Metadata = {
  title: "Company profile",
  description: company.seo.profile,
  alternates: { canonical: "/profile" },
};

export default function ProfilePage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line">
        <div className="shell py-8 md:py-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-signal" aria-hidden="true" />
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                {company.profile.title} / {company.profile.edition}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3" data-print-hide>
              <a
                href="/crest-solutions-company-profile.pdf"
                download
                className="btn btn-primary"
              >
                <DownloadSimple size={15} aria-hidden="true" />
                Download PDF
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="label">Crest Solutions Ltd</p>
              <h1 className="display-xl mt-5 max-w-[12ch]">
                Movement and structure, held to one standard.
              </h1>
              <p className="body-lg mt-6 max-w-[52ch] text-muted">
                {company.profile.intro}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/10">
                <Image
                  src={images.profile}
                  alt="The RG Market Plaza commercial building in Kigali, a multi-storey block with glass and cream facades."
                  fill
                  preload
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-line pt-2 font-mono text-[9px] text-muted">
                <span>Kigali, Rwanda</span>
                <span>{company.profile.edition}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="shell py-8 md:py-10">
        <div className="border-l-2 border-signal bg-paper-deep px-5 py-4">
          <p className="font-mono text-[9px] tracking-[0.14em] text-signal-deep uppercase">
            Editorial note
          </p>
          <p className="mt-2 max-w-[78ch] text-sm leading-relaxed text-ink">
            {company.profile.note}
          </p>
        </div>
      </div>

      <section className="border-t border-line py-12 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
              01 / Who we are
            </p>
          </div>
          <div className="max-w-[70ch] lg:col-span-8 lg:col-start-5">
            <h2 className="display-md">A company built around the handover.</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
              <p>{company.intro}</p>
              <p>{company.positioning}</p>
            </div>

            <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-2">
              {company.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-line pt-6">
              <p className="label">Team</p>
              <div className="mt-4 grid gap-6 sm:grid-cols-3">
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
          </div>
        </div>
      </section>

      <section className="print-break border-t border-line py-12 md:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
                02 / What we do
              </p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="display-md max-w-[16ch]">
                Two disciplines, one operating standard.
              </h2>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
                Each division can stand alone. The advantage appears when a
                client needs both, and the seam between them disappears.
              </p>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
                Logistics is not bounded by the East African corridor. We source
                and consolidate in Dubai, China and other origin markets, and
                can extend coverage as a client's supply chain requires.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
            {divisionsOrdered.map((division) => (
              <div key={division.id} className="bg-paper p-6 md:p-8">
                <p className="label">
                  {division.index} / {division.name}
                </p>
                <h3 className="display-sm mt-3">{division.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {division.description}
                </p>
                <ul className="mt-5 grid gap-2 border-t border-line pt-4 text-sm">
                  {division.services.map((service) => (
                    <li key={service.title} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-3 shrink-0 bg-signal"
                      />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={division.link as Route}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:text-signal-deep"
                >
                  Division detail
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="print-break border-t border-line py-12 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
              03 / How we work
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="display-md max-w-[14ch]">
              Read. Design. Deploy. Assure.
            </h2>
            <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
              The method is the same whether the deliverable is a building or a
              movement. The output of every stage is written down, owned and
              carried into the next one.
            </p>
            <div className="mt-7">
              <StepList steps={company.steps} />
            </div>
          </div>
        </div>
      </section>

      <section className="print-break border-t border-line py-12 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
              04 / Where we work
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="display-md max-w-[14ch]">
              The East African corridor.
            </h2>
            <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
              Kigali is the base of operations. The corridor connects the coast
              to the Great Lakes region.
            </p>
            <div className="mt-7">
              <CorridorList />
            </div>
          </div>
        </div>
      </section>

      <section className="print-break border-t border-line py-12 md:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
                05 / The record
              </p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="display-md max-w-[14ch]">Project record.</h2>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
                A working list across both divisions. Each entry is confirmed
                with the project team as the record is completed.
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-t border-line">
                  <th className="label py-3 pr-3">No.</th>
                  <th className="label py-3 pr-3">Project</th>
                  <th className="label py-3 pr-3">Sector</th>
                  <th className="label py-3 pr-3">Location</th>
                  <th className="label py-3">Year</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.slug}
                    className="border-t border-line align-top"
                  >
                    <td className="py-3 pr-3 font-mono text-[10px] text-muted">
                      {project.index}
                    </td>
                    <td className="py-3 pr-3 text-sm">
                      {project.title}
                      <span className="mt-0.5 block text-xs text-muted">
                        {project.scope}
                      </span>
                    </td>
                    <td className="py-3 pr-3 text-sm text-muted">
                      {project.sector}
                    </td>
                    <td className="py-3 pr-3 text-sm text-muted">
                      {project.location}
                    </td>
                    <td className="py-3 font-mono text-[10px] text-muted">
                      {project.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-[10px] leading-relaxed text-muted">
            Current records as of November 2026. Add verified figures, client
            approvals and completed photography before external distribution.
          </p>
        </div>
      </section>

      <section className="print-break border-t border-line py-12 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
              06 / Contact
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="display-md max-w-[14ch]">
              Start with the ground truth.
            </h2>
            <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
              Send the route, the site, the dates and the constraint. We will
              come back with a plan or a straight answer.
            </p>

            <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="label">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 inline-block text-sm underline decoration-line underline-offset-4"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="label">Phone</p>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-block font-mono text-sm underline decoration-line underline-offset-4"
                >
                  {company.phone}
                </a>
                <p className="mt-1 font-mono text-[10px] text-muted">
                  {company.phoneNote}
                </p>
              </div>
              <div>
                <p className="label">WhatsApp</p>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm underline decoration-line underline-offset-4"
                >
                  Message {company.phone}
                </a>
              </div>
              <div>
                <p className="label">Office</p>
                <p className="mt-1 text-sm">{company.location}</p>
                <p className="mt-1 text-sm text-muted">{company.hours}</p>
              </div>
              <div>
                <p className="label">Website</p>
                <p className="mt-1 text-sm">crestsolutionsltd.com</p>
              </div>
            </div>

            <p className="mt-8 font-mono text-[9px] leading-relaxed text-muted">
              Crest Solutions Ltd. Registration details available on request.
              This profile is a working draft.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
