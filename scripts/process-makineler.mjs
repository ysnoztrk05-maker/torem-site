// scripts/process-makineler.mjs
// Tek seferlik: makine kaynak görsellerini 4:3 1200x900'e normalize edip
// AVIF + WebP + JPG (fallback) olarak public/images/makineler/ altına yazar.
import sharp from 'sharp';
import { readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIR = './public/images/makineler';
const TARGET_W = 1200;
const TARGET_H = 900;

const MAP = {
  'soilmec-sr40':         'soilmec-sr40-new.webp',
  'soilmec-cm40':         'soilmec-cm40-src.jpg',
  'casagrande-c6':        'casagrande-c6-src.jpg',
  'casagrande-b200xp':    'casagrande-c6xp-src.jpg',
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

  if (existsSync(`${base}.avif`) && existsSync(`${base}.webp`) && existsSync(`${base}.jpg`)) {
    console.log(`[${slug}] skip (already exists)`);
    continue;
  }
  if (!existsSync(srcPath)) {
    console.log(`[${slug}] SOURCE MISSING: ${srcName} — skipping`);
    continue;
  }

  console.log(`[${slug}] processing...`);
  const pipeline = sharp(srcPath).resize(TARGET_W, TARGET_H, {
    fit: 'cover',
    position: 'attention',
  });

  await pipeline.clone().jpeg(JPG).toFile(`${base}.jpg`);
  await pipeline.clone().webp(WEBP).toFile(`${base}.webp`);
  await pipeline.clone().avif(AVIF).toFile(`${base}.avif`);
  console.log(`  ok → ${slug}.{jpg,webp,avif}`);
}

console.log('\nDone.');
