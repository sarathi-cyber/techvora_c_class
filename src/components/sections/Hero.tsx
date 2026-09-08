import { ArrowRight, Award } from "lucide-react";
import { SITE } from "@/lib/site";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { GoldParticles } from "@/components/effects/GoldParticles";
import { Terminal } from "@/components/effects/Terminal";
import { Reveal } from "@/components/ui/Reveal";

const GRID_BG =
  "linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="noise relative flex min-h-[100svh] items-center overflow-hidden">
      {/* ── Cinematic atmosphere (decorative) ── */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: GRID_BG,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 75%)",
          }}
        />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/[0.09] blur-[130px]" />
        <div className="absolute right-[-160px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-gold-600/[0.07] blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>
      <GoldParticles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-24 sm:px-8 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* ── Copy ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.42em] text-gold-500">
                <span aria-hidden="true" className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-gold-500" />
                {SITE.name}
              </p>
              <p className="mt-4 font-mono text-[11px] tracking-[0.42em] text-cream-500">PROUDLY PRESENTS</p>
            </Reveal>

            <Reveal delay={120}>
              <h1 id="hero-heading" className="mt-7 font-display text-[clamp(3.4rem,10.5vw,7.6rem)] leading-[0.9] font-bold tracking-tight">
                <span className="text-stroke-gold block">20-HOUR</span>
                <span className="block text-cream-50">C&nbsp;MASTER</span>
                <span className="text-gradient-gold block drop-shadow-[0_0_36px_rgba(212,175,55,0.28)]">CLASSES</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-lg leading-snug font-medium text-cream-100 sm:text-xl">
                Master the fundamentals. Strengthen your logic. Start coding with confidence.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream-500 sm:text-base">
                A focused 20-hour programming experience designed to build strong C fundamentals, logical thinking and
                practical coding skills.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ExternalLink
                  href={SITE.registrationUrl}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 px-9 py-4 font-display text-sm font-bold tracking-[0.14em] text-ink-950 shadow-gold-glow transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.45)] hover:brightness-110 active:scale-[0.98]"
                >
                  REGISTER NOW
                  <ArrowRight size={17} strokeWidth={2.6} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </ExternalLink>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-50/15 px-9 py-4 font-display text-sm font-semibold tracking-[0.14em] text-cream-100 transition-all duration-300 hover:border-gold-500/50 hover:text-gold-300 active:scale-[0.98]"
                >
                  EXPLORE THE MASTER CLASS
                </a>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <p className="mt-11 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] tracking-[0.32em] text-cream-500">
                <span>20 HOURS</span>
                <span aria-hidden="true" className="text-gold-500">•</span>
                <span>PRACTICAL</span>
                <span aria-hidden="true" className="text-gold-500">•</span>
                <span>BEGINNER FRIENDLY</span>
              </p>
            </Reveal>
          </div>

          {/* ── Terminal ── */}
          <div className="relative lg:col-span-5">
            <Reveal delay={260}>
              <div className="animate-float-y">
                <Terminal />
              </div>
              <div className="absolute -bottom-7 -left-4 hidden items-center gap-3 rounded-xl border border-gold-500/25 bg-ink-900/95 px-4 py-3 shadow-card backdrop-blur-md sm:-left-8 md:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                  <Award size={17} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] leading-relaxed tracking-[0.18em] text-cream-300">
                  CERTIFICATE OF
                  <br />
                  <span className="text-gold-400">COMPLETION</span>
                </span>
              </div>
              <div className="absolute -top-6 right-6 hidden rounded-full border border-cream-50/10 bg-ink-900/90 px-4 py-2 font-mono text-[10px] tracking-[0.26em] text-cream-500 backdrop-blur-md md:block">
                C · 20 HRS
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden="true" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[9px] tracking-[0.5em] text-cream-600">SCROLL</span>
        <span className="h-12 w-px animate-pulse-soft bg-gradient-to-b from-gold-500/70 to-transparent" />
      </div>
    </section>
  );
}
