import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const IMG_DIR = './public/images';
const files = (await readdir(IMG_DIR)).filter(f => /^hero-sunset-\d\.png$/.test(f));

if (files.length === 0) {
  console.error('No hero-sunset-*.png files found.');
  process.exit(1);
}

for (const file of files) {
  const base = path.join(IMG_DIR, file.replace('.png', ''));
  console.log(`Converting ${file}...`);

  await sharp(path.join(IMG_DIR, file))
    .webp({ quality: 82, effort: 6 })
    .toFile(`${base}.webp`);

  await sharp(path.join(IMG_DIR, file))
    .avif({ quality: 55, effort: 6 })
    .toFile(`${base}.avif`);
}
console.log('Done.');
