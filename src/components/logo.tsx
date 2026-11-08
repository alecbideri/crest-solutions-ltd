import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  light?: boolean;
  showDescriptor?: boolean;
};

export function Logo({ className, light = false, showDescriptor = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
        fill="none"
      >
        <path
          d="M4.5 26 16 5l11.5 21"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="miter"
        />
        <path
          d="M10.5 26 16 16l5.5 10"
          stroke="var(--color-signal)"
          strokeWidth="2.2"
          strokeLinejoin="miter"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-[-0.065em]">
          CREST
        </span>
        {showDescriptor ? (
          <span
            className={cn(
              "mt-1 font-mono text-[7.5px] tracking-[0.22em]",
              light ? "text-bone/55" : "text-muted",
            )}
          >
            SOLUTIONS LTD
          </span>
        ) : null}
      </span>
    </span>
  );
}
