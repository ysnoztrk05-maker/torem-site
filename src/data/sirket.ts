// src/data/sirket.ts
// Tüm şirket verileri tek kaynak — buradan değişir, her yerde güncellenir

export const sirket = {
  ad: 'Torem Zemin Mühendisliği',
  kurulus: 2013,
  deneyimYil: new Date().getFullYear() - 2013, // otomatik hesaplanır
  telefon: '+90 531 659 46 36',
  email: 'info@toremzemin.com',
  adres: 'Pendik, İstanbul',
  vergiNo: '',
} as const;

// ── Makine Parkuru ──────────────────────────────────────────────
// Her makine buraya eklenir — sayı otomatik hesaplanır
// Kaynak: src/pages/makine-parki/index.astro — 15 makine
export const makineler = [
  { marka: 'Soilmec',     model: 'SR-40',          tip: 'Fore Kazık',         yil: 2009 },
  { marka: 'XCMG',        model: '220RD',           tip: 'Fore Kazık',         yil: 2016 },
  { marka: 'Casagrande',  model: 'B200 XP',         tip: 'Fore Kazık',         yil: 2012 },
  { marka: 'Soilmec',     model: 'CM-40',           tip: 'Fore Kazık',         yil: 2006 },
  { marka: 'Bauer',       model: 'BG 18H',          tip: 'Fore Kazık',         yil: 2005 },
  { marka: 'Soilmec',     model: 'SM-400',          tip: 'Jet Grout',          yil: 2005 },
  { marka: 'YMC-TR',      model: 'Ankraj',          tip: 'Ankraj',             yil: 2016 },
  { marka: 'Casagrande',  model: 'C6',              tip: 'Mini Kazık',         yil: 2007 },
  { marka: 'Furukawa',    model: 'HCR1200-DS',      tip: 'Zemin Çivisi',       yil: 2007 },
  { marka: 'PTC',         model: '30HD Vibro',      tip: 'Vibratör',           yil: 0    },
  { marka: 'Tecnipwell',  model: 'TW-352',          tip: 'Enjeksiyon',         yil: 2005 },
  { marka: 'Atlas Copco', model: 'XAVS 307',        tip: 'Kompresör',          yil: 2010 },
  { marka: 'Shotcrete',   model: 'MC-260',          tip: 'Püskürtme Beton',    yil: 2015 },
  { marka: 'Torem',       model: 'Pistonlu Enj.',   tip: 'Enjeksiyon',         yil: 2014 },
  { marka: 'Torem',       model: 'Germe Krikosu',   tip: 'Ankraj',             yil: 2015 },
] as const;

export const makineSayisi = makineler.length; // otomatik — elle yazma

// ── Hero İstatistikleri ─────────────────────────────────────────
// Bu değerler hero stat kartlarına, footer'a, "Hakkımızda" sayfasına gider
export const heroStats = [
  {
    deger: '350+',
    etiket: 'Tamamlanan Proje',
    aciklama: 'Referans sayfasından doğrulandı',
  },
  {
    deger: `${makineSayisi}`,    // makineler[] dizisinden otomatik — şu an 15
    etiket: 'İş Makinesi',
    aciklama: 'Makine parkuru listesinden otomatik sayılır',
  },
  {
    deger: `${sirket.deneyimYil} Yıl`,
    etiket: 'Sektör Deneyimi',
    aciklama: `${sirket.kurulus} kuruluş, otomatik hesaplanır`,
  },
] as const;

// ── Sertifikalar / Belgeler ─────────────────────────────────────
export const sertifikalar = [
  { ad: 'ISO 9001:2015',      kapsam: 'Kalite Yönetim Sistemi',                                          tip: 'sertifika' },
  { ad: 'TBDY 2018',          kapsam: 'Türkiye Bina Deprem Yönetmeliği Uyumu',                           tip: 'yonetmelik' },
  { ad: 'Zeminciler Derneği', kapsam: 'Zemin Mekaniği ve Geoteknik Mühendisliği Sektörel Birlik Üyesi', tip: 'uyelik', url: 'https://zemincilerdernegi.com/' },
] as const;
