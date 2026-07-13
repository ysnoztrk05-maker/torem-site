# Torem SEO Motoru v2 — Rekabet-Farkında İçerik Motoru

Bu döküman, teknik/hizmet sayfalarının SEO içeriğini **rekabete ve arama hacmine göre**
boyutlandıran motorun referansıdır. Amaç: "tek beden" (her sayfa 4000 kelime) yerine,
her konuya özel **adaptif kelime bütçesi + koşullu bölüm seçimi**.

## Neden
Eski pipeline rakip kelime sayısını topluyor ama kullanmıyordu; her sayfa sabit ~4000
kelime hedefliyordu. Örn. jet-grout rakipleri ort. 1000 kelime yazmışken 4000 hedeflemek
4× aşırı mühendisliktir. Motor v2 bu kopuk döngüyü kapatır.

## Motor — `scripts/seo-budget.mjs`

Deterministik hesaplayıcı (matematik kod, LLM tahmini değil). Konu sinyallerinden
Keyword Difficulty (KD 0-100), adaptif kelime bütçesi ve bölüm dağılımı üretir.

### Kullanım
```bash
node scripts/seo-budget.mjs <konu.json>     # tam çıktı (JSON)
node scripts/seo-budget.mjs --self-test      # gerçek verilerle doğrulama
```

### Girdi JSON (kaynak: keyword_map + GSC)
```json
{
  "slug": "jet-grout",
  "baslik_konu": "Jet Grout",
  "keyword": "jet grout",
  "rakip_ort_kelime": 1000,       // keyword_map.rakip_analiz.ort_kelime
  "rakip_ort_h2": 5,
  "rekabet": "orta",               // düşük | orta | yüksek
  "cpc_usd": 1.5,
  "impression": 15004,             // GSC 90 gün
  "intent": ["informational"]      // opsiyonel; yoksa slug/keyword'den sezilir
}
```

### Formüller
- **KD** = 100·(0.30·N(rakip_kelime,500..3000) + 0.25·rekabet + 0.20·N(cpc,0..5) + 0.15·N(h2,3..15) + 0.10·N(imp,0..50k))
- **rekabet_çarpanı** = 1.10 + (KD/100)·0.60  → 1.10 (kolay) … 1.70 (zor)
- **hacim_çarpanı** = imp<500:0.90 | <3k:1.0 | <15k:1.15 | <30k:1.30 | ≥30k:1.50
- **hedef_kelime** = clamp(round100(rakip_kelime · rekabet_çarpanı · hacim_çarpanı), 900, 5000)
- **bölüm tavanı** = clamp(round(hedef/220), 3, 14) içerik bölümü (cılız bölüm önlenir)

### Doğrulanmış çıktılar
| Konu | KD | hedef | bölüm |
|---|---|---|---|
| jet-grout (imp 15K, orta) | 31 | 1700 | 10 |
| fore-kazik (imp 58K, yüksek) | 61 | 3300 | 10 |
| cfa-kazik (imp <500, düşük) | 12 | 900 | 6 |

## Bölüm Kütüphanesi (niyet-bazlı)
- **Yapısal (her zaman, tavana sayılmaz):** AIO Özet, CTA
- **Zorunlu:** Nedir, SSS
- **informational:** Nasıl Yapılır, Çeşitler, Ne Zaman
- **commercial** (fiyat sinyali veya imp>1500): Fiyat 2026, Maliyet, Neden Torem
- **comparative** (vs/mi): Karşılaştırma
- **technical** (TBDY/standart/test): Standartlar, Deprem, Zemin Etüdü İlişkisi
- **local** (il/ilçe): Bölgesel Uygulama

## Kapalı-Döngü Kalite Kontrol
- Kelime ∈ [0.9·hedef, 1.25·hedef] (alt + üst sınır, padding yasak)
- Coverage: keyword_map cluster + PAA sorularının ≥%85'i işlenmiş
- Rakip-derinlik: kelime ≥ rakip_geçiş_eşiği (taban·rekabet_çarpanı)
- Yapısal: tek H1, 4 schema, iç link ≥5, AIO kutu, §8 görsel (<picture> AVIF/WebP)

## Hibrit Yürütme Akışı
1. **Claude:** keyword_map + GSC → `seo-budget.mjs` → brief (bütçe + bölümler)
2. **Claude:** içeriği adaptif uzunlukta yaz → `src/data/faaliyet-alanlari.ts` `content`
3. **Claude:** görsel-brief üret → `<konu>/gorsel-brief.md` (Nano Banana prompt + hedef dosya)
4. **Kullanıcı (Antigravity/Nano Banana):** görselleri üret → klasöre bırak
5. **Claude:** görselleri AVIF/WebP'e çevir (`convert-images.mjs`) → `<picture>` ile bağla → build + commit

## Önceliklendirme (GSC/GA4)
`seo-strateji-raporu/strateji_raporu.json`'a göre iş sırası (öncelik skoru):
jet-grout 92 → fore-kazik 85 (koru) → iksa 78 → mini-kazik 72 → zemin-iyilestirme 70 →
puskurtme-beton 68 → kazik-temel-hub 65 → ongermeli-ankraj 60 → deep-soil-mixing 55 …

`oncelik = 0.35·N(imp) + 0.25·ctr_açığı + 0.20·pozisyon_potansiyeli + 0.20·ga4_kalite`

> Not: fore-kazik, mini-kazik, jet-grout, ongermeli-ankraj Astro sitesinde zaten
> tam içerikli — motor öncelikle 41 stub teknik sayfasına uygulanır.
