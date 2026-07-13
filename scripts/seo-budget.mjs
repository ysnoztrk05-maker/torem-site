#!/usr/bin/env node
/**
 * Torem SEO Motoru v2 — Rekabet-Farkında İçerik Bütçe Hesaplayıcı
 * ----------------------------------------------------------------
 * Deterministik motor: bir konunun sinyallerinden (rakip kelime sayısı, rekabet,
 * CPC, arama hacmi, rakip H2, niyet) sayısal keyword difficulty (KD) + adaptif
 * kelime bütçesi + koşullu bölüm seçimi + bölüm-başı kelime dağılımı üretir.
 *
 * Matematik LLM tahmini DEĞİL — kod. İçerik yazımı bu çıktıyı brief olarak kullanır.
 *
 * Kullanım:
 *   node scripts/seo-budget.mjs <konu.json>      # dosyadan
 *   node scripts/seo-budget.mjs --self-test      # gömülü örneklerle doğrula
 *
 * Girdi JSON (tüm alanlar opsiyonel; eksikler makul varsayılana düşer):
 * {
 *   "slug": "jet-grout",
 *   "rakip_ort_kelime": 1000,       // keyword_map.rakip_analiz.ort_kelime
 *   "rakip_ort_h2": 5,
 *   "rekabet": "orta",               // düşük | orta | yüksek (KeywordTool)
 *   "cpc_usd": 1.5,
 *   "impression": 15004,             // GSC 90 gün
 *   "intent": ["informational","commercial"],  // yoksa slug/keyword'den sezilir
 *   "keyword": "jet grout"
 * }
 */

import { readFile } from 'node:fs/promises';

// ----- yardımcılar -----
const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
const N = (x, min, max) => clamp((Number(x) - min) / (max - min), 0, 1); // min-max normalize [0,1]
const round100 = (x) => Math.round(x / 100) * 100;
const round = (x, d = 1) => Number(x.toFixed(d));

const REKABET_SKOR = { 'düşük': 0.2, dusuk: 0.2, orta: 0.55, 'yüksek': 0.9, yuksek: 0.9 };

// ----- 1. Keyword Difficulty (0-100) -----
export function keywordDifficulty(t) {
  const rakipKelime = t.rakip_ort_kelime ?? 900;
  const rekabetSkor = REKABET_SKOR[String(t.rekabet ?? 'orta').toLowerCase()] ?? 0.55;
  const cpc = t.cpc_usd ?? 0.8;
  const h2 = t.rakip_ort_h2 ?? 6;
  const imp = t.impression ?? 1000;

  const kd = 100 * (
    0.30 * N(rakipKelime, 500, 3000) +
    0.25 * rekabetSkor +
    0.20 * N(cpc, 0, 5) +
    0.15 * N(h2, 3, 15) +
    0.10 * N(imp, 0, 50000)
  );
  return round(clamp(kd, 0, 100), 1);
}

// ----- 2. Adaptif kelime bütçesi -----
export function hacimCarpani(imp = 0) {
  if (imp < 500) return 0.90;
  if (imp < 3000) return 1.00;
  if (imp < 15000) return 1.15;
  if (imp < 30000) return 1.30;
  return 1.50;
}

export function kelimeButcesi(t, kd) {
  const taban = t.rakip_ort_kelime ?? 900;
  const rekabetCarpani = 1.10 + (kd / 100) * 0.60;   // 1.10 … 1.70
  const hacim = hacimCarpani(t.impression ?? 0);
  const ham = taban * rekabetCarpani * hacim;
  const hedef = clamp(round100(ham), 900, 5000);
  return {
    taban,
    rekabet_carpani: round(rekabetCarpani, 3),
    hacim_carpani: hacim,
    hedef_kelime: hedef,
    rakip_gecis_esigi: round100(taban * rekabetCarpani), // QC: bunu geçmeli
  };
}

