/**
 * Regenerates public/og.png — the social-share (Open Graph / Twitter) image.
 *
 * SVG OG images are ignored by Facebook, LinkedIn, WhatsApp, Slack, X and
 * iMessage, so the shared card must be a raster file. This script draws the
 * card with the site's real typeface (Fraunces, embedded) and composites the
 * actual logo PNG so the mark is pixel-exact.
 *
 * Run:  pnpm add -D sharp  &&  node scripts/generate-og.mjs
 * Re-run whenever the wordmark, tagline or services line changes.
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const W = 1200;
const H = 630;

const fraunces = readFileSync(`${root}public/fonts/fraunces-latin-wght-normal.woff2`).toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f2231"/>
      <stop offset="0.55" stop-color="#123048"/>
      <stop offset="1" stop-color="#173a52"/>
    </linearGradient>
    <style>
      @font-face {
        font-family: "Fraunces";
        src: url(data:font/woff2;base64,${fraunces}) format("woff2");
        font-weight: 400 700;
        font-style: normal;
      }
      .head { font-family: "Fraunces", Georgia, serif; fill: #ffffff; font-weight: 600; }
      .head--accent { fill: #3bb0e5; }
      .word { font-family: "Fraunces", Georgia, serif; fill: #ffffff; font-weight: 600; letter-spacing: 2px; }
      .sub  { font-family: "Segoe UI", Arial, sans-serif; fill: #9fb0bd; }
      .kick { font-family: "Segoe UI", Arial, sans-serif; fill: #c8863b; font-weight: 700; letter-spacing: 3px; }
      .meta { font-family: "Segoe UI", Arial, sans-serif; fill: #c9d6e0; }
      .url  { font-family: "Segoe UI", Arial, sans-serif; fill: #6f8394; letter-spacing: 1px; }
    </style>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <g fill="#1a9dd9" opacity="0.10">
    <rect x="60"  y="470" width="30" height="30" transform="rotate(45 75 485)"/>
    <rect x="110" y="470" width="30" height="30" transform="rotate(45 125 485)"/>
    <rect x="160" y="470" width="30" height="30" transform="rotate(45 175 485)"/>
    <rect x="85"  y="510" width="30" height="30" transform="rotate(45 100 525)"/>
    <rect x="135" y="510" width="30" height="30" transform="rotate(45 150 525)"/>
  </g>

  <rect x="90" y="250" width="64" height="5" fill="#c8863b"/>

  <text x="206" y="112" class="word" font-size="40">CAF</text>
  <text x="207" y="140" class="sub" font-size="19">Expertise sociale &amp; audit — Maroc</text>

  <text x="92" y="212" class="kick" font-size="20">CABINET SOCIAL &amp; AUDIT</text>

  <text x="88" y="330" class="head" font-size="70">Paie, déclarations sociales</text>
  <text x="88" y="410" class="head head--accent" font-size="70">et audit légal au Maroc</text>

  <text x="90" y="470" class="meta" font-size="24">CNSS &#183; AMO &#183; IR &#183; contrats de travail &#183; audit social &#183; commissariat aux comptes</text>

  <text x="${W - 90}" y="565" text-anchor="end" class="url" font-size="22">www.cabinet-caf.ma</text>
</svg>`;

const base = await sharp(Buffer.from(svg)).png().toBuffer();

const logo = await sharp(`${root}public/Logo_128x128.png`)
  .resize({ width: 104, height: 104, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp(base)
  .composite([{ input: logo, left: 90, top: 44 }])
  .png({ compressionLevel: 9, palette: true })
  .toFile(`${root}public/og.png`);

const { width, height } = await sharp(`${root}public/og.png`).metadata();
console.log(`public/og.png  ${width}x${height}  ${(readFileSync(`${root}public/og.png`).length / 1024).toFixed(0)} KB`);
