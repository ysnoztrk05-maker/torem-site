import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const TARGETS = [
  {
    dir: './public/images',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'kök (hero + kart görselleri)',
  },
  // Faaliyet alanı içerik klasörleri — kategori/teknik sayfa görselleri
  {
    dir: './public/images/destekleme-ankraj',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'destekleme-ankraj',
  },
  {
    dir: './public/images/gecirimsizlik-perdeleri',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'gecirimsizlik-perdeleri',
  },
  {
    dir: './public/images/geoteknik-proje',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'geoteknik-proje',
  },
  {
    dir: './public/images/geoteknik-test-izleme',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'geoteknik-test-izleme',
  },
  {
    dir: './public/images/iksa',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'iksa',
  },
  {
    dir: './public/images/kazikli-temeller',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'kazikli-temeller',
  },
  {
    dir: './public/images/sev-stabilitesi',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'sev-stabilitesi',
  },
  {
    dir: './public/images/zemin-iyilestirme',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'zemin-iyilestirme',
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
  // Proje case-study fotoğrafları (her proje kendi alt klasöründe)
  {
    dir: './public/images/projeler/smart-civril',
    pattern: /\.(png|jpg|jpeg)$/i,
    label: 'projeler/smart-civril',
  },
  // Devam eden projeler → WordPress birebir kapak fotoğrafları + derin case-study galerileri
  ...[
    'izmir-konut-bayrakli', 'adana-tarsus-yol', 'istanbul-villa-buyukcekmece',
    'fabrika-gebze', 'abalioglu-aliaga', 'bakioglu-salihli',
    'aslanturk-lojistik-gebze', 'akar-toki-izmir-okul', 'millet-bahcesi-usak',
  ].map((slug) => ({
    dir: `./public/images/projeler/${slug}`,
    pattern: /\.(png|jpg|jpeg)$/i,
    label: `projeler/${slug}`,
  })),
  // Kaynağı .webp olan içerik görselleri — sadece AVIF kardeşi üretilir
  {
    dir: './public/images/fore-kazik',
    pattern: /\.webp$/i,
    label: 'fore-kazik (webp→avif)',
  },
  {
    dir: './public/images/jet-grout',
    pattern: /\.webp$/i,
    label: 'jet-grout (webp→avif)',
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
    const isWebpSource = /\.webp$/i.test(file);
    const base = path.join(dir, file.replace(/\.(png|jpe?g|webp)$/i, ''));

    const webpPath = `${base}.webp`;
    const avifPath = `${base}.avif`;
    // .webp kaynaklar için güncellik kontrolü avif çıktısına bakar (webp yeniden üretilmez)
    const checkPath = isWebpSource ? avifPath : webpPath;

    try {
      const [srcStat, outStat] = await Promise.all([
        stat(inputPath),
        stat(checkPath).catch(() => null),
      ]);
      if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) {
        console.log(`  skip ${file} (up to date)`);
        continue;
      }
    } catch {}

    if (!isWebpSource) {
      await sharp(inputPath).webp(WEBP_OPTS).toFile(webpPath);
    }
    await sharp(inputPath).avif(AVIF_OPTS).toFile(avifPath);
    console.log(`  ${file} → ${isWebpSource ? 'avif' : 'webp + avif'}`);
  }
}

for (const t of TARGETS) {
  await convertDir(t);
}
console.log('Done.');
