import {
  Boxes,
  Braces,
  Brackets,
  Brain,
  GitBranch,
  LocateFixed,
  Repeat,
  SquareFunction,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Module {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const MODULES: Module[] = [
  { icon: Braces, title: "C FUNDAMENTALS", description: "Variables, data types, operators and expressions.", tag: "int main(void)" },
  { icon: GitBranch, title: "DECISION MAKING", description: "Conditions, branching and logical thinking.", tag: "if / else" },
  { icon: Repeat, title: "LOOPS", description: "Iteration, patterns and repetitive problem solving.", tag: "for (i = 0; …)" },
  { icon: SquareFunction, title: "FUNCTIONS", description: "Modular programming and reusable logic.", tag: "int solve()" },
  { icon: Brackets, title: "ARRAYS & STRINGS", description: "Working with collections of data and text.", tag: "char name[20]" },
  { icon: LocateFixed, title: "POINTERS", description: "Understanding memory and pointers in C.", tag: "int *ptr" },
  { icon: Boxes, title: "STRUCTURES", description: "Organizing and managing complex data.", tag: "struct student" },
  { icon: Brain, title: "PROBLEM SOLVING", description: "Apply concepts through programming challenges.", tag: "while (!solved)" },
];

export function Curriculum() {
  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute top-0 left-1/2 h-px w-[min(80rem,90%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="curriculum-heading"
          eyebrow="THE CURRICULUM"
          title="WHAT YOU WILL MASTER"
          description="Eight carefully sequenced modules. Each hour is engineered to move you from reading code to reasoning about it — and writing it with intent."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((mod, i) => (
            <Reveal key={mod.title} delay={(i % 4) * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-ink-850 to-ink-900 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/35 hover:shadow-[0_24px_60px_-24px_rgba(212,175,55,0.22)]">
                {/* Hover aura */}
                <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gold-500/0 blur-3xl transition-all duration-700 group-hover:bg-gold-500/12" />

                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 ring-1 ring-gold-500/20 transition-all duration-500 group-hover:bg-gold-500/15 group-hover:text-gold-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                    <mod.icon size={19} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span aria-hidden="true" className="font-mono text-[11px] tracking-[0.2em] text-gold-600/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[15.5px] font-bold tracking-[0.08em] text-cream-50">
                  {mod.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-cream-500">{mod.description}</p>

                <p className="mt-6 w-fit rounded-md border border-white/[0.06] bg-ink-950/80 px-2.5 py-1 font-mono text-[10.5px] text-gold-300/80">
                  {mod.tag}
                </p>

                <span aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
