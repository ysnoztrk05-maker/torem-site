# CLAUDE.md — Torem Zemin Projesi Brifing Belgesi

Bu dosyayı her oturumda oku. Tüm kararlarını buna göre ver.

---

## 1. Proje Kimliği

- **Şirket:** Torem Zemin Mühendislik
- **Site:** https://www.toremzemin.com
- **Sektör:** Geoteknik mühendislik (fore kazık, ankraj, jet grout, mini kazık, zemin çivisi, iksa)
- **Hedef kitle:** İnşaat proje müdürleri, müteahhitler, yapı denetim firmaları
- **Konum:** Türkiye
- **Dil:** Türkçe (tüm içerik ve kod yorumları)

---

## 2. Klasör Haritası

```
scratch/
├── torem-site/          ← Astro projesi (SEN BURASINDAKİSIN)
│   ├── CLAUDE.md        ← Bu dosya
│   ├── src/
│   │   ├── pages/       ← Sayfa dosyaları (.astro)
│   │   ├── layouts/     ← BaseLayout, BlogLayout
│   │   ├── components/  ← Hero, ServiceCard, FAQ vb.
│   │   └── lib/         ← wordpress.ts (API bağlantısı)
│   └── public/          ← Görseller, favicon
│
├── torem-zemin-2026/    ← Referans WordPress teması (PHP)
│   ├── template-parts/components/  ← Dönüştürülecek komponentler
│   └── assets/css/base/_variables.css  ← CSS token referansı
│
└── seo-agent/.agent/workflows/  ← SEO pipeline workflow'ları
    ├── seo-arastirma.md
    ├── seo-icerik.md
    ├── seo-yazim.md
    ├── seo-gorsel.md
    ├── seo-html-montaj.md
    ├── seo-kalite-kontrol.md
    └── seo-yayin.md
```

---

## 3. Renk Paleti — Palet A (Zemin & Çelik)

```css
--color-primary:    #1B2B3A;  /* gece çeliği — ana arka plan, header */
--color-secondary:  #2E5077;  /* derin mavi — hero, bölüm arka planları */
--color-accent:     #4A7FA5;  /* çelik mavi — linkler, hover */
--color-highlight:  #C8873A;  /* pas/toprak — CTA butonları, vurgu */
--color-bg:         #F5F2ED;  /* ılık krem — sayfa zemini */
--color-text:       #1B2B3A;  /* ana metin */
--color-text-muted: #5A6A7A;  /* ikincil metin */
--color-white:      #FFFFFF;
```

**Tipografi:** Inter veya system-ui. Başlıklar font-weight: 700, gövde 400.
**Okunabilirlik öncelikli** — koyu arka planda beyaz metin, açık zeminde koyu metin. Gradient text YASAK.

---

## 4. Astro Geliştirme Kuralları

### Temel kurallar
- Output: `static` (statik HTML, sıfır sunucu)
- JavaScript: sadece zorunlu yerlerde (hesaplayıcı, accordion)
- Her sayfa `<BaseLayout>` içinde olacak
- Türkçe karakter desteği: `lang="tr"`, `charset="UTF-8"`

### WordPress API bağlantısı
```
Base URL: https://www.toremzemin.com/wp-json/wp/v2
Posts:    /posts?per_page=20&status=publish
Pages:    /pages
Hizmetler: /posts?categories=[ID]
```
`src/lib/wordpress.ts` dosyasında tüm API fonksiyonları tanımlı olacak.

### Komponent dönüşüm rehberi
PHP teması `../torem-zemin-2026/template-parts/components/` klasöründe.
Her `.php` dosyası → `src/components/` altında `.astro` dosyasına dönüşür:

| PHP | Astro |
|-----|-------|
| `hero-section.php` | `Hero.astro` |
| `service-card.php` | `ServiceCard.astro` |
| `cta-box.php` | `CTABox.astro` |
| `faq-accordion.php` | `FAQAccordion.astro` |
| `stats-counter.php` | `StatsCounter.astro` |
| `breadcrumb.php` | `Breadcrumb.astro` |
| `author-box.php` | `AuthorBox.astro` |

### SEO zorunlulukları (her sayfa)
- `<title>` — 60 karakter max, birincil keyword önde
- `<meta name="description">` — 155 karakter max
- Canonical URL
- OG tags (title, description, image, url)
- JSON-LD schema (Organization ana sayfada, Service hizmet sayfalarında)
- Sitemap: `@astrojs/sitemap` entegrasyonu aktif

