import type { Metadata } from "next";
import { company } from "@/content/company";
import { projects } from "@/content/projects";
import { PageIntro } from "@/components/page-intro";
import { ProjectFilters } from "@/components/project-filters";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Projects",
  description: company.seo.projects,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        kicker="Project record"
        title="Work in the ground."
        intro="A record of current projects across both divisions. Each entry follows the same structure: the brief, the approach, the outcome and the record basis."
        aside={
          <div className="border border-line bg-paper-deep p-5">
            <p className="font-mono text-[9px] tracking-[0.14em] text-signal-deep uppercase">
              Current record
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {String(projects.length).padStart(2, "0")} projects across
              residential construction, commercial fit-out and international
              materials logistics.
            </p>
            <p className="mt-3 font-mono text-[9px] leading-relaxed text-muted">
              Project facts and photography are confirmed with the project team
              as each record is completed.
            </p>
          </div>
        }
      />

      <section className="py-14 md:py-20">
        <div className="shell">
          <ProjectFilters projects={projects} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
