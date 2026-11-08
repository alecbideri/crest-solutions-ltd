import type { Metadata } from "next";
import Image from "next/image";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/content/images";
import { company } from "@/content/company";
import { PageIntro } from "@/components/page-intro";
import { SectionHead } from "@/components/section-head";
import { StepList } from "@/components/step-list";
import { ArrowLink } from "@/components/arrow-link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Company",
  description: company.seo.about,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="Company"
        title="Built around the handover."
        intro="Crest Solutions Ltd is a dual-discipline company working across materials logistics and construction, from origin markets in Dubai and China to sites in East Africa. We source, move and build, with one accountable team from first survey to final handover."
        aside={
          <dl className="grid gap-4">
            {company.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-3">
                <dt className="label">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink/10">
              <Image
                src={images.team}
                alt="Two engineers in high-visibility vests speaking on a large earthworks site."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="display-lg max-w-[14ch]">
              One brief. One plan. One lead.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
              <p>{company.intro}</p>
              <p>{company.positioning}</p>
            </div>

            <div className="mt-9 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
                  Construction
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Residential, commercial, fit-out and finishing works, held
                  from survey to close-out.
                </p>
                <div className="mt-3">
                  <ArrowLink href="/divisions/construction">
                    Explore construction
                  </ArrowLink>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.14em] text-signal-deep uppercase">
                  Logistics
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Materials, cargo and project equipment, from origin markets
                  to site.
                </p>
                <div className="mt-3">
                  <ArrowLink href="/divisions/logistics">
                    Explore logistics
                  </ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <SectionHead
            title="The standard is the method."
            intro="These are the operating principles behind every engagement, in either division. They are not values on a wall. They decide how a plan is built and how a problem is reported."
          />

          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {company.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="border-t border-line py-6 md:py-7"
              >
                <div className="flex gap-5">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-signal-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg leading-tight tracking-[-0.02em]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 border-b border-line py-20 md:py-28"
      >
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Operating model</p>
            <h2 className="display-lg mt-4 max-w-[12ch]">
              From first survey to final handover.
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-muted md:text-base">
              A Crest engagement is a single sequence. The client sees one plan,
              one reporting rhythm and one lead who can answer for the whole
              scope.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <StepList steps={company.steps} />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <SectionHead
            title="The team behind the standard."
            intro="The people accountable for the work across both divisions. One team, one standard, from the first survey to the final handover."
          />

          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            {company.leadership.map((person) => (
              <div key={person.role} className="bg-paper p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center bg-ink font-mono text-lg text-bone">
                    {person.initials}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                    Crest
                  </span>
                </div>
                <h3 className="mt-6 text-xl tracking-[-0.025em]">{person.name}</h3>
                <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-signal-deep uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {person.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-8 border border-line bg-paper-deep p-6 md:grid-cols-12 md:items-center md:p-10">
            <div className="md:col-span-7">
              <p className="label">Company profile</p>
              <h2 className="display-md mt-3 max-w-[16ch]">
                The full picture, in one document.
              </h2>
              <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-muted">
                A print-ready profile covering who we are, what we do, how we
                work, where we operate and the project record. The same content
                used across this website, kept in one place.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
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
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/10">
                <Image
                  src={images.profile}
                  alt="The RG Market Plaza commercial building in Kigali, a multi-storey block with glass and cream facades."
                  fill
                  sizes="(min-width: 768px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
