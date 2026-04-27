import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const TARGETS = [
  {
    dir: './public/images',
    pattern: /^hero-sunset-\d\.png$/i,
    label: 'hero',
  },
  {
    dir: './public/images/logos',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'logos',
  },
  {
    dir: './public/images/makineler',
    // *-src.jpg geçici kaynak dosyaları hariç — onlar process-makineler.mjs içindir
    pattern: /^(?!.*-src\.).+\.(png|jpg|jpeg)$/i,
    label: 'makineler',
  },
];

const WEBP_OPTS = { quality: 82, effort: 6 };
const AVIF_OPTS = { quality: 55, effort: 6 };

async function convertDir({ dir, pattern, label }) {
  const files = (await readdir(dir)).filter((f) => pattern.test(f));
  if (!files.length) {
    console.warn(`[${label}] No matching files in ${dir}`);
    return;
  }

  console.log(`[${label}] Converting ${files.length} files in ${dir}...`);

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const base = path.join(dir, file.replace(/\.(png|jpe?g)$/i, ''));

    const webpPath = `${base}.webp`;
    const avifPath = `${base}.avif`;

    try {
      const [srcStat, webpStat] = await Promise.all([
        stat(inputPath),
        stat(webpPath).catch(() => null),
      ]);
      if (webpStat && webpStat.mtimeMs >= srcStat.mtimeMs) {
        console.log(`  skip ${file} (up to date)`);
        continue;
      }
    } catch {}

    await sharp(inputPath).webp(WEBP_OPTS).toFile(webpPath);
    await sharp(inputPath).avif(AVIF_OPTS).toFile(avifPath);
    console.log(`  ${file} → webp + avif`);
  }
}

for (const t of TARGETS) {
  await convertDir(t);
}
console.log('Done.');
