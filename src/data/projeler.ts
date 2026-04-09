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
    result: "Zemin taşıma kapasitesi 3 katına çıkarıldı. Beklenen oturma 15mm'den 4mm'ye düşürüldü. Tüm karot örnekleri 8 MPa hedefini geçti.",
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
    challenge: "1920'li yıllardan kalma tarihi yapının çökmekte olan temelinin güçlendirilmesi. Çalışma alanı 1,8m yüksekliğinde bodrum. Kültür varlığı statüsünde bina.",
    solution: 'Ø114mm çaplı mini kazık sistemi seçildi — bodrum içinde çalışabilecek tek yöntem. 8m derinlikte kaya zeminle bağlantı. Minimum titreşim protokolü uygulandı.',
    result: "Yapı 3mm'den az oturmayla güçlendirildi. Tarihi dokuda hiçbir hasar oluşmadı. Kültür Bakanlığı denetimi geçildi.",
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
