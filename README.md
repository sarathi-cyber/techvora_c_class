# TECHVORA ACADEMY — 20-Hour C Master Classes

A production-ready, security-hardened, cinematic landing page for the
**20-Hour C Master Classes** by Techvora Academy. Built with React 19,
Vite 7 and Tailwind CSS 4. Ships as a single, self-contained static file.

---

## Quick start

```bash
npm install          # install dependencies (fully pinned)
npm run dev          # local dev server (note: CSP targets the production build)
npm run build        # produce dist/index.html (single-file production build)
npm run preview      # serve the production build locally
node scripts/verify-csp.mjs   # verify CSP script-hash integrity after any build
npm audit            # dependency security scan (expected: 0 vulnerabilities)
```

## What ships

- **Hero** — Techvora Academy proudly presents: 20-HOUR C MASTER CLASSES,
  with an animated C-code terminal, gold-dust particle field and pointer-tilt.
- **Curriculum** — 8 modules: fundamentals, decision making, loops, functions,
  arrays & strings, pointers, structures, problem solving.
- **The 20-Hour Journey** — a scroll-driven golden timeline with 5 phases.
- **Why Techvora** — honest, verifiable program facts; certificate visual.
- **Privacy-first band + FAQ + final CTA + footer** with legal pages
  (`#/privacy`, `#/terms`) rendered client-side via a dependency-free hash router.

Registration goes **only** to the official Google Form:
`https://forms.gle/hB9ns37UWA9xSU166` — opened in a new tab with
`rel="noopener noreferrer"`. The site collects no data itself.

## Security architecture

See [SECURITY.md](SECURITY.md) for the full policy. Highlights:

| Control | Implementation |
| --- | --- |
| Content Security Policy | In-document `<meta>` CSP, `script-src` locked to per-build SHA-256 hashes — no `'unsafe-inline'` for scripts |
| Clickjacking | CSP `frame-ancestors 'none'` + `X-Frame-Options: DENY` via HTTP headers |
| HSTS | `max-age=63072000; includeSubDomains; preload` (HTTPS deployments) |
| Sniffing / Referrer / Permissions | `nosniff`, `strict-origin-when-cross-origin`, restrictive Permissions-Policy |
| Third-party JS | **None.** Fonts are self-hosted; the only scripts are the hashed app bundle and static JSON-LD |
| Secrets | None exist in this codebase — no API keys, tokens or credentials |
| Data collection | None — no cookies, storage, analytics, fingerprinting or forms of its own |

Header configs are provided for Netlify / Cloudflare Pages (`public/_headers`),
Vercel (`vercel.json`) and Apache (`public/.htaccess`). The `<meta>` CSP travels
inside the document, so the strict policy applies even on static hosts without
header support (except `frame-ancestors`, which is header-only by spec).

### ⚠️ CSP hashes — read before editing

Because the build is a single inlined file, `script-src` uses SHA-256 hashes of
the exact inline scripts. **Any change that alters the app bundle or the
JSON-LD block changes its hash.** Workflow after editing:

```bash
npm run build
node -e "const h=require('fs').readFileSync('dist/index.html','utf8');const c=require('crypto');[...h.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].forEach(m=>console.log('sha256-'+c.createHash('sha256').update(m[1],'utf8').digest('base64')))"
# paste the printed hashes into the CSP <meta> in index.html, then:
npm run build && node scripts/verify-csp.mjs   # must print ✓ CSP verified
```

`scripts/verify-csp.mjs` exits non-zero if the document and its CSP drift apart.

## Launch checklist (placeholders to replace)

1. `index.html` — canonical URL and `og:url`/`og:image`/`twitter:image`:
   replace `https://techvora.academy` with the production domain.
2. `src/lib/site.ts` — `SITE.origin` and `SITE.contactEmail`.
3. `public/.well-known/security.txt` — real security contact + expiry date.
4. `public/og-image.jpg` — replace if branding changes (1200×630).
5. Deploy behind HTTPS so HSTS can take effect; consider HSTS preload
   submission once confident.

## Accessibility

Semantic landmarks and heading hierarchy, visible golden focus rings,
keyboard-operable navigation and FAQ, skip-to-content link, descriptive
ARIA labels, and full `prefers-reduced-motion` support (particles, typing,
marquee, reveals and tilt all stand down).

## Performance

~92 KB gzipped entry document; two self-hosted variable fonts (~62 KB total)
preloaded as WOFF2; zero third-party requests; canvas particle system with
hard-capped counts, sprite pre-rendering, offscreen/tab-hidden pausing and
DPR clamping; GPU-only CSS animations; lazy-loaded legal pages.

## License & third-party assets

Fonts (Space Grotesk, JetBrains Mono) are OFL-licensed and self-hosted.
Icons by [Lucide](https://lucide.dev) (ISC). All other content © Techvora Academy.
