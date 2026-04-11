# Hero Sinematik + Animated SVG Talimatı
**Tarih:** 2026-04-10
**Çalışma dizini:** `scratch/torem-site/`
**Dosya:** `src/pages/index.astro`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/`

---

## GENEL HEDEF

Mevcut hero bölümünü sinematik + animated SVG zemin çizgileri ile "siteye giren çıkamaz" seviyesine getir.

**Değişiklikler:**
1. Slide geçişi: fade → **wipe-in/wipe-out** (clip-path ile soldan sağa)
2. Arka plan overlay: çok koyu → **daha parlak görseller** (opacity azalt, gradient seç)
3. Başlık animasyonu: tek blok → **word-by-word stagger** (clip-path yukarıdan açılma)
4. Yeni **animated SVG layer**: fore kazık + zemin katmanları + radar pulse
5. Scroll **parallax** (SVG layer hafifçe kayar)

---

## İŞ 1 — FRONTMATTER (değişiklik yok)

Frontmatter'a dokunma. Sadece HTML/CSS/JS değişecek.

---

## İŞ 2 — HERO HTML'İNİ TAMAMEN YENILE

Mevcut `<!-- ░░ HERO ░░ -->` bölümünün TAMAMINI (section açılışından kapanışına kadar) bul ve sil. Yerine şunu yaz:

```astro
<!-- ░░ HERO ░░ -->
<section class="hero">

  <!-- Slide Backgrounds -->
  <div class="hero-slides">
    <div class="hero-slide hero-slide--1 is-active"></div>
    <div class="hero-slide hero-slide--2"></div>
    <div class="hero-slide hero-slide--3"></div>
  </div>

  <!-- Animated SVG Layer — zemin mühendisliği görsel dili -->
  <div class="hero-svg-layer" aria-hidden="true">
    <svg viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">

      <!-- Zemin katman çizgileri — soldan sağa açılıyor -->
      <line class="geo-layer geo-layer--1" x1="-50" y1="540" x2="1500" y2="480" />
      <line class="geo-layer geo-layer--2" x1="-50" y1="590" x2="1500" y2="535" />
      <line class="geo-layer geo-layer--3" x1="-50" y1="650" x2="1500" y2="600" />
      <line class="geo-layer geo-layer--4" x1="-50" y1="700" x2="1500" y2="660" />
      <line class="geo-layer geo-layer--5" x1="-50" y1="760" x2="1500" y2="720" />

      <!-- Zemin eğrisi — organik -->
      <path class="geo-layer geo-layer--curve"
        d="M 0 580 Q 200 520 400 560 T 800 540 T 1200 510 T 1500 500" />

      <!-- Fore kazık — aşağı inen çizgi -->
      <line class="pile-line pile-line--1" x1="1224" y1="300" x2="1224" y2="640" />
      <line class="pile-line pile-line--2" x1="1234" y1="300" x2="1234" y2="640" />

      <!-- Kazık başlığı -->
      <rect class="pile-head pile-head--top" x="1210" y="290" width="36" height="14" rx="3" />
      <!-- Fore kazık tabanı genişlemesi -->
      <ellipse class="pile-head pile-head--base" cx="1229" cy="650" rx="22" ry="8" />

      <!-- Radar pulse — kazık tabanında zemin direnci -->
      <circle class="radar-circle radar-circle--1" cx="1229" cy="648" r="10" />
      <circle class="radar-circle radar-circle--2" cx="1229" cy="648" r="10" />
      <circle class="radar-circle radar-circle--3" cx="1229" cy="648" r="10" />

      <!-- Nokta desen — arka plan dekor -->
      <defs>
        <pattern id="heroDots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(200,135,58,0.13)" />
        </pattern>
      </defs>
      <rect x="820" y="0" width="620" height="480" fill="url(#heroDots)" />

      <!-- Diagonal accent -->
      <line class="geo-layer geo-layer--diag"
        x1="1050" y1="0" x2="1440" y2="320"
        style="stroke-dasharray:800; stroke-dashoffset:800;" />

    </svg>
  </div>

  <!-- Gradient Overlay -->
  <div class="hero-overlay" aria-hidden="true"></div>

  <!-- Slide Numarası etiketi -->
  <div class="hero-slide-label" aria-hidden="true">
    Proje <span id="heroSlideNum">01</span> / 03
  </div>

  <!-- İçerik -->
  <div class="hero-content container">
    <p class="hero-eyebrow"><span>Türkiye'nin Güvenilir Geoteknik Ortağı</span></p>

    <h1 class="hero-title" id="heroTitle"></h1>

    <p class="hero-sub" id="heroSub"></p>

    <div class="hero-cta">
      <a href="/projelerimiz/" class="btn btn--primary btn--hero-primary">
        Projelerimizi İncele
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
      </a>
      <a href="/iletisim/" class="btn btn--ghost btn--hero-ghost">
        Ücretsiz Keşif İste
      </a>
    </div>
  </div>

  <!-- Floating Stats -->
  <div class="hero-stats" aria-label="Proje İstatistikleri">
    <div class="hero-stat-card">
      <span class="hero-stat-card__num">250+</span>
      <span class="hero-stat-card__lbl">Tamamlanan Proje</span>
    </div>
    <div class="hero-stat-card">
      <span class="hero-stat-card__num"><!-- MAKİNE PARKURU'NDAN DOĞRULA --></span>
      <span class="hero-stat-card__lbl">İş Makinesi</span>
    </div>
    <div class="hero-stat-card">
      <span class="hero-stat-card__num">13 Yıl</span>
      <span class="hero-stat-card__lbl">Sektör Deneyimi</span>
    </div>
  </div>

  <!-- Progress Dots -->
  <div class="hero-dots" id="heroDots" role="tablist" aria-label="Hero slaytlar"></div>

  <!-- Scroll İndikatörü -->
  <div class="hero-scroll" aria-hidden="true">
    <div class="hero-scroll__line"></div>
    <span>Aşağı Kaydır</span>
  </div>

