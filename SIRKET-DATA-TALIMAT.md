# Şirket Merkezi Veri Dosyası Talimatı
**Tarih:** 2026-04-10
**Çalışma dizini:** `scratch/torem-site/`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/`

---

## GENEL HEDEF

Şirket rakamları (proje sayısı, makine sayısı, kuruluş yılı) şu an hero'ya ve içeriklere elle yazılmış durumda. Bu yanlış — rakam bir yerde değişince her sayfada ayrı ayrı düzeltmek gerekiyor.

**Çözüm:** `src/data/sirket.ts` adında tek bir merkezi veri dosyası oluştur. Hero stat kartları, referans sayfası, footer ve gelecekte eklenecek her sayfa buradan okusun.

---

## İŞ 1 — `src/data/sirket.ts` DOSYASINI OLUŞTUR

```typescript
// src/data/sirket.ts
// Tüm şirket verileri tek kaynak — buradan değişir, her yerde güncellenir

export const sirket = {
  ad: 'Torem Zemin Mühendisliği',
  kurulus: 2013,
  deneyimYil: new Date().getFullYear() - 2013, // otomatik hesaplanır
  telefon: '+90 XXX XXX XX XX',               // gerçek numarayla doldur
  email: 'info@toremzemin.com',
  adres: 'İstanbul, Türkiye',                  // gerçek adresle doldur
  vergiNo: '',                                  // isteğe bağlı
} as const;

// ── Makine Parkuru ──────────────────────────────────────────────
// Her makine buraya eklenir — sayı otomatik hesaplanır
// Kaynak: src/pages/makine-parki/index.astro — 15 makine
export const makineler = [
  { marka: 'Soilmec',     model: 'SR-40',          tip: 'Fore Kazık',         yil: 2009 },
  { marka: 'XCMG',        model: '220RD',           tip: 'Fore Kazık',         yil: 2016 },
  { marka: 'Casagrande',  model: 'B200 XP',         tip: 'Fore Kazık',         yil: 2012 },
  { marka: 'Soilmec',     model: 'CM-40',           tip: 'Fore Kazık',         yil: 2006 },
  { marka: 'Bauer',       model: 'BG 18H',          tip: 'Fore Kazık',         yil: 2005 },
  { marka: 'Soilmec',     model: 'SM-400',          tip: 'Jet Grout',          yil: 2005 },
  { marka: 'YMC-TR',      model: 'Ankraj',          tip: 'Ankraj',             yil: 2016 },
  { marka: 'Casagrande',  model: 'C6',              tip: 'Mini Kazık',         yil: 2007 },
  { marka: 'Furukawa',    model: 'HCR1200-DS',      tip: 'Zemin Çivisi',       yil: 2007 },
  { marka: 'PTC',         model: '30HD Vibro',      tip: 'Vibratör',           yil: 0    },
  { marka: 'Tecnipwell',  model: 'TW-352',          tip: 'Enjeksiyon',         yil: 2005 },
  { marka: 'Atlas Copco', model: 'XAVS 307',        tip: 'Kompresör',          yil: 2010 },
  { marka: 'Shotcrete',   model: 'MC-260',          tip: 'Püskürtme Beton',    yil: 2015 },
  { marka: 'Torem',       model: 'Pistonlu Enj.',   tip: 'Enjeksiyon',         yil: 2014 },
  { marka: 'Torem',       model: 'Germe Krikosu',   tip: 'Ankraj',             yil: 2015 },
] as const;

export const makineSayisi = makineler.length; // otomatik — elle yazma

// ── Hero İstatistikleri ─────────────────────────────────────────
// Bu değerler hero stat kartlarına, footer'a, "Hakkımızda" sayfasına gider
// Proje sayısını referanslar sayfasındaki gerçek projelerden say
// Makine sayısı makineler[] dizisinden otomatik gelir — yukarıyı doldur
export const heroStats = [
  {
    deger: '250+',
    etiket: 'Tamamlanan Proje',
    aciklama: 'Referans sayfasından doğrulandı',
  },
  {
    deger: `${makineSayisi}`,    // makineler[] dizisinden otomatik — şu an 15
    etiket: 'İş Makinesi',
    aciklama: 'Makine parkuru listesinden otomatik sayılır',
  },
  {
    deger: `${sirket.deneyimYil} Yıl`,
    etiket: 'Sektör Deneyimi',
    aciklama: `${sirket.kurulus} kuruluş, otomatik hesaplanır`,
  },
] as const;

