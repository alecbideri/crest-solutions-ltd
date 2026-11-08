import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { company, contactIntent } from "@/content/company";

export function CtaBand() {
  return (
    <section className="border-t-2 border-signal bg-basalt text-bone">
      <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="lg:col-span-8">
          <h2 className="display-lg max-w-[17ch]">
            Tell us what needs to move. Or what needs to stand.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
          <Link href="/contact" className="btn btn-light">
            {contactIntent}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            <a
              href={`mailto:${company.email}`}
              className="font-mono text-[11px] tracking-[0.02em] text-bone/65 underline decoration-bone/25 underline-offset-4 transition-colors hover:text-bone"
            >
              {company.email}
            </a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.02em] text-bone/65 underline decoration-bone/25 underline-offset-4 transition-colors hover:text-bone"
            >
              WhatsApp {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