// ----- 3. Niyet-bazlı koşullu bölüm kütüphanesi -----
// yapisal = her zaman, cap'e sayılmaz (küçük); zorunlu = her zaman + sayılır;
// intent grupları = koşullu. weight = göreli kelime payı.
const BOLUM_KUTUPHANESI = {
  yapisal: [
    { id: 'aio', baslik: 'AIO Özet Cevap',              weight: 0.6 },
    { id: 'cta', baslik: 'Torem Zemin ile Çözüm (CTA)', weight: 0.6 },
  ],
  zorunlu: [
    { id: 'nedir', baslik: '[Konu] Nedir?',                weight: 3 },
    { id: 'sss',   baslik: 'Sıkça Sorulan Sorular (SSS)',  weight: 3 },
  ],
  informational: [
    { id: 'nasil',    baslik: '[Konu] Nasıl Yapılır? (Adımlar)',   weight: 3.5 },
    { id: 'cesitler', baslik: '[Konu] Çeşitleri ve Karşılaştırma', weight: 2.5 },
    { id: 'ne-zaman', baslik: '[Konu] Ne Zaman Gereklidir?',       weight: 2 },
  ],
  commercial: [
    { id: 'fiyat',   baslik: '[Konu] Fiyatları 2026',    weight: 3 },
    { id: 'maliyet', baslik: '[Konu] Maliyet Hesaplama', weight: 1.5 },
    { id: 'neden',   baslik: 'Neden Torem Zemin?',       weight: 1.5 },
  ],
  comparative: [
    { id: 'vs', baslik: '[Konu] vs Alternatifler', weight: 2.5 },
  ],
  technical: [
    { id: 'standart',    baslik: 'Standartlar ve Yönetmelik (TS EN / TBDY 2018)', weight: 2 },
    { id: 'deprem',      baslik: '[Konu] ve Deprem Dayanıklılığı', weight: 2 },
    { id: 'zemin-etudu', baslik: 'Zemin Etüdü ve [Konu] İlişkisi', weight: 2 },
  ],
  local: [
    { id: 'bolge', baslik: 'Bölgesel Uygulama ve Saha Sevki', weight: 1.5 },
  ],
};

// slug/keyword'den niyet sezimi (intent verilmemişse). commercial KOŞULLU —
// yalnız fiyat sinyali veya kayda değer arama hacmi (>1500 imp) varsa eklenir.
export function niyetSez(t) {
  const s = `${t.slug ?? ''} ${t.keyword ?? ''}`.toLowerCase();
  const niyet = new Set(['informational']); // taban: her teknik sayfası bilgilendirici
  if (Array.isArray(t.intent) && t.intent.length) t.intent.forEach((i) => niyet.add(i));
  const fiyatSinyali = /(fiyat|maliyet|firma|ücret|ucret|teklif|m3|m²|metrekare)/.test(s);
  if (fiyatSinyali || (t.impression ?? 0) > 1500) niyet.add('commercial');
  if (/(vs|karşılaştır|karsilastir| mi | mı |fark)/.test(s)) niyet.add('comparative');
  if (/(tbdy|ts en|hesap|standart|yönetmelik|yonetmelik|deprem|test|deney|inklinometre|pda|sivilas)/.test(s)) niyet.add('technical');
  if (/(istanbul|ankara|izmir|bursa|kocaeli|il |ilçe|ilce|bölge|bolge)/.test(s)) niyet.add('local');
  return [...niyet];
}

