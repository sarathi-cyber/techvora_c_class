# Security Policy — Techvora Academy Landing Page

This document describes the security posture of the 20-Hour C Master Classes
landing page and how to report vulnerabilities.

> **Honest statement:** no website can be guaranteed "100% secure." This
> project follows OWASP-aligned, defense-in-depth engineering practices.
> Before reusing this codebase in a deployment that handles sensitive
> information or adds backend functionality, commission a professional
> penetration test.

---

## 1. Reporting a vulnerability

Please report vulnerabilities responsibly via the contact published in
[`public/.well-known/security.txt`](public/.well-known/security.txt)
(served at `/.well-known/security.txt`, per RFC 9116).

- Do **not** access, modify or exfiltrate data that is not yours.
- Do **not** degrade availability (no DoS testing against production).
- Give us reasonable time to acknowledge and remediate before disclosure.

## 2. Threat model

This is a fully static, read-only marketing page. Primary risks addressed:

- **XSS / script injection** — strict CSP; no user-generated content;
  React's built-in output escaping; `dangerouslySetInnerHTML` is not used.
- **Clickjacking** — `frame-ancestors 'none'` + legacy `X-Frame-Options: DENY`.
- **MIME sniffing** — `X-Content-Type-Options: nosniff`.
- **Referrer leakage to third parties** — `Referrer-Policy: strict-origin-when-cross-origin` and `rel="noopener noreferrer"` on all external links.
- **Abused browser capabilities** — restrictive `Permissions-Policy`.
- **Supply chain** — minimal, pinned dependencies; `npm audit` clean;
  no runtime third-party JavaScript; fonts self-hosted.
- **Downgrade attacks** — HSTS with `includeSubDomains; preload` on HTTPS hosts,
  plus `upgrade-insecure-requests` in header-based CSP.

## 3. Controls in place

### Transport & headers
Delivered via `public/_headers` (Netlify/Cloudflare Pages), `vercel.json`
(Vercel) and `public/.htaccess` (Apache):

- `Content-Security-Policy` (baseline) with `default-src 'self'`,
  `object-src 'none'`, `base-uri 'self'`, `form-action 'none'`,
  `frame-ancestors 'none'`, `upgrade-insecure-requests`.
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling camera, microphone, geolocation, payment,
  USB/serial/HID/Bluetooth, sensors, topics/cohort tracking APIs, etc.
- `Cross-Origin-Opener-Policy: same-origin`,
  `Cross-Origin-Resource-Policy` (same-origin; relaxed for the social share image),
  `Cross-Origin-Embedder-Policy: credentialless`

### In-document CSP (defense in depth)
`index.html` embeds a `<meta http-equiv="Content-Security-Policy">` whose
`script-src` is **hash-locked**: every inline script (the app bundle and the
static JSON-LD block) is allow-listed by its SHA-256 digest, computed at build
time. There is **no** `'unsafe-inline'` in `script-src`.

- `style-src 'unsafe-inline'` is required by the single-file build format
  (bundled styles + component inline style attributes); style injection cannot
  execute scripts under this policy.
- `frame-ancestors` inside `<meta>` is ignored by browsers per spec — it is
  enforced by the HTTP-header CSP instead; both are shipped deliberately.
- Verify integrity after every build: `node scripts/verify-csp.mjs`.

### Data collection
- No cookies, no `localStorage`/`sessionStorage`/IndexedDB, no analytics,
  no fingerprinting, no request is ever made by this page to any server
  (audit with your browser's Network panel).
- Registration is a hand-off to the official Google Form only. Responses are
  governed by Google's policies and are never proxied through this site.
- No API keys, tokens, credentials or endpoints exist anywhere in the repo.

### Build & dependency hygiene
- Direct dependencies: `react`, `react-dom`, `lucide-react`,
  `clsx`, `tailwind-merge` (+ build tooling). All versions pinned exactly.
- `npm audit` returns **0 vulnerabilities** at the time of release.
- Production build has debug tooling disabled by construction
  (minified, no source maps shipped, no dev server code).

## 4. Deliberately out of scope

- No authentication, sessions, databases or server-side endpoints exist; if
  any are added later, apply server-side validation, parameterized queries,
  rate limiting, CSRF protection, secure session handling and generic error
  responses, and use environment variables for all secrets (never the client).
- Social media links are inert placeholders until official handles exist.

## 5. Operational recommendations

1. Serve only over HTTPS; keep HSTS enabled and consider preload submission.
2. Proxy-level hardening (WAF/rate limits) may be added at the CDN layer.
3. Re-run `npm audit` and `node scripts/verify-csp.mjs` in CI on every change.
4. Rotate the `security.txt` `Expires` field before it lapses.
