// Görsel format yardımcıları — CLAUDE.md §8 (AVIF/WebP/legacy üçlüsü)
// Build anında (Node) public/ altında kardeş dosya varlığını kontrol eder;
// var olmayan format için <source> üretilmez ki tarayıcı 404'e düşmesin.

import { existsSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC_DIR = join(process.cwd(), 'public');

export interface PicSources {
  avif?: string;
  webp?: string;
}

/**
 * Raster src için var olan modern format kardeşlerini döndürür.
 * '/images/foo.jpg' → { avif: '/images/foo.avif', webp: '/images/foo.webp' }
 * Kaynak zaten .webp ise sadece avif aranır. SVG/eşleşmeyen yollar boş döner.
 */
export function picSources(src: string): PicSources {
  const m = /^(.+)\.(jpe?g|png|webp)$/i.exec(src);
  if (!m) return {};
  const base = m[1];
  const ext = m[2].toLowerCase();
  const out: PicSources = {};
  if (existsSync(join(PUBLIC_DIR, `${base}.avif`))) out.avif = `${base}.avif`;
  if (ext !== 'webp' && existsSync(join(PUBLIC_DIR, `${base}.webp`))) out.webp = `${base}.webp`;
  return out;
}

/**
 * set:html ile basılan içerik HTML'indeki çıplak <img> etiketlerini
 * <picture> + AVIF/WebP <source> ile sarar; eksikse decoding="async" ekler.
 * Halihazırda <picture> içindeki img'lere dokunmaz.
 */
export function picturize(html: string): string {
  return html.replace(
    /(<picture[^>]*>\s*(?:<source[^>]*\/?>\s*)*)?<img\s[^>]*\/?>/gi,
    (match, inPicture) => {
      if (inPicture) return match;

      let img = match;
      if (!/\bdecoding=/.test(img)) {
        img = img.replace(/\s*\/?>$/, (end) => ` decoding="async"${end}`);
      }

      const srcMatch = /\bsrc="([^"]+)"/.exec(img);
      if (!srcMatch) return img;
      const { avif, webp } = picSources(srcMatch[1]);
      if (!avif && !webp) return img;

      const sources =
        (avif ? `<source srcset="${avif}" type="image/avif" />` : '') +
        (webp ? `<source srcset="${webp}" type="image/webp" />` : '');
      return `<picture>${sources}${img}</picture>`;
    },
  );
}
