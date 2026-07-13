// Torem Zemin — Referans projeler (gerçek arşiv verileri)
// Kaynak: src/data/projeler-arsivi.md — canlı sitedeki proje envanteri
// Kural: Uydurma metrik / müşteri / rakam YASAK. Sadece arşivde geçen
// müşteri adı, lokasyon, yıl ve proje türü kullanılır; teknik içerik
// sektör standartlarına (TS EN 1536, TS EN 1537, TS EN 12716, TBDY 2018)
// referansla genel yazılır.

export interface Teknik {
  slug: string;
  name: string;
  href: string;
}

export interface Proje {
  slug: string;
  title: string;
  category: string;
  catSlug: 'kazikli-temel' | 'iksa' | 'zemin-iyilestirme';
  location: string;
  year: string;
  client: string;
  desc: string;
  summary: string;
  approach: string;
  image: string;
  heroImage: string;
  tags: string[];
  teknikler: Teknik[];
  relatedSlugs: string[];

  // Faz C — derin case study alanları (opsiyonel — eski 8 proje minimal kalabilir)
  galeri?: string[];                              // 3-5 saha fotoğrafı yolu
  santiyeVerileri?: { l: string; v: string }[];   // [{l:'Kazık Adedi', v:'420'}, ...]
  sonucEtki?: string;                             // 1 paragraf — proje tamamlandığında ne sağlandı
  testimonialSlug?: string;                       // referanslar.ts:musteriIfadeleri firmaSlug eşleşmesi
  zamanCizelgesi?: { tarih: string; olay: string }[]; // [{tarih:'Mart 2024', olay:'Saha mobilizasyonu'}, ...]
}

const T = {
  foreKazik:   { slug: 'fore-kazik',          name: 'Fore Kazık',          href: '/faaliyet-alanlari/kazikli-temeller/fore-kazik/' },
  miniKazik:   { slug: 'mini-kazik',          name: 'Mini Kazık',          href: '/faaliyet-alanlari/kazikli-temeller/mini-kazik/' },
  cfaKazik:    { slug: 'cfa-kazik',           name: 'CFA Kazık',           href: '/faaliyet-alanlari/kazikli-temeller/cfa-kazik/' },
  baretKazik:  { slug: 'baret-kazik',         name: 'Baret Kazık',         href: '/faaliyet-alanlari/kazikli-temeller/baret-kazik/' },
  ankrajIksa:  { slug: 'ankrajli-fore-kazik', name: 'Ankrajlı Fore Kazık', href: '/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/' },
  berlin:      { slug: 'berlin-duvari',       name: 'Berlin Duvarı',       href: '/faaliyet-alanlari/iksa-sistemleri/berlin-duvari/' },
  jetGrout:    { slug: 'jet-grout',           name: 'Jet Grout',           href: '/faaliyet-alanlari/zemin-iyilestirme/jet-grout/' },
  dsm:         { slug: 'deep-soil-mixing',    name: 'Deep Soil Mixing',    href: '/faaliyet-alanlari/zemin-iyilestirme/deep-soil-mixing/' },
  ankraj:      { slug: 'ongermeli-ankraj',    name: 'Öngermeli Ankraj',    href: '/faaliyet-alanlari/destekleme-ankraj/ongermeli-ankraj/' },
  zeminCivisi: { slug: 'zemin-civisi',        name: 'Zemin Çivisi',        href: '/faaliyet-alanlari/destekleme-ankraj/zemin-civisi/' },
  puskurtme:   { slug: 'puskurtme-beton',     name: 'Püskürtme Beton',     href: '/faaliyet-alanlari/iksa-sistemleri/puskurtme-beton/' },
} satisfies Record<string, Teknik>;

