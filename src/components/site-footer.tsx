import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";
import { company, contactIntent } from "@/content/company";

const footerNav: { label: string; href: Route }[] = [
  { label: "Company", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer data-site-footer className="bg-basalt text-bone">
      <div className="shell pt-16 pb-12 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-7 max-w-[15ch] text-[clamp(1.6rem,2.6vw,2.3rem)] leading-[1.08] tracking-[-0.035em]">
              Movement and structure, held to one standard.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.03em] text-bone/75 transition-colors hover:text-bone"
            >
              {company.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="label label-light">Explore</p>
            <ul className="mt-5 grid gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label label-light">Contact</p>
            <div className="mt-5 space-y-5 text-sm text-bone/70">
              <div>
                <p className="text-bone/45">Office</p>
                <p className="mt-1">{company.location}</p>
                <p className="mt-1 text-bone/55">{company.hours}</p>
              </div>
              <div>
                <p className="text-bone/45">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 inline-block break-all text-bone/80 underline decoration-bone/25 underline-offset-4 transition-colors hover:text-bone"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-bone/45">Phone</p>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-block font-mono text-bone/80 transition-colors hover:text-bone"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-bone/45">New enquiries</p>
                <Link
                  href="/contact"
                  className="mt-1 inline-flex items-center gap-1.5 text-bone/80 transition-colors hover:text-bone"
                >
                  {contactIntent}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <p className="text-bone/45">WhatsApp</p>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-bone/80 transition-colors hover:text-bone"
                >
                  Message on WhatsApp
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shell overflow-hidden border-t border-bone/10 pt-6">
        <div
          aria-hidden="true"
          className="select-none text-[clamp(4.5rem,16.5vw,15rem)] leading-[0.72] font-semibold tracking-[-0.075em] text-bone/[0.085]"
        >
          CREST<span className="text-signal/60">.</span>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-bone/10 py-5 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[9px] tracking-[0.08em] text-bone/45">
          © 2026 Crest Solutions Ltd. Registration details available on request.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[9px] tracking-[0.08em] text-bone/45">
          <Link href="/privacy" className="transition-colors hover:text-bone/80">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
