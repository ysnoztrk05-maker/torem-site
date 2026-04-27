// src/data/sirket.ts
// Tüm şirket verileri tek kaynak — buradan değişir, her yerde güncellenir

export const sirket = {
  ad: 'Torem Zemin Mühendisliği',
  kurulus: 2013,
  deneyimYil: new Date().getFullYear() - 2013, // otomatik hesaplanır
  telefon: '+90 531 659 46 36',
  telefon2: '+90 216 379 33 10',
  whatsapp: '905316594636',
  email: 'info@toremzemin.com',
  kvkkEmail: 'kvkk@toremzemin.com',
  adres: 'Pendik, İstanbul',
  hizmetAgiIl: 81,         // Türkiye genelinde 81 ilde HİZMET AĞI — proje rakamı DEĞİL
  memnuniyet: 98,          // %98 müşteri memnuniyeti
  tamamlananProje: 350,    // sayı değer, "350+" görsel kullanımda
  vergiNo: '',
} as const;

// ── Hizmet Coğrafyası — Lokal SEO + AEO için yapılandırılmış kapsam ──
// Bu liste schema.org `areaServed` olarak inject edilir. Yeni il eklemek için
// sadece array'e isim eklemek yeterli — global schema otomatik güncellenir.

export const hizmetVerilenBolgeler = [
  'Marmara Bölgesi',
  'Ege Bölgesi',
  'Akdeniz Bölgesi',
  'İç Anadolu Bölgesi',
  'Karadeniz Bölgesi',
  'Doğu Anadolu Bölgesi',
  'Güneydoğu Anadolu Bölgesi',
] as const;

// Saha haritasında etiketli olan + kanıtlanmış / öne çıkan iller.
// Ghost noktalar dahil edilmedi — onlar pasif kapsam, areaServed'e koyulduğunda
// "fabricated coverage" sinyali verebilir. AEO doğruluk için sadece etiketli iller.
export const hizmetVerilenIller = [
  // Marmara
  'İstanbul', 'Kocaeli', 'Sakarya', 'Bursa', 'Tekirdağ', 'Çanakkale', 'Yalova',
  // Ege
  'İzmir', 'Manisa', 'Aydın', 'Denizli', 'Muğla', 'Uşak',
  // Akdeniz
  'Antalya', 'Mersin', 'Adana', 'Hatay',
  // İç Anadolu
  'Ankara', 'Konya', 'Kayseri', 'Eskişehir',
  // Karadeniz
  'Samsun', 'Trabzon', 'Artvin',
  // Doğu Anadolu
  'Elazığ', 'Erzurum', 'Van', 'Malatya',
  // Güneydoğu Anadolu
  'Gaziantep', 'Şanlıurfa', 'Diyarbakır', 'Kahramanmaraş', 'Adıyaman',
] as const;

// ── Makine Parkuru — Zenginleştirilmiş Veri (Tek Kaynak) ──────────────────────
// Bu liste makine-parkı sayfasının grid/liste/filtre/arama bileşenlerini besler.
// Her kayıt: marka, model, tip (kategori), yıl, adet, açıklama, structured specs, görsel.
// Yeni makine eklemek için sadece array'e nesne ekle — sayfa otomatik günceller.

export type MakineTipSlug =
  | 'fore-kazik' | 'jet-grout' | 'mini-kazik' | 'ankraj'
  | 'zemin-civisi' | 'vibrator' | 'enjeksiyon' | 'kompresor' | 'puskurtme-beton';

// Filo iki ana sınıftan oluşur:
//  • ana-makine: Üretimi yapan ana ekipman (kazık delgi, ankraj sondajı, jet grout, vb.)
//  • yardimci-ekipman: Ana makineyi destekleyen donanım (kompresör, enjeksiyon pompası,
//    vibratör, püskürtme makinesi, germe krikosu)
export type MakineGrup = 'ana-makine' | 'yardimci-ekipman';

