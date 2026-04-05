# PREMIUM UI/UX YENİLEME TALİMATI
**Tarih:** 2026-04-05
**Kapsam:** 4 sayfa — sırayla uygula
**Renk Paleti:** Navy `#002147` · Gold `#d4af37` · Krem `#fafaf7` · Beyaz `#ffffff`
**Kural:** Mevcut Astro bileşen yapısını koru, sadece CSS ve HTML içeriğini güçlendir. `npm run build` her sayfadan sonra çalıştır, hata yoksa devam et.

---

## SIRALAMA

1. Makine Parkı → `src/pages/makine-parki/index.astro`
2. İletişim → `src/pages/iletisim/index.astro`
3. Kurumsal → `src/pages/kurumsal/index.astro`
4. Ana Sayfa → `src/pages/index.astro`

---

# SAYFA 1 — MAKİNE PARKI

## Hedef
Endüstriyel premium katalog. Mühendis açtığında "bu firma ciddiye alınır" hissi.

## 1. Hero Bölümü
```
- Tam genişlik navy (#002147) arka plan
- Başlık: "55+ İş Makinesi, Tek Telefon"
- Alt başlık: "Bauer · Casagrande · Soilmec · XCMG"
- Sağda büyük makine görseli (mevcut hero-main.jpg veya makine görseli)
- Alt wave SVG geçişi (mevcut wave komponenti gibi)
```

## 2. Filtre Bar — Yapışkan (Sticky)
```css
.filter-bar {
  position: sticky;
  top: 72px;
  z-index: 10;
  background: white;
  border-bottom: 2px solid #e2e0db;
  padding: 12px 0;
  box-shadow: 0 2px 8px rgba(0,33,71,0.06);
}
.filter-btn {
  border: 1.5px solid #e2e0db;
  border-radius: 100px;
  padding: 8px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}
.filter-btn.active, .filter-btn:hover {
  background: #002147;
  color: white;
  border-color: #002147;
}
```

Filtre kategorileri: Tümü · Fore Kazık · Jet Grout & Ankraj · Yardımcı Ekipman

## 3. Makine Kartları — Premium Grid
```
Layout: 3 kolon masaüstü, 2 tablet, 1 mobil
grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));

Her kart yapısı:
┌─────────────────────────────┐
│ [KATEGORİ BADGE]  [YIL]     │  ← üst overlay
│                             │
│    MAKINE FOTOĞRAFI         │  ← aspect-ratio: 16/9
│    (object-fit: cover)      │
│                             │
├─────────────────────────────┤
│ Makine Adı (bold, navy)     │
│ Kısa açıklama (muted)       │
│                             │
│ [ÇAP][DERİNLİK]             │  ← 2x2 spec grid
│ [AĞIRLIK][BOYUT]            │
│                             │
│ [Teknik Detay İste →]       │  ← CTA butonu
└─────────────────────────────┘

Hover efekti:
transform: translateY(-6px);
box-shadow: 0 20px 60px rgba(0,33,71,0.15);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
```

## 4. Spec Grid Stili
```css
.spec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #e2e0db;
  border: 1px solid #e2e0db;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 12px;
}
.spec-item {
  background: #fafaf7;
  padding: 8px 12px;
}
.spec-label {
  font-size: 0.68rem;
  color: #5A6A7A;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: block;
}
.spec-value {
  font-weight: 700;
  color: #002147;
  font-size: 0.95rem;
}
```

## 5. Filtre JavaScript (inline, framework yok)
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.makine-card');
  
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
```

## 6. Alt CTA
```
Navy arka plan:
"Projeniz için doğru makineyi birlikte seçelim"
Buton: "Teknik Ekibi Ara → +90 531 659 46 36"
```

---

# SAYFA 2 — İLETİŞİM

## Hedef
Dönüşüm makinesi. "Hemen arayayım veya form doldurayım" hissi.

## 1. Hero
```
- Navy arka plan, wave geçişi
- Başlık: "Projenizi Birlikte Değerlendirelim"
- 3 trust badge: "Ücretsiz Keşif" · "24 Saat İçinde Dönüş" · "Teknik Uzman"
- Hero içinde büyük tel no: +90 531 659 46 36
```

## 2. Ana Grid — 60/40 Split
```css
.iletisim-split {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  align-items: start;
}
@media (max-width: 768px) {
  .iletisim-split { grid-template-columns: 1fr; }
}
```

### Sol %60 — Form
```
Başlık: "Ücretsiz Keşif Raporu İsteyin"
Alanlar:
  - Ad Soyad (zorunlu)
  - Telefon (zorunlu)
  - E-posta
  - Şehir (dropdown: İstanbul, Ankara, İzmir, Bursa, Diğer)
  - Hizmet (dropdown: Fore Kazık, Jet Grout, Ankraj, İksa, Zemin Etüdü, Diğer)
  - Proje açıklaması (textarea — 4 satır)
  