</section>
```

---

## İŞ 3 — HERO CSS'İNİ TAMAMEN YENİLE

`<style>` bloğundaki mevcut hero CSS'ini bul (`.hero` ile başlar, hero bölümüyle ilgili tüm selectorlar) ve TÜMÜNÜ sil. Yerine şunu ekle:

```css
/* ══════════════════════════════════════════════════
   HERO — Sinematik + Animated SVG
══════════════════════════════════════════════════ */

/* Wrapper */
.hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 620px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* ── Slide Backgrounds ── */
.hero-slides { position: absolute; inset: 0; z-index: 0; }

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.06);
  will-change: opacity, transform;
}

/* Görseller — overlay azaltıldı, görseller parlak */
.hero-slide--1 {
  background-image:
    linear-gradient(135deg, rgba(0,21,48,.52) 0%, rgba(0,21,48,.18) 55%, rgba(0,21,48,.45) 100%),
    url('/images/hero-slide-1.jpg');
}
.hero-slide--2 {
  background-image:
    linear-gradient(135deg, rgba(0,21,48,.52) 0%, rgba(0,21,48,.18) 55%, rgba(0,21,48,.45) 100%),
    url('/images/hero-slide-2.jpg');
}
.hero-slide--3 {
  background-image:
    linear-gradient(135deg, rgba(0,21,48,.52) 0%, rgba(0,21,48,.18) 55%, rgba(0,21,48,.45) 100%),
    url('/images/hero-slide-3.jpg');
}

/* Aktif slide */
.hero-slide.is-active {
  opacity: 1;
  transform: scale(1);
  transition: transform 9s ease-out;
}

