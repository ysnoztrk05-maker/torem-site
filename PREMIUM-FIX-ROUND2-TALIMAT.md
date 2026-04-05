# PREMIUM FIX ROUND 2 — 3 SAYFA

Tarih: 2026-04-06
Öncelik: YÜKSEk — Canlı sitede görsel sorunlar var

---

## 1. İLETİŞİM — Başlık Kontrast Sorunu (HIZLI FİX)

**Sorun:** `src/pages/iletisim/index.astro`
Hero section'daki H1 "Projenizi Birlikte Değerlendirelim" başlığı arka planla aynı renkte — navy arka planda okunamıyor.

**Kök neden:** `.iletisim-premium-hero__content h1` CSS bloğunda `color` property YOK. Tarayıcı default (koyu) renk veriyor, navy arka plan üzerinde kayboluyor.

**Fix — sadece CSS değişikliği:**
```css
/* MEVCUT */
.iletisim-premium-hero__content h1 {
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--s-6);
  line-height: 1.1;
}

/* DEĞİŞTİR → */
.iletisim-premium-hero__content h1 {
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--s-6);
  line-height: 1.1;
  color: #ffffff;           /* ← BU SATIRI EKLE */
}
```

**Ayrıca hero section'a background pattern da ekle:**
```css
/* MEVCUT */
.iletisim-premium-hero {
  background: var(--color-navy-dark, #002147);

/* DEĞİŞTİR → */
.iletisim-premium-hero {
  background: var(--color-navy-dark, #002147);
  background-image: radial-gradient(circle at 30% 50%, rgba(212,175,55,0.12) 0%, transparent 60%),
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 100% 100%, 40px 40px, 40px 40px;
```

---

## 2. KURUMSAL — Premium Redesign (ORTA ÖNCELİK)

**Sorun:** Mevcut tasarım temel — düz 2 kolon grid, flat stat boxes, sıradan hero. "Wow" effect yok.

**Tam yeniden yaz gerekiyor — şu elementleri ekle:**

### A) Hero — Sol/Sağ split + animasyonlu sayaç rozeti
Hero section'a sağ tarafa büyük istatistik widget ekle:

```html
<!-- kurumsal-hero__inner içine, content'in yanına ekle -->
<div class="kurumsal-hero__stats-widget">
  <div class="hero-stat-card">
    <span class="hero-stat-num" data-count="20">0</span><span class="hero-stat-unit">+</span>
    <span class="hero-stat-lbl">Yıl Deneyim</span>
  </div>
  <div class="hero-stat-card">
    <span class="hero-stat-num" data-count="600">0</span><span class="hero-stat-unit">+</span>
    <span class="hero-stat-lbl">Proje</span>
  </div>
  <div class="hero-stat-card">
    <span class="hero-stat-num" data-count="55">0</span><span class="hero-stat-unit">+</span>
    <span class="hero-stat-lbl">İş Makinesi</span>
  </div>
</div>
```

```css
.kurumsal-hero__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
  text-align: left;  /* sol hizala, artık center değil */
}

.kurumsal-hero__stats-widget {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(212,175,55,0.3);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  min-width: 200px;
}

.hero-stat-card {
  text-align: center;
}

.hero-stat-num {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-gold, #d4af37);
  line-height: 1;
}

.hero-stat-unit {
  font-size: 2rem;
  color: var(--color-gold, #d4af37);
  font-weight: 800;
}

.hero-stat-lbl {
  display: block;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}
```

### B) About Section — Overlay banner + saha fotoğrafı vurgusu

Mevcut about-grid'e sol taraf görseli daha dramatik yap:
```css
/* about-visuals__main'e overlay gradient ekle */
.about-visuals__main::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,33,71,0.6) 0%, transparent 50%);
  border-radius: 16px;
}

/* about-visuals__badge pozisyonu ve stili güçlendir */
.about-visuals__badge {
  background: linear-gradient(135deg, var(--color-gold, #d4af37) 0%, #e6c245 100%);
  color: var(--color-navy-dark, #002147);
  border: 3px solid white;
  box-shadow: 0 20px 40px rgba(0,33,71,0.25);
}

.about-visuals__badge span {
  color: var(--color-navy-dark, #002147);
  font-weight: 800;
}

.about-visuals__badge svg {
  color: var(--color-navy-dark, #002147);
}
```

