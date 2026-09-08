import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", id }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : "text-left"}>
      <p
        className={`flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.35em] text-gold-500 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-500/60" />
        {eyebrow}
        {centered && <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-500/60" />}
      </p>
      <h2 id={id} className="mt-5 scroll-mt-28 font-display text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed text-cream-500 sm:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
