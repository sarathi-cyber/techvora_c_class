import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isSafeExternalUrl } from "@/lib/site";

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

/**
 * Hardened external link.
 * ─ HTTPS-only URLs (anything else renders as a disabled span).
 * ─ Always opens in a new tab, isolated via rel="noopener noreferrer".
 * ─ "noreferrer" additionally prevents leaking the referrer header
 *   and strips the URL query from the destination's analytics.
 */
export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  if (!isSafeExternalUrl(href)) {
    return (
      <span aria-disabled="true" className={rest.className}>
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
