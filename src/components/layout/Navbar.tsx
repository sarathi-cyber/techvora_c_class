import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { ExternalLink } from "@/components/ui/ExternalLink";

const NAV_LINKS = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Journey", href: "#journey" },
  { label: "Why Techvora", href: "#why" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gold-500/10 bg-ink-950/85 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Techvora Academy — back to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950 shadow-gold-glow transition-transform duration-300 group-hover:scale-105">
            <Terminal size={17} strokeWidth={2.4} aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.18em] text-cream-50">
            TECHVORA <span className="text-gold-400">ACADEMY</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11.5px] font-medium tracking-[0.22em] text-cream-500 uppercase transition-colors duration-300 hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ExternalLink
            href={SITE.registrationUrl}
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-600 px-5 py-2.5 font-display text-[12.5px] font-bold tracking-[0.12em] text-ink-950 shadow-[0_0_22px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(212,175,55,0.42)] hover:brightness-110 active:scale-[0.97] sm:inline-flex"
          >
            REGISTER
            <ArrowUpRight size={14} strokeWidth={2.6} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ExternalLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-cream-50/10 text-cream-100 transition-colors hover:border-gold-500/40 hover:text-gold-300 lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gold-500/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 font-mono text-[12.5px] tracking-[0.22em] text-cream-100 uppercase transition-colors hover:bg-gold-500/5 hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <ExternalLink
              href={SITE.registrationUrl}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-600 px-5 py-3.5 font-display text-[13px] font-bold tracking-[0.14em] text-ink-950"
            >
              REGISTER NOW
              <ArrowUpRight size={15} strokeWidth={2.6} aria-hidden="true" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
