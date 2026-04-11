# Projelerimiz — Detay Sayfası + Logo Bandı Talimatı
**Tarih:** 2026-04-10
**Çalışma dizini:** `scratch/torem-site/`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/` — ayrı proje

---

## GENEL HEDEF

İki iş yapılacak:

1. **Logo Bandı Fix** → Ana sayfada metin olarak görünen referans logoları gerçek PNG dosyalarına dönüştür
2. **Projelerimiz Detay Sayfası** → Her proje kartına tıklanınca açılan `/projelerimiz/[slug]/` sayfası oluştur — büyük hero görsel, teknik detaylar, highlight metrikler, CTA

---

## İŞ 1 — LOGO BANDI FIX

**Dosya:** `src/pages/index.astro`

Logo dosyaları zaten mevcut: `public/images/logos/` klasöründe:
- `ronesans.png`
- `toki.png`
- `ibb.png`
- `kolin.png`
- `emlak-konut.png`
- `fernas.png`
- `smart.png`
- `dogus.png`

### Mevcut kod (değiştirilecek):
```astro
{[
  'Rönesans', 'TOKİ', 'İBB', 'Kolin', 'Emlak Konut', 'Fernas', 'Smart', 'Doğuş',
  'Rönesans', 'TOKİ', 'İBB', 'Kolin', 'Emlak Konut', 'Fernas', 'Smart', 'Doğuş'
].map((name) => (
  <div class="logo-item">
    <span class="logo-text">{name}</span>
  </div>
))}
```

### Yeni kod (bununla değiştir):
```astro
{[
  { name: 'Rönesans',     src: '/images/logos/ronesans.png'     },
  { name: 'TOKİ',         src: '/images/logos/toki.png'         },
  { name: 'İBB',          src: '/images/logos/ibb.png'          },
  { name: 'Kolin',        src: '/images/logos/kolin.png'        },
  { name: 'Emlak Konut',  src: '/images/logos/emlak-konut.png'  },
  { name: 'Fernas',       src: '/images/logos/fernas.png'       },
  { name: 'Smart',        src: '/images/logos/smart.png'        },
  { name: 'Doğuş',        src: '/images/logos/dogus.png'        },
  { name: 'Rönesans',     src: '/images/logos/ronesans.png'     },
  { name: 'TOKİ',         src: '/images/logos/toki.png'         },
  { name: 'İBB',          src: '/images/logos/ibb.png'          },
  { name: 'Kolin',        src: '/images/logos/kolin.png'        },
  { name: 'Emlak Konut',  src: '/images/logos/emlak-konut.png'  },
  { name: 'Fernas',       src: '/images/logos/fernas.png'       },
  { name: 'Smart',        src: '/images/logos/smart.png'        },
  { name: 'Doğuş',        src: '/images/logos/dogus.png'        },
].map((logo) => (
  <div class="logo-item">
    <img
      src={logo.src}
      alt={logo.name + ' — Torem Zemin referans müşteri'}
      loading="lazy"
      width="120"
      height="40"
      style="object-fit:contain; max-height:40px; width:auto;"
    />
  </div>
))}
```

### CSS güncelle (aynı dosya `<style>` bloğu içinde):
Mevcut `.logo-text` satırını sil — artık kullanılmıyor.
`.logo-item` CSS'ine `filter: grayscale(1); opacity: 0.6;` ekle.
`.logo-item:hover` CSS'ine `filter: grayscale(0); opacity: 1;` ekle.

```css
/* Mevcut logo-item'e ekle */
.logo-item { 
  /* mevcut stiller korunacak + şunlar ekleniyor: */
  filter: grayscale(1);
  opacity: 0.6;
  transition: border-color var(--t-fast), box-shadow var(--t-fast), filter var(--t-fast), opacity var(--t-fast);
}
.logo-item:hover { 
  border-color: var(--color-highlight);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  filter: grayscale(0);
  opacity: 1;
}
```

---

## İŞ 2 — PROJELER VERİ DOSYASI

**Yeni dosya oluştur:** `src/data/projeler.ts`

Bu dosyada tüm proje verileri tanımlanacak. Her projeye slug, detaylı açıklama, metrikler, galeri görselleri eklenecek.

```typescript
export interface Proje {
  slug: string;
  title: string;
  category: string;
  catSlug: string;
  location: string;
  year: string;
  desc: string;
  image: string;
  tags: string[];
  // Detay sayfası için ek alanlar:
  heroImage: string;
  client: string;
  duration: string;
  scope: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  gallery: { src: string; alt: string }[];
  relatedSlugs: string[];
}

