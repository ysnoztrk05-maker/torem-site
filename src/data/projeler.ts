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
    title: 'Smart Güneş Enerjileri — Denizli GES',
    category: 'Kazıklı Temel',
    catSlug: 'kazikli-temel',
    location: 'Denizli / Erzin',
    year: '2024',
    client: 'Smart Güneş Enerjileri',
    desc: 'Güneş enerji santrali altyapısı için kazıklı temel çözümü.',
    summary:
      'GES sahalarında yüksek adette küçük yüklü noktasal temeller söz konusudur; hız, tekrarlanabilirlik ve zemin değişkenliği üç temel parametredir. Saha kesitine göre farklı kazık tipleri birlikte kurgulandı.',
    approach:
      'Sert tabakalara uzanan noktalarda fore kazık, erişimin kısıtlı veya saha tabakalaşmasının değişken olduğu bölgelerde mini kazık uygulandı. Uygulama TS EN 1536 ve TS EN 14199 kapsamında yürütüldü.',
    image: '/images/kazikli-temeller/mini-kazik.jpg',
    heroImage: '/images/kazikli-temeller/mini-kazik.jpg',
    tags: ['Fore Kazık', 'Mini Kazık', 'GES', '2024'],
    teknikler: [T.foreKazik, T.miniKazik],
    relatedSlugs: ['bakioglu-freshbak-salihli', 'koray-gyo-cekmekoy'],
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
    desc: 'Lojistik tesis inşaatı için derin kazı iksa sistemi.',
    summary:
      'Gebze bölgesinde yoğun sanayi komşuluğunda yürütülen kazının, çevre yapılarda deformasyon sınırlarını aşmayacak şekilde desteklenmesi gerekti. İksa tasarımı, kazı kademesi bazında çözüldü.',
    approach:
      'Ankrajlı fore kazık iksası tercih edildi; öngermeli ankrajlar TS EN 1537 kapsamında uygulandı. Kazı süresi boyunca yatay deformasyon inklinometre ile izlendi.',
    image: '/images/iksa/diyafram-duvar.jpg',
    heroImage: '/images/iksa/diyafram-duvar.jpg',
    tags: ['İksa', 'Ankraj', 'Kocaeli', '2024'],
    teknikler: [T.ankrajIksa, T.ankraj, T.berlin],
    relatedSlugs: ['sahinler-holding-buyukcekmece', 'emlak-konut-cekmekoy'],
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
];

export function getPruje(slug: string): Proje | undefined {
  return projeler.find((p) => p.slug === slug);
}