export interface Makine {
  slug: string;
  marka: string;
  model: string;
  isim: string;          // "Soilmec SR-40" — marka + model birleştirilmiş
  tip: string;           // "Fore Kazık" — görünür etiket
  tipSlug: MakineTipSlug;
  grup: MakineGrup;      // ana-makine | yardimci-ekipman
  yil: number;           // 0 → "—" gösterilir
  adet: number;          // çoklu birim için
  aciklama: string;
  ozellikler: { l: string; v: string }[];  // [{ l: 'Çap', v: 'Ø150 cm' }, ...]
  gorsel: string;        // /images/makineler/[slug].(webp|jpg)
  oneCikan?: boolean;    // hero'da öne çıkartılacak filo göstergeleri
}

export const makineler: Makine[] = [
  // ── ANA MAKİNELER ──
  // FORE KAZIK
  {
    slug: 'soilmec-sr40', marka: 'Soilmec', model: 'SR-40', isim: 'Soilmec SR-40',
    tip: 'Fore Kazık', tipSlug: 'fore-kazik', grup: 'ana-makine', yil: 2009, adet: 1,
    aciklama: 'Kazıklı temeller, iksa ve zemin iyileştirme projelerinde ana üretim makinesi. İtalyan üretim, sahada en uzun süre çalışan ekipmanımız.',
    ozellikler: [{ l: 'Çap', v: 'Ø150 cm' }, { l: 'Derinlik', v: '36 m' }, { l: 'Ağırlık', v: '50 ton' }, { l: 'Boyut', v: '19×6×5 m' }],
    gorsel: '/images/makineler/soilmec-sr40.jpg',
    oneCikan: true,
  },
  {
    slug: 'xcmg-xr220d', marka: 'XCMG', model: 'XR220D', isim: 'XCMG XR220D',
    tip: 'Fore Kazık', tipSlug: 'fore-kazik', grup: 'ana-makine', yil: 2016, adet: 1,
    aciklama: 'Yüksek kapasiteli, büyük çaplı ve derin kazık projeleri için tasarlanmış büyük tonajlı makine.',
    ozellikler: [{ l: 'Çap', v: 'Ø200 cm' }, { l: 'Derinlik', v: '45 m' }, { l: 'Ağırlık', v: '85 ton' }, { l: 'Boyut', v: '22×9×5 m' }],
    gorsel: '/images/makineler/xcmg-xr220d.jpg',
    oneCikan: true,
  },
  {
    slug: 'xcmg-xr280d', marka: 'XCMG', model: 'XR280D', isim: 'XCMG XR280D',
    tip: 'Fore Kazık', tipSlug: 'fore-kazik', grup: 'ana-makine', yil: 2018, adet: 1,
    aciklama: 'Büyük çaplı ve çok derin fore kazık uygulamaları için XCMG\'nin yüksek tonajlı sınıfı. Altyapı ve büyük temel projelerinde devrede.',
    ozellikler: [{ l: 'Çap', v: 'Ø250 cm' }, { l: 'Derinlik', v: '90 m' }, { l: 'Ağırlık', v: '110 ton' }, { l: 'Tork', v: '280 kNm' }],
    gorsel: '/images/makineler/xcmg-xr280d.jpg',
    oneCikan: true,
  },
  {
    slug: 'casagrande-b200xp', marka: 'Casagrande', model: 'B200 XP', isim: 'Casagrande B200 XP',
    tip: 'Fore Kazık', tipSlug: 'fore-kazik', grup: 'ana-makine', yil: 2012, adet: 1,
    aciklama: 'Derin kazık uygulamaları için geliştirilmiş İtalyan teknolojisi. Metro ve altyapı projelerinde tercih edilir.',
    ozellikler: [{ l: 'Çap', v: 'Ø200 cm' }, { l: 'Derinlik', v: '48 m' }, { l: 'Ağırlık', v: '75 ton' }, { l: 'Boyut', v: '22×8×5 m' }],
    gorsel: '/images/makineler/casagrande-b200xp.jpg',
    oneCikan: true,
  },
  {
    slug: 'soilmec-cm40', marka: 'Soilmec', model: 'CM-40', isim: 'Soilmec CM-40',
    tip: 'Fore Kazık', tipSlug: 'fore-kazik', grup: 'ana-makine', yil: 2006, adet: 1,
    aciklama: 'Orta ölçekli kazık projelerinde kullanılan kompakt fore kazık makinesi. Dar sahalarda manevra avantajı.',
    ozellikler: [{ l: 'Çap', v: 'Ø120 cm' }, { l: 'Derinlik', v: '25 m' }, { l: 'Ağırlık', v: '40 ton' }, { l: 'Boyut', v: '18×7×5 m' }],
    gorsel: '/images/makineler/soilmec-cm40.jpg',
  },
  {
    slug: 'bauer-bg18h', marka: 'Bauer', model: 'BG 18H', isim: 'Bauer BG 18H',
    tip: 'Fore Kazık', tipSlug: 'fore-kazik', grup: 'ana-makine', yil: 2005, adet: 1,
    aciklama: 'Alman mühendisliği ile üretilen güçlü performanslı fore kazık makinesi.',
    ozellikler: [{ l: 'Çap', v: 'Ø200 cm' }, { l: 'Derinlik', v: '36 m' }, { l: 'Ağırlık', v: '70 ton' }, { l: 'Boyut', v: '20×6×5 m' }],
    gorsel: '/images/makineler/bauer-bg18h.jpg',
  },

  // MİNİ KAZIK / ANKRAJ (ana makineler)
  {
    slug: 'casagrande-xp', marka: 'Casagrande', model: 'XP', isim: 'Casagrande XP',
    tip: 'Mini Kazık & Ankraj', tipSlug: 'mini-kazik', grup: 'ana-makine', yil: 2014, adet: 1,
    aciklama: 'Mini kazık ve ankraj uygulamalarına yönelik çok amaçlı İtalyan üretimi delgi makinesi. İksa sahalarında ve sınırlı alanlarda yüksek manevra kabiliyetiyle çalışır.',
    ozellikler: [{ l: 'Tork', v: '1700 kNm' }, { l: 'Derinlik', v: '30 m' }, { l: 'Ağırlık', v: '17 ton' }, { l: 'Alan', v: 'Mini Kazık · Ankraj' }],
    gorsel: '/images/makineler/casagrande-xp.jpg',
    oneCikan: true,
  },
  {
    slug: 'ymc-tr-ankraj', marka: 'YMC-TR', model: 'Ankraj', isim: 'YMC-TR Ankraj Makinesi',
    tip: 'Ankraj', tipSlug: 'ankraj', grup: 'ana-makine', yil: 2016, adet: 1,
    aciklama: 'Yüksek kapasiteli öngermeli ankraj, kalıcı ankraj ve zemin çivisi uygulamalarında kullanılır.',
    ozellikler: [{ l: 'Tork', v: '1800 kNm' }, { l: 'Ağırlık', v: '18 ton' }, { l: 'Boyut', v: '9×7×3 m' }, { l: 'Alan', v: 'İksa & Ankraj' }],
    gorsel: '/images/makineler/ymc-tr-ankraj.jpg',
  },
  {
    slug: 'casagrande-c6', marka: 'Casagrande', model: 'C6', isim: 'Casagrande C6',
    tip: 'Mini Kazık', tipSlug: 'mini-kazik', grup: 'ana-makine', yil: 2007, adet: 1,
    aciklama: 'Sınırlı alanlarda mikro kazık, ankraj ve sondaj uygulamalarında kullanılan kompakt makine.',
    ozellikler: [{ l: 'Tork', v: '1600 kNm' }, { l: 'Ağırlık', v: '15 ton' }, { l: 'Boyut', v: '8×6×3 m' }, { l: 'Alan', v: 'Mini Kazık' }],
    gorsel: '/images/makineler/casagrande-c6.jpg',
  },
  {
    slug: 'furukawa-hcr1200', marka: 'Furukawa', model: 'HCR1200-DS', isim: 'Furukawa HCR1200-DS',
    tip: 'Zemin Çivisi', tipSlug: 'zemin-civisi', grup: 'ana-makine', yil: 2007, adet: 1,
    aciklama: 'İksa sistemleri, zemin çivisi ve ankraj uygulamalarında kullanılan çok amaçlı sondaj makinesi.',
    ozellikler: [{ l: 'Derinlik', v: '25 m' }, { l: 'Çap', v: 'Ø150 mm' }, { l: 'Ağırlık', v: '25 ton' }, { l: 'Boyut', v: '8×7×3 m' }],
    gorsel: '/images/makineler/furukawa-hcr1200ds.jpg',
  },

  // ── YARDIMCI EKİPMAN ──
  {
    slug: 'ptc-30hd-vibro', marka: 'PTC', model: '30HD Vibro', isim: 'PTC 30HD Vibro',
    tip: 'Vibratör', tipSlug: 'vibrator', grup: 'yardimci-ekipman', yil: 0, adet: 1,
    aciklama: 'Palplanş ve çelik kazık çakma/sökme işlemlerinde kullanılan hidrolik vibratör.',
    ozellikler: [{ l: 'Kapasite', v: '30 ton' }, { l: 'Güç', v: '300 kW' }, { l: 'Frekans', v: '23–38 Hz' }, { l: 'Tip', v: 'Çakma & Söküm' }],
    gorsel: '/images/makineler/ptc-vibro.jpg',
  },
  {
    slug: 'tecnipwell-tw352', marka: 'Tecnipwell', model: 'TW-352', isim: 'Tecnipwell TW-352',
    tip: 'Enjeksiyon Pompası', tipSlug: 'enjeksiyon', grup: 'yardimci-ekipman', yil: 2005, adet: 1,
    aciklama: 'Jet grout besleme, zemin iyileştirme ve mikro kazık için yüksek basınçlı enjeksiyon pompası.',
    ozellikler: [{ l: 'Basınç', v: '550 bar' }, { l: 'Tip', v: 'JG Pompası' }, { l: 'Zemin İyl.', v: 'Evet' }, { l: 'Mikro Kazık', v: 'Evet' }],
    gorsel: '/images/makineler/tecnipwell-tw352.jpg',
  },
  {
    slug: 'atlas-copco-xavs307', marka: 'Atlas Copco', model: 'XAVS 307', isim: 'Atlas Copco XAVS 307',
    tip: 'Kompresör', tipSlug: 'kompresor', grup: 'yardimci-ekipman', yil: 2010, adet: 1,
    aciklama: 'Sondaj, püskürtme beton ve jet grouting işlemlerinde hava ihtiyacını karşılayan mobil kompresör.',
    ozellikler: [{ l: 'Basınç', v: '14 bar' }, { l: 'Debi', v: '18,5 m³/dk' }, { l: 'Tip', v: 'Mobil Dizel' }, { l: 'Marka', v: 'Atlas Copco' }],
    gorsel: '/images/makineler/atlas-copco-xavs307.jpg',
  },
  {
    slug: 'shotcrete-mc260', marka: 'Shotcrete', model: 'MC-260', isim: 'Shotcrete MC-260',
    tip: 'Püskürtme Beton', tipSlug: 'puskurtme-beton', grup: 'yardimci-ekipman', yil: 2015, adet: 1,
    aciklama: 'Şev stabilitesi, tünel desteği ve yapı güçlendirme uygulamalarında kuru beton püskürtme.',
    ozellikler: [{ l: 'Kapasite', v: '5–7 m³/s' }, { l: 'Sistem', v: 'Kuru Tip' }, { l: 'Alan', v: 'Şev & Tünel' }, { l: 'Adet', v: '1 birim' }],
    gorsel: '/images/makineler/shotcrete-mc260.jpg',
  },
  {
    slug: 'torem-pistonlu-enjeksiyon', marka: 'Torem', model: 'Pistonlu Enj.', isim: 'Pistonlu Enjeksiyon Seti',
    tip: 'Enjeksiyon Pompası', tipSlug: 'enjeksiyon', grup: 'yardimci-ekipman', yil: 2014, adet: 2,
    aciklama: 'Zemin iyileştirme, su yalıtımı, çatlak doldurma ve mikro kazık uygulamalarında enjeksiyon sistemi.',
    ozellikler: [{ l: 'Basınç', v: '150 bar' }, { l: 'Adet', v: '2 birim' }, { l: 'Alan', v: 'Zemin Enj.' }, { l: 'Mikro Kazık', v: 'Evet' }],
    gorsel: '/images/makineler/pistonlu-enjeksiyon.jpg',
  },
  {
    slug: 'germe-krikosu', marka: 'Torem', model: 'Germe Krikosu', isim: 'Germe Krikosu',
    tip: 'Ankraj Germe Aleti', tipSlug: 'ankraj', grup: 'yardimci-ekipman', yil: 2015, adet: 1,
    aciklama: 'Öngermeli ve kalıcı ankraj uygulamalarında çelik halatları proje yüküne germe.',
    ozellikler: [{ l: 'Kapasite', v: '80 ton' }, { l: 'Tip', v: 'Hidromekanik' }, { l: 'Alan', v: 'Ankraj Germe' }, { l: 'Hassasiyet', v: 'Yüksek' }],
    gorsel: '/images/makineler/germe-krikosu.jpg',
  },
];

