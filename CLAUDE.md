# CLAUDE.md — Torem Zemin Projesi

Bu dosyayı her oturumda oku. Tüm kararlarını buna göre ver.

## ⛔ İZOLASYON KURALI — KRİTİK
Bu proje **Astro statik site** projesidir.
- SADECE `scratch/torem-site/` klasöründe çalış
- `scratch/torem-zemin-2026/` klasörüne DOKUNMA (ayrı WordPress projesi)
- `scratch/fore-kazik/`, `scratch/jet-grout/` vb. içerik klasörlerine DOKUNMA
- Bu kuralı hiçbir koşulda geçersiz sayma

---

## 1. Proje Kimliği

- **Şirket:** Torem Zemin Mühendislik
- **Site:** https://www.toremzemin.com
- **Canlı:** https://torem-site.vercel.app
- **GitHub:** github.com/ysnoztrk05-maker/torem-site
- **Sektör:** Geoteknik mühendislik (fore kazık, ankraj, jet grout, mini kazık, zemin çivisi, iksa)
- **Hedef kitle:** İnşaat proje müdürleri, müteahhitler, yapı denetim firmaları
- **Dil:** Türkçe (tüm içerik ve kod yorumları)

---

## 2. Build & Dev Komutları

```bash
npm run dev       # Dev server → localhost:4321
npm run build     # Statik build → dist/
npm run preview   # Production önizleme
```

Node requirement: `>=22.12.0`. Test runner yok.

---

## 3. Mimari

**Astro 6.x statik site** (`output: 'static'`) — sıfır sunucu runtime.

### Veri Akışı

`src/data/content.ts` tüm sayfa içeriği için tek kaynak.
`src/data/faaliyet-alanlari.ts` — 8 kategori, 40+ teknik.
`src/lib/wordpress.ts` WP REST API yardımcıları — henüz aktif değil.

### Layout & Komponentler

Tek layout: `src/layouts/BaseLayout.astro` — her sayfa bunu kullanır.
Komponentler: `Hero`, `ServiceCard`, `CTABox`, `FAQAccordion`, `StatsCounter`, `AuthorBox`, `Breadcrumb`

### Styling

- `src/styles/global.css` — tasarım token'ları, reset, tipografi
- Her `.astro` dosyasında scoped `<style>`
- CSS framework yok — tamamen custom

---

## 4. Klasör Haritası

```
scratch/
├── torem-site/          ← Astro projesi (SEN BURASINDAKİSIN)
│   ├── CLAUDE.md        ← Bu dosya
│   ├── src/
│   │   ├── pages/
│   │   │   ├── faaliyet-alanlari/  ← 8 kategori / 40+ teknik
│   │   │   ├── makine-parki/       ← Makine parkı sayfası
│   │   │   ├── projelerimiz/
│   │   │   ├── blog/
│   │   │   └── iletisim/
│   │   ├── layouts/     ← BaseLayout
│   │   ├── components/
│   │   ├── data/        ← content.ts + faaliyet-alanlari.ts
│   │   ├── lib/
│   │   └── styles/
│   └── public/
│       └── images/      ← Gerçek saha fotoğrafları + logolar
│
├── seo-agent/.agent/workflows/  ← SEO + Sosyal Medya pipeline
│
└── torem-zemin-2026/    ← Referans WordPress teması
```

---

## 5. Sprint Durumu

```
Sprint 1  ✅ Deploy, Formspree form, WhatsApp butonu
Sprint 2  ✅ Logo bandı, süreç adımları, filtre, sayaç
Sprint 3A ✅ 8 kategori / 71 sayfa mimari (commit: 886ed0d)
Sprint 3B 🔄 İçerik doldurma (Nano Banana + SEO pipeline)
Sprint 3C ⏳ Yerel bölge sayfaları
Sprint 4  ⏳ Blog + chatbot + hesaplayıcı
Sprint 5  ⏳ Domain yönlendirme (toremzemin.com)
```

---

## 6. Yeni Mimari — 8 Kategori

**URL yapısı:** `/faaliyet-alanlari/[kategori]/[teknik]/`

1. `kazikli-temeller` → fore-kazik, mini-kazik, cfa-kazik, baret-kazik, betonarme-kazik, cakma-kazik
2. `iksa-sistemleri` → ankrajli-fore-kazik, diyafram-duvar, slurry-trench, berlin-duvari, palplans, secant-pile, mini-kazikli-iksa, toprakarme-duvar, puskurtme-beton
3. `zemin-iyilestirme` → jet-grout, deep-soil-mixing, zemin-enjeksiyonu, tas-kolon, fitil-dren, vibro-kompaksiyon
4. `destekleme-ankraj` → ongermeli-ankraj, kalici-ankraj, gecici-ankraj, kaya-ankraji, zemin-civisi
5. `gecirimsizlik-perdeleri` → jet-grout-perdesi, secant-perde, slurry-perde, enjeksiyon-perdesi
6. `sev-stabilitesi` → heyelan-onleme, kaya-dusmesi-onleme, istinat-duvari, celik-hasir-ag, moloz-akisi-onleme
7. `geoteknik-test-izleme` → statik-yukleme, dinamik-pda, pit-testi, inklinometre, aletsel-gozlem
8. `geoteknik-proje` → zemin-etudu, projelendirme, derin-kazi-projesi, saha-denetimi, teknik-danismanlik

---

## 7. Renk Paleti — Premium V2.0 (Navy & Gold)

**Tek gerçek kaynak:** `src/styles/global.css` `:root` bloku.

