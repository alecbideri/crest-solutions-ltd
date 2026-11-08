import type { Metadata } from "next";
import { company } from "@/content/company";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Crest Solutions Ltd handles information collected through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        kicker="Legal"
        title="Privacy."
        intro="This page explains what happens to information you share through this website. It is written to be read, not to hide behind."
        aside={
          <div className="border-t border-line pt-4">
            <p className="label">Last updated</p>
            <p className="mt-2 text-sm">November 2026</p>
          </div>
        }
      />

      <section className="py-14 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label">On this page</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              <li>What we collect</li>
              <li>How the form works</li>
              <li>Cookies and analytics</li>
              <li>Your choices</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="max-w-[68ch] lg:col-span-8 lg:col-start-5">
            <div className="prose-crest">
              <h2>What we collect</h2>
              <p>
                The website does not create accounts and does not ask for
                payment details. If you use the contact form, the details you
                enter are used to prepare an email to {company.email}. The
                website does not store those details on a server.
              </p>

              <h2>How the form works</h2>
              <p>
                The form builds an email in your own email application. Nothing
                is sent until you press send in that application. The message
                then arrives in the Crest inbox and is handled like any other
                business enquiry.
              </p>

              <h2>Cookies and analytics</h2>
              <p>
                This version of the site does not set advertising cookies and
                does not run third-party analytics. If analytics are added
                later, this page will be updated before they go live.
              </p>

              <h2>Your choices</h2>
              <p>
                You can ask us what we hold about you, ask for a correction, or
                ask us to delete an enquiry. Write to {company.email} and say
                what you need. We will respond within a reasonable period.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this page can be sent to {company.email}. The
                company&apos;s registered details are available on request.
              </p>
            </div>

            <div className="mt-10 border-l-2 border-signal bg-paper-deep px-5 py-4">
              <p className="font-mono text-[9px] tracking-[0.14em] text-signal-deep uppercase">
                Working draft
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                This is a starting privacy notice, not legal advice. Have it
                reviewed against the company&apos;s actual data handling and the
                applicable law before launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
