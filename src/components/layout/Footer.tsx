import { Instagram, Mail, MessageCircle, ShieldCheck, Terminal, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";
import { ExternalLink } from "@/components/ui/ExternalLink";

const EXPLORE_LINKS = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "The Journey", href: "#journey" },
  { label: "Why Techvora", href: "#why" },
  { label: "FAQ", href: "#faq" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Notice", href: "#/privacy" },
  { label: "Terms of Use", href: "#/terms" },
  { label: "Contact", href: `mailto:${SITE.contactEmail}` },
] as const;

/** Placeholder social channels — wired up when official handles are announced. */
const SOCIALS = [
  { icon: Instagram, label: "Instagram (coming soon)" },
  { icon: MessageCircle, label: "WhatsApp channel (coming soon)" },
  { icon: Youtube, label: "YouTube (coming soon)" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-500/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Techvora Academy — back to top">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950">
                <Terminal size={17} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-bold tracking-[0.18em] text-cream-50">
                TECHVORA <span className="text-gold-400">ACADEMY</span>
              </span>
            </a>
            <p className="mt-5 font-mono text-[10.5px] tracking-[0.34em] text-gold-500">{SITE.tagline}</p>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-cream-500">
              A focused 20-hour programming experience designed to build strong C fundamentals, logical thinking and
              practical coding skills.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream-50/10 text-cream-500 transition-colors duration-300 hover:border-gold-500/40 hover:text-gold-300"
                >
                  <social.icon size={15} strokeWidth={2} aria-hidden="true" />
                </a>
              ))}
              <a
                href={`mailto:${SITE.contactEmail}`}
                aria-label="Email Techvora Academy"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream-50/10 text-cream-500 transition-colors duration-300 hover:border-gold-500/40 hover:text-gold-300"
              >
                <Mail size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer — explore">
            <h3 className="font-mono text-[10.5px] tracking-[0.34em] text-cream-600">EXPLORE</h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13.5px] text-cream-300 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Footer — legal">
            <h3 className="font-mono text-[10.5px] tracking-[0.34em] text-cream-600">LEGAL & TRUST</h3>
            <ul className="mt-5 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13.5px] text-cream-300 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Registration */}
          <div>
            <h3 className="font-mono text-[10.5px] tracking-[0.34em] text-cream-600">REGISTRATION</h3>
            <p className="mt-5 text-[13.5px] leading-relaxed text-cream-500">
              Enrollment is handled safely through the official Google Form — never through this website.
            </p>
            <ExternalLink
              href={SITE.registrationUrl}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-6 py-3 font-display text-[12px] font-bold tracking-[0.14em] text-gold-300 transition-all duration-300 hover:bg-gold-500/10 hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
            >
              OPEN THE FORM
            </ExternalLink>
            <p className="mt-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-cream-600">
              <ShieldCheck size={13} aria-hidden="true" className="shrink-0 text-gold-600" />
              THIS PAGE COLLECTS NO PERSONAL DATA
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-7 sm:flex-row">
          <p className="font-mono text-[10px] tracking-[0.22em] text-cream-600">
            © {year} TECHVORA ACADEMY. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] text-cream-600">
            SECURITY-FOCUSED · PRIVACY BY DESIGN
          </p>
        </div>
      </div>
    </footer>
  );
}