Gönder butonu: full-width, gold (#d4af37), koyu metin, "Keşif Raporu Talep Et →"

Form input stili:
.form-input {
  border: 1.5px solid #e2e0db;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-input:focus {
  border-color: #002147;
  box-shadow: 0 0 0 3px rgba(0,33,71,0.08);
  outline: none;
}
```

### Sağ %40 — Bilgi Paneli
```
Navy (#002147) arka plan, gold aksan, beyaz metin:

1. WhatsApp Butonu (BÜYÜK):
   - Yeşil (#25D366), pulse animasyonu
   - "WhatsApp'tan Yazın"
   - wa.me/905316594636

2. Telefon kartları:
   - +90 531 659 46 36 (Mobil)
   - +90 216 379 33 10 (Ofis)

3. E-posta: info@toremzemin.com

4. Adres: Pendik, İstanbul

5. Çalışma saatleri:
   - Pzt-Cum: 08:30 - 18:00
   - "Acil için 7/24 WhatsApp"

6. Sertifika rozetleri: ISO 9001 · CE · TSEK
```

## 3. WhatsApp Pulse Animasyonu
```css
@keyframes pulse-whatsapp {
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70%  { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
.whatsapp-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #25D366;
  color: white;
  border-radius: 12px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  animation: pulse-whatsapp 2.5s infinite;
  transition: transform 0.2s;
}
.whatsapp-btn:hover { transform: scale(1.03); }
```

## 4. Google Harita
```html
<!-- Formun altına, tam genişlik -->
<div class="map-wrap">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5!2d29.233!3d40.878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzM2LjgiTiAyOcKwMTMnNTguOCJF!5e0!3m2!1str!2str!4v1234567890"
    width="100%" height="280"
    style="border:0; border-radius: 12px; display:block;"
    loading="lazy"
    title="Torem Zemin Mühendislik Konum"
  ></iframe>
</div>
```

---

# SAYFA 3 — KURUMSAL

## Hedef
Güven ve otorite. "Bu firma sağlam" hissi. Rakiplerden 2 kademe üst görünüm.

## 1. Hero
```
- Navy arka plan, grid pattern overlay (mevcut gibi)
- Başlık: "20 Yıldır Türkiye'nin Zeminini Güçlendiriyoruz"
- Eyebrow: "2004'ten Bu Yana"
- Alt wave
```

## 2. Animasyonlu Sayaçlar
```javascript
// Intersection Observer ile scroll'da tetikle
const animateCounter = (el, target, suffix = '+') => {
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, 16);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.target), el.dataset.suffix || '+');
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter-num').forEach(el => observer.observe(el));
```

4 sayaç: `20` Yıl · `600` Proje · `55` Makine · `250` Müşteri

## 3. Dikey Timeline
```
2004 — Kuruluş, Pendik İstanbul
2008 — İlk büyük metro projesi
2012 — 200+ proje, makine filosu genişledi
2016 — ISO 9001, Türkiye geneli operasyon
2020 — 500+ proje, 50+ makine
2024 — 600+ proje, ikinci nesil mühendis kadrosu
2026 — Dijital dönüşüm, toremzemin.com

CSS:
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #002147, #d4af37);
}
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.35rem;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d4af37;
  border: 2px solid white;
  box-shadow: 0 0 0 3px #d4af37;
}
.timeline-year {
  color: #d4af37;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}
```

## 4. Misyon & Vizyon — 3 Kart
```
3 kart yan yana:
  - Misyon: Türkiye'nin en güvenilir geoteknik partneri olmak
  - Vizyon: İnovatif tekniklerle zemin mühendisliğini ileriye taşımak
  - Değerler: Güvenlik, Kalite, Şeffaflık, Uzmanlık

Her kart:
  - Üst: gold renkli büyük SVG ikon (hedef, göz, kalp)
  - Başlık: navy, bold
  - Açıklama: muted
  - Alt: 3px gold çizgi
  - Hover: translateY(-4px), shadow
```

## 5. Sertifika Rozetleri
```
4 rozet (2x2 grid veya yatay sıra):
  ISO 9001:2015 · CE Belgeli · TSEK Onaylı · TBDY 2018

.cert-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 2px solid #002147;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  justify-content: center;
  transition: all 0.3s;
}
.cert-badge:hover {
  background: #002147;
  color: white;
}
```

## 6. Neden Biz — 6'lı Grid
```
✓ Anahtar Teslim Çözüm — proje başından sonuna tek muhatap
✓ 7/24 Teknik Destek — acil durumda ekibimiz yanınızda
✓ ISO 9001 Kalite — her aşamada belgelenmiş kalite
✓ Kendi Makine Filosu — 55+ ekipman, kiralık değil
✓ Uzman Mühendis Kadrosu — ortalama 12 yıl deneyim
✓ Türkiye Geneli — 81 ilde proje kapasitesi
```

---

# SAYFA 4 — ANA SAYFA

## Hedef
İlk 3 saniyede "Türkiye'nin en iyilerinden" hissi.

## 1. Hero — Full Split Layout
```css
.hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 90vh;
}
@media (max-width: 900px) {
  .hero-split { grid-template-columns: 1fr; }
}

