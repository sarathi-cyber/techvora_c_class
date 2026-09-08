import type { ReactNode } from "react";
import { ArrowLeft, Terminal } from "lucide-react";
import { SITE } from "@/lib/site";

interface PolicyShellProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/** Shared chrome for standalone legal documents (Privacy / Terms). */
export function PolicyShell({ title, updated, children }: PolicyShellProps) {
  return (
    <div className="min-h-screen bg-ink-950">
      <header className="border-b border-gold-500/10 bg-ink-900/60">
        <div className="mx-auto flex h-[72px] max-w-4xl items-center justify-between px-5 sm:px-8">
          <a href="#/" className="flex items-center gap-3" aria-label="Techvora Academy — home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950">
              <Terminal size={17} strokeWidth={2.4} aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.18em] text-cream-50">
              TECHVORA <span className="text-gold-400">ACADEMY</span>
            </span>
          </a>
          <a
            href="#/"
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-cream-500 transition-colors hover:text-gold-300"
          >
            <ArrowLeft size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
            BACK TO HOME
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-[10.5px] tracking-[0.34em] text-gold-500">{SITE.name} — LEGAL</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl">{title}</h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-cream-600">LAST UPDATED: {updated}</p>
        <div className="mt-12 space-y-10">{children}</div>

        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-[11px] tracking-[0.22em] text-gold-500 hover:text-gold-300"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </main>
    </div>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="flex items-center gap-3 font-display text-xl font-bold tracking-wide text-gold-300">
        <span aria-hidden="true" className="inline-block h-px w-6 bg-gold-500/50" />
        {title}
      </h2>
      <div className="mt-4 space-y-3.5 pl-9 text-[14.5px] leading-relaxed text-cream-300">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-gold-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
