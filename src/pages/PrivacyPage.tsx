import { SITE } from "@/lib/site";
import { PolicyList, PolicySection, PolicyShell } from "./PolicyShell";
import { ExternalLink } from "@/components/ui/ExternalLink";

export default function PrivacyPage() {
  return (
    <PolicyShell title="Privacy Notice" updated="JANUARY 2026">
      <PolicySection title="THE SHORT VERSION">
        <p>
          This website collects <strong className="text-cream-50">no personal data</strong>. It has no forms of its
          own, no accounts, no cookies, no analytics and no tracking of any kind. Registration for the 20-Hour C
          Master Classes happens exclusively on an official Google Form, which is the only place your information is
          ever requested — and it never passes through this website.
        </p>
      </PolicySection>

      <PolicySection title="WHAT THIS WEBSITE COLLECTS">
        <PolicyList
          items={[
            "No names, email addresses, phone numbers or any other personal details.",
            "No cookies — this site sets and reads none.",
            "No browser storage — nothing is written to localStorage, sessionStorage or IndexedDB.",
            "No analytics, advertising pixels, session replay or fingerprinting.",
            "No location access, camera, microphone or sensor permissions are requested.",
            "No data is appended to URLs when you follow a link.",
          ]}
        />
        <p>You can verify every claim above in your browser's developer tools, under Network, Storage and Application.</p>
      </PolicySection>

      <PolicySection title="HOSTING INFRASTRUCTURE LOGS">
        <p>
          Like every website, the hosting provider that delivers these files may keep short-lived technical server
          logs (IP address, browser type, timestamp) for security and operational purposes. These logs are generated
          automatically by the hosting platform, are not combined with other data, and are not used for marketing.
        </p>
      </PolicySection>

      <PolicySection title="REGISTRATION DATA (GOOGLE FORMS)">
        <p>
          Enrollment is handled by an{" "}
          <ExternalLink href={SITE.registrationUrl} className="text-gold-300 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-200">
            official Google Form
          </ExternalLink>
          . Anything you submit there is governed by Google's Privacy Policy and is received by Techvora Academy.
          We use that information only to administer the Master Class: confirming your seat, sharing schedules and
          materials, and issuing your Certificate of Completion.
        </p>
        <PolicyList
          items={[
            "We never sell or rent registration data.",
            "We never use it for unrelated marketing.",
            "We keep it only as long as the program requires, then delete it.",
            "This website never sees, proxies or stores your form answers.",
          ]}
        />
      </PolicySection>

      <PolicySection title="THIRD PARTIES ON THIS PAGE">
        <p>
          None. Fonts are self-hosted, there are no embedded widgets, no CDN scripts and no remote images loaded from
          third-party domains. The only external destination reachable from this page is the Google registration
          form, opened in a new tab — by your choice.
        </p>
      </PolicySection>

      <PolicySection title="EXTERNAL LINK SAFETY">
        <p>
          External links open in a new tab with <code className="font-mono text-[13px] text-gold-300">rel="noopener noreferrer"</code>,
          which prevents the destination page from accessing this tab's window object and trims referrer information.
          A <code className="font-mono text-[13px] text-gold-300">Referrer-Policy: strict-origin-when-cross-origin</code>{" "}
          header further limits what destinations can learn about your visit.
        </p>
      </PolicySection>

      <PolicySection title="HOW WE PROTECT THIS SITE">
        <p>
          This page is engineered with a defense-in-depth approach: a strict Content Security Policy with per-script
          cryptographic hashes, anti-clickjacking frame protections, content-type sniffing protection, a restrictive
          Permissions Policy, HTTPS-only transport enforcement, and zero third-party JavaScript. A{" "}
          <code className="font-mono text-[13px] text-gold-300">security.txt</code> file is published at{" "}
          <code className="font-mono text-[13px] text-gold-300">/.well-known/security.txt</code> for responsible
          vulnerability reports.
        </p>
        <p className="border-l-2 border-gold-500/40 pl-4 text-cream-500">
          Honest note: no website can be guaranteed to be "100% secure." We practice security-focused engineering and
          welcome independent review. Any deployment that will handle sensitive information should undergo
          professional penetration testing first.
        </p>
      </PolicySection>

      <PolicySection title="YOUR RIGHTS & REQUESTS">
        <p>
          Because this website holds no data about you, there is usually nothing to access or erase here. For data
          submitted through the Google Form, you may request access, correction or deletion at any time by emailing{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="text-gold-300 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-200">
            {SITE.contactEmail}
          </a>
          . We respond to genuine requests promptly and without charge.
        </p>
      </PolicySection>

      <PolicySection title="CHANGES TO THIS NOTICE">
        <p>
          If this notice ever changes, the updated version will be published on this page with a new revision date.
          Material changes will be communicated to registered participants by email.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}