/* Wipe geçiş animasyonları */
.hero-slide.wipe-in {
  opacity: 1;
  transform: scale(1);
  animation: heroWipeIn 1.1s cubic-bezier(.77,0,.175,1) forwards;
  transition: transform 9s ease-out;
}

.hero-slide.wipe-out {
  opacity: 1;
  animation: heroWipeOut 1.1s cubic-bezier(.77,0,.175,1) forwards;
}

@keyframes heroWipeIn  { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0% 0 0); } }
@keyframes heroWipeOut { from { clip-path: inset(0 0% 0 0); }  to { clip-path: inset(0 0 0 100%); } }

/* ── SVG Layer ── */
.hero-svg-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  will-change: transform;
}
.hero-svg-layer svg { width: 100%; height: 100%; }

/* Zemin katman çizgileri */
.geo-layer {
  fill: none;
  stroke-dasharray: 1400;
  stroke-dashoffset: 1400;
  animation: heroDrawLine 2.4s ease-out forwards;
}
.geo-layer--1 { stroke: rgba(200,135,58,.22); stroke-width:1;   animation-delay:.2s; }
.geo-layer--2 { stroke: rgba(200,135,58,.16); stroke-width:1;   animation-delay:.5s; }
.geo-layer--3 { stroke: rgba(200,135,58,.12); stroke-width:1;   animation-delay:.8s; }
.geo-layer--4 { stroke: rgba(255,255,255,.08); stroke-width:.8; animation-delay:1.1s; }
.geo-layer--5 { stroke: rgba(255,255,255,.06); stroke-width:.8; animation-delay:1.3s; }
.geo-layer--curve { stroke: rgba(200,135,58,.08); stroke-width:1.5; animation-delay:1.6s; stroke-dasharray:2000; stroke-dashoffset:2000; }
.geo-layer--diag  { stroke: rgba(200,135,58,.15); stroke-width:1;   animation-delay:1.8s; }

@keyframes heroDrawLine { to { stroke-dashoffset: 0; } }

/* Fore kazık */
.pile-line {
  fill: none;
  stroke-dasharray: 700;
  stroke-dashoffset: 700;
  animation: heroDrawLine 1.8s ease-in-out forwards;
}
.pile-line--1 { stroke: rgba(200,135,58,.5); stroke-width:2; animation-delay:.6s; }
.pile-line--2 { stroke: rgba(200,135,58,.3); stroke-width:1.5; animation-delay:.85s; }

/* Kazık başlık/taban */
.pile-head {
  fill: none;
  stroke: rgba(200,135,58,.6);
  stroke-width: 2;
  opacity: 0;
  animation: heroFadeIn .4s ease forwards;
}
.pile-head--top  { animation-delay: 2s; }
.pile-head--base { animation-delay: 2.2s; }

@keyframes heroFadeIn { to { opacity: 1; } }

/* Radar pulse */
.radar-circle {
  fill: none;
  stroke-width: 1.5;
}
.radar-circle--1 { stroke: rgba(200,135,58,.45); animation: heroRadar 2.4s ease-out 1.8s infinite; }
.radar-circle--2 { stroke: rgba(200,135,58,.28); animation: heroRadar 2.4s ease-out 2.1s infinite; }
.radar-circle--3 { stroke: rgba(200,135,58,.14); animation: heroRadar 2.4s ease-out 2.5s infinite; }

@keyframes heroRadar {
  0%   { r: 5;  opacity: 1; }
  100% { r: 62; opacity: 0; }
}

/* ── Gradient Overlay ── */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(to right, rgba(0,21,48,.72) 0%, rgba(0,21,48,.3) 52%, rgba(0,21,48,.08) 100%),
    linear-gradient(to top, rgba(0,21,48,.65) 0%, transparent 42%);
  pointer-events: none;
}

