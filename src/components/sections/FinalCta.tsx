import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { GoldParticles } from "@/components/effects/GoldParticles";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="noise relative overflow-hidden py-28 sm:py-40">
      {/* Atmosphere */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.1] blur-[140px]" />
        <svg
          className="absolute top-1/2 left-1/2 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-30"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48.5" stroke="#d4af37" strokeOpacity="0.35" strokeWidth="0.35" strokeDasharray="0.6 2.4" />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 h-[min(70vw,420px)] w-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2 opacity-40"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="49" stroke="#d4af37" strokeOpacity="0.2" strokeWidth="0.25" />
        </svg>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>
      <GoldParticles />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.42em] text-gold-500">ENROLLMENT OPEN</p>
        </Reveal>
        <Reveal delay={120}>
          <h2
            id="final-cta-heading"
            className="text-gradient-gold mt-6 font-display text-[clamp(2.9rem,9vw,6.8rem)] leading-[0.95] font-bold tracking-tight drop-shadow-[0_0_44px_rgba(212,175,55,0.3)]"
          >
            READY TO BEGIN?
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-7 max-w-xl text-lg text-cream-100 sm:text-xl">
            Your first step into serious programming starts here.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-12">
            <ExternalLink
              href={SITE.registrationUrl}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 px-10 py-5 font-display text-sm font-bold tracking-[0.14em] text-ink-950 shadow-[0_0_44px_rgba(212,175,55,0.35)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)] hover:brightness-110 active:scale-[0.98] sm:px-14"
            >
              REGISTER FOR THE MASTER CLASS
              <ArrowRight size={18} strokeWidth={2.6} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </ExternalLink>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10.5px] tracking-[0.32em] text-cream-500">
            <span>20 HOURS</span>
            <span aria-hidden="true" className="text-gold-500">•</span>
            <span>C PROGRAMMING</span>
            <span aria-hidden="true" className="text-gold-500">•</span>
            <span>TECHVORA ACADEMY</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
