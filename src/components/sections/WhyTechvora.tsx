import { Award, Check, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  "Structured 20-hour curriculum",
  "Practical coding sessions",
  "Beginner-friendly learning",
  "Hands-on coding challenges",
  "Logic & problem-solving practice",
  "Certificate of Completion",
];

export function WhyTechvora() {
  return (
    <section id="why" aria-labelledby="why-heading" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute top-0 left-1/2 h-px w-[min(80rem,90%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div aria-hidden="true" className="absolute right-[-140px] bottom-[-140px] h-[380px] w-[380px] rounded-full bg-gold-500/[0.05] blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Pillars */}
        <div>
          <SectionHeading
            align="left"
            id="why-heading"
            eyebrow="WHY TECHVORA?"
            title="BUILT FOR REAL FOUNDATIONS"
            description="We teach the C language the way it deserves to be taught — with structure, patience and relentless practice."
          />
          <ul className="mt-12 space-y-5">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar} delay={i * 70}>
                <li className="group flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-all duration-500 group-hover:bg-gold-500/20 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.3)]">
                    <Check size={15} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[15.5px] font-medium text-cream-100 sm:text-base">{pillar}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={460}>
            <p className="mt-12 max-w-md border-l-2 border-gold-500/40 pl-5 text-sm leading-relaxed text-cream-500">
              No inflated statistics. No borrowed testimonials. Just a clear structure, honest teaching and twenty
              hours of deliberate practice.
            </p>
          </Reveal>
        </div>

        {/* Certificate visual */}
        <Reveal delay={200} className="relative">
          <div aria-hidden="true" className="absolute inset-8 rounded-full bg-gold-500/[0.08] blur-[90px]" />
          <div className="relative mx-auto max-w-md rotate-2 rounded-2xl border border-gold-500/30 bg-gradient-to-br from-ink-800 to-ink-900 p-8 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out hover:rotate-0 sm:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-xl border border-gold-500/15" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.34em] text-gold-500">TECHVORA ACADEMY</p>
                <ShieldCheck size={18} aria-hidden="true" className="text-gold-500/80" />
              </div>
              <p className="mt-10 text-center font-display text-3xl font-bold tracking-[0.08em] sm:text-4xl">
                <span className="text-gradient-gold">CERTIFICATE</span>
              </p>
              <p className="mt-2 text-center font-mono text-[10px] tracking-[0.5em] text-cream-300">OF COMPLETION</p>
              <div aria-hidden="true" className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
              <p className="mt-8 text-center font-mono text-[11px] leading-relaxed tracking-[0.22em] text-cream-500">
                20-HOUR C MASTER CLASSES
                <br />
                <span className="text-gold-400/80">LEARN · PRACTICE · BUILD · SUCCEED</span>
              </p>
              <div className="mt-10 flex items-end justify-between">
                <div className="text-center">
                  <div aria-hidden="true" className="h-px w-24 bg-cream-600/40" />
                  <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-cream-600">PROGRAM LEAD</p>
                </div>
                <div className="text-center">
                  <div aria-hidden="true" className="h-px w-24 bg-cream-600/40" />
                  <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-cream-600">DATE</p>
                </div>
              </div>
            </div>
            {/* Seal */}
            <div className="absolute -right-5 -bottom-5 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_0_34px_rgba(212,175,55,0.45)] ring-4 ring-ink-900">
              <Award size={30} strokeWidth={2.2} aria-hidden="true" className="text-ink-950" />
            </div>
          </div>
          <p className="mt-8 text-center font-mono text-[10px] tracking-[0.3em] text-cream-600">
            AWARDED UPON COMPLETING THE PROGRAM REQUIREMENTS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