export const projeler: Proje[] = [
  {
    slug: 'basaksehir-karma-yapi',
    title: 'Başakşehir Karma Yapı Kompleksi',
    category: 'Fore Kazık',
    catSlug: 'fore-kazik',
    location: 'İstanbul, Başakşehir',
    year: '2024',
    desc: '48 katlı karma yapı için 512 adet fore kazık uygulaması. Kazık çapı Ø880mm, kazık boyu 28m.',
    image: '/images/fore-kazik-saha.jpg',
    heroImage: '/images/fore-kazik/fore-kazik-hero.webp',
    tags: ['Ø880mm', '28m Derinlik', '512 Kazık'],
    client: 'Rönesans Holding',
    duration: '8 Ay',
    scope: 'Fore kazık imalatı, zemin etüdü, kalite kontrol',
    challenge: 'Yüksek katlı karma yapının heterojen zemin koşullarında güvenli temel sistemi gerektirmesi. Yerleşim alanına yakınlık nedeniyle gürültü ve titreşim kısıtları.',
    solution: 'Ø880mm çaplı, 28m derinliğinde fore kazık sistemi uygulandı. 3D zemin modeli ile optimum kazık yerleşimi belirlendi. Gece çalışması yasağına uygun iş programı hazırlandı.',
    result: '512 adet fore kazık eksiksiz tamamlandı. Statik yükleme testlerinde tüm kazıklar tasarım kapasitesinin üzerinde performans gösterdi. Sıfır gürültü şikayeti.',
    metrics: [
      { label: 'Kazık Adedi', value: '512' },
      { label: 'Kazık Çapı', value: 'Ø880mm' },
      { label: 'Kazık Boyu', value: '28m' },
      { label: 'Süre', value: '8 Ay' },
    ],
    gallery: [
      { src: '/images/fore-kazik/fore-kazik-hero.webp', alt: 'Başakşehir Karma Yapı fore kazık uygulaması' },
      { src: '/images/fore-kazik/fore-kazik-ekipman.webp', alt: 'Fore kazık ekipmanları sahada' },
      { src: '/images/fore-kazik/fore-kazik-donati.webp', alt: 'Fore kazık donatı yerleştirme' },
      { src: '/images/fore-kazik/fore-kazik-beton.webp', alt: 'Fore kazık betonlama aşaması' },
    ],
    relatedSlugs: ['pendik-metro-iksasi', 'kadikoy-tarihi-yapi'],
  },
  {
    slug: 'pendik-metro-iksasi',
    title: 'Pendik Metro İstasyonu İksası',
    category: 'İksa Sistemleri',
    catSlug: 'iksa',
    location: 'İstanbul, Pendik',
    year: '2023',
    desc: 'İstanbul metro hattı genişleme projesi. 14m derinliğinde ankrajlı palplanş iksa sistemi.',
    image: '/images/iksa-sistemleri.jpg',
    heroImage: '/images/iksa/ankrajli-fore-kazik.jpg',
    tags: ['14m Derinlik', 'Kentsel Ortam', 'Ankrajlı'],
    client: 'İBB Ulaşım A.Ş.',
    duration: '5 Ay',
    scope: 'Ankrajlı iksa tasarımı ve imalatı, inklinometre izleme, şantiye yönetimi',
    challenge: 'Metro hattına 8m mesafede kazı yapılması. Aktif trafik altında çalışma. Sıfır çökme toleransı ve 14m derinlik.',
    solution: 'Ankrajlı palplanş iksa sistemi seçildi. 3 sıra öngermeli ankraj ile deformasyon sıfıra yakın tutuldu. Sürekli inklinometre izleme sistemi kuruldu.',
    result: 'Maksimum yatay deformasyon 8mm — tasarım limitinin çok altında. Metro hattında kesinti yaşanmadı. Proje süresinde tamamlandı.',
    metrics: [
      { label: 'Kazı Derinliği', value: '14m' },
      { label: 'Ankraj Sırası', value: '3 Sıra' },
      { label: 'Max Deformasyon', value: '8mm' },
      { label: 'Süre', value: '5 Ay' },
    ],
    gallery: [
      { src: '/images/iksa/ankrajli-fore-kazik.jpg', alt: 'Pendik metro ankrajlı iksa sistemi' },
      { src: '/images/iksa/berlin-duvari.jpg', alt: 'İksa sistemi kazı aşaması' },
      { src: '/images/iksa/secant-pile.jpg', alt: 'Kazı çevresi iksa görünümü' },
    ],
    relatedSlugs: ['basaksehir-karma-yapi', 'ankara-osb-binasi'],
  },
  {
    slug: 'kocaeli-endustriyel-depo',
    title: 'Kocaeli Endüstriyel Depo Kompleksi',
    category: 'Jet Grout',
    catSlug: 'jet-grout',
    location: 'Kocaeli, Gebze',
    year: '2023',
    desc: 'Yüksek taşıma kapasiteli endüstriyel zemin için jet grout kolon uygulaması. 80.000 m² alan.',
    image: '/images/zemin-iyilestirme.jpg',
    heroImage: '/images/jet-grout/jet-grout-hero.webp',
    tags: ['80.000 m²', 'Zemin İyileştirme', 'Jet Grout'],
    client: 'Fernas İnşaat',
    duration: '6 Ay',
    scope: 'Jet grout zemin iyileştirme, deneme kolonları, kalite kontrol, sertlik testleri',
    challenge: '80.000 m² alanda zayıf kil ve silt zeminlerin taşıma gücü yetersizliği. Ağır endüstriyel yük altında oturma riski.',
    solution: 'Üçlü sistem jet grout kolonu uygulandı. Ø800mm kolon çapı, 12m derinlik. Her 50 kolonda bir karot alınarak dayanım doğrulandı.',
    result: 'Zemin taşıma kapasitesi 3 katına çıkarıldı. Beklenen oturma 15mm\'den 4mm\'ye düşürüldü. Tüm karot örnekleri 8 MPa hedefini geçti.',
    metrics: [
      { label: 'Alan', value: '80.000 m²' },
      { label: 'Kolon Çapı', value: 'Ø800mm' },
      { label: 'Derinlik', value: '12m' },
      { label: 'Dayanım', value: '8+ MPa' },
    ],
    gallery: [
      { src: '/images/jet-grout/jet-grout-hero.webp', alt: 'Kocaeli jet grout uygulaması' },
      { src: '/images/jet-grout/jet-grout-ekipman.webp', alt: 'Jet grout makinesi sahada' },
      { src: '/images/jet-grout/jet-grout-kolon.webp', alt: 'Jet grout kolon imalatı' },
      { src: '/images/jet-grout/jet-grout-test.webp', alt: 'Karot testi kalite kontrol' },
    ],
    relatedSlugs: ['bursa-toprak-kayma', 'kocaeli-endustriyel-depo'],
  },
  {
    slug: 'bursa-toprak-kayma',
    title: 'Bursa Toprak Kayma Güçlendirme',
    category: 'Zemin Çivisi',
    catSlug: 'zemin-civisi',
    location: 'Bursa, Nilüfer',
    year: '2024',
    desc: 'Yerleşim bölgesinde aktif toprak kayması stabilizasyonu. 240 adet zemin çivisi.',
    image: '/images/hero-main.jpg',
    heroImage: '/images/hero-main.jpg',
    tags: ['240 Çivi', 'Shotcrete', 'İzleme Sistemi'],
    client: 'Bursa Büyükşehir Belediyesi',
    duration: '4 Ay',
    scope: 'Heyelan stabilizasyonu, zemin çivisi imalatı, shotcrete yüzey koruma, deformasyon izleme',
    challenge: 'Aktif toprak kayması yaşayan, 120 kişilik yerleşim alanını tehdit eden şev. Acil müdahale gereken kritik durum.',
    solution: 'Ø100mm çaplı, 12m uzunluğunda 240 adet zemin çivisi. Shotcrete yüzey koruma ile çivi kafası bağlantı tabliyesi. İzleme çubuğu ile sürekli takip.',
    result: 'Şev hareketi ilk 2 haftada durdu. 2 yıllık izleme sonucunda sıfır deformasyon. 120 kişilik yerleşim alanı güvenceye alındı.',
    metrics: [
      { label: 'Çivi Adedi', value: '240' },
      { label: 'Çivi Uzunluğu', value: '12m' },
      { label: 'Shotcrete Alanı', value: '3.200 m²' },
      { label: 'Süre', value: '4 Ay' },
    ],
    gallery: [
      { src: '/images/hero-main.jpg', alt: 'Bursa toprak kayma stabilizasyonu' },
      { src: '/images/saha-muhendis.jpg', alt: 'Saha mühendisi kontrol çalışması' },
    ],
    relatedSlugs: ['kocaeli-endustriyel-depo', 'kadikoy-tarihi-yapi'],
  },
  {
    slug: 'kadikoy-tarihi-yapi',
    title: 'Kadıköy Tarihi Yapı Yenileme',
    category: 'Mini Kazık',
    catSlug: 'mini-kazik',
    location: 'İstanbul, Kadıköy',
    year: '2022',
    desc: 'Tarihi binanın temel güçlendirmesi. Sınırlı çalışma alanında Ø114mm mini kazık uygulaması.',
    image: '/images/makine-parki.webp',
    heroImage: '/images/makine-parki.webp',
    tags: ['Ø114mm', 'Tarihi Yapı', 'Mini Kazık'],
    client: 'Özel Mülk Sahibi',
    duration: '3 Ay',
    scope: 'Mini kazık ile temel güçlendirme, yapı içi uygulama, titreşim kontrolü',
    challenge: '1920\'li yıllardan kalma tarihi yapının çökmekte olan temelinin güçlendirilmesi. Çalışma alanı 1,8m yüksekliğinde bodrum. Kültür varlığı statüsünde bina.',
    solution: 'Ø114mm çaplı mini kazık sistemi seçildi — bodrum içinde çalışabilecek tek yöntem. 8m derinlikte kaya zeminle bağlantı. Minimum titreşim protokolü uygulandı.',
    result: 'Yapı 3mm\'den az oturmayla güçlendirildi. Tarihi dokuda hiçbir hasar oluşmadı. Kültür Bakanlığı denetimi geçildi.',
    metrics: [
      { label: 'Kazık Çapı', value: 'Ø114mm' },
      { label: 'Derinlik', value: '8m' },
      { label: 'Çalışma Yüksekliği', value: '1.8m' },
      { label: 'Oturma', value: '<3mm' },
    ],
    gallery: [
      { src: '/images/makine-parki.webp', alt: 'Mini kazık ekipmanı bodrum çalışması' },
      { src: '/images/proje-gorusme.jpg', alt: 'Proje mühendisleri değerlendirme' },
    ],
    relatedSlugs: ['basaksehir-karma-yapi', 'bursa-toprak-kayma'],
  },
  {
    slug: 'ankara-osb-binasi',
    title: 'Ankara OSB Sanayi Binası',
    category: 'Öngermeli Ankraj',
    catSlug: 'ankraj',
    location: 'Ankara, Sincan OSB',
    year: '2022',
    desc: 'Organize sanayi bölgesinde derin iksa ve kalıcı ankraj sistemi. 18m derinlik, 2000 kN kapasite.',
    image: '/images/ankraj.jpg',
    heroImage: '/images/ankraj.jpg',
    tags: ['18m Derinlik', '2000 kN', 'Kalıcı Ankraj'],
    client: 'Kolin İnşaat',
    duration: '7 Ay',
    scope: 'Öngermeli ankraj tasarımı ve imalatı, iksa sistemi, yük izleme',
    challenge: 'OSB sahasında ağır sanayi yapısı için 18m derinlikte derin kazı. Kalıcı ankraj sisteminin 50+ yıl hizmet vermesi şartı. Korozyon koruması kritik.',
    solution: '3 sıra öngermeli ankraj, her biri 2000 kN kapasiteli. Çift bariyerli korozyon koruması (HDPE kılıf + gres dolgusu). Tüm ankrajlara uygunluk ve sürünme testi yapıldı.',
    result: 'Tüm ankrajlar EN 1537 standardını geçti. 18m derinlik eksiksiz ulaşıldı. Yük izleme sistemi 24 ay boyunca kararlı okuma gösterdi.',
    metrics: [
      { label: 'Derinlik', value: '18m' },
      { label: 'Kapasite', value: '2000 kN' },
      { label: 'Ankraj Sırası', value: '3 Sıra' },
      { label: 'Ömür', value: '50+ Yıl' },
    ],
    gallery: [
      { src: '/images/ankraj.jpg', alt: 'Ankara OSB ankraj uygulaması' },
      { src: '/images/geoteknik-test.jpg', alt: 'Ankraj yükleme testi' },
    ],
    relatedSlugs: ['pendik-metro-iksasi', 'kocaeli-endustriyel-depo'],
  },
];

