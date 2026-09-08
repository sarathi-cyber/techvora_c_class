import { Diamond } from "lucide-react";

const KEYWORDS = [
  "VARIABLES",
  "POINTERS",
  "LOOPS",
  "FUNCTIONS",
  "ARRAYS & STRINGS",
  "STRUCTURES",
  "PROBLEM SOLVING",
  "LOGIC & MEMORY",
  "20 HOURS",
  "CERTIFICATE",
];

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex w-max shrink-0 items-center">
      {KEYWORDS.map((word) => (
        <li key={word} className="flex items-center">
          <span className="px-7 font-mono text-[11px] tracking-[0.42em] whitespace-nowrap text-cream-500">{word}</span>
          <Diamond size={8} aria-hidden="true" className="shrink-0 fill-gold-500/70 text-gold-500/70" />
        </li>
      ))}
    </ul>
  );
}

/** Slow, edge-masked keyword ticker. Pure CSS transform — GPU only. */
export function Marquee() {
  return (
    <div
      aria-label="Course topics ticker"
      className="relative overflow-hidden border-y border-gold-500/10 bg-ink-900/70 py-5"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
