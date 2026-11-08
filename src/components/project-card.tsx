import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  className?: string;
  sizes?: string;
};

export function ProjectCard({
  project,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}` as Route}
      className={cn("group block", className)}
    >
      <div className="image-zoom relative aspect-[4/3] overflow-hidden bg-ink/10">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-4">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
            <span>{project.index}</span>
            <span aria-hidden="true">/</span>
            <span>{project.sector}</span>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
            {project.placeholder ? (
              <>
                <span aria-hidden="true">/</span>
                <span className="text-signal-deep">Placeholder</span>
              </>
            ) : null}
          </div>
          <h3 className="mt-2 text-xl leading-tight tracking-[-0.025em]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.location}</p>
        </div>
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-signal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