export const makineSayisi = makineler.length; // otomatik — elle yazma

// Grup bazlı ayrım (sayfada iki bölüm halinde sunulur)
export const anaMakineler        = makineler.filter((m) => m.grup === 'ana-makine');
export const yardimciEkipmanlar  = makineler.filter((m) => m.grup === 'yardimci-ekipman');
export const anaMakineSayisi     = anaMakineler.length;
export const yardimciEkipmanSayisi = yardimciEkipmanlar.length;

// Filtre/agregasyon yardımcıları (sayfada kullanılır)
export const benzersizMarkalar = [...new Set(makineler.map((m) => m.marka))];
export const benzersizTipler = [...new Set(makineler.map((m) => m.tip))];

// Filo kapasite göstergeleri — premium pozitif çerçeve.
// Yaş bilgisi (eski filo izlenimi yaratabilir) yerine üretim kapasitesini öne çıkarır.
export const filoMaksKazikCap = 200;          // cm — en büyük fore kazık çapı (Casagrande B200 XP, XCMG, Bauer)
export const filoMaksDelgiDerinligi = 90;      // m — en derin delgi (XCMG XR280D)
export const filoMarkaUlkeleri = ['İtalya', 'Almanya', 'Japonya', 'Çin', 'İsveç', 'Fransa', 'Türkiye']; // 7 ülke

