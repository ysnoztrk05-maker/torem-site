# Ana Sayfa İyileştirme Talimatı
**Tarih:** 2026-04-10
**Çalışma dizini:** `scratch/torem-site/`
**Dosya:** `src/pages/index.astro`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/`

---

## GENEL HEDEF

2 iyileştirme yapılacak:
1. **Referans Projeler bölümü** → `projeler.ts`'den canlı veri çek, kartlar tıklanabilir olsun
2. **"Neden Biz?" bölümü ekle** → Stats ile Hizmetler arasına yeni bir bölüm

---

## İŞ 1 — IMPORT EKLE

`src/pages/index.astro` dosyasının en üstündeki `---` frontmatter bloğuna şu import'u ekle:

```astro
import { projeler } from '../data/projeler';
```

Tam frontmatter sonucu:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import ServiceCard from '../components/ServiceCard.astro';
import StatsCounter from '../components/StatsCounter.astro';
import CTABox from '../components/CTABox.astro';
import FAQAccordion from '../components/FAQAccordion.astro';
import { hizmetler, blogPosts, stats, company } from '../data/content';
import { kategoriler, getTekniklerByKategori } from '../data/faaliyet-alanlari';
import { projeler } from '../data/projeler';

const featuredHizmetler = hizmetler.slice(0, 6);
const featuredProjeler = projeler.slice(0, 3);
---
```

---

## İŞ 2 — REFERANS PROJELERİ BÖLÜMÜNÜ GÜNCELLE

Mevcut `<!-- ░░ REFERANS PROJELERİ ░░ -->` bölümünün TAMAMINI bul ve sil. Yerine şunu yaz:

```astro
<!-- ░░ REFERANS PROJELERİ ░░ -->
<section class="section ref-strip">
  <div class="container">
    <div class="sec-head text-center">
      <p class="eyebrow">Referanslarımızdan</p>
      <h2>Tamamlanan Projelerden Seçkiler</h2>
      <p class="sec-head__sub">Her proje, mühendislik mükemmeliyetine olan bağlılığımızın somut kanıtıdır.</p>
    </div>
    <div class="ref-grid">
      {featuredProjeler.map((p) => (
        <a href={`/projelerimiz/${p.slug}/`} class="ref-card">
          <div class="ref-card__img-wrap">
            <img src={p.image} alt={p.title} loading="lazy" width="560" height="360" />
            <span class="ref-card__cat">{p.category}</span>
            <div class="ref-card__overlay">
              <span class="ref-card__cta">Projeyi İncele →</span>
            </div>
          </div>
          <div class="ref-card__info">
            <div class="ref-card__meta">
              <span class="ref-card__type">{p.location}</span>
              <span class="ref-card__year">{p.year}</span>
            </div>
            <strong class="ref-card__title">{p.title}</strong>
            <div class="ref-card__tags">
              {p.tags.map((t) => <span class="ref-tag">{t}</span>)}
            </div>
          </div>
        </a>
      ))}
    </div>
    <div class="text-center" style="margin-top:var(--s-8)">
      <a href="/projelerimiz/" class="btn btn--ghost">Tüm Projeler →</a>
    </div>
  </div>
</section>
```

Aynı dosyanın `<style>` bloğunda mevcut `.ref-card`, `.ref-card__info`, `.ref-grid` stillerini bul ve TÜMÜNÜ sil. Yerine şunu ekle:

```css
/* ── Referans Projeler ── */
.ref-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-6); }
.ref-card { display:block; text-decoration:none; color:inherit; background:var(--color-white); border-radius:var(--r-xl); overflow:hidden; border:1px solid var(--color-border); transition:transform .3s ease, box-shadow .3s ease; }
.ref-card:hover { transform:translateY(-5px); box-shadow:0 20px 40px rgba(0,0,0,.12); }
.ref-card__img-wrap { position:relative; aspect-ratio:3/2; overflow:hidden; }
.ref-card__img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
.ref-card:hover .ref-card__img-wrap img { transform:scale(1.06); }
.ref-card__cat { position:absolute; top:var(--s-3); left:var(--s-3); background:var(--color-highlight); color:white; font-size:var(--text-xs); font-weight:700; padding:.25rem .75rem; border-radius:999px; text-transform:uppercase; letter-spacing:.04em; z-index:2; }
.ref-card__overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(0,21,48,.75) 0%, transparent 50%); display:flex; align-items:flex-end; justify-content:flex-start; padding:var(--s-4); opacity:0; transition:opacity .3s ease; z-index:1; }
.ref-card:hover .ref-card__overlay { opacity:1; }
.ref-card__cta { color:white; font-size:var(--text-sm); font-weight:600; letter-spacing:.02em; }
.ref-card__info { padding:var(--s-4) var(--s-5); }
.ref-card__meta { display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--s-2); }
.ref-card__type { font-size:var(--text-xs); color:var(--color-text-muted); }
.ref-card__year { font-size:var(--text-xs); font-weight:700; color:var(--color-accent); background:rgba(74,127,165,.1); padding:.15rem .5rem; border-radius:999px; }
.ref-card__title { display:block; font-size:var(--text-base); font-weight:700; color:var(--color-primary); margin-bottom:var(--s-3); line-height:1.3; }
.ref-card__tags { display:flex; flex-wrap:wrap; gap:var(--s-1); }
.ref-tag { font-size:var(--text-xs); background:var(--color-bg); border:1px solid var(--color-border); color:var(--color-text-muted); padding:.15rem .5rem; border-radius:var(--r-sm); }
@media (max-width:900px) { .ref-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:560px) { .ref-grid { grid-template-columns:1fr; } }
```

---

## İŞ 3 — "NEDEN BİZ?" BÖLÜMÜ EKLE