/* ── Slide Etiketi ── */
.hero-slide-label {
  position: absolute;
  top: calc(var(--nav-h, 80px) + 1.5rem);
  right: max(2rem, calc(50% - 640px + 2rem));
  z-index: 10;
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(255,255,255,.45);
  animation: heroSlideUp .5s ease 2s both;
}
.hero-slide-label span { color: var(--color-highlight); font-weight: 700; }

/* ── İçerik ── */
.hero-content {
  position: relative;
  z-index: 10;
  padding-top: calc(var(--nav-h, 80px) + 2rem);
}

/* Eyebrow */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--color-highlight);
  margin-bottom: 1.4rem;
  overflow: hidden;
}
.hero-eyebrow span {
  display: inline-block;
  animation: heroSlideUp .6s cubic-bezier(.22,1,.36,1) .3s both;
}
.hero-eyebrow::before {
  content: '';
  width: 0;
  height: 2px;
  background: var(--color-highlight);
  display: inline-block;
  animation: heroExpandW .6s ease .1s both;
}
@keyframes heroExpandW { to { width: 28px; } }

/* Başlık */
.hero-title {
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.08;
  color: var(--color-white);
  margin-bottom: 1.4rem;
  letter-spacing: -.02em;
  max-width: 680px;
}

/* Word-stagger — JS ile .word span'lar oluşturuluyor */
.hero-title .word {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  margin-right: .16em;
}
.hero-title .word span {
  display: inline-block;
  animation: heroWordReveal .7s cubic-bezier(.22,1,.36,1) both;
}

@keyframes heroWordReveal {
  from { transform: translateY(110%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* Alt metin */
.hero-sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,.72);
  line-height: 1.65;
  max-width: 500px;
  margin-bottom: 2.4rem;
  animation: heroSlideUp .7s cubic-bezier(.22,1,.36,1) 1.3s both;
  transition: opacity .3s ease, transform .3s ease;
}

/* CTA */
.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: heroSlideUp .7s cubic-bezier(.22,1,.36,1) 1.5s both;
}

.btn--hero-primary {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  box-shadow: 0 4px 20px rgba(200,135,58,.4);
}
.btn--hero-primary:hover { box-shadow: 0 8px 32px rgba(200,135,58,.55); }

.btn--hero-ghost {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  border-color: rgba(255,255,255,.35);
  color: var(--color-white);
}
.btn--hero-ghost:hover {
  border-color: rgba(255,255,255,.75);
  background: rgba(255,255,255,.08);
  color: var(--color-white);
}

/* ── Floating Stats ── */
.hero-stats {
  position: absolute;
  right: max(2rem, calc(50% - 640px + 2rem));
  bottom: 12%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: .875rem;
  animation: heroSlideUp .8s cubic-bezier(.22,1,.36,1) 1.8s both;
}

.hero-stat-card {
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 14px;
  padding: .875rem 1.25rem;
  text-align: center;
  min-width: 128px;
  transition: background .3s, transform .3s;
}
.hero-stat-card:hover { background: rgba(255,255,255,.12); transform: translateX(-4px); }

.hero-stat-card__num {
  display: block;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-highlight);
  line-height: 1;
}
.hero-stat-card__lbl {
  display: block;
  font-size: .68rem;
  color: rgba(255,255,255,.6);
  letter-spacing: .06em;
  text-transform: uppercase;
  margin-top: .25rem;
}

/* ── Progress Dots ── */
.hero-dots {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: .6rem;
  align-items: center;
}
.hero-dot {
  width: 32px;
  height: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,.22);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
  padding: 0;
  transition: background .3s;
}
.hero-dot.is-active { background: rgba(255,255,255,.3); }
.hero-dot.is-active::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-highlight);
  border-radius: 2px;
  animation: heroProgress 7s linear forwards;
  transform-origin: left;
}
@keyframes heroProgress {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* ── Scroll İndikatörü ── */
.hero-scroll {
  position: absolute;
  bottom: 2rem;
  right: max(2rem, calc(50% - 640px + 2rem));
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;
  color: rgba(255,255,255,.4);
  font-size: .62rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  animation: heroSlideUp .6s ease 2.2s both;
}
.hero-scroll__line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(200,135,58,.7), transparent);
  animation: heroScrollLine 1.8s ease-in-out 2.4s infinite;
}
@keyframes heroScrollLine {
  0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
  50%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
  100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}

