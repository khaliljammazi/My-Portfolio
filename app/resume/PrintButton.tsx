"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-sm font-medium hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-all"
    >
      Print / Save PDF
    </button>
  );
}
