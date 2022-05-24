//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

const islemler = [-3000, 4500, -2200, -6000, 9000];
const islemleriTopla = () => {
  let yatirma = 0;
  let cekme = 0;
  for (let i = 0; i < islemler.length; i++) {
    if (islemler[i] > 0) {
      yatirma += islemler[i];
    } else {
      cekme += islemler[i];
    }
  }
  return `Toplam yatırma ${yatirma}, Toplam Çekme ${-cekme}`;
};

console.log(islemleriTopla());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------

const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "ahmet",
  "nur",
  "can",
  "nur",
  "mehmet",
  "cem",
];

const ogrenciBul = (isim) => {
  let sayac = 0;
  for (let i in ogrenciler) {
    if (isim === ogrenciler[i]) {
      sayac++;
    }
  }
  if (sayac === 0) {
    return `${isim} bulunamadı`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

// let ogrIsim = prompt("Ogrenci adını giriniz: ");
// console.log(ogrenciBul(ogrIsim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const ogrenciBulForof = (isim) => {
  let sayac = 0;

  for (let ogrenci of ogrenciler) {
    ogrenci === isim ? sayac++ : null; //!Ternary
    //   gorenci === isim && sayac++;  //! Short-circuit yöntemi && => koşul doğru ise ifadeyi çalıştırır
  }
  return !sayac ? `${isim} bulunamadı` : `${isim}, ${sayac} adet bulundu.`; //! sayac 0 ise ? sonrayı değilse : sonrayı döndür
};

let name = prompt("öğrenci adı giriniz: ").toLowerCase();
console.log(ogrenciBulForof(name));
