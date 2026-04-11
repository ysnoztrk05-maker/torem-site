# Kurumsal Alt Sayfalar Talimatı
**Tarih:** 2026-04-10
**Çalışma dizini:** `scratch/torem-site/`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/`

---

## GENEL HEDEF

Kurumsal menüsünün altına 3 yeni sayfa eklenecek:
1. `/kurumsal/ekibimiz/` — Yönetim & Mühendis kadrosu
2. `/kurumsal/belgelerimiz/` — Sertifikalar, belgeler, akreditasyonlar
3. `/kurumsal/neden-torem/` — Rakiplerden fark, güçlü yönler, neden tercih edilmeli

Ayrıca `BaseLayout.astro` içindeki navigasyon menüsüne Kurumsal dropdown güncellencek.

---

## İŞ 1 — NAVİGASYON GÜNCELLE

**Dosya:** `src/layouts/BaseLayout.astro`

Mevcut nav dizisinde `Kurumsal` kaydını bul. Şu an şuna benziyor:
```js
{ label: 'Kurumsal', href: '/kurumsal/' },
```

Bunu aşağıdakiyle değiştir — dropdown ekle:
```js
{
  label: 'Kurumsal',
  href: '/kurumsal/',
  dropdown: [
    { label: 'Hakkımızda',    href: '/kurumsal/' },
    { label: 'Neden Torem?',  href: '/kurumsal/neden-torem/' },
    { label: 'Ekibimiz',      href: '/kurumsal/ekibimiz/' },
    { label: 'Belgelerimiz',  href: '/kurumsal/belgelerimiz/' },
  ]
},
```

Eğer mevcut nav sistemi dropdown'u desteklemiyorsa (yani nav objelerinde `dropdown` alanı yoksa), o zaman sadece link olarak şu 3 satırı kurumsal'ın hemen altına ekle:
```js
{ label: 'Neden Torem?', href: '/kurumsal/neden-torem/', parent: 'kurumsal' },
{ label: 'Ekibimiz',     href: '/kurumsal/ekibimiz/',    parent: 'kurumsal' },
{ label: 'Belgelerimiz', href: '/kurumsal/belgelerimiz/', parent: 'kurumsal' },
```

---

## İŞ 2 — EKİBİMİZ SAYFASI

**Yeni dosya:** `src/pages/kurumsal/ekibimiz/index.astro`

```astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import CTABox from '../../../components/CTABox.astro';

const canonical = 'https://www.toremzemin.com/kurumsal/ekibimiz/';

const yonetim = [
  {
    ad: 'Genel Müdür',
    unvan: 'Genel Müdür & Kurucu',
    brans: 'İnşaat Mühendisi, 20+ yıl geoteknik deneyim',
    foto: '/images/saha-muhendis.jpg',
    linkedin: '#',
    uzmanlık: ['Fore Kazık', 'Derin Temel Tasarımı', 'Proje Yönetimi'],
  },
  {
    ad: 'Teknik Direktör',
    unvan: 'Teknik Direktör',
    brans: 'İnşaat Mühendisi, Geoteknik Uzmanı',
    foto: '/images/proje-gorusme.jpg',
    linkedin: '#',
    uzmanlık: ['Zemin İyileştirme', 'Jet Grout', 'TBDY 2018'],
  },
];

