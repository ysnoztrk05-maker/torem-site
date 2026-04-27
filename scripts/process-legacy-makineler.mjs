// scripts/process-legacy-makineler.mjs
// Eski tek-format makine görselleri için AVIF + WebP siblings üretir.
// Resize YAPMAZ — orijinali korur, sadece format çoğaltır.
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIR = './public/images/makineler';
const WEBP = { quality: 82, effort: 4 };
const AVIF = { quality: 60, effort: 3 };

const files = await readdir(DIR);
for (const f of files) {
  if (!f.endsWith('.jpg')) continue;
  const base = f.slice(0, -4);
  if (base.endsWith('-src')) continue;

  const jpgPath  = path.join(DIR, f);
  const webpPath = path.join(DIR, `${base}.webp`);
  const avifPath = path.join(DIR, `${base}.avif`);

  if (existsSync(webpPath) && existsSync(avifPath)) continue;

  console.log(`[${base}]`);
  if (!existsSync(webpPath)) {
    await sharp(jpgPath).webp(WEBP).toFile(webpPath);
    console.log(`  + webp`);
  }
  if (!existsSync(avifPath)) {
    await sharp(jpgPath).avif(AVIF).toFile(avifPath);
    console.log(`  + avif`);
  }
}
console.log('Done.');