`<!-- ░░ STATS ░░ -->` bölümünün hemen ALTINA (StatsCounter'dan sonra), `<!-- ░░ HİZMETLER ░░ -->` bölümünün hemen ÖNÜNE şu bölümü ekle:

```astro
<!-- ░░ NEDEN BİZ? ░░ -->
<section class="section neden-section">
  <div class="container">
    <div class="sec-head text-center">
      <p class="eyebrow">Neden Torem?</p>
      <h2>Farkımız Sahada Ortaya Çıkar</h2>
      <p class="sec-head__sub">Rakamlar etkileyici — ama asıl fark sahadaki tutumda, kendi ekipmanımızda ve şeffaf iletişimimizde gizli.</p>
    </div>
    <div class="neden-grid">

      <div class="neden-kart">
        <div class="neden-kart__ikon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="28" height="28"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <h3>Kendi Makine Parkı</h3>
        <p>55+ iş makinesi — kiralık değil, kendi mülkümüz. Soilmec, Casagrande, Bauer. İş programı değişse bile ekipman sahada hazır.</p>
      </div>

      <div class="neden-kart">
        <div class="neden-kart__ikon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>ISO 9001 & TBDY 2018</h3>
        <p>Her kazık yükleme testinden geçer, her proje ISO 9001 kalite sisteminde yönetilir. Deprem yönetmeliğine tam uyum — belgelenmiş güvence.</p>
      </div>

      <div class="neden-kart">
        <div class="neden-kart__ikon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="28" height="28"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
        </div>
        <h3>Anahtar Teslim Çözüm</h3>
        <p>Zemin etüdünden projeye, uygulamadan kalite raporuna tek elden. Koordinasyon kaybı yok, gecikme yok, sürpriz maliyet yok.</p>
      </div>

      <div class="neden-kart">
        <div class="neden-kart__ikon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="28" height="28"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h3>Zamanında Teslim</h3>
        <p>İş programını başlangıçta yazılı taahhüt ederiz. Haftalık ilerleme raporu, kritik yol takibi — gecikme bizim için kabul edilemez.</p>
      </div>

      <div class="neden-kart">
        <div class="neden-kart__ikon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="28" height="28"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <h3>Deneyimli Mühendis Kadrosu</h3>
        <p>Ortalama 12 yıl sahada deneyim. Her projede yetkili inşaat mühendisi denetimi, her aşamada as-built dokümantasyon.</p>
      </div>

      <div class="neden-kart neden-kart--cta">
        <p>Projeniz için doğru geoteknik çözümü birlikte belirleyelim.</p>
        <a href="/kurumsal/neden-torem/" class="btn btn--primary" style="margin-top:1rem;">Detaylı İncele</a>
        <a href="/iletisim/" class="btn btn--outline" style="margin-top:0.75rem;">Ücretsiz Keşif</a>
      </div>

    </div>
  </div>
</section>
```

Aynı dosyanın `<style>` bloğuna şu CSS'i ekle:

```css
/* ── Neden Biz? ── */
.neden-section { background: var(--color-white); }
.neden-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }

.neden-kart {
  background: var(--color-bg, #F5F2ED);
  border:1px solid var(--color-border, #e5e7eb);
  border-radius:16px; padding:2rem;
  position:relative; overflow:hidden;
  transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}
.neden-kart::after {
  content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
  background:var(--color-highlight, #C8873A);
  transform:scaleX(0); transform-origin:left;
  transition:transform .4s ease;
}
.neden-kart:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(0,0,0,.09); border-color:transparent; }
.neden-kart:hover::after { transform:scaleX(1); }

.neden-kart__ikon {
  width:52px; height:52px;
  background:rgba(200,135,58,.1); border-radius:12px;
  display:flex; align-items:center; justify-content:center;
  color:var(--color-highlight, #C8873A);
  margin-bottom:1.25rem;
}
.neden-kart h3 { font-size:1.05rem; font-weight:700; color:var(--color-primary); margin-bottom:.6rem; }
.neden-kart p { font-size:.875rem; color:var(--color-text-muted); line-height:1.65; }

.neden-kart--cta {
  background:var(--color-primary, #1B2B3A);
  border-color:transparent;
  display:flex; flex-direction:column; justify-content:center; align-items:flex-start;
}
.neden-kart--cta::after { display:none; }
.neden-kart--cta:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(0,0,0,.2); }
.neden-kart--cta p { color:rgba(255,255,255,.8); font-size:1rem; font-weight:500; }
.neden-kart--cta .btn--outline { border-color:rgba(255,255,255,.3); color:white; width:100%; text-align:center; }
.neden-kart--cta .btn--outline:hover { background:white; color:var(--color-primary); }
.neden-kart--cta .btn--primary { width:100%; text-align:center; }

@media (max-width:900px) { .neden-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:560px) { .neden-grid { grid-template-columns:1fr; } }
```

---

## İŞ 4 — BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Hata yoksa:
```bash
git add src/pages/index.astro
git commit -m "feat: anasayfa — neden biz bölümü eklendi, referans projeler projeler.ts'den canlı çekiliyor"
git push origin main
```

---

## DOĞRULAMA LİSTESİ

- [ ] Ana sayfada "Referans Projeler" bölümü `projeler.ts`'den ilk 3 projeyi gösteriyor
- [ ] Her proje kartına tıklayınca `/projelerimiz/[slug]/` açılıyor
- [ ] Kart hover'da: görsel zoom, overlay "Projeyi İncele →" yazısı çıkıyor
- [ ] Stats bölümünün altında yeni "Neden Biz?" bölümü var — 5 özellik kartı + 1 CTA kartı
- [ ] 6. kart (CTA) navy arka planlı, iki buton var
- [ ] Hover'da kartların altında gold çizgi kayıyor
- [ ] Build sıfır hata
