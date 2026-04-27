// scripts/reprocess-legacy-contain.mjs
// Eski makine görsellerini de aynı 4:3 navy-backdrop standardına getirir.
// Bu sefer kaynak da hedef de aynı dosya — geçici .bak'a alıp yeniden işliyoruz.
import sharp from 'sharp';
import { existsSync, copyFileSync, unlinkSync } from 'node:fs';
import path from 'node:path';

const DIR = './public/images/makineler';
const TARGET_W = 1200;
const TARGET_H = 900;
const BG = { r: 0, g: 21, b: 48, alpha: 1 };

// İşlenecek slug listesi — bunlar reprocess-makineler-contain.mjs'te işlenmeyenler
const SLUGS = [
  'bauer-bg20',
  'jet-grout',
  'mini-kazik',
  'mini-kazik-makinesi',
  'ankraj-makinesi',
  'enjeksiyon-seti',
  'soilmec-sm400',
  'soilmec-sr40-saha',
];

const WEBP = { quality: 82, effort: 4 };
const AVIF = { quality: 60, effort: 3 };
const JPG  = { quality: 86, mozjpeg: true };

for (const slug of SLUGS) {
  const jpgPath = path.join(DIR, `${slug}.jpg`);
  if (!existsSync(jpgPath)) {
    console.log(`[${slug}] no .jpg, skip`);
    continue;
  }

  // Kaynak ve hedef aynı — geçici kopya al
  const tmpPath = path.join(DIR, `${slug}.tmp.jpg`);
  copyFileSync(jpgPath, tmpPath);

  console.log(`[${slug}] reprocessing...`);
  const pipeline = sharp(tmpPath)
    .rotate()
    .resize(TARGET_W, TARGET_H, {
      fit: 'contain',
      background: BG,
    })
    .flatten({ background: BG });

  await pipeline.clone().jpeg(JPG).toFile(jpgPath);
  await pipeline.clone().webp(WEBP).toFile(path.join(DIR, `${slug}.webp`));
  await pipeline.clone().avif(AVIF).toFile(path.join(DIR, `${slug}.avif`));
  unlinkSync(tmpPath);
  console.log(`  ok`);
}
console.log('\nDone.');
