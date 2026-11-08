import { cn } from "@/lib/cn";

type Step = {
  title: string;
  body: string;
};

type StepListProps = {
  steps: Step[];
  tone?: "light" | "dark";
};

export function StepList({ steps, tone = "light" }: StepListProps) {
  const dark = tone === "dark";

  return (
    <ol className={cn("border-t", dark ? "border-bone/15" : "border-line")}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "grid grid-cols-[34px_1fr] gap-5 border-b py-6 md:grid-cols-[54px_1fr] md:gap-8 md:py-7",
            dark ? "border-bone/15" : "border-line",
          )}
        >
          <span
            className={cn(
              "pt-1 font-mono text-[10px] tracking-[0.12em]",
              dark ? "text-signal-bright" : "text-signal-deep",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3
              className={cn(
                "text-lg leading-tight tracking-[-0.02em] md:text-xl",
                dark ? "text-bone" : "text-ink",
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                "mt-2 max-w-[58ch] text-sm leading-relaxed md:text-[15px]",
                dark ? "text-bone/60" : "text-muted",
              )}
            >
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