export function getPruje(slug: string): Proje | undefined {
  return projeler.find((p) => p.slug === slug);
}
```

---

## İŞ 3 — PROJELER LİSTE SAYFASINI GÜNCELLE

**Dosya:** `src/pages/projelerimiz/index.astro`

Mevcut `import` satırlarına ekle:
```astro
import { projeler } from '../../data/projeler';
```

Mevcut `const projects = [...]` bloğunun **tamamını sil**, yerine:
```astro
const projects = projeler;
```

Her proje kartını tıklanabilir yap. Mevcut `<article class="pcard"` satırını `<a>` wrapper ile sar:

```astro
{projects.map((p) => (
  <a href={`/projelerimiz/${p.slug}/`} class="pcard" data-cat={p.catSlug}>
    <div class="pcard__img-wrap">
      <img src={p.image} alt={p.title} loading="lazy" width="600" height="400" />
      <span class="pcard__cat">{p.category}</span>
      <span class="pcard__arrow" aria-hidden="true">→</span>
    </div>
    <div class="pcard__body">
      <div class="pcard__meta">
        <span class="pcard__loc">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 2a4 4 0 100 8A4 4 0 008 2zM8 14s-6-4-6-7a6 6 0 1112 0c0 3-6 7-6 7z"/></svg>
          {p.location}
        </span>
        <span class="pcard__year">{p.year}</span>
      </div>
      <h3 class="pcard__title">{p.title}</h3>
      <p class="pcard__desc">{p.desc}</p>
      <div class="pcard__tags">
        {p.tags.map((t) => <span class="ptag">{t}</span>)}
      </div>
    </div>
  </a>
))}
```

`<style>` bloğuna şunları ekle:
```css
/* Kart link */
.pcard { display:block; text-decoration:none; color:inherit; }
/* Ok ikonu */
.pcard__arrow {
  position:absolute; bottom:var(--s-3); right:var(--s-3);
  background:var(--color-highlight); color:white;
  width:32px; height:32px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:1rem; font-weight:700;
  opacity:0; transform:scale(0.8);
  transition:opacity var(--t-fast), transform var(--t-fast);
}
.pcard:hover .pcard__arrow { opacity:1; transform:scale(1); }
```

---

## İŞ 4 — DETAY SAYFASI OLUŞTUR

**Yeni dosya oluştur:** `src/pages/projelerimiz/[slug].astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumb from '../../components/Breadcrumb.astro';
import CTABox from '../../components/CTABox.astro';
import { projeler, getPruje } from '../../data/projeler';

