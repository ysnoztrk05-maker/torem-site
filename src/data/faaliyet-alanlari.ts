/**
 * Torem Zemin — Faaliyet Alanları Veri Katmanı
 * 8 Kategori · 45 Teknik
 */

const u = (id: string, w = 800, h = 500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const ph = [
  '1504307651254-35680f356dfd','1541888946425-d81bb19240f5',
  '1486325212027-8081e485255e','1580674684081-7617fbf3d745',
  '1558618666-fcd25c85cd64','1590736704728-f4730bb30770',
  '1581094271901-8022df4466f9','1513467535987-fd81bc7d62f8',
  '1477959858617-67f85cf4f1df',
];

// ─── Arayüzler ───────────────────────────────────────────────────────────────
export interface Kategori {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Teknik {
  slug: string;
  kategoriSlug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  image: string;
  heroImage: string;
  content: string;
  faq: { q: string; a: string }[];
}

// ─── 8 Kategori ──────────────────────────────────────────────────────────────
export const kategoriler: Kategori[] = [
  {
    slug: 'kazikli-temeller',
    title: 'Kazıklı Temeller',
    description: 'Fore kazık, mini kazık, CFA kazık ve çakma kazık ile derin temel çözümleri.',
    image: '/images/kazikli-temeller.jpg',
    icon: 'M6 2v20M12 2v20M18 2v20M4 8h16',
  },
  {
    slug: 'iksa-sistemleri',
    title: 'İksa Sistemleri',
    description: 'Ankrajlı fore kazık, diyafram duvar, palplanş ve Berlin duvarı iksa çözümleri.',
    image: '/images/iksa-sistemleri.jpg',
    icon: 'M3 21V7h18v14M7 7V3M17 7V3M3 14h18',
  },
  {
    slug: 'zemin-iyilestirme',
    title: 'Zemin İyileştirme',
    description: 'Jet grout, derin karıştırma, taş kolon ve vibro kompaksiyon ile zayıf zeminlerin güçlendirilmesi.',
    image: '/images/zemin-iyilestirme.jpg',
    icon: 'M12 2v8l4 4-4 4v6M8 10h8',
  },
  {
    slug: 'destekleme-ankraj',
    title: 'Destekleme & Ankraj',
    description: 'Öngermeli ankraj, kalıcı ankraj, kaya ankrajı ve zemin çivisi uygulamaları.',
    image: '/images/ankraj.jpg',
    icon: 'M12 2l-2 6h4l-2 6M8 16h8M12 16v6M9 22h6',
  },
  {
    slug: 'gecirimsizlik-perdeleri',
    title: 'Geçirimsizlik Perdeleri',
    description: 'Jet grout perdesi, secant perde, slurry perde ve enjeksiyon perdesi ile yeraltı suyu kontrolü.',
    image: '/images/puskurtme-beton.jpg',
    icon: 'M3 6h18v12H3zM3 12h18M9 6v12M15 6v12',
  },
  {
    slug: 'sev-stabilitesi',
    title: 'Şev Stabilitesi',
    description: 'Heyelan önleme, kaya düşmesi bariyeri, istinat duvarı ve çelik hasır ağ sistemleri.',
    image: '/images/zemin-iyilestirme2.jpg',
    icon: 'M2 22l10-16 10 16H2zM7 14h10',
  },
  {
    slug: 'geoteknik-test-izleme',
    title: 'Geoteknik Test & İzleme',
    description: 'Statik yükleme, dinamik PDA, PIT testi, inklinometre ve aletsel gözlem sistemleri.',
    image: '/images/geoteknik-test.jpg',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2',
  },
  {
    slug: 'geoteknik-proje',
    title: 'Geoteknik Proje',
    description: 'Zemin etüdü, projelendirme, derin kazı projesi, saha denetimi ve teknik danışmanlık.',
    image: '/images/saha-muhendis.jpg',
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M10 13h4M10 17h4',
  },
];

// ─── 45 Teknik ───────────────────────────────────────────────────────────────
let _i = 0;
const img = () => { const id = ph[_i % ph.length]; _i++; return id; };

export const teknikler: Teknik[] = [

  // ── 1. KAZIKLI TEMELLER ──────────────────────────────────────────────────
  {
    slug:'fore-kazik', kategoriSlug:'kazikli-temeller',
    title:'Fore Kazık İmalatı', shortTitle:'Fore Kazık',
    excerpt:'Büyük çaplı (400–1500 mm) yerinde döküm betonarme kazık. Zayıf zeminlerde yüksek taşıma kapasiteli derin temel çözümü. 2026 fiyatları, çeşitleri ve yapım aşamaları',
    image:'/images/fore-kazik/fore-kazik-hero.webp', heroImage:'/images/fore-kazik/fore-kazik-hero.webp',
    content:`<nav class="toc" aria-label="İçindekiler">
<h2 class="toc__title">İçindekiler</h2>
<ol class="toc__list">
<li><a href="#fore-kazik-nedir">Fore Kazık Nedir?</a></li>
<li><a href="#fore-kazik-ne-zaman-kullanilir">Ne Zaman Kullanılır?</a></li>
<li><a href="#fore-kazik-cesitleri-ve-karsilastirma">Çeşitleri ve Karşılaştırma</a></li>
<li><a href="#fore-kazik-nasil-yapilir-adim-adim-yapim-asamalari">Nasıl Yapılır? Adım Adım</a></li>
<li><a href="#fore-kazik-fiyatlari-2026">Fiyatları 2026</a></li>
<li><a href="#fore-kazik-maliyet-hesaplama">Maliyet Hesaplama</a></li>
<li><a href="#fore-kazik-deprem-dayanikliligi-ve-tbdy-2018">Deprem Dayanıklılığı</a></li>
<li><a href="#ozel-kosullarda-fore-kazik-uygulamasi">Özel Koşullarda Uygulama</a></li>
<li><a href="#zemin-etudu-ve-fore-kazik-i-liskisi">Zemin Etüdü İlişkisi</a></li>
<li><a href="#fore-kazik-vs-alternatifler">Alternatiflerle Karşılaştırma</a></li>
<li><a href="#sik-sorulan-sorular-sss">Sık Sorulan Sorular</a></li>
</ol>
</nav>

<h2 id="fore-kazik-nedir">Fore Kazık Nedir?</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık (bored pile), zemin içerisine silindirik bir kuyu açılarak, donatı kafesi indirildikten sonra yerinde beton dökülerek oluşturulan derin temel elemanıdır. 400 mm ile 1500 mm arasında çaplarda ve 5 ila 60 metre derinliklerde uygulanarak yapı yüklerini sağlam zemin tabakalarına aktarır.</div>
<figure><img src="/images/fore-kazik/fore-kazik-hero.webp" alt="Fore kazık delgi makinesi şantiye çalışması — altın saat ışığında rotatif delgi operasyonu" loading="eager" fetchpriority="high" decoding="async" width="1200" height="675" /><figcaption>Fore kazık imalatı — rotatif delgi makinesi ile zemine giriş anı, donatı kafesleri sahada hazır</figcaption></figure>
<h3>Tanım ve Temel Kavramlar</h3>
<p>Fore kazık, İngilizce karşılığıyla "bored pile" veya "drilled shaft" olarak da bilinen, yerinde dökme betonarme derin temel sistemidir. Yüzeydeki zayıf veya taşıma kapasitesi yetersiz zeminlerde, yapı yüklerini derinlerdeki sağlam formasyonlara (sıkı kum, sert kil, kaya tabakası) güvenle aktarmak amacıyla kullanılır. TS EN 1536 standardına göre fore kazık, "zemin içerisinde açılan bir kuyunun betonarme ile doldurulmasıyla oluşturulan derin temel elemanı" şeklinde tanımlanmaktadır.</p>
<div class="saha-notu">
<strong>📋 Mevzuat Notu:</strong> TS EN 1536 standardına göre fore kazık minimum çapı 300 mm olarak tanımlanır. Sahada en yaygın çaplar 600–1500 mm aralığındadır. Standart dışı çaplarda üretim yapılması halinde özel kalite kontrol prosedürü uygulanmalıdır.
</div>
<p>Bir fore kazık, çalışma prensibi bakımından iki temel mekanizma üzerinden yük aktarır:</p>
<ul>
<li><strong>Çevre Sürtünmesi (Skin Friction / Shaft Resistance):</strong> Kazık gövdesinin dış yüzeyiyle çevreleyen zemin arasındaki aderans kuvveti. Özellikle kohezyonlu (killi) zeminlerde ve uzun kazıklarda baskın taşıma mekanizmasıdır. Kazık boyunca dağılmış sürtünme kuvvetleri, toplam taşıma kapasitesinin %40 ile %80'ini oluşturabilir.</li>
<li><strong>Uç Direnci (End Bearing / Base Resistance):</strong> Kazığın alt ucunun oturduğu sert zemin veya kaya tabakasına uyguladığı doğrudan basınç kuvveti. Uç direnci, özellikle kazık ucunun kaya formasyonuna soketlendiği (embedded in rock) durumlarda kritik taşıma bileşenidir.</li>
</ul>
<h3>Tarihçe ve Gelişim</h3>
<p>Fore kazık uygulamasının kökleri 19. yüzyılın sonlarına uzanır. İlk mekanize fore kazık uygulamaları 1890'larda ABD'de yapılmıştır. Ancak modern anlamda rotatif delgi teknolojisinin gelişmesi 1950'li yıllara denk gelir. Avrupa'da, özellikle Almanya ve İtalya, fore kazık teknolojisinin öncü ülkeleri olmuştur. Bauer, Soilmec ve Casagrande gibi firmalar rotatif delgi makinelerini geliştirerek teknolojiyi bugünkü seviyeye taşımıştır.</p>
<p>Türkiye'de fore kazık uygulaması 1970'li yıllardan itibaren büyük altyapı projelerinde kullanılmaya başlanmıştır. Boğaz köprülerinin yaklaşım viyadükleri, metro hatları ve ardından gelen gökdelen projeleri, fore kazık teknolojisinin Türkiye'de yaygınlaşmasını sağlamıştır. Günümüzde Türkiye, yıllık yüz binlerce metre fore kazık imalatının yapıldığı, bölgenin en aktif pazarlarından biridir.</p>
<div class="stat-row">
  <div class="stat-card"><span class="stat-number">Ø400–1500</span><span class="stat-label">mm çap aralığı</span></div>
  <div class="stat-card"><span class="stat-number">5–60</span><span class="stat-label">metre derinlik</span></div>
  <div class="stat-card"><span class="stat-number">500–15.000</span><span class="stat-label">kN taşıma kapasitesi</span></div>
  <div class="stat-card"><span class="stat-number">C30–C40</span><span class="stat-label">beton sınıfı</span></div>
</div>
<h3>Çap Aralıkları ve Derinlik Kapasitesi</h3>
<p>Fore kazıklar, proje gereksinimlerine bağlı olarak geniş bir çap ve derinlik yelpazesinde üretilebilir:</p>
<div class="table-wrapper"><table>
<thead>
<tr><th>Parametre</th><th>Aralık</th><th>Tipik Kullanım</th></tr>
</thead>
<tbody>
<tr><td><strong>Minimum çap</strong></td><td>400 mm (Ø40 cm)</td><td>Hafif yapılar, güçlendirme projeleri</td></tr>
<tr><td><strong>Standart çaplar</strong></td><td>600–1000 mm (Ø60–100 cm)</td><td>Konut, ticari bina, köprü ayakları</td></tr>
<tr><td><strong>Büyük çap</strong></td><td>1200–1500 mm (Ø120–150 cm)</td><td>Gökdelenler, viyadük, baraj</td></tr>
<tr><td><strong>Mega çap</strong></td><td>1500–3000 mm (Ø150–300 cm)</td><td>Özel projeler, baretten kazıklar</td></tr>
<tr><td><strong>Minimum derinlik</strong></td><td>5 metre</td><td>Sığ kaya, sert zemin koşulları</td></tr>
<tr><td><strong>Tipik derinlik</strong></td><td>15–35 metre</td><td>Genel yapı projeleri</td></tr>
<tr><td><strong>Maksimum derinlik</strong></td><td>60+ metre</td><td>Derin alüvyon, deniz dibi uygulamaları</td></tr>
</tbody>
</table></div>
<h3>Fore Kazık Sistemi Nasıl Çalışır?</h3>
<p>Fore kazık sistemi, temelde şu prensiple çalışır: Üst yapıdan gelen düşey yükler (binalar, köprüler) ve yatay yükler (deprem, rüzgar, toprak itkisi), kazık gövdesi boyunca zemine aktarılır. Kazık, üst yapı ile derin zemin katmanları arasında bir "köprü" görevi görür.</p>
<p>Bir fore kazığın taşıma kapasitesi, Eurocode 7 (EN 1997-1) ve TS EN 1536 standartlarına göre şu formülle ifade edilir:</p>
<p><strong>Q_toplam = Q_sürtünme + Q_uç</strong></p>
<p>Burada Q_sürtünme, kazık çevresindeki sürtünme direncinin toplamı; Q_uç ise kazık ucundaki taşıma kapasitesidir.</p>
<p>Geleneksel çakma kazıklardan farklı olarak fore kazıklarda zemin yerinden çıkarılır (displacement yok), bu nedenle çevre yapılara titreşim etkisi minimumdur. Bu nedenle fore kazıklar, kentsel alanlarda ve mevcut yapılara yakın uygulamalarda standart çözüm olarak tercih edilir.</p>
<figure><img src="/images/fore-kazik/fore-kazik-calismaprensibi.webp" alt="Fore kazık çalışma prensibi — 3D kesit görünümünde çevre sürtünmesi ve uç direnci yük aktarım mekanizması" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Fore kazık yük aktarım mekanizması — kırmızı oklar yapı yükü, turuncu oklar çevre sürtünmesi, mavi oklar uç direnci</figcaption></figure>
<div class="pros-cons">
  <div class="pros"><h4>Avantajları</h4><ul>
    <li>Çok yüksek taşıma kapasitesi (500–30.000+ kN)</li>
    <li>Düşük titreşim — kentsel alanlarda güvenli</li>
    <li>Geniş çap ve derinlik esnekliği (Ø400–3000 mm, 60+ m)</li>
    <li>Kaya soketi ile uç direnci artırılabilir</li>
    <li>Delgi sırasında zemin kontrolü yapılabilir</li>
    <li>Depreme dayanıklı sünek davranış</li>
  </ul></div>
  <div class="cons"><h4>Dezavantajları</h4><ul>
    <li>Çakma kazığa göre daha yüksek maliyet</li>
    <li>İmalat hızı düşük (günde 3–5 kazık)</li>
    <li>Büyük ve ağır ekipman gerektirir (60–120 ton)</li>
    <li>Bentonit veya kılıf kullanımı ek maliyet oluşturur</li>
    <li>Beton kalite kontrolü kritik — kusurlu betonlama riski</li>
  </ul></div>
</div>
<p>Torem Zemin Mühendislik olarak 20 yılı aşan tecrübemizle, her projede zemin koşullarına özel fore kazık çözümleri sunuyoruz. Projeniz için en uygun çap, derinlik ve imalat yöntemini belirlemek üzere <strong><a href="#iletisim">ücretsiz keşif randevusu</a></strong> alabilirsiniz.</p>
<div class="cta-box">
<strong>Projeniz İçin Ücretsiz Keşif Raporu Alın</strong>
<p>Uzman mühendislerimiz sahanızı inceleyerek en uygun fore kazık çözümünü belirlesin.</p>
<a href="tel:+905316594636" class="cta-btn">Hemen Arayın: 0531 659 46 36</a>
</div>

<figure class="svg-diagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 900">
  <defs>
    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect width="8" height="8" fill="#A0896B"/>
      <circle cx="4" cy="4" r="1.2" fill="#7A6B50"/>
    </pattern>
    <pattern id="clay" width="10" height="6" patternUnits="userSpaceOnUse">
      <rect width="10" height="6" fill="#8B7355"/>
      <line x1="0" y1="3" x2="10" y2="3" stroke="#6B5640" stroke-width="0.8"/>
    </pattern>
    <pattern id="sand" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#C4A95A"/>
      <circle cx="1" cy="1" r="0.6" fill="#A08940"/>
      <circle cx="4" cy="4" r="0.6" fill="#A08940"/>
      <circle cx="2" cy="5" r="0.4" fill="#A08940"/>
      <circle cx="5" cy="2" r="0.4" fill="#A08940"/>
    </pattern>
    <pattern id="gravel" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="#9A8A6A"/>
      <circle cx="3" cy="3" r="2" fill="#7A6A4A" stroke="#6A5A3A" stroke-width="0.5"/>
      <circle cx="9" cy="8" r="2.5" fill="#8A7A5A" stroke="#6A5A3A" stroke-width="0.5"/>
      <circle cx="6" cy="11" r="1.5" fill="#7A6A4A" stroke="#6A5A3A" stroke-width="0.5"/>
    </pattern>
    <pattern id="rock" width="14" height="10" patternUnits="userSpaceOnUse">
      <rect width="14" height="10" fill="#6B6B6B"/>
      <line x1="0" y1="0" x2="7" y2="10" stroke="#555" stroke-width="0.7"/>
      <line x1="7" y1="0" x2="14" y2="10" stroke="#555" stroke-width="0.7"/>
      <line x1="0" y1="5" x2="14" y2="5" stroke="#555" stroke-width="0.5"/>
    </pattern>
  </defs>

  <!-- Arka plan -->
  <rect width="700" height="900" fill="#F5F2ED"/>

  <!-- Başlık -->
  <rect x="0" y="0" width="700" height="70" fill="#1B2B3A"/>
  <text x="350" y="28" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="22" font-weight="bold">Fore Kazık Anatomisi</text>
  <text x="350" y="52" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="14">Dikey Kesit Diyagramı — Ø80cm / 20m Derinlik</text>

  <!-- Zemin yüzeyi çizgisi -->
  <line x1="80" y1="150" x2="620" y2="150" stroke="#1B2B3A" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="635" y="155" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">± 0.00</text>

  <!-- Zemin Katmanları -->
  <!-- Dolgu 2m (150-230) -->
  <rect x="80" y="150" width="220" height="80" fill="url(#dots)"/>
  <rect x="400" y="150" width="220" height="80" fill="url(#dots)"/>
  <rect x="80" y="150" width="220" height="80" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>
  <rect x="400" y="150" width="220" height="80" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>

  <!-- Kil 5m (230-430) -->
  <rect x="80" y="230" width="220" height="200" fill="url(#clay)"/>
  <rect x="400" y="230" width="220" height="200" fill="url(#clay)"/>
  <rect x="80" y="230" width="220" height="200" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>
  <rect x="400" y="230" width="220" height="200" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>

  <!-- Kum 8m (430-750) -->
  <rect x="80" y="430" width="220" height="320" fill="url(#sand)"/>
  <rect x="400" y="430" width="220" height="320" fill="url(#sand)"/>
  <rect x="80" y="430" width="220" height="320" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>
  <rect x="400" y="430" width="220" height="320" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>

  <!-- Çakıl 3m (750-870) -->
  <rect x="80" y="750" width="220" height="50" fill="url(#gravel)"/>
  <rect x="400" y="750" width="220" height="50" fill="url(#gravel)"/>

  <!-- Kaya tabakası (870-900) -->
  <rect x="80" y="800" width="540" height="60" fill="url(#rock)"/>
  <rect x="80" y="800" width="540" height="60" fill="none" stroke="#1B2B3A" stroke-width="0.5"/>

  <!-- Derinlik ölçeği (sol) -->
  <line x1="55" y1="150" x2="55" y2="800" stroke="#1B2B3A" stroke-width="1.5"/>
  <!-- Çentikler -->
  <line x1="50" y1="150" x2="60" y2="150" stroke="#1B2B3A" stroke-width="1.5"/>
  <line x1="50" y1="230" x2="60" y2="230" stroke="#1B2B3A" stroke-width="1.5"/>
  <line x1="50" y1="430" x2="60" y2="430" stroke="#1B2B3A" stroke-width="1.5"/>
  <line x1="50" y1="750" x2="60" y2="750" stroke="#1B2B3A" stroke-width="1.5"/>
  <line x1="50" y1="800" x2="60" y2="800" stroke="#1B2B3A" stroke-width="1.5"/>
  <!-- Derinlik yazıları -->
  <text x="45" y="154" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="11">0m</text>
  <text x="45" y="234" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="11">2m</text>
  <text x="45" y="434" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="11">7m</text>
  <text x="45" y="754" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="11">15m</text>
  <text x="45" y="804" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="11">18m</text>

  <!-- Zemin katman etiketleri (sağ taraf) -->
  <text x="640" y="195" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Dolgu</text>
  <text x="640" y="210" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">(2m)</text>

  <text x="640" y="335" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Kil</text>
  <text x="640" y="350" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">(5m)</text>

  <text x="640" y="595" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Kum</text>
  <text x="640" y="610" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">(8m)</text>

  <text x="640" y="778" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Çakıl</text>
  <text x="640" y="793" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">(3m)</text>

  <text x="640" y="835" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Kaya</text>

  <!-- FORE KAZIK — Ana gövde -->
  <!-- Kazık başlığı (üstte, zemin üstü) -->
  <rect x="310" y="115" width="80" height="35" fill="#1B2B3A" stroke="#C8873A" stroke-width="2" rx="3"/>
  <text x="350" y="137" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="9" font-weight="bold">KAZIK BAŞLIĞI</text>

  <!-- Muhafaza borusu (üst kısım, dolgu ve kil içinde) -->
  <rect x="315" y="150" width="70" height="200" fill="none" stroke="#C8873A" stroke-width="3"/>
  <!-- Boru iç çizgisi -->
  <rect x="318" y="150" width="64" height="200" fill="none" stroke="#C8873A" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Beton gövde -->
  <rect x="320" y="150" width="60" height="650" fill="#B0B0B0" stroke="#1B2B3A" stroke-width="1.5"/>
  <!-- Beton dokusu -->
  <circle cx="335" cy="200" r="1.5" fill="#999"/>
  <circle cx="355" cy="250" r="1" fill="#999"/>
  <circle cx="340" cy="350" r="1.5" fill="#999"/>
  <circle cx="365" cy="400" r="1" fill="#999"/>
  <circle cx="330" cy="500" r="1.5" fill="#999"/>
  <circle cx="360" cy="550" r="1" fill="#999"/>
  <circle cx="345" cy="650" r="1.5" fill="#999"/>
  <circle cx="335" cy="720" r="1" fill="#999"/>

  <!-- Donatı kafesi (çelik çubuklar) -->
  <!-- Boyuna donatılar -->
  <line x1="328" y1="160" x2="328" y2="790" stroke="#C8873A" stroke-width="2"/>
  <line x1="340" y1="160" x2="340" y2="790" stroke="#C8873A" stroke-width="2"/>
  <line x1="352" y1="160" x2="352" y2="790" stroke="#C8873A" stroke-width="2"/>
  <line x1="364" y1="160" x2="364" y2="790" stroke="#C8873A" stroke-width="2"/>
  <!-- Etriyeler (yatay) -->
  <line x1="325" y1="180" x2="375" y2="180" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="220" x2="375" y2="220" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="260" x2="375" y2="260" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="310" x2="375" y2="310" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="360" x2="375" y2="360" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="420" x2="375" y2="420" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="480" x2="375" y2="480" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="540" x2="375" y2="540" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="600" x2="375" y2="600" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="660" x2="375" y2="660" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="720" x2="375" y2="720" stroke="#C8873A" stroke-width="1"/>
  <line x1="325" y1="770" x2="375" y2="770" stroke="#C8873A" stroke-width="1"/>

  <!-- Kazık ucu -->
  <polygon points="320,800 380,800 355,830" fill="#1B2B3A" stroke="#C8873A" stroke-width="1.5"/>

  <!-- ETİKET OKLARI — Sol taraf -->
  <!-- Kazık başlığı etiketi -->
  <line x1="220" y1="132" x2="308" y2="132" stroke="#1B2B3A" stroke-width="1" marker-end="url(#arrowhead)"/>
  <text x="215" y="130" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Kazık Başlığı</text>

  <!-- Muhafaza borusu etiketi -->
  <line x1="220" y1="250" x2="313" y2="250" stroke="#1B2B3A" stroke-width="1" marker-end="url(#arrowhead)"/>
  <text x="215" y="245" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Muhafaza Borusu</text>
  <text x="215" y="260" text-anchor="end" fill="#2E5077" font-family="Arial, sans-serif" font-size="10">(Çelik kılıf)</text>

  <!-- Donatı kafesi etiketi -->
  <line x1="220" y1="450" x2="325" y2="450" stroke="#1B2B3A" stroke-width="1" marker-end="url(#arrowhead)"/>
  <text x="215" y="445" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Donatı Kafesi</text>
  <text x="215" y="460" text-anchor="end" fill="#2E5077" font-family="Arial, sans-serif" font-size="10">(Çelik çubuklar)</text>

  <!-- Beton gövde etiketi -->
  <line x1="220" y1="600" x2="318" y2="600" stroke="#1B2B3A" stroke-width="1" marker-end="url(#arrowhead)"/>
  <text x="215" y="595" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Beton Gövde</text>
  <text x="215" y="610" text-anchor="end" fill="#2E5077" font-family="Arial, sans-serif" font-size="10">(C30 beton)</text>

  <!-- Kazık ucu etiketi -->
  <line x1="220" y1="815" x2="318" y2="815" stroke="#1B2B3A" stroke-width="1" marker-end="url(#arrowhead)"/>
  <text x="215" y="812" text-anchor="end" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Kazık Ucu</text>

  <!-- Ok tanımı -->
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#1B2B3A"/>
    </marker>
    <marker id="arrowC" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#C8873A"/>
    </marker>
    <marker id="arrowCrev" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
      <polygon points="8 0, 0 3, 8 6" fill="#C8873A"/>
    </marker>
  </defs>

  <!-- TAŞIMA MEKANİZMASI — Sürtünme direnci (sağ taraftaki oklar) -->
  <!-- Sürtünme okları (yanlarda) -->
  <line x1="395" y1="250" x2="395" y2="220" stroke="#C8873A" stroke-width="2" marker-end="url(#arrowC)"/>
  <line x1="395" y1="350" x2="395" y2="320" stroke="#C8873A" stroke-width="2" marker-end="url(#arrowC)"/>
  <line x1="395" y1="450" x2="395" y2="420" stroke="#C8873A" stroke-width="2" marker-end="url(#arrowC)"/>
  <line x1="395" y1="550" x2="395" y2="520" stroke="#C8873A" stroke-width="2" marker-end="url(#arrowC)"/>
  <line x1="395" y1="650" x2="395" y2="620" stroke="#C8873A" stroke-width="2" marker-end="url(#arrowC)"/>
  <line x1="395" y1="750" x2="395" y2="720" stroke="#C8873A" stroke-width="2" marker-end="url(#arrowC)"/>

  <!-- Sürtünme direnci etiketi -->
  <text x="415" y="480" fill="#C8873A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Sürtünme</text>
  <text x="415" y="496" fill="#C8873A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Direnci</text>
  <text x="415" y="512" fill="#C8873A" font-family="Arial, sans-serif" font-size="11">(Çevre sürtünmesi)</text>

  <!-- Uç direnci (altta ok) -->
  <line x1="355" y1="860" x2="355" y2="840" stroke="#C8873A" stroke-width="3" marker-end="url(#arrowC)"/>
  <text x="355" y="878" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Uç Direnci</text>
  <text x="355" y="894" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="11">(Taban taşıma)</text>

  <!-- Boyut bilgileri — Çap -->
  <line x1="320" y1="98" x2="380" y2="98" stroke="#2E5077" stroke-width="1"/>
  <line x1="320" y1="93" x2="320" y2="103" stroke="#2E5077" stroke-width="1"/>
  <line x1="380" y1="93" x2="380" y2="103" stroke="#2E5077" stroke-width="1"/>
  <text x="350" y="93" text-anchor="middle" fill="#2E5077" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Ø80 cm</text>

  <!-- Boyut bilgileri — Derinlik (sağ) -->
  <line x1="500" y1="150" x2="500" y2="800" stroke="#2E5077" stroke-width="1"/>
  <line x1="495" y1="150" x2="505" y2="150" stroke="#2E5077" stroke-width="1"/>
  <line x1="495" y1="800" x2="505" y2="800" stroke="#2E5077" stroke-width="1"/>
  <text x="510" y="480" fill="#2E5077" font-family="Arial, sans-serif" font-size="13" font-weight="bold" transform="rotate(90,510,480)">20 m Derinlik</text>
</svg><figcaption>Fore Kazık Anatomi Diyagramı</figcaption></figure>
<h2 id="fore-kazik-ne-zaman-kullanilir">Fore Kazık Ne Zaman Kullanılır?</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık; zayıf zeminlerde yüksek yapıların temellendirilmesinde, derin kazılarda iksa perdesi olarak, köprü ve viyadük ayaklarında, metro tünellerinde, endüstriyel tesislerde ve deprem riski yüksek bölgelerde sıvılaşma önlemi amacıyla kullanılır.</div>
<h3>Zayıf Zemin Koşulları</h3>
<p>Üst zemin tabakasının taşıma kapasitesi yetersiz olduğunda — yani gevşek kum, yumuşak kil, organik zemin veya dolgu zemin mevcutsa — yüzeysel temeller (radye, sürekli temel) yapı yüklerini güvenle taşıyamaz. Bu durumda fore kazık, yüzeydeki zayıf tabakaları geçerek derinlerdeki sert zemine veya ana kayaya ulaşır. SPT-N değeri 10'un altında kalan zeminler, genellikle fore kazık uygulaması gerektiren zemin sınıflarıdır.</p>
<h3>Yüksek Katlı ve Ağır Yapılar</h3>
<p>10 kattan yüksek konut projeleri, ofis kuleleri, AVM'ler ve endüstriyel tesisler, genellikle metrekare başına 200 kN'u aşan taban basınçları oluşturur. Bu yükler çoğu yüzeysel temel sistemi için aşırıdır. Fore kazıklar, tekil kazık başına 500 kN ile 15.000 kN arasında taşıma kapasitesi sağlayarak ağır yapıları güvenle temellendirir.</p>
<h3>Kentsel Alan ve Mevcut Yapılara Yakın Uygulamalar</h3>
<p>Şehir merkezlerinde, bitişik nizamdaki yapıların hemen yanında derin kazı yapılması gerektiğinde, fore kazık <a href="/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/">iksa sistemleri</a> en güvenli çözümdür. Çakma kazıkların aksine, fore kazıklarda titreşim oluşmaz; böylece komşu yapılara zarar verme riski ortadan kalkar.</p>
<h3>Köprü, Viyadük ve Altyapı Projeleri</h3>
<p>Otoyol köprü ayakları, demiryolu viyadükleri, havalimanı pistleri ve liman yapılarında fore kazıklar yaygın olarak kullanılır. Bu projelerde kazık çapları genellikle 1000 mm ve üzerindedir ve kazık derinlikleri 30 metreyi aşabilir.</p>
<h3>Metro ve Tünel Projeleri</h3>
<p>Metro istasyonlarının derin kazı gerektiren bölümlerinde, istasyon giriş yapılarında ve tünel portal bölgelerinde fore kazıklı iksa perdeleri uygulanır. İstanbul, Ankara ve İzmir metro hatlarında yüzlerce kilometre fore kazık imalatı gerçekleştirilmiştir.</p>
<h3>Endüstriyel Tesisler ve Özel Yapılar</h3>
<p>Ağır sanayi tesisleri (çimento fabrikaları, demir-çelik tesisleri), rüzgar türbini temelleri, silo ve tank temelleri gibi yoğun noktasal yük aktaran yapılarda fore kazıklar kritik bir rol oynar. Rüzgar türbini temelleri için tek bir kazık grubunun 20.000 kN'un üzerinde devrilme momentine karşı koyması gerekebilir.</p>

<h2 id="fore-kazik-cesitleri-ve-karsilastirma">Fore Kazık Çeşitleri ve Karşılaştırma</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazıklar uygulama yöntemine göre kuru delgi, bentonit çamurlu delgi, kılıflı (casing) delgi, CFA (sürekli helezon) kazık ve baret kazık olarak sınıflandırılır. Her yöntem farklı zemin koşulları ve proje gereksinimleri için optimize edilmiştir.</div>
<div class="saha-notu">
<strong>💡 Pratik İpucu:</strong> CFA (Sürekli Helisel Auger) kazık uygulamasında beton basma hızı ile auger çekme hızı senkron olmalı. Hız uyumsuzluğu boyun oluşumuna (necking) neden olur. Tecrübeli operatör farkı burada ortaya çıkar.
</div>
<div class="card-grid">
  <div class="grid-card">
    <h4>1. Kuru Delgi Fore Kazık</h4>
    <p>Zemin kendi kendini tutabilecek kadar sağlam olduğunda (sert kil, marn, bozunmuş kaya) muhafaza borusu veya stabilizasyon sıvısı kullanmadan doğrudan delgi yapılır. En ekonomik yöntemdir. Yeraltı su seviyesinin delgi derinliğinin altında olması gerekir. Çevre sürtünme direnci en yüksek değerlere bu yöntemle ulaşır çünkü beton doğrudan doğal zemine temas eder.</p>
  </div>
  <div class="grid-card">
    <h4>2. Bentonit Çamurlu (Wet) Delgi</h4>
    <p>Yeraltı su seviyesinin yüksek olduğu ve zeminlerin göçmeye eğilimli olduğu koşullarda, kuyu içerisine bentonit şerbeti (slurry) pompalanarak cidar stabilitesi sağlanır. Bentonit, su ile karıştırılarak hazırlanan tixotropik bir sıvıdır; kuyu duvarında ince bir "kek" tabakası (filter cake) oluşturarak toprak göçmesini önler. Bentonit yoğunluğu genellikle 1,03–1,10 g/cm³ arasında tutulur ve Marsh hunisi akış süresi 32–50 saniye aralığında kontrol edilir.</p>
  </div>
  <div class="grid-card">
    <h4>3. Kılıflı (Casing) Delgi</h4>
    <p>Çok gevşek zeminlerde, yeraltı su basıncının yüksek olduğu alüvyon tabakalarında veya kumlu-çakıllı zeminlerde, çelik muhafaza borusu (casing) kuyu içerisine indirilerek göçme önlenir. Kılıf borusu, vibratör (oscillator) veya rotatör yardımıyla zemine sokulur. Betonlama sırasında kılıf kontrollü olarak çekilir. Bu yöntem en güvenilir sonuçları verir ancak maliyet ve imalat süresi bakımından en pahalı seçenektir.</p>
  </div>
  <div class="grid-card">
    <h4>4. CFA (Continuous Flight Auger) Kazık</h4>
    <p>CFA kazık, kesintisiz helezon (auger) ile delgi yapılırken eş zamanlı olarak beton pompalanan bir sistemdir. Helezon çekilirken beton basıncıyla kuyu doldurulur ve ardından donatı kafesi taze betona dalarak (vibrasyon ile) indirilir. CFA kazıklar özellikle yumuşak kohezyonlu zeminlerde ve kumlu zeminlerde çok hızlı imalat imkanı sunar. Günlük üretim kapasitesi geleneksel fore kazığın 2-3 katıdır.</p>
  </div>
  <div class="grid-card">
    <h4>5. Baret (Barrette) Kazık</h4>
    <p>Dikdörtgen kesitli, genellikle 2,8 m x 0,8 m veya 1,2 m x 0,6 m boyutlarında açılan fore kazıklardır. Hidrolik kama (grab) veya frez (hydrofraise/cutter) ile açılır. Özellikle büyük yükler ve derin yapılar için tercih edilir. Gökdelen projelerinde ve derin metro istasyonlarında yaygındır. Tek bir baret kazık, 30.000 kN\'un üzerinde taşıma kapasitesine ulaşabilir.</p>
  </div>
</div>
<h3>Karşılaştırma Tablosu</h3>
<div class="table-wrapper"><table>
<thead>
<tr><th>Özellik</th><th>Kuru Delgi</th><th>Bentonit Çamurlu</th><th>Kılıflı (Casing)</th><th>CFA Kazık</th><th>Baret Kazık</th></tr>
</thead>
<tbody>
<tr><td><strong>Çap Aralığı</strong></td><td>600–1500 mm</td><td>600–2000 mm</td><td>600–1500 mm</td><td>400–1000 mm</td><td>Dikdörtgen kesit</td></tr>
<tr><td><strong>Maks. Derinlik</strong></td><td>30 m</td><td>60 m</td><td>40 m</td><td>25 m</td><td>80+ m</td></tr>
<tr><td><strong>Uygun Zemin</strong></td><td>Sert kil, kaya</td><td>Her zemin türü</td><td>Gevşek kum, alüvyon</td><td>Yumuşak kil, kum</td><td>Her zemin türü</td></tr>
<tr><td><strong>İmalat Hızı</strong></td><td>Orta</td><td>Yavaş</td><td>Yavaş</td><td>Hızlı</td><td>Yavaş</td></tr>
<tr><td><strong>Maliyet</strong></td><td>Düşük</td><td>Orta</td><td>Yüksek</td><td>Orta-Düşük</td><td>Yüksek</td></tr>
<tr><td><strong>Titreşim</strong></td><td>Çok düşük</td><td>Çok düşük</td><td>Düşük</td><td>Çok düşük</td><td>Düşük</td></tr>
<tr><td><strong>Standart Referans</strong></td><td>TS EN 1536</td><td>TS EN 1536</td><td>TS EN 1536</td><td>TS EN 1536</td><td>TS EN 1538</td></tr>
</tbody>
</table></div>
<figure><img src="/images/fore-kazik/fore-kazik-donati.webp" alt="Fore kazık donatı kafesi — çelik donatı kafesi vinçle kuyuya indiriliyor" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Donatı kafesi vinç yardımıyla fore kazık kuyusuna indiriliyor — spiral etriye detayı</figcaption></figure>

<h2 id="fore-kazik-nasil-yapilir-adim-adim-yapim-asamalari">Fore Kazık Nasıl Yapılır? Adım Adım Yapım Aşamaları</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık imalatı altı temel aşamadan oluşur: çalışma platformu hazırlığı ve aplikasyon, delgi işlemi, muhafaza (cidar koruma), donatı kafesi indirme, tremi borusu ile betonlama ve kazık başlığı imalatı. Her aşama TS EN 1536\'ya uygun kalite kontrolü gerektirir.</div>
<figure><img src="/images/fore-kazik-saha.jpg" alt="Fore kazık şantiyesi — donatı kafesi indirme ve delgi makineleri" loading="lazy" decoding="async" width="860" height="480" /><figcaption>Kentsel şantiyede fore kazık imalatı — donatı kafesi indirme operasyonu</figcaption></figure>
<figure><img src="/images/fore-kazik/fore-kazik-beton.webp" alt="Fore kazık beton dökümü — tremie borusuyla taze beton kazık kuyusuna dökülüyor" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Tremie borusu ile fore kazık kuyusuna beton dökümü — beton pompası ve şantiye ekibi</figcaption></figure>
<div class="saha-notu">
<strong>⚠️ Saha Uyarısı:</strong> Delgi sırasında bentonit seviyesi sürekli kontrol edilmeli. Bentonit seviyesi kuyu ağzının 1,5 m altına düşerse kuyu göçme riski artar. Özellikle gevşek kumlu zeminlerde bu seviye dakikalar içinde düşebilir — pompa sürekli çalışmalı.
</div>
<div class="process-steps">
  <div class="step">
    <div><h4>Çalışma Platformu Hazırlığı ve Aplikasyon</h4>
    <p>Fore kazık imalatına başlamadan önce, delgi makinelerinin güvenle çalışabileceği düzgün ve sağlam bir çalışma platformu oluşturulmalıdır. 80–120 ton ağırlığındaki fore kazık makineleri, zeminden en az 50 kPa taşıma kapasitesi talep eder. Bu nedenle:</p>
    <ul>
    <li>Sahaya 30–50 cm kalınlığında kırma taş (stabilize) serilir ve silindirlenerek sıkıştırılır.</li>
    <li>Platform eğimi %2\'yi geçmemelidir; aksi halde makinenin düşeyliği (vertikality) bozulur.</li>
    <li>Topoğrafik ölçüm ekibi (total station veya GPS-RTK ile) kazık merkezlerini milimetrik hassasiyetle aplikasyon yapar.</li>
    <li>Her kazık noktası renkli boya veya çelik çivi ile işaretlenir, kazık numarası ve çapı belirtilir.</li>
    </ul>
    <div class="expert-tip">Aplikasyon toleransı TS EN 1536\'ya göre ±50 mm\'dir. Bu toleransın aşılması durumunda kazık, statik projede öngörülen yükleri doğru açıyla aktaramaz ve yapısal sorunlara yol açabilir.</div>
    </div>
  </div>
  <div class="step">
    <div><h4>Delgi İşlemi</h4>
    <p>Delgi, fore kazık imalatının en kritik aşamasıdır. Kullanılan ekipman ve yöntem, zemin koşullarına göre belirlenir:</p>
    <ul>
    <li><strong>Rotatif delgi (Rotary drilling):</strong> En yaygın yöntemdir. Bauer BG serisi, Soilmec SR serisi veya Liebherr LB serisi gibi makinelerde Kelly bar (teleskopik çubuk) ucuna takılan burgu (auger), kova (bucket) veya kaya kesici (core barrel/rock auger) ile zemin delinir.</li>
    <li><strong>Ters sirkülasyon (Reverse circulation):</strong> Çok derin ve büyük çaplı kazıklarda, kesilen zemin su ile birlikte yüzeye pompalanır.</li>
    </ul>
    <p>Delgi sırasında dikkat edilmesi gereken parametreler:</p>
    <ul>
    <li><strong>Düşeylik kontrolü:</strong> Kazık eğikliği, kazık boyunun %1\'ini geçmemelidir (örn. 20 m kazıkta maks. 200 mm sapma).</li>
    <li><strong>Delgi çapı:</strong> Proje çapına uygun ekipman seçilmelidir. Delgi çapı, nominal kazık çapından 50–100 mm büyük olabilir.</li>
    <li><strong>Zemin kaydı (drilling log):</strong> Her metre derinlik için karşılaşılan zemin türü, rengi, kıvamı ve su durumu kayıt altına alınır. Bu kayıt, zemin etüdü raporuyla karşılaştırılarak tasarım doğrulaması yapılır.</li>
    </ul>
    <p>Kaya formasyonlarında delgi hızı önemli ölçüde düşer. Tek eksenli basınç dayanımı (UCS) 50 MPa\'yı aşan kayalarda, kaya kesici (DTH hammer veya rock auger) kullanılması gerekebilir. Kaya soketi genellikle 1,5–3 çap derinliğinde uygulanır.</p>
    </div>
  </div>
  <div class="step">
    <div><h4>Cidar Koruma (Muhafaza)</h4>
    <p>Delgi sırasında kuyu cidarının göçmesini önlemek için zemin koşullarına uygun muhafaza yöntemi seçilir:</p>
    <ul>
    <li><strong>Kuru delgi:</strong> Muhafaza gerekmez. Yalnızca yüzey kılıfı (starter casing, ~2 m) kullanılır.</li>
    <li><strong>Bentonit şerbeti:</strong> Kuyu, bentonit çamuru ile dolu tutulur. Bentonit seviyesi, yeraltı su seviyesinden en az 1,5 m yukarıda tutulmalıdır.</li>
    <li><strong>Tam kılıf (full casing):</strong> Çelik muhafaza borusu, oscillator veya rotator ile kuyu boyunca indirilir. En güvenli yöntemdir.</li>
    <li><strong>Kısmi kılıf + bentonit:</strong> Üst tabaka kılıfla, alt tabaka bentonitle desteklenir. Karma yöntem yaygın uygulamalardan biridir.</li>
    </ul>
    </div>
  </div>
  <div class="step">
    <div><h4>Donatı Kafesi İndirme</h4>
    <p>Delgi tamamlandıktan ve kuyu tabanı temizlendikten sonra (kuyu tabanındaki çökelti kalınlığı TS EN 1536\'ya göre uç taşıyıcı kazıklarda maks. 50 mm, sürtünme kazıklarında maks. 150 mm), önceden hazırlanmış donatı kafesi (cage) kuyu içerisine indirilir.</p>
    <p>Donatı kafesinin özellikleri:</p>
    <ul>
    <li><strong>Boyuna donatı:</strong> Genellikle Ø20–Ø32 mm nervürlü çelik (B420C veya B500C sınıfı)</li>
    <li><strong>Etriye (Spiral/helezon):</strong> Ø10–Ø16 mm, 150–250 mm aralıklarla sarılır. Deprem bölgelerinde etriye sıklaştırması (100 mm) zorunludur.</li>
    <li><strong>Mesafe tutucu (Spacer):</strong> Beton örtü kalınlığını (min. 75 mm) sağlamak için her 3 metrede bir tekerlekli veya yıldız tip spacer takılır.</li>
    <li><strong>Kafes birleştirme:</strong> Uzun kazıklarda kafes parçaları sahada bindirmeli ek veya kaynaklı ek ile birleştirilir. Bindirme boyu en az 40 x çubuk çapı kadar olmalıdır.</li>
    </ul>
    <p>Donatı kafesi, vinç yardımıyla yavaşça ve dik olarak kuyu içerisine indirilir. Kafes, kuyu tabanına oturtulmaz; kuyu tabanından 100–150 mm yukarıda tutularak askıya alınır. Bu mesafe, beton örtüsünün alt uçta da sağlanmasını garanti eder.</p>
    </div>
  </div>
  <div class="step">
    <div><h4>Tremi Borusu ile Betonlama</h4>
    <p>Betonlama, fore kazık kalitesini doğrudan belirleyen en hassas aşamadır. Yeraltı suyu olan veya bentonit çamurlu kuyularda, beton mutlaka tremi (tremie) borusu yöntemiyle dökülür:</p>
    <ul>
    <li><strong>Beton sınıfı:</strong> Fore kazıklarda minimum C25/30 (genellikle C30/37) sınıfı beton kullanılır. TBDY 2018\'e göre deprem bölgelerinde minimum C30/37 zorunludur.</li>
    <li><strong>Çökme (Slump):</strong> Tremi ile dökülen betonun çökme değeri 180–220 mm arasında olmalıdır (akıcı kıvam).</li>
    <li><strong>Agrega boyutu:</strong> Maksimum agrega boyutu 20–25 mm ile sınırlandırılır (donatı aralıklarından geçebilmesi için).</li>
    <li><strong>Tremi borusu çapı:</strong> Genellikle 250–300 mm, beton pompa hortumu ile beslenir.</li>
    </ul>
    <div class="expert-tip">Fore kazıklarda minimum beton sınıfı C25/30 olmakla birlikte, deprem bölgelerinde TBDY 2018\'e göre minimum C30/37 zorunludur. Su/çimento oranı 0,50\'nin altında tutulmalıdır.</div>
    <p>Betonlama prosedürü:</p>
    <ol>
    <li>Tremi borusu, kuyu tabanına kadar indirilir (tabandan 150–300 mm yukarıda).</li>
    <li>Tremi borusu üst ucuna tıkaç (plug/ball) konulur; beton tıkacın üstüne dökülür.</li>
    <li>Beton basıncıyla tıkaç aşağı itilir ve beton kuyu tabanından yukarı doğru yükselir.</li>
    <li>Tremi borusunun alt ucu daima beton içinde en az 2–3 metre gömülü kalmalıdır (kontaminasyonu önlemek için).</li>
    <li>Betonlama kesintisiz sürdürülür. Beton yükseldikçe tremi borusu kontrollü olarak çekilir.</li>
    <li>Beton seviyesi, kazık üst kotunun 0,5–1,0 m üzerine kadar dökülür (kontamine üst beton sonradan kırılacaktır).</li>
    </ol>
    <p>Betonlama sırasında her transmikser için beton numunesi alınır (küp kalıba). 7 ve 28 günlük basınç dayanım testleri yapılır.</p>
    </div>
  </div>
  <div class="step">
    <div><h4>Kılıf Çekme ve Kazık Başlığı İmalatı</h4>
    <p>Kılıflı sistemlerde, beton döküldükten sonra çelik muhafaza borusu yavaşça ve kontrollü olarak çekilir. Çekme hızı, betonun kuyu cidarını doldurmasına olanak tanıyacak şekilde ayarlanmalıdır. Ani çekme, boşluk (necking) oluşmasına neden olabilir.</p>
    <p>Beton sertleştikten sonra (genellikle 7 gün), kazık başındaki kontamine beton tabakası (genellikle 0,5–1,0 m) hidrolik kırıcı veya manuel olarak kırılır. Temiz, sağlam betonun ve sağlam donatının ortaya çıkması sağlanır. Bu aşamaya "kazık başı tıraşlama" denir.</p>
    <p>Kazık başı tıraşlandıktan sonra, kazık başlığı (pile cap) imalatı için donatılar bükülür ve temel sistemine bağlanır. Kazık başlığı, birden fazla kazığı birbirine bağlayan ve üst yapı yükünü kazıklara dağıtan betonarme plak elemandır.</p>
    </div>
  </div>
</div>

<figure class="svg-diagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520">
  <defs>
    <marker id="flowArrow" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
      <polygon points="0 0, 10 4, 0 8" fill="#C8873A"/>
    </marker>
  </defs>

  <!-- Arka plan -->
  <rect width="900" height="520" fill="#F5F2ED" rx="8"/>

  <!-- Başlık bandı -->
  <rect x="0" y="0" width="900" height="65" fill="#1B2B3A" rx="0"/>
  <text x="450" y="28" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="22" font-weight="bold">Fore Kazık İmalat Akış Şeması</text>
  <text x="450" y="50" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="13">6 Aşamalı Üretim Süreci</text>

  <!-- === ADIM 1: Zemin Etüdü === -->
  <!-- Numara dairesi -->
  <circle cx="105" cy="130" r="18" fill="#C8873A"/>
  <text x="105" y="136" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">1</text>
  <!-- Kutu -->
  <rect x="45" y="160" width="120" height="55" fill="#2E5077" rx="6"/>
  <text x="105" y="184" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Zemin</text>
  <text x="105" y="202" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Etüdü</text>
  <!-- İkon: büyüteç -->
  <circle cx="105" cy="240" r="10" fill="none" stroke="#C8873A" stroke-width="1.5"/>
  <line x1="112" y1="247" x2="118" y2="253" stroke="#C8873A" stroke-width="1.5"/>
  <!-- Açıklama -->
  <text x="105" y="272" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">Sondaj ve zemin</text>
  <text x="105" y="285" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">analizi yapılır</text>

  <!-- Ok 1→2 -->
  <line x1="167" y1="187" x2="193" y2="187" stroke="#C8873A" stroke-width="2.5" marker-end="url(#flowArrow)"/>

  <!-- === ADIM 2: Delgi === -->
  <circle cx="255" cy="130" r="18" fill="#C8873A"/>
  <text x="255" y="136" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">2</text>
  <rect x="195" y="160" width="120" height="55" fill="#2E5077" rx="6"/>
  <text x="255" y="192" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Delgi</text>
  <!-- İkon: matkap -->
  <line x1="255" y1="230" x2="255" y2="258" stroke="#C8873A" stroke-width="2"/>
  <polygon points="248,230 262,230 255,222" fill="#C8873A"/>
  <!-- Açıklama -->
  <text x="255" y="272" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">Döner delici ile</text>
  <text x="255" y="285" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">kuyu açılır</text>

  <!-- Ok 2→3 -->
  <line x1="317" y1="187" x2="343" y2="187" stroke="#C8873A" stroke-width="2.5" marker-end="url(#flowArrow)"/>

  <!-- === ADIM 3: Muhafaza Borusu === -->
  <circle cx="405" cy="130" r="18" fill="#C8873A"/>
  <text x="405" y="136" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">3</text>
  <rect x="345" y="160" width="120" height="55" fill="#2E5077" rx="6"/>
  <text x="405" y="184" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Muhafaza</text>
  <text x="405" y="202" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Borusu</text>
  <!-- İkon: boru -->
  <rect x="397" y="228" width="16" height="30" fill="none" stroke="#C8873A" stroke-width="1.5" rx="2"/>
  <line x1="400" y1="238" x2="410" y2="238" stroke="#C8873A" stroke-width="0.8"/>
  <line x1="400" y1="248" x2="410" y2="248" stroke="#C8873A" stroke-width="0.8"/>
  <!-- Açıklama -->
  <text x="405" y="272" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">Çelik kılıf zemine</text>
  <text x="405" y="285" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">yerleştirilir</text>

  <!-- Ok 3→4 -->
  <line x1="467" y1="187" x2="493" y2="187" stroke="#C8873A" stroke-width="2.5" marker-end="url(#flowArrow)"/>

  <!-- === ADIM 4: Donatı Montajı === -->
  <circle cx="555" cy="130" r="18" fill="#C8873A"/>
  <text x="555" y="136" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">4</text>
  <rect x="495" y="160" width="120" height="55" fill="#2E5077" rx="6"/>
  <text x="555" y="184" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Donatı</text>
  <text x="555" y="202" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Montajı</text>
  <!-- İkon: kafes -->
  <line x1="543" y1="228" x2="543" y2="258" stroke="#C8873A" stroke-width="1.5"/>
  <line x1="555" y1="228" x2="555" y2="258" stroke="#C8873A" stroke-width="1.5"/>
  <line x1="567" y1="228" x2="567" y2="258" stroke="#C8873A" stroke-width="1.5"/>
  <line x1="540" y1="235" x2="570" y2="235" stroke="#C8873A" stroke-width="1"/>
  <line x1="540" y1="245" x2="570" y2="245" stroke="#C8873A" stroke-width="1"/>
  <line x1="540" y1="255" x2="570" y2="255" stroke="#C8873A" stroke-width="1"/>
  <!-- Açıklama -->
  <text x="555" y="272" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">Çelik kafes kuyuya</text>
  <text x="555" y="285" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">indirilir</text>

  <!-- Ok 4→5 -->
  <line x1="617" y1="187" x2="643" y2="187" stroke="#C8873A" stroke-width="2.5" marker-end="url(#flowArrow)"/>

  <!-- === ADIM 5: Betonlama === -->
  <circle cx="705" cy="130" r="18" fill="#C8873A"/>
  <text x="705" y="136" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">5</text>
  <rect x="645" y="160" width="120" height="55" fill="#2E5077" rx="6"/>
  <text x="705" y="192" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Betonlama</text>
  <!-- İkon: beton dökme -->
  <polygon points="695,228 715,228 710,238 700,238" fill="#C8873A"/>
  <rect x="700" y="238" width="10" height="18" fill="none" stroke="#C8873A" stroke-width="1.5"/>
  <!-- Açıklama -->
  <text x="705" y="272" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">Tremi ile beton</text>
  <text x="705" y="285" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">dökülür</text>

  <!-- Ok 5→6 -->
  <line x1="767" y1="187" x2="793" y2="187" stroke="#C8873A" stroke-width="2.5" marker-end="url(#flowArrow)"/>

  <!-- === ADIM 6: Kılıf Çekme === -->
  <circle cx="855" cy="130" r="18" fill="#C8873A"/>
  <text x="855" y="136" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">6</text>
  <rect x="795" y="160" width="95" height="55" fill="#2E5077" rx="6"/>
  <text x="842" y="184" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Kılıf</text>
  <text x="842" y="202" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Çekme</text>
  <!-- İkon: yukarı ok -->
  <line x1="842" y1="258" x2="842" y2="232" stroke="#C8873A" stroke-width="2"/>
  <polygon points="835,235 849,235 842,225" fill="#C8873A"/>
  <!-- Açıklama -->
  <text x="842" y="272" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">Muhafaza borusu</text>
  <text x="842" y="285" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="10">geri çekilir</text>

  <!-- Alt bilgi bandı -->
  <rect x="0" y="320" width="900" height="200" fill="#1B2B3A" rx="0"/>

  <!-- Alt bölüm: Önemli notlar -->
  <text x="450" y="350" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Kritik Kontrol Noktaları</text>

  <!-- Not kutuları -->
  <!-- Not 1 -->
  <rect x="40" y="370" width="250" height="60" fill="#2E5077" rx="5" opacity="0.6"/>
  <circle cx="60" cy="388" r="10" fill="#C8873A"/>
  <text x="60" y="393" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">!</text>
  <text x="80" y="390" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">Zemin Etüdü</text>
  <text x="80" y="408" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">SPT deneyi ve laboratuvar</text>
  <text x="80" y="421" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">analizleri zorunludur</text>

  <!-- Not 2 -->
  <rect x="325" y="370" width="250" height="60" fill="#2E5077" rx="5" opacity="0.6"/>
  <circle cx="345" cy="388" r="10" fill="#C8873A"/>
  <text x="345" y="393" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">!</text>
  <text x="365" y="390" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">Betonlama Süresi</text>
  <text x="365" y="408" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Tremi beton kesintisiz</text>
  <text x="365" y="421" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">dökülmelidir</text>

  <!-- Not 3 -->
  <rect x="610" y="370" width="250" height="60" fill="#2E5077" rx="5" opacity="0.6"/>
  <circle cx="630" cy="388" r="10" fill="#C8873A"/>
  <text x="630" y="393" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">!</text>
  <text x="650" y="390" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">Kalite Kontrolü</text>
  <text x="650" y="408" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Ultrasonik test ve yükleme</text>
  <text x="650" y="421" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">deneyi ile doğrulama</text>

  <!-- Alt süreç özet çizgisi -->
  <line x1="40" y1="455" x2="860" y2="455" stroke="#C8873A" stroke-width="1" opacity="0.4"/>
  <text x="450" y="478" text-anchor="middle" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="11">Tipik imalat süresi: Ø80cm, 20m derinlik — yaklaşık 4-6 saat / kazık</text>
  <text x="450" y="498" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="10">TS EN 1536 Standardına Uygun Uygulama</text>
</svg><figcaption>Fore Kazık İmalat Akış Şeması</figcaption></figure>
<h2 id="fore-kazik-fiyatlari-2026">Fore Kazık Fiyatları 2026</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> 2026 yılı itibarıyla fore kazık metre fiyatları çapa göre 1.800 TL ile 7.500 TL/m arasında değişmektedir. Fiyatı etkileyen başlıca faktörler; kazık çapı, derinlik, zemin koşulları, donatı yoğunluğu, mobilizasyon mesafesi ve proje ölçeğidir.</div>
<div class="saha-notu">
<strong>💰 Maliyet Notu:</strong> Fore kazık maliyetinin %40-50\'si beton ve donatı çeliğidir. Çelik fiyatlarındaki dalgalanma toplam maliyeti doğrudan etkiler. Büyük projelerde çelik tedarikini önceden sabitlemek %10-15 tasarruf sağlayabilir.
</div>
<h3>2026 Güncel Birim Fiyat Tablosu</h3>
<div class="expert-tip">Aşağıdaki fiyatlar 2026 yılı piyasa ortalamasıdır. Kesin fiyatlar zemin koşulları, proje ölçeği ve lokasyona göre değişir. Güncel teklif için <a href="/iletisim/">iletişime geçin</a>.</div>
<div class="table-wrapper"><table>
<thead>
<tr><th>Kazık Çapı</th><th>Birim Fiyat Aralığı (TL/m)</th><th>Ortalama Fiyat (TL/m)</th><th>Tipik Kullanım Alanı</th></tr>
</thead>
<tbody>
<tr><td><strong>Ø40 cm (400 mm)</strong></td><td>1.800 – 3.000</td><td>2.400</td><td>Güçlendirme, hafif yapılar</td></tr>
<tr><td><strong>Ø50 cm (500 mm)</strong></td><td>2.400 – 4.000</td><td>3.200</td><td>Konut projeleri, iksa</td></tr>
<tr><td><strong>Ø65 cm (650 mm)</strong></td><td>3.400 – 4.000</td><td>3.700</td><td>Orta ölçekli yapılar</td></tr>
<tr><td><strong>Ø80 cm (800 mm)</strong></td><td>4.500 – 5.000</td><td>4.750</td><td>Ticari yapılar, köprü</td></tr>
<tr><td><strong>Ø100 cm (1000 mm)</strong></td><td>6.700 – 7.500</td><td>7.100</td><td>Gökdelen, viyadük, büyük projeler</td></tr>
<tr><td><strong>Ø120 cm (1200 mm)</strong></td><td>8.500 – 10.500</td><td>9.500</td><td>Mega projeler, derin temeller</td></tr>
<tr><td><strong>Ø150 cm (1500 mm)</strong></td><td>11.000 – 14.000</td><td>12.500</td><td>Özel projeler, baretten kazık</td></tr>
</tbody>
</table></div>
<div class="expert-tip">Yukarıdaki fiyatlar delgi, beton, donatı ve işçilik dahil "anahtar teslim" birim fiyatlardır. Mobilizasyon/demobilizasyon bedeli ayrıca değerlendirilir.</div>
<h3>Fiyatı Etkileyen Temel Faktörler</h3>
<p><strong>1. Kazık Çapı ve Derinliği:</strong> Çap büyüdükçe beton ve donatı hacmi kübik olarak artar. Ø80 cm kazık, Ø40 cm kazığa göre 4 kat daha fazla beton tüketir. Derinlik arttıkça delgi süresi ve ekipman maliyeti de yükselir.</p>
<p><strong>2. Zemin Koşulları:</strong> Kaya delgisi gerektiren projeler, yumuşak zemine göre %30–50 daha pahalıdır. Kaya kesici (DTH hammer) kullanımı ek maliyet getirir. Bentonit kullanımı da fiyatı %10–15 artırır.</p>
<p><strong>3. Donatı Yoğunluğu:</strong> Deprem bölgelerindeki projeler daha yoğun donatı gerektirir. Donatı ağırlığı genellikle 80–150 kg/m³ beton arasındadır. Yüksek deprem riskli bölgelerde bu değer 200 kg/m³'e çıkabilir.</p>
<p><strong>4. Proje Ölçeği:</strong> Kazık adedi arttıkça birim fiyat düşer. 10 kazıklık bir projede birim fiyat, 200 kazıklık bir projeye göre %15–25 daha yüksektir. Mobilizasyon maliyeti sabit olduğundan, küçük projelerde kazık başına düşen pay artar.</p>
<p><strong>5. Lokasyon ve Erişim:</strong> Şehir merkezlerinde dar alanlarda çalışmak, büyük makinelerin manevra kısıtlaması nedeniyle ek maliyet oluşturur. Uzak şantiyelere mobilizasyon bedeli 50.000–150.000 TL arasında değişebilir.</p>
<p><strong>6. Beton ve Çelik Piyasa Fiyatları:</strong> 2026 yılı itibarıyla hazır beton (C30/37) fiyatı bölgeye göre 2.500–3.500 TL/m³, inşaat çeliği fiyatı ise 22.000–28.000 TL/ton aralığındadır. Bu hammadde fiyatlarındaki dalgalanmalar doğrudan kazık maliyetine yansır.</p>
<p><strong>7. Kılıf (Casing) Kullanımı:</strong> Tam kılıflı delgi, kuru delgiye göre %25–40 daha pahalıdır. Kılıf kiralama bedeli ayrıca hesaplanır.</p>
<h3>Fore Kazık ile Alternatif Temel Sistemlerinin Maliyet Karşılaştırması</h3>
<p>Fore kazık fiyatları, diğer derin temel sistemleriyle karşılaştırıldığında genellikle orta-üst segmentte yer alır. Ancak taşıma kapasitesi ve güvenilirlik açısından en yüksek performansı sunar. Bir <a href="/faaliyet-alanlari/zemin-iyilestirme/jet-grout/">jet grout</a> kolonunun metre fiyatı fore kazığa göre daha düşük olabilir; ancak taşıma kapasitesi karşılaştırıldığında fore kazık çok daha verimlidir.</p>

<h2 id="fore-kazik-maliyet-hesaplama">Fore Kazık Maliyet Hesaplama</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık toplam maliyeti; kazık adedi, çapı, derinliği ve zemin koşullarına göre hesaplanır. Örnek: 50 adet Ø80 cm x 20 m derinliğinde fore kazık için toplam maliyet yaklaşık 4.750.000 TL\'dir (2026 fiyatlarıyla).</div>
<h3>Örnek Maliyet Hesabı</h3>
<p>Bir konut projesi için tipik fore kazık maliyet hesaplamasını inceleyelim:</p>
<p><strong>Proje Verileri:</strong></p>
<ul>
<li>Kazık adedi: 50 adet</li>
<li>Kazık çapı: Ø80 cm (800 mm)</li>
<li>Kazık derinliği: 20 m</li>
<li>Zemin türü: Orta sıkı kum + kil (bentonit gerekli)</li>
<li>Lokasyon: İstanbul</li>
</ul>
<p><strong>Hesaplama:</strong></p>
<div class="table-wrapper"><table>
<thead>
<tr><th>Kalem</th><th>Hesaplama</th><th>Tutar</th></tr>
</thead>
<tbody>
<tr><td>Toplam delgi metrajı</td><td>50 kazık x 20 m</td><td>1.000 m</td></tr>
<tr><td>Birim fiyat (Ø80 cm, bentonitli)</td><td>—</td><td>4.750 TL/m</td></tr>
<tr><td><strong>Delgi + imalat bedeli</strong></td><td>1.000 m x 4.750 TL/m</td><td><strong>4.750.000 TL</strong></td></tr>
<tr><td>Mobilizasyon/demobilizasyon</td><td>Götürü</td><td>120.000 TL</td></tr>
<tr><td>Kazık başı tıraşlama</td><td>50 adet x 800 TL</td><td>40.000 TL</td></tr>
<tr><td>Kazık yük testi (2 adet statik)</td><td>2 x 85.000 TL</td><td>170.000 TL</td></tr>
<tr><td>Sağlamlık testi (CSL, tüm kazıklar)</td><td>50 x 2.500 TL</td><td>125.000 TL</td></tr>
<tr><td><strong>GENEL TOPLAM (KDV hariç)</strong></td><td>—</td><td><strong>~5.205.000 TL</strong></td></tr>
</tbody>
</table></div>
<h3>Maliyeti Etkileyen Faktörler Listesi</h3>
<p>Toplam maliyeti doğrudan etkileyen faktörler şunlardır:</p>
<ol>
<li><strong>Kazık geometrisi:</strong> Çap ve derinlik artışı maliyet artışının birincil sebebidir.</li>
<li><strong>Zemin koşulları:</strong> Kaya delgisi, artezyen su, boulderlı (bloklu) zemin ek maliyet yaratır.</li>
<li><strong>Donatı detayları:</strong> Etriye sıklaştırması, çift sıra donatı, özel çelik sınıfı (B500C) maliyeti artırır.</li>
<li><strong>Beton sınıfı:</strong> C30/37 yerine C35/45 veya C40/50 kullanımı %8–12 ek maliyet getirir.</li>
<li><strong>Delgi yöntemi:</strong> CFA kazık genellikle geleneksel fore kazığa göre %10–20 daha ekonomiktir.</li>
<li><strong>Proje takvimi:</strong> Gece çalışması, hafta sonu çalışması ve acil mobilizasyon ek ücretlere tabidir.</li>
<li><strong>Kalite kontrol testleri:</strong> Statik yük testi, sonik (CSL) testi, PIT testi gibi testler toplam maliyetin %3–5'ini oluşturur.</li>
<li><strong>İklim koşulları:</strong> Kış aylarında betonlama için antifrize ve ısıtma önlemleri ek maliyet getirir.</li>
</ol>
<p>Kesin maliyet hesabı için zemin etüdü raporunuzla birlikte <a href="/iletisim/">bizimle iletişime geçin</a>.</p>

<figure><img src="/images/fore-kazik/fore-kazik-ekipman.webp" alt="Fore kazık şantiyesi ekipman panoraması — delgi makinesi, beton pompası ve vinç eş zamanlı çalışıyor" loading="lazy" decoding="async" width="860" height="480" /><figcaption>Büyük ölçekli fore kazık projesi — çoklu ekipman eş zamanlı operasyonu, maliyetin ölçeğini gösteren şantiye panoraması</figcaption></figure>
<h2 id="fore-kazik-deprem-dayanikliligi-ve-tbdy-2018">Fore Kazık Deprem Dayanıklılığı ve TBDY 2018</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazıklar, TBDY 2018 (Türkiye Bina Deprem Yönetmeliği) kapsamında depreme dayanıklı yapı tasarımının temel bileşenlerindendir. Sıvılaşma riski bulunan ZD, ZE ve ZF sınıfı zeminlerde fore kazık uygulaması zorunlu hale gelebilir. Kazık-zemin etkileşimi analizi, deprem tasarımının ayrılmaz parçasıdır.</div>
<div class="saha-notu">
<strong>📋 Mevzuat Notu:</strong> TBDY 2018\'e göre ZC ve ZD zemin sınıflarında kazıklı temel zorunludur. Müteahhitler bazen "radye yeter" der ama yönetmelik açık — zayıf zeminde derin temel şart. Deprem yükü hesabı olmadan kazık boyutlandırması yapılamaz.
</div>
<h3>Deprem ve Derin Temel İlişkisi</h3>
<p>Türkiye, dünyanın en aktif deprem kuşaklarından biri olan Alp-Himalaya deprem kuşağı üzerinde yer alır. Ülke topraklarının %92'si deprem bölgesindedir ve nüfusun büyük bölümü deprem riski altında yaşamaktadır. Bu gerçek, yapı temellerinin depreme dayanıklı tasarlanmasını zorunlu kılmaktadır.</p>
<p>Fore kazıklar, deprem mühendisliği açısından kritik avantajlar sunar:</p>
<ul>
<li><strong>Sıvılaşma önlemi:</strong> Gevşek kumlu ve suya doygun zeminler deprem sırasında sıvılaşabilir (liquefaction). Fore kazıklar, sıvılaşan tabakayı geçerek altındaki sıvılaşmayan katmana ulaşır ve yapı güvenliğini sağlar.</li>
<li><strong>Yanal yük direnci:</strong> Deprem sırasında yapıya etkiyen yatay kuvvetler, kazık gövdesi boyunca zemine aktarılır. Kazığın eğilme ve kesme kapasitesi, bu yatay yükleri güvenle karşılar.</li>
<li><strong>Deplasman kontrolü:</strong> Deprem sırasında zemin hareketi ve yapı deplasmanı, <strong>kazıklı temeller</strong> sayesinde kontrol altında tutulur.</li>
</ul>
<h3>TBDY 2018 Gereklilikleri</h3>
<p>Türkiye Bina Deprem Yönetmeliği 2018 (TBDY 2018), fore kazık tasarımını doğrudan etkileyen önemli düzenlemeler içerir:</p>
<p><strong>Zemin Sınıfları (ZA–ZF):</strong></p>
<ul>
<li><strong>ZA:</strong> Sağlam kaya (Vs30 > 1500 m/s) — Fore kazık genellikle gerekmez</li>
<li><strong>ZB:</strong> Kaya (760 < Vs30 ≤ 1500 m/s) — Fore kazık nadiren gerekir</li>
<li><strong>ZC:</strong> Sert zemin (360 < Vs30 ≤ 760 m/s) — Proje özelinde değerlendirilir</li>
<li><strong>ZD:</strong> Orta sıkı zemin (180 < Vs30 ≤ 360 m/s) — Fore kazık sıklıkla gerekir</li>
<li><strong>ZE:</strong> Yumuşak zemin (Vs30 ≤ 180 m/s) — Fore kazık genellikle zorunludur</li>
<li><strong>ZF:</strong> Özel zemin (sıvılaşma, hassas kil vb.) — Fore kazık zorunludur, özel analiz gerektirir</li>
</ul>
<div class="expert-tip">TBDY 2018\'e göre ZD, ZE ve ZF sınıfı zeminlerde fore kazık uygulaması zorunlu hale gelebilir. Deprem tasarımında kazık-zemin etkileşimi analizi mutlaka yapılmalıdır.</div>
<p><strong>Yapısal gereksinimler:</strong></p>
<ul>
<li>Fore kazık donatı oranı minimum %1 olmalıdır (kazık kesit alanına göre).</li>
<li>Kazık üst bölgesinde (2 x kazık çapı kadar) etriye sıklaştırması uygulanmalıdır.</li>
<li>Kazık-başlık birleşimi, moment aktaracak şekilde tasarlanmalıdır.</li>
<li>Sıvılaşma potansiyeli olan zeminlerde, negatif sürtünme (downdrag) ve yanal yayılma (lateral spreading) etkileri ayrıca hesaba katılmalıdır.</li>
</ul>
<h3>Sıvılaşma ve Fore Kazık</h3>
<p>Sıvılaşma, gevşek kumlu ve suya doygun zeminlerin deprem sırasında boşluk suyu basıncı artışıyla taşıma gücünü kaybetmesi durumudur. TBDY 2018, sıvılaşma potansiyeli değerlendirmesinde SPT, CPT ve Vs verilerini kullanır.</p>
<p>Sıvılaşma riski tespit edilen zeminlerde fore kazık tasarımında:</p>
<ul>
<li>Kazık, sıvılaşan tabakayı tamamen geçerek sıvılaşmayan katmana en az 5 × çap kadar soketlenmelidir.</li>
<li>Sıvılaşan tabakadaki çevre sürtünmesi, taşıma kapasitesi hesabında sıfır (veya negatif) alınmalıdır.</li>
<li>Yanal yayılma kuvvetleri, ek yatay yük olarak kazık tasarımına dahil edilmelidir.</li>
<li>Eurocode 7 ve Eurocode 8 (sismik tasarım) referans alınarak deprem performans analizi yapılmalıdır.</li>
</ul>
<figure><img src="/images/fore-kazik/fore-kazik-deprem.webp" alt="Fore kazık temel sistemi kesit görünümü — bina altında derin kazıklar farklı zemin katmanlarından ana kayaya ulaşıyor" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Fore kazık temel sistemi kesit illüstrasyonu — kazıklar zemin katmanlarını geçerek ana kayaya oturuyor</figcaption></figure>

<h2 id="ozel-kosullarda-fore-kazik-uygulamasi">Özel Koşullarda Fore Kazık Uygulaması</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık, yüksek yeraltı suyu tablası, kaya formasyonları, gevşek kumlu zeminler ve sıkışık kentsel alanlar gibi zorlu koşullarda özel yöntemlerle başarıyla uygulanır. Her koşul, kendine özgü ekipman, teknik ve önlem gerektirir.</div>
<div class="saha-notu">
<strong>🏗️ Torem Deneyimi:</strong> İstanbul Pendik-Kurtköy bölgesinde alüvyon zemin koşullarında Ø80 cm fore kazıklar ile 35 m derinliğe ulaştık. Yeraltı suyu seviyesi -3 m\'de olmasına rağmen bentonitli delgi yöntemiyle sorunsuz imalat gerçekleştirdik.
</div>
<h3>Yüksek Yeraltı Suyu Tablası</h3>
<p>Yeraltı su seviyesinin yüzeye yakın olduğu (0–3 m) projelerde, fore kazık delgisi özel önlemler gerektirir:</p>
<ul>
<li><strong>Bentonit şerbeti yöntemi:</strong> En yaygın çözümdür. Bentonit slurry, kuyu içindeki hidrostatik basıncı sağlayarak suyun kuyuya sızmasını önler.</li>
<li><strong>Kılıf (casing) yöntemi:</strong> Tam kılıflı sistemlerde su girişi mekanik olarak engellenir. Artezyen su koşullarında tercih edilir.</li>
<li><strong>Tremi betonlama zorunluluğu:</strong> Su altında kalan kuyularda beton mutlaka tremi yöntemiyle dökülmelidir. Serbest düşürme (free-fall) betonlama kesinlikle yapılmamalıdır; beton segregasyona uğrar ve kazık kalitesi ciddi şekilde düşer.</li>
</ul>
<h3>Kaya Formasyonlarında Delgi</h3>
<p>Kaya tabakasına ulaşıldığında delgi hızı önemli ölçüde yavaşlar ve standart burgu ekipmanı yetersiz kalır:</p>
<ul>
<li><strong>Kaya kovası (Rock bucket/Core barrel):</strong> Orta sert kayalarda (UCS 25–80 MPa) kullanılır. Kayanın parçalanarak çıkarılmasını sağlar.</li>
<li><strong>DTH hammer (Down-the-hole hammer):</strong> Sert kayalarda (UCS > 80 MPa) darbeli kırıcı kullanılır. Hava veya su basıncıyla çalışır.</li>
<li><strong>Kaya soketi (Rock socket):</strong> Kazığın kaya içerisine gömülmesi, uç direncini ve toplam taşıma kapasitesini önemli ölçüde artırır. Kaya soketi derinliği genellikle 1,5D–3D (D = kazık çapı) arasındadır.</li>
</ul>
<h3>Gevşek Kumlu Zemin</h3>
<p>Gevşek kum tabakalarında en büyük risk, delgi sırasında kuyu cidarının ani göçmesidir (cave-in). Bu koşullarda:</p>
<ul>
<li>Tam kılıf uygulaması veya yoğun bentonit çamuru kullanılmalıdır.</li>
<li>Betonlama sırasında kılıf çekme hızı çok dikkatli kontrol edilmelidir; hızlı çekme halinde zemin kuyuya akabilir ve kazık boyunda daralma (necking) oluşabilir.</li>
<li>CFA kazık yöntemi, gevşek kumlarda çok başarılı sonuçlar verir çünkü kuyu hiçbir zaman açık kalmaz.</li>
</ul>
<h3>Sıkışık Kentsel Alan</h3>
<p>Şehir merkezlerinde, dar sokaklarda ve mevcut yapılara bitişik alanlarda fore kazık uygulaması ek zorluklar getirir:</p>
<ul>
<li><strong>Düşük başlıklı (low headroom) makineler:</strong> Tavan yüksekliğinin sınırlı olduğu bodrum katı güçlendirmelerinde veya köprü altı çalışmalarda kullanılır.</li>
<li><strong>Titreşim ve gürültü kontrolü:</strong> Fore kazık, çakma kazığa göre çok daha az titreşim üretir; ancak kılıf indirme/çıkarma sırasında oluşabilecek titreşim izlenmeli ve sınır değerler (DIN 4150-3'e göre tipik konut yapıları için 5 mm/s) aşılmamalıdır.</li>
<li><strong><a href="/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/">İksa sistemi</a> entegrasyonu:</strong> Kentsel projelerde fore kazıklar, iksa perdesi olarak da görev yapabilir (çift fonksiyon: hem taşıyıcı hem iksa). Bu yaklaşım, toplam maliyeti ve inşaat süresini azaltır.</li>
</ul>

<h2 id="zemin-etudu-ve-fore-kazik-i-liskisi">Zemin Etüdü ve Fore Kazık İlişkisi</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Zemin etüdü, fore kazık tasarımının temel girdisidir. SPT-N değerleri, presiyometre deneyleri, laboratuvar analizleri ve sondaj karotları, kazık çapını, derinliğini ve taşıma kapasitesini belirleyen temel verilerdir. Yetersiz zemin etüdü, fore kazık projelerindeki başarısızlıkların en yaygın sebebidir.</div>
<div class="saha-notu">
<strong>🔍 Zemin Okuma:</strong> Kazık çakma/delme loglarında ani ilerleme hızı artışı, zemin geçişini gösterir. Sert tabakadan yumuşak tabakaya geçiş anı kritiktir — bu noktada delgi parametreleri (devir, basınç) ayarlanmazsa kazık eğrilebilir.
</div>
<h3>Zemin Etüdünün Gerekliliği</h3>
<p>Her fore kazık projesi, mutlaka kapsamlı bir zemin etüdü raporuna dayanmalıdır. Zemin etüdü olmadan fore kazık tasarımı yapmak, "gözü kapalı cerrahiye" benzer — son derece risklidir. <a href="/faaliyet-alanlari/zemin-iyilestirme/jet-grout/">Zemin iyileştirme</a> kararı da dahil olmak üzere tüm geoteknik mühendislik çözümleri, zemin etüdü verilerine dayanır.</p>
<p>Fore kazık projeleri için zemin etüdünde yapılması gereken işlemler:</p>
<ul>
<li><strong>Sondaj:</strong> Kazık derinliğinin en az 5 metre altına kadar yapılmalıdır. Her 1.000 m² alan için en az 1 sondaj noktası önerilir.</li>
<li><strong>SPT (Standard Penetration Test):</strong> Her 1,5 m derinlikte SPT deneyi yapılarak zemin sıkılığı ölçülür.</li>
<li><strong>Karot numunesi alma:</strong> Kaya formasyonlarında RQD (Rock Quality Designation) ve UCS (tek eksenli basınç dayanımı) belirlenir.</li>
<li><strong>Presiyometre deneyi:</strong> Yerinde zemin deformasyon modülü ve limit basıncı ölçülür. Fore kazık taşıma kapasitesi hesabında doğrudan kullanılır.</li>
<li><strong>Laboratuvar deneyleri:</strong> Su muhtevası, Atterberg limitleri, dane dağılımı (elek analizi), üç eksenli basınç, konsolidasyon deneyleri yapılır.</li>
<li><strong>Yeraltı suyu ölçümü:</strong> Su seviyesi ve artezyen basıncı tespiti, delgi yöntemi seçimini doğrudan etkiler.</li>
</ul>
<h3>SPT-N Değerleri ve Fore Kazık Tasarımı</h3>
<p>SPT-N değeri, zeminin sıkılık veya kıvam durumunu gösteren en yaygın arazi deneyi parametresidir. Fore kazık tasarımında SPT-N değerleri şu şekilde kullanılır:</p>
<div class="table-wrapper"><table>
<thead>
<tr><th>SPT-N Değeri</th><th>Zemin Durumu</th><th>Fore Kazık İlişkisi</th></tr>
</thead>
<tbody>
<tr><td>0–4</td><td>Çok gevşek/yumuşak</td><td>Kazık bu tabakadan geçmeli; sürtünme ihmal edilir</td></tr>
<tr><td>4–10</td><td>Gevşek/orta</td><td>Düşük sürtünme; kazık bu tabakada sonlandırılmamalı</td></tr>
<tr><td>10–30</td><td>Orta sıkı/sert</td><td>Sürtünme taşıyıcı olarak değerlendirilebilir</td></tr>
<tr><td>30–50</td><td>Sıkı/çok sert</td><td>Yüksek sürtünme kapasitesi; uç taşıma da değerlendirilir</td></tr>
<tr><td>50+</td><td>Çok sıkı/kaya</td><td>Kazık ucu için ideal tabaka; uç direnci baskın</td></tr>
</tbody>
</table></div>
<h3>Taşıma Kapasitesi Hesabı</h3>
<p>Fore kazık taşıma kapasitesi hesabında en yaygın kullanılan yöntemler:</p>
<p><strong>1. Meyerhof Yöntemi (SPT tabanlı):</strong></p>
<p>Kumlu zeminlerde uç direnci: q_uç = 40 × N × (L/D) ≤ 400 × N (kPa)</p>
<p>Çevre sürtünmesi: f_s = 2 × N (kPa) — kum için</p>
<p><strong>2. Vesic Yöntemi:</strong></p>
<p>Uç direnci kavramsal olarak Terzaghi taşıma gücü teorisine dayanır. Derin temel koşullarında düzeltilmiş taşıma gücü katsayıları kullanılır.</p>
<p><strong>3. Presiyometre Yöntemi (Menard):</strong></p>
<p>Uç direnci: q_uç = k × p_L (k: zemin türüne göre katsayı, p_L: limit basıncı)</p>
<p>Bu yöntem, Fransa ve Avrupa'da en yaygın kullanılan yöntemdir ve Eurocode 7 kapsamında referans gösterilmektedir.</p>
<p><strong>4. α-Yöntemi (Kohezyonlu zeminler):</strong></p>
<p>Çevre sürtünmesi: f_s = α × c_u (α: yapışma katsayısı, c_u: drenajsız kayma dayanımı)</p>
<p>Tüm bu yöntemlerin sonuçları, güvenlik katsayısı (genel olarak 2,0–3,0) veya kısmi güvenlik katsayıları (Eurocode 7 yaklaşımı) ile bölünerek tasarım taşıma kapasitesi elde edilir. Tasarım sonuçları mutlaka kazık yük testi ile doğrulanmalıdır.</p>

<figure class="svg-diagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 850">
  <defs>
    <!-- Dolgu deseni: noktalı -->
    <pattern id="slDots" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect width="8" height="8" fill="#B8A88A"/>
      <circle cx="2" cy="2" r="1.2" fill="#8A7A5A"/>
      <circle cx="6" cy="6" r="1.2" fill="#8A7A5A"/>
    </pattern>
    <!-- Kil deseni: çizgili -->
    <pattern id="slClay" width="12" height="6" patternUnits="userSpaceOnUse">
      <rect width="12" height="6" fill="#9A8060"/>
      <line x1="0" y1="2" x2="12" y2="2" stroke="#7A6040" stroke-width="1"/>
      <line x1="0" y1="5" x2="12" y2="5" stroke="#7A6040" stroke-width="0.6"/>
    </pattern>
    <!-- Kum deseni: benekli -->
    <pattern id="slSand" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect width="8" height="8" fill="#D4BA6A"/>
      <circle cx="1" cy="1" r="0.7" fill="#B09A4A"/>
      <circle cx="5" cy="3" r="0.5" fill="#B09A4A"/>
      <circle cx="3" cy="6" r="0.6" fill="#B09A4A"/>
      <circle cx="7" cy="5" r="0.4" fill="#B09A4A"/>
      <circle cx="2" cy="4" r="0.3" fill="#B09A4A"/>
      <circle cx="6" cy="7" r="0.5" fill="#B09A4A"/>
    </pattern>
    <!-- Çakıl deseni: daireler -->
    <pattern id="slGravel" width="16" height="14" patternUnits="userSpaceOnUse">
      <rect width="16" height="14" fill="#A89A7A"/>
      <ellipse cx="4" cy="4" rx="3" ry="2.5" fill="#8A7A5A" stroke="#6A5A3A" stroke-width="0.5"/>
      <ellipse cx="12" cy="10" rx="3.5" ry="2.5" fill="#9A8A6A" stroke="#6A5A3A" stroke-width="0.5"/>
      <ellipse cx="8" cy="2" rx="2" ry="1.5" fill="#7A6A4A" stroke="#6A5A3A" stroke-width="0.5"/>
    </pattern>
    <!-- Kaya deseni: taralı -->
    <pattern id="slRock" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#707070"/>
      <line x1="0" y1="0" x2="10" y2="10" stroke="#555" stroke-width="0.8"/>
      <line x1="10" y1="0" x2="0" y2="10" stroke="#555" stroke-width="0.8"/>
    </pattern>
  </defs>

  <!-- Arka plan -->
  <rect width="700" height="850" fill="#F5F2ED"/>

  <!-- Başlık bandı -->
  <rect x="0" y="0" width="700" height="70" fill="#1B2B3A"/>
  <text x="350" y="30" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="20" font-weight="bold">Tipik Sondaj Logu</text>
  <text x="350" y="52" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="13">Fore Kazık Projesi — Zemin Profili</text>

  <!-- Sütun başlıkları -->
  <rect x="20" y="85" width="660" height="35" fill="#2E5077" rx="4"/>
  <text x="70" y="107" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Derinlik</text>
  <text x="170" y="107" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Grafik Log</text>
  <text x="315" y="107" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Zemin Tanımı</text>
  <text x="455" y="107" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">SPT-N</text>
  <text x="555" y="107" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Zemin Sınıfı</text>
  <text x="645" y="107" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Su</text>

  <!-- Ayırıcı çizgiler (dikey) -->
  <line x1="115" y1="85" x2="115" y2="790" stroke="#1B2B3A" stroke-width="0.5" opacity="0.3"/>
  <line x1="225" y1="85" x2="225" y2="790" stroke="#1B2B3A" stroke-width="0.5" opacity="0.3"/>
  <line x1="410" y1="85" x2="410" y2="790" stroke="#1B2B3A" stroke-width="0.5" opacity="0.3"/>
  <line x1="505" y1="85" x2="505" y2="790" stroke="#1B2B3A" stroke-width="0.5" opacity="0.3"/>
  <line x1="610" y1="85" x2="610" y2="790" stroke="#1B2B3A" stroke-width="0.5" opacity="0.3"/>

  <!-- ======= KATMAN 1: DOLGU (0-2m) ======= -->
  <!-- Derinlik ölçeği -->
  <text x="70" y="145" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">0.00 m</text>
  <line x1="25" y1="130" x2="110" y2="130" stroke="#1B2B3A" stroke-width="1"/>

  <!-- Grafik log -->
  <rect x="120" y="130" width="100" height="130" fill="url(#slDots)" stroke="#1B2B3A" stroke-width="1"/>

  <!-- Zemin tanımı -->
  <text x="230" y="175" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">DOLGU</text>
  <text x="230" y="195" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">Karışık dolgu malzemesi,</text>
  <text x="230" y="211" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">gevşek, organik katkılı</text>

  <!-- SPT-N değeri -->
  <rect x="430" y="170" width="50" height="30" fill="#C8873A" rx="4"/>
  <text x="455" y="191" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">5</text>
  <!-- SPT bar -->
  <rect x="430" y="208" width="15" height="8" fill="#C8873A" rx="2" opacity="0.6"/>

  <!-- Zemin sınıfı -->
  <rect x="520" y="175" width="75" height="28" fill="#1B2B3A" rx="4"/>
  <text x="557" y="194" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="14" font-weight="bold">ZD</text>

  <!-- Derinlik çizgisi: 2m -->
  <text x="70" y="275" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">2.00 m</text>
  <line x1="25" y1="260" x2="610" y2="260" stroke="#1B2B3A" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ======= KATMAN 2: KİL (2-7m) ======= -->
  <rect x="120" y="260" width="100" height="195" fill="url(#slClay)" stroke="#1B2B3A" stroke-width="1"/>

  <text x="230" y="335" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">KİL</text>
  <text x="230" y="355" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">Orta plastisiteli kil (CL),</text>
  <text x="230" y="371" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">kahverengi-gri, sert</text>

  <!-- SPT-N değeri -->
  <rect x="430" y="335" width="50" height="30" fill="#C8873A" rx="4"/>
  <text x="455" y="356" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">8</text>
  <!-- SPT bar -->
  <rect x="430" y="373" width="24" height="8" fill="#C8873A" rx="2" opacity="0.6"/>

  <!-- Zemin sınıfı -->
  <rect x="520" y="340" width="75" height="28" fill="#1B2B3A" rx="4"/>
  <text x="557" y="359" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="14" font-weight="bold">ZD</text>

  <!-- Su seviyesi göstergesi -->
  <text x="645" y="310" text-anchor="middle" fill="#2E5077" font-family="Arial, sans-serif" font-size="18">&#9660;</text>
  <text x="645" y="330" text-anchor="middle" fill="#2E5077" font-family="Arial, sans-serif" font-size="9" font-weight="bold">YASS</text>
  <text x="645" y="343" text-anchor="middle" fill="#2E5077" font-family="Arial, sans-serif" font-size="9">3.5m</text>

  <!-- Derinlik çizgisi: 7m -->
  <text x="70" y="470" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">7.00 m</text>
  <line x1="25" y1="455" x2="610" y2="455" stroke="#1B2B3A" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ======= KATMAN 3: KUM (7-15m) ======= -->
  <rect x="120" y="455" width="100" height="195" fill="url(#slSand)" stroke="#1B2B3A" stroke-width="1"/>

  <text x="230" y="530" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">KUM</text>
  <text x="230" y="550" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">Orta-sıkı kum (SM),</text>
  <text x="230" y="566" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">sarı-kahve, siltli,</text>
  <text x="230" y="582" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">yer yer çakıllı</text>

  <!-- SPT-N değeri -->
  <rect x="430" y="530" width="50" height="30" fill="#C8873A" rx="4"/>
  <text x="455" y="551" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">15</text>
  <!-- SPT bar -->
  <rect x="430" y="568" width="45" height="8" fill="#C8873A" rx="2" opacity="0.6"/>

  <!-- Zemin sınıfı -->
  <rect x="520" y="535" width="75" height="28" fill="#2E5077" rx="4"/>
  <text x="557" y="554" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="14" font-weight="bold">ZC</text>

  <!-- Derinlik çizgisi: 15m -->
  <text x="70" y="665" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">15.00 m</text>
  <line x1="25" y1="650" x2="610" y2="650" stroke="#1B2B3A" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ======= KATMAN 4: ÇAKIL (15-18m) ======= -->
  <rect x="120" y="650" width="100" height="70" fill="url(#slGravel)" stroke="#1B2B3A" stroke-width="1"/>

  <text x="230" y="680" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">ÇAKIL</text>
  <text x="230" y="700" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">Sıkı çakıl (GP),</text>
  <text x="230" y="716" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">kumlu, köşeli</text>

  <!-- SPT-N değeri -->
  <rect x="430" y="672" width="50" height="30" fill="#C8873A" rx="4"/>
  <text x="455" y="693" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">25</text>
  <!-- SPT bar -->
  <rect x="430" y="710" width="75" height="8" fill="#C8873A" rx="2" opacity="0.6"/>

  <!-- Zemin sınıfı -->
  <rect x="520" y="677" width="75" height="28" fill="#2E5077" rx="4"/>
  <text x="557" y="696" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="14" font-weight="bold">ZC</text>

  <!-- Derinlik çizgisi: 18m -->
  <text x="70" y="735" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">18.00 m</text>
  <line x1="25" y1="720" x2="610" y2="720" stroke="#1B2B3A" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ======= KATMAN 5: KAYA (18-20m+) ======= -->
  <rect x="120" y="720" width="100" height="70" fill="url(#slRock)" stroke="#1B2B3A" stroke-width="1"/>

  <text x="230" y="750" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="12" font-weight="bold">KAYA</text>
  <text x="230" y="770" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">Ayrışmış kaya tabakası,</text>
  <text x="230" y="786" fill="#2E5077" font-family="Arial, sans-serif" font-size="11">çok sert, delgi sonu</text>

  <!-- SPT-N değeri -->
  <rect x="430" y="742" width="50" height="30" fill="#C8873A" rx="4"/>
  <text x="455" y="763" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">50+</text>
  <!-- SPT bar (tam) -->
  <rect x="430" y="780" width="100" height="8" fill="#C8873A" rx="2" opacity="0.6"/>

  <!-- Zemin sınıfı -->
  <rect x="520" y="747" width="75" height="28" fill="#1B2B3A" rx="4"/>
  <text x="557" y="766" text-anchor="middle" fill="#C8873A" font-family="Arial, sans-serif" font-size="14" font-weight="bold">ZB</text>

  <!-- Derinlik çizgisi: 20m -->
  <text x="70" y="805" text-anchor="middle" fill="#1B2B3A" font-family="Arial, sans-serif" font-size="13" font-weight="bold">20.00 m</text>
  <line x1="25" y1="790" x2="610" y2="790" stroke="#1B2B3A" stroke-width="1"/>

  <!-- Alt bilgi bandı -->
  <rect x="0" y="810" width="700" height="40" fill="#1B2B3A"/>

  <!-- Lejant -->
  <text x="30" y="834" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="10" font-weight="bold">SPT-N:</text>
  <text x="75" y="834" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Standart Penetrasyon Deneyi</text>

  <text x="260" y="834" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="10" font-weight="bold">YASS:</text>
  <text x="295" y="834" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Yeraltı Su Seviyesi</text>

  <text x="430" y="834" fill="#C8873A" font-family="Arial, sans-serif" font-size="10" font-weight="bold">ZB:</text>
  <text x="450" y="834" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Sağlam</text>

  <text x="505" y="834" fill="#C8873A" font-family="Arial, sans-serif" font-size="10" font-weight="bold">ZC:</text>
  <text x="525" y="834" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Orta sıkı</text>

  <text x="595" y="834" fill="#C8873A" font-family="Arial, sans-serif" font-size="10" font-weight="bold">ZD:</text>
  <text x="615" y="834" fill="#F5F2ED" font-family="Arial, sans-serif" font-size="10">Yumuşak/Gevşek</text>
</svg><figcaption>Tipik Sondaj Logu — Zemin Profili</figcaption></figure>
<h2 id="fore-kazik-vs-alternatifler">Fore Kazık vs Alternatifler</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık, çakma kazık, jet grout ve mini kazık ile farklı açılardan karşılaştırılabilir. Fore kazık, yüksek taşıma kapasitesi, düşük titreşim ve geniş çap esnekliği ile öne çıkarken; maliyet ve imalat hızı bakımından her projede en uygun çözüm olmayabilir.</div>
<h3>Fore Kazık vs Çakma Kazık</h3>
<div class="table-wrapper"><table>
<thead>
<tr><th>Karşılaştırma Kriteri</th><th>Fore Kazık (Bored Pile)</th><th>Çakma Kazık (Driven Pile)</th></tr>
</thead>
<tbody>
<tr><td><strong>Yapım Yöntemi</strong></td><td>Zemin delinerek yerinde beton dökülür</td><td>Prefabrik kazık çakılarak zemine sokulur</td></tr>
<tr><td><strong>Çap Aralığı</strong></td><td>400–3000 mm</td><td>200–600 mm (kare/dairesel)</td></tr>
<tr><td><strong>Taşıma Kapasitesi</strong></td><td>500–30.000+ kN</td><td>300–3.000 kN</td></tr>
<tr><td><strong>Titreşim</strong></td><td>Çok düşük (zemin çıkarılır)</td><td>Çok yüksek (zemine çakılır)</td></tr>
<tr><td><strong>Gürültü</strong></td><td>Düşük-orta</td><td>Çok yüksek</td></tr>
<tr><td><strong>Kentsel Uygunluk</strong></td><td>Çok uygun</td><td>Uygun değil (titreşim/gürültü)</td></tr>
<tr><td><strong>Zemin Kontrolü</strong></td><td>Delgi sırasında zemin görülür/kontrol edilir</td><td>Zemin kontrolü yapılamaz</td></tr>
<tr><td><strong>Maliyet</strong></td><td>Orta-yüksek</td><td>Düşük-orta</td></tr>
<tr><td><strong>İmalat Hızı</strong></td><td>Orta (3–5 kazık/gün)</td><td>Hızlı (10–20 kazık/gün)</td></tr>
<tr><td><strong>Kaya Soketi</strong></td><td>Mümkün</td><td>Mümkün değil</td></tr>
</tbody>
</table></div>
<p><strong>Sonuç:</strong> Fore kazık; yüksek taşıma kapasitesi, düşük titreşim ve kaya soketi gerektiren projelerde üstündür. Çakma kazık ise düşük maliyetli, hızlı imalat gereken kırsal projelerde avantajlıdır.</p>
<h3>Fore Kazık vs Jet Grout</h3>
<div class="table-wrapper"><table>
<thead>
<tr><th>Karşılaştırma Kriteri</th><th>Fore Kazık</th><th><a href="/faaliyet-alanlari/zemin-iyilestirme/jet-grout/">Jet Grout</a></th></tr>
</thead>
<tbody>
<tr><td><strong>Çalışma Prensibi</strong></td><td>Betonarme yapısal eleman</td><td>Zemin-çimento karışımı kolon</td></tr>
<tr><td><strong>Taşıma Kapasitesi</strong></td><td>Çok yüksek (yapısal eleman)</td><td>Orta (zemin iyileştirme)</td></tr>
<tr><td><strong>Kullanım Amacı</strong></td><td>Yapısal temel, iksa</td><td>Zemin iyileştirme, sızdırmazlık, perde</td></tr>
<tr><td><strong>Çap Kontrolü</strong></td><td>Tam kontrol (delgi çapı = kazık çapı)</td><td>Sınırlı kontrol (zemine bağlı)</td></tr>
<tr><td><strong>Donatı</strong></td><td>Betonarme kafes (yüksek eğilme/çekme kapasitesi)</td><td>Genellikle donatısız veya tek çubuk</td></tr>
<tr><td><strong>Maliyet (TL/m)</strong></td><td>2.400–14.000</td><td>1.200–3.500</td></tr>
<tr><td><strong>Deprem Performansı</strong></td><td>Çok iyi (sünek davranış)</td><td>Orta (gevrek davranış)</td></tr>
<tr><td><strong>Standart</strong></td><td>TS EN 1536</td><td>TS EN 12716</td></tr>
</tbody>
</table></div>
<p><strong>Sonuç:</strong> Fore kazık yapısal taşıma ve deprem dayanımı gerektiren projelerde tercih edilirken, jet grout zemin iyileştirme ve sızdırmazlık amaçlı projelerde daha uygundur. Bazı projelerde ikisi birlikte de kullanılabilir (örn. fore kazık iksa + jet grout sızdırmazlık perdesi).</p>
<h3>Fore Kazık vs Mini Kazık</h3>
<div class="table-wrapper"><table>
<thead>
<tr><th>Karşılaştırma Kriteri</th><th>Fore Kazık</th><th><a href="/faaliyet-alanlari/kazikli-temeller/mini-kazik/">Mini Kazık</a></th></tr>
</thead>
<tbody>
<tr><td><strong>Çap Aralığı</strong></td><td>400–3000 mm</td><td>150–400 mm</td></tr>
<tr><td><strong>Taşıma Kapasitesi</strong></td><td>500–30.000+ kN</td><td>100–800 kN</td></tr>
<tr><td><strong>Makine Boyutu</strong></td><td>Büyük (60–120 ton)</td><td>Kompakt (5–30 ton)</td></tr>
<tr><td><strong>Dar Alan Uygunluğu</strong></td><td>Sınırlı</td><td>Çok uygun (bina içi, bodrum)</td></tr>
<tr><td><strong>Güçlendirme</strong></td><td>Sınırlı (makine erişimi)</td><td>İdeal (mevcut bina altı)</td></tr>
<tr><td><strong>Derinlik</strong></td><td>5–60+ m</td><td>5–25 m</td></tr>
<tr><td><strong>Maliyet (TL/m)</strong></td><td>1.800–14.000</td><td>1.000–2.500</td></tr>
<tr><td><strong>İmalat Hızı</strong></td><td>3–5 adet/gün (Ø80 cm)</td><td>8–15 adet/gün</td></tr>
</tbody>
</table></div>
<p><strong>Sonuç:</strong> Fore kazık, yüksek yapısal yüklerin olduğu yeni inşaat projelerinde tercih edilirken, <a href="/faaliyet-alanlari/kazikli-temeller/mini-kazik/">mini kazık</a> mevcut bina güçlendirme, dar alan ve düşük yük projelerinde avantajlıdır.</p>
<div class="cta-box">
<strong>Hangi Temel Sistemi Sizin Projenize Uygun?</strong>
<p>Zemin etüdü raporunuzla birlikte bizi arayın, uzman mühendislerimiz en uygun ve ekonomik çözümü belirlesin.</p>
<a href="tel:+905316594636" class="cta-btn">Hemen Arayın: 0531 659 46 36</a>
</div>

<div class="saha-notu">
<strong>🦺 İSG Notu:</strong> Fore kazık şantiyesinde en büyük risk vinç operasyonları ve donatı kafesi indirmedir. Donatı kafesi kaldırılırken tüm personel güvenli mesafede olmalı. Rüzgar hızı 40 km/s\'yi aştığında kaldırma işlemi durdurulmalı.
</div>

<h2 id="sik-sorulan-sorular-sss">Sık Sorulan Sorular (SSS)</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Fore kazık hakkında en çok merak edilen konular; tanım, fiyat, derinlik, kullanım alanları, deprem dayanıklılığı, alternatif karşılaştırmaları, beton sınıfı, taşıma kapasitesi hesabı, kılıf kullanımı, imalat süresi ve yük testi zorunluluğudur.</div>
<details class="faq-item"><summary>1. Fore kazık nedir ve ne işe yarar?</summary><p>Fore kazık, zemin içerisine silindirik bir kuyu açılarak, donatı kafesi yerleştirildikten sonra yerinde beton dökülerek oluşturulan derin temel elemanıdır. Üst yapıdan gelen düşey ve yatay yükleri, yüzeydeki zayıf zemini aşarak derinlerdeki sağlam zemin tabakalarına veya ana kayaya aktarır. "Bored pile" veya "drilled shaft" olarak da bilinir. TS EN 1536 standardına göre tasarlanır ve uygulanır.</p></details>
<details class="faq-item"><summary>2. 1 metre fore kazık fiyatı ne kadar?</summary><p>2026 yılı itibarıyla 1 metre fore kazık fiyatı, kazık çapına göre 1.800 TL ile 14.000 TL arasında değişmektedir. Ø40 cm kazık için ortalama 2.400 TL/m, Ø80 cm kazık için ortalama 4.750 TL/m, Ø100 cm kazık için ortalama 7.100 TL/m\'dir. Bu fiyatlar delgi, beton, donatı ve işçilik dahil anahtar teslim birim fiyatlardır.</p></details>
<details class="faq-item"><summary>3. Fore kazık ne kadar derine iner?</summary><p>Fore kazık derinliği, zemin koşullarına ve proje gereksinimlerine bağlı olarak 5 metreden 60 metrenin üzerine kadar çıkabilir. Tipik uygulamalarda derinlik 15–35 metre arasındadır. Baret kazık gibi özel uygulamalarda 80 metrenin üzerine çıkılabilir.</p></details>
<details class="faq-item"><summary>4. Fore kazık nerelerde kullanılır?</summary><p>Yüksek katlı bina temelleri, köprü ve viyadük ayakları, metro istasyonları, derin kazılarda <a href="/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/">iksa sistemleri</a>, liman yapıları, endüstriyel tesis temelleri, rüzgar türbini temelleri ve heyelan stabilizasyonunda kullanılır.</p></details>
<details class="faq-item"><summary>5. Fore kazık depreme dayanıklı mı?</summary><p>Evet, TBDY 2018\'e uygun tasarlanan fore kazıklar deprem yüklerini güvenle karşılar. Betonarme yapısı sayesinde sünek davranış gösterir. Sıvılaşma riski bulunan zeminlerde, fore kazıklar sıvılaşan tabakayı geçerek yapıyı güvende tutar.</p></details>
<details class="faq-item"><summary>6. Fore kazık ve jet grout farkı nedir?</summary><p>Fore kazık betonarme yapısal eleman iken, <a href="/faaliyet-alanlari/zemin-iyilestirme/jet-grout/">jet grout</a> zemin-çimento karışımı kolon olarak zemin iyileştirme yöntemidir. Fore kazık yüksek taşıma kapasiteli yapısal temel; jet grout ise zemin iyileştirme ve sızdırmazlık perdesi amacıyla kullanılır.</p></details>
<details class="faq-item"><summary>7. Fore kazık ve çakma kazık farkı?</summary><p>Fore kazık yerinde döküm yöntemiyle yapılırken, çakma kazık prefabrik olarak üretilip zemine çakılır. Fore kazığın avantajı düşük titreşimdir — kentsel alanlarda tercih edilir. Çakma kazık ise imalat hızı (günde 10–20 adet) açısından avantajlıdır.</p></details>
<details class="faq-item"><summary>8. Fore kazık beton sınıfı ne olmalı?</summary><p>TS EN 1536 ve TBDY 2018\'e göre minimum C25/30, deprem bölgelerinde minimum C30/37 kullanılması zorunludur. Tremi betonunun çökme değeri 180–220 mm arasında olmalıdır.</p></details>
<details class="faq-item"><summary>9. Taşıma kapasitesi nasıl hesaplanır?</summary><p>Q_toplam = Q_sürtünme + Q_uç formülüyle hesaplanır. Kumlu zeminlerde Meyerhof yöntemi (SPT-N tabanlı), killi zeminlerde alfa yöntemi kullanılır. Eurocode 7 kapsamında kısmi güvenlik katsayıları uygulanır. Sahada kazık yük testi ile doğrulanır.</p></details>
<details class="faq-item"><summary>10. Kılıf (casing) ne zaman kullanılır?</summary><p>Yeraltı su seviyesinin yüksek olduğu, gevşek kumlu-çakıllı tabakalarda, artezyen basıncı bulunan bölgelerde ve sıvılaşma potansiyeli olan zeminlerde kullanılır. Tam kılıf uygulaması %25–40 ek maliyet getirir.</p></details>
<details class="faq-item"><summary>11. İmalat süresi ne kadardır?</summary><p>Tek kazık imalatı çap ve derinliğe bağlı olarak 4–12 saat sürer. Günde ortalama 3–5 kazık imal edilir. 50 kazıklık bir proje yaklaşık 15–20 iş gününde tamamlanır. CFA kazıkta günlük üretim 8–12 kazığa çıkabilir.</p></details>
<details class="faq-item"><summary>12. Yük testi zorunlu mu?</summary><p>Evet, TBDY 2018\'e göre her projede en az 1 adet statik veya dinamik yük testi zorunludur. Ayrıca tüm kazıklarda sağlamlık testi (CSL veya PIT) uygulanması yaygın uygulamadır.</p></details>

<h2 id="torem-zemin-ile-fore-kazik-projelerinizde-guvenilir-cozum">Torem Zemin ile Fore Kazık Projelerinizde Güvenilir Çözüm</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Torem Zemin Mühendislik, 20 yılı aşan saha tecrübesiyle fore kazık projelendirme, imalat ve kalite kontrol hizmetleri sunmaktadır. Uzman kadromuz, keşiften teslimatına kadar tüm süreçlerde yanınızdadır.</div>
<p>Torem Zemin Mühendislik olarak, Türkiye genelinde yüzlerce fore kazık projesini başarıyla tamamladık. <a href="/faaliyet-alanlari/zemin-iyilestirme/jet-grout/">Zemin iyileştirme</a>, <a href="/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/">iksa sistemleri</a>, <a href="/faaliyet-alanlari/destekleme-ankraj/ongermeli-ankraj/">öngermeli ankraj</a>, <a href="/faaliyet-alanlari/destekleme-ankraj/zemin-civisi/">zemin çivisi</a> ve <strong>kazıklı temeller</strong> dahil tüm geoteknik mühendislik çözümlerinde uzman kadromuzla hizmetinizdeyiz.</p>
<p><strong>Neden Torem Zemin?</strong></p>
<ul>
<li>20+ yıl saha tecrübesi</li>
<li>TBDY 2018 ve Eurocode 7 uyumlu tasarım</li>
<li>Son teknoloji delgi ekipmanları (Bauer, Soilmec)</li>
<li>Keşiften teslimata anahtar teslim hizmet</li>
<li>Her projede kapsamlı kalite kontrol ve raporlama</li>
</ul>
<p><strong>Ücretsiz keşif raporu ve fiyat teklifi almak için hemen bizi arayın:</strong></p>
<div class="cta-box">
<strong>Ücretsiz Keşif Raporu Alın</strong>
<p>Uzman mühendislerimiz sahanızı inceleyerek en uygun fore kazık çözümünü ve maliyet analizini hazırlasın.</p>
<a href="tel:+905316594636" class="cta-btn">Hemen Arayın: 0531 659 46 36</a>
<a href="/iletisim/" class="cta-btn">İletişim Formu</a>
</div>
<div class="related-grid">
  <a href="/faaliyet-alanlari/zemin-iyilestirme/jet-grout/" class="related-link">Jet Grout Uygulaması</a>
  <a href="/faaliyet-alanlari/kazikli-temeller/mini-kazik/" class="related-link">Mini Kazık</a>
  <a href="/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/" class="related-link">İksa Sistemleri</a>
  <a href="/faaliyet-alanlari/destekleme-ankraj/ongermeli-ankraj/" class="related-link">Öngermeli Ankraj</a>
  <a href="/faaliyet-alanlari/destekleme-ankraj/zemin-civisi/" class="related-link">Zemin Çivisi</a>
  <a href="/faaliyet-alanlari/geoteknik-proje/zemin-etudu/" class="related-link">Zemin Etüdü</a>
</div>

<p>*Bu içerik, Torem Zemin Mühendislik'in geoteknik uzmanları tarafından hazırlanmış olup, TBDY 2018, TS EN 1536, TS EN 1538, Eurocode 7 (EN 1997-1) ve Eurocode 8 standartları referans alınarak teknik doğruluk sağlanmıştır. Son güncelleme: Mart 2026.*</p>`,
    faq:[
      {q:'Fore kazık nedir ve ne işe yarar?',a:'Fore kazık, zemin içerisine silindirik bir kuyu açılarak, donatı kafesi yerleştirildikten sonra yerinde beton dökülerek oluşturulan derin temel elemanıdır. Üst yapıdan gelen düşey ve yatay yükleri, yüzeydeki zayıf zemini aşarak derinlerdeki sağlam zemin tabakalarına veya ana kayaya aktarır. "Bored pile" veya "drilled shaft" olarak da bilinir. Konut, ticari bina, köprü, metro, endüstriyel tesis ve iksa projelerinde yaygın olarak kullanılır. TS EN 1536 standardına göre tasarlanır ve uygulanır.'},
      {q:'1 metre fore kazık fiyatı ne kadar?',a:'2026 yılı itibarıyla 1 metre fore kazık fiyatı, kazık çapına göre 1.800 TL ile 14.000 TL arasında değişmektedir. Ø40 cm kazık için ortalama 2.400 TL/m, Ø80 cm kazık için ortalama 4.750 TL/m, Ø100 cm kazık için ortalama 7.100 TL/m\'dir. Bu fiyatlar delgi, beton, donatı ve işçilik dahil anahtar teslim birim fiyatlardır. Mobilizasyon, kalite kontrol testleri ve kazık başlığı imalatı gibi kalemler ayrıca fiyatlandırılır. Kesin fiyat için zemin koşulları, kazık adedi ve lokasyon bilgisi gereklidir.'},
      {q:'Fore kazık ne kadar derine iner?',a:'Fore kazık derinliği, zemin koşullarına ve proje gereksinimlerine bağlı olarak 5 metreden 60 metrenin üzerine kadar çıkabilir. Tipik uygulamalarda derinlik 15–35 metre arasındadır. Derinliği belirleyen temel faktörler: sağlam zemin veya kaya tabakasının derinliği, proje yükleri ve sıvılaşma tabakası kalınlığıdır. Baret kazık gibi özel uygulamalarda 80 metrenin üzerine çıkılabilir. Zemin etüdü raporu, kazık derinliğinin belirlenmesinde en kritik veri kaynağıdır.'},
      {q:'Fore kazık nerelerde kullanılır?',a:'Fore kazık başlıca şu alanlarda kullanılır: yüksek katlı bina temelleri, köprü ve viyadük ayakları, metro istasyonları, derin kazılarda iksa sistemleri, liman ve rıhtım yapıları, endüstriyel tesis temelleri, rüzgar türbini temelleri ve heyelan stabilizasyonu. Özellikle zayıf zemin koşullarında, deprem riski yüksek bölgelerde ve mevcut yapılara yakın çalışmaların gerektiği kentsel alanlarda fore kazık tercih edilir.'},
      {q:'Fore kazık depreme dayanıklı mı?',a:'Evet, fore kazıklar depreme oldukça dayanıklıdır. TBDY 2018\'e uygun tasarlanan fore kazıklar, deprem yüklerini güvenle karşılayacak eğilme, kesme ve eksenel yük kapasitesine sahiptir. Betonarme yapısı sayesinde sünek davranış gösterir ve enerji sönümleme kapasitesi yüksektir. Sıvılaşma riski bulunan zeminlerde, fore kazıklar sıvılaşan tabakayı geçerek yapıyı güvende tutar. Türkiye\'deki büyük depremlerde (1999 Kocaeli, 2023 Kahramanmaras), fore kazıklı temellere sahip yapıların büyük çoğunluğu hasar almadan ayakta kalmıştır.'},
      {q:'Fore kazık ve jet grout farkı nedir?',a:'Fore kazık betonarme yapısal eleman iken, jet grout zemin-çimento karışımı kolon olarak zemin iyileştirme yöntemidir. Temel farklar: Fore kazık çok yüksek taşıma kapasitesine sahipken, jet grout orta düzeyde taşıma kapasitesi sunar. Fore kazıkta donatı kafesi bulunduğundan eğilme ve çekme kuvvetlerine dayanır; jet grout donatısız olduğundan yalnızca basınç kuvvetlerini karşılar. Fore kazık yapısal temel elemanı olarak, jet grout ise zemin iyileştirme, sızdırmazlık perdesi ve temel altı zemin güçlendirme amacıyla kullanılır.'},
      {q:'Fore kazık ve çakma kazık farkı?',a:'Fore kazık yerinde döküm yöntemiyle yapılırken, çakma kazık prefabrik olarak üretilip zemine çakılır (darbeli veya vibrasyonlu). Fore kazığın en büyük avantajı düşük titreşimdir — kentsel alanlarda mevcut yapılara zarar vermez. Çakma kazık ise çok yüksek titreşim ve gürültü üretir. Fore kazık, 3000 mm\'e kadar çap ve 30.000 kN\'u aşan taşıma kapasitesi sunarken, çakma kazık genellikle 600 mm çap ve 3.000 kN ile sınırlıdır. Ancak çakma kazık imalat hızı (günde 10–20 adet) fore kazığa (günde 3–5 adet) göre çok daha yüksektir.'},
      {q:'Fore kazık beton sınıfı ne olmalı?',a:'TS EN 1536 ve TBDY 2018\'e göre fore kazıklarda minimum beton sınıfı C25/30\'dur. Ancak deprem bölgelerinde ve yapısal yük taşıyan kazıklarda minimum C30/37 kullanılması zorunludur. Pratikte en yaygın kullanılan sınıf C30/37\'dir. Tremi yöntemiyle dökülen betonun çökme değeri (slump) 180–220 mm arasında, maksimum agrega boyutu 20–25 mm olmalıdır. Beton, sülfata dayanıklı çimento (CEM I veya CEM II/A) ile üretilmeli ve su/çimento oranı 0,50\'nin altında tutulmalıdır.'},
      {q:'Fore kazık taşıma kapasitesi nasıl hesaplanır?',a:'Fore kazık taşıma kapasitesi, çevre sürtünmesi ve uç direnci toplamından oluşur: Q_toplam = Q_sürtünme + Q_uç. Hesap yöntemleri zemin türüne göre değişir. Kumlu zeminlerde Meyerhof yöntemi (SPT-N tabanlı), killi zeminlerde alfa (α) yöntemi (drenajsız kayma dayanımı tabanlı), presiyometre verileri için Menard yöntemi kullanılır. Eurocode 7 kapsamında kısmi güvenlik katsayıları uygulanarak tasarım taşıma kapasitesi belirlenir. Hesaplanan değerler mutlaka sahada yapılacak kazık yük testi ile doğrulanmalıdır.'},
      {q:'Fore kazıkta kılıf (casing) ne zaman kullanılır?',a:'Kılıf (casing) şu koşullarda kullanılır: yeraltı su seviyesinin yüksek olduğu zeminlerde, gevşek kumlu ve çakıllı tabakalarda kuyu göçmesini önlemek için, artezyen su basıncı bulunan bölgelerde, komşu yapılara çok yakın çalışmalarda zemin hareketini kontrol etmek için ve sıvılaşma potansiyeli olan zeminlerde. Kılıf, tam boy (full casing) veya kısmi boy (partial casing, genellikle üst 5–10 m) olarak uygulanabilir. Tam kılıf uygulaması, en güvenli ancak en maliyetli yöntemdir (%25–40 ek maliyet).'},
      {q:'Fore kazık imalatı kaç gün sürer?',a:'Tek bir fore kazığın imalat süresi çap ve derinliğe bağlı olarak genellikle 4–12 saattir: Ø60 cm × 15 m kazık yaklaşık 4–6 saat, Ø80 cm × 25 m kazık yaklaşık 6–8 saat, Ø100 cm × 30 m kazık yaklaşık 8–12 saat sürer. Kaya delgisi olan projelerde bu süreler 2–3 katına çıkabilir. Günde ortalama 3–5 kazık imal edilir. 50 kazıklık bir proje, mobilizasyon dahil yaklaşık 15–20 iş gününde tamamlanır. CFA kazık yönteminde günlük üretim 8–12 kazığa çıkabilir. Beton kürü, yük testi ve başlık imalatı süresi ayrıca planlanmalıdır.'},
      {q:'Fore kazık yük testi zorunlu mu?',a:'Evet, fore kazık yük testi Türkiye\'de zorunludur. TBDY 2018 ve ilgili şartnamelere göre her projede en az 1 adet (genellikle toplam kazık sayısının %1–2\'si kadar) statik veya dinamik yük testi yapılmalıdır. Statik yük testi (Static Load Test), en güvenilir yöntemdir; kazığa kademeli olarak tasarım yükünün 1,5–2,0 katı yük uygulanır ve oturma miktarları ölçülür. Ayrıca tüm kazıklarda sağlamlık testi (Crosshole Sonic Logging - CSL veya Pile Integrity Test - PIT) uygulanması yaygın uygulamadır. Bu testler, kazık gövdesindeki olası beton kusurlarını (necking, boşluk, segregasyon) tespit eder.'},
    ],
  },
  {
    slug:'mini-kazik', kategoriSlug:'kazikli-temeller',
    title:'Mini Kazık (Mikro Kazık)', shortTitle:'Mini Kazık',
    excerpt:'150–300 mm çaplı küçük eksenli kazık. Dar alanlarda ve mevcut yapı güçlendirmede ideal.',
    image:u(ph[2],480,320), heroImage:u(ph[2],1200,500),
    content:`
      <div class="aeo-box">Mini kazık (mikro kazık); 150–300 mm çaplı, basınçlı enjeksiyonlu küçük eksenli kazık tipidir.</div>
      <h2 id="nedir">Mini Kazık Nedir?</h2>
      <p>Mini kazık, küçük çaplı delgi makinesiyle açılan deliğe donatı yerleştirip çimento enjeksiyonu yapılmasıyla oluşturulur. Taşıma kapasitesi 500 kN–3000 kN arasında değişir. Minimum 2,5 m tavan yüksekliğinde dahi uygulanabilir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul>
        <li>Düşük tavanlı mekânlarda uygulanabilir</li>
        <li>Her yönde (dikey, eğimli) imalat mümkün</li>
        <li>Mevcut temellere minimum hasarla bağlantı</li>
      </ul>`,
    faq:[
      {q:'Mini kazık ile fore kazık arasındaki fark nedir?',a:'Mini kazık 150–300 mm çaplı enjeksiyonlu bir sistemdir; fore kazık ise 400–1500 mm çaplı, yerinde döküm betonarmedir.'},
      {q:'Mevcut yapı bodrum katında uygulanabilir mi?',a:'Evet, kompakt makinelerle minimum 2,5 m tavan yüksekliğinde uygulanabilir.'},
    ],
  },
  {
    slug:'cfa-kazik', kategoriSlug:'kazikli-temeller',
    title:'CFA Kazık (Sürekli Helezon Kazık)', shortTitle:'CFA Kazık',
    excerpt:'Sürekli helis auger ile hızlı kazık imalatı. Yumuşak ve orta sıkılıktaki zeminlerde verimli çözüm.',
    image:u(ph[4],480,320), heroImage:u(ph[4],1200,500),
    content:`
      <div class="aeo-box">CFA (Continuous Flight Auger) kazık; sürekli helezon burgulu delgi ile zemin çıkarılırken eş zamanlı beton basılan hızlı kazık üretim yöntemidir.</div>
      <h2 id="nedir">CFA Kazık Nedir?</h2>
      <p>CFA kazık, sürekli burgu (auger) ile zemine inilerek, burgu çekilirken gövde içinden basınçlı beton enjekte edilmesiyle üretilir. Çap 300–1000 mm, derinlik 25 m'ye kadar uygulanabilir. Muhafaza borusu gerektirmez.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul>
        <li>Yüksek üretim hızı — günde 15–30 kazık</li>
        <li>Düşük titreşim ve gürültü</li>
        <li>Yumuşak kohezyonlu zeminlerde ideal</li>
      </ul>`,
    faq:[
      {q:'CFA kazık hangi zeminlerde uygulanır?',a:'Yumuşak kil, silt ve gevşek kum zeminlerde idealdir. Sert kaya ve iri çakıl formasyonlarında uygulanamaz.'},
      {q:'CFA kazık derinliği sınırı nedir?',a:'Standart uygulamada 20–25 m derinliğe kadar inilebilir. Daha derin projeler için fore kazık tercih edilir.'},
    ],
  },
  {
    slug:'baret-kazik', kategoriSlug:'kazikli-temeller',
    title:'Baret (Dikdörtgen) Kazık', shortTitle:'Baret Kazık',
    excerpt:'Dikdörtgen kesitli derin temel elemanı. Diyafram duvar tekniğiyle üretilen yüksek moment kapasiteli kazık.',
    image:u(ph[6],480,320), heroImage:u(ph[6],1200,500),
    content:`
      <div class="aeo-box">Baret kazık; dikdörtgen kesitli, diyafram duvar makineleri ile üretilen yüksek yük ve moment kapasiteli derin temel elemanıdır.</div>
      <h2 id="nedir">Baret Kazık Nedir?</h2>
      <p>Baret kazık, özel kepçe (grab) veya hidrolik freze ile dikdörtgen profilli hendek kazılıp, bentonit destek sıvısı altında donatı yerleştirilip beton dökülerek üretilir. Tipik boyutlar 0,6×2,8 m ile 1,5×3,5 m arasında değişir.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul>
        <li>Yüksek yatay kuvvetlere maruz köprü temelleri</li>
        <li>Mega yapılar ve gökdelen temelleri</li>
        <li>Aynı anda hem temel hem iksa perdesi işlevi</li>
      </ul>`,
    faq:[
      {q:'Baret kazık ne zaman tercih edilir?',a:'Çok yüksek yatay yükler ve momentler söz konusu olduğunda, dairesel fore kazığın yetersiz kaldığı projelerde tercih edilir.'},
      {q:'Baret kazık derinliği ne kadar olabilir?',a:'Hidrolik freze ile 100 m derinliğe kadar uygulanabilir; standart projelerde 30–60 m arası yaygındır.'},
    ],
  },
  {
    slug:'betonarme-kazik', kategoriSlug:'kazikli-temeller',
    title:'Betonarme Çakma Kazık', shortTitle:'Betonarme Kazık',
    excerpt:'Fabrikada üretilen prefabrik betonarme kazıkların çakma aparatıyla zemine çakılması.',
    image:u(ph[8],480,320), heroImage:u(ph[8],1200,500),
    content:`
      <div class="aeo-box">Betonarme çakma kazık; fabrikada prefabrik olarak üretilen kare veya sekizgen kesitli betonarme kazıkların darbe ile zemine çakılmasıdır.</div>
      <h2 id="nedir">Betonarme Çakma Kazık Nedir?</h2>
      <p>Prefabrik betonarme kazıklar genellikle 250×250 mm ile 500×500 mm kare kesitte üretilir. Dizel veya hidrolik çekiçle zemine çakılır. Yüksek üretim hızı ve düşük birim maliyet avantajı sunar.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul>
        <li>Hızlı uygulama — günde 20–50 kazık</li>
        <li>Fabrika kontrollü kalite</li>
        <li>Uzun kazık boyları (ek yapılabilir)</li>
      </ul>`,
    faq:[
      {q:'Kentsel alanda çakma kazık uygulanabilir mi?',a:'Titreşim ve gürültü nedeniyle kısıtlıdır. Kentsel alanlarda genellikle fore kazık veya CFA kazık tercih edilir.'},
      {q:'Maksimum çakma derinliği ne kadardır?',a:'Zemin koşullarına bağlı olarak 30–40 m derinliğe kadar çakılabilir; ek parçalarla derinlik artırılabilir.'},
    ],
  },
  {
    slug:'cakma-kazik', kategoriSlug:'kazikli-temeller',
    title:'Çelik Çakma Kazık', shortTitle:'Çakma Kazık',
    excerpt:'Çelik H-profil veya boru kazıkların darbe ya da vibrasyonla zemine çakılması.',
    image:u(ph[1],480,320), heroImage:u(ph[1],1200,500),
    content:`
      <div class="aeo-box">Çelik çakma kazık; H-profil, boru veya palplanş şeklindeki çelik elemanların darbe çekici veya vibratörle zemine itilmesidir.</div>
      <h2 id="nedir">Çelik Çakma Kazık Nedir?</h2>
      <p>Çelik kazıklar yüksek mukavemet-ağırlık oranı sayesinde taşıma kapasitesi yüksektir. Korozyon koruması gerektiren kalıcı uygulamalarda epoksi kaplama veya katodik koruma uygulanır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul>
        <li>Liman ve iskele yapıları</li>
        <li>Köprü ayakları ve viyadükler</li>
        <li>Geçici destek yapıları</li>
      </ul>`,
    faq:[
      {q:'Çelik kazıkta korozyon sorunu olur mu?',a:'Kalıcı yapılarda korozyon payı, epoksi kaplama veya katodik koruma ile yönetilir. Geçici kullanımda sorun oluşmaz.'},
      {q:'Çelik ve betonarme çakma kazık farkı nedir?',a:'Çelik kazık daha hafif, taşınması kolay ve ek yapılabilir; betonarme kazık ise daha ekonomik ve korozyona dayanıklıdır.'},
    ],
  },

  // ── 2. İKSA SİSTEMLERİ ──────────────────────────────────────────────────
  {
    slug:'ankrajli-fore-kazik', kategoriSlug:'iksa-sistemleri',
    title:'Ankrajlı Fore Kazıklı İksa', shortTitle:'Ankrajlı Fore Kazık',
    excerpt:'Fore kazık perdesi + öngermeli ankraj kombinasyonu ile derin kazı destek sistemi.',
    image:u(ph[3],480,320), heroImage:u(ph[3],1200,500),
    content:`
      <div class="aeo-box">Ankrajlı fore kazıklı iksa; yan yana fore kazık perdesi ile öngermeli ankrajların birlikte çalıştığı en yaygın derin kazı destek yöntemidir.</div>
      <h2 id="nedir">Nasıl Çalışır?</h2>
      <p>Fore kazıklar 60–120 cm aralıklarla perde oluşturur. Kazı ilerledikçe her kademe için öngermeli ankrajlar yerleştirilir. 30 m derinliğe kadar uygulanabilir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Yüksek kazı derinliklerinde güvenli</li><li>Modüler tasarım — kademe kademe uygulanır</li><li>Kentsel alanlarda yaygın kullanım</li></ul>`,
    faq:[
      {q:'Kaç sıra ankraj gerekir?',a:'Her 3–5 m kazı derinliğine bir sıra ankraj uygulanır. 15 m kazıda tipik olarak 3–4 sıra ankraj gerekir.'},
      {q:'Ankrajlı iksa kalıcı olarak kullanılabilir mi?',a:'Evet, korozyon korumalı kalıcı ankrajlarla birlikte bodrum perde duvarı olarak kullanılabilir.'},
    ],
  },
  {
    slug:'diyafram-duvar', kategoriSlug:'iksa-sistemleri',
    title:'Diyafram Duvar', shortTitle:'Diyafram Duvar',
    excerpt:'Yerinde dökme betonarme perde duvar. Su geçirimsiz, kalıcı bodrum duvarı olarak da kullanılır.',
    image:u(ph[5],480,320), heroImage:u(ph[5],1200,500),
    content:`
      <div class="aeo-box">Diyafram duvar; özel kepçe veya hidrolik frezeyle kazılan hendeklere bentonit destek sıvısı altında donatı yerleştirip beton dökülerek oluşturulan yerinde dökme betonarme perdedir.</div>
      <h2 id="nedir">Diyafram Duvar Nedir?</h2>
      <p>Panel genişliği 2,8–7,0 m, kalınlık 0,6–1,5 m arasında değişir. Hem iksa hem kalıcı bodrum duvarı olarak görev yapar. Su geçirimsizdir ve 100 m derinliğe kadar uygulanabilir.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Metro istasyonları ve yer altı otoparkları</li><li>Yüksek katlı binaların derin bodrum katları</li><li>Su tablası yüksek bölgelerde iksa + geçirimsizlik</li></ul>`,
    faq:[
      {q:'Diyafram duvar ile fore kazıklı iksa farkı nedir?',a:'Diyafram duvar sürekli perde oluşturur ve su geçirmez; fore kazıklı iksa aralıklı kazıklardan oluşur ve geçirimsizlik için ek önlem gerektirebilir.'},
      {q:'Diyafram duvar maliyeti yüksek midir?',a:'Birim maliyeti yüksektir ancak kalıcı bodrum duvarı olarak da kullanıldığında toplam proje maliyetini düşürebilir.'},
    ],
  },
  {
    slug:'slurry-trench', kategoriSlug:'iksa-sistemleri',
    title:'Çamur Hendek (Slurry Trench)', shortTitle:'Slurry Trench',
    excerpt:'Bentonit çamuru destekli derin hendek kazısı ile geçirimsizlik veya iksa perdesi.',
    image:u(ph[7],480,320), heroImage:u(ph[7],1200,500),
    content:`
      <div class="aeo-box">Slurry trench; bentonit süspansiyonu ile desteklenen dar hendek kazılarak çimento-bentonit karışımı ile doldurulmasıyla oluşturulan geçirimsizlik perdesidir.</div>
      <h2 id="nedir">Slurry Trench Nedir?</h2>
      <p>Genellikle 0,6–1,2 m genişliğinde kazılan hendeğe çimento-bentonit harç doldurulur. Geçirimsizlik katsayısı (k) 10⁻⁹ m/s seviyelerine düşürülebilir. 50 m derinliğe kadar uygulanabilir.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Baraj ve gölet altı geçirimsizlik</li><li>Kirli saha izolasyonu</li><li>Yeraltı suyu kontrol perdeleri</li></ul>`,
    faq:[
      {q:'Slurry trench dayanıklılığı ne kadardır?',a:'Doğru tasarım ve malzeme seçimiyle 50 yılı aşan hizmet ömrü sağlanır.'},
      {q:'Hangi derinliklere kadar uygulanabilir?',a:'Standart ekipmanlarla 30 m, özel ekipmanlarla 50 m ve üzeri derinliklere uygulanabilir.'},
    ],
  },
  {
    slug:'berlin-duvari', kategoriSlug:'iksa-sistemleri',
    title:'Berlin Duvarı İksası', shortTitle:'Berlin Duvarı',
    excerpt:'Aralıklı H-profil çelik kazıklar arası ahşap veya beton panellerle ekonomik geçici iksa.',
    image:u(ph[0],480,320), heroImage:u(ph[0],1200,500),
    content:`
      <div class="aeo-box">Berlin duvarı; belirli aralıklarla çakılan çelik H-profil kazıklar arasına ahşap veya beton pano yerleştirilerek oluşturulan ekonomik geçici iksa sistemidir.</div>
      <h2 id="nedir">Berlin İksası Nedir?</h2>
      <p>H-profil kazıklar 1,5–3,0 m aralıklarla çakılır; kazı derinleştikçe araya ahşap kalas veya prefabrik beton paneller yerleştirilir. 8–10 m derinliğe kadar ankrajsız, daha derinde ankrajlı kullanılır.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Düşük maliyet ve hızlı uygulama</li><li>Malzeme geri kazanımı mümkün</li><li>Yeraltı suyu düşük alanlarda ideal</li></ul>`,
    faq:[
      {q:'Berlin duvarı su geçirmez mi?',a:'Hayır, Berlin iksa sistemi su geçirmez değildir. Yüksek su tablası olan alanlarda ek drenaj veya farklı iksa yöntemi gerekir.'},
      {q:'Kalıcı olarak kullanılabilir mi?',a:'Genellikle geçici uygulamalarda kullanılır; kalıcı iksa için fore kazıklı veya diyafram duvar tercih edilir.'},
    ],
  },
  {
    slug:'palplans', kategoriSlug:'iksa-sistemleri',
    title:'Palplanş İksa', shortTitle:'Palplanş',
    excerpt:'Kilitli çelik profil palplanş kazıkların vibrasyonlu çakma ile su geçirimsiz iksa perdesi.',
    image:u(ph[2],480,320), heroImage:u(ph[2],1200,500),
    content:`
      <div class="aeo-box">Palplanş iksa; U veya Z profilli çelik palplanş kazıkların birbirine kilitlenmesiyle oluşturulan su geçirimsiz geçici veya kalıcı iksa perdesidir.</div>
      <h2 id="nedir">Palplanş İksa Nedir?</h2>
      <p>Vibratör veya darbe çekici ile zemine çakılan çelik profiller kilit sistemiyle birbirine bağlanır. Su geçirimsizdir ve geri çekilebilir. 12–15 m derinliğe kadar uygulanır.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Su geçirimsiz sürekli perde</li><li>Sökülebilir ve yeniden kullanılabilir</li><li>Hızlı kurulum süresi</li></ul>`,
    faq:[
      {q:'Palplanş geri çekilebilir mi?',a:'Evet, geçici iksa uygulamalarında vibratör ile çekilerek yeniden kullanılabilir.'},
      {q:'Kaya zeminlerde uygulanabilir mi?',a:'Sert kaya formasyonlarında çakma zorlaşır; bu durumlarda fore kazıklı iksa tercih edilir.'},
    ],
  },
  {
    slug:'secant-pile', kategoriSlug:'iksa-sistemleri',
    title:'Kesişen Kazıklı (Secant Pile) İksa', shortTitle:'Secant Pile',
    excerpt:'Birbirine bindirmeli fore kazıklar ile su geçirimsiz sürekli iksa perdesi.',
    image:u(ph[4],480,320), heroImage:u(ph[4],1200,500),
    content:`
      <div class="aeo-box">Secant pile; önce düşük mukavemetli dolgu kazıklar, ardından aralarına donatılı ana kazıklar yapılarak sürekli su geçirimsiz perde oluşturulan iksa yöntemidir.</div>
      <h2 id="nedir">Secant Pile Nedir?</h2>
      <p>İlk aşamada birincil (dişi) kazıklar düşük mukavemetli betonla üretilir; beton sertleşmeden ikincil (erkek) kazıklar bindirme ile keserek sürekli perde oluşturur. Çap 600–1200 mm arasındadır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Metro istasyonları ve yer altı yapıları</li><li>Yüksek su tablası olan bölgelerde derin kazı</li><li>Kalıcı bodrum perde duvarı</li></ul>`,
    faq:[
      {q:'Secant pile ile tangent pile farkı nedir?',a:'Secant pile kazıklar birbirine biner (su geçirmez); tangent pile kazıklar temas eder ama bindirmez (su geçirebilir).'},
      {q:'Secant pile ne kadar su geçirmez?',a:'Doğru uygulama ile yüksek su geçirimsizlik sağlar; ancak birleşim noktaları kritiktir ve kalite kontrolü gerektirir.'},
    ],
  },
  {
    slug:'mini-kazikli-iksa', kategoriSlug:'iksa-sistemleri',
    title:'Mini Kazıklı İksa', shortTitle:'Mini Kazıklı İksa',
    excerpt:'Dar alanlarda mikro kazıklarla hafif iksa perdesi oluşturma.',
    image:u(ph[6],480,320), heroImage:u(ph[6],1200,500),
    content:`
      <div class="aeo-box">Mini kazıklı iksa; sınırlı çalışma alanlarında 150–300 mm çaplı mikro kazıkların perde oluşturacak şekilde uygulanmasıdır.</div>
      <h2 id="nedir">Mini Kazıklı İksa Nedir?</h2>
      <p>Dar sokaklar, bodrum katlar ve mevcut yapı bitişiğinde büyük makinelerin giremediği alanlarda uygulanır. Ankraj veya strüt ile desteklenerek 8–12 m derinliğe kadar iksa sağlar.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Kompakt ekipman — 2,5 m tavan yüksekliğinde çalışır</li><li>Mevcut yapılara minimum hasar</li><li>Esnek yerleşim planı</li></ul>`,
    faq:[
      {q:'Hangi kazı derinliğine kadar uygulanır?',a:'Ankraj destekli olarak 12 m, ankrajsız olarak 5–6 m derinliğe kadar uygulanabilir.'},
      {q:'Su geçirimsizlik sağlar mı?',a:'Tek başına su geçirmez değildir; su geçirimsizlik için jet grout veya enjeksiyon kombinasyonu gerekir.'},
    ],
  },
  {
    slug:'toprakarme-duvar', kategoriSlug:'iksa-sistemleri',
    title:'Toprakarme Duvar (MSE)', shortTitle:'Toprakarme Duvar',
    excerpt:'Geosentetik donatılı zemin yapısı ile esnek ve ekonomik dayanma duvarı.',
    image:u(ph[8],480,320), heroImage:u(ph[8],1200,500),
    content:`
      <div class="aeo-box">Toprakarme duvar (MSE — Mechanically Stabilized Earth); zemin dolgu ile geosentetik veya çelik şerit donatıların katmanlı olarak birleştirilmesiyle oluşturulan esnek dayanma yapısıdır.</div>
      <h2 id="nedir">Toprakarme Duvar Nedir?</h2>
      <p>30–50 cm aralıklı donatı katmanları ile sıkıştırılmış granüler dolgu yerleştirilir. Ön yüzey prefabrik beton panel veya tel kafes ile kaplanır. 30 m yüksekliğe kadar uygulanabilir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Betonarme istinat duvarına göre %30–50 ekonomik</li><li>Deprem yüklerine esnek davranış</li><li>Hızlı inşa süreci</li></ul>`,
    faq:[
      {q:'Toprakarme duvar kalıcı mıdır?',a:'Evet, uygun malzeme seçimi ile 75–100 yıl tasarım ömrü sağlanır.'},
      {q:'Hangi dolgu malzemesi kullanılır?',a:'İyi derecelenmiş granüler dolgu (kum-çakıl) tercih edilir; kil ve organik zeminler kullanılmaz.'},
    ],
  },
  {
    slug:'puskurtme-beton', kategoriSlug:'iksa-sistemleri',
    title:'Püskürtme Beton (Shotcrete)', shortTitle:'Püskürtme Beton',
    excerpt:'Basınçlı beton püskürtme ile şev yüzeyi kaplaması ve iksa destek katmanı.',
    image:u(ph[1],480,320), heroImage:u(ph[1],1200,500),
    content:`
      <div class="aeo-box">Püskürtme beton (shotcrete); yüksek basınçlı hava veya pompa ile beton karışımının doğrudan yüzeye püskürtülmesiyle uygulanan yapısal kaplama yöntemidir.</div>
      <h2 id="nedir">Püskürtme Beton Nedir?</h2>
      <p>Kuru veya yaş karışım yöntemiyle uygulanır. Kalınlık genellikle 8–15 cm arasındadır. Çelik hasır veya lif takviyesi ile birlikte kullanılarak yapısal dayanım sağlar.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>İksa şev yüzeyi kaplaması</li><li>Tünel iç yüzey desteği</li><li>Mevcut yapı onarımı</li></ul>`,
    faq:[
      {q:'Püskürtme beton dayanımı ne kadardır?',a:'28 günlük basınç dayanımı C25/30 – C40/50 arasında tasarlanır; lif takviyeli uygulamalarda çekme dayanımı da artar.'},
      {q:'Kalınlığı ne olmalıdır?',a:'İksa uygulamalarında tipik olarak 8–15 cm, tünel uygulamalarında 20–30 cm kalınlık uygulanır.'},
    ],
  },

  // ── 3. ZEMİN İYİLEŞTİRME ───────────────────────────────────────────────
  {
    slug:'jet-grout', kategoriSlug:'zemin-iyilestirme',
    title:'Jet Grout Nedir? Uygulama, Avantajlar ve 2026 Fiyatları', shortTitle:'Jet Grout',
    excerpt:'Jet grout (soilcrete) nedir, nasıl yapılır? Jet1-Jet2-Jet3 farkları, kolon çapları, fiyatları ve uygulama alanları. Saha deneyimiyle Torem Zemin',
    image:'/images/jet-grout/jet-grout-hero.webp', heroImage:'/images/jet-grout/jet-grout-hero.webp',
    content:`<nav class="toc" aria-label="İçindekiler">
<h2 class="toc__title">İçindekiler</h2>
<ol class="toc__list">
<li><a href="#jet-grout-nedir">Jet Grout (Soilcrete) Nedir?</a></li>
<li><a href="#jet-grout-nasil-yapilir">Nasıl Yapılır? Uygulama Adımları</a></li>
<li><a href="#jet1-jet2-jet3-sistemleri">Jet1, Jet2, Jet3 Sistemleri</a></li>
<li><a href="#hangi-zeminlerde-uygulanir">Hangi Zeminlerde Uygulanır?</a></li>
<li><a href="#jet-grout-uygulama-alanlari">Uygulama Alanları</a></li>
<li><a href="#jet-grout-avantajlari">Avantajları ve Sınırlamaları</a></li>
<li><a href="#jet-grout-kolon-parametreleri">Kolon Parametreleri</a></li>
<li><a href="#fore-kazik-ile-jet-grout-farklari">Fore Kazık ile Farkları</a></li>
<li><a href="#jet-grout-fiyatlari-2026">Fiyatları 2026</a></li>
<li><a href="#kalite-kontrol-ve-testler">Kalite Kontrol ve Testler</a></li>
<li><a href="#deprem-bolgelerinde-jet-grout">Deprem Bölgelerinde Jet Grout</a></li>
<li><a href="#sik-sorulan-sorular-sss">Sık Sorulan Sorular</a></li>
</ol>
</nav>

<h2 id="jet-grout-nedir">Jet Grout (Soilcrete) Nedir?</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout, yüksek basınçlı (300–600 bar) çimento şerbetinin özel nozzle\'lardan zemine enjekte edilerek zemin partikülleriyle karıştırılması ve yerinde silindirik çimento-zemin kolonları (soilcrete) oluşturulması yöntemidir. TS EN 12716 standardına göre tasarlanır ve uygulanır.</div>

<p>Jet grout, geoteknik mühendisliğin en çok yönlü zemin iyileştirme tekniklerinden biridir. Yöntemin temelinde yüksek enerjili akışkan jetinin zemin yapısını parçalayarak çimento ile karıştırması yatar. Ortaya çıkan çimento-zemin karışımı (soilcrete), doğal zeminden çok daha yüksek dayanıma sahiptir.</p>
<div class="saha-notu">
<strong>📋 Mevzuat Notu:</strong> TS EN 12716 standardı, jet grout uygulamasının her aşamasını düzenler — deneme kolonundan parametre izlemeye kadar. Sahada bu standardın en çok atlanan maddesi: deneme kolonu yapılmadan üretime geçilmesi. Yönetmelik buna izin vermez, ama bütçe baskısıyla atlayan firmalar var. Sonucu: kolon çapı tutmaz, dayanım düşer, perde sızar.
</div>

<p>Jet grout terimi, İngilizce "jet" (yüksek basınçlı akışkan püskürtme) ve "grout" (çimento şerbeti) kelimelerinden türetilmiştir. Uluslararası literatürde "soilcrete" veya "jet grouting" olarak da bilinir. Türkiye\'de yaygın kullanımı 1990\'lı yılların sonunda başlamış, özellikle İstanbul metro projeleri ve büyük ölçekli <a href="/faaliyet-alanlari/iksa-sistemleri/">derin kazı</a> uygulamalarıyla hız kazanmıştır.</p>

<div class="stat-row">
  <div class="stat-card"><span class="stat-number">300–600</span><span class="stat-label">Bar Basınç</span></div>
  <div class="stat-card"><span class="stat-number">30–250</span><span class="stat-label">cm Kolon Çapı</span></div>
  <div class="stat-card"><span class="stat-number">35+</span><span class="stat-label">m Maks. Derinlik</span></div>
  <div class="stat-card"><span class="stat-number">5–30</span><span class="stat-label">MPa Basınç Dayanımı</span></div>
</div>

<figure><img src="/images/jet-grout/jet-grout-hero.webp" alt="Jet grout uygulama şantiyesi — yüksek basınçlı enjeksiyon ekipmanı çalışırken" loading="eager" fetchpriority="high" decoding="async" width="860" height="860" /><figcaption>Jet grout uygulaması — yüksek basınçlı çimento enjeksiyonu ile zemin iyileştirme</figcaption></figure>
<h3>Jet Grout Çalışma Prensibi</h3>
<p>Jet grout uygulaması iki aşamadan oluşur. İlk aşamada, bir delgi makinesi ile hedef derinliğe kadar delgi yapılır. İkinci aşamada, delgi kolu zemin içinden yukarıya çekilirken, monitor ucundaki nozzle\'lardan yüksek basınçlı çimento şerbeti (ve sisteme bağlı olarak hava ve/veya su) zemine enjekte edilir.</p>

<p>Yüksek hızlı jet akımı zemin yapısını parçalar (erozyon etkisi) ve parçalanan zemin partikülleri çimento şerbeti ile karışarak soilcrete kolonu oluşur. Enjeksiyon sırasında delgi kolu hem döner (rotasyon) hem de yukarı çekilir, böylece silindirik bir kolon meydana gelir. Kolon çapı; basınç, çekme hızı, dönme hızı ve zemin türüne bağlı olarak 30 cm\'den 250 cm\'ye kadar değişir.</p>

<p>Jet grout kolonlarının basınç dayanımı zemin tipine göre 5–30 MPa arasında değişir. Kumlu zeminlerde daha yüksek, killi zeminlerde daha düşük dayanım elde edilir. Bu değerler, aynı zeminde yapılan klasik çimento enjeksiyonuna kıyasla 5–10 kat daha yüksektir.</p>

<h2 id="jet-grout-nasil-yapilir">Jet Grout Nasıl Yapılır? Uygulama Adımları</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout uygulaması dört temel aşamadan oluşur: çalışma platformu hazırlığı ve delgi, yüksek basınçlı enjeksiyon ile kolon oluşturma, spoil (artık malzeme) yönetimi ve kalite kontrol testleri. Her aşama TS EN 12716 standardına uygun olarak yürütülür.</div>

<figure><img src="/images/jet-grout/svg_jet_grout_akis.svg" alt="Jet grout uygulama akış şeması — delme, enjeksiyon, kolon oluşumu ve kalite kontrol adımları" loading="lazy" decoding="async" width="860" height="620" /><figcaption>Jet grout uygulama süreci — 4 temel aşama ve parametreler</figcaption></figure>
<figure><img src="/images/jet-grout/jet-grout-enjeksiyon.webp" alt="Jet grout enjeksiyon anı — yüksek basınçlı çimento şerbeti nozzle'dan zemine enjekte ediliyor" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Yüksek basınçlı enjeksiyon — çimento şerbeti 300–600 bar basınçla zemine enjekte edilirken</figcaption></figure>
<div class="saha-notu">
<strong>⚠️ Saha Uyarısı:</strong> Spoil (artık malzeme) çıkışı aniden durursa ALARM: kuyu içi basınç tehlikeli şekilde artmış demektir. Çevre zeminde istenmeyen kabarmalar ve yüzey kalkmaları başlayabilir. Spoil kanalının tıkanmaması için delgi çapı yeterli genişlikte olmalı ve spoil akışı sürekli izlenmeli. Tıkanma fark edilirse enjeksiyon derhal durdurulmalı.
</div>
<div class="process-steps">
  <div class="step">
    <div><h4>Delme Aşaması</h4>
    <p>Jet grout uygulamasının ilk aşamasında, çalışma platformu hazırlanır ve kolon noktaları aplikasyon planına göre işaretlenir. Delgi makinesi, hedef derinliğe kadar döner delgi (rotary drilling) yöntemiyle zemine girer. Delgi çapı genellikle 90–150 mm arasındadır. Delgi sırasında <a href="/faaliyet-alanlari/geoteknik-proje/zemin-etudu/">zemin profili</a> gözlemlenir ve tasarım parametreleri son kez doğrulanır.</p>
    <p>Delgi derinliği proje gereksinimlerine göre 5 m ile 35+ m arasında değişir. Delgi sırasında yeraltı suyu seviyesi, zemin geçişleri ve olası engeller (eski temel, kaya blokları) kaydedilir.</p>
    </div>
  </div>
  <div class="step">
    <div><h4>Yüksek Basınçlı Enjeksiyon</h4>
    <p>Hedef derinliğe ulaşıldıktan sonra, delgi kolu yukarıya doğru çekilmeye başlanır. Bu sırada monitor ucundaki nozzle\'lardan 300–600 bar basınçla çimento şerbeti zemine enjekte edilir. Jet akımı, 100–300 m/s hızla zemine çarparak zemin yapısını parçalar ve çimento ile karıştırır.</p>
    <p>Delgi kolunun çekme hızı (genellikle 3–10 cm/dk) ve dönme hızı (6–30 devir/dk) kolon çapını ve kalitesini doğrudan etkiler. Yavaş çekme ve yavaş dönme daha geniş çaplı kolonlar oluşturur. Enjeksiyon parametreleri (basınç, debi, çekme hızı, dönme hızı) deneme kolonunda belirlenen değerlere göre sabitlenir.</p>
    </div>
  </div>
  <div class="step">
    <div><h4>Kolon Oluşumu ve Spoil Yönetimi</h4>
    <p>Enjeksiyon sırasında zemin-çimento karışımının bir kısmı yer yüzeyine çıkar; buna "spoil" veya "return" denir. Spoil miktarı zemin tipine ve sisteme göre toplam enjeksiyon hacminin %30–%70\'i kadar olabilir. Spoil; zemin partikülleri, çimento ve su karışımından oluşur ve çevresel düzenlemelere uygun şekilde bertaraf edilmelidir.</p>
    <p>Spoil\'un serbest akışı kolon kalitesi için kritiktir. Spoil çıkışının engellenmesi kuyu içi basınç artışına ve çevre zeminlerde istenmeyen kabarmalara yol açabilir. Bu nedenle delgi çapının yeterli genişlikte olması ve spoil kanalının açık tutulması gerekir.</p>
    </div>
  </div>
  <div class="step">
    <div><h4>Kalite Kontrol</h4>
    <p>Üretim öncesinde mutlaka deneme kolonu (test column) yapılır. Deneme kolonu; tasarım parametrelerinin sahadaki gerçek koşullarda doğrulanması, kolon çapının ölçülmesi ve dayanım değerlerinin tespiti için zorunludur. TS EN 12716, deneme kolonu yapılmadan üretime geçilmesini uygun görmez.</p>
    <p>Üretim kolonlarında kalite kontrol; enjeksiyon parametrelerinin gerçek zamanlı izlenmesi (basınç, debi, hız kayıtları), kolon başlarından karot alınması ve tek eksenli basınç dayanımı testi, gerektiğinde yükleme deneyi ile yapılır.</p>
    </div>
  </div>
</div>

<h2 id="jet1-jet2-jet3-sistemleri">Jet1, Jet2, Jet3 Sistemleri ve Karşılaştırma</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout üç farklı sistemle uygulanır: Jet1 (tek akışkan — sadece çimento), Jet2 (çift akışkan — çimento + hava) ve Jet3 (üç akışkan — su + hava + çimento). Jet1 en basit ve ekonomik, Jet3 en geniş çaplı kolonlar üretir. Sistem seçimi zemin tipine, hedef kolon çapına ve proje gereksinimlerine göre yapılır.</div>

<figure><img src="/images/jet-grout/svg_jet_grout_sistemler.svg" alt="Jet1, Jet2, Jet3 sistem karşılaştırması — kolon çapları, basınç değerleri ve uygun zemin tipleri" loading="lazy" decoding="async" width="860" height="520" /><figcaption>Jet grout sistemleri karşılaştırması — Jet1 (tek), Jet2 (çift) ve Jet3 (üç akışkan)</figcaption></figure>
<figure><img src="/images/jet-grout/jet-grout-kolon.webp" alt="Jet grout kolonu yakın çekim — soilcrete kolon yapısı ve çimento-zemin karışım detayı" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Jet grout kolonu — çimento ve zemin partiküllerinin karışımıyla oluşan soilcrete yapısı</figcaption></figure>
<div class="saha-notu">
<strong>💡 Pratik İpucu:</strong> Sistem seçimi sahada hızlı karar gerektiren bir süreçtir. Deneme kolonu Jet2 ile yapıldı ama hedef çapa ulaşılamadıysa, aynı proje içinde Jet3\'e geçiş kararı verilmeli. Zemin profili değiştikçe sistem de değişebilir — tek bir projede hem Jet1 hem Jet3 kullanıldığı oluyor. Esnek olmayan firmalar projeyi riske atar.
</div>
<div class="card-grid">
  <div class="grid-card">
    <h4>Jet1 — Tek Akışkan Sistemi</h4>
    <p>Sadece çimento şerbeti kullanılır. Nozzle\'dan çıkan yüksek basınçlı çimento jeti hem zemin parçalama hem karıştırma işini üstlenir. En basit ve ekonomik sistemdir. Kumlu ve gevşek zeminlerde etkilidir. Kolon çapı 30–80 cm arasındadır. Nozzle çapı: 1,5–2,5 mm. Çakıllı veya sert killi zeminlerde erozyon kapasitesi sınırlı kalabilir.</p>
  </div>
  <div class="grid-card">
    <h4>Jet2 — Çift Akışkan Sistemi</h4>
    <p>Çimento şerbeti ve basınçlı hava birlikte kullanılır. Hava, çimento jetinin etki yarıçapını artırır — jet akımının çevresinde bir hava kılıfı oluşturarak sürtünme kaybını azaltır ve erozyon mesafesini uzatır. Kolon çapı 60–120 cm arasındadır. Nozzle çapı: 2,0–3,0 mm. Siltli ve killi zeminlerde Jet1\'e göre daha etkin sonuç verir.</p>
  </div>
  <div class="grid-card">
    <h4>Jet3 — Üç Akışkan Sistemi</h4>
    <p>Su, hava ve çimento şerbeti olmak üzere üç akışkan kullanılır. İlk aşamada yüksek basınçlı su + hava jeti zemini parçalar, ardından alt nozzle\'dan çimento şerbeti enjekte edilerek parçalanmış zemin ile karıştırılır. En geniş çaplı kolonları üretir: 80–250 cm. Nozzle çapı: 2,5–4,0 mm. Tüm zemin tiplerinde uygulanabilir ancak en karmaşık ve maliyetli sistemdir.</p>
  </div>
</div>

<div class="table-wrapper"><table>
<thead><tr><th>Parametre</th><th>Jet1 (Tek)</th><th>Jet2 (Çift)</th><th>Jet3 (Üç)</th></tr></thead>
<tbody>
<tr><td><strong>Akışkan</strong></td><td>Çimento</td><td>Çimento + Hava</td><td>Su + Hava + Çimento</td></tr>
<tr><td><strong>Kolon Çapı</strong></td><td>30–80 cm</td><td>60–120 cm</td><td>80–250 cm</td></tr>
<tr><td><strong>Enjeksiyon Basıncı</strong></td><td>300–400 bar</td><td>300–500 bar</td><td>400–600 bar</td></tr>
<tr><td><strong>Nozzle Çapı</strong></td><td>1,5–2,5 mm</td><td>2,0–3,0 mm</td><td>2,5–4,0 mm</td></tr>
<tr><td><strong>Uygun Zemin</strong></td><td>Kum, gevşek silt</td><td>Silt, kil, kum</td><td>Tüm zemin tipleri</td></tr>
<tr><td><strong>Maliyet</strong></td><td>Düşük</td><td>Orta</td><td>Yüksek</td></tr>
<tr><td><strong>Spoil Miktarı</strong></td><td>Düşük</td><td>Orta</td><td>Yüksek</td></tr>
<tr><td><strong>Standart</strong></td><td>TS EN 12716</td><td>TS EN 12716</td><td>TS EN 12716</td></tr>
</tbody>
</table></div>

<h2 id="hangi-zeminlerde-uygulanir">Hangi Zeminlerde Uygulanır?</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout; kum, silt, kil ve çakıl içeren zeminlerde uygulanır. Gevşek kumlu zeminlerde en yüksek verim elde edilirken, sert plastik killer ve organik topraklarda etkinliği düşer. Çok sert kaya formasyonlarında uygulanamaz.</div>
<div class="saha-notu">
<strong>🔍 Zemin Okuma:</strong> Sondaj logunda plastisite indeksi (PI) 40\'ın üzerinde çıkan kil tabakaları gördüğünüzde jet grout verimliliği ciddi düşer. Jet akımı bu killeri yeterince parçalayamaz — kolon çapı beklenenden %30-40 küçük kalır. Bu tabakalarda deep soil mixing veya alternatif yöntem düşünülmeli. Zemin etüdünü okumadan jet grout teklifi veren firmaya güvenmeyin.
</div>

<div class="table-wrapper"><table>
<thead><tr><th>Zemin Tipi</th><th>Uygunluk</th><th>Önerilen Sistem</th><th>Beklenen Kolon Çapı</th><th>Beklenen Dayanım</th></tr></thead>
<tbody>
<tr><td><strong>Gevşek kum</strong></td><td>Çok iyi</td><td>Jet1 veya Jet2</td><td>60–150 cm</td><td>15–30 MPa</td></tr>
<tr><td><strong>Sıkı kum</strong></td><td>İyi</td><td>Jet2 veya Jet3</td><td>50–120 cm</td><td>12–25 MPa</td></tr>
<tr><td><strong>Silt</strong></td><td>İyi</td><td>Jet2</td><td>50–100 cm</td><td>8–20 MPa</td></tr>
<tr><td><strong>Yumuşak kil</strong></td><td>Orta</td><td>Jet2 veya Jet3</td><td>40–100 cm</td><td>5–12 MPa</td></tr>
<tr><td><strong>Sert kil</strong></td><td>Düşük-Orta</td><td>Jet3</td><td>40–80 cm</td><td>5–10 MPa</td></tr>
<tr><td><strong>Çakıl</strong></td><td>Orta</td><td>Jet3</td><td>60–120 cm</td><td>10–20 MPa</td></tr>
<tr><td><strong>Organik toprak</strong></td><td>Uygulanmaz</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td><strong>Sert kaya</strong></td><td>Uygulanmaz</td><td>—</td><td>—</td><td>—</td></tr>
</tbody>
</table></div>

<div class="expert-tip"><strong>Uzman Notu:</strong> Organik içeriği %5\'in üzerinde olan zeminlerde çimento-zemin bağı yeterli oluşmaz. Aşırı plastik killerde (PI > 40) erozyon verimliliği düşer ve kolon çapı küçülür. Bu zeminlerde jet grout yerine derin karıştırma (deep soil mixing) veya <a href="/faaliyet-alanlari/zemin-iyilestirme/tas-kolon/">taş kolon</a> gibi alternatif yöntemler değerlendirilmelidir.</div>

<figure><img src="/images/jet-grout/jet-grout-uygulama.webp" alt="Jet grout uygulama alanı — derin kazı çevresinde geçirimsizlik perdesi oluşturma" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Jet grout uygulama alanı — derin kazı projesinde geçirimsizlik perdesi oluşturulması</figcaption></figure>

<h2 id="jet-grout-uygulama-alanlari">Jet Grout Uygulama Alanları</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout; temel takviyesi, geçirimsizlik perdesi, tünel ön destekleme, sıvılaşma önleme, iksa perdesi ve mevcut yapı altı iyileştirme gibi çok çeşitli geoteknik uygulamalarda kullanılır.</div>
<div class="saha-notu">
<strong>🏗️ Saha Deneyimi:</strong> Derin kazı projelerinde jet grout perdesi uygulanırken en sık yapılan hata, kolon bindirme mesafesini yetersiz tutmaktır. Kolonlar arası sızıntıyı önlemek için minimum 15–20 cm bindirme şarttır — bazı zeminlerde bu 30 cm\'ye çıkar. Bindirme yetersizse perde "elek" gibi su geçirir ve kazı tabanı su altında kalır. Perdede her kolonun as-built koordinatı kaydedilmeli ve sapma toleransı (±50 mm) aşılmamalıdır.
</div>

<div class="card-grid">
  <div class="grid-card">
    <h4>Temel Takviyesi ve Güçlendirme</h4>
    <p>Mevcut yapı temellerinin taşıma kapasitesinin artırılması veya oturma kontrolü için kullanılır. Jet grout kolonları mevcut temelin altında veya yanında oluşturularak yük aktarımı iyileştirilir. Dar alanlarda ve düşük tavanlı bodrumlarda bile uygulanabilir.</p>
  </div>
  <div class="grid-card">
    <h4>Geçirimsizlik Perdesi (Cut-off Wall)</h4>
    <p>Derin kazı çevresinde veya baraj altında yeraltı suyu geçişini engellemek için jet grout kolonları üst üste bindirilerek sürekli perde oluşturulur. <a href="/faaliyet-alanlari/gecirimsizlik-perdeleri/jet-grout-perdesi/">Jet grout perdesi</a>, geçirimsizlik koşullarının kritik olduğu projelerde tercih edilir.</p>
  </div>
  <div class="grid-card">
    <h4>Tünel Ayna Destekleme</h4>
    <p>Tünel kazısında ayna stabilitesinin sağlanması için tünel güzergahının önünde jet grout kolonları oluşturulur. Özellikle gevşek ve suya doygun zeminlerde tünel imalatının güvenliğini artırır. Metro, karayolu tüneli ve altyapı projelerinde yaygın olarak kullanılır.</p>
  </div>
  <div class="grid-card">
    <h4>Sıvılaşma Önleme</h4>
    <p>Deprem riski yüksek bölgelerde, gevşek kumlu ve suya doygun zeminlerin sıvılaşma potansiyelini azaltmak için jet grout kolonları ile zeminin rijitliği artırılır. TBDY 2018\'e göre sıvılaşma riski tespit edilen sahalarda kullanılan yaygın iyileştirme yöntemlerinden biridir.</p>
  </div>
  <div class="grid-card">
    <h4>İksa Perdesi Desteği</h4>
    <p><a href="/faaliyet-alanlari/iksa-sistemleri/">İksa sistemi</a> tabanında sızıntı kontrolü veya iksa perdesi önünde takviye amacıyla jet grout uygulanır. Derin kazı projelerinde kazı tabanının kabarmasını (heave) önlemek için de taban iyileştirmesi yapılır.</p>
  </div>
  <div class="grid-card">
    <h4>Mevcut Yapı Altı İyileştirme</h4>
    <p>Jet grout; düşük titreşim ve küçük ekipman boyutuyla mevcut yapı altında güvenle uygulanabilir. Bina bodrum katı içinden dahi çalışılabilir. Tarihi yapıların temel güçlendirmesinde tercih edilen yöntemlerden biridir.</p>
  </div>
</div>

<figure><img src="/images/jet-grout/jet-grout-santiye.webp" alt="Jet grout şantiyesi panorama — çoklu enjeksiyon ekipmanı eş zamanlı çalışıyor" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Büyük ölçekli jet grout projesi — çoklu ekipman eş zamanlı operasyonu</figcaption></figure>

<h2 id="jet-grout-avantajlari">Jet Grout Avantajları ve Sınırlamaları</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout\'un en büyük avantajları dar alanlarda uygulanabilmesi, düşük titreşim üretmesi ve mevcut yapı altında çalışabilmesidir. Sınırlamaları arasında organik zeminlerde düşük verim, kolon çapı kontrolündeki belirsizlik ve spoil yönetimi yer alır.</div>

<div class="pros-cons">
  <div class="pros"><h4>Avantajları</h4><ul>
    <li>Dar ve kısıtlı alanlarda uygulanabilir (mevcut yapı altı, bodrum)</li>
    <li>Düşük titreşim — kentsel alanlarda ve mevcut yapılara yakın güvenli</li>
    <li>Her derinlikte uygulanabilir (5–35+ m)</li>
    <li>Çok yönlü — temel takviye, perde, sıvılaşma önleme</li>
    <li>Zemin tipinden bağımsız geniş uygulama yelpazesi</li>
    <li>Hızlı mobilizasyon ve uygulama</li>
    <li>Mevcut yapı altında sökme/yıkma gerektirmez</li>
  </ul></div>
  <div class="cons"><h4>Sınırlamaları</h4><ul>
    <li>Kolon çapı zemine bağlı değişkenlik gösterir — kontrol sınırlıdır</li>
    <li>Organik toprak ve aşırı plastik killerde düşük verim</li>
    <li>Spoil (artık malzeme) yönetimi gerektirir</li>
    <li>Çimento tüketimi yüksek olabilir (özellikle Jet3)</li>
    <li>Deneme kolonu olmadan üretim parametreleri belirlenemez</li>
    <li>Yeraltı yapılarına (boru hatları, kablolar) zarar riski</li>
  </ul></div>
</div>

<h2 id="jet-grout-kolon-parametreleri">Jet Grout Kolon Parametreleri</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout kolon parametreleri; enjeksiyon basıncı (300–600 bar), çimento debisi (80–300 lt/dk), çekme hızı (3–10 cm/dk), dönme hızı (6–30 devir/dk) ve nozzle çapı (1,5–4,0 mm) ile kontrol edilir. Bu parametreler <a href="/faaliyet-alanlari/geoteknik-test-izleme/">deneme kolonunda</a> optimize edilir.</div>

<figure><img src="/images/jet-grout/svg_jet_grout_kesit.svg" alt="Jet grout kolon kesit diyagramı — zemin katmanları içinde soilcrete kolon yapısı" loading="lazy" decoding="async" width="860" height="620" /><figcaption>Jet grout kolon kesit görünümü — zemin katmanlarını geçerek sağlam zemine ulaşan soilcrete kolon</figcaption></figure>
<figure><img src="/images/jet-grout/jet-grout-ekipman.webp" alt="Jet grout ekipmanı — yüksek basınçlı pompa ünitesi ve enjeksiyon hortumları" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Jet grout ekipmanı — yüksek basınçlı pompa ünitesi ve enjeksiyon sistemi</figcaption></figure>
<div class="table-wrapper"><table>
<thead><tr><th>Parametre</th><th>Jet1</th><th>Jet2</th><th>Jet3</th><th>Birim</th></tr></thead>
<tbody>
<tr><td><strong>Enjeksiyon Basıncı</strong></td><td>300–400</td><td>300–500</td><td>400–600</td><td>bar</td></tr>
<tr><td><strong>Çimento Debisi</strong></td><td>80–150</td><td>100–200</td><td>150–300</td><td>lt/dk</td></tr>
<tr><td><strong>Hava Basıncı</strong></td><td>—</td><td>6–12</td><td>6–12</td><td>bar</td></tr>
<tr><td><strong>Hava Debisi</strong></td><td>—</td><td>3.000–6.000</td><td>3.000–6.000</td><td>lt/dk</td></tr>
<tr><td><strong>Su Basıncı</strong></td><td>—</td><td>—</td><td>350–600</td><td>bar</td></tr>
<tr><td><strong>Çekme Hızı</strong></td><td>5–10</td><td>4–8</td><td>3–6</td><td>cm/dk</td></tr>
<tr><td><strong>Dönme Hızı</strong></td><td>10–30</td><td>8–25</td><td>6–20</td><td>devir/dk</td></tr>
<tr><td><strong>Nozzle Çapı</strong></td><td>1,5–2,5</td><td>2,0–3,0</td><td>2,5–4,0</td><td>mm</td></tr>
<tr><td><strong>Nozzle Sayısı</strong></td><td>1–2</td><td>1–2</td><td>1 (su) + 1 (çimento)</td><td>adet</td></tr>
<tr><td><strong>Kolon Çapı</strong></td><td>30–80</td><td>60–120</td><td>80–250</td><td>cm</td></tr>
</tbody>
</table></div>

<div class="expert-tip"><strong>Uzman Notu:</strong> TS EN 12716\'ya göre deneme kolonu yapılmadan üretime geçilmemeli. Deneme kolonunda belirlenen optimum parametreler, üretim boyunca gerçek zamanlı izleme sistemiyle kontrol altında tutulmalıdır. Basınç ve debi kayıtları dijital olarak loglanmalıdır.</div>

<h3>Çimento Şerbeti Özellikleri</h3>
<p>Jet grout uygulamasında kullanılan çimento şerbetinin su/çimento (S/Ç) oranı genellikle 0,8–1,2 arasındadır. Düşük S/Ç oranı daha yüksek dayanım sağlar ancak pompanabilirliği azaltır. CEM I 42,5R veya CEM II tipi çimentolar yaygın kullanılır. Özel durumlarda (sülfatlı zeminler) sülfata dayanıklı çimento (SRC) tercih edilir.</p>

<p>Çimento tüketimi zemin tipine ve sisteme göre değişir: Jet1 sisteminde metre başına 200–400 kg, Jet2\'de 300–600 kg, Jet3\'te 400–800 kg çimento tüketimi beklenir. Büyük projelerde çimento tüketimi toplam maliyetin %30–%40\'ını oluşturabilir.</p>

<h2 id="fore-kazik-ile-jet-grout-farklari">Fore Kazık ile Jet Grout Farkları</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> <a href="/faaliyet-alanlari/kazikli-temeller/fore-kazik/">Fore kazık</a> yerinde döküm betonarme yapı elemanı iken, jet grout zemin iyileştirme yöntemidir. Fore kazık düşey yük taşımada, jet grout zemin dayanımını artırma ve geçirimsizlik sağlamada tercih edilir.</div>

<div class="table-wrapper"><table>
<thead><tr><th>Kriter</th><th>Fore Kazık</th><th>Jet Grout</th></tr></thead>
<tbody>
<tr><td><strong>Tanım</strong></td><td>Yerinde döküm betonarme yapı elemanı</td><td>Zemin iyileştirme yöntemi (soilcrete)</td></tr>
<tr><td><strong>Standart</strong></td><td>TS EN 1536</td><td>TS EN 12716</td></tr>
<tr><td><strong>Çap</strong></td><td>400–3000 mm</td><td>300–2500 mm</td></tr>
<tr><td><strong>Derinlik</strong></td><td>60+ m</td><td>35+ m</td></tr>
<tr><td><strong>Malzeme</strong></td><td>Betonarme (beton + donatı)</td><td>Çimento-zemin karışımı (soilcrete)</td></tr>
<tr><td><strong>Donatı</strong></td><td>Çelik donatı kafesi var</td><td>Donatı yok (gerektiğinde çelik profil eklenebilir)</td></tr>
<tr><td><strong>Taşıma</strong></td><td>Düşey yük taşıyıcı (500–30.000+ kN)</td><td>Zemin dayanımı artırma (5–30 MPa)</td></tr>
<tr><td><strong>Kullanım</strong></td><td>Derin temel, iksa</td><td>Zemin iyileştirme, perde, tünel destek</td></tr>
<tr><td><strong>Titreşim</strong></td><td>Düşük</td><td>Çok düşük</td></tr>
<tr><td><strong>Mevcut yapı altı</strong></td><td>Zor (büyük ekipman)</td><td>Uygun (küçük ekipman)</td></tr>
<tr><td><strong>Maliyet</strong></td><td>Yüksek (betonarme)</td><td>Orta (çimento + işçilik)</td></tr>
</tbody>
</table></div>

<p>Birçok projede fore kazık ve jet grout birlikte kullanılır. Tipik bir derin kazı projesinde: fore kazık iksa perdesi olarak yapısal destek sağlarken, jet grout kazı tabanında geçirimsizlik perdesi ve taban iyileştirmesi için uygulanır.</p>

<h2 id="jet-grout-fiyatlari-2026">Jet Grout Fiyatları 2026</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout fiyatları; zemin tipi, kolon çapı, derinlik, sistem tipi (Jet1/Jet2/Jet3), mobilizasyon mesafesi ve proje büyüklüğüne bağlı olarak değişir. Kesin fiyat, saha koşullarının değerlendirilmesinden sonra proje bazlı belirlenir.</div>
<div class="saha-notu">
<strong>💰 Maliyet Notu:</strong> Jet grout maliyetinin %30-40\'ı çimento gideridir. Özellikle Jet3 sisteminde metre başına 400-800 kg çimento tüketilir — büyük projelerde çimento tedarik sözleşmesi önceden yapılmazsa bütçe %15-20 şişebilir. Spoil bertaraf maliyeti de genellikle teklif dışı bırakılır ama ciddi bir kalemdir: proje büyüklüğüne göre toplam maliyetin %5-10\'u.
</div>

<div class="expert-tip"><strong>Uzman Notu:</strong> Aşağıdaki bilgiler genel maliyet faktörleridir. Her projenin zemin koşulları, erişim durumu ve tasarım gereksinimleri farklıdır. Kesin maliyet için saha incelemesi ve proje özel teklif gereklidir.</div>

<h3>Maliyeti Etkileyen Faktörler</h3>
<ul>
<li><strong>Zemin tipi:</strong> Killi zeminlerde çimento tüketimi artar → maliyet yükselir. Kumlu zeminlerde daha ekonomik.</li>
<li><strong>Kolon çapı ve derinliği:</strong> Büyük çap ve derin kolon daha fazla çimento, enerji ve süre gerektirir.</li>
<li><strong>Sistem tipi:</strong> Jet1 en ekonomik, Jet3 en maliyetli (çoklu akışkan + karmaşık ekipman).</li>
<li><strong>Kolon sayısı:</strong> Büyük projelerde birim maliyet düşer (ölçek ekonomisi).</li>
<li><strong>Mobilizasyon:</strong> Ekipman nakliyesi, şantiye kurulumu ve sökümü toplam maliyetin %5–%15\'ini oluşturabilir.</li>
<li><strong>Çimento fiyatı:</strong> Çimento, toplam maliyetin %30–%40\'ı — çimento piyasa fiyatı doğrudan etkiler.</li>
<li><strong>Spoil bertarafı:</strong> Artık malzemenin taşınması ve bertarafı ek maliyet kalemidir.</li>
</ul>

<div class="cta-box">
<strong>Projenize Özel Fiyat Teklifi</strong>
<p>Jet grout uygulaması için zemin etüdü, kolon tasarımı ve maliyet analizi dahil ücretsiz keşif raporu alın.</p>
<a href="/iletisim/" class="cta-btn">Ücretsiz Teklif Al</a>
<a href="tel:+905316594636" class="cta-btn">0531 659 46 36</a>
</div>

<h2 id="kalite-kontrol-ve-testler">Kalite Kontrol ve Testler</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout kalite kontrolü; deneme kolonu ile parametre optimizasyonu, üretim sırasında gerçek zamanlı parametre izleme, kolon başından karot alarak basınç dayanımı testi ve gerektiğinde statik yükleme deneyi ile yapılır. TS EN 12716 ve Eurocode 7 referans alınır.</div>

<div class="saha-notu">
<strong>🦺 İSG Notu:</strong> Jet grout şantiyesinde en büyük risk yüksek basınçlı hortum patlaması ve spoil sıçramasıdır. 300-600 bar basınçla çalışan hortumların bağlantı noktaları her vardiya başında kontrol edilmeli. Spoil havuzu çevresinde kaygan zemin oluşur — personelin kayma/düşme önleyici ekipman giymesi zorunlu. Enjeksiyon anında monitor ucuna 3 m\'den fazla yaklaşılmamalı.
</div>
<figure><img src="/images/jet-grout/jet-grout-test.webp" alt="Jet grout kalite kontrol — karot numunesi alınarak basınç dayanımı testi yapılıyor" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Jet grout kalite kontrolü — karot alımı ve basınç dayanımı testi</figcaption></figure>
<h3>Deneme Kolonu (Test Column)</h3>
<p>Jet grout uygulamasının en kritik aşamalarından biri deneme kolonu üretimidir. Deneme kolonu ile:</p>
<ul>
<li>Tasarım parametreleri (basınç, debi, çekme/dönme hızı) saha koşullarında doğrulanır</li>
<li>Gerçek kolon çapı, kolon çevresindeki kazı ile veya inklinometre ile ölçülür</li>
<li>28 günlük kür sonrası karot alınarak tek eksenli basınç dayanımı (UCS) belirlenir</li>
<li>Kolon homojenliği ve zemin-çimento bağının kalitesi değerlendirilir</li>
</ul>

<h3>Üretim Sırası İzleme</h3>
<p>Modern jet grout ekipmanları, tüm enjeksiyon parametrelerini gerçek zamanlı olarak kaydeder. Basınç, debi, çekme hızı, dönme hızı ve derinlik verileri her kolon için dijital olarak loglanır. Bu veriler, üretim kalitesinin izlenmesi ve sorun tespiti için kullanılır.</p>

<h3>Laboratuvar Testleri</h3>
<p>Üretilen kolonlardan alınan karot numuneleri üzerinde aşağıdaki testler yapılır:</p>
<ul>
<li><strong>Tek eksenli basınç dayanımı (UCS):</strong> 7, 14 ve 28 günlük numunelerde — hedef genellikle 5–30 MPa</li>
<li><strong>Geçirimlilik testi:</strong> Perde amaçlı kolonlarda — hedef geçirimlilik k ≤ 10⁻⁷ m/s</li>
<li><strong>Yoğunluk ve porozite:</strong> Kolon homojenliğinin göstergesi</li>
</ul>

<h3>Yükleme Deneyi</h3>
<p>Taşıma kapasitesi kritik olan projelerde, tamamlanan kolonlar üzerinde statik yükleme deneyi yapılır. Yükleme, proje yükünün en az 1,5 katına kadar kademeli olarak uygulanır. Oturma-yük eğrisi çizilerek kolonun gerçek performansı değerlendirilir.</p>

<h2 id="deprem-bolgelerinde-jet-grout">Deprem Bölgelerinde Jet Grout</h2>
<div class="highlight-box"><strong>Özet Cevap:</strong> Jet grout, deprem bölgelerinde sıvılaşma önleme ve zemin rijitliğini artırma amacıyla yaygın kullanılır. TBDY 2018\'e göre ZD, ZE ve ZF sınıfı zeminlerde sıvılaşma potansiyeli tespit edildiğinde jet grout uygulaması en etkili iyileştirme yöntemlerinden biridir.</div>

<div class="saha-notu">
<strong>📋 Mevzuat Notu:</strong> TBDY 2018\'e göre sıvılaşma riski tespit edilen ZD ve ZE sınıfı zeminlerde iyileştirme zorunludur. Ancak yönetmelik hangi yöntemin kullanılacağını belirtmez — bu karar geoteknik mühendisinin sorumluluğundadır. Jet grout, sıvılaşma önlemede en yaygın tercih olmakla birlikte, zemin etüdü verilerine dayalı karşılaştırmalı analiz yapılmadan karar verilmemelidir.
</div>
<figure><img src="/images/jet-grout/jet-grout-deprem.webp" alt="Deprem bölgesinde jet grout uygulaması — sıvılaşma riski olan zeminde kolon imalatı" loading="lazy" decoding="async" width="860" height="860" /><figcaption>Deprem bölgesinde jet grout — sıvılaşma önleme amaçlı zemin iyileştirme</figcaption></figure>
<h3>Sıvılaşma ve Jet Grout</h3>
<p>Sıvılaşma, gevşek kumlu ve suya doygun zeminlerin deprem titreşimleriyle taşıma gücünü kaybetmesi durumudur. Jet grout kolonları, sıvılaşma potansiyeli olan zeminde iki mekanizma ile koruma sağlar:</p>
<ul>
<li><strong>Kompozit zemin etkisi:</strong> Jet grout kolonları zemin içinde rijit elemanlar oluşturarak toplam zemin rijitliğini artırır. Deprem sırasında boşluk suyu basıncı artışını sınırlar.</li>
<li><strong>Drenaj etkisi:</strong> Soilcrete kolonlarının geçirimliliği doğal zeminden farklı olduğundan, kolonlar etrafında boşluk suyu basıncının dağılmasına yardımcı olabilir.</li>
</ul>

<h3>TBDY 2018 Kapsamında Jet Grout</h3>
<p>Türkiye Bina Deprem Yönetmeliği 2018 (TBDY 2018), sıvılaşma riski tespit edilen sahalarda <a href="/faaliyet-alanlari/zemin-iyilestirme/">zemin iyileştirmesi</a> yapılmasını önerir. Jet grout, TBDY 2018 kapsamında kabul gören zemin iyileştirme yöntemlerinden biridir. Sıvılaşma analizi <a href="/faaliyet-alanlari/geoteknik-test-izleme/statik-yukleme/">SPT, CPT ve Vs</a> verilerine göre yapılır.</p>

<p>Deprem bölgelerinde jet grout tasarımında Eurocode 8 (sismik tasarım) ve Eurocode 7 (geoteknik tasarım) referans alınır. Tasarımda deprem yükleri altında kolon-zemin etkileşimi, kolon yer değiştirmeleri ve grup etkisi hesaba katılmalıdır.</p>

<h2 id="torem-zemin-ile-jet-grout">Torem Zemin ile Jet Grout Uygulaması</h2>
<p>Torem Zemin Mühendislik, jet grout uygulamalarını modern <a href="/makine-parki/">makine parkı</a> ve deneyimli teknik kadrosuyla gerçekleştirmektedir. Projeleriniz için zemin etüdü değerlendirmesinden kolon tasarımına, saha uygulamasından kalite kontrol raporlamasına kadar tüm süreç tek elden yönetilir.</p>

<div class="cta-box">
<strong>Ücretsiz Keşif Raporu Alın</strong>
<p>Jet grout uygulaması için zemin koşullarınızı değerlendirelim, projenize en uygun çözümü sunalım.</p>
<a href="/iletisim/" class="cta-btn">Ücretsiz Keşif Raporu</a>
<a href="tel:+905316594636" class="cta-btn">0531 659 46 36</a>
</div>

<h2 id="sik-sorulan-sorular-sss">Sık Sorulan Sorular (SSS)</h2>
<details class="faq-item"><summary>Jet grout nedir ve ne işe yarar?</summary><p>Jet grout, yüksek basınçlı (300–600 bar) çimento şerbetinin özel nozzle\'lardan zemine enjekte edilerek zemin partikülleriyle karıştırılması ve yerinde silindirik soilcrete kolonları oluşturulması yöntemidir. Zemin iyileştirme, temel takviyesi, geçirimsizlik perdesi oluşturma ve sıvılaşma önleme gibi çok çeşitli geoteknik uygulamalarda kullanılır. TS EN 12716 standardına göre tasarlanır.</p></details>
<details class="faq-item"><summary>Jet grout nasıl yapılır?</summary><p>Jet grout uygulaması dört aşamadan oluşur: (1) Delgi makinesiyle hedef derinliğe kadar delme, (2) Delgi kolu yukarı çekilirken nozzle\'lardan yüksek basınçlı çimento enjeksiyonu, (3) Zemin partikülleriyle çimentonun karışarak soilcrete kolon oluşturması, (4) Deneme kolonu ve karot alma ile kalite kontrol. Tüm süreç TS EN 12716\'ya uygun parametre izleme ile yürütülür.</p></details>
<details class="faq-item"><summary>Jet1, Jet2 ve Jet3 arasındaki fark nedir?</summary><p>Jet1 sadece çimento şerbeti kullanır (kolon çapı 30–80 cm), Jet2 çimento ve basınçlı hava kullanır (60–120 cm), Jet3 ise su, hava ve çimento ile çalışır (80–250 cm). Jet1 en ekonomik, Jet3 en geniş çaplı kolonlar üretir. Sistem seçimi zemin tipi ve hedef kolon çapına göre yapılır.</p></details>
<details class="faq-item"><summary>Jet grout hangi zeminlerde uygulanır?</summary><p>Kum, silt, kil ve çakıl içeren zeminlerde uygulanabilir. Gevşek kumlu zeminlerde en yüksek verim elde edilir. Organik içeriği %5\'in üzerinde olan topraklarda ve çok sert kaya formasyonlarında uygulanamaz. Aşırı plastik killerde (PI>40) kolon çapı küçülebilir.</p></details>
<details class="faq-item"><summary>Jet grout kolon çapı ne kadardır?</summary><p>Kolon çapı sisteme ve zemin tipine göre değişir: Jet1\'de 30–80 cm, Jet2\'de 60–120 cm, Jet3\'te 80–250 cm. Gevşek kumlu zeminlerde daha geniş, sert killi zeminlerde daha dar çaplar elde edilir. Kesin çap, deneme kolonu ile belirlenir.</p></details>
<details class="faq-item"><summary>Jet grout fiyatları 2026\'da ne kadar?</summary><p>Jet grout fiyatları; zemin tipi, kolon çapı/derinliği, sistem tipi (Jet1/Jet2/Jet3), kolon sayısı, mobilizasyon mesafesi ve çimento piyasa fiyatına bağlı değişir. Her proje farklı koşullara sahip olduğundan kesin fiyat saha incelemesi sonrası belirlenir. Ücretsiz keşif raporu için iletişime geçebilirsiniz.</p></details>
<details class="faq-item"><summary>Fore kazık mı jet grout mu tercih edilmeli?</summary><p>İkisi farklı amaçlara hizmet eder. Fore kazık düşey yük taşıyan yapısal bir elemandır (derin temel). Jet grout ise zemin iyileştirme yöntemidir. Temel taşıma kapasitesi gerekiyorsa fore kazık, zemin dayanımı artırma veya geçirimsizlik gerekiyorsa jet grout tercih edilir. Birçok projede ikisi birlikte kullanılır.</p></details>
<details class="faq-item"><summary>Jet grout ne kadar sürede tamamlanır?</summary><p>Tek bir jet grout kolonu genellikle 30–90 dakikada tamamlanır (derinlik ve sisteme bağlı). Günlük üretim kapasitesi ortalama 8–15 kolon arasındadır. Proje tamamlanma süresi toplam kolon sayısına, mobilizasyona ve kürleme süresine bağlıdır.</p></details>
<details class="faq-item"><summary>Jet grout depremde güvenli mi?</summary><p>Evet. Jet grout, deprem bölgelerinde sıvılaşma önleme ve zemin rijitliğini artırma amacıyla yaygın kullanılır. TBDY 2018 kapsamında sıvılaşma riski tespit edilen zeminlerde önerilen iyileştirme yöntemlerinden biridir. Soilcrete kolonları zeminin deprem performansını iyileştirir.</p></details>
<details class="faq-item"><summary>Jet grout kalite kontrolü nasıl yapılır?</summary><p>Kalite kontrol üç aşamalıdır: (1) Üretim öncesi deneme kolonu ile parametre optimizasyonu, (2) Üretim sırasında basınç/debi/hız gerçek zamanlı izleme, (3) Üretim sonrası karot alma ve tek eksenli basınç dayanımı (UCS) testi. Gerektiğinde statik yükleme deneyi de yapılır.</p></details>
<details class="faq-item"><summary>Jet grout uygulama derinliği ne kadardır?</summary><p>Jet grout 5 m ile 35+ m derinliğe kadar uygulanabilir. Standart uygulamalarda 10–25 m aralığı en yaygındır. Derinlik, delgi makinesi kapasitesi ve zemin koşullarına bağlıdır. Özel projelerde 40 m\'yi aşan uygulamalar da mevcuttur.</p></details>
<details class="faq-item"><summary>Jet grout çevre dostu mu?</summary><p>Jet grout, çakma kazık gibi yöntemlere kıyasla çok düşük titreşim ve gürültü üretir. Ancak spoil (artık malzeme) oluşumu çevresel yönetim gerektirir. Spoil, çevre mevzuatına uygun şekilde bertaraf edilmelidir. Çimento bazlı olduğundan kimyasal atık riski düşüktür.</p></details>

<div class="related-grid">
  <a href="/faaliyet-alanlari/kazikli-temeller/fore-kazik/" class="related-link">Fore Kazık İmalatı</a>
  <a href="/faaliyet-alanlari/zemin-iyilestirme/zemin-enjeksiyonu/" class="related-link">Zemin Enjeksiyonu</a>
  <a href="/faaliyet-alanlari/gecirimsizlik-perdeleri/jet-grout-perdesi/" class="related-link">Jet Grout Perdesi</a>
  <a href="/faaliyet-alanlari/destekleme-ankraj/ongermeli-ankraj/" class="related-link">Öngermeli Ankraj</a>
  <a href="/faaliyet-alanlari/zemin-iyilestirme/deep-soil-mixing/" class="related-link">Derin Karıştırma</a>
  <a href="/faaliyet-alanlari/geoteknik-proje/zemin-etudu/" class="related-link">Zemin Etüdü</a>
</div>

<p>*Bu içerik, Torem Zemin Mühendislik\'in geoteknik uzmanları tarafından hazırlanmış olup, TS EN 12716, TBDY 2018, Eurocode 7 (EN 1997-1) ve Eurocode 8 standartları referans alınarak teknik doğruluk sağlanmıştır. Son güncelleme: Nisan 2026.*</p>`,
    faq:[
      {q:'Jet grout nedir ve ne işe yarar?',a:'Jet grout, yüksek basınçlı (300–600 bar) çimento şerbetinin özel nozzle\'lardan zemine enjekte edilerek zemin partikülleriyle karıştırılması ve yerinde silindirik soilcrete kolonları oluşturulması yöntemidir. Zemin iyileştirme, temel takviyesi, geçirimsizlik perdesi ve sıvılaşma önleme gibi çok çeşitli geoteknik uygulamalarda kullanılır. TS EN 12716 standardına göre tasarlanır.'},
      {q:'Jet grout nasıl yapılır?',a:'Dört aşamadan oluşur: (1) Delgi makinesiyle hedef derinliğe delme, (2) Delgi kolu yukarı çekilirken nozzle\'lardan yüksek basınçlı çimento enjeksiyonu, (3) Zemin partikülleriyle çimentonun karışarak soilcrete kolon oluşturması, (4) Deneme kolonu ve karot alma ile kalite kontrol.'},
      {q:'Jet1, Jet2 ve Jet3 arasındaki fark nedir?',a:'Jet1 sadece çimento şerbeti kullanır (kolon çapı 30–80 cm), Jet2 çimento ve basınçlı hava kullanır (60–120 cm), Jet3 su, hava ve çimento ile çalışır (80–250 cm). Jet1 en ekonomik, Jet3 en geniş çaplı kolonlar üretir.'},
      {q:'Jet grout hangi zeminlerde uygulanır?',a:'Kum, silt, kil ve çakıl içeren zeminlerde uygulanabilir. Gevşek kumlu zeminlerde en yüksek verim elde edilir. Organik içeriği yüksek topraklarda ve çok sert kaya formasyonlarında uygulanamaz.'},
      {q:'Jet grout kolon çapı ne kadardır?',a:'Sisteme ve zemin tipine göre değişir: Jet1\'de 30–80 cm, Jet2\'de 60–120 cm, Jet3\'te 80–250 cm. Kesin çap deneme kolonu ile belirlenir.'},
      {q:'Jet grout fiyatları 2026\'da ne kadar?',a:'Fiyatlar zemin tipi, kolon çapı/derinliği, sistem tipi, kolon sayısı, mobilizasyon mesafesi ve çimento fiyatına bağlı değişir. Her proje farklı olduğundan kesin fiyat saha incelemesi sonrası belirlenir.'},
      {q:'Fore kazık mı jet grout mu tercih edilmeli?',a:'İkisi farklı amaçlara hizmet eder. Fore kazık düşey yük taşıyan yapısal elemandır. Jet grout zemin iyileştirme yöntemidir. Birçok projede ikisi birlikte kullanılır.'},
      {q:'Jet grout ne kadar sürede tamamlanır?',a:'Tek kolon 30–90 dakikada tamamlanır. Günlük üretim 8–15 kolon arasındadır. Proje süresi toplam kolon sayısına bağlıdır.'},
      {q:'Jet grout depremde güvenli mi?',a:'Evet. TBDY 2018 kapsamında sıvılaşma riski olan zeminlerde önerilen iyileştirme yöntemlerinden biridir. Soilcrete kolonları zeminin deprem performansını artırır.'},
      {q:'Jet grout kalite kontrolü nasıl yapılır?',a:'Üç aşamalıdır: deneme kolonu ile parametre optimizasyonu, üretim sırasında gerçek zamanlı izleme, üretim sonrası karot alma ve basınç dayanımı testi.'},
      {q:'Jet grout uygulama derinliği ne kadardır?',a:'5 m ile 35+ m arası. Standart uygulamalarda 10–25 m en yaygın aralıktır. Özel projelerde 40 m\'yi aşabilir.'},
      {q:'Jet grout çevre dostu mu?',a:'Düşük titreşim ve gürültü üretir. Spoil (artık malzeme) çevre mevzuatına uygun bertaraf edilmelidir. Çimento bazlı olduğundan kimyasal atık riski düşüktür.'},
    ],
  },
  {
    slug:'deep-soil-mixing', kategoriSlug:'zemin-iyilestirme',
    title:'Derin Karıştırma (Deep Soil Mixing)', shortTitle:'Derin Karıştırma',
    excerpt:'Mekanik karıştırıcı ile çimento/kireç bağlayıcıyı zemine yerinde karıştırarak iyileştirme.',
    image:u(ph[5],480,320), heroImage:u(ph[5],1200,500),
    content:`
      <div class="aeo-box">Derin karıştırma (DSM); özel karıştırma kanatlarıyla bağlayıcı (çimento/kireç) ile zeminin yerinde mekanik olarak karıştırılmasıyla zemin-bağlayıcı kolon/panel oluşturma yöntemidir.</div>
      <h2 id="nedir">Derin Karıştırma Nedir?</h2>
      <p>Tek veya çoklu miller üzerindeki karıştırma kanatları ile zemin yerinde işlenir. Kolon çapı 0,7–1,5 m, derinlik 30 m'ye kadar uygulanır. Yumuşak kil ve organik zeminlerde etkilidir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Büyük hacimlerde hızlı zemin iyileştirme</li><li>Çevreye minimum atık üretimi</li><li>Hem taşıma gücü hem geçirimsizlik sağlar</li></ul>`,
    faq:[
      {q:'Jet grout ile derin karıştırma farkı nedir?',a:'Jet grout yüksek basınçlı enjeksiyon kullanır; derin karıştırma mekanik karıştırma ile çalışır. DSM daha büyük hacimler için ekonomiktir.'},
      {q:'Bağlayıcı oranı nasıl belirlenir?',a:'Laboratuvar karıştırma deneyleri ile zemin-bağlayıcı karışımın optimum oranı ve dayanımı belirlenir.'},
    ],
  },
  {
    slug:'zemin-enjeksiyonu', kategoriSlug:'zemin-iyilestirme',
    title:'Zemin Enjeksiyonu', shortTitle:'Zemin Enjeksiyonu',
    excerpt:'Düşük basınçlı çimento veya kimyasal enjeksiyon ile zemin boşluklarını doldurma ve sızdırmazlık.',
    image:u(ph[7],480,320), heroImage:u(ph[7],1200,500),
    content:`
      <div class="aeo-box">Zemin enjeksiyonu; çimento, silikat veya reçine bazlı solüsyonların zemin boşluklarına basınçla enjekte edilerek dayanım artırma ve su geçirimsizlik sağlama yöntemidir.</div>
      <h2 id="nedir">Zemin Enjeksiyonu Nedir?</h2>
      <p>Permeation (sızma), kompansasyon ve fissür enjeksiyonu olmak üzere farklı teknikleri kapsar. Çimento süspansiyonu, sodyum silikat veya poliüretan reçine kullanılır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Tünel ve şaft çevresi su kesme</li><li>Mevcut temel altı boşluk doldurma</li><li>Baraj gövdesi ve temel enjeksiyonu</li></ul>`,
    faq:[
      {q:'Enjeksiyon basıncı ne kadar olmalıdır?',a:'Zemin cinsine göre 1–30 bar arasında değişir; aşırı basınç zemin kaldırmasına neden olabilir.'},
      {q:'Kalıcı bir iyileştirme sağlar mı?',a:'Evet, çimento bazlı enjeksiyonlar kalıcıdır; kimyasal enjeksiyonlar da uzun ömürlü olmakla birlikte zemin kimyasına bağlı olarak performansı takip edilmelidir.'},
    ],
  },
  {
    slug:'tas-kolon', kategoriSlug:'zemin-iyilestirme',
    title:'Taş Kolon (Stone Column)', shortTitle:'Taş Kolon',
    excerpt:'Vibro ikame yöntemiyle kırma taş dolgulu kolonlar oluşturarak yumuşak zeminlerin taşıma gücünü artırma.',
    image:u(ph[0],480,320), heroImage:u(ph[0],1200,500),
    content:`
      <div class="aeo-box">Taş kolon; vibro-ikame (vibro-replacement) yöntemiyle zayıf zemine açılan deliğin kırma taş ile doldurulup sıkıştırılmasıyla oluşturulan rijit kolon elemanıdır.</div>
      <h2 id="nedir">Taş Kolon Nedir?</h2>
      <p>Vibratör sonda ile zemine inilir, geri çekilirken kırma taş (25–75 mm) kademeli olarak doldurup sıkıştırılır. Kolon çapı 60–100 cm, derinlik 15 m'ye kadar uygulanır.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Taşıma gücünü 2–5 kat artırır</li><li>Drenaj etkisiyle konsolidasyonu hızlandırır</li><li>Sıvılaşma riskini azaltır</li></ul>`,
    faq:[
      {q:'Taş kolon hangi zeminlerde etkilidir?',a:'Yumuşak kil, silt ve gevşek kum zeminlerde etkilidir; sert kil ve kaya formasyonlarında gerekmez.'},
      {q:'Taş kolon ile jet grout farkı nedir?',a:'Taş kolon mekanik sıkıştırma + drenaj sağlar; jet grout çimento bazlı kimyasal iyileştirmedir. Taş kolon genellikle daha ekonomiktir.'},
    ],
  },
  {
    slug:'fitil-dren', kategoriSlug:'zemin-iyilestirme',
    title:'Fitil Dren (PVD)', shortTitle:'Fitil Dren',
    excerpt:'Prefabrik vertikal dren ile yumuşak killerin konsolidasyonunu hızlandırma.',
    image:u(ph[2],480,320), heroImage:u(ph[2],1200,500),
    content:`
      <div class="aeo-box">Fitil dren (PVD — Prefabricated Vertical Drain); yumuşak killerde ön yükleme ile birlikte kullanılarak boşluk suyu basıncının hızla sönümlenmesini sağlayan şerit dren elemanıdır.</div>
      <h2 id="nedir">Fitil Dren Nedir?</h2>
      <p>10×100 mm kesitli plastik çekirdekli şerit drenler mandrel ile 20–30 m derinliğe çakılır. 1,0–1,5 m üçgen aralıkla yerleştirilir. Ön yükleme (surcharge) ile birlikte kullanılır.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Konsolidasyon süresini %80–90 kısaltır</li><li>Düşük maliyet ve yüksek hız</li><li>Geniş alanlarda ekonomik çözüm</li></ul>`,
    faq:[
      {q:'Fitil dren ne kadar sürede sonuç verir?',a:'Ön yükleme ile birlikte 3–12 ay içinde hedef konsolidasyon oranına ulaşılır; drensiz uygulamada yıllar sürer.'},
      {q:'Kum zeminlerde fitil dren gerekir mi?',a:'Kum zeminlerin geçirgenliği yüksektir ve konsolidasyonları hızlıdır; fitil dren genellikle kil ve silt zeminlerde kullanılır.'},
    ],
  },
  {
    slug:'vibro-kompaksiyon', kategoriSlug:'zemin-iyilestirme',
    title:'Vibro Kompaksiyon', shortTitle:'Vibro Kompaksiyon',
    excerpt:'Titreşimli sonda ile gevşek granüler zeminlerin derinlemesine sıkıştırılması.',
    image:u(ph[4],480,320), heroImage:u(ph[4],1200,500),
    content:`
      <div class="aeo-box">Vibro kompaksiyon; derinlik vibratörünün (vibroflot) kum ve çakıl zeminler içine indirilerek yoğun titreşim ile zeminlerin yerinde sıkıştırılması yöntemidir.</div>
      <h2 id="nedir">Vibro Kompaksiyon Nedir?</h2>
      <p>Elektrikli veya hidrolik vibroflot sonda ile zemine inilir; titreşim etkisiyle zemin taneleri yeniden düzenlenerek boşluk oranı azaltılır. 15–20 m derinliğe kadar etkilidir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Taşıma gücünü 2–3 kat artırır</li><li>Sıvılaşma potansiyelini ortadan kaldırır</li><li>Çevreye zararsız, atıksız yöntem</li></ul>`,
    faq:[
      {q:'Kil zeminlerde vibro kompaksiyon etkili midir?',a:'Hayır, vibro kompaksiyon granüler (kum-çakıl) zeminlerde etkilidir. Kohezyonlu kil zeminlerde taş kolon veya derin karıştırma tercih edilir.'},
      {q:'Vibro kompaksiyon ile dinamik kompaksiyon farkı nedir?',a:'Vibro kompaksiyon derinlik vibratörü ile çalışır; dinamik kompaksiyon yüzeyden ağır tokmaç düşürülmesidir.'},
    ],
  },

  // ── 4. DESTEKLEME & ANKRAJ ──────────────────────────────────────────────
  {
    slug:'ongermeli-ankraj', kategoriSlug:'destekleme-ankraj',
    title:'Öngermeli Ankraj', shortTitle:'Öngermeli Ankraj',
    excerpt:'Çelik tendon/kablo ile iksa perdelerine aktif gergi kuvveti aktarma. 500–5000 kN kapasite.',
    image:u(ph[6],480,320), heroImage:u(ph[6],1200,500),
    content:`
      <div class="aeo-box">Öngermeli ankraj; çelik kablo (strand) veya çubuk tendonun zemine/kayaya yerleştirilerek tasarım yüküne gerildikten sonra kama sistemiyle kilitlenmesidir.</div>
      <h2 id="nedir">Öngermeli Ankraj Nedir?</h2>
      <p>Ankraj boyu genellikle 10–40 m, kapasite 500–5000 kN arasındadır. Serbest boy ve kök boyu olmak üzere iki bölümden oluşur. Kök boyu çimento enjeksiyonu ile zemine yapışır.</p>
      <h2 id="cesitleri">Çeşitleri</h2>
      <ul><li>Geçici ankraj: ≤2 yıl, inşaat süresince</li><li>Kalıcı ankraj: Korozyon korumalı, 50+ yıl</li><li>Tekrar gerilebilir ankraj: İzleme + ayarlanabilir</li></ul>`,
    faq:[
      {q:'Ankraj kapasitesi nasıl doğrulanır?',a:'Her ankraj üretim çekme testi ile doğrulanır; belli yüzdesi uygunluk ve kabul deney yüküne tabi tutulur.'},
      {q:'Ankraj ömrü ne kadardır?',a:'Geçici ankrajlar 2 yıla kadar; kalıcı ankrajlar çift korozyon koruması ile 50–100 yıl hizmet eder.'},
    ],
  },
  {
    slug:'kalici-ankraj', kategoriSlug:'destekleme-ankraj',
    title:'Kalıcı Ankraj', shortTitle:'Kalıcı Ankraj',
    excerpt:'Çift korozyon korumalı, 50+ yıl tasarım ömürlü kalıcı çekme elemanı.',
    image:u(ph[8],480,320), heroImage:u(ph[8],1200,500),
    content:`
      <div class="aeo-box">Kalıcı ankraj; yapının ömrü boyunca aktif kalacak şekilde tasarlanan, çift bariyer korozyon korumalı öngermeli veya pasif ankraj sistemidir.</div>
      <h2 id="nedir">Kalıcı Ankraj Nedir?</h2>
      <p>HDPE kılıf, yağ, mum veya çimento enjeksiyonu ile çift bariyer korozyon koruması sağlanır. EN 1537 ve BS 8081 standartlarına uygun tasarlanır. Periyodik izleme ve gerektiğinde yeniden germe imkânı bulunur.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Kalıcı iksa perdeleri</li><li>Baraj güçlendirme</li><li>Şev kalıcı stabilizasyonu</li></ul>`,
    faq:[
      {q:'Kalıcı ankraj bakım gerektirir mi?',a:'Evet, yıllık periyodik yük izlemesi önerilir; gerektiğinde yeniden germe yapılabilir.'},
      {q:'Geçici ankrajdan farkı nedir?',a:'Kalıcı ankraj çift korozyon koruması, daha uzun kök boyu ve periyodik izleme gerektiren kalıcı tasarımdır.'},
    ],
  },
  {
    slug:'gecici-ankraj', kategoriSlug:'destekleme-ankraj',
    title:'Geçici Ankraj', shortTitle:'Geçici Ankraj',
    excerpt:'İnşaat süresiyle sınırlı (≤2 yıl), sökülebilir geçici destek ankrajı.',
    image:u(ph[1],480,320), heroImage:u(ph[1],1200,500),
    content:`
      <div class="aeo-box">Geçici ankraj; inşaat süresince (maksimum 2 yıl) kullanılmak üzere tasarlanan, tekli korozyon korumalı destek ankrajıdır.</div>
      <h2 id="nedir">Geçici Ankraj Nedir?</h2>
      <p>İksa perdelerinin kazı süresince desteklenmesinde kullanılır. Yapı tamamlandığında ankraj işlevini kaybeder veya kesilerek devre dışı bırakılır. Kalıcıya göre daha ekonomiktir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Kalıcı ankraja göre %30–40 ekonomik</li><li>Hızlı üretim ve montaj</li><li>Standart koruma yeterli</li></ul>`,
    faq:[
      {q:'Geçici ankraj 2 yıldan fazla kullanılabilir mi?',a:'Hayır, 2 yılı aşan uygulamalarda kalıcı ankraj tasarımı ve korozyon koruması zorunludur.'},
      {q:'Geçici ankraj sökülür mü?',a:'Tendon genellikle kesilir; sökülebilir tip ankraj sistemleri de mevcuttur ancak daha maliyetlidir.'},
    ],
  },
  {
    slug:'kaya-ankraji', kategoriSlug:'destekleme-ankraj',
    title:'Kaya Ankrajı', shortTitle:'Kaya Ankrajı',
    excerpt:'Sert kaya formasyonlarına bağlanan yüksek kapasiteli sabitleme ve gergi elemanı.',
    image:u(ph[3],480,320), heroImage:u(ph[3],1200,500),
    content:`
      <div class="aeo-box">Kaya ankrajı; kaya kütlesi içine delgi ile yerleştirilen çelik tendon veya çubuk elemanın çimento enjeksiyonu ile sabitlenmesidir.</div>
      <h2 id="nedir">Kaya Ankrajı Nedir?</h2>
      <p>Sert kaya formasyonlarında yüksek yapışma (bond) dayanımı elde edilir. Şev stabilitesi, baraj güçlendirme ve kaya düşme önleme gibi uygulamalarda kullanılır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Kaya şev stabilitesi</li><li>Baraj gövde ankrajı</li><li>Tünel portali destek</li></ul>`,
    faq:[
      {q:'Kaya ankrajı ile zemin ankrajı farkı nedir?',a:'Kaya ankrajı sert formasyonda çalışır ve daha kısa kök boyuyla yüksek kapasite sağlar; zemin ankrajı kohezyonsuz/kohezyonlu zeminlerde uygulanır.'},
      {q:'Kaya ankrajı derinliği ne kadardır?',a:'Tipik olarak 5–20 m; baraj uygulamalarında 50 m\'ye kadar uzanabilir.'},
    ],
  },
  {
    slug:'zemin-civisi', kategoriSlug:'destekleme-ankraj',
    title:'Zemin Çivisi (Soil Nailing)', shortTitle:'Zemin Çivisi',
    excerpt:'Pasif çelik donatı ile kazı şevlerinin ve doğal yamaçların stabilizasyonu.',
    image:u(ph[5],480,320), heroImage:u(ph[5],1200,500),
    content:`
      <div class="aeo-box">Zemin çivisi; zemin kütlesine yoğun aralıklı pasif çelik donatı yerleştirilerek zemin-donatı bütünleşik bir kütleye dönüştürülmesi yöntemidir.</div>
      <h2 id="nedir">Zemin Çivisi Nedir?</h2>
      <p>1,0–1,5 m aralıklarla 3–20 m uzunluğunda çelik çubuklar enjeksiyonla sabitlenir. Yüzey püskürtme beton ile kaplanır. 45°–90° şev açılarında uygulanabilir. Ankraja göre daha ekonomiktir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Hızlı ve ekonomik uygulama</li><li>Mevcut şevlere uygulanabilir</li><li>Esnek tasarım — eğimli veya dik yüzeyler</li></ul>`,
    faq:[
      {q:'Zemin çivisi ile ankraj arasındaki fark nedir?',a:'Zemin çivisi pasif çalışır (germe yapılmaz); ankraj aktif sistemdir ve tasarım yüküne gerilerek çalışır.'},
      {q:'Su altında zemin çivisi uygulanabilir mi?',a:'Su tablası altındaki zeminlerde enjeksiyon zorlaşır; bu durumlarda ankrajlı iksa tercih edilir.'},
    ],
  },

  // ── 5. GEÇİRİMSİZLİK PERDELERİ ────────────────────────────────────────
  {
    slug:'jet-grout-perdesi', kategoriSlug:'gecirimsizlik-perdeleri',
    title:'Jet Grout Perdesi', shortTitle:'Jet Grout Perdesi',
    excerpt:'Yan yana jet grout kolonlarıyla oluşturulan su geçirimsiz bariyer.',
    image:u(ph[7],480,320), heroImage:u(ph[7],1200,500),
    content:`
      <div class="aeo-box">Jet grout perdesi; yan yana üretilen jet grout kolonlarının birbirine bindirilerek sürekli su geçirimsiz perde oluşturulmasıdır.</div>
      <h2 id="nedir">Jet Grout Perdesi Nedir?</h2>
      <p>Kolon çapı 0,6–2,0 m, bindirme oranı %15–25 arasındadır. Geçirimsizlik katsayısı (k) 10⁻⁸–10⁻⁹ m/s seviyesine düşürülebilir. Düzensiz zemin profili olan alanlarda esnek uygulama imkânı sunar.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Derin kazı çevresi su kesme</li><li>Baraj altı sızıntı engelleme</li><li>Kirli saha izolasyonu</li></ul>`,
    faq:[
      {q:'Jet grout perdesi kalıcı mıdır?',a:'Evet, çimento bazlı olduğundan kalıcıdır ve zaman içinde dayanımı artar.'},
      {q:'Slurry perde ile farkı nedir?',a:'Jet grout perdesi delgi noktalarından enjeksiyonla üretilir; slurry perde sürekli hendek kazısı gerektirir.'},
    ],
  },
  {
    slug:'secant-perde', kategoriSlug:'gecirimsizlik-perdeleri',
    title:'Secant (Kesişen) Perde', shortTitle:'Secant Perde',
    excerpt:'Birbirine bindirmeli fore kazıklar ile sürekli geçirimsizlik perdesi.',
    image:u(ph[0],480,320), heroImage:u(ph[0],1200,500),
    content:`
      <div class="aeo-box">Secant perde; kesişen kazıklı iksa sistemiyle oluşturulan su geçirimsiz yapısal perdedir. Hem iksa hem geçirimsizlik işlevi görür.</div>
      <h2 id="nedir">Secant Perde Nedir?</h2>
      <p>Birincil (dişi) ve ikincil (erkek) kazıklar bindirme ile kesişerek sürekli perde oluşturur. Diyafram duvara alternatif olarak daha ekonomik geçirimsizlik çözümü sağlar.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>İksa + geçirimsizlik tek perdede</li><li>Diyafram duvara göre daha ekonomik</li><li>Derin kazılarda yapısal dayanım</li></ul>`,
    faq:[
      {q:'Secant perde derinliği ne kadardır?',a:'Standart fore kazık makineleri ile 30 m, özel ekipmanlarla 50 m derinliğe kadar uygulanabilir.'},
      {q:'Geçirimsizlik garantisi var mı?',a:'Doğru uygulama ve kalite kontrolü ile yüksek geçirimsizlik sağlanır; birleşim noktaları kritik kontrol alanlarıdır.'},
    ],
  },
  {
    slug:'slurry-perde', kategoriSlug:'gecirimsizlik-perdeleri',
    title:'Çamur Perde (Slurry Wall)', shortTitle:'Slurry Perde',
    excerpt:'Çimento-bentonit karışımı ile derin geçirimsizlik perdesi.',
    image:u(ph[2],480,320), heroImage:u(ph[2],1200,500),
    content:`
      <div class="aeo-box">Slurry perde; bentonit çamuru destekli hendek kazılarak çimento-bentonit veya toprak-bentonit karışımı ile doldurulan derin geçirimsizlik perdesidir.</div>
      <h2 id="nedir">Slurry Perde Nedir?</h2>
      <p>Hendek genişliği 0,6–1,5 m, derinlik 50 m'ye kadar uygulanabilir. Geçirimsizlik katsayısı 10⁻⁸–10⁻⁹ m/s arasındadır. Yapısal yük taşımaz; saf geçirimsizlik amaçlıdır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Baraj altı sızıntı engelleme</li><li>Kirli saha çevre izolasyonu</li><li>Yeraltı suyu tablası kontrolü</li></ul>`,
    faq:[
      {q:'Slurry perde ile diyafram duvar farkı nedir?',a:'Slurry perde düşük mukavemetli karışımla doldurulur ve yapısal değildir; diyafram duvar betonarme olup yapısal iksa görevi de yapar.'},
      {q:'Ömrü ne kadardır?',a:'Uygun malzeme ve uygulama ile 50 yılı aşan hizmet ömrü sağlanır.'},
    ],
  },
  {
    slug:'enjeksiyon-perdesi', kategoriSlug:'gecirimsizlik-perdeleri',
    title:'Enjeksiyon Perdesi', shortTitle:'Enjeksiyon Perdesi',
    excerpt:'Basınçlı çimento enjeksiyonu ile zemin gözeneklerini doldurarak su geçişini engelleme.',
    image:u(ph[4],480,320), heroImage:u(ph[4],1200,500),
    content:`
      <div class="aeo-box">Enjeksiyon perdesi; belirli aralıklarla delgi yapılarak basınçlı çimento veya kimyasal enjeksiyon ile zemin gözeneklerinin doldurulmasıyla oluşturulan geçirimsizlik bariyeridir.</div>
      <h2 id="nedir">Enjeksiyon Perdesi Nedir?</h2>
      <p>Birincil, ikincil ve gerektiğinde üçüncül sıra delgilerle aşamalı enjeksiyon yapılır. Enjeksiyon basıncı ve malzeme türü zemin geçirgenliğine göre belirlenir. Baraj ve tünel projelerinde yaygın kullanılır.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Mevcut zemini bozmadan yerinde uygulama</li><li>Esnek — derinlik ve hat boyunca ayarlanabilir</li><li>Diğer perde yöntemlerine göre daha düşük maliyet</li></ul>`,
    faq:[
      {q:'Enjeksiyon perdesi ne kadar su geçirmez?',a:'Geçirimsizlik derecesi enjeksiyon aşama sayısına ve zemin türüne bağlıdır; tipik olarak Lugeon değeri 3–5 seviyesine düşürülür.'},
      {q:'Kil zeminlerde enjeksiyon perdesi etkili midir?',a:'Kil zeminlerin doğal geçirimsizliği zaten düşüktür; enjeksiyon perdesi daha çok granüler ve çatlaklı kaya formasyonlarında uygulanır.'},
    ],
  },

  // ── 6. ŞEV STABİLİTESİ ─────────────────────────────────────────────────
  {
    slug:'heyelan-onleme', kategoriSlug:'sev-stabilitesi',
    title:'Heyelan Önleme Sistemleri', shortTitle:'Heyelan Önleme',
    excerpt:'Ankraj, kazık, drenaj ve istinat duvarı kombinasyonları ile heyelan riski azaltma.',
    image:u(ph[6],480,320), heroImage:u(ph[6],1200,500),
    content:`
      <div class="aeo-box">Heyelan önleme; aktif veya potansiyel heyelan bölgelerinde ankraj, kazık, drenaj ve istinat yapıları kombinasyonuyla zemin hareketinin kontrol altına alınmasıdır.</div>
      <h2 id="nedir">Heyelan Önleme Nedir?</h2>
      <p>Heyelan mekanizması analiz edildikten sonra uygun stabilizasyon yöntemi belirlenir. Küçük ölçekli kaymalarda drenaj + zemin çivisi, büyük ölçeklilerde kazık + ankraj + derin drenaj kombinasyonu uygulanır.</p>
      <h2 id="yontemler">Önleme Yöntemleri</h2>
      <ul><li>Yüzey ve derin drenaj sistemi</li><li>Öngermeli ankraj + fore kazık perdesi</li><li>Toprakarme duvar veya istinat yapısı</li><li>Şev geometrisi düzenleme (kesme-dolgu)</li></ul>`,
    faq:[
      {q:'Heyelan belirtileri nelerdir?',a:'Çatlaklar, eğimli ağaçlar, duvar çatlamaları, yol kaplamasında kırılmalar ve su çıkışları heyelan belirtileridir.'},
      {q:'Heyelan önleme maliyeti ne kadardır?',a:'Heyelan boyutu ve derinliğine göre değişir; erken müdahale maliyeti, hasar sonrası onarımın çok altındadır.'},
    ],
  },
  {
    slug:'kaya-dusmesi-onleme', kategoriSlug:'sev-stabilitesi',
    title:'Kaya Düşmesi Önleme', shortTitle:'Kaya Düşmesi Önleme',
    excerpt:'Çelik ağ, enerji sönümleyici bariyer ve kaya cıvatası ile kaya düşme riskinin kontrolü.',
    image:u(ph[8],480,320), heroImage:u(ph[8],1200,500),
    content:`
      <div class="aeo-box">Kaya düşmesi önleme; yol kenarı, yerleşim alanı ve altyapı güzergahlarında kopan/devrilen kaya bloklarının kontrol altına alınması için uygulanan aktif ve pasif koruma sistemleridir.</div>
      <h2 id="nedir">Kaya Düşmesi Önleme Nedir?</h2>
      <p>Aktif sistemler (kaya cıvatası, çelik ağ kaplama) kayanın yerinde tutulmasını; pasif sistemler (enerji sönümleyici bariyerler, hendekler) düşen kayanın yakalanmasını sağlar.</p>
      <h2 id="yontemler">Uygulama Yöntemleri</h2>
      <ul><li>Kaya cıvatası ve çelik ağ kaplama</li><li>Enerji sönümleyici ring-net bariyerler (100–5000 kJ)</li><li>Kaya düşme hendeği ve saptırma duvarı</li></ul>`,
    faq:[
      {q:'Bariyer enerji kapasitesi nasıl seçilir?',a:'Kaya blok boyutu, düşme yüksekliği ve hız analizine göre enerji kapasitesi (kJ) hesaplanır; güvenlik faktörü eklenir.'},
      {q:'Çelik ağlar ne kadar dayanıklıdır?',a:'Galvanize veya alüminyum kaplı çelik ağlar 25–50 yıl hizmet ömrü sunar; periyodik kontrol önerilir.'},
    ],
  },
  {
    slug:'istinat-duvari', kategoriSlug:'sev-stabilitesi',
    title:'İstinat Duvarı', shortTitle:'İstinat Duvarı',
    excerpt:'Betonarme konsol, ağırlık ve yarı-ağırlık tipi dayanma yapıları ile yanal zemin basıncı kontrolü.',
    image:u(ph[1],480,320), heroImage:u(ph[1],1200,500),
    content:`
      <div class="aeo-box">İstinat duvarı; toprak kütlesinin yanal basıncına karşı koymak üzere tasarlanan betonarme veya taş yığma dayanma yapısıdır.</div>
      <h2 id="nedir">İstinat Duvarı Nedir?</h2>
      <p>Ağırlık, yarı-ağırlık, konsol ve kontfor tipi olmak üzere farklı tipleri bulunur. Yükseklik genellikle 2–10 m arasındadır. TBDY 2018 deprem yüklerine göre tasarlanır.</p>
      <h2 id="cesitleri">Tipler</h2>
      <ul><li>Betonarme konsol istinat duvarı (en yaygın)</li><li>Ağırlık tipi taş veya beton duvar</li><li>Kontfor destekli yüksek duvar (>6 m)</li></ul>`,
    faq:[
      {q:'İstinat duvarı maksimum yüksekliği ne kadardır?',a:'Konsol tip 8–10 m, kontforlü tip 15 m\'ye kadar uygulanabilir. Daha yüksek yapılar için toprakarme duvar veya ankrajlı sistem tercih edilir.'},
      {q:'İstinat duvarı ile iksa farkı nedir?',a:'İstinat duvarı kalıcı yapıdır ve dolgu arkasında çalışır; iksa geçici veya kalıcı olabilir ve kazı önünde destek sağlar.'},
    ],
  },
  {
    slug:'celik-hasir-ag', kategoriSlug:'sev-stabilitesi',
    title:'Çelik Hasır Ağ Kaplama', shortTitle:'Çelik Hasır Ağ',
    excerpt:'Yüksek mukavemetli çelik ağ ile kaya yüzeylerinin kaplanması ve kontrollü erozyon önleme.',
    image:u(ph[3],480,320), heroImage:u(ph[3],1200,500),
    content:`
      <div class="aeo-box">Çelik hasır ağ kaplama; kaya şevlerinin yüksek mukavemetli çelik ağ ile örtülmesi ve kaya cıvatalarıyla sabitlenmesiyle küçük blokların düşmesinin önlenmesidir.</div>
      <h2 id="nedir">Çelik Hasır Ağ Nedir?</h2>
      <p>Çift bükümlü altıgen (gabion mesh) veya yüksek mukavemetli halka ağ (ring net) tipleri vardır. Kaya cıvataları ile şev yüzeyine sabitlenir. Yüzey erozyonu ve küçük kaya parçalarının düşmesini engeller.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Hızlı kurulum — büyük alanlar kısa sürede kaplanır</li><li>Esnek yapı — zemin hareketine uyum sağlar</li><li>Minimum bakım gereksinimi</li></ul>`,
    faq:[
      {q:'Hangi boyutta kaya bloklarını tutar?',a:'Standart gabion mesh 0,5 m³\'e kadar, ring-net sistemleri 2–3 m³ bloklara kadar etkilidir.'},
      {q:'Yeşillendirme ile birlikte uygulanabilir mi?',a:'Evet, çelik ağ altına tohumlama veya biyomatris uygulanarak erozyon kontrolü + yeşillendirme birlikte sağlanabilir.'},
    ],
  },
  {
    slug:'moloz-akisi-onleme', kategoriSlug:'sev-stabilitesi',
    title:'Moloz Akışı Önleme', shortTitle:'Moloz Akışı Önleme',
    excerpt:'Çelik bariyer, saptırma duvarı ve drenaj kanalı ile dere yatağı moloz akışı kontrolü.',
    image:u(ph[5],480,320), heroImage:u(ph[5],1200,500),
    content:`
      <div class="aeo-box">Moloz akışı önleme; dere yatakları ve dik vadilerde yoğun yağışla tetiklenen çamur, kaya ve toprak akışının bariyerler ve saptırma yapıları ile kontrol altına alınmasıdır.</div>
      <h2 id="nedir">Moloz Akışı Önleme Nedir?</h2>
      <p>Esnek çelik bariyerler (ring-net), beton saptırma duvarları, çökeltim havuzları ve drenaj kanalları ile akış yönlendirilir ve enerjisi sönümlenir. Kapasite 100–10.000 m³ arasındadır.</p>
      <h2 id="yontemler">Önleme Yöntemleri</h2>
      <ul><li>Esnek çelik ring-net bariyerler</li><li>Beton veya gabion saptırma duvarları</li><li>Çökeltim havuzları ve sediment tuzakları</li></ul>`,
    faq:[
      {q:'Moloz akışı bariyeri ne kadar malzeme tutar?',a:'Bariyer boyutuna göre 100–10.000 m³ malzeme kapasitesi sağlanabilir; her olay sonrası temizlik gerekir.'},
      {q:'Bariyerler kaç yıl dayanır?',a:'Galvanize çelik bariyerler 25–50 yıl hizmet eder; periyodik kontrol ve bakım ile ömür uzatılır.'},
    ],
  },

  // ── 7. GEOTEKNİK TEST & İZLEME ────────────────────────────────────────
  {
    slug:'statik-yukleme', kategoriSlug:'geoteknik-test-izleme',
    title:'Statik Yükleme Testi', shortTitle:'Statik Yükleme',
    excerpt:'Hidrolik kriko ile kazık üzerine kademeli yük uygulayarak taşıma kapasitesinin doğrulanması.',
    image:u(ph[7],480,320), heroImage:u(ph[7],1200,500),
    content:`
      <div class="aeo-box">Statik yükleme testi; kazık başına hidrolik krikolarla kademeli yük uygulanarak yük-oturma davranışının ölçülmesi ve taşıma kapasitesinin doğrulanmasıdır.</div>
      <h2 id="nedir">Statik Yükleme Testi Nedir?</h2>
      <p>Reaksiyon kazıkları veya ağırlık platformu kullanılarak test kazığına tasarım yükünün 1,5–2,0 katı uygulanır. ASTM D1143 standardına uygun yük-zaman-oturma verileri kaydedilir.</p>
      <h2 id="kullanim">Test Türleri</h2>
      <ul><li>Basınç yükleme testi (en yaygın)</li><li>Çekme yükleme testi</li><li>Yatay yükleme testi</li></ul>`,
    faq:[
      {q:'Statik yükleme testi ne kadar sürer?',a:'Standart test 24–72 saat sürer; hızlı test yöntemiyle 8–12 saatte tamamlanabilir.'},
      {q:'Her projede statik test zorunlu mu?',a:'TBDY 2018 ve TS EN 1997 gereği belirli proje sınıflarında zorunludur; diğerlerinde güçlü tavsiye edilir.'},
    ],
  },
  {
    slug:'dinamik-pda', kategoriSlug:'geoteknik-test-izleme',
    title:'Dinamik PDA Testi', shortTitle:'Dinamik PDA',
    excerpt:'Pile Driving Analyzer ile kazık çakma sırasında veya sonrasında taşıma kapasitesi ölçümü.',
    image:u(ph[0],480,320), heroImage:u(ph[0],1200,500),
    content:`
      <div class="aeo-box">Dinamik PDA (Pile Driving Analyzer) testi; kazık başına darbe uygulanarak ivme ve birim deformasyon sensörleri ile dalga yayılma analizinden taşıma kapasitesinin hesaplanmasıdır.</div>
      <h2 id="nedir">Dinamik PDA Testi Nedir?</h2>
      <p>Kazık başına takılan sensörlerle darbe enerjisi, dalga hızı ve zemin direnci gerçek zamanlı ölçülür. CAPWAP analizi ile statik teste yakın doğrulukta sonuçlar elde edilir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Statik teste göre çok daha hızlı ve ekonomik</li><li>Aynı gün içinde onlarca kazık test edilebilir</li><li>Kazık bütünlük kontrolü de sağlar</li></ul>`,
    faq:[
      {q:'PDA testi statik testin yerini alır mı?',a:'Kalibre edilmiş PDA-CAPWAP analizi kabul edilebilir doğruluk sağlar; ancak büyük projelerde en az birkaç statik test ile kalibrasyon yapılması önerilir.'},
      {q:'Fore kazıklara PDA testi uygulanabilir mi?',a:'Evet, kazık başına darbe uygulayabilen bir çekiç ile fore kazıklara da uygulanabilir (restrike testi).'},
    ],
  },
  {
    slug:'pit-testi', kategoriSlug:'geoteknik-test-izleme',
    title:'PIT (Sağlamlık) Testi', shortTitle:'PIT Testi',
    excerpt:'Pile Integrity Test ile kazık gövdesi sağlamlığının ultrasonik dalga ile kontrolü.',
    image:u(ph[2],480,320), heroImage:u(ph[2],1200,500),
    content:`
      <div class="aeo-box">PIT (Pile Integrity Test); kazık başına hafif darbe uygulanarak yansıyan dalga sinyalinin analizi ile kazık gövdesi boyunca kusur ve boyut değişimlerinin tespitidir.</div>
      <h2 id="nedir">PIT Testi Nedir?</h2>
      <p>El çekici ile kazık başına darbe uygulanır; ivmeölçer yansıyan dalga sinyalini kaydeder. Darbe noktası reflektometrisi (impedance logging) ile boyun verme, çatlak ve boşluk tespiti yapılır.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul><li>Tahribatsız test — kazığa zarar vermez</li><li>Günde 40–80 kazık test edilebilir</li><li>Düşük maliyet</li></ul>`,
    faq:[
      {q:'PIT testi taşıma kapasitesini ölçer mi?',a:'Hayır, PIT testi sadece kazık sağlamlığını (gövde bütünlüğünü) kontrol eder; taşıma kapasitesi için statik veya PDA testi gerekir.'},
      {q:'Hangi kazık türlerinde uygulanır?',a:'Fore kazık, CFA kazık ve betonarme çakma kazıklarda uygulanır; çelik kazıklarda farklı yöntemler kullanılır.'},
    ],
  },
  {
    slug:'inklinometre', kategoriSlug:'geoteknik-test-izleme',
    title:'İnklinometre İzleme', shortTitle:'İnklinometre',
    excerpt:'Zemin içi yatay deformasyon hareketlerinin derinlikle profil olarak ölçülmesi.',
    image:u(ph[4],480,320), heroImage:u(ph[4],1200,500),
    content:`
      <div class="aeo-box">İnklinometre; zemine yerleştirilen kılavuz boruya indirilen eğim sensörü ile derinlik boyunca yatay yer değiştirmelerin periyodik ölçülmesidir.</div>
      <h2 id="nedir">İnklinometre İzleme Nedir?</h2>
      <p>Dört oluklu ABS veya alüminyum kılavuz boru sondaj deliğine yerleştirilir. Bimetal veya MEMS sensörlü inklinometre prob ile 0,5–1,0 m aralıklarla eğim okuması yapılır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>İksa perde arkası zemin hareketleri</li><li>Heyelan kayma yüzeyi tespiti</li><li>Baraj ve dolgu oturma izleme</li></ul>`,
    faq:[
      {q:'Ölçüm hassasiyeti ne kadardır?',a:'Yüksek kaliteli inklinometre sistemleri ile ±0,1 mm/m hassasiyet sağlanır; toplam deformasyon mm mertebesinde ölçülür.'},
      {q:'Ne sıklıkla ölçüm yapılmalıdır?',a:'Kritik kazı aşamalarında günlük, normal durumda haftalık, uzun vadeli izlemede aylık ölçüm önerilir.'},
    ],
  },
  {
    slug:'aletsel-gozlem', kategoriSlug:'geoteknik-test-izleme',
    title:'Aletsel Gözlem Sistemi', shortTitle:'Aletsel Gözlem',
    excerpt:'Piyezometre, tiltmetre, manyetik oturma ölçer ve çatlak ölçer ile kapsamlı geoteknik izleme.',
    image:u(ph[6],480,320), heroImage:u(ph[6],1200,500),
    content:`
      <div class="aeo-box">Aletsel gözlem; birden fazla geoteknik izleme aletinin entegre kullanımıyla zemin ve yapı davranışının kapsamlı olarak izlenmesidir.</div>
      <h2 id="nedir">Aletsel Gözlem Nedir?</h2>
      <p>Piyezometre (su basıncı), inklinometre (yatay hareket), tiltmetre (eğilme), manyetik oturma ölçer (düşey hareket), çatlak ölçer ve yük hücresi gibi aletlerin projeye özel konfigürasyonla sahaya kurulmasıdır.</p>
      <h2 id="aletler">Alet Çeşitleri</h2>
      <ul><li>Piyezometre — boşluk suyu basıncı izleme</li><li>Tiltmetre — yapı eğilme izleme</li><li>Manyetik oturma ölçer — katmanlı oturma izleme</li><li>Ankraj yük hücresi — ankraj kuvveti izleme</li></ul>`,
    faq:[
      {q:'Aletsel gözlem hangi projelerde zorunludur?',a:'Derin kazı, heyelan riski, komşu yapı yakını ve metro projeleri gibi kritik çalışmalarda yönetmeliklerce zorunlu tutulabilir.'},
      {q:'Veriler nasıl raporlanır?',a:'Otomatik veya manuel okumalar haftalık/aylık raporlar halinde sunulur; alarm eşikleri tanımlanarak erken uyarı sistemi kurulur.'},
    ],
  },

  // ── 8. GEOTEKNİK PROJE ─────────────────────────────────────────────────
  {
    slug:'zemin-etudu', kategoriSlug:'geoteknik-proje',
    title:'Zemin Etüdü & Raporlama', shortTitle:'Zemin Etüdü',
    excerpt:'TBDY 2018 uyumlu sondaj, SPT, laboratuvar deneyleri ve zemin etüdü raporu.',
    image:u(ph[8],480,320), heroImage:u(ph[8],1200,500),
    content:`
      <div class="aeo-box">Zemin etüdü; yapı inşaatından önce arazinin taşıma kapasitesini, zemin katman yapısını ve yeraltı suyu koşullarını belirlemek amacıyla yapılan sondaj, arazi deneyi ve laboratuvar analizleri bütünüdür.</div>
      <h2 id="nedir">Zemin Etüdü Nedir?</h2>
      <p>TBDY 2018 ve TS EN 1997 (Eurocode 7) standartlarına uygun olarak sondaj, SPT, presiyometre ve laboratuvar deneyleri yapılır. Sonuçlar zemin profili, taşıma kapasitesi, oturma analizi ve sıvılaşma değerlendirmesini içeren kapsamlı rapor halinde sunulur.</p>
      <h2 id="kapsam">Kapsam</h2>
      <ul><li>Döner ve darbeli sondaj</li><li>SPT, presiyometre, vane deneyleri</li><li>Laboratuvar (granülometri, kıvam, konsolidasyon, kesme)</li><li>Zemin etüdü raporu ve geoteknik değerlendirme</li></ul>`,
    faq:[
      {q:'Zemin etüdü yapılmadan inşaat başlanabilir mi?',a:'Hayır, TBDY 2018 her yapı için sahaya özgü zemin araştırması zorunlu kılmaktadır; etütsüz inşaat hem teknik hem hukuki risk oluşturur.'},
      {q:'Zemin etüdü maliyeti ne kadardır?',a:'İnşaat maliyetinin %1–2\'si kadardır; bu yatırım proje ömrü boyunca milyonlarca liralık riski bertaraf eder.'},
    ],
  },
  {
    slug:'projelendirme', kategoriSlug:'geoteknik-proje',
    title:'Geoteknik Projelendirme', shortTitle:'Projelendirme',
    excerpt:'Zemin verileri doğrultusunda fore kazık, iksa, ankraj ve zemin iyileştirme projelerinin tasarımı.',
    image:u(ph[1],480,320), heroImage:u(ph[1],1200,500),
    content:`
      <div class="aeo-box">Geoteknik projelendirme; zemin etüdü verileri doğrultusunda temel sistemi, iksa, ankraj ve zemin iyileştirme çözümlerinin analiz ve tasarımını kapsar.</div>
      <h2 id="nedir">Geoteknik Projelendirme Nedir?</h2>
      <p>Zemin parametreleri, yapı yükleri ve çevre koşulları değerlendirilerek en uygun geoteknik çözüm tasarlanır. FEM modellemesi, stabilite analizleri ve deformasyon hesapları ile proje doğrulanır.</p>
      <h2 id="kapsam">Proje Kapsamı</h2>
      <ul><li>Temel sistemi tasarımı (kazık, radye, perde)</li><li>İksa sistemi projelendirme</li><li>Zemin iyileştirme tasarımı</li><li>Teknik şartname ve keşif özeti</li></ul>`,
    faq:[
      {q:'Projelendirme süreci ne kadar sürer?',a:'Proje karmaşıklığına göre 2–6 hafta arasında değişir; acil projelerde hızlandırılmış takvim uygulanabilir.'},
      {q:'Hangi yazılımlar kullanılır?',a:'Plaxis 2D/3D, GeoStudio, RSPile, DeepEX gibi geoteknik analiz yazılımları ve AutoCAD ile projelendirme yapılır.'},
    ],
  },
  {
    slug:'derin-kazi-projesi', kategoriSlug:'geoteknik-proje',
    title:'Derin Kazı Projesi', shortTitle:'Derin Kazı Projesi',
    excerpt:'İksa sistemi seçimi, kazı aşamaları planlaması ve FEM modelleme ile derin kazı mühendisliği.',
    image:u(ph[3],480,320), heroImage:u(ph[3],1200,500),
    content:`
      <div class="aeo-box">Derin kazı projesi; kazı derinliği, zemin koşulları, komşu yapılar ve yeraltı suyu durumuna göre en uygun iksa sisteminin tasarlanması ve uygulama planının oluşturulmasıdır.</div>
      <h2 id="nedir">Derin Kazı Projesi Nedir?</h2>
      <p>Zemin-yapı etkileşimi FEM modellemesi ile analiz edilir. İksa sistemi, ankraj kademeleri, kazı aşamaları ve izleme planı detaylı olarak projelendirilir. Komşu yapı etki değerlendirmesi yapılır.</p>
      <h2 id="kapsam">Kapsam</h2>
      <ul><li>İksa tipi seçimi ve karşılaştırma</li><li>FEM zemin-yapı etkileşimi analizi</li><li>Aşamalı kazı planı</li><li>Aletsel gözlem ve alarm eşikleri planı</li></ul>`,
    faq:[
      {q:'Derin kazı ne kadar derinlikten itibaren özel proje gerektirir?',a:'Genel olarak 3–4 m üzeri kazılarda mühendislik projesi, 6 m üzerinde detaylı geoteknik proje ve izleme planı zorunludur.'},
      {q:'Komşu yapı risk değerlendirmesi yapılır mı?',a:'Evet, komşu yapı taşıma sistemi, temel derinliği ve hasar sınır değerleri değerlendirilerek proje buna göre tasarlanır.'},
    ],
  },
  {
    slug:'saha-denetimi', kategoriSlug:'geoteknik-proje',
    title:'Saha Denetimi', shortTitle:'Saha Denetimi',
    excerpt:'İmalat kalite kontrolü, test denetimi ve raporlama ile uygulama sürecinin izlenmesi.',
    image:u(ph[5],480,320), heroImage:u(ph[5],1200,500),
    content:`
      <div class="aeo-box">Saha denetimi; geoteknik projelerde imalat kalite kontrolü, test denetimi, sapma takibi ve düzeltici eylem önerileriyle uygulama sürecinin izlenmesidir.</div>
      <h2 id="nedir">Saha Denetimi Nedir?</h2>
      <p>Deneyimli geoteknik mühendis sahada kazık imalatı, ankraj germe, zemin iyileştirme ve iksa uygulamalarını gözlemler. Günlük raporlar, test sonuçları ve fotoğraf dokümantasyonu ile süreç kayıt altına alınır.</p>
      <h2 id="kapsam">Denetim Kapsamı</h2>
      <ul><li>İmalat parametreleri kontrolü (çap, derinlik, beton hacmi)</li><li>Test sonuçları değerlendirmesi</li><li>Proje-saha uygunluk takibi</li><li>Günlük ve haftalık denetim raporları</li></ul>`,
    faq:[
      {q:'Saha denetimi zorunlu mu?',a:'Yapı denetim mevzuatı gereği belirli proje sınıflarında zorunludur; tüm projelerde güçlü tavsiye edilir.'},
      {q:'Denetim maliyeti proje bütçesinin ne kadarıdır?',a:'Tipik olarak uygulama maliyetinin %3–5\'i kadardır; kalite güvencesi açısından çok değerli bir yatırımdır.'},
    ],
  },
  {
    slug:'teknik-danismanlik', kategoriSlug:'geoteknik-proje',
    title:'Teknik Danışmanlık', shortTitle:'Teknik Danışmanlık',
    excerpt:'Geoteknik sorunlara uzman değerlendirmesi, ikinci görüş ve proje optimizasyonu hizmeti.',
    image:u(ph[7],480,320), heroImage:u(ph[7],1200,500),
    content:`
      <div class="aeo-box">Teknik danışmanlık; mevcut veya planlanan geoteknik projelerde uzman mühendis değerlendirmesi, ikinci görüş, optimizasyon önerisi ve sorun çözme hizmeti sunulmasıdır.</div>
      <h2 id="nedir">Teknik Danışmanlık Nedir?</h2>
      <p>Proje tasarımı inceleme, alternatif çözüm önerisi, maliyet optimizasyonu, anlaşmazlık çözümü ve uzman görüşü raporları kapsamında hizmet verilir. 20+ yıllık saha deneyimiyle desteklenen pragmatik çözümler sunulur.</p>
      <h2 id="kapsam">Hizmet Kapsamı</h2>
      <ul><li>Mevcut proje inceleme ve ikinci görüş</li><li>Alternatif çözüm ve maliyet optimizasyonu</li><li>Zemin sorunları uzman değerlendirmesi</li><li>Teknik bilirkişi ve hakemlik hizmeti</li></ul>`,
    faq:[
      {q:'Danışmanlık hizmeti uzaktan verilir mi?',a:'Proje inceleme ve rapor yazımı uzaktan yapılabilir; saha ziyareti gereken durumlarda yerinde değerlendirme yapılır.'},
      {q:'Hangi aşamada danışmanlık alınmalıdır?',a:'İdeal olarak proje tasarım aşamasında; ancak uygulama sırasında sorun yaşandığında da etkin çözüm sağlanabilir.'},
    ],
  },
];

// ─── Yardımcılar ─────────────────────────────────────────────────────────────
export function getKategori(slug: string): Kategori | undefined {
  return kategoriler.find(k => k.slug === slug);
}

export function getTeknik(kategoriSlug: string, teknikSlug: string): Teknik | undefined {
  return teknikler.find(t => t.kategoriSlug === kategoriSlug && t.slug === teknikSlug);
}

export function getTekniklerByKategori(kategoriSlug: string): Teknik[] {
  return teknikler.filter(t => t.kategoriSlug === kategoriSlug);
}

export function getAllTeknikPaths(): { kategori: string; teknik: string }[] {
  return teknikler.map(t => ({ kategori: t.kategoriSlug, teknik: t.slug }));
}
