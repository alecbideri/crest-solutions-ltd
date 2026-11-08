"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import { company } from "@/content/company";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${company.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-ink"
    >
      {copied ? (
        <Check size={13} aria-hidden="true" className="text-signal-deep" />
      ) : (
        <Copy size={13} aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy address"}
    </button>
  );
}