// İç kullanım için (yaş hesabı yine veride dururken sayfada gösterilmez)
export const enYeniMakine = makineler.filter((m) => m.yil > 0).reduce((a, b) => (a.yil > b.yil ? a : b));

// ── Hero İstatistikleri ─────────────────────────────────────────
// Bu değerler hero stat kartlarına, footer'a, "Hakkımızda" sayfasına gider
export const heroStats = [
  {
    deger: `${sirket.tamamlananProje}+`,
    etiket: 'Tamamlanan Proje',
    aciklama: 'Referans sayfasından doğrulandı',
  },
  {
    deger: `${makineSayisi}`,
    etiket: 'İş Makinesi',
    aciklama: 'Makine parkuru listesinden otomatik sayılır',
  },
  {
    deger: `${sirket.deneyimYil}+`,
    etiket: 'Yıl Deneyim',
    aciklama: `${sirket.kurulus} kuruluş, otomatik hesaplanır`,
  },
  {
    deger: `${sirket.memnuniyet}%`,
    etiket: 'Müşteri Memnuniyeti',
    aciklama: 'Proje sonu memnuniyet anketi ortalaması',
  },
] as const;

// ── Sertifikalar / Belgeler ─────────────────────────────────────
export const sertifikalar = [
  { ad: 'ISO 9001:2015',      kapsam: 'Kalite Yönetim Sistemi',                                          tip: 'sertifika' },
  { ad: 'TBDY 2018',          kapsam: 'Türkiye Bina Deprem Yönetmeliği Uyumu',                           tip: 'yonetmelik' },
  { ad: 'Zeminciler Derneği', kapsam: 'Zemin Mekaniği ve Geoteknik Mühendisliği Sektörel Birlik Üyesi', tip: 'uyelik', url: 'https://zemincilerdernegi.com/' },
] as const;
