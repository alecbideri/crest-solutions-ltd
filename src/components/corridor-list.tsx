import { company } from "@/content/company";

export function CorridorList() {
  return (
    <ol className="relative ml-1 border-l border-line">
      {company.corridor.map((node) => (
        <li key={node.city} className="relative pb-9 pl-7 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-[7px] -left-[4.5px] h-2 w-2 bg-signal"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
            <p className="text-lg tracking-[-0.02em]">
              {node.city}
              <span className="ml-2 text-sm text-muted">{node.country}</span>
            </p>
            <span className="font-mono text-[10px] tracking-[0.06em] text-muted">
              {node.coordinates}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">{node.role}</p>
        </li>
      ))}
    </ol>
  );
}