```css
--color-primary:      #002147;   /* navy — header, dark sections */
--color-secondary:    #0f3460;   /* derin navy */
--color-accent:       #1d6ea5;   /* çelik mavi — links, accent */
--color-highlight:    #d4af37;   /* altın — CTA, vurgu */
--color-navy-dark:    #001530;   /* en koyu navy */
--color-bg:           #fafaf7;   /* krem — sayfa zemini */
--color-bg-alt:       #f0f0eb;
--color-text:         #333333;
--color-text-muted:   #5A6A7A;
--color-border:       #e2e0db;
--color-white:        #FFFFFF;
```

**Kullanım kuralı:**
- `.astro` `<style>` blokları → `var(--color-*)`
- `.astro` inline SVG fill/stroke → yeni hex değer
- `.ts` template literal SVG → yeni hex değer

**YASAK:** `#1B2B3A`, `#C8873A`, `#2E5077`, `#4A7FA5`, `#F5F2ED`, `#cfa856`

---

## 8. Proje Kuralları

- **Dil:** Türkçe. `lang="tr"`, `charset="UTF-8"`
- **Layout:** Her sayfa `<BaseLayout>` içinde
- **JS:** Vanilla only — jQuery, parçacık animasyonu, backdrop-filter YASAK
- **SVG:** `viewBox` zorunlu. `<br>` SVG içinde YASAK. Satır atlama: `<tspan dy="14">`
- **Gradient text** YASAK. Glassmorphism YASAK
- **Görseller:** `alt`, `loading="lazy"`, `width/height` zorunlu
- **SEO:** `<title>` ≤60ch, `<meta description>` ≤155ch, canonical, OG tags, JSON-LD

---

## 9. İletişim & CTA

```
Tel 1: +90 531 659 46 36  →  tel:+905316594636
Tel 2: +90 216 379 33 10  →  tel:+902163793310
Email: info@toremzemin.com
CTA: "Ücretsiz Keşif Raporu Alın"
WhatsApp: wa.me/905316594636
```

---

## 10. Makine Parkı

Gerçek makineler (Torem'in kendi ekipmanları):
- Soilmec SR-40 (fore kazık)
- Casagrande B200 XP (fore kazık)
- Bauer BG20 (fore kazık)
- Soilmec SM-400 (ankraj/jet grout)
- Mini kazık / CFA kazık makineleri
- Vibro, enjeksiyon, püskürtme beton ekipmanları

Görseller: `public/images/makineler/` klasöründe.

---

## 11. Görsel Arşivi

```
C:\Users\Lenovo\OneDrive\Masaüstü\torem-website-foto\
├── makine parkuru görseller/  ← 118 dosya
├── referans logolar/          ← 95 dosya
├── jpeg ana sayfa/            ← 64 dosya
├── şantiye fotoğrafları/      ← 43 dosya
├── abalıoğlu/                 ← 32 dosya (proje)
├── gebze fabrika/             ← 29 dosya (proje)
├── denizli-smart/             ← 25 dosya (proje)
├── millet bahçesi/            ← 17 dosya (proje)
└── ...toplam 650 dosya
```

---

## 12. Deploy

- **Platform:** Vercel
- **Repo:** GitHub → ysnoztrk05-maker/torem-site
- **Build:** `npm run build` → `dist/`
- **Domain:** toremzemin.com (şimdilik Vercel URL)

---

## 13. SEO İçerik Pipeline

Workflow'lar: `../seo-agent/.agent/workflows/`

**8 Agent Pipeline:**
0. Strateji raporu (`seo-strateji-raporu.md`)
1. Araştırma (`seo-arastirma.md`) — GSC + GA4 + rakip
1.5. Keyword cluster (`seo-keyword-cluster.md`)
2. İçerik yazımı (`seo-yazim.md`) — ≥4000 kelime, AIO/GEO uyumlu
3. Görsel üretim (`seo-gorsel.md`) — Nano Banana 2 + fal-ai
4. HTML montaj (`seo-html-montaj.md`)
5. Kalite kontrol (`seo-kalite-kontrol.md`)
6. WordPress yayın (`seo-yayin.md`) — MCP ile
7. Performans izleme (`seo-performans-izleme.md`) — 30/60/90 gün

**İçerik önceliği:** fore-kazik → jet-grout → ankraj → 8 kategori

---

## 14. Sosyal Medya Modülü

Workflow: `../seo-agent/.agent/workflows/sosyal-medya-icerik.md`

**4 Kanal:**
- LinkedIn — teknik yazı + infografik (haftada 3)
- Instagram — carousel 9 slayt + Reels 30 sn
- YouTube — uzun video 5-10 dk + Short 60 sn
- Facebook — kısa video + fotoğraf albümü

**Araçlar:**
- Nano Banana 2 (fal-ai) — carousel/thumbnail tasarımı
- Veo3 (fal-ai) — video üretimi
- fal-ai imagen4 — görsel üretimi

**Yayın Takvimi:**
- PAZARTESİ: LinkedIn teknik yazı
- SALI: Instagram carousel
- ÇARŞAMBA: YouTube video
- PERŞEMBE: Facebook albüm
- CUMA: LinkedIn proje
- CUMARTESİ: Instagram Reels
- PAZAR: YouTube Short

---

## 15. Slash Komutları

```
/seo-icerik [slug]        → Tam SEO pipeline (8 agent)
/seo-strateji             → Aylık strateji raporu
/seo-performans [slug]    → Sayfa performans analizi
/sosyal-medya [slug]      → 4 kanal sosyal medya içeriği
/tasarim-denetim [hedef]  → Tasarım denetimi ve düzeltme
```
