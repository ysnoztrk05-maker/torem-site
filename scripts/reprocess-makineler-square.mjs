// scripts/reprocess-makineler-square.mjs
// Final pattern: 1:1 square cover crop @ 1000×1000
// Canlı toremzemin.com WordPress sitesi pattern'ini birebir yansıtır.
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIR = './public/images/makineler';
const SIZE = 1000;

// slug → kaynak (en iyi kaliteli kaynaklar tercih edildi)
const MAP = {
  'soilmec-sr40':         'soilmec-sr40-new.webp',
  'soilmec-cm40':         'soilmec-cm40-src.jpg',
  'casagrande-c6':        'casagrande-c6-src.jpg',
  'casagrande-b200xp':    'casagrande-b200xp-src.jpg',
  'xcmg-xr220d':          'xcmg-xr220d-v2-src.jpg',     // YENİ DII versiyon
  'xcmg-xr280d':          'xcmg-xr280d-src.avif',
  'bauer-bg18h':          'bauer-bg18h-src.jpg',         // YENİ — gerçek BG18H
  'furukawa-hcr1200ds':   'furukawa-hcr1200ds-src.jpg',  // YENİ — gerçek Furukawa
  'ymc-tr-ankraj':        'ymc-tr-ankraj-src.jpg',
  'tecnipwell-tw352':     'tecnipwell-tw352-v2-src.png', // YENİ — temiz alternatif
  'atlas-copco-xavs307':  'atlas-copco-xavs307-src.jpg',
  'germe-krikosu':        'germe-krikosu-src.jpg',
  'pistonlu-enjeksiyon':  'pistonlu-enjeksiyon-src.jpg',
  'ptc-vibro':            'ptc-vibro-v2-src.jpg',        // YENİ — daha kaliteli
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

  console.log(`[${slug}] 1:1 cover crop...`);
  const pipeline = sharp(srcPath)
    .rotate()
    .resize(SIZE, SIZE, {
      fit: 'cover',
      position: 'attention', // smart crop — makinenin gövdesini odakta tutar
    });

  await pipeline.clone().jpeg(JPG).toFile(`${base}.jpg`);
  await pipeline.clone().webp(WEBP).toFile(`${base}.webp`);
  await pipeline.clone().avif(AVIF).toFile(`${base}.avif`);
  console.log(`  ok → ${slug}.{jpg,webp,avif}`);
}
console.log('\nDone — square 1:1 pattern (live site uyumlu).');