export function bolumSecimi(t, hedefKelime) {
  const niyetler = niyetSez(t);
  // adaylar: zorunlu + niyet grupları (yapısal ayrı tutulur)
  const adaylar = [...BOLUM_KUTUPHANESI.zorunlu];
  const eklenen = new Set(adaylar.map((b) => b.id));
  for (const niyet of niyetler) {
    for (const b of (BOLUM_KUTUPHANESI[niyet] ?? [])) {
      if (!eklenen.has(b.id)) { adaylar.push(b); eklenen.add(b.id); }
    }
  }
  // bütçeye göre içerik-bölüm tavanı (~220 kelime/bölüm) — cılız bölüm önlenir
  const maxIcerik = clamp(Math.round(hedefKelime / 220), 3, 14);
  const zorunluIdler = new Set(BOLUM_KUTUPHANESI.zorunlu.map((b) => b.id));
  const sirali = adaylar.slice().sort((a, b) => {
    const az = zorunluIdler.has(a.id) ? 1 : 0, bz = zorunluIdler.has(b.id) ? 1 : 0;
    return bz - az || b.weight - a.weight; // zorunlular önce, sonra ağırlık
  });
  const secikIcerik = sirali.slice(0, maxIcerik);
  // yapısal (aio/cta) + seçilen içerik bölümleri
  const secili = [...BOLUM_KUTUPHANESI.yapisal, ...secikIcerik];

  const toplamW = secili.reduce((s, b) => s + b.weight, 0);
  const dagilim = {};
  for (const b of secili) {
    dagilim[b.id] = {
      baslik: b.baslik.replace('[Konu]', t.baslik_konu ?? (t.slug ?? 'Konu')),
      kelime: Math.round((b.weight / toplamW) * hedefKelime / 25) * 25, // 25'e yuvarla
    };
  }
  return { niyetler, bolum_sayisi: secili.length, dagilim };
}

// ----- ana hesap -----
export function hesapla(t) {
  const kd = keywordDifficulty(t);
  const butce = kelimeButcesi(t, kd);
  const bolumler = bolumSecimi(t, butce.hedef_kelime);
  return {
    slug: t.slug ?? null,
    keyword_difficulty: kd,
    ...butce,
    niyet: bolumler.niyetler,
    bolum_sayisi: bolumler.bolum_sayisi,
    secili_bolumler: Object.keys(bolumler.dagilim),
    bolum_kelime_dagilimi: bolumler.dagilim,
    // kalite kontrol eşikleri (Agent 5 kapalı döngü)
    qc: {
      kelime_min: Math.round(butce.hedef_kelime * 0.9),
      kelime_max: Math.round(butce.hedef_kelime * 1.25),
      rakip_gecis_esigi: butce.rakip_gecis_esigi,
    },
  };
}

// ----- self-test: gerçek verilerle -----
const ORNEKLER = [
  { slug: 'jet-grout',  rakip_ort_kelime: 1000, rakip_ort_h2: 5,  rekabet: 'orta',   cpc_usd: 1.5, impression: 15004, keyword: 'jet grout', baslik_konu: 'Jet Grout' },
  { slug: 'fore-kazik', rakip_ort_kelime: 1500, rakip_ort_h2: 9,  rekabet: 'yüksek', cpc_usd: 2.2, impression: 57968, keyword: 'fore kazık', baslik_konu: 'Fore Kazık' },
  { slug: 'cfa-kazik',  rakip_ort_kelime: 800,  rakip_ort_h2: 4,  rekabet: 'düşük',  cpc_usd: 0.6, impression: 320,   keyword: 'cfa kazık', baslik_konu: 'CFA Kazık' },
];

async function main() {
  const arg = process.argv[2];
  if (arg === '--self-test' || !arg) {
    console.log('=== SEO Motoru v2 — Self Test (gerçek verilerle) ===\n');
    for (const o of ORNEKLER) {
      const r = hesapla(o);
      console.log(`[${o.slug}]  KD=${r.keyword_difficulty}  hedef=${r.hedef_kelime} kelime  (rekabet×${r.rekabet_carpani}, hacim×${r.hacim_carpani})`);
      console.log(`   niyet: ${r.niyet.join(', ')}  |  ${r.bolum_sayisi} bölüm: ${r.secili_bolumler.join(', ')}`);
      console.log(`   QC: [${r.qc.kelime_min}-${r.qc.kelime_max}] kelime, rakip geçiş ≥${r.qc.rakip_gecis_esigi}\n`);
    }
    return;
  }
  const raw = await readFile(arg, 'utf8');
  const t = JSON.parse(raw);
  console.log(JSON.stringify(hesapla(t), null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
