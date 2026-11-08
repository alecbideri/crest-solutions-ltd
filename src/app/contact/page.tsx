import type { Metadata } from "next";
import { company } from "@/content/company";
import { PageIntro } from "@/components/page-intro";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { Faq } from "@/components/faq";
import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description: company.seo.contact,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Start a conversation."
        intro="Tell us what needs to move, what needs to stand, and when. We will come back with a route, a plan or a straight answer."
        aside={
          <div className="space-y-5">
            <div>
              <p className="label">Direct</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-flex items-center gap-2 break-all text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
              >
                {company.email}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <div className="mt-3">
                <CopyEmail />
              </div>
              <div className="mt-4">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost min-h-[42px] px-4"
                >
                  <WhatsappLogo size={15} weight="fill" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="border-t border-line pt-4">
              <p className="label">Office</p>
              <p className="mt-2 text-sm">{company.location}</p>
              <p className="mt-1 text-sm text-muted">{company.hours}</p>
            </div>
          </div>
        }
      />

      <section className="border-b border-line py-14 md:py-20">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display-sm">Write the brief.</h2>
            <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-muted">
              The form opens your email app with the details already filled in.
              Nothing is stored on this website. If you prefer, write directly
              to {company.email} or message us on WhatsApp.
            </p>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-line pt-5">
              <p className="label">Phone</p>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="mt-2 inline-block font-mono text-sm underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
              >
                {company.phone}
              </a>
              <p className="mt-1 font-mono text-[10px] text-muted">
                {company.phoneNote}
              </p>
            </div>
            <div className="mt-8 border-t border-line pt-5">
              <p className="label">Address</p>
              <p className="mt-2 text-sm leading-relaxed">{company.address}</p>
            </div>
            <div className="mt-8 border-t border-line pt-5">
              <p className="label">Hours</p>
              <p className="mt-2 text-sm">{company.hours}</p>
              <p className="mt-2 text-sm text-muted">
                Live operations are coordinated outside office hours by the
                duty lead.
              </p>
            </div>
            <div className="mt-8 border-t border-line pt-5">
              <p className="label">Response</p>
              <p className="mt-2 text-sm text-muted">
                We aim to reply to new enquiries within one working day.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display-md max-w-[10ch]">Before you write.</h2>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted">
              The questions that come up before a first scope. If yours is not
              here, ask it directly.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:text-signal-deep"
            >
              Ask a question
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
