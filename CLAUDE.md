# CLAUDE.md — Torem Zemin Projesi

Bu dosyayı her oturumda oku. Tüm kararlarını buna göre ver.

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

`src/data/content.ts` tüm sayfa içeriği için tek kaynak:
- `hizmetler: Hizmet[]` — hizmetler (slug, title, excerpt, image, content HTML, FAQ)
- `blogPosts: BlogPost[]` — blog yazıları
- `stats: Stat[]` — sayaç verileri
- `company` — telefon, email, adres, harita URL
- `u(id, w, h)` — Unsplash görsel URL yardımcısı

Dinamik rotalar (`[slug].astro`) `getStaticPaths()` ile content.ts'den beslenir.

`src/lib/wordpress.ts` WP REST API yardımcıları içerir ama **henüz aktif değil** — site statik demo verisi üzerinde çalışıyor.

### Layout & Komponentler

Tek layout: `src/layouts/BaseLayout.astro` — her sayfa bunu kullanır.
İçerir: Topbar, sticky header, mobil menü, CTA bandı, footer, WhatsApp FAB, Organization JSON-LD, SEO head.

Props: `title` (zorunlu), `description?`, `canonical?`, `ogImage?`, `schema?`, `noindex?`

Komponentler: `Hero`, `ServiceCard`, `CTABox`, `FAQAccordion`, `StatsCounter`, `AuthorBox`, `Breadcrumb`

### Styling

- `src/styles/global.css` — tasarım token'ları, reset, tipografi, utility class'lar
- Her `.astro` dosyasında scoped `<style>`
- CSS framework yok — tamamen custom

### Client JS

Minimal, vanilla only:
- StatsCounter: IntersectionObserver ile count-up animasyonu
- Mobil nav toggle, sticky header scroll tespiti
- FAQ accordion
- Proje kategori filtresi
- Karar ağacı interaktif quiz

---

## 4. Klasör Haritası

```
scratch/
├── torem-site/          ← Astro projesi (SEN BURASINDAKİSIN)
│   ├── CLAUDE.md        ← Bu dosya
│   ├── src/
│   │   ├── pages/       ← Sayfa dosyaları (.astro)
│   │   ├── layouts/     ← BaseLayout
│   │   ├── components/  ← Hero, ServiceCard, FAQ vb.
│   │   ├── data/        ← content.ts (tek kaynak)
│   │   ├── lib/         ← wordpress.ts (API bağlantısı)
│   │   └── styles/      ← global.css
│   └── public/          ← Görseller, favicon
│
├── seo-agent/.agent/workflows/  ← SEO pipeline workflow'ları (8 agent)
│   ├── seo-strateji-raporu.md   ← Agent 0
│   ├── seo-arastirma.md         ← Agent 1
│   ├── seo-keyword-cluster.md   ← Agent 1.5
│   ├── seo-yazim.md             ← Agent 2
│   ├── seo-gorsel.md            ← Agent 3
│   ├── seo-html-montaj.md       ← Agent 4
│   ├── seo-kalite-kontrol.md    ← Agent 5
│   ├── seo-yayin.md             ← Agent 6
│   ├── seo-icerik.md            ← Ana orkestratör
│   └── seo-performans-izleme.md ← Agent 7
│
└── torem-zemin-2026/    ← Referans WordPress teması (PHP)
```

---

## 5. Sprint Durumu

```
Sprint 1 ✅ Deploy, Formspree form, WhatsApp butonu
Sprint 2 ✅ Logo bandı, süreç adımları, filtre, sayaç
Sprint 3A 🔄 Mimari yeniden yapı (8 kategori / 40+ teknik)
Sprint 3B ⏳ İçerik doldurma
Sprint 3C ⏳ Yerel bölge sayfaları
Sprint 4  ⏳ Blog + chatbot + hesaplayıcı
Sprint 5  ⏳ Domain yönlendirme (toremzemin.com)
```

---

## 6. Sprint 3A — Yeni Mimari (YAPILACAK)

**Eski yapı:** `/hizmetlerimiz/[slug]/`
**Yeni yapı:** `/faaliyet-alanlari/[kategori]/[teknik]/`

### 8 Kategori:

1. `kazikli-temeller` → fore-kazik, mini-kazik, cfa-kazik, baret-kazik, betonarme-kazik, cakma-kazik
2. `iksa-sistemleri` → ankrajli-fore-kazik, diyafram-duvar, slurry-trench, berlin-duvari, palplans, secant-pile, mini-kazikli-iksa, toprakarme-duvar, puskurtme-beton
3. `zemin-iyilestirme` → jet-grout, deep-soil-mixing, zemin-enjeksiyonu, tas-kolon, fitil-dren, vibro-kompaksiyon
4. `destekleme-ankraj` → ongermeli-ankraj, kalici-ankraj, gecici-ankraj, kaya-ankraji, zemin-civisi
5. `gecirimsizlik-perdeleri` → jet-grout-perdesi, secant-perde, slurry-perde, enjeksiyon-perdesi
6. `sev-stabilitesi` → heyelan-onleme, kaya-dusmesi-onleme, istinat-duvari, celik-hasir-ag, moloz-akisi-onleme
7. `geoteknik-test-izleme` → statik-yukleme, dinamik-pda, pit-testi, inklinometre, aletsel-gozlem
8. `geoteknik-proje` → zemin-etudu, projelendirme, derin-kazi-projesi, saha-denetimi, teknik-danismanlik

