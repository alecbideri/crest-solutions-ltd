"use client";

import { Printer } from "@phosphor-icons/react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-print-hide
      className="btn btn-ghost"
    >
      <Printer size={15} aria-hidden="true" />
      Print profile
    </button>
  );
}