### C) Animated Counter — JavaScript (Intersection Observer)
`<script>` tag ekle sayfanın sonuna:

```javascript
<script>
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
});
</script>
```

### D) Timeline Section — 2004'ten Bugüne (YENİ BÖLÜM)
About section ile Misyon/Vizyon arasına ekle:

```html
<!-- Timeline Section -->
<section class="section timeline-section">
  <div class="container">
    <div class="section-header text-center">
      <span class="eyebrow">Tarihçemiz</span>
      <h2>2004'ten Bugüne</h2>
      <p>20 yıllık büyüme ve başarı hikayemiz</p>
    </div>
    <div class="timeline">
      <div class="timeline__item">
        <div class="timeline__marker">
          <span class="timeline__year">2004</span>
        </div>
        <div class="timeline__content">
          <h4>Kuruluş</h4>
          <p>Torem Zemin Mühendislik, İstanbul Pendik'te kuruldu. İlk fore kazık projesi tamamlandı.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker">
          <span class="timeline__year">2008</span>
        </div>
        <div class="timeline__content">
          <h4>Makine Filosu Genişlemesi</h4>
          <p>Soilmec SR-40 ve Casagrande B200 XP ile makine parkı 10 üniteye ulaştı.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker">
          <span class="timeline__year">2013</span>
        </div>
        <div class="timeline__content">
          <h4>ISO 9001 Belgesi</h4>
          <p>Kalite yönetim sistemi ISO 9001:2015 belgesi alındı. Türkiye geneli projeler başladı.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker">
          <span class="timeline__year">2018</span>
        </div>
        <div class="timeline__content">
          <h4>300. Proje</h4>
          <p>Metro İstasyon Temeli projesiyle 300. tamamlanan projeye ulaşıldı. Jet grout ünitesi eklendi.</p>
        </div>
      </div>
      <div class="timeline__item timeline__item--last">
        <div class="timeline__marker timeline__marker--current">
          <span class="timeline__year">2024</span>
        </div>
        <div class="timeline__content">
          <h4>600+ Proje, 55+ Makine</h4>
          <p>Türkiye'nin önde gelen geoteknik firması olarak 600'den fazla projeyle büyümeye devam ediyoruz.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
/* Timeline CSS */
.timeline-section {
  background: var(--color-bg, #fafaf7);
  padding-block: 5rem;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 4rem auto 0;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-gold, #d4af37), rgba(212,175,55,0.2));
}

.timeline__item {
  position: relative;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  align-items: flex-start;
}

.timeline__marker {
  text-align: center;
}

.timeline__marker::before {
  content: '';
  position: absolute;
  left: calc(-3rem + 6px);
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-gold, #d4af37);
  border: 3px solid white;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.3);
}

.timeline__marker--current::before {
  background: var(--color-navy-dark, #002147);
  box-shadow: 0 0 0 4px rgba(0,33,71,0.2);
  width: 20px;
  height: 20px;
  left: calc(-3rem + 4px);
}

.timeline__year {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-gold, #d4af37);
  display: block;
}

.timeline__content {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s ease;
}

.timeline__content:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  border-color: var(--color-gold, #d4af37);
}

.timeline__content h4 {
  font-size: 1.2rem;
  color: var(--color-navy-dark, #002147);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.timeline__content p {
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .timeline { padding-left: 2rem; }
  .timeline__item { grid-template-columns: 70px 1fr; gap: 1rem; }
  .kurumsal-hero__inner { grid-template-columns: 1fr; text-align: center; }
  .kurumsal-hero__stats-widget { flex-direction: row; justify-content: center; flex-wrap: wrap; }
}
```

---

## 3. ANA SAYFA — Premium Güçlendirme (ORTA ÖNCELİK)