### Sprint 3A Adımları:
1. `src/data/faaliyet-alanlari.ts` oluştur (8 kategori, 40+ teknik)
2. `src/pages/faaliyet-alanlari/[kategori]/[teknik].astro` oluştur
3. `src/pages/faaliyet-alanlari/[kategori]/index.astro` oluştur
4. `src/pages/faaliyet-alanlari/index.astro` oluştur
5. BaseLayout navigasyonunu güncelle: hover mega menü, 8 kategori
6. Ana sayfada 8 kategori kartı grid
7. Breadcrumb: Ana Sayfa → Faaliyet Alanları → [Kategori] → [Teknik]
8. `npm run build` (0 hata) → git commit → git push

---

## 7. Renk Paleti — Palet A (Zemin & Çelik)

```css
--color-primary:    #1B2B3A;  /* gece çeliği — ana arka plan, header */
--color-secondary:  #2E5077;  /* derin mavi — hero, bölüm arka planları */
--color-accent:     #4A7FA5;  /* çelik mavi — linkler, hover */
--color-highlight:  #C8873A;  /* pas/toprak — CTA butonları, vurgu */
--color-bg:         #F5F2ED;  /* ılık krem — sayfa zemini */
--color-text:       #1B2B3A;
--color-text-muted: #5A6A7A;
--color-white:      #FFFFFF;
```

**Tipografi:** Inter veya system-ui. Başlıklar font-weight: 700, gövde 400.

---

## 8. Proje Kuralları

- **Dil:** Tüm içerik ve kod yorumları Türkçe. `lang="tr"`, `charset="UTF-8"`
- **Layout:** Her sayfa `<BaseLayout>` içinde olacak
- **JS:** Vanilla only — jQuery yok, ağır kütüphane yok, parçacık animasyonu yok
- **SVG:** `viewBox` kullan, sabit `width/height` YASAK. Satır atlama: `<tspan dy="14">`. SVG içinde `<br>` KESİNLİKLE YASAK
- **Gradient text** (`-webkit-background-clip: text`) YASAK
- **backdrop-filter**, glassmorphism YASAK
- **Koyu arka plan + koyu metin** YASAK
- **Görseller:** `alt`, `loading="lazy"`, `width/height` zorunlu
- **SEO:** Her sayfada `<title>` ≤60ch, `<meta description>` ≤155ch, canonical, OG tags, JSON-LD schema
- **Sitemap:** `@astrojs/sitemap` aktif, `/taslak/` filtreli

---

## 9. İletişim & CTA

```
Tel 1: +90 531 659 46 36  →  tel:+905316594636
Tel 2: +90 216 379 33 10  →  tel:+902163793310
Email: info@toremzemin.com
CTA metni: "Ücretsiz Keşif Raporu Alın"
İletişim: /iletisim/
```

---

## 10. WordPress API

```
Base URL: https://www.toremzemin.com/wp-json/wp/v2
Posts:    /posts?per_page=20&status=publish
Pages:    /pages
```

`src/lib/wordpress.ts` dosyasında tüm API fonksiyonları tanımlı. **Henüz aktif değil.**

---

## 11. Deploy

- **Platform:** Vercel (ücretsiz tier)
- **Repo:** GitHub → ysnoztrk05-maker/torem-site
- **Build:** `npm run build` → `dist/`
- **Domain:** toremzemin.com (şimdilik Vercel URL'de test)

---

## 12. SEO İçerik Pipeline (Referans)

Yeni hizmet sayfası üretirken sırayla uygula.
Detaylı workflow'lar: `../seo-agent/.agent/workflows/`

**8 Agent Pipeline:**
0. Strateji raporu (`seo-strateji-raporu.md`) — ayda bir
1. Araştırma (`seo-arastirma.md`) — GSC + GA4 + rakip analizi
1.5. Keyword cluster (`seo-keyword-cluster.md`) — semantik gruplama
2. İçerik yazımı (`seo-yazim.md`) — ≥4000 kelime, 12 bölüm, 12 SSS
3. Görsel üretim (`seo-gorsel.md`) — 5 SVG + 6 AI görsel (fal-ai)
4. HTML montaj (`seo-html-montaj.md`)
5. Kalite kontrol (`seo-kalite-kontrol.md`) — 14+6 test
6. WordPress yayın (`seo-yayin.md`) — MCP ile direkt
7. Performans izleme (`seo-performans-izleme.md`) — 30/60/90 gün

**Slash komutları (Claude Code CLI):**
- `/seo-icerik [konu-slug]` — tam pipeline
- `/seo-strateji` — aylık strateji raporu
- `/seo-performans [slug]` — sayfa analizi
