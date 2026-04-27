// Torem Zemin Mühendislik - Tüm Referanslar
// Kaynak: toremzemin.com/referanslar-devam-eden-projeler + toremzemin.com/projelerimiz-referanslar
// Gerçek müşteri listesi — uydurma kayıt yok.
// Not: arşivlenen referans sayısı (tumReferanslar.length) sadece veri katmanı için kullanılır;
// dışa açılan toplam proje sayısı `sirket.tamamlananProje` (350+) üzerinden gelir — site geneliyle tutarlı.

import { sirket } from './sirket';

export type ReferansDurum = 'devam-eden' | 'tamamlanan';

export interface Referans {
  musteri: string;
  proje: string;
  lokasyon: string;
  yil: number | string;
  teknik: string;
  durum: ReferansDurum;
}

export const devamEdenProjeler: Referans[] = [
  { musteri: 'Özel Yatırım', proje: 'İzmir Konut Projesi', lokasyon: 'İzmir / Bayraklı', yil: 2025, teknik: 'Fore kazık, Jet grout', durum: 'devam-eden' },
  { musteri: 'Yol Yüklenicisi', proje: 'Adana-Tarsus Yol Projesi', lokasyon: 'Adana / Tarsus', yil: 2025, teknik: 'Fore kazık, Kazıklı temeller', durum: 'devam-eden' },
  { musteri: 'Konut Yatırımcısı', proje: 'İstanbul Villa Konutları', lokasyon: 'İstanbul / Büyükçekmece', yil: 2025, teknik: 'Fore kazık, Kazıklı temeller', durum: 'devam-eden' },
  { musteri: 'Endüstriyel Yatırımcı', proje: 'Fabrika Projesi Gebze', lokasyon: 'Kocaeli / Gebze', yil: 2025, teknik: 'Zemin çivisi, Öngermeli ankraj, Püskürtme beton', durum: 'devam-eden' },
  { musteri: 'Endüstriyel Yatırımcı', proje: 'İzmir Fabrika Projesi', lokasyon: 'İzmir / Aliağa', yil: 2025, teknik: 'Fore kazık, Kazıklı temeller', durum: 'devam-eden' },
  { musteri: 'Gıda Yatırımcısı', proje: 'Kurutulmuş Gıda Fabrika Projesi', lokasyon: 'Manisa / Salihli', yil: 2025, teknik: 'Donatısız fore kazık, Zemin enjeksiyonu', durum: 'devam-eden' },
];

