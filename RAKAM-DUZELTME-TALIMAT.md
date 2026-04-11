# Sabit Rakam Düzeltme Talimatı
**Tarih:** 2026-04-10
**Dosya:** `src/pages/index.astro`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/`

---

## SORUN

`index.astro` içinde hero stat kartları artık `heroStats.map()` ile `sirket.ts`'den doğru geliyor.
Ancak sayfa içindeki **içerik bölümlerinde** hâlâ eski abartılı rakamlar sabit yazılı.

---

## YAPILACAKLAR — 3 satır düzeltme

### Düzeltme 1 — Satır ~190 ("Neden Biz?" kartı)

**Bul:**
```
55+ iş makinesi — kiralık değil, kendi mülkümüz.
```

**Değiştir:**
```
15 iş makinesi — kiralık değil, kendi mülkümüz.
```

---

### Düzeltme 2 — Satır ~322 ("Hakkımızda" paragrafı)

**Bul:**
```
600'ü aşkın geoteknik projeye imza atmıştır.
```

**Değiştir:**
```
250'yi aşkın geoteknik projeye imza atmıştır.
```

---

### Düzeltme 3 — Satır ~331 (liste maddesi)

**Bul:**
```
55'i aşkın modern iş makinesi parkı
```

**Değiştir:**
```
15 modern iş makinesi parkı
```

---

## BONUS — İleride tekrar sabit rakam yazılmasın

Bu 3 satırı düzelttikten sonra, `sirket.ts`'den import ile dinamik hale getir:

Frontmatter'da zaten `import { heroStats } from '../data/sirket';` var.
Buna ekle:
```astro
import { sirket, makineSayisi } from '../data/sirket';
```

Sonra sabit rakamları şöyle değiştir:
- `15 iş makinesi` → `{makineSayisi} iş makinesi`
- `15 modern iş makinesi` → `{makineSayisi} modern iş makinesi`
- `250'yi aşkın` → sabit kalabilir (referans sayısı otomatik hesaplanmıyor)

---

## BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Hata yoksa:
```bash
git add src/pages/index.astro
git commit -m "fix: index.astro — abartılı sabit rakamlar düzeltildi (55→15 makine, 600→250 proje)"
git push origin main
```

---

## DOĞRULAMA

- [ ] "55+ iş makinesi" ifadesi index.astro'da kalmadı (`grep "55" src/pages/index.astro`)
- [ ] "600" rakamı içerik bölümünde kalmadı (`grep "600" src/pages/index.astro`)
- [ ] Hero stat kartları hâlâ `heroStats.map()` ile geliyor (bozulmadı)
- [ ] Build sıfır hata