// ── Hizmet Kategorileri (kısa liste — nav/footer için) ──────────
export const hizmetler = [
  { ad: 'Fore Kazık',    href: '/fore-kazik/' },
  { ad: 'Mini Kazık',    href: '/mini-kazik/' },
  { ad: 'Ankraj',        href: '/ankraj/' },
  { ad: 'Jet Grout',     href: '/jet-grout/' },
  { ad: 'Zemin Etüdü',   href: '/zemin-etudu/' },
  { ad: 'İksa Sistemi',  href: '/iksa-sistemi/' },
] as const;

// ── Sertifikalar / Belgeler ─────────────────────────────────────
export const sertifikalar = [
  { ad: 'ISO 9001:2015', kapsam: 'Kalite Yönetim Sistemi' },
  { ad: 'TBDY 2018',     kapsam: 'Türkiye Bina Deprem Yönetmeliği Uyumu' },
  // Gerçek belgelerle doldur
] as const;
```

---

## İŞ 2 — HERO STAT KARTLARINI GÜNELLE

`src/pages/index.astro` dosyasının en üstüne (diğer import'ların yanına) ekle:

```astro
---
import { heroStats } from '../data/sirket.ts';
// ... diğer import'lar
---
```

Hero section içindeki `.hero-stats` bloğunu bul ve şu şekilde değiştir:

```astro
<div class="hero-stats" aria-label="Proje İstatistikleri">
  {heroStats.map((stat) => (
    <div class="hero-stat-card">
      <span class="hero-stat-card__num">{stat.deger}</span>
      <span class="hero-stat-card__lbl">{stat.etiket}</span>
    </div>
  ))}
</div>
```

---

## İŞ 3 — REFERANSLAR / PROJELERİMİZ SAYFASINI GÜNELLE

`src/pages/projelerimiz/index.astro` dosyasına import ekle:

```astro
---
import { heroStats } from '../../data/sirket.ts';
---
```

Sayfanın üst kısmında (veya hero altında) istatistik bandı varsa onu da `heroStats` ile besle. Eğer yoksa şu yapıyı sayfanın hero altına ekle:

```astro
<!-- İstatistik Bandı -->
<div class="stats-band">
  <div class="container stats-band__inner">
    {heroStats.map((stat) => (
      <div class="stats-band__item">
        <span class="stats-band__num">{stat.deger}</span>
        <span class="stats-band__lbl">{stat.etiket}</span>
      </div>
    ))}
  </div>
</div>
```

CSS (global styles veya sayfa içi `<style>` bloğuna):

```css
.stats-band {
  background: var(--color-navy-dark, #001530);
  padding: 2rem 0;
  border-bottom: 1px solid rgba(200,135,58,.2);
}
.stats-band__inner {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}
.stats-band__item { text-align: center; }
.stats-band__num {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-highlight, #C8873A);
  line-height: 1;
}
.stats-band__lbl {
  display: block;
  font-size: .75rem;
  color: rgba(255,255,255,.6);
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-top: .3rem;
}
```

---

## İŞ 4 — MAKİNE SAYISINI DOLDUR

**Makine parkuru sayfasını veya belgesini bul** (`src/pages/makine-parkuru/` veya içerik dosyasında).

Oradaki her makineyi `src/data/sirket.ts` içindeki `makineler[]` dizisine ekle:

```typescript
export const makineler = [
  { marka: 'Soilmec', model: 'SR-75', tip: 'Fore Kazık Makinesi' },
  // tüm makineler...
] as const;
```

Makine sayısı `makineSayisi` değişkeni ile otomatik hesaplanır — hero stat kartında elle "55+" yazmak gerekmez.

---

## İŞ 5 — BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Hata yoksa:
```bash
git add src/data/sirket.ts src/pages/index.astro src/pages/projelerimiz/index.astro
git commit -m "feat: merkezi sirket.ts veri dosyası — hero stats, makine sayısı, deneyim yılı otomatik hesaplanır"
git push origin main
```

---

## DOĞRULAMA LİSTESİ

- [ ] `src/data/sirket.ts` oluşturuldu
- [ ] `makineler[]` dizisi makine parkuru listesiyle dolduruldu
- [ ] `heroStats[1].deger` = `makineler.length + "+"` (otomatik)
- [ ] `heroStats[2].deger` = `"13 Yıl"` (2026 - 2013, otomatik)
- [ ] Hero stat kartları `heroStats.map()` ile render ediliyor (elle yazılmış rakam yok)
- [ ] Projelerimiz sayfasında stats bandı görünüyor
- [ ] Build sıfır hata
- [ ] Vercel'de hero stat kartları doğru rakamları gösteriyor