const departmanlar = [
  {
    isim: 'Zemin Mühendisliği',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    aciklama: 'Zemin etüdü, temel tasarımı ve geoteknik proje mühendisleri.',
    kisi: '8 Mühendis',
  },
  {
    isim: 'Saha Operasyonları',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    aciklama: 'Fore kazık, jet grout, ankraj ve iksa sahalarında uygulama ekipleri.',
    kisi: '30+ Teknisyen',
  },
  {
    isim: 'Kalite & Denetim',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    aciklama: 'ISO 9001 süreç denetimi, yükleme testleri ve kalite güvence.',
    kisi: '4 Uzman',
  },
  {
    isim: 'Makine & Bakım',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>`,
    aciklama: '55+ iş makinesinin bakım, operasyon ve lojistik yönetimi.',
    kisi: '12 Operatör',
  },
  {
    isim: 'Proje Geliştirme',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
    aciklama: 'Teknik teklif, müşteri ilişkileri ve yeni proje geliştirme.',
    kisi: '5 Uzman',
  },
  {
    isim: 'Ar-Ge & İnovasyon',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    aciklama: 'Yeni zemin teknolojileri araştırma ve pilot uygulama ekibi.',
    kisi: '3 Araştırmacı',
  },
];
---

<BaseLayout
  title="Ekibimiz | Torem Zemin Mühendislik"
  description="Torem Zemin'in deneyimli mühendis kadrosu ve uzman ekipleri. 20+ yıllık geoteknik deneyimle Türkiye genelinde hizmet veren profesyoneller."
  canonical={canonical}
>
  <!-- HERO -->
  <section class="ekip-hero">
    <div class="ekip-hero__bg" aria-hidden="true"></div>
    <div class="container ekip-hero__inner">
      <span class="eyebrow eyebrow--gold">Ekibimiz</span>
      <h1>İnsanlar,<br/><span>Mühendisliğin Özüdür</span></h1>
      <p>Deneyimli mühendisler, uzman teknisyenler ve sahada kanıtlanmış operatörlerden oluşan güçlü kadromuzla her projede fark yaratıyoruz.</p>
    </div>
    <div class="ekip-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z" fill="var(--color-bg)"/></svg>
    </div>
  </section>

  <Breadcrumb items={[
    { label: 'Kurumsal', href: '/kurumsal/' },
    { label: 'Ekibimiz' }
  ]} />

  <!-- YÖNETİM -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Liderlik</span>
        <h2>Yönetim Kadrosu</h2>
        <p>Her biri sektörde 15+ yıl deneyime sahip uzman liderler.</p>
      </div>
      <div class="yonetim-grid">
        {yonetim.map((kisi) => (
          <div class="yonetim-card">
            <div class="yonetim-card__foto">
              <img src={kisi.foto} alt={kisi.ad} loading="lazy" width="400" height="480" />
              <div class="yonetim-card__overlay">
                <a href={kisi.linkedin} class="linkedin-btn" aria-label="LinkedIn profili">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
            <div class="yonetim-card__body">
              <h3>{kisi.ad}</h3>
              <p class="yonetim-card__unvan">{kisi.unvan}</p>
              <p class="yonetim-card__brans">{kisi.brans}</p>
              <div class="yonetim-card__tags">
                {kisi.uzmanlık.map((u) => <span class="uzm-tag">{u}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- DEPARTMANLAR -->
  <section class="section dept-section">
    <div class="container">
      <div class="section-head text-center">
        <span class="eyebrow">Organizasyon</span>
        <h2>Departmanlarımız</h2>
        <p>Her biri kendi alanında uzmanlaşmış, birbirine entegre çalışan ekipler.</p>
      </div>
      <div class="dept-grid">
        {departmanlar.map((d) => (
          <div class="dept-card">
            <div class="dept-card__icon" set:html={d.ikon} />
            <div class="dept-card__body">
              <h3>{d.isim}</h3>
              <p>{d.aciklama}</p>
              <span class="dept-card__kisi">{d.kisi}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- KARİYER CTA -->
  <section class="section kariyer-cta-section">
    <div class="container kariyer-cta">
      <div class="kariyer-cta__text">
        <h2>Ekibimize Katılmak İster misiniz?</h2>
        <p>Geoteknik mühendislik alanında kariyer yapmak isteyen yetenekli mühendis ve teknisyenleri arıyoruz.</p>
      </div>
      <a href="/iletisim/" class="btn btn--primary btn--lg">Özgeçmiş Gönderin</a>
    </div>
  </section>

  <div class="section container">
    <CTABox title="Uzman Ekibimizle Projenizi Konuşalım" />
  </div>
</BaseLayout>

<style>
/* Hero */
.ekip-hero {
  background: linear-gradient(135deg, var(--color-navy-dark, #001530) 0%, var(--color-primary, #1B2B3A) 100%);
  margin-top: -110px;
  padding-block: calc(var(--s-20) + 110px) calc(var(--s-16) + 60px);
  color: white; position: relative; overflow: hidden; text-align: center;
}
.ekip-hero__bg {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle at 70% 30%, rgba(212,175,55,0.1) 0%, transparent 60%),
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 100%, 40px 40px, 40px 40px;
  pointer-events: none;
}
.ekip-hero__inner { position: relative; z-index: 2; max-width: 640px; margin-inline: auto; }
.ekip-hero h1 { color: white; font-size: var(--text-5xl, 3rem); margin-bottom: var(--s-4, 1rem); line-height: 1.1; }
.ekip-hero h1 span { color: var(--color-highlight, #C8873A); }
.ekip-hero p { color: rgba(255,255,255,.75); font-size: var(--text-lg, 1.125rem); }
.ekip-hero__wave { position: absolute; bottom: 0; left: 0; right: 0; height: 60px; z-index: 3; line-height: 0; }
.ekip-hero__wave svg { width: 100%; height: 100%; }

/* Eyebrow */
.eyebrow { display: inline-block; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 1rem; background: rgba(200,135,58,.1); color: var(--color-highlight, #C8873A); padding: .3rem .8rem; border-radius: 4px; }
.eyebrow--gold { background: var(--color-highlight, #C8873A); color: white; }

/* Section head */
.section-head { margin-bottom: 3rem; }
.section-head.text-center { text-align: center; max-width: 560px; margin-inline: auto; margin-bottom: 3rem; }
.section-head h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); color: var(--color-primary, #1B2B3A); margin-bottom: .75rem; }
.section-head p { color: var(--color-text-muted, #5A6A7A); font-size: 1.05rem; line-height: 1.6; }

/* Yönetim grid */
.yonetim-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem; max-width: 900px; margin-inline: auto; }
.yonetim-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,.06); box-shadow: 0 4px 20px rgba(0,0,0,.06); transition: transform .3s ease, box-shadow .3s ease; }
.yonetim-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,.12); }
.yonetim-card__foto { position: relative; aspect-ratio: 4/5; overflow: hidden; }
.yonetim-card__foto img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.yonetim-card:hover .yonetim-card__foto img { transform: scale(1.05); }
.yonetim-card__overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,21,48,.7) 0%, transparent 50%); display: flex; align-items: flex-end; justify-content: flex-end; padding: 1.25rem; opacity: 0; transition: opacity .3s ease; }
.yonetim-card:hover .yonetim-card__overlay { opacity: 1; }
.linkedin-btn { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #0077b5; color: white; border-radius: 8px; text-decoration: none; transition: transform .2s ease; }
.linkedin-btn:hover { transform: scale(1.1); }
.yonetim-card__body { padding: 1.5rem; }
.yonetim-card__body h3 { font-size: 1.25rem; font-weight: 700; color: var(--color-primary, #1B2B3A); margin-bottom: .25rem; }
.yonetim-card__unvan { font-size: .875rem; font-weight: 600; color: var(--color-highlight, #C8873A); margin-bottom: .5rem; }
.yonetim-card__brans { font-size: .85rem; color: var(--color-text-muted, #5A6A7A); margin-bottom: 1rem; line-height: 1.5; }
.yonetim-card__tags { display: flex; flex-wrap: wrap; gap: .5rem; }
.uzm-tag { font-size: .75rem; background: rgba(27,43,58,.06); border: 1px solid rgba(27,43,58,.1); color: var(--color-primary, #1B2B3A); padding: .2rem .6rem; border-radius: 999px; font-weight: 500; }

/* Departmanlar */
.dept-section { background: #fafaf7; }
.dept-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.dept-card { background: white; border: 1px solid rgba(0,0,0,.06); border-radius: 14px; padding: 1.75rem; display: flex; gap: 1.25rem; align-items: flex-start; transition: border-color .2s, box-shadow .2s, transform .2s; }
.dept-card:hover { border-color: var(--color-highlight, #C8873A); box-shadow: 0 8px 24px rgba(0,0,0,.08); transform: translateY(-3px); }
.dept-card__icon { flex-shrink: 0; width: 44px; height: 44px; background: rgba(200,135,58,.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--color-highlight, #C8873A); }
.dept-card__icon svg { width: 22px; height: 22px; }
.dept-card__body h3 { font-size: 1rem; font-weight: 700; color: var(--color-primary, #1B2B3A); margin-bottom: .4rem; }
.dept-card__body p { font-size: .875rem; color: var(--color-text-muted, #5A6A7A); line-height: 1.6; margin-bottom: .75rem; }
.dept-card__kisi { font-size: .8rem; font-weight: 700; color: var(--color-highlight, #C8873A); background: rgba(200,135,58,.1); padding: .2rem .6rem; border-radius: 999px; }

/* Kariyer CTA */
.kariyer-cta-section { background: var(--color-primary, #1B2B3A); }
.kariyer-cta { display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding-block: 3.5rem; }
.kariyer-cta__text h2 { color: white; font-size: clamp(1.5rem, 2.5vw, 2rem); margin-bottom: .5rem; }
.kariyer-cta__text p { color: rgba(255,255,255,.7); font-size: 1rem; }

@media (max-width: 900px) { .dept-grid { grid-template-columns: repeat(2,1fr); } .yonetim-grid { grid-template-columns: 1fr; max-width: 440px; } }
@media (max-width: 640px) { .dept-grid { grid-template-columns: 1fr; } .kariyer-cta { flex-direction: column; text-align: center; } }
</style>
```

---

## İŞ 3 — BELGELERİMİZ SAYFASI

**Yeni dosya:** `src/pages/kurumsal/belgelerimiz/index.astro`

```astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import CTABox from '../../../components/CTABox.astro';

const canonical = 'https://www.toremzemin.com/kurumsal/belgelerimiz/';

const belgeler = [
  {
    kategori: 'Kalite Yönetim',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    renk: '#16a34a',
    items: [
      { baslik: 'ISO 9001:2015', aciklama: 'Kalite Yönetim Sistemi Belgesi — Tüm geoteknik uygulamalarda sistematik kalite güvencesi', yil: '2015' },
      { baslik: 'ISO 14001:2015', aciklama: 'Çevre Yönetim Sistemi — Saha uygulamalarında çevre etkisinin kontrolü', yil: '2018' },
    ],
  },
  {
    kategori: 'Teknik Standartlar',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`,
    renk: '#2563eb',
    items: [
      { baslik: 'CE Belgesi', aciklama: 'Avrupa Birliği standartlarına uygunluk — İhracat ve uluslararası projelerde geçerlilik', yil: '2019' },
      { baslik: 'TSEK Onayı', aciklama: 'Türk Standartları Enstitüsü Kalite Belgesi — Ulusal standart uyumu', yil: '2016' },
      { baslik: 'TS EN 1537', aciklama: 'Zemin ankrajları standardı — Kalıcı ve geçici ankraj uygulamalarında Avrupa normu', yil: '2021' },
    ],
  },
  {
    kategori: 'Mevzuat Uyumu',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    renk: '#d97706',
    items: [
      { baslik: 'TBDY 2018 Uyumu', aciklama: 'Türkiye Bina Deprem Yönetmeliği 2018 — Tüm projeler deprem yönetmeliğine tam uyumlu tasarlanır', yil: '2018' },
      { baslik: 'TS EN 1997 (EC7)', aciklama: 'Eurocode 7 Geoteknik Tasarım — Uluslararası geoteknik mühendislik standardı', yil: '2020' },
    ],
  },
  {
    kategori: 'İş Güvenliği',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    renk: '#dc2626',
    items: [
      { baslik: 'ISO 45001:2018', aciklama: 'İş Sağlığı ve Güvenliği Yönetim Sistemi — Sıfır kaza politikası ile saha güvenliği', yil: '2020' },
      { baslik: 'OHSAS 18001', aciklama: 'İş güvenliği yönetim sistemi geçiş belgesi', yil: '2014' },
    ],
  },
];

