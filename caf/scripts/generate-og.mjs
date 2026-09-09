/**
 * Rasterise public/og.svg -> public/og.png (1200x630) for social sharing.
 * SVG OG images are not rendered by Facebook / LinkedIn / WhatsApp, so we ship a PNG.
 * Run:  node scripts/generate-og.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const svg = readFileSync(root + 'public/og.svg');

const png = await sharp(svg, { density: 160 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(root + 'public/og.png', png);
console.log(`public/og.png written (${(png.length / 1024).toFixed(1)} KB)`);
