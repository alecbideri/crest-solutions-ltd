import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="shell flex min-h-[62dvh] flex-col justify-center py-16 md:py-24">
        <p className="label">404</p>
        <h1 className="display-xl mt-5 max-w-[14ch]">
          This route is not on the map.
        </h1>
        <p className="body-lg mt-6 max-w-[46ch] text-muted">
          The page may have moved, or the link may be wrong. Start again from
          the work, or tell us what you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