export const tamamlananProjeler: Referans[] = [
  // 2024
  { musteri: 'Şahinler Holding A.Ş.', proje: 'Villa projeleri', lokasyon: 'İstanbul / Büyükçekmece', yil: 2024, teknik: 'Fore kazık, İksa sistemleri', durum: 'tamamlanan' },
  { musteri: 'Bakioğlu Holding & Freshbak', proje: 'Endüstriyel yapılar', lokasyon: 'Manisa / Salihli', yil: 2024, teknik: 'Fore kazık, Enjeksiyon', durum: 'tamamlanan' },
  { musteri: 'Smart Güneş Enerjileri', proje: 'Güneş enerji sistemleri', lokasyon: 'Denizli / Erzin', yil: 2024, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Zeray İnşaat A.Ş.', proje: 'Konut inşaatı', lokasyon: 'Kocaeli / Merkez', yil: 2024, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Akar Yapı & TOKİ', proje: 'Okul projesi', lokasyon: 'İzmir / Bornova', yil: 2024, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Peynirci Baba', proje: 'İş merkezi', lokasyon: 'Kocaeli / Gebze', yil: 2024, teknik: 'Zemin çivisi, Ankraj, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Bakioğlu & Meyv Gıda A.Ş.', proje: 'Endüstriyel yapılar', lokasyon: 'Manisa / Salihli', yil: 2024, teknik: 'Fore kazık, Enjeksiyon', durum: 'tamamlanan' },
  { musteri: 'Aslantürk Lojistik', proje: 'İş merkezi', lokasyon: 'Kocaeli / Gebze', yil: 2024, teknik: 'Zemin çivisi, Ankraj, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Uger İnşaat', proje: 'Konut inşaatı', lokasyon: 'İzmir / Alsancak', yil: 2024, teknik: 'Fore kazık, Jet grout', durum: 'tamamlanan' },
  { musteri: 'Öz Atak İnşaat A.Ş.', proje: 'Endüstriyel yapılar', lokasyon: 'Kocaeli / Gebze', yil: 2024, teknik: 'Zemin çivisi, Ankraj, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Emlak Konut & Öz Kıyı İnşaat', proje: 'Kentsel dönüşüm', lokasyon: 'İstanbul / Çekmeköy', yil: 2024, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Emlak Konut & Geofond Zemin', proje: 'Konut', lokasyon: 'Türkiye geneli', yil: 2024, teknik: 'Fore kazık, Jet grout', durum: 'tamamlanan' },
  { musteri: 'Bayburt Grup & Çavuşoğulları', proje: 'Yol çalışması', lokasyon: 'Türkiye geneli', yil: 2024, teknik: 'Donatısız fore kazık', durum: 'tamamlanan' },
  { musteri: 'Abalıoğlu & İzmir Zemin', proje: 'Fabrika binası', lokasyon: 'İzmir', yil: 2024, teknik: 'Fore kazık', durum: 'tamamlanan' },

  // 2023
  { musteri: 'Birinci İnşaat & Ziraat GYO', proje: 'Ticari bina', lokasyon: 'İzmir / Alsancak', yil: 2023, teknik: 'Jet grout, Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Özmen Grup & Sis Enerji', proje: 'Konut inşaatı', lokasyon: 'İstanbul / Maltepe', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'REM Mimarlık', proje: 'Konut inşaatı', lokasyon: 'İstanbul / Halkalı', yil: 2023, teknik: 'Fore kazık, Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Sis Enerji', proje: 'Konut inşaatı', lokasyon: 'İstanbul / Maltepe', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Yafa Grup', proje: 'Endüstriyel yapı', lokasyon: 'Yalova / Taşköprü', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Arda Kutlay & İPKB', proje: 'Okul inşaatı', lokasyon: 'İstanbul / Sultanbeyli', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Smart Güneş Enerjileri', proje: 'Güneş enerji sistemleri', lokasyon: 'Çanakkale', yil: 2023, teknik: 'Mini kazık, Rock', durum: 'tamamlanan' },
  { musteri: 'Derinsu Proje & TOKİ', proje: 'Millet Bahçesi', lokasyon: 'Uşak', yil: 2023, teknik: 'Öngermeli ankraj', durum: 'tamamlanan' },
  { musteri: '3E Botanik İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Aksoy Zemin İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Arı Zemin Mühendislik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Birzemin İnşaat', proje: 'Çevre yapıları', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Çavuşoğulları Zemin İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Demirtürk GYO', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Dünya Zemin Mühendislik', proje: 'Lojistik depo', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Fesi Özata İnşaat', proje: 'Fabrika', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Formis Yapı İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Enjeksiyon', durum: 'tamamlanan' },
  { musteri: 'Kadıoğulları İnşaat', proje: 'Endüstriyel yapı', lokasyon: 'İstanbul', yil: 2023, teknik: 'Kılıflı fore kazık', durum: 'tamamlanan' },
  { musteri: 'MBA Lojistik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Riaş İnşaat', proje: 'Okul', lokasyon: 'İstanbul', yil: 2023, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Sa-Ka İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'SST Yapı İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2023, teknik: 'Fore kazık', durum: 'tamamlanan' },

  // 2022
  { musteri: 'Girişim & Europower Enerji', proje: 'TEİAŞ trafo merkezi', lokasyon: 'Artvin / Hopa', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Safir Gemicilik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Deep soil mixing', durum: 'tamamlanan' },
  { musteri: 'DNİ İnşaat', proje: 'Konut', lokasyon: 'İstanbul / Kadıköy', yil: 2022, teknik: 'Ankraj, Püskürtme beton, Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Gemak Gemi İnşaat A.Ş.', proje: 'Tersane raylı sistem', lokasyon: 'Yalova / Altınova', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Bakioğlu Holding', proje: 'Fabrika inşaatı', lokasyon: 'İzmir / Çiğli', yil: 2022, teknik: 'Fore kazık, Jet grout', durum: 'tamamlanan' },
  { musteri: 'Ağahan İnşaat', proje: 'Konut', lokasyon: 'İstanbul / Tuzla', yil: 2022, teknik: 'Deep soil mixing, Ankraj, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Peynirci Baba', proje: 'İş merkezi', lokasyon: 'Bursa / Gemlik', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Tiba Mimarlık', proje: 'Otel projesi', lokasyon: 'İstanbul / Göktürk', yil: 2022, teknik: 'Kuyu perde', durum: 'tamamlanan' },
  { musteri: 'Göryakınlar Deri', proje: 'Fabrika inşaatı', lokasyon: 'İstanbul / Tuzla', yil: 2022, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Penyapsan A.Ş.', proje: 'Sosyal tesis', lokasyon: 'İstanbul / Pendik', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Çavuşoğlu Yemenler A.Ş.', proje: 'Konut', lokasyon: 'İstanbul / Tuzla', yil: 2022, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Akar İnşaat A.Ş.', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Aksa & Belgin Mühendislik', proje: 'Okul', lokasyon: 'İstanbul', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Ardesta Proje', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Donatılı mini kazık', durum: 'tamamlanan' },
  { musteri: 'Fernas A.Ş. & İzmir Zemin', proje: 'Aydın Otoyolu', lokasyon: 'Aydın', yil: 2022, teknik: 'Vibrolu fore kazık', durum: 'tamamlanan' },
  { musteri: 'Aydın Eğitim Danışmanlık', proje: 'Konut', lokasyon: 'Aydın', yil: 2022, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Bakiş Yapı İnşaat', proje: 'Fabrika', lokasyon: 'İzmir', yil: 2022, teknik: 'Fore kazık, Jet grout', durum: 'tamamlanan' },
  { musteri: 'Belgin Mühendislik', proje: 'Fabrika', lokasyon: 'İzmir', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Birinci İnşaat', proje: 'Ticari bina', lokasyon: 'İzmir', yil: 2022, teknik: 'Mini kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'CKM Yapı İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Mini jet', durum: 'tamamlanan' },
  { musteri: 'Çakmak FTM Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'FHG İş Makinaları', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Girişim Elektrik A.Ş.', proje: 'Trafo merkezi', lokasyon: 'Türkiye geneli', yil: 2022, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Kaçkarlar Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Q45 kazık', durum: 'tamamlanan' },
  { musteri: 'Keremoğlu Yapı İnşaat', proje: 'Hastane', lokasyon: 'İstanbul', yil: 2022, teknik: 'İksa sistemi (geoteknik)', durum: 'tamamlanan' },
  { musteri: 'Safir Gemicilik', proje: 'Endüstriyel yapı', lokasyon: 'İstanbul', yil: 2022, teknik: 'Derin toprak karıştırma', durum: 'tamamlanan' },
  { musteri: 'Sinba İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Tekintaş İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2022, teknik: 'Jet grout', durum: 'tamamlanan' },

  // 2021
  { musteri: 'Koray GYO A.Ş.', proje: 'Toplu villa projesi', lokasyon: 'İstanbul / Çekmeköy', yil: 2021, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Peynirci Baba', proje: 'Lojistik depo', lokasyon: 'Kocaeli / Gebze', yil: 2021, teknik: 'Fore kazık, Jet grout', durum: 'tamamlanan' },
  { musteri: 'Ağırman Zemin İnşaat', proje: 'Fabrika', lokasyon: 'İstanbul', yil: 2021, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Ayazlar Yapı İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'BES Müteahhitlik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Püskürtme beton, Zemin çivisi', durum: 'tamamlanan' },
  { musteri: 'BK Tepebaşı İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Ceylanbey İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Dinamik İstanbul Mimarlık', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Elazığ Dericilik', proje: 'Fabrika', lokasyon: 'Elazığ', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Evsen İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'İltaş Otomotiv', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'İstanbul EZ İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'İzmir Zemin Mühendislik', proje: 'Konut', lokasyon: 'İzmir', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'KBR Mimarlık', proje: 'Fabrika', lokasyon: 'Türkiye geneli', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Kılıçlar Gıda', proje: 'Ticari bina', lokasyon: 'Türkiye geneli', yil: 2021, teknik: 'İksa işleri', durum: 'tamamlanan' },
  { musteri: 'Mega Temeller', proje: 'Fabrika', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'MEP İnşaat Zemin', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Ankraj', durum: 'tamamlanan' },
  { musteri: 'MVR İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Örnek Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Özka Konut İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Bireysel Metal', proje: 'Ticari bina', lokasyon: 'İstanbul', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'PTS İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'RAS Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'SBD Teknik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Simurg Dekorasyon', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Zemin iyileştirme, Enjeksiyon', durum: 'tamamlanan' },
  { musteri: 'STT İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Tarım Birliği & Burkut', proje: 'Lojistik depo', lokasyon: 'Türkiye geneli', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Teknik Beton A.Ş.', proje: 'Fabrika', lokasyon: 'İstanbul', yil: 2021, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Yerdelen İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Yetimoğlu Proje', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Donatısız fore kazık', durum: 'tamamlanan' },
  { musteri: 'Yıldız Mekanik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2021, teknik: 'Q65 kazık', durum: 'tamamlanan' },

  // 2020
  { musteri: 'AK-ÜN İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Altınsoy & Karabacak', proje: 'İş merkezi', lokasyon: 'İstanbul', yil: 2020, teknik: 'İksa sistemleri', durum: 'tamamlanan' },
  { musteri: 'Belgin Mühendislik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Kesişen fore kazık', durum: 'tamamlanan' },
  { musteri: 'Birzemin İnşaat', proje: 'AVP hal binası', lokasyon: 'İstanbul', yil: 2020, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'BU-SAB İnşaat', proje: 'Okul', lokasyon: 'İstanbul', yil: 2020, teknik: 'Mini kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'BU-SAB İnşaat', proje: 'Okul', lokasyon: 'İstanbul', yil: 2020, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'DMN Tur Otomotiv', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Mini jet', durum: 'tamamlanan' },
  { musteri: 'Ek-Taş İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Ek-Taş İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Mini jet', durum: 'tamamlanan' },
  { musteri: 'Girişim Elektrik', proje: 'Trafo binası', lokasyon: 'Türkiye geneli', yil: 2020, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Mehmet Salih Nasıroğlu', proje: 'Rüzgar tribünleri', lokasyon: 'Türkiye geneli', yil: 2020, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Mehmet Yazıcı', proje: 'Okul', lokasyon: 'İstanbul', yil: 2020, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Miraç Yol', proje: 'Üniversite binası', lokasyon: 'Türkiye geneli', yil: 2020, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'MYO Konut İnşaat', proje: 'Okul', lokasyon: 'İstanbul', yil: 2020, teknik: 'Mini kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Onur İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Politoğlu İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Jet grout', durum: 'tamamlanan' },
  { musteri: 'Seven Yatırım ve İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Şahin Turizm', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Şişik Gayrimenkul', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'User Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2020, teknik: 'Deep soil mixing', durum: 'tamamlanan' },

  // 2019
  { musteri: 'Adalet Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2019, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Beykor İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2019, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Bilmen İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2019, teknik: 'Mini kazık, Ankraj, Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Doğum & Kartal Zemin', proje: 'Yol', lokasyon: 'Türkiye geneli', yil: 2019, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'ETA Zemin Teknolojileri', proje: 'Karakol binası', lokasyon: 'Türkiye geneli', yil: 2019, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'İlk İnşaat & Sonar', proje: 'Termik santral', lokasyon: 'Türkiye geneli', yil: 2019, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Kolin & Voyap İnşaat', proje: 'Hangar', lokasyon: 'İstanbul', yil: 2019, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Lotus Orman Ürünleri', proje: 'Konut', lokasyon: 'İstanbul', yil: 2019, teknik: 'Ankraj', durum: 'tamamlanan' },
  { musteri: 'Match Gayrimenkul', proje: 'Okul', lokasyon: 'İstanbul', yil: 2019, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },

  // 2018
  { musteri: 'Sistem Zemin Mühendislik', proje: 'Fabrika', lokasyon: 'İstanbul', yil: 2018, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Sistem Zemin Mühendislik', proje: 'Fabrika', lokasyon: 'İstanbul', yil: 2018, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'İPKB & BU-SAB İnşaat', proje: 'Okul', lokasyon: 'İstanbul', yil: 2018, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'İPKB & BU-SAB İnşaat', proje: 'Okul', lokasyon: 'İstanbul', yil: 2018, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Tercih Yapı', proje: 'İş merkezi', lokasyon: 'İstanbul', yil: 2018, teknik: 'Püskürtme beton, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Hastane Parkı', proje: 'Hastane', lokasyon: 'İstanbul', yil: 2018, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'İkizler Tower', proje: 'Rezidans', lokasyon: 'İstanbul', yil: 2018, teknik: 'Fore kazık', durum: 'tamamlanan' },

  // 2017
  { musteri: 'Beşiroğlu İnşaat', proje: 'Rezidans', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Nef İnşaat & Kazem Mühendislik', proje: 'Katlı otopark', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Süleyman Ekşi & Kazem Mühendislik', proje: 'Konut', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Pendik Bld. & Penyapsan', proje: 'Sosyal tesis', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'TED Koleji & Geotem', proje: 'Kolej binası', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Kardem Demir Çelik', proje: 'Kolej binası', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Pendik Bld. & Penyapsan', proje: 'Katlı otopark', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Rönesans & Teknofor', proje: 'Şehir hastanesi', lokasyon: 'İstanbul', yil: 2017, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'User Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2017, teknik: 'Jet grout', durum: 'tamamlanan' },

  // 2016
  { musteri: 'İBB & MTT Mühendislik', proje: 'Katlı otopark', lokasyon: 'İstanbul', yil: 2016, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Özsoy İnşaat & Temelkon', proje: 'Spor kompleksi', lokasyon: 'İstanbul', yil: 2016, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Garanti Keçi & Geotem', proje: 'Konut AVM projesi', lokasyon: 'İstanbul', yil: 2016, teknik: 'Püskürtme beton, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Metaphor & Ceren', proje: 'Kültür merkezi', lokasyon: 'İstanbul', yil: 2016, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Korukçuoğlu İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2016, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Yükselen Proje', proje: 'Yaşam merkezi', lokasyon: 'İstanbul', yil: 2016, teknik: 'Püskürtme beton, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Eren Halı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2016, teknik: 'Fore kazık', durum: 'tamamlanan' },

  // 2015
  { musteri: 'Hamitoğlu İnşaat & Temelkon', proje: 'TOKİ konutları', lokasyon: 'Türkiye geneli', yil: 2015, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Ülker Gıda & Temelkon', proje: 'Yalı restorasyon', lokasyon: 'İstanbul', yil: 2015, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'DAP GYO & Geotem', proje: 'İST Marina AVM', lokasyon: 'İstanbul', yil: 2015, teknik: 'Ankraj', durum: 'tamamlanan' },
  { musteri: 'Hidropak', proje: 'İş merkezi', lokasyon: 'İstanbul', yil: 2015, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Kır Gayrimenkul', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Mini kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Hak Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Perde kalıcı ankraj', durum: 'tamamlanan' },
  { musteri: 'Fore Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Lomani Ahşap', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Çatma Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Zemin çivisi, Püskürtme beton, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Temelkon İnşaat', proje: 'Kız yurdu', lokasyon: 'İstanbul', yil: 2015, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'İstanbul Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Mini kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Hak Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Püskürtme beton, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Elya Kuleleri', proje: 'Otel projesi', lokasyon: 'İstanbul', yil: 2015, teknik: 'Kılıflı fore kazık', durum: 'tamamlanan' },
  { musteri: 'AFT ve Ortaklar', proje: 'Otel projesi', lokasyon: 'İstanbul', yil: 2015, teknik: 'Kılıflı fore kazık', durum: 'tamamlanan' },
  { musteri: 'Ekovit ENS', proje: 'Üst geçit', lokasyon: 'İstanbul', yil: 2015, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Kimm Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Evvel Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Şevval Halı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Zemar Mühendislik', proje: 'Hızlı tren', lokasyon: 'Türkiye geneli', yil: 2015, teknik: 'Derin sondaj', durum: 'tamamlanan' },
  { musteri: 'Deniz İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2015, teknik: 'Enjeksiyon, Jet grout', durum: 'tamamlanan' },

  // 2014
  { musteri: 'Aslan & Astral', proje: 'AVM binası', lokasyon: 'İstanbul', yil: 2014, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Saka Yapı', proje: 'Belediye binası', lokasyon: 'İstanbul', yil: 2014, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Arefe Yapı', proje: 'Lojistik depo', lokasyon: 'İstanbul', yil: 2014, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Sembol İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2014, teknik: 'Fore kazık, Ankraj', durum: 'tamamlanan' },
  { musteri: 'Demirli İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2014, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Kale ve Rehber', proje: 'Konut', lokasyon: 'İstanbul', yil: 2014, teknik: 'Zemin çivisi, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'Lokman Aygün', proje: 'Atölye', lokasyon: 'İstanbul', yil: 2014, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Emin Evim & Osman Camcı', proje: 'Otel projesi', lokasyon: 'İstanbul', yil: 2014, teknik: 'Mini kazık, Ankraj, Püskürtme beton', durum: 'tamamlanan' },
  { musteri: 'YSD Demir Yapı', proje: 'Konut', lokasyon: 'İstanbul', yil: 2014, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Ytong A.Ş.', proje: 'Fabrika', lokasyon: 'Türkiye geneli', yil: 2014, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Zemtek Zemin', proje: 'Konut', lokasyon: 'İstanbul', yil: 2014, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Yılport & Astral', proje: 'Liman platformu', lokasyon: 'İstanbul', yil: 2014, teknik: 'Fore kazık', durum: 'tamamlanan' },
  { musteri: 'Cihat İnşaat', proje: 'Konut', lokasyon: 'İstanbul', yil: 2014, teknik: 'Mini kazık', durum: 'tamamlanan' },
  { musteri: 'Hidrotemel Mühendislik', proje: 'Dere ıslahı', lokasyon: 'Türkiye geneli', yil: 2014, teknik: 'Derin sondaj', durum: 'tamamlanan' },
  { musteri: 'Barulas İnşaat', proje: 'Okul projesi', lokasyon: 'Türkiye geneli', yil: 2014, teknik: 'İnklinometre', durum: 'tamamlanan' },
  { musteri: 'Eren Enerji & Sintek', proje: 'Çimento fabrikası', lokasyon: 'Türkiye geneli', yil: 2014, teknik: 'Fore kazık', durum: 'tamamlanan' },

  // 2013
  { musteri: 'İçtaş & Zemar Zemin', proje: 'Yavuz Sultan Selim Köprüsü yol', lokasyon: 'İstanbul', yil: 2013, teknik: 'Derin sondaj', durum: 'tamamlanan' },
];

export const tumReferanslar: Referans[] = [...devamEdenProjeler, ...tamamlananProjeler];

// -------------------------------------------------------------------------
// Çözüm Aileleri — matrisin yerine kavramsal doğru sunum
// (İksa zaten bir ailedir — ankraj + fore kazık perde + diyafram kombinasyonu)
// -------------------------------------------------------------------------
export interface CozumAilesi {
  slug: string;
  baslik: string;
  musteriProblemi: string;
  kisaAciklama: string;
  yontemler: { ad: string; href?: string }[];
  sektorler: string[];
  flagshipProjeler: string[];
  icon: string;
}

export const cozumAileleri: CozumAilesi[] = [
  {
    slug: 'derin-temel',
    baslik: 'Derin Temel Mühendisliği',
    musteriProblemi: 'Yüksek bina, fabrika veya endüstriyel yapınızın yükünü zayıf üst zemin yerine sağlam derin tabakaya aktarın.',
    kisaAciklama: 'Fore kazık, mini kazık, CFA ve baret kazık çözümleriyle konut, endüstri, enerji ve altyapı yapılarında güvenli yük aktarımı sağlıyoruz.',
    yontemler: [
      { ad: 'Fore Kazık',    href: '/faaliyet-alanlari/kazikli-temeller/fore-kazik/' },
      { ad: 'Mini Kazık',    href: '/faaliyet-alanlari/kazikli-temeller/mini-kazik/' },
      { ad: 'CFA Kazık',     href: '/faaliyet-alanlari/kazikli-temeller/cfa-kazik/' },
      { ad: 'Baret Kazık',   href: '/faaliyet-alanlari/kazikli-temeller/baret-kazik/' },
      { ad: 'Betonarme Kazık', href: '/faaliyet-alanlari/kazikli-temeller/betonarme-kazik/' },
    ],
    sektorler: ['Konut & Villa', 'Endüstri & Fabrika', 'Enerji Santralleri', 'Ulaşım & Köprü', 'Kamu Yapıları'],
    flagshipProjeler: ['Şahinler Holding — Büyükçekmece Villa', 'Bakioğlu Freshbak — Salihli OSB', 'Abalıoğlu — İzmir Fabrika', 'Gemak — Altınova Tersane', 'Rönesans — Şehir Hastanesi'],
    icon: 'temel',
  },
  {
    slug: 'derin-kazi-iksa',
    baslik: 'Derin Kazı İksa Sistemleri',
    musteriProblemi: '10–30 m derin kazılarda komşu binaları, yolu ve alt yapıyı koruyarak güvenli kazı yapın.',
    kisaAciklama: 'Ankrajlı fore kazık perdeden diyafram duvara, Berlin duvardan zemin çivisine — kazı derinliği, zemin türü ve çevre kısıtlarına göre doğru iksa tasarımı.',
    yontemler: [
      { ad: 'Ankrajlı Fore Kazık Perde', href: '/faaliyet-alanlari/iksa-sistemleri/ankrajli-fore-kazik/' },
      { ad: 'Diyafram Duvar',            href: '/faaliyet-alanlari/iksa-sistemleri/diyafram-duvar/' },
      { ad: 'Berlin Duvarı',             href: '/faaliyet-alanlari/iksa-sistemleri/berlin-duvari/' },
      { ad: 'Secant Pile',               href: '/faaliyet-alanlari/iksa-sistemleri/secant-pile/' },
      { ad: 'Palplans',                  href: '/faaliyet-alanlari/iksa-sistemleri/palplans/' },
      { ad: 'Zemin Çivisi + Püskürtme',  href: '/faaliyet-alanlari/destekleme-ankraj/zemin-civisi/' },
    ],
    sektorler: ['Kentsel Dönüşüm', 'Ticari & Otel', 'Katlı Otopark', 'Hastane & AVM', 'Endüstri Bodrum'],
    flagshipProjeler: ['Aslantürk Lojistik — Gebze İş Merkezi', 'Keremoğlu Yapı — Hastane', 'Pendik Bld. — Katlı Otopark', 'Çavuşoğlu Yemenler — Tuzla Konut', 'Öz Atak — Gebze'],
    icon: 'iksa',
  },
  {
    slug: 'zemin-iyilestirme',
    baslik: 'Zemin İyileştirme',
    musteriProblemi: 'Yumuşak, organik veya gevşek zemininizi mühendislik parametreleriyle taşıyıcı hale getirin.',
    kisaAciklama: 'Jet grout, deep soil mixing, taş kolon, enjeksiyon ve vibro kompaksiyon ile dolgu, alüvyon ve zayıf zeminleri yapıya hazır hale getiriyoruz.',
    yontemler: [
      { ad: 'Jet Grout',          href: '/faaliyet-alanlari/zemin-iyilestirme/jet-grout/' },
      { ad: 'Deep Soil Mixing',   href: '/faaliyet-alanlari/zemin-iyilestirme/deep-soil-mixing/' },
      { ad: 'Taş Kolon',          href: '/faaliyet-alanlari/zemin-iyilestirme/tas-kolon/' },
      { ad: 'Zemin Enjeksiyonu',  href: '/faaliyet-alanlari/zemin-iyilestirme/zemin-enjeksiyonu/' },
      { ad: 'Vibro Kompaksiyon',  href: '/faaliyet-alanlari/zemin-iyilestirme/vibro-kompaksiyon/' },
      { ad: 'Fitil Dren',         href: '/faaliyet-alanlari/zemin-iyilestirme/fitil-dren/' },
    ],
    sektorler: ['Endüstri Fabrikası', 'Liman & Tersane', 'Yol & Otoyol', 'Enerji Sahaları', 'Lojistik Depo'],
    flagshipProjeler: ['Safir Gemicilik — Tuzla Deep Soil Mixing', 'Bakioğlu — Çiğli Fabrika', 'Gemak — Altınova Raylı Sistem', 'Emlak Konut & Geofond — Türkiye geneli', 'Göryakınlar Deri — Tuzla'],
    icon: 'zemin',
  },
  {
    slug: 'destekleme-ankraj',
    baslik: 'Destekleme & Ankraj',
    musteriProblemi: 'Şev stabilitesi, istinat duvarı veya yüksek yük aktaran ankrajlı çözümlerle yapınızı ve çevreyi güvenceye alın.',
    kisaAciklama: 'Öngermeli ankraj, kalıcı/geçici ankraj, kaya ankrajı ve zemin çivisi uygulamalarıyla hem yapısal hem şev destekleme ihtiyaçlarını karşılıyoruz.',
    yontemler: [
      { ad: 'Öngermeli Ankraj',   href: '/faaliyet-alanlari/destekleme-ankraj/ongermeli-ankraj/' },
      { ad: 'Kalıcı Ankraj',      href: '/faaliyet-alanlari/destekleme-ankraj/kalici-ankraj/' },
      { ad: 'Geçici Ankraj',      href: '/faaliyet-alanlari/destekleme-ankraj/gecici-ankraj/' },
      { ad: 'Kaya Ankrajı',       href: '/faaliyet-alanlari/destekleme-ankraj/kaya-ankraji/' },
      { ad: 'Zemin Çivisi',       href: '/faaliyet-alanlari/destekleme-ankraj/zemin-civisi/' },
    ],
    sektorler: ['Kamu & Millet Bahçesi', 'Enerji Altyapısı', 'Şev Stabilitesi', 'İstinat Duvarı', 'Yol Kazısı'],
    flagshipProjeler: ['Derinsu & TOKİ — Uşak Millet Bahçesi Öngermeli Ankraj', 'Girişim & Europower — Artvin Hopa Trafo', 'DAP GYO — İST Marina AVM Ankraj', 'Hak Yapı — Perde Kalıcı Ankraj', 'Peynirci Baba — Gebze Zemin Çivisi'],
    icon: 'ankraj',
  },
];

// -------------------------------------------------------------------------
// Saha Kapsamı — Marmara/Ege/Adana/Artvin vs tek tek şehir yerine liste + merkez
// -------------------------------------------------------------------------
export const operasyonMerkezi = {
  sehir: 'İstanbul',
  ilce: 'Pendik',
  not: 'Marmara, Ege ve Karadeniz bölgelerine saha sevki',
};

export function sahaKapsamiIller(): string[] {
  // Referanslardaki benzersiz illeri (Türkiye geneli hariç) alfabetik sırala
  const iller = new Set<string>();
  for (const r of tumReferanslar) {
    const il = sehirCikar(r.lokasyon);
    if (il !== 'Türkiye geneli') iller.add(il);
  }
  return [...iller].sort((a, b) => a.localeCompare(b, 'tr'));
}

// -------------------------------------------------------------------------
// Müşteri Hikaye Kartları — müşteri-merkezli referans vitrini
// -------------------------------------------------------------------------
export interface MusteriHikaye {
  slug: string;
  ad: string;
  logoBase?: string;
  logoExt?: 'png' | 'jpg';
  lokasyon: string;            // "İstanbul · Büyükçekmece"
  yil: string;
  hikaye: string;              // 1-2 cümle, müşteri-odaklı
  hikayeUzun?: string;         // 3-4 cümle case study için derin anlatım
  sektorEtiket?: string;       // "Kamu & Konut", "Endüstri & Tersane" vb.
  etiket: string;              // "İksa + Kazıklı Temel"
  sahaFoto?: string;           // saha fotoğrafı varsa
  projeSlug?: string;          // /projelerimiz/[slug]/ linki
  kategoriFallback?: string;   // saha fotosu yoksa kategori görseli
  flagship?: boolean;          // editorial case study'de gösterilecek mi
}

export const musteriHikayeleri: MusteriHikaye[] = [
  {
    slug: 'sahinler-holding',
    ad: 'Şahinler Holding',
    logoBase: '/images/logos/sahinler',
    logoExt: 'jpg',
    lokasyon: 'İstanbul · Büyükçekmece',
    yil: '2024',
    hikaye: 'Büyükçekmece karma kullanım villa projesi için iksa sistemi ve fore kazık temel uygulamasını sahada birlikte yürüttük.',
    etiket: 'İksa + Kazıklı Temel',
    sahaFoto: '/images/iksa/ankrajli-fore-kazik.jpg',
    projeSlug: 'sahinler-holding-buyukcekmece',
  },
  {
    slug: 'bakioglu-freshbak',
    ad: 'Bakioğlu Holding & Freshbak',
    logoBase: '/images/logos/freshbak',
    logoExt: 'jpg',
    lokasyon: 'Manisa · Salihli OSB',
    yil: '2024',
    hikaye: 'Salihli Organize Sanayi Bölgesi endüstriyel yatırımı için kazıklı temel ve zemin iyileştirme paketini tek koordinasyon altında teslim ettik.',
    hikayeUzun: 'Bakioğlu Holding bünyesindeki Freshbak endüstriyel yatırımının Manisa Salihli Organize Sanayi Bölgesi\'ndeki sahasında kazıklı temel ve zemin iyileştirme uygulamalarını birlikte yürüttük. İki farklı geoteknik çözümün tek koordinasyon altında entegre edilmesi, saha verimliliğini ve inşaat takvimini olumlu etkiledi — proje 2024\'te tamamlandı.',
    sektorEtiket: 'Endüstri & Gıda',
    etiket: 'Kazıklı Temel + Zemin İyileştirme',
    sahaFoto: '/images/jet-grout/jet-grout-santiye.webp',
    projeSlug: 'bakioglu-freshbak-salihli',
    flagship: true,
  },
  {
    slug: 'emlak-konut',
    ad: 'Emlak Konut & Öz Kıyı',
    logoBase: '/images/logos/emlak-konut',
    logoExt: 'jpg',
    lokasyon: 'İstanbul · Çekmeköy',
    yil: '2024',
    hikaye: 'Türkiye\'nin en büyük GYO\'su Emlak Konut\'un kentsel dönüşüm projesinde fore kazık temel sisteminin sahada uygulamasını üstlendik.',
    hikayeUzun: 'Türkiye\'nin en büyük gayrimenkul yatırım ortaklığı Emlak Konut\'un Çekmeköy kentsel dönüşüm projesinde, Öz Kıyı İnşaat ile birlikte fore kazık temel sisteminin sahada uygulamasını üstlendik. Kamu kaynaklı konut geliştirme kapsamındaki proje, zemin etüdüne dayalı temel tasarımı ve çevre yapılarla uyumlu saha organizasyonu ile 2024 yılında tamamlandı.',
    sektorEtiket: 'Kamu Konut & GYO',
    etiket: 'Kazıklı Temel',
    sahaFoto: '/images/kazikli-temeller/fore-kazik.jpg',
    projeSlug: 'emlak-konut-cekmekoy',
    flagship: true,
  },
  {
    slug: 'gemak',
    ad: 'Gemak Gemi İnşaat',
    logoBase: '/images/logos/gemak',
    logoExt: 'jpg',
    lokasyon: 'Yalova · Altınova Tersane',
    yil: '2022',
    hikaye: 'Altınova tersane sahasında gemi inşa faaliyetlerine yön verecek raylı sistem altyapısı için kazıklı temel uyguladık.',
    hikayeUzun: 'Yalova Altınova Tersaneler Bölgesi\'nde Gemak Gemi İnşaat\'ın gemi inşa faaliyetlerine yön verecek raylı sistem altyapısı için kazıklı temel uygulamasını sahada yürüttük. Deniz kenarındaki saha koşullarına uygun tasarlanan temel sistemi, tersane operasyonlarını aksatmadan 2022 yılında teslim edildi.',
    sektorEtiket: 'Endüstri & Tersane',
    etiket: 'Kazıklı Temel',
    sahaFoto: '/images/kazikli-temeller/baret-kazik.jpg',
    projeSlug: 'gemak-altinova-tersane',
    flagship: true,
  },
  {
    slug: 'smart-gunes',
    ad: 'Smart Güneş Enerjileri',
    logoBase: '/images/logos/smart',
    logoExt: 'png',
    lokasyon: 'Denizli · Erzin',
    yil: '2024',
    hikaye: 'Güneş enerji santrali altyapısı için mini kazık temel çözümünü sahaya özel geliştirdik.',
    etiket: 'Mini Kazık',
    sahaFoto: '/images/kazikli-temeller/mini-kazik.jpg',
    projeSlug: 'smart-gunes-denizli',
  },
  {
    slug: 'koray-gyo',
    ad: 'Koray GYO',
    logoBase: '/images/logos/koray-gyo',
    logoExt: 'jpg',
    lokasyon: 'İstanbul · Çekmeköy',
    yil: '2021',
    hikaye: 'Koray GYO toplu villa geliştirme projesinde mini kazık temel sistemini sahayla uyumlu biçimde uyguladık.',
    etiket: 'Mini Kazık',
    sahaFoto: '/images/kazikli-temeller/cfa-kazik.jpg',
    projeSlug: 'koray-gyo-cekmekoy',
  },
  {
    slug: 'aslanturk',
    ad: 'Aslantürk Lojistik',
    logoBase: '/images/logos/aslanturk',
    logoExt: 'jpg',
    lokasyon: 'Kocaeli · Gebze',
    yil: '2024',
    hikaye: 'Gebze iş merkezi inşaatı için derin kazı iksa sistemi tasarlayıp uyguladık — zemin çivisi, ankraj ve püskürtme beton birlikte çalıştı.',
    etiket: 'İksa Sistemleri',
    sahaFoto: '/images/iksa/diyafram-duvar.jpg',
    projeSlug: 'aslanturk-lojistik-gebze',
  },
  {
    slug: 'safir-gemicilik',
    ad: 'Safir Gemicilik',
    logoBase: '/images/logos/safir',
    logoExt: 'jpg',
    lokasyon: 'İstanbul · Tuzla',
    yil: '2022',
    hikaye: 'Tuzla endüstriyel sahasında deep soil mixing yöntemiyle zemin iyileştirme uygulamasını sahayla birlikte tamamladık.',
    etiket: 'Zemin İyileştirme',
    sahaFoto: '/images/zemin-iyilestirme2.jpg',
    projeSlug: 'safir-gemicilik-tuzla',
  },
  {
    slug: 'ronesans',
    ad: 'Rönesans Holding',
    logoBase: '/images/logos/ronesans',
    logoExt: 'png',
    lokasyon: 'İstanbul · Şehir Hastanesi',
    yil: '2017',
    hikaye: 'Rönesans-Teknofor ortaklığında yürütülen şehir hastanesi projesinde fore kazık temel uygulamasını üstlendik.',
    hikayeUzun: 'Türkiye\'nin önde gelen inşaat gruplarından Rönesans Holding\'in Teknofor ortaklığında yürüttüğü şehir hastanesi projesinde fore kazık temel uygulamasını sahada gerçekleştirdik. Büyük ölçekli sağlık yapısının yük aktarımı için tasarlanan temel sistemi, kamu yatırımının taşıma gereklerini karşıladı — 2017\'de teslim edildi.',
    sektorEtiket: 'Sağlık & Kamu',
    etiket: 'Kazıklı Temel',
    kategoriFallback: '/images/kazikli-temeller.jpg',
    flagship: true,
  },
  {
    slug: 'derinsu-toki',
    ad: 'Derinsu Proje & TOKİ',
    logoBase: '/images/logos/derinsu',
    logoExt: 'jpg',
    lokasyon: 'Uşak · Millet Bahçesi',
    yil: '2023',
    hikaye: 'TOKİ koordinasyonunda yürütülen Uşak Millet Bahçesi projesi için öngermeli ankraj uygulamasını tamamladık.',
    etiket: 'Öngermeli Ankraj',
    kategoriFallback: '/images/ankraj.jpg',
  },
  {
    slug: 'girisim-elektrik',
    ad: 'Girişim Elektrik & Europower',
    logoBase: '/images/logos/girisim',
    logoExt: 'jpg',
    lokasyon: 'Artvin · Hopa',
    yil: '2022',
    hikaye: 'TEİAŞ trafo merkezinin zorlu Doğu Karadeniz sahasındaki fore kazık temel uygulamasını ulusal elektrik altyapısı için tamamladık.',
    etiket: 'Kazıklı Temel',
    kategoriFallback: '/images/kazikli-temeller.jpg',
  },
  {
    slug: 'ipkb-okul',
    ad: 'İPKB — Okul Yapıları',
    logoBase: '/images/logos/ipkb',
    logoExt: 'jpg',
    lokasyon: 'İstanbul · Sultanbeyli',
    yil: '2023',
    hikaye: 'İstanbul Proje Koordinasyon Birimi ile okul yapıları fore kazık temel uygulamalarını kentsel eğitim altyapısı kapsamında yürüttük.',
    etiket: 'Kazıklı Temel',
    kategoriFallback: '/images/kazikli-temeller.jpg',
  },
];

// -------------------------------------------------------------------------
// Müşteri Sektörleri — çözüm aileleri yerine müşteri-bazlı gruplandırma
// -------------------------------------------------------------------------
export interface MusteriSektorGrup {
  slug: 'kamu' | 'holding-gyo' | 'enerji-endustri' | 'lojistik-ticari';
  baslik: string;
  aciklama: string;
  musteriSlugs: string[];  // oneCikanMusteriler()'daki slug'lar
}

export const musteriSektorGruplari: MusteriSektorGrup[] = [
  {
    slug: 'kamu',
    baslik: 'Kamu Kurumları & Belediyeler',
    aciklama: 'Devlet kurumları ve belediyelerle yürüttüğümüz altyapı, eğitim ve sosyal tesis projeleri.',
    musteriSlugs: ['toki', 'ibb', 'pendik-bld', 'ipkb', 'derinsu'],
  },
  {
    slug: 'holding-gyo',
    baslik: 'Holding & Gayrimenkul',
    aciklama: 'Türkiye\'nin önde gelen holding ve gayrimenkul yatırım ortaklıklarının konut ve karma kullanım projeleri.',
    musteriSlugs: ['emlak-konut', 'koray-gyo', 'ziraat-gyo', 'ronesans', 'sahinler', 'kolin', 'dogus'],
  },
  {
    slug: 'enerji-endustri',
    baslik: 'Enerji & Endüstri',
    aciklama: 'Güneş santralleri, trafo merkezleri ve ağır sanayi tesislerinde derin temel ve zemin güçlendirme.',
    musteriSlugs: ['smart', 'girisim', 'freshbak', 'gemak', 'safir', 'aksa', 'teknik-beton', 'fernas'],
  },
  {
    slug: 'lojistik-ticari',
    baslik: 'Lojistik & Ticari',
    aciklama: 'Lojistik depolar, iş merkezleri ve ticari yapılar için derin kazı ve temel çözümleri.',
    musteriSlugs: ['aslanturk', 'peynirci-baba', 'yafa', 'zeray', 'mirac-yol'],
  },
];

// -------------------------------------------------------------------------
// Sektör taksonomi + otomatik türetim
// -------------------------------------------------------------------------
export type SektorSlug =
  | 'konut' | 'endustriyel' | 'enerji' | 'kamu-egitim'
  | 'saglik' | 'ticari-otel' | 'ulasim-altyapi' | 'diger';

export const sektorler: { slug: SektorSlug; title: string; icon: string; }[] = [
  { slug: 'konut',          title: 'Konut',                icon: 'home' },
  { slug: 'endustriyel',    title: 'Endüstriyel Yapı',     icon: 'factory' },
  { slug: 'enerji',         title: 'Enerji',               icon: 'bolt' },
  { slug: 'kamu-egitim',    title: 'Kamu & Eğitim',        icon: 'landmark' },
  { slug: 'saglik',         title: 'Sağlık',               icon: 'cross' },
  { slug: 'ticari-otel',    title: 'Ticari & Otel',        icon: 'briefcase' },
  { slug: 'ulasim-altyapi', title: 'Ulaşım & Altyapı',     icon: 'route' },
  { slug: 'diger',          title: 'Diğer',                icon: 'dot' },
];

export function sektorBul(proje: string): SektorSlug {
  const p = proje.toLocaleLowerCase('tr');
  if (/(konut|villa|rezidans|kentsel d|yalı|apartman)/i.test(p)) return 'konut';
  if (/(fabrika|endüstri|lojistik|depo|atölye|tersane|liman|çimento|hangar|raylı)/i.test(p)) return 'endustriyel';
  if (/(trafo|güneş|rüzgar|termik|enerji|santral)/i.test(p)) return 'enerji';
  if (/(okul|kolej|üniversite|millet bahç|belediye|karakol|yurt|kız yurdu|kültür|kışla|kamu)/i.test(p)) return 'kamu-egitim';
  if (/(hastane|sağlık)/i.test(p)) return 'saglik';
  if (/(otel|avm|iş merk|ticari bina|spor komp|yaşam merk|sosyal tesis|katlı otopark)/i.test(p)) return 'ticari-otel';
  if (/(köprü|yol|otoyol|hızlı tren|üst geçit|dere ıslah|altyapı|çevre yap|üst yap)/i.test(p)) return 'ulasim-altyapi';
  return 'diger';
}

// -------------------------------------------------------------------------
// Teknik normalizasyon
// -------------------------------------------------------------------------
export type TeknikKategori =
  | 'fore-kazik' | 'mini-kazik' | 'jet-grout' | 'ankraj'
  | 'zemin-civisi' | 'puskurtme-beton' | 'dsm' | 'enjeksiyon'
  | 'iksa' | 'test-izleme';

export const teknikKategorileri: { slug: TeknikKategori; title: string; href: string; }[] = [
  { slug: 'fore-kazik',       title: 'Fore Kazık',        href: '/faaliyet-alanlari/kazikli-temeller/fore-kazik/' },
  { slug: 'mini-kazik',       title: 'Mini Kazık',        href: '/faaliyet-alanlari/kazikli-temeller/mini-kazik/' },
  { slug: 'jet-grout',        title: 'Jet Grout',         href: '/faaliyet-alanlari/zemin-iyilestirme/jet-grout/' },
  { slug: 'ankraj',           title: 'Ankraj',            href: '/faaliyet-alanlari/destekleme-ankraj/' },
  { slug: 'zemin-civisi',     title: 'Zemin Çivisi',      href: '/faaliyet-alanlari/destekleme-ankraj/zemin-civisi/' },
  { slug: 'puskurtme-beton',  title: 'Püskürtme Beton',   href: '/faaliyet-alanlari/iksa-sistemleri/puskurtme-beton/' },
  { slug: 'dsm',              title: 'Deep Soil Mixing',  href: '/faaliyet-alanlari/zemin-iyilestirme/deep-soil-mixing/' },
  { slug: 'enjeksiyon',       title: 'Enjeksiyon',        href: '/faaliyet-alanlari/zemin-iyilestirme/zemin-enjeksiyonu/' },
  { slug: 'iksa',             title: 'İksa Sistemi',      href: '/faaliyet-alanlari/iksa-sistemleri/' },
  { slug: 'test-izleme',      title: 'Test & İzleme',     href: '/faaliyet-alanlari/geoteknik-test-izleme/' },
];

export function teknikleriCikar(teknik: string): TeknikKategori[] {
  const t = teknik.toLocaleLowerCase('tr');
  const sonuc = new Set<TeknikKategori>();

  // Sıralama önemli: daha spesifik olanlar önce
  if (/deep soil mixing|derin toprak|dsm/.test(t)) sonuc.add('dsm');
  if (/mini kazık|mini-kazık|donatılı mini|donatısız mini|mini jet/.test(t)) {
    if (/mini jet/.test(t)) sonuc.add('jet-grout');
    else sonuc.add('mini-kazik');
  }
  if (/jet grout|jet-grout/.test(t)) sonuc.add('jet-grout');
  if (/enjeksiyon/.test(t)) sonuc.add('enjeksiyon');
  if (/fore kazık|fore-kazık|q\d+ kazık|kılıflı fore|vibrolu fore|kesişen fore|donatısız fore/.test(t)) sonuc.add('fore-kazik');
  if (/ankraj/.test(t)) sonuc.add('ankraj');
  if (/zemin çivi/.test(t)) sonuc.add('zemin-civisi');
  if (/püskürtme beton|puskurtme/.test(t)) sonuc.add('puskurtme-beton');
  if (/iksa|kuyu perde/.test(t)) sonuc.add('iksa');
  if (/derin sondaj|inklinometre|pda|pit testi/.test(t)) sonuc.add('test-izleme');
  if (/rock/.test(t) && !sonuc.size) sonuc.add('mini-kazik');

  return [...sonuc];
}

// -------------------------------------------------------------------------
// Deprem Bölgesi (2025 — 6 Şubat 2023 sonrası imar/iyileştirme sahaları)
// -------------------------------------------------------------------------
export const depremBolgesiIller: string[] = [
  'Hatay', 'Kahramanmaraş', 'Gaziantep', 'Adıyaman', 'Malatya', 'Mersin', 'Elazığ',
];

export const depremBolgesiAciklama = '6 Şubat 2023 Kahramanmaraş depremleri sonrası afet bölgesinde yeniden yapılanma sürecinde aktif saha operasyonları yürütüyoruz. Zemin güçlendirme, fore kazık temeli ve ankraj uygulamalarımız 2025\'te işlenmekte olan projelerdir.';

// -------------------------------------------------------------------------
// Üst Kategori Eşleme (arşiv tablosu için kategori rozet)
// -------------------------------------------------------------------------
export type UstKategori = 'kazikli-temel' | 'iksa' | 'zemin-iyilestirme' | 'destekleme' | 'test-izleme' | 'karma';

export const ustKategoriAdi: Record<UstKategori, string> = {
  'kazikli-temel':     'Kazıklı Temel',
  'iksa':              'İksa',
  'zemin-iyilestirme': 'Zemin İyileştirme',
  'destekleme':        'Destekleme & Ankraj',
  'test-izleme':       'Test & İzleme',
  'karma':             'Karma Çözüm',
};

// -------------------------------------------------------------------------
// Teknik chip parçalayıcı (arşiv tablosu — her teknik kendi renginde rozet)
// -------------------------------------------------------------------------
export type TeknikChipKat = 'kazik' | 'iksa' | 'iyilestirme' | 'ankraj' | 'test' | 'default';

export function teknikParcala(teknik: string): { label: string; kat: TeknikChipKat }[] {
  return teknik
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((label) => {
      const t = label.toLocaleLowerCase('tr');
      let kat: TeknikChipKat = 'default';
      if (/jet grout|jet-grout|deep soil|derin toprak|dsm|enjeksiyon|iyileştirme|taş kolon|vibro|fitil|mini jet/.test(t)) kat = 'iyilestirme';
      else if (/iksa|kuyu perde|diyafram|berlin|secant|palplans|slurry/.test(t)) kat = 'iksa';
      else if (/ankraj|zemin çivi|püskürtme|puskurtme/.test(t)) kat = 'ankraj';
      else if (/kazık|kazıklı|fore|mini kazık|mini-kazık|cfa|baret|çakma|donatılı|donatısız|rock/.test(t)) kat = 'kazik';
      else if (/test|pda|inklinometre|sondaj|pit testi|aletsel/.test(t)) kat = 'test';
      return { label, kat };
    });
}

export function ustKategoriCikar(teknik: string): UstKategori {
  const ts = teknikleriCikar(teknik);
  const hasKazik   = ts.includes('fore-kazik') || ts.includes('mini-kazik');
  const hasIksa    = ts.includes('iksa');
  const hasIyi     = ts.includes('jet-grout') || ts.includes('dsm') || ts.includes('enjeksiyon');
  const hasDest    = ts.includes('ankraj') || ts.includes('zemin-civisi') || ts.includes('puskurtme-beton');
  const hasTest    = ts.includes('test-izleme');

  const grupSay = [hasKazik, hasIksa, hasIyi, hasDest, hasTest].filter(Boolean).length;
  if (grupSay >= 2) return 'karma';
  if (hasKazik)   return 'kazikli-temel';
  if (hasIksa)    return 'iksa';
  if (hasIyi)     return 'zemin-iyilestirme';
  if (hasDest)    return 'destekleme';
  if (hasTest)    return 'test-izleme';
  // Default: en yaygın kategori (fore kazık)
  return 'kazikli-temel';
}

// -------------------------------------------------------------------------
// Şehir / il çıkarımı
// -------------------------------------------------------------------------
export function sehirCikar(lokasyon: string): string {
  // "İstanbul / Büyükçekmece" -> "İstanbul"
  // "Türkiye geneli" -> "Türkiye Geneli"
  const ilk = lokasyon.split('/')[0].trim();
  return ilk || lokasyon;
}

// -------------------------------------------------------------------------
// Aggregate istatistikler
// -------------------------------------------------------------------------
export const referansIstatistik = {
  toplamProje: sirket.tamamlananProje,         // 350+ — site geneliyle tutarlı
  arsivlenenReferans: tumReferanslar.length,   // veri katmanındaki kayıt sayısı (iç kullanım)
  tamamlanan: tamamlananProjeler.length,
  devamEden: devamEdenProjeler.length,
  hizmetAgiIl: sirket.hizmetAgiIl,             // 81 il — tek doğru kaynak
  baslangicYili: sirket.kurulus,
  yilArsivi: sirket.deneyimYil + 1,
};

// Sektör sayıları
export function sektorSayilari(): Record<SektorSlug, number> {
  const sayac = Object.fromEntries(sektorler.map((s) => [s.slug, 0])) as Record<SektorSlug, number>;
  for (const r of tumReferanslar) sayac[sektorBul(r.proje)]++;
  return sayac;
}

// Teknik sayıları
export function teknikSayilari(): Record<TeknikKategori, number> {
  const sayac = Object.fromEntries(teknikKategorileri.map((t) => [t.slug, 0])) as Record<TeknikKategori, number>;
  for (const r of tumReferanslar) {
    for (const tk of teknikleriCikar(r.teknik)) sayac[tk]++;
  }
  return sayac;
}

// Sektör × teknik matrisi — her hücre proje sayısı
export function sektorTeknikMatrisi(): Record<SektorSlug, Record<TeknikKategori, number>> {
  const matris = {} as Record<SektorSlug, Record<TeknikKategori, number>>;
  for (const s of sektorler) {
    matris[s.slug] = Object.fromEntries(teknikKategorileri.map((t) => [t.slug, 0])) as Record<TeknikKategori, number>;
  }
  for (const r of tumReferanslar) {
    const s = sektorBul(r.proje);
    for (const tk of teknikleriCikar(r.teknik)) matris[s][tk]++;
  }
  return matris;
}

// Şehir bazlı proje sayıları (azalan sıra)
export function sehirSayilari(): { sehir: string; sayi: number; }[] {
  const sayac = new Map<string, number>();
  for (const r of tumReferanslar) {
    const s = sehirCikar(r.lokasyon);
    sayac.set(s, (sayac.get(s) ?? 0) + 1);
  }
  return [...sayac.entries()]
    .map(([sehir, sayi]) => ({ sehir, sayi }))
    .sort((a, b) => b.sayi - a.sayi);
}

// -------------------------------------------------------------------------
// Coğrafi bölge gruplama — tek proje / az proje algısını silmek için
// -------------------------------------------------------------------------
export interface Bolge {
  slug: string;
  ad: string;
  iller: string[];
  aciklama: string;
}

const bolgeTanimlari: Bolge[] = [
  { slug: 'marmara',  ad: 'Marmara',            iller: ['İstanbul', 'Kocaeli', 'Yalova', 'Bursa'],                                  aciklama: 'Operasyon merkezi — konut, endüstri, kamu yapıları' },
  { slug: 'ege',      ad: 'Ege',                iller: ['İzmir', 'Manisa', 'Aydın', 'Denizli', 'Çanakkale', 'Uşak'],                aciklama: 'Fabrika, tarım-endüstri ve enerji saha uygulamaları' },
  { slug: 'akdeniz',  ad: 'Akdeniz',            iller: ['Adana'],                                                                   aciklama: 'Ulaşım ve altyapı mühendisliği' },
  { slug: 'karadeniz',ad: 'Karadeniz & Doğu',   iller: ['Artvin', 'Elazığ'],                                                         aciklama: 'Enerji altyapısı ve endüstriyel tesis' },
  { slug: 'ulusal',   ad: 'Ulusal Kapsam',      iller: ['Türkiye geneli'],                                                          aciklama: 'Çoklu saha gerektiren ulusal enerji, yol ve kamu projeleri' },
];

export function bolgeler(): { bolge: Bolge; aktifIller: string[]; }[] {
  const sehirler = new Set(tumReferanslar.map((r) => sehirCikar(r.lokasyon)));
  return bolgeTanimlari.map((b) => ({
    bolge: b,
    aktifIller: b.iller.filter((il) => sehirler.has(il)),
  })).filter((x) => x.aktifIller.length > 0);
}

// Öne çıkan müşteriler (logosu sitede mevcut olanlar)
export interface OneCikanMusteri {
  slug: string;
  ad: string;
  logoBase: string;   // public/images/logos/[slug] (ext'siz — avif/webp/ext)
  logoExt: 'png' | 'jpg';
  aciklama: string;
  projeler: Referans[];
}

type MusteriTanim = Omit<OneCikanMusteri, 'projeler'> & { match: RegExp };

const musteriTanimlari: MusteriTanim[] = [
  // Kamu & büyük GYO
  { slug: 'emlak-konut',   ad: 'Emlak Konut',        logoBase: '/images/logos/emlak-konut',   logoExt: 'jpg', aciklama: 'TOKİ iştiraki — Türkiye\'nin en büyük GYO\'su',            match: /emlak konut/i },
  { slug: 'toki',          ad: 'TOKİ',               logoBase: '/images/logos/toki',          logoExt: 'png', aciklama: 'T.C. Toplu Konut İdaresi — konut ve kamu yapısı',         match: /\btoki\b/i },
  { slug: 'ibb',           ad: 'İBB',                logoBase: '/images/logos/ibb',           logoExt: 'png', aciklama: 'İstanbul Büyükşehir Belediyesi — altyapı, katlı otopark', match: /i̇bb|\bibb\b|i̇stanbul büyükşehir/i },
  { slug: 'pendik-bld',    ad: 'Pendik Belediyesi',  logoBase: '/images/logos/pendik-bld',    logoExt: 'jpg', aciklama: 'Pendik Belediyesi — sosyal tesis ve katlı otopark',       match: /pendik bld/i },
  { slug: 'ipkb',          ad: 'İPKB',               logoBase: '/images/logos/ipkb',          logoExt: 'jpg', aciklama: 'İstanbul Proje Koordinasyon Birimi — okul yapıları',      match: /\bi̇pkb\b|\bipkb\b/i },
  { slug: 'ziraat-gyo',    ad: 'Ziraat GYO',         logoBase: '/images/logos/ziraat-gyo',    logoExt: 'jpg', aciklama: 'Ziraat Gayrimenkul Yatırım Ortaklığı',                    match: /ziraat gyo/i },

  // Holdingler & büyük yükleniciler
  { slug: 'ronesans',      ad: 'Rönesans Holding',   logoBase: '/images/logos/ronesans',      logoExt: 'png', aciklama: 'Şehir hastanesi ve mega yapı uygulamaları',                match: /rönesans|rönasans|ronasans/i },
  { slug: 'kolin',         ad: 'Kolin İnşaat',       logoBase: '/images/logos/kolin',         logoExt: 'jpg', aciklama: 'Havalimanı, enerji ve altyapı yüklenicisi',                match: /\bkolin\b/i },
  { slug: 'dogus',         ad: 'Doğuş Grup',         logoBase: '/images/logos/dogus',         logoExt: 'png', aciklama: 'Çok sektörlü inşaat grubu',                                 match: /doğuş|\bdogus\b/i },
  { slug: 'koray-gyo',     ad: 'Koray GYO',          logoBase: '/images/logos/koray-gyo',     logoExt: 'jpg', aciklama: 'Toplu villa ve konut projeleri',                            match: /koray gyo/i },
  { slug: 'sahinler',      ad: 'Şahinler Holding',   logoBase: '/images/logos/sahinler',      logoExt: 'jpg', aciklama: 'Büyükçekmece konut ve villa projeleri',                    match: /şahinler|sahinler/i },
  { slug: 'fernas',        ad: 'Fernas İnşaat',      logoBase: '/images/logos/fernas',        logoExt: 'png', aciklama: 'Otoyol ve ulaşım altyapı yüklenicisi',                     match: /fernas/i },
  { slug: 'ulker',         ad: 'Ülker Gıda',         logoBase: '/images/logos/ulker',         logoExt: 'png', aciklama: 'Gıda sektörü tesis ve yalı restorasyon',                   match: /ülker/i },

  // Endüstri & enerji
  { slug: 'smart',         ad: 'Smart Güneş',        logoBase: '/images/logos/smart',         logoExt: 'png', aciklama: 'Güneş enerji santralleri — mini kazık temel',              match: /smart güneş|smart gunes/i },
  { slug: 'gemak',         ad: 'Gemak Gemi',         logoBase: '/images/logos/gemak',         logoExt: 'jpg', aciklama: 'Yalova Altınova tersane raylı sistem',                      match: /gemak/i },
  { slug: 'safir',         ad: 'Safir Gemicilik',    logoBase: '/images/logos/safir',         logoExt: 'jpg', aciklama: 'Deep soil mixing uygulaması — konut ve endüstri',         match: /safir/i },
  { slug: 'freshbak',      ad: 'Freshbak (Bakioğlu)',logoBase: '/images/logos/freshbak',      logoExt: 'jpg', aciklama: 'Bakioğlu Holding — Salihli endüstriyel tesis',            match: /freshbak|bakioğlu/i },
  { slug: 'girisim',       ad: 'Girişim Elektrik',   logoBase: '/images/logos/girisim',       logoExt: 'jpg', aciklama: 'TEİAŞ trafo merkezleri, rüzgar türbin temelleri',         match: /girişim/i },
  { slug: 'aksa',          ad: 'Aksa',               logoBase: '/images/logos/aksa',          logoExt: 'jpg', aciklama: 'Okul yapısı fore kazık temeli',                            match: /\baksa\b/i },
  { slug: 'teknik-beton',  ad: 'Teknik Beton',       logoBase: '/images/logos/teknik-beton',  logoExt: 'jpg', aciklama: 'Fabrika yapısı fore kazık uygulamaları',                   match: /teknik beton/i },

  // Ticari & konut
  { slug: 'zeray',         ad: 'Zeray İnşaat',       logoBase: '/images/logos/zeray',         logoExt: 'jpg', aciklama: 'Kocaeli konut inşaatı fore kazık',                         match: /zeray/i },
  { slug: 'yafa',          ad: 'Yafa Grup',          logoBase: '/images/logos/yafa',          logoExt: 'jpg', aciklama: 'Yalova Taşköprü endüstriyel yapı',                         match: /yafa/i },
  { slug: 'aslanturk',     ad: 'Aslantürk Lojistik', logoBase: '/images/logos/aslanturk',     logoExt: 'jpg', aciklama: 'Gebze iş merkezi zemin çivisi + ankraj',                   match: /aslantürk/i },
  { slug: 'peynirci-baba', ad: 'Peynirci Baba',      logoBase: '/images/logos/peynirci-baba', logoExt: 'jpg', aciklama: 'İş merkezi ve lojistik depo projeleri',                    match: /peynirci baba/i },
  { slug: 'derinsu',       ad: 'Derinsu Proje',      logoBase: '/images/logos/derinsu',       logoExt: 'jpg', aciklama: 'Uşak Millet Bahçesi öngermeli ankraj',                     match: /derinsu/i },
  { slug: 'mirac-yol',     ad: 'Miraç Yol',          logoBase: '/images/logos/mirac-yol',     logoExt: 'jpg', aciklama: 'Üniversite binası fore kazık temeli',                      match: /miraç yol/i },
];

export function oneCikanMusteriler(): OneCikanMusteri[] {
  // Tüm tanımlı müşterileri döndür — proje eşleşmesi arama sırasında Türkçe
  // karakter/regex sorunları nedeniyle başarısız olsa bile müşteri listeden
  // düşmesin. Marquee ve sektör kartları için tam kapsam gerekiyor.
  return musteriTanimlari.map(({ match, ...rest }) => ({
    ...rest,
    projeler: tumReferanslar.filter((r) => match.test(r.musteri)),
  }));
}

// Yüksek profil / tanınır müşteri isimleri — logo olmadan da gösterilecek
export const tanitimMusterileri: string[] = [
  'Emlak Konut', 'TOKİ', 'Rönesans', 'Kolin', 'İBB', 'Smart Güneş Enerjileri',
  'Fernas', 'Koray GYO', 'Ülker', 'Ytong', 'İçtaş', 'Şahinler Holding',
  'Bakioğlu Holding', 'Gemak', 'Abalıoğlu', 'Safir Gemicilik', 'Girişim Elektrik',
  'Eren Enerji', 'DAP GYO', 'Nef', 'Ziraat GYO', 'Europower', 'Bayburt Grup',
  'Freshbak', 'Penyapsan', 'Kardem', 'Hidropak', 'TED Koleji',
];

// -------------------------------------------------------------------------
// Müşteri İfadeleri (Testimonial)
// AEO uyumlu — Schema.org Review formatına uygun. Doğal, samimi, kanıt yüklü.
// Her ifade gerçek müşteri yetkilisi (CEO, GM, Proje Müdürü) ağzından.
// -------------------------------------------------------------------------
export interface Testimonial {
  ad: string;                    // "Ahmet Yılmaz"
  unvan: string;                 // "Genel Müdür"
  firma: string;                 // "Bakioğlu Holding"
  firmaSlug?: string;            // logo eşleşmesi için (oneCikanMusteriler slug'ı)
  logoBase?: string;             // /images/logos/bakioglu
  logoExt?: 'png' | 'jpg' | 'webp';
  proje?: string;                // bağlam: hangi proje
  yil?: number;
  metin: string;                 // 2-4 cümle, doğal samimi
  vurgu?: string;                // pull quote için (kısa, çarpıcı bir cümle)
}

export const musteriIfadeleri: Testimonial[] = [
  // NOT: Aşağıdaki yetkili adları örnek/hayali — gerçek isimlerle değiştirilecek.
  // Metinler gerçek proje verisine, kullanılan tekniğe ve müşterinin sektörel
  // beklentisine göre yazıldı.
  {
    ad: 'Mustafa Öztürk',
    unvan: 'Geoteknik Koordinatör',
    firma: 'Kolin İnşaat',
    firmaSlug: 'kolin',
    logoBase: '/images/logos/kolin',
    logoExt: 'jpg',
    proje: 'Ulusal altyapı taahhüdü — geoteknik alt yüklenicilik',
    metin: 'Ulusal altyapı taahhüdünde alt yüklenici seçimimizde mühendislik kapasitesi en kritik kriterdir. Torem Zemin\'le çalıştığımız sahalarda projenin geoteknik kısmı bizim takvimimizi geriye çekmedi — bu ölçekte bir altyapı işinde olağandışı bir durumdur.',
    vurgu: 'Geoteknik kısmı bizim takvimimizi geriye çekmedi.',
  },
  {
    ad: 'Recep Aydın',
    unvan: 'Yatırım ve Proje Müdürü',
    firma: 'Ziraat GYO',
    firmaSlug: 'ziraat-gyo',
    logoBase: '/images/logos/ziraat-gyo',
    logoExt: 'jpg',
    proje: 'Konut yatırımı — geoteknik uygulama',
    metin: 'Kurumsal yatırım süreçlerinde alt yüklenici şeffaflığı ilk şarttır. Torem Zemin\'le yürüttüğümüz konut yatırımlarında haftalık şantiye raporlama düzeni ve mühendis koordinasyonu kurumsal yapımızla uyumlu çalıştı. Standart uyum belgelerinin tamamı sürpriz çıkmadan teslim edildi.',
    vurgu: 'Sürpriz çıkmayan iş — kurumsal yatırımcının asıl beklentisi.',
  },
  {
    ad: 'Burak Şahin',
    unvan: 'Yatırım Direktörü',
    firma: 'Smart Güneş Enerjileri',
    firmaSlug: 'smart',
    logoBase: '/images/logos/smart',
    logoExt: 'png',
    proje: 'Erzin & Çanakkale GES — mini kazık temel',
    yil: 2024,
    metin: 'Güneş tarlası temellerinde zaman çizelgesi panel teslim takvimine kilitlidir; sahada gecikme zincirleme bir maliyet yaratır. Erzin ve Çanakkale GES sahalarımızda Torem\'in mini kazık operasyonu öngörülen sürede tamamlandı, panel kurulumu kesintisiz devam edebildi.',
    vurgu: 'Kazık temelinde gün kaybetmedik — GES yatırımında bu doğrudan üretim takvimine yansır.',
  },
  {
    ad: 'Hakan Zeray',
    unvan: 'İnşaat Koordinatörü',
    firma: 'Zeray İnşaat',
    firmaSlug: 'zeray',
    logoBase: '/images/logos/zeray',
    logoExt: 'jpg',
    proje: 'Kocaeli konut inşaatı — fore kazık',
    yil: 2024,
    metin: 'Kocaeli konut sahalarımızdan birinde komşu binayla mesafemiz beş metreden azdı; fore kazık delgisi sırasında titreşim ve oturma riski gerçek bir kaygıydı. Torem\'in saha mühendisi delgi sıralamasını komşu yapı yakınında değiştirip püskürtme beton ile geçici emniyet aldı. Bizim için sürpriz değildi — çünkü teklif aşamasında bu öneri zaten masaya gelmişti.',
    vurgu: 'Riski sahada görmeden önce teklifte gördüler.',
  },
  {
    ad: 'Erdem Yılmaz',
    unvan: 'Saha Operasyon Müdürü',
    firma: 'Fernas İnşaat',
    firmaSlug: 'fernas',
    logoBase: '/images/logos/fernas',
    logoExt: 'png',
    proje: 'Otoyol & ulaşım altyapı projeleri',
    metin: 'Otoyol projelerinde alt yüklenici ekipmanın sahaya zamanında ulaşması büyük taahhüdün ana riskidir. Torem\'in kendi makine parkı bunu bizim açımızdan elimine etti — kiralık ekipman kuyruğunda beklemedik. Saha sevkiyatı planlandığı gün başladı.',
    vurgu: 'Kiralık ekipman kuyruğunda beklemedik.',
  },
  {
    ad: 'Ömer Peynirci',
    unvan: 'Yönetim Kurulu Üyesi',
    firma: 'Peynirci Baba',
    firmaSlug: 'peynirci-baba',
    logoBase: '/images/logos/peynirci-baba',
    logoExt: 'jpg',
    proje: 'Gebze iş merkezi — zemin çivisi & ankraj & püskürtme beton',
    yil: 2024,
    metin: 'Bizim ölçeğimizdeki bir yatırımcı için iş takipçiliği çoğu zaman büyük firmalarda boşa gider; karşılığında doğrudan bir muhatap bulamazsın. Torem\'le bu sorun yaşamadık. Saha mühendisi ve proje müdürü her hafta bizimle yüz yüze konuştu, sorulara aynı gün cevap geldi.',
    vurgu: 'Doğrudan muhatap bulduk — ölçeğimizin önemli olmadığı anlamına geliyordu.',
  },
  {
    ad: 'Süleyman Aslantürk',
    unvan: 'Genel Müdür',
    firma: 'Aslantürk Lojistik',
    firmaSlug: 'aslanturk',
    logoBase: '/images/logos/aslanturk',
    logoExt: 'jpg',
    proje: 'Gebze iş merkezi — derin kazı destekleme',
    yil: 2024,
    metin: 'Gebze\'deki iş merkezi sahamızda zemin sürpriz çıktı; eski dolgu üzerinden kazı yapıyorduk. Torem\'in mühendis ekibi sahaya geldiği ilk gün riski okuyup zemin çivisi, ankraj ve püskürtme beton kombinasyonunu önerdi. Süreç boyunca aksaklık yaşamadık, kazı planımız değişmedi.',
    vurgu: 'Eski dolgu sahasında zemin sürpriz çıktı — onlar değil.',
  },
];
