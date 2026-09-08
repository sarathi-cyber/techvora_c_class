import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
  {
    q: "Do I need prior programming experience?",
    a: "No. The Master Class is genuinely beginner friendly. We start from absolute fundamentals — what a program is, how C thinks — and build upward, one concept at a time.",
  },
  {
    q: "What will I be able to do after 20 hours?",
    a: "You will write structured C programs on your own, reason about conditions, loops and functions, work with arrays, strings, pointers and structures, and approach programming challenges with a logical method instead of guesswork.",
  },
  {
    q: "How do I register?",
    a: "Registration happens exclusively through the official Google Form linked on this page. It opens in a new, isolated browser tab — this website never sees, stores or processes your answers.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. A Certificate of Completion is awarded to participants who complete the 20-hour program requirements, including the practical coding sessions.",
  },
  {
    q: "Does this website collect my personal data?",
    a: "No. This page sets no cookies, runs no analytics and collects nothing. It is a static, read-only experience. The only data moment is the registration form itself, which is operated by Google under its own privacy policy.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="QUESTIONS"
          title="BEFORE YOU BEGIN"
          description="Straight answers, no fine print."
        />

        <div className="mt-14 space-y-4">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group rounded-xl border border-white/[0.06] bg-ink-900/70 transition-colors duration-300 open:border-gold-500/30 hover:border-gold-500/25">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 font-display text-[15px] font-semibold tracking-wide text-cream-100 select-none sm:px-7 sm:text-base">
                  {faq.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-gold-400 transition-colors group-open:bg-gold-500/10">
                    <Plus size={14} strokeWidth={2.6} aria-hidden="true" className="faq-icon transition-transform duration-300" />
                  </span>
                </summary>
                <div className="px-6 pb-6 sm:px-7">
                  <p className="border-t border-white/[0.05] pt-4 text-[14.5px] leading-relaxed text-cream-500">
                    {faq.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
