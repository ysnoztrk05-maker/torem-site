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
    image: u(ph[0], 600, 400),
    icon: 'M6 2v20M12 2v20M18 2v20M4 8h16',
  },
  {
    slug: 'iksa-sistemleri',
    title: 'İksa Sistemleri',
    description: 'Ankrajlı fore kazık, diyafram duvar, palplanş ve Berlin duvarı iksa çözümleri.',
    image: u(ph[1], 600, 400),
    icon: 'M3 21V7h18v14M7 7V3M17 7V3M3 14h18',
  },
  {
    slug: 'zemin-iyilestirme',
    title: 'Zemin İyileştirme',
    description: 'Jet grout, derin karıştırma, taş kolon ve vibro kompaksiyon ile zayıf zeminlerin güçlendirilmesi.',
    image: u(ph[2], 600, 400),
    icon: 'M12 2v8l4 4-4 4v6M8 10h8',
  },
  {
    slug: 'destekleme-ankraj',
    title: 'Destekleme & Ankraj',
    description: 'Öngermeli ankraj, kalıcı ankraj, kaya ankrajı ve zemin çivisi uygulamaları.',
    image: u(ph[3], 600, 400),
    icon: 'M12 2l-2 6h4l-2 6M8 16h8M12 16v6M9 22h6',
  },
  {
    slug: 'gecirimsizlik-perdeleri',
    title: 'Geçirimsizlik Perdeleri',
    description: 'Jet grout perdesi, secant perde, slurry perde ve enjeksiyon perdesi ile yeraltı suyu kontrolü.',
    image: u(ph[4], 600, 400),
    icon: 'M3 6h18v12H3zM3 12h18M9 6v12M15 6v12',
  },
  {
    slug: 'sev-stabilitesi',
    title: 'Şev Stabilitesi',
    description: 'Heyelan önleme, kaya düşmesi bariyeri, istinat duvarı ve çelik hasır ağ sistemleri.',
    image: u(ph[5], 600, 400),
    icon: 'M2 22l10-16 10 16H2zM7 14h10',
  },
  {
    slug: 'geoteknik-test-izleme',
    title: 'Geoteknik Test & İzleme',
    description: 'Statik yükleme, dinamik PDA, PIT testi, inklinometre ve aletsel gözlem sistemleri.',
    image: u(ph[6], 600, 400),
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2',
  },
  {
    slug: 'geoteknik-proje',
    title: 'Geoteknik Proje',
    description: 'Zemin etüdü, projelendirme, derin kazı projesi, saha denetimi ve teknik danışmanlık.',
    image: u(ph[7], 600, 400),
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
    excerpt:'Büyük çaplı (400–1500 mm) yerinde döküm betonarme kazık. Zayıf zeminlerde yüksek taşıma kapasiteli derin temel çözümü.',
    image:u(ph[0],480,320), heroImage:u(ph[0],1200,500),
    content:`
      <div class="aeo-box">Fore kazık; zemin içine döner kafayla delik açılarak donatı yerleştirilip beton dökülen, 400–1500 mm çaplı derin temel elemanıdır.</div>
      <h2 id="nedir">Fore Kazık Nedir?</h2>
      <p>Fore kazık (bored pile), döner kafası olan delgi makineleriyle zemin içine belli çaplarda delikler açılarak üretilen yerinde döküm betonarme kazıklardır. Derinlik 5 m'den 60 m'ye kadar çıkabilir. Titreşim ve gürültü seviyeleri düşük olduğundan kentsel alanlarda güvenle uygulanır.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul>
        <li>Taşıma gücü düşük, heterojen zeminler</li>
        <li>Yüksek yapılar ve endüstriyel tesisler</li>
        <li>Köprü ayakları ve altyapı projeleri</li>
        <li>Komşu yapılara yakın kentsel inşaatlar</li>
      </ul>`,
    faq:[
      {q:'Fore kazık ile çakma kazık arasındaki fark nedir?',a:'Fore kazık yerinde döküm betonarme kazıktır ve titreşimsiz uygulanır. Çakma kazık ise prefabrik olup çakma aparatıyla zemine itilir; kentsel alanlarda sınırlı kullanılır.'},
      {q:'Günde kaç adet fore kazık imal edilebilir?',a:'Zemin koşullarına bağlı olarak günde 4–8 adet kazık imal edilebilir. 50 kazıklık bir proje yaklaşık 1–2 haftada tamamlanır.'},
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
    title:'Jet Grout Uygulaması', shortTitle:'Jet Grout',
    excerpt:'Yüksek basınçlı (200–400 bar) çimento enjeksiyonu ile zemin içinde kolon/panel oluşturma.',
    image:u(ph[3],480,320), heroImage:u(ph[3],1200,500),
    content:`
      <div class="aeo-box">Jet grout; yüksek basınçlı çimento süspansiyonunun zemin partiküllerini kesip parçalayarak yerinde beton benzeri kolonlar oluşturma yöntemidir.</div>
      <h2 id="nedir">Jet Grout Nedir?</h2>
      <p>Tek, çift veya üç akışlı sistemlerle uygulanır. Kolon çapı 0,4–3,0 m, derinlik 50 m'ye kadar olabilir. Mevcut yapı altında minimum titreşimle zemin iyileştirme sağlar.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul><li>Mevcut temel güçlendirme</li><li>Derin kazı çevresi su perdesi</li><li>Sıvılaşabilir zemin iyileştirme</li><li>Tünel ön destekleme</li></ul>`,
    faq:[
      {q:'Jet grout hangi zeminlerde uygulanır?',a:'Kil, silt, kum ve çakıl içeren zeminlerde uygulanır. Çok sert kaya formasyonlarında etkisi sınırlıdır.'},
      {q:'Mevcut yapı altına uygulanabilir mi?',a:'Evet, jet grout az titreşimle çalıştığından mevcut yapı altında güvenle uygulanabilir.'},
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
