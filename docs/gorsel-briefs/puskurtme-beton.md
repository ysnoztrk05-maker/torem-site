# Görsel Brief — Püskürtme Beton (shotcrete)

**Hedef sayfa:** `/faaliyet-alanlari/iksa-sistemleri/puskurtme-beton/`
**Üretim:** Antigravity / Nano Banana (Gemini). Prompt'ları çalıştır, çıktıyı aşağıdaki
dosya adıyla `public/images/iksa/` klasörüne bırak. Ben AVIF/WebP'e çevirip `<picture>` ile bağlarım.

**Marka/stil kuralı (her görselde):** gerçekçi saha fotoğrafı estetiği, Türkiye şantiye
koşulları, doğal ışık; Torem Zemin premium ton (navy/altın vurgu abartısız). Metin/logo YOK.
En-boy 16:10, min 1600px genişlik.

---

## 1. Hero / kapak (zorunlu) — `puskurtme-beton.jpg` (mevcut olanı değiştirir)
> A construction worker operating a shotcrete (sprayed concrete) nozzle, spraying wet
> concrete onto a steep excavation slope reinforced with steel wire mesh, on a Turkish
> urban deep-excavation site. Realistic site photo, natural daylight, orange safety vest,
> visible concrete spray and slight overspray mist, retaining/shoring context in background.
> Documentary construction photography, 16:10, high detail.

## 2. Kuru vs Yaş sistem — diyagram/görsel `puskurtme-kuru-yas.jpg`
> Clean technical comparison illustration of dry-mix vs wet-mix shotcrete process: two
> side-by-side schematic nozzles, one adding water at the nozzle (dry-mix), the other with
> premixed wet concrete. Minimal, engineering-diagram style, navy + gold accents on light
> background, labeled arrows (no Turkish text needed — I add captions in HTML). 16:10.

## 3. Şev yüzeyi kaplaması (uygulama) — `puskurtme-sev-kaplama.jpg`
> Finished shotcrete surface on a soil-nailed excavation wall: grey sprayed concrete face
> with visible soil-nail head plates and weep-hole drainage pipes, urban construction site,
> steel mesh partially visible at edges. Realistic documentary photo, natural light, 16:10.

---

**Not:** Görseller gelince `convert-images.mjs` TARGETS'a zaten `iksa` klasörü ekli;
`node scripts/convert-images.mjs` ile AVIF/WebP üretilir, içeriğe `<picture>` ile eklenir.
