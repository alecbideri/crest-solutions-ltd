import { company } from "@/content/company";

export function CorridorTimeline() {
  return (
    <ol className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-4 xl:grid-cols-7">
      {company.corridor.map((node) => (
        <li
          key={node.city}
          className="relative border-r border-b border-line p-4 pt-6"
        >
          <span
            aria-hidden="true"
            className="absolute top-[-4.5px] left-4 h-2 w-2 bg-signal"
          />
          <p className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
            {node.country}
          </p>
          <p className="mt-2 text-base tracking-[-0.02em]">{node.city}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{node.role}</p>
          <p className="mt-3 font-mono text-[9px] tracking-[0.04em] text-muted">
            {node.coordinates}
          </p>
        </li>
      ))}
    </ol>
  );
}
