import { useEffect, useRef, useState } from "react";
import { Brain, Code2, Compass, Hammer, Trophy, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Step {
  icon: LucideIcon;
  num: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  { icon: Compass, num: "01", title: "UNDERSTAND", description: "Learn the fundamentals." },
  { icon: Code2, num: "02", title: "PRACTICE", description: "Write C programs." },
  { icon: Brain, num: "03", title: "SOLVE", description: "Develop logical thinking." },
  { icon: Hammer, num: "04", title: "BUILD", description: "Apply your knowledge." },
  { icon: Trophy, num: "05", title: "MASTER", description: "Strengthen your C programming foundation." },
];

/**
 * Scroll-driven golden timeline. A progress line fills as you travel,
 * and each node ignites when it enters the viewport — keyboard and
 * screen-reader users get the same content as an ordered list.
 */
export function Journey() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const reducedMotion = usePrefersReducedMotion();

  // Progress line — passive scroll, rAF-throttled, CSS var only.
  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    if (reducedMotion) {
      line.style.transform = "scaleY(1)";
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.62;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / rect.height));
      line.style.transform = `scaleY(${progress.toFixed(4)})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  // One observer for all steps, created once after mount.
  const listRef = useRef<HTMLOListElement | null>(null);
  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === "undefined") return;
    const items = Array.from(list.querySelectorAll(":scope > li"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = items.indexOf(entry.target as HTMLLIElement);
            if (index >= 0) setActiveStep((current) => Math.max(current, index));
          }
        }
      },
      { threshold: 0.55 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" aria-labelledby="journey-heading" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute top-1/3 left-[-180px] h-[420px] w-[420px] rounded-full bg-gold-600/[0.06] blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="journey-heading"
          eyebrow="THE 20-HOUR JOURNEY"
          title="FIVE PHASES. ONE FOUNDATION."
          description="A deliberate progression from first principles to confident, independent problem solving."
        />

        <div ref={sectionRef} className="relative mt-20">
          {/* Track */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[23px] w-px bg-white/[0.07] md:left-1/2" />
          {/* Golden progress */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[23px] w-px origin-top scale-y-0 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 shadow-[0_0_14px_rgba(212,175,55,0.55)] md:left-1/2"
          />

          <ol ref={listRef} className="space-y-14 md:space-y-20">
            {STEPS.map((step, i) => {
              const isActive = reducedMotion || activeStep >= i;
              const leftSide = i % 2 === 0;
              return (
                <li key={step.num} className="relative md:grid md:grid-cols-2 md:gap-24">
                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-1 left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-700 md:left-1/2 md:-translate-x-1/2 ${
                      isActive
                        ? "border-gold-400/60 bg-gold-500/15 text-gold-300 shadow-[0_0_28px_rgba(212,175,55,0.4)]"
                        : "border-white/10 bg-ink-900 text-cream-600"
                    }`}
                  >
                    <step.icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>

                  <div
                    className={`pl-20 md:pl-0 ${
                      leftSide ? "md:col-start-1 md:pr-4 md:text-right" : "md:col-start-2 md:pl-4 md:text-left"
                    }`}
                  >
                    <Reveal delay={i * 60}>
                      <div
                        className={`relative inline-block w-full rounded-2xl border p-7 transition-all duration-700 sm:p-8 ${
                          isActive
                            ? "border-gold-500/25 bg-gradient-to-b from-ink-800/80 to-ink-900/80"
                            : "border-white/[0.05] bg-ink-900/50"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute top-4 font-display text-6xl font-bold transition-colors duration-700 sm:text-7xl ${
                            leftSide ? "right-6" : "left-6"
                          } ${isActive ? "text-gold-500/[0.13]" : "text-white/[0.035]"}`}
                        >
                          {step.num}
                        </span>
                        <p className={`font-mono text-[11px] tracking-[0.3em] transition-colors duration-700 ${isActive ? "text-gold-500" : "text-cream-600"}`}>
                          {step.num} — PHASE
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-bold tracking-[0.06em] text-cream-50 sm:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-cream-500">{step.description}</p>
                      </div>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