export const projeler: Proje[] = [
  {
    slug: 'sahinler-holding-buyukcekmece',
    title: 'Şahinler Holding — Büyükçekmece',
    category: 'İksa + Kazıklı Temel',
    catSlug: 'iksa',
    location: 'İstanbul / Büyükçekmece',
    year: '2024',
    client: 'Şahinler Holding A.Ş',
    desc: 'Karma kullanım geliştirme projesi için iksa sistemi ve fore kazık temel uygulaması.',
    summary:
      'Büyükçekmece sahasında iksa ve temel işleri tek paket halinde yürütüldü. Derin kazı ihtiyacı ile yapının taşıyıcı sistemi birbirine bağlı tasarlandı; böylece zemin–yapı etkileşimi proje başından kontrol altına alındı.',
    approach:
      'Kazı çevresinde ankrajlı fore kazık iksası, yapının oturduğu alanda ise TS EN 1536 kapsamında fore kazık temel uygulandı. Komşu yapılarla ilişkili bölgelerde deformasyon izleme planı kuruldu.',
    image: '/images/iksa/ankrajli-fore-kazik.jpg',
    heroImage: '/images/iksa/ankrajli-fore-kazik.jpg',
    tags: ['İksa', 'Fore Kazık', 'İstanbul', '2024'],
    teknikler: [T.ankrajIksa, T.foreKazik, T.ankraj],
    relatedSlugs: ['emlak-konut-cekmekoy', 'aslanturk-lojistik-gebze'],
  },
  {
    slug: 'bakioglu-freshbak-salihli',
    title: 'Bakioğlu Holding & Freshbak — Salihli OSB',
    category: 'Kazıklı Temel + Zemin İyileştirme',
    catSlug: 'kazikli-temel',
    location: 'Manisa / Salihli / Organize Sanayi',
    year: '2024',
    client: 'Bakioğlu Holding & Freshbak',
    desc: 'Salihli Organize Sanayi Bölgesi endüstriyel yatırımı için kazıklı temel ve zemin iyileştirme paketi.',
    summary:
      'Gıda sektörü yatırımının yapı yükleri ve saha zemini birlikte değerlendirildi; temel sistemi ile zemin iyileştirme kararı tek tasarım çerçevesinde verildi. Üretim hattı planına uygun iş programı kuruldu.',
    approach:
      'Ağır yük hatları altında fore kazık, daha zayıf birimler altında jet grout kolonları tercih edildi. Uygulamalar TS EN 1536 ve TS EN 12716 kapsamında yürütüldü; karot ve statik yükleme testleriyle sahada doğrulandı.',
    image: '/images/jet-grout/jet-grout-santiye.webp',
    heroImage: '/images/jet-grout/jet-grout-santiye.webp',
    tags: ['Kazıklı Temel', 'Jet Grout', 'OSB', '2024'],
    teknikler: [T.foreKazik, T.jetGrout, T.dsm],
    relatedSlugs: ['smart-gunes-denizli', 'safir-gemicilik-tuzla'],
  },
  {
    slug: 'emlak-konut-cekmekoy',
    title: 'Emlak Konut & Öz Kıyı — Çekmeköy',
    category: 'Kazıklı Temel',
    catSlug: 'kazikli-temel',
    location: 'İstanbul / Çekmeköy',
    year: '2024',
    client: 'Emlak Konut & Öz Kıyı İnşaat',
    desc: 'Kamu kaynaklı konut geliştirme projesi için fore kazık temel sistemi.',
    summary:
      'Kamu iş ortaklığı ile yürütülen konut projesinin zemin koşulları, kazık boy–çap seçimini doğrudan belirledi. Uygulama, tasarım ekibiyle yakın koordinasyon içinde adım adım teslim edildi.',
    approach:
      'Fore kazık imalatı TS EN 1536 esaslarına göre planlandı. Beton ve donatı kalite kontrol zinciri, imalat öncesinde yazılı prosedüre bağlandı; her kazık için imalat kaydı tutuldu.',
    image: '/images/kazikli-temeller/fore-kazik.jpg',
    heroImage: '/images/kazikli-temeller/fore-kazik.jpg',
    tags: ['Fore Kazık', 'Konut', 'İstanbul', '2024'],
    teknikler: [T.foreKazik, T.cfaKazik],
    relatedSlugs: ['koray-gyo-cekmekoy', 'sahinler-holding-buyukcekmece'],
  },
  {
    slug: 'gemak-altinova-tersane',
    title: 'Gemak Gemi İnşaat — Altınova Tersane',
    category: 'Kazıklı Temel',
    catSlug: 'kazikli-temel',
    location: 'Yalova / Altınova Tersaneler Bölgesi',
    year: '2022',
    client: 'Gemak Gemi İnş. A.Ş',
    desc: 'Tersane sahasında gemi inşa faaliyetleri için kazıklı temel uygulaması.',
    summary:
      'Deniz kenarı saha koşulları — yüksek taban suyu, yumuşak tabakalar — temel çözümünde belirleyici oldu. Yapı ve ekipman yükleri birlikte hesaba katıldı.',
    approach:
      'Yüksek kapasite gerektiren noktalarda fore ve baret kazık alternatifleri birlikte değerlendirildi. Uygulamalar TS EN 1536 kapsamında yürütüldü; kazık bütünlüğü düşük deformasyon (PIT) testleriyle kontrol edildi.',
    image: '/images/kazikli-temeller/baret-kazik.jpg',
    heroImage: '/images/kazikli-temeller/baret-kazik.jpg',
    tags: ['Fore Kazık', 'Tersane', 'Yalova', '2022'],
    teknikler: [T.foreKazik, T.baretKazik],
    relatedSlugs: ['bakioglu-freshbak-salihli', 'safir-gemicilik-tuzla'],
  },
  {
    slug: 'smart-gunes-denizli',
    title: 'Smart Güneş Enerjileri — Çivril GES',
    category: 'Kazıklı Temel',
    catSlug: 'kazikli-temel',
    location: 'Denizli / Çivril',
    year: '2024',
    client: 'Smart Güneş Enerjileri (Fortis Enerji ortaklığı)',
    desc: '100 MW güneş enerji santrali için 35.000 adet havalı sistem mini kazık temel uygulaması.',
    summary:
      'Denizli Çivril\'deki 100 MW kurulu güçteki güneş enerji santrali için panel taşıyıcı sistemin temellerini sağladığımız bir saha. Bloklu kireçtaşı zemin koşulları, doğru ekipman ve uygulama disiplini gerektirdi.',
    approach:
      'Saha bloklu kireçtaşı ve dolgu zemin yapısına sahipti; bu koşullarda klasik delgi yöntemleri kazık geometrisini koruyamaz. Tarafımızdan havalı sistem (down-the-hole) mini kazık delgisi tercih edildi: Ø30 cm × 1,5 m geometrisinde, 35.000 adet kazık imalatı 4 ayda tamamlandı. Saha mobilizasyonu ve makine seçimi proje süresini doğrudan etkileyen kritik kararlardı.',
    image: '/images/projeler/smart-civril/smart-civril-01-saha-mobilizasyon.jpg',
    heroImage: '/images/projeler/smart-civril/smart-civril-01-saha-mobilizasyon.jpg',
    tags: ['Mini Kazık', 'Havalı Sistem', 'GES', 'Denizli', '2024'],
    teknikler: [T.miniKazik],
    relatedSlugs: ['bakioglu-freshbak-salihli', 'koray-gyo-cekmekoy'],

    santiyeVerileri: [
      { l: 'Kazık Adedi',      v: '35.000' },
      { l: 'Kazık Çapı',       v: 'Ø30 cm' },
      { l: 'Kazık Boyu',       v: '1,5 m'  },
      { l: 'Panel Gücü',       v: '100 MW' },
      { l: 'Saha Süresi',      v: '4 ay'   },
      { l: 'Delgi Sistemi',    v: 'Havalı (DTH)' },
    ],
    galeri: [
      '/images/projeler/smart-civril/smart-civril-01-saha-mobilizasyon.jpg',
      '/images/projeler/smart-civril/smart-civril-02-saha-genel.jpg',
      '/images/projeler/smart-civril/smart-civril-03-delgi-yakin.jpg',
      '/images/projeler/smart-civril/smart-civril-04-aksiyon.jpg',
      '/images/projeler/smart-civril/smart-civril-05-bloklu-zemin.jpg',
    ],
    sonucEtki:
      'Bloklu kireçtaşı ve dolgu zemin yapısının yarattığı delgi zorluğuna rağmen 35.000 adet kazık 4 ayda tamamlandı. Kazıklar panel taşıyıcı sistemini bloklu zemine sabitleyerek santralin uzun ömürlü taşıyıcılığını sağladı. Panel kurulum ekibi öngörülen takvimde sahaya girebildi.',
    testimonialSlug: 'fortis-enerji',
  },
  {
    slug: 'koray-gyo-cekmekoy',
    title: 'Koray GYO — Çekmeköy',
    category: 'Kazıklı Temel',
    catSlug: 'kazikli-temel',
    location: 'İstanbul / Çekmeköy',
    year: '2021',
    client: 'Koray GYO A.Ş',
    desc: 'Konut geliştirme projesi için kazıklı temel uygulaması.',
    summary:
      'Çekmeköy bölgesi konut yatırımında, yapının taşıyıcı sistem tercihiyle uyumlu kazıklı temel çözümü uygulandı. Proje, tasarım–imalat iletişiminin tek elden yürütülmesiyle süre hedeflerine göre teslim edildi.',
    approach:
      'Fore kazık uygulaması TS EN 1536 kapsamında planlandı. Beton döküm, donatı kafesi ve kazık bütünlük kontrolleri imalat sırasında saha mühendisi tarafından kayıt altına alındı.',
    image: '/images/kazikli-temeller/cfa-kazik.jpg',
    heroImage: '/images/kazikli-temeller/cfa-kazik.jpg',
    tags: ['Fore Kazık', 'GYO', 'İstanbul', '2021'],
    teknikler: [T.foreKazik, T.cfaKazik],
    relatedSlugs: ['emlak-konut-cekmekoy', 'sahinler-holding-buyukcekmece'],
  },
  {
    slug: 'aslanturk-lojistik-gebze',
    title: 'Aslantürk Lojistik — Gebze',
    category: 'İksa Sistemleri',
    catSlug: 'iksa',
    location: 'Kocaeli / Gebze',
    year: '2024',
    client: 'Aslantürk Lojistik',
    desc: 'Lojistik tesis inşaatı için derin kazı iksa sistemi — zemin çivisi, ankraj ve püskürtme beton.',
    summary:
      'Gebze bölgesinde yoğun sanayi komşuluğunda yürütülen kazının, çevre yapılarda deformasyon sınırlarını aşmayacak şekilde desteklenmesi gerekti. İksa tasarımı, kazı kademesi bazında çözüldü.',
    approach:
      'Kazı yüzeyi zemin çivisi ve öngermeli ankrajla kademeli olarak desteklendi; hasır donatı serildikten sonra püskürtme beton (shotcrete) ile yüzey kaplandı. Ankraj uygulaması TS EN 1537 kapsamında yürütüldü, kazı boyunca yatay deformasyon izlendi.',
    image: '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-01.jpg',
    heroImage: '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-02.jpg',
    tags: ['İksa', 'Zemin Çivisi', 'Püskürtme Beton', 'Kocaeli', '2024'],
    teknikler: [T.zeminCivisi, T.ankraj, T.puskurtme],
    relatedSlugs: ['sahinler-holding-buyukcekmece', 'emlak-konut-cekmekoy'],
    galeri: [
      '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-01.jpg',
      '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-02.jpg',
      '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-03.jpg',
      '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-04.jpg',
      '/images/projeler/aslanturk-lojistik-gebze/aslanturk-lojistik-gebze-05.jpg',
    ],
  },
  {
    slug: 'safir-gemicilik-tuzla',
    title: 'Safir Gemicilik — Tuzla',
    category: 'Zemin İyileştirme',
    catSlug: 'zemin-iyilestirme',
    location: 'İstanbul / Tuzla',
    year: '2022',
    client: 'Safir Gemicilik',
    desc: 'Endüstriyel saha için zemin iyileştirme uygulaması.',
    summary:
      'Tuzla bölgesi tersane komşuluğunda gevşek ve doygun zeminlerin taşıma gücü ile oturma davranışının iyileştirilmesi gerekti. Seçilen yöntem, yapı yükleri ve ekipman servis yükleri birlikte düşünülerek belirlendi.',
    approach:
      'Jet grout kolonları ve noktasal olarak derin karıştırma (DSM) alternatifi birlikte değerlendirildi; uygulamalar TS EN 12716 kapsamında yürütüldü. Karot alımı ile dayanım doğrulandı.',
    image: '/images/jet-grout/jet-grout-uygulama.webp',
    heroImage: '/images/jet-grout/jet-grout-uygulama.webp',
    tags: ['Jet Grout', 'Tersane', 'İstanbul', '2022'],
    teknikler: [T.jetGrout, T.dsm],
    relatedSlugs: ['bakioglu-freshbak-salihli', 'gemak-altinova-tersane'],
  },
  {
    slug: 'akar-toki-izmir-okul',
    title: 'Akar Yapı & TOKİ — İzmir Okul Projesi',
    category: 'Kazıklı Temel',
    catSlug: 'kazikli-temel',
    location: 'İzmir / Bornova',
    year: '2024',
    client: 'Akar Yapı & TOKİ',
    desc: 'TOKİ koordinasyonundaki okul yapısı için fore kazık temel ve iksa uygulaması.',
    summary:
      'İzmir Bornova\'da kamu eğitim yatırımı kapsamındaki okul yapısının temeli, çevre binalarla bitişik ve sıkışık kentsel bir sahada kuruldu. Yapı yükünü güvenle taşıyacak fore kazık temel sistemi ile kazı güvenliği birlikte çözüldü.',
    approach:
      'Sınırlı manevra alanına uygun kompakt delgi makinesiyle fore kazıklar imal edildi; imalat TS EN 1536 kapsamında yürütüldü. Bitişik yapı komşuluğunda kazı güvenliği için iksa sistemi birlikte planlandı ve saha koordinasyonu bu kısıt gözetilerek yürütüldü.',
    image: '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-01.jpg',
    heroImage: '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-01.jpg',
    tags: ['Fore Kazık', 'İksa', 'Okul', 'İzmir', '2024'],
    teknikler: [T.foreKazik, T.ankrajIksa],
    relatedSlugs: ['emlak-konut-cekmekoy', 'sahinler-holding-buyukcekmece'],
    galeri: [
      '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-01.jpg',
      '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-02.jpg',
      '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-03.jpg',
      '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-04.jpg',
      '/images/projeler/akar-toki-izmir-okul/akar-toki-izmir-okul-05.jpg',
    ],
  },
  {
    slug: 'millet-bahcesi-usak',
    title: 'Millet Bahçesi — Uşak',
    category: 'İksa Sistemleri',
    catSlug: 'iksa',
    location: 'Uşak / Merkez',
    year: '2024',
    client: 'Derinsu Proje & TOKİ',
    desc: 'TOKİ Millet Bahçesi projesi için öngermeli ankrajlı iksa uygulaması.',
    summary:
      'TOKİ koordinasyonunda yürütülen Uşak Millet Bahçesi düzenlemesinde, derin kazı çevresindeki zeminin yanal olarak desteklenmesi gerekti. İksa sistemi, kazı geometrisi ve çevre kotlarına göre kademeli tasarlandı.',
    approach:
      'Kazı yüzeyi öngermeli ankrajlarla desteklendi; ankraj uygulaması TS EN 1537 kapsamında yürütüldü. Donatı ve yüzey kaplaması ile kalıcı yanal güvenlik sağlandı, çevre kullanım alanlarıyla uyumlu bir saha düzeni korundu.',
    image: '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-01.jpg',
    heroImage: '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-01.jpg',
    tags: ['Öngermeli Ankraj', 'İksa', 'Uşak', '2024'],
    teknikler: [T.ankraj, T.ankrajIksa],
    relatedSlugs: ['aslanturk-lojistik-gebze', 'sahinler-holding-buyukcekmece'],
    galeri: [
      '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-01.jpg',
      '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-02.jpg',
      '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-03.jpg',
      '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-04.jpg',
      '/images/projeler/millet-bahcesi-usak/millet-bahcesi-usak-05.jpg',
    ],
  },
];

export function getPruje(slug: string): Proje | undefined {
  return projeler.find((p) => p.slug === slug);
}