export function getStaticPaths() {
  return projeler.map((p) => ({
    params: { slug: p.slug },
    props: { proje: p },
  }));
}

const { proje } = Astro.props;
const related = projeler.filter((p) => proje.relatedSlugs.includes(p.slug));
const canonical = `https://www.toremzemin.com/projelerimiz/${proje.slug}/`;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: proje.title,
  description: proje.desc,
  image: `https://www.toremzemin.com${proje.heroImage}`,
  author: {
    '@type': 'Organization',
    name: 'Torem Zemin Mühendislik',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Torem Zemin Mühendislik',
    url: 'https://www.toremzemin.com',
  },
};
---

<BaseLayout
  title={`${proje.title} | Torem Zemin Projelerimiz`}
  description={proje.desc}
  canonical={canonical}
  schema={schema}
>
  <!-- HERO -->
  <section class="proje-hero">
    <div class="proje-hero__bg" style={`background-image:url('${proje.heroImage}')`} aria-hidden="true"></div>
    <div class="proje-hero__overlay" aria-hidden="true"></div>
    <div class="container proje-hero__inner">
      <span class="proje-hero__cat">{proje.category}</span>
      <h1>{proje.title}</h1>
      <div class="proje-hero__meta">
        <span>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" width="14" height="14"><path d="M8 2a4 4 0 100 8A4 4 0 008 2zM8 14s-6-4-6-7a6 6 0 1112 0c0 3-6 7-6 7z"/></svg>
          {proje.location}
        </span>
        <span>{proje.year}</span>
        <span>{proje.client}</span>
      </div>
    </div>
    <div class="proje-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z" fill="var(--color-bg)" />
      </svg>
    </div>
  </section>

  <Breadcrumb items={[
    { label: 'Projelerimiz', href: '/projelerimiz/' },
    { label: proje.title },
  ]} />

  <!-- METRİKLER -->
  <section class="section section--metrics">
    <div class="container">
      <div class="metrics-grid">
        {proje.metrics.map((m) => (
          <div class="metric-card">
            <span class="metric-card__val">{m.value}</span>
            <span class="metric-card__lbl">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- DETAY İÇERİK -->
  <section class="section">
    <div class="container proje-content-grid">

      <!-- Sol: Ana içerik -->
      <div class="proje-main">
        <div class="proje-block">
          <h2>Proje Özeti</h2>
          <p>{proje.desc}</p>
        </div>

        <div class="proje-block">
          <h2>Zorluk</h2>
          <p>{proje.challenge}</p>
        </div>

        <div class="proje-block">
          <h2>Çözüm</h2>
          <p>{proje.solution}</p>
        </div>

        <div class="proje-block">
          <h2>Sonuç</h2>
          <p class="proje-result">{proje.result}</p>
        </div>

        <!-- Galeri -->
        {proje.gallery.length > 1 && (
          <div class="proje-block">
            <h2>Proje Fotoğrafları</h2>
            <div class="proje-gallery">
              {proje.gallery.map((g) => (
                <figure class="gallery-item">
                  <img src={g.src} alt={g.alt} loading="lazy" width="600" height="400" />
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>

      <!-- Sağ: Sidebar -->
      <aside class="proje-sidebar">
        <div class="sidebar-card">
          <h3>Proje Detayları</h3>
          <ul class="sidebar-list">
            <li><span class="sidebar-list__lbl">Müşteri</span><span>{proje.client}</span></li>
            <li><span class="sidebar-list__lbl">Konum</span><span>{proje.location}</span></li>
            <li><span class="sidebar-list__lbl">Yıl</span><span>{proje.year}</span></li>
            <li><span class="sidebar-list__lbl">Süre</span><span>{proje.duration}</span></li>
            <li><span class="sidebar-list__lbl">Kapsam</span><span>{proje.scope}</span></li>
          </ul>
        </div>

        <div class="sidebar-cta">
          <p>Benzer bir projeniz mi var?</p>
          <a href="/iletisim/" class="btn btn--primary" style="width:100%;text-align:center;">Ücretsiz Keşif Raporu Alın</a>
          <a href="tel:+905316594636" class="btn btn--outline" style="width:100%;text-align:center;margin-top:0.75rem;">+90 531 659 46 36</a>
        </div>
      </aside>

    </div>
  </section>

  <!-- İLGİLİ PROJELER -->
  {related.length > 0 && (
    <section class="section related-section">
      <div class="container">
        <h2 class="related-title">İlgili Projeler</h2>
        <div class="related-grid">
          {related.map((r) => (
            <a href={`/projelerimiz/${r.slug}/`} class="related-card">
              <div class="related-card__img">
                <img src={r.image} alt={r.title} loading="lazy" width="400" height="260" />
                <span class="related-card__cat">{r.category}</span>
              </div>
              <div class="related-card__body">
                <h3>{r.title}</h3>
                <p>{r.location} · {r.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )}

  <div class="section container">
    <CTABox title="Projenizi Birlikte Tasarlayalım" />
  </div>
</BaseLayout>

<style>
/* Hero */
.proje-hero {
  position:relative; margin-top:-110px;
  padding-block:calc(var(--s-20) + 110px) calc(var(--s-16) + 60px);
  color:var(--color-white); overflow:hidden;
}
.proje-hero__bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center;
  z-index:0;
}
.proje-hero__overlay {
  position:absolute; inset:0;
  background:linear-gradient(135deg, rgba(0,21,48,0.88) 0%, rgba(27,43,58,0.75) 100%);
  z-index:1;
}
.proje-hero__inner { position:relative; z-index:2; max-width:720px; }
.proje-hero__cat {
  display:inline-block; background:var(--color-highlight); color:white;
  font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em;
  padding:.3rem .9rem; border-radius:999px; margin-bottom:var(--s-4);
}
.proje-hero h1 { color:white; font-size:var(--text-5xl); margin-bottom:var(--s-4); line-height:1.1; }
.proje-hero__meta { display:flex; gap:var(--s-5); flex-wrap:wrap; color:rgba(255,255,255,.7); font-size:var(--text-sm); }
.proje-hero__meta span { display:inline-flex; align-items:center; gap:var(--s-1); }
.proje-hero__wave { position:absolute; bottom:0; left:0; right:0; height:60px; z-index:3; line-height:0; }
.proje-hero__wave svg { width:100%; height:100%; }

/* Metrikler */
.section--metrics { background:var(--color-primary); padding-block:var(--s-10); }
.metrics-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:var(--s-6); }
.metric-card { text-align:center; padding:var(--s-5); }
.metric-card__val { display:block; font-size:var(--text-4xl); font-weight:800; color:var(--color-highlight); line-height:1; margin-bottom:var(--s-2); }
.metric-card__lbl { font-size:var(--text-sm); color:rgba(255,255,255,.65); text-transform:uppercase; letter-spacing:.05em; }

/* İçerik grid */
.proje-content-grid { display:grid; grid-template-columns:1fr 340px; gap:var(--s-12); align-items:start; }
.proje-main { display:flex; flex-direction:column; gap:var(--s-10); }
.proje-block h2 { font-size:var(--text-2xl); color:var(--color-primary); margin-bottom:var(--s-4); padding-bottom:var(--s-3); border-bottom:2px solid var(--color-highlight); display:inline-block; }
.proje-block p { color:var(--color-text-muted); line-height:1.75; font-size:var(--text-base); }
.proje-result { background:rgba(200,135,58,.08); border-left:4px solid var(--color-highlight); padding:var(--s-4) var(--s-5); border-radius:0 var(--r-lg) var(--r-lg) 0; font-weight:500; color:var(--color-text) !important; }

/* Galeri */
.proje-gallery { display:grid; grid-template-columns:repeat(2,1fr); gap:var(--s-4); }
.gallery-item { margin:0; border-radius:var(--r-lg); overflow:hidden; aspect-ratio:3/2; }
.gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform var(--t-slow); }
.gallery-item:hover img { transform:scale(1.04); }

/* Sidebar */
.proje-sidebar { position:sticky; top:calc(var(--s-16) + var(--s-4)); display:flex; flex-direction:column; gap:var(--s-6); }
.sidebar-card { background:var(--color-white); border:1px solid var(--color-border); border-radius:var(--r-xl); padding:var(--s-6); }
.sidebar-card h3 { font-size:var(--text-lg); color:var(--color-primary); margin-bottom:var(--s-5); }
.sidebar-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:var(--s-3); }
.sidebar-list li { display:flex; flex-direction:column; gap:var(--s-1); padding-bottom:var(--s-3); border-bottom:1px solid var(--color-border); }
.sidebar-list li:last-child { border-bottom:none; padding-bottom:0; }
.sidebar-list__lbl { font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--color-text-muted); }
.sidebar-list span:not(.sidebar-list__lbl) { font-size:var(--text-sm); color:var(--color-text); font-weight:500; }
.sidebar-cta { background:var(--color-primary); border-radius:var(--r-xl); padding:var(--s-6); }
.sidebar-cta p { color:rgba(255,255,255,.8); font-size:var(--text-sm); margin-bottom:var(--s-4); }

/* İlgili projeler */
.related-section { background:var(--color-bg); }
.related-title { font-size:var(--text-3xl); color:var(--color-primary); margin-bottom:var(--s-8); }
.related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-6); }
.related-card { text-decoration:none; color:inherit; background:var(--color-white); border-radius:var(--r-xl); overflow:hidden; border:1px solid var(--color-border); transition:transform var(--t-base), box-shadow var(--t-base); display:block; }
.related-card:hover { transform:translateY(-4px); box-shadow:var(--shadow-lg); }
.related-card__img { position:relative; aspect-ratio:3/2; overflow:hidden; }
.related-card__img img { width:100%; height:100%; object-fit:cover; transition:transform var(--t-slow); }
.related-card:hover .related-card__img img { transform:scale(1.04); }
.related-card__cat { position:absolute; top:var(--s-3); left:var(--s-3); background:var(--color-highlight); color:white; font-size:var(--text-xs); font-weight:600; padding:.2rem .7rem; border-radius:999px; }
.related-card__body { padding:var(--s-4); }
.related-card__body h3 { font-size:var(--text-base); font-weight:700; color:var(--color-primary); margin-bottom:var(--s-1); }
.related-card__body p { font-size:var(--text-xs); color:var(--color-text-muted); }

/* Responsive */
@media (max-width:1024px) { .proje-content-grid { grid-template-columns:1fr; } .proje-sidebar { position:static; } }
@media (max-width:768px) { .metrics-grid { grid-template-columns:repeat(2,1fr); } .proje-gallery { grid-template-columns:1fr; } .related-grid { grid-template-columns:1fr; } }
@media (max-width:480px) { .proje-hero h1 { font-size:var(--text-3xl); } }
</style>
```

---

## İŞ 5 — BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Build hatasız tamamlanmalı. Hata varsa düzelt, tekrar build al.

```bash
git add src/data/projeler.ts src/pages/projelerimiz/ src/pages/index.astro
git commit -m "feat: projeler detay sayfası, logo bandı gerçek PNG, link-kart sistemi"
git push origin main
```

Vercel otomatik deploy alır (~2 dakika).

---

## DOĞRULAMA LİSTESİ

Build sonrası kontrol et:
- [ ] Ana sayfa logo bandında gerçek PNG logolar görünüyor
- [ ] Logo hover'da renkli geliyor, normalde gri/soluk
- [ ] `/projelerimiz/` sayfasında kartlar tıklanabilir, ok ikonu hover'da çıkıyor
- [ ] `/projelerimiz/basaksehir-karma-yapi/` sayfası açılıyor
- [ ] Detay sayfasında: hero görseli, metrikler bandı, içerik, sidebar, ilgili projeler bölümleri var
- [ ] Tüm 6 projenin detay sayfası `/projelerimiz/[slug]/` ile açılıyor
- [ ] Mobilde düzgün görünüyor (sidebar alta iniyor)
