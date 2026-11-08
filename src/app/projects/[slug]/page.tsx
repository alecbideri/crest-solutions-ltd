import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { getProject, projects } from "@/content/projects";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard } from "@/components/project-card";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <article>
        <header className="border-b border-line">
          <div className="shell py-10 md:py-14">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-muted uppercase"
            >
              <Link href="/projects" className="transition-colors hover:text-ink">
                Projects
              </Link>
              <span aria-hidden="true">/</span>
              <span>{project.sector}</span>
              <span aria-hidden="true">/</span>
              <span className="text-ink">{project.index}</span>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="label">
                  {project.sector} / {project.location}
                </p>
                <h1 className="display-lg mt-4 max-w-[18ch]">{project.title}</h1>
                <p className="body-lg mt-5 max-w-[54ch] text-muted">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-col justify-end lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
                <dl className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                  <div className="border-t border-line pt-3">
                    <dt className="label">Location</dt>
                    <dd className="mt-1 text-sm">{project.location}</dd>
                  </div>
                  <div className="border-t border-line pt-3">
                    <dt className="label">Year</dt>
                    <dd className="mt-1 text-sm">{project.year}</dd>
                  </div>
                  <div className="border-t border-line pt-3">
                    <dt className="label">Client</dt>
                    <dd className="mt-1 text-sm">{project.client}</dd>
                  </div>
                  <div className="border-t border-line pt-3">
                    <dt className="label">Status</dt>
                    <dd
                      className={`mt-1 text-sm ${
                        project.placeholder ? "text-signal-deep" : "text-ink"
                      }`}
                    >
                      {project.placeholder ? "Placeholder record" : "Project record"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </header>

        <div className="border-b border-line">
          <div className="shell py-6 md:py-8">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink/10 md:aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                preload
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="shell py-14 md:py-20">
          {project.placeholder ? (
            <div className="border-l-2 border-signal bg-paper-deep px-5 py-4">
              <p className="font-mono text-[9px] tracking-[0.14em] text-signal-deep uppercase">
                Draft record
              </p>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-ink">
                This project is a working placeholder. Names, figures, durations
                and outcomes are illustrative and must be verified with the client
                and the project team before publication.
              </p>
            </div>
          ) : null}

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <dl className="grid gap-5">
                <div className="border-t border-line pt-3">
                  <dt className="label">Scope</dt>
                  <dd className="mt-1 text-sm">{project.scope}</dd>
                </div>
                <div className="border-t border-line pt-3">
                  <dt className="label">Duration</dt>
                  <dd className="mt-1 text-sm">{project.duration}</dd>
                </div>
                <div className="border-t border-line pt-3">
                  <dt className="label">Services</dt>
                  <dd className="mt-2">
                    <ul className="grid gap-1.5 text-sm text-muted">
                      {project.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                {project.recordNote ? (
                  <div className="border-t border-line pt-3">
                    <dt className="label">Record basis</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-muted">
                      {project.recordNote}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="prose-crest max-w-[62ch]">
                <h2>Brief</h2>
                <p>{project.brief}</p>

                <h2>Approach</h2>
                <p>{project.approach}</p>

                <h2>Outcome</h2>
                <p>{project.outcome}</p>
              </div>

              {project.placeholder ? (
                <div className="mt-10 border-t border-line pt-6">
                  <p className="label">What the final record will include</p>
                  <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    <li>Verified client and scope</li>
                    <li>Contract value or budget band</li>
                    <li>Programme dates and duration</li>
                    <li>Site photography and drawings</li>
                    <li>Client approval and quote</li>
                    <li>Close-out or delivery evidence</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-line">
          <Link
            href={`/projects/${nextProject.slug}` as Route}
            className="group block transition-colors hover:bg-paper-deep"
          >
            <div className="shell flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between md:py-12">
              <div>
                <p className="label">Next project</p>
                <p className="display-sm mt-2 max-w-[30ch]">
                  {nextProject.title}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                  {nextProject.sector}
                </span>
                <ArrowUpRight
                  size={24}
                  aria-hidden="true"
                  className="text-signal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </article>

      <section className="border-b border-line py-16 md:py-20">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display-sm">More records</h2>
            <Link
              href="/projects"
              className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase transition-colors hover:text-ink"
            >
              All projects
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {projects
              .filter((item) => item.slug !== project.slug)
              .slice(0, 2)
              .map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
