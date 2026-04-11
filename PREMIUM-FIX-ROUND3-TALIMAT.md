# PREMIUM FIX ROUND 3 — Görsel Sorunlar

**Tarih:** 2026-04-06
**Çalışma dizini:** `scratch/torem-site/`
**Durum:** Canlı sitede tespit edilen 3 sorun

---

## SORUN 1 — Ana Sayfa Hero Çok Uzun (YÜKSEk ÖNCELİK)

**Dosya:** `src/pages/index.astro`

**Sorun:** `.premium-hero` CSS'inde `padding-block: 220px 140px` var.
Bu hero'yu 886px yüksekliğinde yapıyor. Kullanıcı scroll etmeden altındaki içeriği göremez.

**Fix:**
```css
/* MEVCUT */
.premium-hero {
  ...
  padding-block: 220px 140px;
  ...
}

/* DEĞİŞTİR → */
.premium-hero {
  ...
  padding-block: 160px 100px;
  ...
}
```

**Hedef:** Hero yüksekliği ~650px'e düşsün, alt bölümler fold'un hemen altında görünsün.

---

## SORUN 2 — Kurumsal Timeline Kartları Görünmüyor (YÜKSEk ÖNCELİK)

**Dosya:** `src/pages/kurumsal/index.astro`

**Sorun:** `.timeline-item__content` CSS'inde:
- `background: white` → timeline section da `#fafaf7` krem arka plan
- `box-shadow: 0 10px 30px rgba(0,0,0,0.03)` → neredeyse görünmez gölge
- Sonuç: Kartlar var ama gözle seçilemiyor, sayfa boş gibi görünüyor

**Fix — sadece CSS değişikliği:**

```css
/* MEVCUT */
.timeline-item__content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

/* DEĞİŞTİR → */
.timeline-item__content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06);
  border-left: 3px solid var(--color-gold, #cfa856);
  transition: all 0.3s ease;
}
```

**Ayrıca hover durumu da güçlendir:**
```css
/* MEVCUT */
.timeline-item:hover .timeline-item__content {
  transform: translateX(10px);
  border-color: var(--color-gold, #cfa856);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

/* DEĞİŞTİR → */
.timeline-item:hover .timeline-item__content {
  transform: translateX(8px);
  border-color: var(--color-gold, #cfa856);
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
}
```

---

## SORUN 3 — Kurumsal Stats Sayacı Doğrulama (ORTA ÖNCELİK)

**Dosya:** `src/pages/kurumsal/index.astro`

**Durum:** Sayaç animasyonu çalışıyor (IntersectionObserver tetikleniyor) ama 4. istatistik şu an `250+ Memnun Müşteri` gösteriyor. Bu değer gerçekçi mi? Eğer onaylıysa sorun yok.

**Kontrol Et:** stats dizisindeki değerler:
```astro
const stats = [
  { num: '20', suffix: '+', lbl: 'Yıl Deneyim' },
  { num: '600', suffix: '+', lbl: 'Tamamlanan Proje' },
  { num: '55', suffix: '+', lbl: 'İş Makinesi' },
  { num: '250', suffix: '+', lbl: 'Memnun Müşteri' },  ← bu 250 mü yoksa başka bir değer mi?
];
```

Eğer değer yanlışsa sadece `num` alanını güncelle.

---

## UYGULAMA SIRASI

```
1. src/pages/index.astro → .premium-hero padding-block düzelt (2 sayı değişiyor)
2. src/pages/kurumsal/index.astro → .timeline-item__content box-shadow ve border güçlendir
3. DOĞRULAMA: npm run build (hata olmamalı)
4. git add src/pages/index.astro src/pages/kurumsal/index.astro
5. git commit -m "fix: hero height ve timeline card visibility düzeltildi"
6. git push origin main
```

Vercel otomatik deploy alır (~2 dakika).

---

## DOĞRULAMA KONTROL LİSTESİ

Build sonrası canlı sitede:
- [ ] Ana sayfa: Hero yüksekliği azaldı, scroll etmeden logos-band göründü
- [ ] Kurumsal: Timeline kartları beyaz arka plan üzerinde belirgin şekilde görünüyor
- [ ] Kurumsal: Sol kenar border (gold) her kartta görünüyor
- [ ] Stats sayaç animasyonu hâlâ çalışıyor
