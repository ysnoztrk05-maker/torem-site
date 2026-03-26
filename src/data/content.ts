/**
 * Torem Zemin — Statik Demo İçeriği
 * WP API bağımlılığı yok. Tüm içerik burada.
 */

// ─── Unsplash görsel URL yardımcısı ───────────────────────────────────────────
const u = (id: string, w = 800, h = 500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// ─── Şirket Bilgileri ─────────────────────────────────────────────────────────
export const company = {
  name:    'Torem Zemin Mühendislik',
  slogan:  'Temelden Zirveye Uzanan Çözümler',
  founded: 2003,
  phone1:  '+90 531 659 46 36',
  phone2:  '+90 216 379 33 10',
  email:   'info@toremzemin.com',
  address: 'Kurtköy Mah. Atatürk Bulvarı No:42/B, Pendik / İstanbul',
  mapUrl:  'https://maps.google.com/?q=Pendik+Istanbul',
};

// ─── İstatistikler ────────────────────────────────────────────────────────────
export const stats = [
  { value: 20,  suffix: '+', label: 'Yıl Deneyim'        },
  { value: 600, suffix: '+', label: 'Tamamlanan Proje'   },
  { value: 55,  suffix: '+', label: 'Makine Parkı'        },
  { value: 250, suffix: '+', label: 'Memnun Müşteri'      },
];

// ─── Hizmetler ────────────────────────────────────────────────────────────────
export interface Hizmet {
  slug:        string;
  title:       string;
  shortTitle:  string;
  excerpt:     string;
  image:       string;
  heroImage:   string;
  icon:        string; // SVG path
  category:    string;
  content:     string; // HTML
  faq:         { q: string; a: string }[];
}

export const hizmetler: Hizmet[] = [
  {
    slug:       'fore-kazik',
    title:      'Fore Kazık İmalatı',
    shortTitle: 'Fore Kazık',
    excerpt:    'Büyük çaplı, yüksek taşıma kapasiteli yerinde döküm beton kazık imalatı. Zayıf ve heterojen zeminlerde güvenli derin temel çözümü.',
    image:      u('1504307651254-35680f356dfd', 480, 320),
    heroImage:  u('1504307651254-35680f356dfd', 1200, 500),
    icon:       'M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4',
    category:   'Kazıklı Temeller',
    content: `
      <div class="aeo-box">
        Fore kazık; zemin içine döner kafayla delik açılarak, içine donatı yerleştirilip beton dökülmesiyle oluşturulan,
        çap olarak 400 mm ile 1500 mm arasında değişen derin temel elemanıdır.
      </div>
      <h2 id="nedir">Fore Kazık Nedir?</h2>
      <p>Fore kazık (bored pile), döner kafası olan delgi makineleriyle zemin içine belli çaplarda delikler açılarak üretilen,
      yerinde döküm betonarme kazıklardır. Çap aralığı genellikle 400 mm ile 1500 mm arasında olup, derinlik projeye göre
      5 m'den 60 m'ye kadar çıkabilmektedir.</p>
      <p>Özellikle kil, silt ve yumuşak kayaçlardan oluşan zeminlerde, standart sığ temel sistemlerinin yetersiz kaldığı
      durumlarda tercih edilir. Titreşim ve gürültü seviyeleri düşük olduğundan kentsel alanlarda da güvenle uygulanabilir.</p>
      <h2 id="ne-zaman">Ne Zaman Kullanılır?</h2>
      <p>Aşağıdaki koşullarda fore kazık tercih edilir:</p>
      <ul>
        <li>Taşıma gücü düşük, heterojen zeminler</li>
        <li>Yüksek yapılar ve büyük yüklü endüstriyel tesisler</li>
        <li>Zemin suyunun yüksek olduğu alanlar</li>
        <li>Komşu yapılara yakın inşaatlarda titreşim sorunu olan bölgeler</li>
        <li>Köprü ayakları ve altyapı projelerindeki büyük tekil yükler</li>
      </ul>
      <h2 id="uygulama">Uygulama Aşamaları</h2>
      <p>Fore kazık imalatı aşağıdaki adımlarla gerçekleştirilir:</p>
      <ol>
        <li><strong>Zemin Etüdü:</strong> Zemin profili ve taşıma kapasitesi belirlenir.</li>
        <li><strong>Delgi:</strong> Rotary kafayla belirlenen çap ve derinliğe delik açılır.</li>
        <li><strong>Muhafaza Borusu:</strong> Gevşek formasyon varsa çelik boru kılıf kullanılır.</li>
        <li><strong>Donatı Montajı:</strong> Hesaplanan demir donatı kafesi deliğe indirilir.</li>
        <li><strong>Betonlama:</strong> Tremi borusuyla su altında da beton dökülür.</li>
        <li><strong>Kılıf Çekme:</strong> Beton katılaşırken çelik muhafaza borusu kademeli çekilir.</li>
      </ol>
      <h2 id="avantajlar">Avantajları</h2>
      <ul>
        <li>Yüksek eksenel ve yatay yük kapasitesi</li>
        <li>Titreşimsiz uygulama — komşu yapılara zarar vermez</li>
        <li>Her tür zemin ve su koşulunda uygulanabilir</li>
        <li>Çap ve derinlik esnekliği</li>
        <li>ISO 9001 kontrollü beton kalitesi</li>
      </ul>
    `,
    faq: [
      { q: 'Fore kazık ile çakma kazık arasındaki fark nedir?', a: 'Fore kazık yerinde döküm betonarme kazıktır, titreşimsiz uygulanır. Çakma kazık ise prefabrik olup çakma aparatıyla zemine itilir; titreşim oluşturur ve kentsel alanlarda sınırlamalara tabidir.' },
      { q: 'Minimum ve maksimum çap kaçtır?', a: 'Torem Zemin olarak 400 mm ile 1500 mm arasında fore kazık imalatı yapıyoruz. Projeye göre en uygun çap mühendislerimiz tarafından hesaplanır.' },
      { q: 'Kaç günde tamamlanır?', a: 'Günde ortalama 4–8 adet kazık imal edilebilir. 50 kazıklık bir proje yaklaşık 1–2 hafta sürer. Zemin koşulları ve ekipman kapasitesine göre değişir.' },
      { q: 'Garantisi var mı?', a: 'Evet, tüm fore kazık projelerimiz statik ve/veya dinamik yük testleriyle doğrulanır; proje mühendisliği garantisi verilir.' },
    ],
  },
  {
    slug:       'jet-grout',
    title:      'Jet Grout Uygulaması',
    shortTitle: 'Jet Grout',
    excerpt:    'Yüksek basınçlı çimento süspansiyonuyla zemin içinde sütun veya panel oluşturarak zemin iyileştirme ve su geçirimsizlik sağlama.',
    image:      u('1504307651254-35680f356dfd', 480, 320),
    heroImage:  u('1504307651254-35680f356dfd', 1200, 500),
    icon:       'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18',
    category:   'Zemin İyileştirme',
    content: `
      <div class="aeo-box">
        Jet grout; yüksek basınçlı (200–400 bar) çimento sütunu oluşturma yöntemidir.
        Zemin içine enjekte edilen çimento karışımı, zemin partiküllerini dağıtarak beton benzeri kolonlar üretir.
      </div>
      <h2 id="nedir">Jet Grout Nedir?</h2>
      <p>Jet Grout, yüksek basınçlı su ve çimento süspansiyonunun birleşik etkisiyle zemin partiküllerini kesip
      parçaladıktan sonra çimento ile karıştırarak yerinde beton sütunlar (kolonlar) oluşturma yöntemidir.
      Kısmi ya da tam zemin iyileştirmesi sağlar.</p>
      <p>Uygulama sisteme göre üçe ayrılır: Tek akışlı (monotube), Çift akışlı (bitube) ve Üç akışlı (tritube).
      Kolon çapı 0,4 m ile 3,0 m arasında değişir; derinlik 50 m'ye kadar çıkabilir.</p>
      <h2 id="kullanim">Kullanım Alanları</h2>
      <ul>
        <li>Mevcut yapı temellerinin güçlendirilmesi</li>
        <li>Derin kazı çevresi su geçirimsizliği (perde duvar)</li>
        <li>Boru hat geçişlerinde zemin stabilizasyonu</li>
        <li>Tünel ve metro projelerinde ön destek</li>
        <li>Sıvılaşabilir zeminlerin iyileştirilmesi</li>
      </ul>
    `,
    faq: [
      { q: 'Jet grout hangi zeminlerde uygulanır?', a: 'Kil, silt, kum ve çakıl içeren zeminlerde uygulanabilir. Çok sert kaya formasyonlarında etkisi sınırlıdır.' },
      { q: 'Kolon çapı ne kadar olabilir?', a: 'Tek sistemde 0,4–0,8 m, çift sistemde 0,8–1,5 m, üç sistemde 1,5–3,0 m çaplı kolonlar üretilebilir.' },
      { q: 'Mevcut bir binanın altına uygulanabilir mi?', a: 'Evet, jet grout yönteminin temel avantajlarından biri mevcut yapı altında da az titreşimle uygulanabilmesidir.' },
    ],
  },
  {
    slug:       'ongermeli-ankraj',
    title:      'Öngermeli Ankraj Sistemleri',
    shortTitle: 'Öngermeli Ankraj',
    excerpt:    'İksa perdeleri ve şev stabilitesi için yüksek kapasiteli öngermeli zemin ve kaya ankrajı projelendirme ve uygulaması.',
    image:      u('1541888946425-d81bb19240f5', 480, 320),
    heroImage:  u('1541888946425-d81bb19240f5', 1200, 500),
    icon:       'M12 22V2m-7 9 7-7 7 7M5 21h14',
    category:   'İksa Sistemleri',
    content: `
      <div class="aeo-box">
        Öngermeli ankraj; derin kazı çevrelerinde yer alan iksa perdeleri, şev yüzeyleri ve
        yapı temellerinin stabilitesini sağlamak için zemin veya kayaya yerleştirilen gergi elemanlarıdır.
      </div>
      <h2 id="nedir">Öngermeli Ankraj Nedir?</h2>
      <p>Öngermeli ankraj (prestressed anchor), zemin ya da kaya kütlesine bağlantılı olarak çekme yükü aktaran
      yüksek kapasiteli gergi elemanlarıdır. Tendon olarak adlandırılan çelik kablo ya da çubuktan oluşur.
      Tasarım yüküne göre ön germe yapılır ve kama kilitleme sistemi ile ankraj başlığına sabitlenir.</p>
      <h2 id="cesitleri">Ankraj Çeşitleri</h2>
      <ul>
        <li><strong>Geçici Ankraj:</strong> İnşaat süresiyle sınırlı, en fazla 2 yıl kullanılır.</li>
        <li><strong>Kalıcı Ankraj:</strong> Korozyon korumalı, 50+ yıl tasarım ömrü.</li>
        <li><strong>Zemin Ankrajı:</strong> Kil, kum, çakıl gibi zemin formasyonlarında.</li>
        <li><strong>Kaya Ankrajı:</strong> Sert kaya kütlelerinde, özellikle şev stabilitesinde.</li>
      </ul>
    `,
    faq: [
      { q: 'Ankraj kapasitesi nasıl belirlenir?', a: 'Zemin özellikleri, ankraj uzunluğu ve çapına bağlı olarak çekme deneyleri ile doğrulanan analitik hesaplamalarla belirlenir.' },
      { q: 'Ankrajlar ne sıklıkla kontrol edilmeli?', a: 'Kalıcı ankrajlarda yıllık periyodik izleme önerilir. Torem Zemin ankraj izleme ve yeniden germe hizmetleri sunmaktadır.' },
    ],
  },
  {
    slug:       'mini-kazik',
    title:      'Mini Kazık Uygulaması',
    shortTitle: 'Mini Kazık',
    excerpt:    'Dar ve sınırlı alanlarda, mevcut yapıların güçlendirilmesinde ve ulaşımı zor bölgelerde 150–300 mm çaplı küçük eksenli kazık çözümleri.',
    image:      u('1486325212027-8081e485255e', 480, 320),
    heroImage:  u('1486325212027-8081e485255e', 1200, 500),
    icon:       'M8 2v20M16 2v20M3 7h18M3 17h18',
    category:   'Kazıklı Temeller',
    content: `
      <div class="aeo-box">
        Mini kazık (mikro kazık); 150 mm ile 300 mm arasında küçük çaplı,
        donatılı-enjeksiyonlu kazık tipidir. Özellikle bodrum katlarda,
        dar alanlarda ve mevcut temellerin güçlendirilmesinde tercih edilir.
      </div>
      <h2 id="nedir">Mini Kazık Nedir?</h2>
      <p>Mini kazık (micropile), küçük çaplı (150–300 mm) delgi makinesiyle açılan deliğe donatı
      yerleştirip basınçlı çimento enjeksiyonu yapılmasıyla oluşturulan kazıktır. Taşıma kapasitesi
      donatı boyutuna ve enjeksiyon basıncına bağlı olarak 500 kN ile 3000 kN arasında değişebilir.</p>
      <h2 id="avantajlar">Avantajları</h2>
      <ul>
        <li>Düşük tavanlı mekânlarda uygulanabilir (min. 2,5 m)</li>
        <li>Her yönde (dikey, eğimli) imalat mümkün</li>
        <li>Mevcut temellere minimum hasarla bağlantı</li>
        <li>Kompakt makine — dar arazilerde erişim kolaylığı</li>
      </ul>
    `,
    faq: [
      { q: 'Mini kazık ile fore kazık arasındaki fark nedir?', a: 'Mini kazık 150–300 mm çaplı, küçük ekipmanla uygulanan enjeksiyonlu bir kazıktır. Fore kazık 400–1500 mm çaplı, daha büyük taşıma kapasitelidir.' },
      { q: 'Mevcut bir binanın bodrum katında uygulanabilir mi?', a: 'Evet, bu mini kazığın en önemli kullanım alanıdır. Minimum 2,5 m tavan yüksekliğinde uygulanabilir.' },
    ],
  },
  {
    slug:       'zemin-civisi',
    title:      'Zemin Çivisi (Soil Nailing)',
    shortTitle: 'Zemin Çivisi',
    excerpt:    'Kazı şevlerinin ve doğal yamaçların pasif çelik donatı ile stabilizasyonu. Ekonomik, hızlı uygulamalı şev tutma yöntemi.',
    image:      u('1580674684081-7617fbf3d745', 480, 320),
    heroImage:  u('1580674684081-7617fbf3d745', 1200, 500),
    icon:       'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    category:   'İksa Sistemleri',
    content: `
      <div class="aeo-box">
        Zemin çivisi (soil nailing); zemin kütlesine yoğun aralıklı pasif çelik donatı
        yerleştirilerek zemin-donatı bütünleşik bir kütleye dönüştürülmesi yöntemidir.
      </div>
      <h2 id="nedir">Zemin Çivisi Nedir?</h2>
      <p>Zemin çivisi (soil nailing), dik kazı şevlerini ve doğal yamaçları güçlendirmek için
      kullanılan geoteknik bir iksa yöntemidir. Yaklaşık 1,0–1,5 m aralıklarla yerleştirilen
      çelik donatılar, zemine tutunma boyu oluşturarak şevin kaymasına karşı direnç sağlar.</p>
      <p>Yüzey püskürtme beton (shotcrete) ile kaplanarak şevin su ve hava etkisine karşı
      korunması da sistemin bir parçasıdır.</p>
    `,
    faq: [
      { q: 'Zemin çivisi hangi şev açılarında uygulanır?', a: '45° ile 90° arasındaki şev açılarında uygulanabilir. Dikey kesilerde bile başarılı sonuçlar elde edilmektedir.' },
      { q: 'Zemin çivisi ile ankraj arasındaki fark nedir?', a: 'Zemin çivisi pasif çalışır, germe yapılmaz. Ankraj ise aktif sistemdir, tasarım gerilmesine gerilerek işlev görür. Zemin çivisi genellikle daha ekonomiktir.' },
    ],
  },
  {
    slug:       'iksa-sistemleri',
    title:      'İksa Sistemleri',
    shortTitle: 'İksa',
    excerpt:    'Derin kazı çevrelerinde yapı ve zemin güvenliğini sağlayan fore kazıklı, ankrajlı, sürtünme kazıklı ve kesişen kazıklı iksa çözümleri.',
    image:      u('1558618666-fcd25c85cd64', 480, 320),
    heroImage:  u('1558618666-fcd25c85cd64', 1200, 500),
    icon:       'M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11',
    category:   'İksa Sistemleri',
    content: `
      <div class="aeo-box">
        İksa; derin kazı çevrelerindeki zemin ve su basıncına karşı koymak için
        tasarlanan geçici ya da kalıcı destek sistemlerinin genel adıdır.
      </div>
      <h2 id="nedir">İksa Nedir?</h2>
      <p>İksa (excavation support / retaining system), bodrum kat inşaatlarında, altyapı projelerinde
      ve derin açık kazılarda yan zemin hareketlerini engellemek amacıyla uygulanan destek sistemidir.
      Tasarım, zemin koşulları, kazı derinliği, komşu yapı durumu ve yeraltı suyu seviyesine göre belirlenir.</p>
      <h2 id="yontemler">İksa Yöntemleri</h2>
      <ul>
        <li><strong>Fore Kazıklı İksa:</strong> Yan yana fore kazıklar perdesi, en yaygın yöntem.</li>
        <li><strong>Kesişen Kazıklı (Secant) İksa:</strong> Su geçirimsizlik gerektiren durumlarda.</li>
        <li><strong>Jet Grout İksa Perdesi:</strong> Mevcut yapı yakınında titreşimsiz çözüm.</li>
        <li><strong>Palplanş İksa:</strong> Çelik profil kazıklar, düşük su tablalı alanlarda.</li>
      </ul>
    `,
    faq: [
      { q: 'İksa projesi için ne kadar önceden hazırlık yapılmalı?', a: 'En az 4–6 hafta öncesinden zemin etüdü ve statik hesap tamamlanmalıdır. Proje boyutuna göre bu süre uzar.' },
      { q: 'İksa sistemi kalıcı mı kullanılabilir?', a: 'Geçici tasarımlar inşaat süresince kullanılır. Kalıcı iksa perdeleri ise yapının ömrü boyunca aktif kalan bodrum duvarı görevini üstlenir.' },
    ],
  },
];

// ─── Blog Yazıları ────────────────────────────────────────────────────────────
export interface BlogPost {
  slug:      string;
  title:     string;
  date:      string;
  excerpt:   string;
  image:     string;
  heroImage: string;
  category:  string;
  readTime:  string;
  content:   string;
}

export const blogPosts: BlogPost[] = [
  {
    slug:     'zemin-etudi-neden-onemli',
    title:    'Zemin Etüdü Neden Yapı Güvenliğinin Temel Taşıdır?',
    date:     '15 Mart 2026',
    excerpt:  'Bir yapının kalıcılığı, temelden başlar. Zemin etüdü atlandığında oluşabilecek riskler ve doğru geoteknik araştırmanın önemi.',
    image:    u('1477959858617-67f85cf4f1df', 480, 300),
    heroImage:u('1477959858617-67f85cf4f1df', 1200, 500),
    category: 'Geoteknik',
    readTime: '6 dakika',
    content: `
      <div class="aeo-box">
        Zemin etüdü; yapı inşaatından önce arazinin taşıma kapasitesini, katman yapısını
        ve yeraltı suyu koşullarını belirlemek amacıyla yapılan araştırma çalışmaları bütünüdür.
      </div>
      <h2>Neden Bu Kadar Önemli?</h2>
      <p>Her yıl Türkiye'de deprem, oturma ve zemin kayması kaynaklı onlarca bina hasarı yaşanmaktadır.
      Bu hasarların büyük bölümünün ortak paydası yetersiz zemin araştırmasıdır. İnşaat maliyetinin
      %1–2'sine mal olan bir zemin etüdü, proje ömrü boyunca milyonlarca liralık riski bertaraf edebilir.</p>
      <h2>Zemin Etüdü Kapsamı</h2>
      <ul>
        <li><strong>Saha Araştırması:</strong> Sondaj, standart penetrasyon testi (SPT), presiyometre</li>
        <li><strong>Laboratuvar Deneyleri:</strong> Granülometri, kıvam limitleri, serbest basınç</li>
        <li><strong>Değerlendirme ve Rapor:</strong> Zemin profili, taşıma kapasitesi, oturma analizi</li>
      </ul>
      <h2>Etütsüz İnşaatın Riskleri</h2>
      <p>Zemin etüdü yapılmadan inşa edilen yapılarda; dengesiz oturmalar, temel çatlakları,
      sıvılaşma hasarları ve en kötü senaryoda kısmi yada tam çökme görülebilir.
      TBDY 2018 ve TS 500 standartları zemin etüdünü zorunlu kılmaktadır.</p>
      <h2>Torem Zemin'den Zemin Etüdü Hizmeti</h2>
      <p>Deneyimli geoteknik mühendislerimiz sondaj, SPT ve laboratuvar analizlerini kapsayan
      tam kapsamlı zemin etüdü hizmeti sunmaktadır. Raporlarımız TBDY 2018 ve Eurocode 7
      standartlarına uygundur.</p>
    `,
  },
  {
    slug:     'fore-kazik-vs-cakma-kazik',
    title:    'Fore Kazık mı, Çakma Kazık mı? Doğru Tercihin Kılavuzu',
    date:     '28 Şubat 2026',
    excerpt:  'İki temel derin temel yöntemini karşılaştırıyoruz: Fore kazık ve çakma kazık arasındaki farklar, avantajlar ve hangi projede ne seçilmeli.',
    image:    u('1581094271901-8022df4466f9', 480, 300),
    heroImage:u('1581094271901-8022df4466f9', 1200, 500),
    category: 'Teknik',
    readTime: '8 dakika',
    content: `
      <div class="aeo-box">
        Fore kazık ile çakma kazık arasındaki temel fark uygulama yöntemidir:
        fore kazık yerinde döküm, çakma kazık ise fabrikada üretilip zemine itilir.
      </div>
      <h2>Hızlı Karşılaştırma Tablosu</h2>
      <table>
        <thead>
          <tr><th>Özellik</th><th>Fore Kazık</th><th>Çakma Kazık</th></tr>
        </thead>
        <tbody>
          <tr><td>Uygulama yöntemi</td><td>Yerinde döküm</td><td>Çakma/vibrasyonlu itme</td></tr>
          <tr><td>Titreşim</td><td>Düşük / yok</td><td>Yüksek</td></tr>
          <tr><td>Kentsel kullanım</td><td>Uygun</td><td>Kısıtlı</td></tr>
          <tr><td>Çap aralığı</td><td>400–1500 mm</td><td>200–600 mm</td></tr>
          <tr><td>Maliyet</td><td>Orta-Yüksek</td><td>Orta</td></tr>
          <tr><td>Üretim hızı</td><td>Günde 4–8 adet</td><td>Günde 20–50 adet</td></tr>
        </tbody>
      </table>
      <h2>Kentsel Projeler için Fore Kazık</h2>
      <p>Komşu yapıların, metro hatlarının ya da altyapı borularının yakınında çalışıldığında
      fore kazık tercih edilmelidir. Titreşim ve zemin deplasmanı minimumdur.</p>
      <h2>Seri Üretim Gerektiren Projeler için Çakma Kazık</h2>
      <p>Yüzlerce kazık içeren fabrika, köprü veya endüstriyel tesis temellerinde
      çakma kazık üretim hızı ve birim maliyet avantajı sağlar.</p>
    `,
  },
  {
    slug:     'depreme-dayanikli-temel-tasarimi',
    title:    'TBDY 2018\'e Göre Depreme Dayanıklı Temel Tasarımı',
    date:     '10 Ocak 2026',
    excerpt:  'Türkiye Bina Deprem Yönetmeliği 2018 kapsamında derin temel sistemlerinin deprem etkisi altında tasarım esasları ve geoteknik gereklilikler.',
    image:    u('1513467535987-fd81bc7d62f8', 480, 300),
    heroImage:u('1513467535987-fd81bc7d62f8', 1200, 500),
    category: 'Yönetmelik',
    readTime: '10 dakika',
    content: `
      <div class="aeo-box">
        TBDY 2018; deprem bölgesi, zemin sınıfı ve yapı önem katsayısına göre temel
        tasarımı için bağlayıcı kurallar ve zemin etüdü zorunlulukları belirlemektedir.
      </div>
      <h2>TBDY 2018 ve Zemin Sınıflandırması</h2>
      <p>Yönetmelik ZA'dan ZF'ye kadar altı zemin sınıfı tanımlar. Zemin sınıfı,
      deprem spektrum katsayısını doğrudan etkiler. ZE ve ZF sınıfı zeminlerde
      özel zemin araştırması ve iyileştirme zorunlu tutulmaktadır.</p>
      <h2>Sıvılaşma Riski Değerlendirmesi</h2>
      <p>Gevşek, doygun kumlu zeminlerde deprem sırasında sıvılaşma tehlikesi söz konusudur.
      TBDY 2018 Bölüm 16, sıvılaşma riski analizi ve gerekiyorsa iyileştirme yöntemlerini
      kapsamlı biçimde ele almaktadır.</p>
      <h2>Derin Temel Sistemlerine Özgün Gereklilikler</h2>
      <ul>
        <li>Kazık yük-deformasyon analizinin sahaya özgü zemin parametreleriyle yapılması</li>
        <li>Yatay deprem kuvvetlerine karşı kazık başlık rijitliği hesabı</li>
        <li>Zemin-yapı etkileşimi (ZYE) modellemesi</li>
        <li>Zemin büyütme etkilerinin spektral analize yansıtılması</li>
      </ul>
    `,
  },
];

// ─── Hizmet yardımcıları ──────────────────────────────────────────────────────
export function getHizmet(slug: string): Hizmet | undefined {
  return hizmetler.find((h) => h.slug === slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// ─── Navigasyon ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Ana Sayfa',     href: '/'               },
  { label: 'Kurumsal',      href: '/kurumsal/'      },
  { label: 'Hizmetlerimiz', href: '/hizmetlerimiz/' },
  { label: 'Projelerimiz',  href: '/projelerimiz/'  },
  { label: 'Blog',          href: '/blog/'          },
  { label: 'İletişim',      href: '/iletisim/'      },
];
