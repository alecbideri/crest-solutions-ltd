import { Plus } from "@phosphor-icons/react/dist/ssr";

const faqs = [
  {
    question: "How quickly can you mobilise?",
    answer:
      "For a defined movement or a site mobilisation, we can usually return a costed plan within five working days. Urgent movements are assessed the same day. The answer depends on the route, the permits and the site.",
  },
  {
    question: "Do you work outside Rwanda?",
    answer:
      "Yes. We source and consolidate in Dubai, China and other origin markets, then deliver across the East African corridor. The corridor list on this site shows current coverage, not a set of offices.",
  },
  {
    question: "Can you handle both logistics and construction?",
    answer:
      "That is the point of the company. One team can hold the origin sourcing, inbound movement, site logistics and finishing works under a single plan, with one lead accountable for the whole scope.",
  },
  {
    question: "How do you handle safety and compliance?",
    answer:
      "Every engagement starts with a risk register, a method statement and a named QHSE lead. Close-out includes the inspection record, the incident record and the handover file.",
  },
];

export function Faq() {
  return (
    <div className="border-t border-line">
      {faqs.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              size={18}
              aria-hidden="true"
              className="shrink-0 text-signal transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-[64ch] pb-5 text-sm leading-relaxed text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
