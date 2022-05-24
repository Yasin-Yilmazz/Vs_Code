const fiyatlar = [100, 250, 50, 89];

// Dizideki herbir fiyatı konsola bastırır
fiyatlar.forEach(yazdir);

function yazdir(value) {
  console.log(value);
}

console.log("********************************");

fiyatlar.forEach((value) => console.log(value));

let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log(`Toplam ${toplam}`);

console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat))); //! undifined

let toplam1 = 0;

fiyatlar.forEach((deger, index, arr) => {
  toplam1 += deger;
  console.log(`${index}.iterasyon toplamı: ${toplam1}`);
  arr[index] = deger + 10;
});
console.log(fiyatlar);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

//* ======================================================
//*                   MAP METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
//* isimler dizisin içerisindeki her ismi büyük harf olarak yeni bir diziye saklayalım

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const kucukIsimler = isimler.map((name) => name.toLocaleLowerCase());
console.log(isimler);
console.log(kucukIsimler);

//*-------------- ÖRNEK -------------------

const büyükIsimler = isimler.map((isim, i, dizi) => {
  dizi[i] = isim.toLocaleLowerCase(); //! orjinal diziyi değiştirdik.
  return isim.toLocaleUpperCase();
});
console.log(büyükIsimler);
console.log(isimler);

console.log("**************************");

//! tüm isimleri büyük harfe çevirip yazdır
isimler.map((x) => x.toLocaleUpperCase()).forEach((x) => console.log(x));

console.log("******************************");

//! ahmet olanları seçip büyük harfe çevirip yazdır
isimler
  .filter((x) => x === "ahmet")
  .map((x) => x.toLocaleUpperCase())
  .forEach((x) => console.log(x));

//* fiyatlar dizisindeki fiyatı 200 den küçük olanları ayrı bi diziye saklayalım
// const fiyatlar = [100, 250, 50, 89];

const kucuk250 = fiyatlar.filter((f) => f < 250);
console.log(kucuk250);
