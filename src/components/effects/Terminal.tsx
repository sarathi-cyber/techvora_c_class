import { useEffect, useMemo, useRef, useState } from "react";
import { Lock } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Segment = { t: string; c?: string };
type Line = { segs: Segment[]; instant?: boolean };

const SCRIPT: Line[] = [
  { segs: [{ t: "$ ", c: "text-gold-400" }, { t: "whoami" }] },
  { segs: [{ t: "techvora.student", c: "text-cream-500" }], instant: true },
  { segs: [{ t: "$ ", c: "text-gold-400" }, { t: "cat module_01.c" }] },
  { segs: [{ t: "#include ", c: "text-gold-300" }, { t: "<stdio.h>", c: "text-cream-300" }] },
  { segs: [{ t: "" }], instant: true },
  { segs: [{ t: "int ", c: "text-gold-400" }, { t: "main", c: "text-cream-50" }, { t: "(void) ", c: "text-cream-300" }, { t: "{", c: "text-gold-300" }] },
  { segs: [{ t: "    printf", c: "text-cream-100" }, { t: "(", c: "text-gold-300" }, { t: '"Hello, Techvora!\\n"', c: "text-gold-200" }, { t: ");", c: "text-gold-300" }] },
  { segs: [{ t: "    return ", c: "text-gold-400" }, { t: "0", c: "text-gold-200" }, { t: ";", c: "text-gold-300" }] },
  { segs: [{ t: "}", c: "text-gold-300" }] },
  { segs: [{ t: "$ ", c: "text-gold-400" }, { t: "gcc module_01.c -o master" }] },
  { segs: [{ t: "compiled — 0 errors, 0 warnings", c: "text-cream-500" }], instant: true },
  { segs: [{ t: "$ ", c: "text-gold-400" }, { t: "./master" }] },
  { segs: [{ t: "Hello, Techvora!", c: "text-cream-50" }], instant: true },
  { segs: [{ t: "20 hours. 8 modules. 1 strong foundation.", c: "text-gold-300" }], instant: true },
];

const lineLength = (line: Line) => line.segs.reduce((n, s) => n + s.t.length, 0);

/** Renders `count` visible characters of a line, segmented by color. */
function PartialLine({ line, count }: { line: Line; count: number }) {
  let remaining = count;
  return (
    <>
      {line.segs.map((seg, i) => {
        if (remaining <= 0) return null;
        const text = seg.t.slice(0, remaining);
        remaining -= seg.t.length;
        return text ? (
          <span key={i} className={seg.c ?? "text-cream-100"}>
            {text}
          </span>
        ) : null;
      })}
    </>
  );
}

/**
 * Cinematic C-code terminal: types the session on loop.
 * Reduced motion → fully rendered static frame.
 */
export function Terminal() {
  const reducedMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  const totalLines = SCRIPT.length;
  const finished = lineIdx >= totalLines;

  useEffect(() => {
    if (reducedMotion) return;
    let timer: ReturnType<typeof setTimeout>;

    if (finished) {
      timer = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, 5200);
      return () => clearTimeout(timer);
    }

    const line = SCRIPT[lineIdx];
    const len = lineLength(line);

    if (charIdx >= len) {
      timer = setTimeout(() => {
        setLineIdx((v) => v + 1);
        setCharIdx(0);
      }, line.instant ? 240 : 420);
      return () => clearTimeout(timer);
    }

    const step = line.instant ? 4 : line.segs[0]?.t.startsWith("$") ? 42 : 22;
    timer = setTimeout(() => setCharIdx((v) => v + (line.instant ? len : 1)), step);
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx, finished, reducedMotion]);

  // Subtle pointer tilt — skipped for touch/reduced-motion users.
  const onPointerMove = (event: React.PointerEvent) => {
    if (reducedMotion || event.pointerType === "touch") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1100px) rotateX(${(-py * 4.5).toFixed(2)}deg) rotateY(${(px * 5.5).toFixed(2)}deg) translateZ(0)`;
  };
  const onPointerLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  };

  const visibleLines = useMemo(() => {
    if (reducedMotion) return SCRIPT.map((line) => ({ line, count: lineLength(line) }));
    return SCRIPT.slice(0, Math.min(lineIdx + 1, totalLines)).map((line, i) => ({
      line,
      count: i < lineIdx ? lineLength(line) : Math.min(charIdx, lineLength(line)),
    }));
  }, [reducedMotion, lineIdx, charIdx, totalLines]);

  return (
    <div
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative overflow-hidden rounded-2xl border border-gold-500/15 bg-ink-900/90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-transform duration-300 ease-out will-change-transform"
      role="img"
      aria-label="Animated terminal showing a C program being compiled and run during a Techvora Academy session"
    >
      {/* Gold aura behind top edge */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-ink-850/80 px-4 py-3">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-gold-500/70" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-cream-600/40" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="ml-3 font-mono text-[11px] tracking-wider text-cream-500">
          techvora@c-master · session-01
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-gold-500/80">
          <Lock aria-hidden="true" size={11} strokeWidth={2} />
          SECURE
        </span>
      </div>

      {/* Session body — fixed height prevents layout shift while typing */}
      <div className="min-h-[300px] p-5 font-mono text-[12.5px] leading-[1.75] sm:min-h-[330px] sm:text-[13.5px]">
        {visibleLines.map(({ line, count }, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            <PartialLine line={line} count={count} />
            {i === visibleLines.length - 1 && !finished && (
              <span aria-hidden="true" className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[0.18em] animate-blink bg-gold-400" />
            )}
          </div>
        ))}
        {(finished || reducedMotion) && (
          <div>
            <span className="text-gold-400">$ </span>
            <span aria-hidden="true" className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[0.18em] animate-blink bg-gold-400" />
          </div>
        )}
      </div>

      {/* Baseline status strip */}
      <div className="flex items-center justify-between border-t border-white/5 bg-ink-850/60 px-4 py-2.5 font-mono text-[10px] tracking-[0.22em] text-cream-600">
        <span>GNU C · GCC</span>
        <span className="text-gold-600">MODULE 01 / 08</span>
      </div>
    </div>
  );
}