**Sorun:** Premium hero eklendi ama sayfanın geri kalanı eski component'larla devam ediyor. Ana sayfa "premium" hissettirmiyor çünkü:
- Logo band'daki logolar yüklenmiyor (dosyalar yok) — boş kutular görünüyor
- Hero altındaki section'lar sıradan
- Referans projeleri bölümü düz

**Fix 1 — Logo Band görsel fix:**
Logo placeholder'ları düz text badge'lere çevir (görseller olmadığı için):

```astro
<!-- MEVCUT logo-item'ları değiştir -->
<!-- logo img yerine metin badge kullan -->
{[
  'Rönesans', 'TOKİ', 'İBB', 'Kolin',
  'Emlak Konut', 'Fernas', 'Smart', 'Doğuş',
  'Rönesans', 'TOKİ', 'İBB', 'Kolin',
  'Emlak Konut', 'Fernas', 'Smart', 'Doğuş',
].map((name) => (
  <div class="logo-item">
    <span class="logo-text">{name}</span>
  </div>
))}
```

```css
/* Logo text badge stili */
.logo-text {
  font-weight: 700;
  font-size: 0.85rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.logo-item:hover .logo-text {
  color: var(--color-navy-dark, #002147);
}
```

**Fix 2 — Hero section daha güçlü CTA:**
Mevcut premium-hero'ya floating stat cards ekle (hero'nun altına, wave'in hemen üstüne):

```html
<!-- premium-hero__inner'ın içine, content div'in altına ekle -->
<div class="premium-hero__floating-stats">
  <div class="fstat">
    <strong>600+</strong>
    <span>Tamamlanan Proje</span>
  </div>
  <div class="fstat-divider"></div>
  <div class="fstat">
    <strong>20+</strong>
    <span>Yıl Deneyim</span>
  </div>
  <div class="fstat-divider"></div>
  <div class="fstat">
    <strong>55+</strong>
    <span>İş Makinesi</span>
  </div>
  <div class="fstat-divider"></div>
  <div class="fstat">
    <strong>7/24</strong>
    <span>Teknik Destek</span>
  </div>
</div>
```

```css
.premium-hero__floating-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(212,175,55,0.25);
  border-radius: 16px;
  padding: 1.5rem 2.5rem;
  margin-top: 3rem;
  backdrop-filter: blur(8px);
  flex-wrap: wrap;
  justify-content: center;
}

.fstat {
  text-align: center;
}

.fstat strong {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-gold, #d4af37);
  line-height: 1;
}

.fstat span {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
  display: block;
}

.fstat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.15);
}

@media (max-width: 600px) {
  .fstat-divider { display: none; }
  .premium-hero__floating-stats { gap: 1.5rem; }
}
```

**Fix 3 — Süreç adımları bağlantı çizgisi renk fix:**
Mevcut `process__steps::before` dashed line gold renkte ama bazı tarayıcılarda görünmüyor. Solid yap:

```css
/* MEVCUT */
.process__steps::before { 
  background: repeating-linear-gradient(to right, var(--color-highlight) 0, var(--color-highlight) 8px, transparent 8px, transparent 18px);
}

/* DEĞİŞTİR → */
.process__steps::before {
  background: linear-gradient(to right, var(--color-gold, #d4af37) 0%, rgba(212,175,55,0.3) 100%);
  height: 2px;
}
```

---

## UYGULAMA SIRASI

1. **İletişim** → sadece 2 CSS satırı, 5 dakika — hemen yap
2. **Ana Sayfa** → logo band fix + floating stats — 30 dakika
3. **Kurumsal** → timeline + hero stats widget + animated counter — 1 saat

## BUILD & PUSH

Her düzeltme sonrası:
```bash
cd C:\Users\Lenovo\.gemini\antigravity\scratch\torem-site
npm run build
git add -A
git commit -m "fix: premium round 2 - iletisim kontrast, kurumsal timeline, anasayfa stats"
git push origin main
```

Vercel otomatik deploy alır (~2 dakika).
