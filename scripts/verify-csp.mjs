#!/usr/bin/env node
/**
 * CSP integrity verification — runs against dist/index.html after a build.
 *
 * The production document ships a strict Content-Security-Policy whose
 * script-src is locked to per-script SHA-256 hashes (no 'unsafe-inline').
 * This script recomputes the hashes of every inline script in the built
 * file and confirms they are all present in the CSP, and that every hash
 * in the CSP corresponds to a real script. It exits non-zero on drift.
 *
 * Usage:  node scripts/verify-csp.mjs [path-to-index.html]
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve(process.argv[2] ?? "dist/index.html");
const html = readFileSync(file, "utf8");

const cspMatch = html.match(/http-equiv="Content-Security-Policy"\s+content="([^"]+)"/i);
if (!cspMatch) {
  console.error("✗ No Content-Security-Policy <meta> found in", file);
  process.exit(1);
}
const csp = cspMatch[1];

const scriptSrc = csp
  .split(";")
  .map((d) => d.trim())
  .find((d) => d.startsWith("script-src"));
if (!scriptSrc) {
  console.error("✗ CSP is missing a script-src directive");
  process.exit(1);
}
if (scriptSrc.includes("'unsafe-inline'")) {
  console.error("✗ script-src contains 'unsafe-inline' — scripts must be hash-locked");
  process.exit(1);
}

const declared = new Set([...scriptSrc.matchAll(/'sha256-[^']+'/g)].map((m) => m[0]));
const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);

const actual = new Set(
  inlineScripts.map((body) => `'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`),
);

let failed = false;
for (const hash of actual) {
  if (!declared.has(hash)) {
    failed = true;
    console.error("✗ Inline script without matching CSP hash:", hash);
  }
}
for (const hash of declared) {
  if (!actual.has(hash)) {
    failed = true;
    console.error("✗ CSP declares a hash with no matching inline script:", hash);
  }
}

for (const directive of ["object-src 'none'", "base-uri 'self'", "form-action 'none'", "frame-ancestors 'none'"]) {
  if (!csp.includes(directive)) {
    failed = true;
    console.error("✗ CSP is missing required directive:", directive);
  }
}

if (failed) {
  console.error("\nCSP verification FAILED. Rebuild and re-inject hashes before deploying.");
  process.exit(1);
}
console.log(`✓ CSP verified: ${actual.size} inline script(s) hash-locked, all required directives present.`);
