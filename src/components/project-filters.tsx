"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectSector } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/cn";

type Filter = "All" | ProjectSector;

const filters: Filter[] = ["All", "Logistics", "Construction", "Integrated"];

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.sector === active),
    [active, projects],
  );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-5">
        <div
          role="group"
          aria-label="Filter projects by sector"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const selected = active === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(filter)}
                className={cn(
                  "min-h-9 border px-3.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors",
                  selected
                    ? "border-ink bg-ink text-bone"
                    : "border-line text-muted hover:border-ink hover:text-ink",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
          {String(visible.length).padStart(2, "0")} records
        </p>
      </div>

      {visible.length > 0 ? (
        <div
          key={active}
          className="grid-enter mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2"
        >
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-10 border border-line px-6 py-16 text-center">
          <p className="display-sm">No records in this sector yet.</p>
          <p className="mx-auto mt-3 max-w-[36ch] text-sm text-muted">
            New records are added as projects close. Check back, or start a
            conversation about the work you need.
          </p>
        </div>
      )}
    </div>
  );
}