/* ── Paylaşılan keyframe ── */
@keyframes heroSlideUp {
  from { transform: translateY(24px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-stats { display: none; }
  .hero-slide-label { display: none; }
  .hero-scroll { display: none; }
  .hero-title { font-size: clamp(1.9rem, 6vw, 3rem); }
}
@media (max-width: 560px) {
  .hero-cta { flex-direction: column; }
  .hero-cta .btn { text-align: center; justify-content: center; }
  .hero-svg-layer { opacity: 0.6; }
}
```

---

## İŞ 4 — HERO JAVASCRIPT'İNİ YENILE

`<script>` bloğundaki mevcut hero JS kodunu bul (slider ile ilgili tüm kod) ve TAMAMEN SİL. Yerine şunu ekle:

```js
// ══════════════════════════════════════════
// HERO — Sinematik Slider + Animated SVG
// ══════════════════════════════════════════
(function () {
  'use strict';

  // Slide verileri
  const SLIDES = [
    {
      title: 'Zemini Biz Biliriz, Projenizi Biz Taşırız',
      sub: 'Fore kazık, ankraj, jet grout ve zemin iyileştirme çözümlerinde 13 yıllık deneyim. Türkiye\'nin en zorlu zeminlerinde güvenle inşa ediyoruz.',
      label: '01'
    },
    {
      title: 'Güçlü Makine Parkuru — Proje Yerine Her Zaman Hazır',
      sub: 'Soilmec, Casagrande ve Bauer makinelerimiz kendi mülkümüz. İş programı değişse bile ekipman sahada, projeniz programda.',
      label: '02'
    },
    {
      title: 'ISO 9001 Kalite, TBDY 2018 Uyumu — Belgeli Güvence',
      sub: 'Her kazık yükleme testinden geçer. Zemin etüdünden anahtar teslime tek elden, şeffaf raporlama ile.',
      label: '03'
    }
  ];

  const INTERVAL = 7000;

  let current = 0;
  let timer   = null;

  const slideEls   = document.querySelectorAll('.hero-slide');
  const titleEl    = document.getElementById('heroTitle');
  const subEl      = document.getElementById('heroSub');
  const slideNumEl = document.getElementById('heroSlideNum');
  const dotsEl     = document.getElementById('heroDots');
  const svgLayer   = document.querySelector('.hero-svg-layer');

  if (!slideEls.length || !titleEl || !dotsEl) return;

  // — Kelimeleri span'lara sar —
  function wrapWords(text) {
    return text.split(' ')
      .map((w, i) => `<span class="word"><span style="animation-delay:${0.4 + i * 0.12}s">${w}</span></span>`)
      .join(' ');
  }

  // — Dots oluştur —
  SLIDES.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero-dot' + (i === 0 ? ' is-active' : '');
    btn.setAttribute('aria-label', `Slayt ${i + 1}`);
    btn.setAttribute('role', 'tab');
    btn.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(btn);
  });

  // — Dots güncelle —
  function updateDots(idx) {
    dotsEl.querySelectorAll('.hero-dot').forEach((d, i) => {
      d.className = 'hero-dot' + (i === idx ? ' is-active' : '');
    });
  }

  // — İçerik güncelle —
  function updateContent(idx, animate) {
    const data = SLIDES[idx];

    // Başlık
    titleEl.innerHTML = wrapWords(data.title);

    // Alt metin
    if (animate) {
      subEl.style.opacity = '0';
      subEl.style.transform = 'translateY(12px)';
      requestAnimationFrame(() => {
        setTimeout(() => {
          subEl.textContent = data.sub;
          subEl.style.opacity = '1';
          subEl.style.transform = 'translateY(0)';
        }, 280);
      });
    } else {
      subEl.textContent = data.sub;
    }

    if (slideNumEl) slideNumEl.textContent = data.label;
  }

  // — Wipe geçiş —
  function goTo(next) {
    if (next === current) return;
    const prev = current;
    current = next;

    const prevEl = slideEls[prev];
    const nextEl = slideEls[next];

    prevEl.classList.remove('is-active', 'wipe-in');
    prevEl.classList.add('wipe-out');
    prevEl.addEventListener('animationend', () => {
      prevEl.classList.remove('wipe-out');
      prevEl.style.opacity = '0';
    }, { once: true });

    nextEl.style.opacity = '1';
    nextEl.classList.remove('wipe-out');
    nextEl.classList.add('wipe-in');
    nextEl.addEventListener('animationend', () => {
      nextEl.classList.remove('wipe-in');
      nextEl.classList.add('is-active');
    }, { once: true });

    updateContent(next, true);
    updateDots(next);
    resetTimer();
  }

  // — Timer —
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo((current + 1) % SLIDES.length), INTERVAL);
  }

  // — Parallax — SVG layer hafif kayar
  window.addEventListener('scroll', () => {
    if (!svgLayer) return;
    const y = window.scrollY;
    if (y < window.innerHeight) {
      svgLayer.style.transform = `translateY(${y * 0.14}px)`;
    }
  }, { passive: true });

  // — Başlat —
  updateContent(0, false);
  resetTimer();
})();
```

---

## İŞ 5 — GÖRSEL DOSYALARI KONTROL ET

`public/images/` klasöründe `hero-slide-1.jpg`, `hero-slide-2.jpg`, `hero-slide-3.jpg` dosyalarını kontrol et.

**Eğer varsa:** CSS'teki URL'ler doğru, devam et.

**Eğer yoksa:** Mevcut hero görsel dosyası neyse (örn. `hero-bg.jpg` veya `images/hero-*.jpg`) bul, CSS'teki URL'leri ona göre güncelle. Üç slide farklı görsel kullanmak zorunda değil — aynı görsel 3 slide'a da atanabilir:
```css
.hero-slide--1 { background-image: linear-gradient(...), url('/images/MEVCUT_GORSEL.jpg'); }
.hero-slide--2 { background-image: linear-gradient(...), url('/images/MEVCUT_GORSEL.jpg'); }
.hero-slide--3 { background-image: linear-gradient(...), url('/images/MEVCUT_GORSEL.jpg'); }
```

---

## İŞ 6 — BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Hata yoksa:
```bash
git add src/pages/index.astro
git commit -m "feat: anasayfa hero — sinematik wipe geçiş, word-stagger animasyon, animated SVG zemin katmanları"
git push origin main
```

---

## DOĞRULAMA LİSTESİ

- [ ] Sayfa açılışında eyebrow gold çizgi + metin yukarıdan açılıyor
- [ ] Başlık her kelime ayrı ayrı, stagger ile yukarıdan çıkıyor
- [ ] 7 saniyede slide değişiyor — wipe efekti: yeni slide soldan açılıyor, eski sağdan kapanıyor
- [ ] SVG zemin çizgileri soldan sağa çiziliyor (sayfa açılışında)
- [ ] Sağda fore kazık çizgisi yukarıdan aşağıya iniyor
- [ ] Kazık tabanında altın rengi radar pulses oluşuyor
- [ ] Progress dots altında gold progress bar ilerliyor
- [ ] Scroll'da SVG layer hafifçe yukarı kayıyor (parallax)
- [ ] Floating stat kartları sağda görünüyor, hover'da sola kayıyor
- [ ] Mobile'da (< 900px) stat kartları ve etiket gizleniyor
- [ ] Build sıfır hata