Sol panel — Navy (#002147):
  - Eyebrow: "ISO 9001 · 20+ Yıl · 600+ Proje"
  - H1: "Temelden Zirveye / Güvenli Zemin Çözümleri"
  - Em: gold rengi vurgu
  - 2 CTA buton: "Ücretsiz Keşif Raporu" (gold) + "Hizmetleri İncele" (outline beyaz)
  - Alt 4 stat: 20+ Yıl · 600+ Proje · 55+ Makine · Türkiye Geneli

Sağ panel — Fotoğraf:
  - object-fit: cover, tam yükseklik
  - Sol üstten koyu gradient overlay
  - Floating proje kartı (bottom-left):
    "Son Proje: Kadıköy Metro / Fore Kazık Ø120cm · 38 adet"
```

## 2. Logo Bandı — Geliştirilmiş
```css
/* Mevcut sonsuz kaydırma korunur, stil iyileştirilir */
.logo-item img {
  filter: grayscale(100%) opacity(0.45);
  transition: filter 0.3s;
}
.logo-item img:hover {
  filter: grayscale(0%) opacity(1);
}
```

## 3. Hizmetler — 8 Büyük Kart
```
grid-template-columns: repeat(4, 1fr) — masaüstü
                       repeat(2, 1fr) — tablet
                       1fr — mobil

Her kart yüksekliği: 300px
Üst 60%: fotoğraf / navy gradient + gold SVG ikon
Alt 40%: beyaz — başlık + 2 bullet + "İncele →"

Hover:
  img: transform: scale(1.06)
  overlay: opacity artar
  kart: translateY(-4px)
```

## 4. Süreç Adımları — Yatay Timeline
```
5 adım (mobilde dikey):
  1. Saha Keşfi  →  2. Zemin Etüdü  →  3. Proje  →  4. Uygulama  →  5. Test & Onay

Her adım:
  - Daire içinde numara (gold)
  - Aralarında gold dashed çizgi
  - Başlık + açıklama
```

## 5. SSS — Akordeon Geliştirilmiş
```css
/* Mevcut SSS var, stil güçlendir */
.faq-item {
  border-left: 3px solid transparent;
  transition: border-color 0.3s;
}
.faq-item.open {
  border-left-color: #d4af37;
  background: rgba(0,33,71,0.02);
}
```

## 6. CTA — Full Width Impact
```
Navy arka plan, gold detaylar:
Sol: Başlık "Projeniz İçin Ücretsiz Teknik Analiz"
     Alt yazı: "600+ projenin deneyimiyle..."
     Mini form: İsim + Telefon + "Gönder" butonu

Sağ: Büyük tel no + WhatsApp butonu
```

---

# UYGULAMA SIRASI VE KURALLAR

```
1. src/pages/makine-parki/index.astro → npm run build → kontrol
2. src/pages/iletisim/index.astro → npm run build → kontrol
3. src/pages/kurumsal/index.astro → npm run build → kontrol
4. src/pages/index.astro → npm run build → kontrol
5. git add . → git commit -m "feat: Premium UI/UX yenileme — 4 sayfa" → git push
```

**YASAK (CLAUDE.md kuralları):**
- backdrop-filter, glassmorphism, gradient text
- Parçacık animasyonu (particles.js vb.)
- jQuery veya harici CSS framework
- SVG içinde `<br>` — satır atlama için `<tspan dy="14">` kullan
- Sabit width/height SVG — viewBox zorunlu

**Her sayfa bittikten sonra:** `build başarılı, X sayfa build edildi` diye rapor et.
