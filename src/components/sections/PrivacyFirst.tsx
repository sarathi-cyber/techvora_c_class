import { ArrowRight, ClipboardList, EyeOff, LockKeyhole, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Assurance {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ASSURANCES: Assurance[] = [
  {
    icon: ShieldCheck,
    title: "ZERO DATA COLLECTION",
    description: "This page has no forms, no accounts and no sign-ups of its own.",
  },
  {
    icon: EyeOff,
    title: "NO TRACKERS OR COOKIES",
    description: "No analytics pixels, no fingerprinting, no hidden third-party calls.",
  },
  {
    icon: ClipboardList,
    title: "GOOGLE FORMS ONLY",
    description: "Enrollment happens exclusively on Google's secure form platform.",
  },
  {
    icon: LockKeyhole,
    title: "HARDENED BY DEFAULT",
    description: "Strict Content Security Policy, no third-party scripts, isolated external tabs.",
  },
];

export function PrivacyFirst() {
  return (
    <section aria-labelledby="privacy-first-heading" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/15 bg-gradient-to-b from-ink-850 to-ink-900 px-7 py-12 sm:px-12 sm:py-14">
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold-500/[0.07] blur-[90px]" />

            <div className="relative flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.35em] text-gold-500">
                  <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-500/60" />
                  PRIVACY & SECURITY
                </p>
                <h2 id="privacy-first-heading" className="mt-4 font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl">
                  PRIVATE BY DESIGN
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-cream-500">
                  What this website itself does — and does not — collect. Clear, honest and verifiable in your own
                  browser tools.
                </p>
              </div>
              <a
                href="#/privacy"
                className="group inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.2em] text-gold-400 transition-colors hover:text-gold-300"
              >
                READ THE PRIVACY NOTICE
                <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {ASSURANCES.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 ring-1 ring-gold-500/20">
                    <item.icon size={17} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[13px] font-bold tracking-[0.08em] text-cream-100">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-cream-500">
                      {item.description}
                      {i === 0 && <span className="sr-only">See the linked privacy notice for full details.</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
