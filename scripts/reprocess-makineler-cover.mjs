// scripts/reprocess-makineler-cover.mjs
// Final reprocess: 4:3 cover crop, NO backdrop padding (canlı sitedeki gibi natural).
// position: 'attention' — sharp entropy-based smart crop, makinenin gövdesini yakalar.
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIR = './public/images/makineler';
const TARGET_W = 1200;
const TARGET_H = 900;

// slug → kaynak dosya (her ekleme buradan kontrol edilir)
const MAP = {
  'soilmec-sr40':         'soilmec-sr40-new.webp',
  'soilmec-cm40':         'soilmec-cm40-src.jpg',
  'casagrande-c6':        'casagrande-c6-src.jpg',
  'casagrande-b200xp':    'casagrande-b200xp-src.jpg',  // YENİ doğru kaynak
  'xcmg-xr220d':          'xcmg-xr220d-src.jpg',         // YENİ slug + kaynak
  'xcmg-xr280d':          'xcmg-xr280d-src.avif',        // YENİ makine
  'ymc-tr-ankraj':        'ymc-tr-ankraj-src.jpg',
  'tecnipwell-tw352':     'tecnipwell-tw352-src.jpg',
  'atlas-copco-xavs307':  'atlas-copco-xavs307-src.jpg',
  'germe-krikosu':        'germe-krikosu-src.jpg',
  'pistonlu-enjeksiyon':  'pistonlu-enjeksiyon-src.jpg',
  'ptc-vibro':            'ptc-vibro-src.jpg',
  'shotcrete-mc260':      'shotcrete-mc260-src.jpg',
};

const WEBP = { quality: 82, effort: 4 };
const AVIF = { quality: 60, effort: 3 };
const JPG  = { quality: 86, mozjpeg: true };

for (const [slug, srcName] of Object.entries(MAP)) {
  const srcPath = path.join(DIR, srcName);
  const base    = path.join(DIR, slug);

  if (!existsSync(srcPath)) {
    console.log(`[${slug}] SOURCE MISSING: ${srcName}`);
    continue;
  }

  console.log(`[${slug}] cover-crop @ 4:3...`);
  const pipeline = sharp(srcPath)
    .rotate() // EXIF orientation
    .resize(TARGET_W, TARGET_H, {
      fit: 'cover',
      position: 'attention', // smart crop — makinenin merkezi
    });

  await pipeline.clone().jpeg(JPG).toFile(`${base}.jpg`);
  await pipeline.clone().webp(WEBP).toFile(`${base}.webp`);
  await pipeline.clone().avif(AVIF).toFile(`${base}.avif`);
  console.log(`  ok → ${slug}.{jpg,webp,avif}`);
}
console.log('\nDone — natural cover crop, no padding.');