const rakamlar = [
  { deger: '8+', etiket: 'Aktif Belge & Sertifika' },
  { deger: '2015', etiket: 'İlk ISO Belgesi Yılı' },
  { deger: '4', etiket: 'Belge Kategorisi' },
  { deger: '100%', etiket: 'Denetim Başarı Oranı' },
];
---

<BaseLayout
  title="Belgelerimiz & Sertifikalarımız | Torem Zemin"
  description="Torem Zemin Mühendislik'in ISO 9001, CE, TSEK, TBDY 2018 ve uluslararası standart belgeleri. Kalite ve güvenilirliğin resmi kanıtı."
  canonical={canonical}
>
  <!-- HERO -->
  <section class="belge-hero">
    <div class="belge-hero__bg" aria-hidden="true"></div>
    <div class="container belge-hero__inner">
      <span class="eyebrow eyebrow--gold">Belgelerimiz</span>
      <h1>Kalitemizin<br/><span>Resmi Kanıtı</span></h1>
      <p>ISO 9001'den TBDY 2018'e, uluslararası standartlardan Türk mevzuatına — her projemizi belgeli güvenceyle teslim ediyoruz.</p>
    </div>
    <div class="belge-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z" fill="var(--color-bg)"/></svg>
    </div>
  </section>

  <Breadcrumb items={[
    { label: 'Kurumsal', href: '/kurumsal/' },
    { label: 'Belgelerimiz' }
  ]} />

  <!-- RAKAMLAR -->
  <section class="section section--dark">
    <div class="container">
      <div class="belge-stats">
        {rakamlar.map((r) => (
          <div class="bstat">
            <span class="bstat__val">{r.deger}</span>
            <span class="bstat__lbl">{r.etiket}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- BELGE KATEGORİLERİ -->
  <section class="section">
    <div class="container">
      <div class="belge-intro">
        <span class="eyebrow">Akreditasyonlar</span>
        <h2>Standart & Sertifikalarımız</h2>
        <p>Her belge, projelerimizde uyguladığımız kalite standardının bağımsız kurumlarca doğrulanmış kanıtıdır.</p>
      </div>

      <div class="belge-kategoriler">
        {belgeler.map((kat) => (
          <div class="belge-kat">
            <div class="belge-kat__baslik">
              <div class="belge-kat__ikon" style={`color:${kat.renk}; background:${kat.renk}18;`} set:html={kat.ikon} />
              <h3>{kat.kategori}</h3>
            </div>
            <div class="belge-kat__items">
              {kat.items.map((item) => (
                <div class="belge-item">
                  <div class="belge-item__header">
                    <span class="belge-item__baslik">{item.baslik}</span>
                    <span class="belge-item__yil">{item.yil}</span>
                  </div>
                  <p class="belge-item__aciklama">{item.aciklama}</p>
                  <div class="belge-item__onay">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="14 4 6 12 2 8"/></svg>
                    Aktif & Geçerli
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- GÜVENCE BANDI -->
  <section class="section guvence-section">
    <div class="container guvence-inner">
      <h2>Belge Doğrulama</h2>
      <p>Tüm belgelerimiz ilgili akreditasyon kurumlarınca yıllık denetimle güncellenmektedir. Belge geçerliliği hakkında bilgi almak için bizimle iletişime geçebilirsiniz.</p>
      <a href="/iletisim/" class="btn btn--primary">Belge Bilgisi Alın</a>
    </div>
  </section>

  <div class="section container">
    <CTABox title="Belgelenmiş Kaliteyle Projenizi Teslim Edelim" />
  </div>
</BaseLayout>

<style>
/* Hero */
.belge-hero {
  background: linear-gradient(135deg, var(--color-navy-dark, #001530) 0%, #1a2f45 100%);
  margin-top: -110px; padding-block: calc(var(--s-20, 5rem) + 110px) calc(var(--s-16, 4rem) + 60px);
  color: white; position: relative; overflow: hidden; text-align: center;
}
.belge-hero__bg {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle at 30% 60%, rgba(212,175,55,0.12) 0%, transparent 55%);
  pointer-events: none;
}
.belge-hero__inner { position: relative; z-index: 2; max-width: 640px; margin-inline: auto; }
.belge-hero h1 { color: white; font-size: clamp(2.5rem, 5vw, 3.75rem); line-height: 1.1; margin-bottom: 1rem; }
.belge-hero h1 span { color: var(--color-highlight, #C8873A); }
.belge-hero p { color: rgba(255,255,255,.75); font-size: 1.1rem; }
.belge-hero__wave { position: absolute; bottom: 0; left: 0; right: 0; height: 60px; z-index: 3; line-height: 0; }
.belge-hero__wave svg { width: 100%; height: 100%; }

.eyebrow { display: inline-block; font-size: .8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; background: rgba(200,135,58,.1); color: var(--color-highlight, #C8873A); padding: .3rem .8rem; border-radius: 4px; margin-bottom: 1rem; }
.eyebrow--gold { background: var(--color-highlight, #C8873A); color: white; }

/* Stats */
.section--dark { background: var(--color-primary, #1B2B3A); }
.belge-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }
.bstat { text-align: center; padding: 2rem 1rem; }
.bstat__val { display: block; font-size: 2.75rem; font-weight: 800; color: var(--color-highlight, #C8873A); line-height: 1; margin-bottom: .5rem; }
.bstat__lbl { font-size: .8rem; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .06em; }

/* Belge intro */
.belge-intro { max-width: 560px; margin-bottom: 3.5rem; }
.belge-intro h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); color: var(--color-primary, #1B2B3A); margin-bottom: .75rem; }
.belge-intro p { color: var(--color-text-muted, #5A6A7A); font-size: 1.05rem; line-height: 1.6; }

/* Kategoriler */
.belge-kategoriler { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.belge-kat { background: white; border: 1px solid rgba(0,0,0,.06); border-radius: 16px; padding: 2rem; box-shadow: 0 2px 12px rgba(0,0,0,.04); }
.belge-kat__baslik { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(0,0,0,.06); }
.belge-kat__ikon { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.belge-kat__ikon svg { width: 22px; height: 22px; }
.belge-kat__baslik h3 { font-size: 1.1rem; font-weight: 700; color: var(--color-primary, #1B2B3A); }
.belge-kat__items { display: flex; flex-direction: column; gap: 1.25rem; }
.belge-item { padding: 1.25rem; background: #fafaf7; border-radius: 10px; border: 1px solid rgba(0,0,0,.04); transition: border-color .2s, box-shadow .2s; }
.belge-item:hover { border-color: var(--color-highlight, #C8873A); box-shadow: 0 4px 16px rgba(0,0,0,.06); }
.belge-item__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .5rem; }
.belge-item__baslik { font-weight: 700; font-size: .95rem; color: var(--color-primary, #1B2B3A); }
.belge-item__yil { font-size: .75rem; font-weight: 700; background: rgba(27,43,58,.08); color: var(--color-primary, #1B2B3A); padding: .15rem .5rem; border-radius: 999px; }
.belge-item__aciklama { font-size: .85rem; color: var(--color-text-muted, #5A6A7A); line-height: 1.6; margin-bottom: .75rem; }
.belge-item__onay { display: inline-flex; align-items: center; gap: .35rem; font-size: .75rem; font-weight: 600; color: #16a34a; }
.belge-item__onay svg { stroke: #16a34a; }

/* Güvence */
.guvence-section { background: #fafaf7; }
.guvence-inner { max-width: 640px; margin-inline: auto; text-align: center; padding-block: 1rem; }
.guvence-inner h2 { font-size: 1.75rem; color: var(--color-primary, #1B2B3A); margin-bottom: .75rem; }
.guvence-inner p { color: var(--color-text-muted, #5A6A7A); line-height: 1.7; margin-bottom: 1.75rem; }

@media (max-width: 768px) { .belge-kategoriler { grid-template-columns: 1fr; } .belge-stats { grid-template-columns: repeat(2,1fr); } }
</style>
```

---

## İŞ 4 — NEDEN TOREM SAYFASI

**Yeni dosya:** `src/pages/kurumsal/neden-torem/index.astro`

```astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import CTABox from '../../../components/CTABox.astro';

const canonical = 'https://www.toremzemin.com/kurumsal/neden-torem/';

const farklar = [
  {
    no: '01',
    baslik: '20+ Yıl Sahadan Gelen Deneyim',
    aciklama: '2004\'ten bu yana 600\'ü aşkın proje. Her zemin koşulunu, her yapı tipini sahada yaşadık. Teorik bilgiyi saha tecrübesiyle harmanlarız.',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    detay: ['İstanbul\'un zorlu zemin koşullarında 500+ proje', 'Ankara, İzmir, Bursa, Kocaeli\'nde aktif operasyonlar', 'Konut, altyapı, metro, endüstri — her proje tipinde referans'],
  },
  {
    no: '02',
    baslik: '55+ Makineli Tam Donanım',
    aciklama: 'Kiralamaya değil kendi makinemize güveniriz. Soilmec SR-40, Casagrande B200 XP, Bauer BG20 — her iş için doğru ekipman, sahada hazır.',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    detay: ['Soilmec, Casagrande, Bauer marka ekipman filosu', 'Tüm makineler periyodik bakımlı ve sertifikalı', 'Kendi lojistik ve taşıma kapasitesi'],
  },
  {
    no: '03',
    baslik: 'Anahtar Teslim Çözüm',
    aciklama: 'Zemin etüdünden projeye, uygulamadan kalite testine tek elden. Koordinasyon kaybı yok, gecikme yok, sürpriz yok.',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
    detay: ['Zemin etüdü + geoteknik rapor', 'Temel ve iksa projesi tasarımı', 'Uygulama + yükleme testi + kalite belgesi'],
  },
  {
    no: '04',
    baslik: 'TBDY 2018 & ISO Güvencesi',
    aciklama: 'Tüm projelerimiz Türkiye Bina Deprem Yönetmeliği 2018\'e ve ISO 9001 kalite sistemine tam uyumlu. Denetim her aşamada, belge sona teslim.',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    detay: ['ISO 9001:2015 sertifikalı kalite sistemi', 'Her kazık için yükleme testi ve rapor', 'TBDY 2018 deprem yönetmeliği tam uyumu'],
  },
  {
    no: '05',
    baslik: 'Zamanında Teslim Taahhüdü',
    aciklama: 'İnşaat projelerinde zaman paradır. Gecikmeler size maliyet, bize itibar kaybettirir. İş programını taahhüt eder, sahadaki kapasitemizle tutarız.',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
    detay: ['İş programı başlangıçta yazılı taahhüt', 'Haftalık saha ilerleme raporu', 'Kritik yol analizi ile gecikme önleme'],
  },
  {
    no: '06',
    baslik: 'Saha Notu Şeffaflığı',
    aciklama: 'Beklenmeyenle karşılaştığımızda saklamayız — anında bilgilendiririz. Değişen zemin koşulları, revizyon gereği — müşteri her zaman ilk önce bilir.',
    ikon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
    detay: ['Günlük saha raporu + fotoğraf', 'Beklenmeyen durumlarda 24 saat içinde çözüm önerisi', 'Teslimatta eksiksiz as-built dokümantasyon'],
  },
];

const rakipler = [
  { kriter: 'Kendi Makine Parkı', torem: true, rakip: false },
  { kriter: 'ISO 9001 Sertifikası', torem: true, rakip: false },
  { kriter: 'Anahtar Teslim Hizmet', torem: true, rakip: false },
  { kriter: 'TBDY 2018 Uyumu', torem: true, rakip: true },
  { kriter: 'Yükleme Testi & Rapor', torem: true, rakip: false },
  { kriter: '20+ Yıl Deneyim', torem: true, rakip: false },
  { kriter: 'Türkiye Geneli Operasyon', torem: true, rakip: false },
  { kriter: 'As-Built Dokümantasyon', torem: true, rakip: false },
];
---

<BaseLayout
  title="Neden Torem? | Torem Zemin Mühendislik"
  description="Torem Zemin'i rakiplerinden ayıran 6 temel fark. Kendi makine parkı, ISO 9001, anahtar teslim çözüm, TBDY 2018 uyumu ve 20+ yıllık saha deneyimi."
  canonical={canonical}
>
  <!-- HERO -->
  <section class="neden-hero">
    <div class="neden-hero__bg" aria-hidden="true"></div>
    <div class="container neden-hero__inner">
      <span class="eyebrow eyebrow--gold">Neden Torem?</span>
      <h1>Fark Sahada<br/><span>Ortaya Çıkar</span></h1>
      <p>600+ proje, 20+ yıl, 55+ makine. Rakamlar etkileyici — ama asıl fark sahadaki tutumda, kalitede ve şeffaflıkta gizli.</p>
    </div>
    <div class="neden-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z" fill="var(--color-bg)"/></svg>
    </div>
  </section>

  <Breadcrumb items={[
    { label: 'Kurumsal', href: '/kurumsal/' },
    { label: 'Neden Torem?' }
  ]} />

  <!-- FARKLAR -->
  <section class="section">
    <div class="container">
      <div class="neden-intro">
        <span class="eyebrow">6 Temel Fark</span>
        <h2>Bizi Farklı Kılan Nedir?</h2>
        <p>Geoteknik firmalar arasında seçim yaparken bunlara bakın.</p>
      </div>
      <div class="fark-grid">
        {farklar.map((f) => (
          <div class="fark-card">
            <div class="fark-card__no">{f.no}</div>
            <div class="fark-card__ikon" set:html={f.ikon} />
            <h3>{f.baslik}</h3>
            <p>{f.aciklama}</p>
            <ul class="fark-card__detay">
              {f.detay.map((d) => <li>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- KARŞILAŞTIRMA TABLOSU -->
  <section class="section karsilastirma-section">
    <div class="container">
      <div class="neden-intro text-center">
        <span class="eyebrow">Karşılaştırma</span>
        <h2>Torem vs Diğer Firmalar</h2>
        <p>Rakiplerimizle nesnel karşılaştırma — karar sizin.</p>
      </div>
      <div class="tablo-wrap">
        <table class="kars-tablo">
          <thead>
            <tr>
              <th>Kriter</th>
              <th class="torem-col">Torem Zemin</th>
              <th>Ortalama Rakip</th>
            </tr>
          </thead>
          <tbody>
            {rakipler.map((r) => (
              <tr>
                <td>{r.kriter}</td>
                <td class="torem-col">
                  {r.torem
                    ? <span class="check check--yes">✓</span>
                    : <span class="check check--no">✗</span>}
                </td>
                <td>
                  {r.rakip
                    ? <span class="check check--yes">✓</span>
                    : <span class="check check--no">✗</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <div class="section container">
    <CTABox title="Farkı Birlikte Yaşayalım" />
  </div>
</BaseLayout>

<style>
/* Hero */
.neden-hero {
  background: linear-gradient(135deg, #001530 0%, var(--color-primary, #1B2B3A) 100%);
  margin-top: -110px; padding-block: calc(5rem + 110px) calc(4rem + 60px);
  color: white; position: relative; overflow: hidden; text-align: center;
}
.neden-hero__bg {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle at 80% 20%, rgba(200,135,58,.15) 0%, transparent 50%),
    linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
  background-size: 100%, 50px 50px, 50px 50px;
  pointer-events: none;
}
.neden-hero__inner { position: relative; z-index: 2; max-width: 640px; margin-inline: auto; }
.neden-hero h1 { color: white; font-size: clamp(2.5rem, 5vw, 3.75rem); line-height: 1.1; margin-bottom: 1rem; }
.neden-hero h1 span { color: var(--color-highlight, #C8873A); }
.neden-hero p { color: rgba(255,255,255,.75); font-size: 1.1rem; }
.neden-hero__wave { position: absolute; bottom: 0; left: 0; right: 0; height: 60px; z-index: 3; line-height: 0; }
.neden-hero__wave svg { width: 100%; height: 100%; }

.eyebrow { display: inline-block; font-size: .8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; background: rgba(200,135,58,.1); color: var(--color-highlight, #C8873A); padding: .3rem .8rem; border-radius: 4px; margin-bottom: 1rem; }
.eyebrow--gold { background: var(--color-highlight, #C8873A); color: white; }

/* Intro */
.neden-intro { max-width: 560px; margin-bottom: 3.5rem; }
.neden-intro.text-center { margin-inline: auto; text-align: center; }
.neden-intro h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); color: var(--color-primary, #1B2B3A); margin-bottom: .75rem; }
.neden-intro p { color: var(--color-text-muted, #5A6A7A); font-size: 1.05rem; line-height: 1.6; }

/* Fark grid */
.fark-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
.fark-card {
  background: white; border: 1px solid rgba(0,0,0,.06); border-radius: 16px;
  padding: 2rem; position: relative; overflow: hidden;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}
.fark-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
  background: var(--color-highlight, #C8873A);
  transform: scaleX(0); transform-origin: left; transition: transform .4s ease;
}
.fark-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,.10); border-color: transparent; }
.fark-card:hover::after { transform: scaleX(1); }
.fark-card__no { font-size: 3rem; font-weight: 900; color: rgba(200,135,58,.12); line-height: 1; margin-bottom: .75rem; font-variant-numeric: tabular-nums; }
.fark-card__ikon { width: 48px; height: 48px; background: rgba(200,135,58,.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-highlight, #C8873A); margin-bottom: 1.25rem; }
.fark-card__ikon svg { width: 24px; height: 24px; }
.fark-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--color-primary, #1B2B3A); margin-bottom: .75rem; }
.fark-card p { font-size: .9rem; color: var(--color-text-muted, #5A6A7A); line-height: 1.65; margin-bottom: 1.25rem; }
.fark-card__detay { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .5rem; }
.fark-card__detay li { font-size: .82rem; color: var(--color-text-muted, #5A6A7A); padding-left: 1.1rem; position: relative; }
.fark-card__detay li::before { content: '✓'; position: absolute; left: 0; color: #16a34a; font-weight: 700; font-size: .8rem; }

/* Karşılaştırma */
.karsilastirma-section { background: #fafaf7; }
.tablo-wrap { overflow-x: auto; }
.kars-tablo { width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,.06); }
.kars-tablo th { padding: 1rem 1.5rem; text-align: left; font-size: .8rem; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; background: var(--color-primary, #1B2B3A); color: white; }
.kars-tablo th.torem-col { background: var(--color-highlight, #C8873A); color: white; }
.kars-tablo td { padding: .875rem 1.5rem; border-bottom: 1px solid rgba(0,0,0,.05); font-size: .9rem; color: var(--color-primary, #1B2B3A); }
.kars-tablo td.torem-col { background: rgba(200,135,58,.04); font-weight: 600; }
.kars-tablo tr:last-child td { border-bottom: none; }
.kars-tablo tr:hover td { background: #fafaf7; }
.kars-tablo tr:hover td.torem-col { background: rgba(200,135,58,.08); }
.check { font-size: 1.1rem; font-weight: 700; }
.check--yes { color: #16a34a; }
.check--no { color: #dc2626; }

@media (max-width: 900px) { .fark-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .fark-grid { grid-template-columns: 1fr; } }
</style>
```

---

## İŞ 5 — BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Hata yoksa:

```bash
git add src/pages/kurumsal/ src/layouts/BaseLayout.astro
git commit -m "feat: kurumsal alt sayfalar — Ekibimiz, Belgelerimiz, Neden Torem?"
git push origin main
```

---

## DOĞRULAMA LİSTESİ

- [ ] `/kurumsal/ekibimiz/` açılıyor — yönetim kartları ve departman grid var
- [ ] `/kurumsal/belgelerimiz/` açılıyor — 4 kategori, belgeler listeleniyor
- [ ] `/kurumsal/neden-torem/` açılıyor — 6 fark kartı ve karşılaştırma tablosu var
- [ ] Breadcrumb'larda "Kurumsal > [Sayfa Adı]" doğru görünüyor
- [ ] Build sıfır hata
