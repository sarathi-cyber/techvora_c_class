/**
 * Central site configuration.
 *
 * SECURITY NOTES
 * ──────────────
 * • The registration link is the ONLY external destination used by the app.
 * • It is always opened in a new tab with rel="noopener noreferrer"
 *   (see components/ui/ExternalLink.tsx).
 * • No personal data is collected, stored, or transmitted by this site.
 * • There are no API keys, secrets, or credentials anywhere in this repo.
 */

export const SITE = {
  name: "TECHVORA ACADEMY",
  tagline: "LEARN • PRACTICE • BUILD • SUCCEED",
  program: "20-HOUR C MASTER CLASSES",
  /** Official Google Form — the single registration channel. */
  registrationUrl: "https://forms.gle/hB9ns37UWA9xSU166",
  /** Canonical origin placeholder — replace before production launch. */
  origin: "https://techvora.academy",
  contactEmail: "hello@techvora.academy",
} as const;

/** Runtime guard: never allow non-HTTPS registration destinations. */
export function isSafeExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}
