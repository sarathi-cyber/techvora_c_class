import { SITE } from "@/lib/site";
import { PolicyList, PolicySection, PolicyShell } from "./PolicyShell";

export default function TermsPage() {
  return (
    <PolicyShell title="Terms of Use" updated="JANUARY 2026">
      <PolicySection title="ACCEPTANCE OF THESE TERMS">
        <p>
          By accessing this website or registering for the 20-Hour C Master Classes, you agree to these Terms of Use.
          If you do not agree, please do not use this website or enroll in the program.
        </p>
      </PolicySection>

      <PolicySection title="THE PROGRAM">
        <p>
          Techvora Academy offers a focused 20-hour C programming experience covering fundamentals, decision making,
          loops, functions, arrays and strings, pointers, structures and problem solving. Session schedules, formats
          and joining details are communicated to registered participants after enrollment.
        </p>
      </PolicySection>

      <PolicySection title="ENROLLMENT">
        <PolicyList
          items={[
            "Registration is completed exclusively through the official Google Form linked on this page.",
            "You are responsible for providing accurate contact information so we can reach you.",
            "This website itself never collects registration details.",
            "Program capacity may be limited; confirmation is sent after review of each registration.",
          ]}
        />
      </PolicySection>

      <PolicySection title="CERTIFICATES">
        <p>
          A Certificate of Completion is awarded to participants who complete the 20-hour program requirements,
          including practical coding sessions. Certificates confirm participation and completion — they are not an
          accredited academic qualification.
        </p>
      </PolicySection>

      <PolicySection title="CONDUCT">
        <PolicyList
          items={[
            "Treat instructors and fellow participants with respect.",
            "Do not share session access links or paid materials without permission.",
            "Do not attempt to disrupt sessions, platforms or this website in any way.",
          ]}
        />
      </PolicySection>

      <PolicySection title="INTELLECTUAL PROPERTY">
        <p>
          All materials, slides, examples and the design of this website are the property of Techvora Academy unless
          stated otherwise. They are provided for your personal learning only and may not be redistributed, resold or
          republished without written permission. You retain full ownership of the code you write during the program.
        </p>
      </PolicySection>

      <PolicySection title="ACCEPTABLE USE OF THIS WEBSITE">
        <p>
          You agree not to probe, scan or test the vulnerability of this website, attempt to bypass its security
          controls, scrape it at disruptive volumes, or use it for any unlawful purpose. Responsible security
          research conducted in good faith is welcome — see{" "}
          <code className="font-mono text-[13px] text-gold-300">/.well-known/security.txt</code>.
        </p>
      </PolicySection>

      <PolicySection title="DISCLAIMERS & LIABILITY">
        <p>
          This website and the program materials are provided "as is" for educational purposes, without warranties of
          any kind. To the maximum extent permitted by law, Techvora Academy is not liable for indirect or
          consequential damages arising from use of this website. Nothing in these terms excludes liability that
          cannot be excluded by law.
        </p>
      </PolicySection>

      <PolicySection title="THIRD-PARTY SERVICES">
        <p>
          Registration is operated by Google Forms under Google's own terms and privacy policy. Techvora Academy is
          not responsible for the availability or practices of third-party platforms.
        </p>
      </PolicySection>

      <PolicySection title="CHANGES & CONTACT">
        <p>
          We may update these terms from time to time; the current version is always published on this page. For any
          question about these terms, email{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="text-gold-300 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-200">
            {SITE.contactEmail}
          </a>
          .
        </p>
      </PolicySection>
    </PolicyShell>
  );
}