---

## 5. SEO İçerik Pipeline

Yeni bir hizmet sayfası üretirken şu adımları sırayla uygula.
Referans workflow'lar: `../seo-agent/.agent/workflows/`

### Adım 1 — Araştırma
Şunları topla (araçlarla):
- GSC'den mevcut performans (`gsc` MCP ile `sc-domain:toremzemin.com`)
- Pozisyon 4-20 quick win fırsatları
- İlk 3 rakip sayfanın H1/H2 yapısı ve kelime sayısı
- People Also Ask soruları (SerpAPI veya Brave Search)
- Teknik kaynaklar (TBDY 2018, TS EN standartları)

Çıktı: `[konu-slug]/keyword_map.json`

### Adım 2 — İçerik Yazımı
- Minimum 4000 kelime
- 12 bölüm yapısı (referans: fore kazık sayfası)
- Her bölümde birincil keyword doğal kullanım
- E-E-A-T: uzman dili, somut veriler, standart referansları
- 12 SSS (PAA sorularından)
- 4 JSON-LD schema: FAQPage, Article, HowTo, BreadcrumbList

### Adım 3 — SVG İnfografikler
3 adet inline SVG:
1. Anatomi/kesit diyagramı
2. Uygulama akış şeması
3. Zemin sondaj logu

**SVG kuralları — KESİNLİKLE UYULACAK:**
- `viewBox` kullan, sabit `width/height` KULLANMA
- Satır atlama: `<tspan x="0" dy="14">` KULLAN
- `<br>` SVG içinde KESİNLİKLE YASAK (tarayıcı kırar)
- Renkler: #1B2B3A (ana), #2E5077 (ikincil), #C8873A (vurgu)

### Adım 4 — Kalite Kontrol (yayından önce)
```
[ ] Kelime sayısı ≥ 4000
[ ] H1 sayısı = 1, H2 sayısı ≥ 10
[ ] Görsel sayısı ≥ 8, tümünde alt etiketi
[ ] tümünde loading="lazy"
[ ] ≥ 2 CTA butonu
[ ] Canonical URL doğru
[ ] 4 JSON-LD schema mevcut ve geçerli
[ ] SVG içinde <br> yok
[ ] lang="tr" ve charset="UTF-8" mevcut
```

### Adım 5 — WordPress'e Gönder
- `<style>` + `<main>` içeriği + `<script>` → `wordpress-taslak-kodu.html`
- Encoding: UTF-8 (Türkçe karakter koruması)
- WordPress MCP ile taslak olarak gönder

---

## 6. İletişim & CTA Bilgileri

```
Tel 1: +90 531 659 46 36  →  tel:+905316594636
Tel 2: +90 216 379 33 10  →  tel:+902163793310
İletişim sayfası: /iletisim/
CTA metni: "Ücretsiz Keşif Raporu Alın"
```

---

## 7. Mevcut Hizmet Sayfaları

WordPress'te mevcut olan sayfalar (API'den çekilebilir):
- fore-kazik-nedir
- jet-grout-nedir
- ankraj-nedir (öngermeli-ankraj)
- mini-kazik-nedir
- zemin-civisi-nedir
- zemin-enjeksiyonu-nedir
- iksa-nedir
- zemin-ankraji
- puskurtme-beton

---

## 8. Yapılmaması Gerekenler

- `<br>` SVG içinde YASAK
- Gradient text (`-webkit-background-clip: text`) YASAK
- Koyu arka plan + koyu metin YASAK
- Gereksiz JavaScript yükleme YASAK
- Parçacık animasyonu, cursor glow, backdrop-filter YASAK
- `demo-preview.html` tasarımını olduğu gibi kopyalama (referans al, yeniden yaz)
- PageSpeed'i düşüren ağır kütüphane yükleme YASAK

---

## 9. Deploy Hedefi

- **Platform:** Vercel (ücretsiz tier)
- **Repo:** GitHub → torem-site
- **Build komutu:** `npm run build`
- **Output klasörü:** `dist/`
- **Domain:** toremzemin.com (şimdilik alt domain veya Vercel URL'de test)
- **Rebuild tetikleyici:** n8n webhook (WP içerik güncellenince otomatik)
