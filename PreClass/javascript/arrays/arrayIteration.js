//! forEach
let ogrenciler = ["yasin", "melek", "ömer"];
ogrenciler.forEach(yazdir);
function yazdir(x) {
  console.log(x);
}
//? arrow function
ogrenciler.forEach((x) => console.log(x));

const dizi5 = [-5, 24, -13, 7];
const yeniDizi = [];
dizi5.forEach(katAl);

function katAl(deger, indis, dizi5) {
  yeniDizi[indis] = deger * 5;
}
console.log(yeniDizi);

const dizi6 = [-5, 24, -13, 7];
const yeniDizi1 = [];
dizi6.forEach((d, i) => (yeniDizi1[i] = d * 5));
console.log(yeniDizi1);

//! map
const rakamlar = [3, 7, 17, 8, 9, 0, 3];
const katAlınmıs = rakamlar.map((x) => x * 5);
console.log(katAlınmıs);

let isimler = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];
const buyukIsımler = isimler.map((x) => x.toUpperCase());
console.log(buyukIsımler);

const euro = 9.68;
const dolar = 8.1;
const tlFiyatlar = [100, 150, 100, 50, 80];
const dolarFiyatlar = tlFiyatlar.map((x) => (x / dolar).toFixed(2));
const euroFiyatlar = tlFiyatlar.map((x) => (x / euro).toFixed(2));
console.log(dolarFiyatlar);
console.log(euroFiyatlar);

// ÖRNEK: tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor. Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

const degerler = tlFiyatlar.map(function (deger, indis) {
  if (deger > 100) {
    return `${indis + 1}.Ürün fiyatı: ${(deger * 1.1).toFixed(2)}`;
  } else {
    return `${indis + 1}.Ürün fiyatı: ${(deger * 1.15).toFixed(2)}`;
  }
});
console.log(degerler);

//! filter

const koordinatlar = [-100, 150, -32, 43, -20];
negatifKoordinat = koordinatlar.filter((x) => x < 0);
console.log(negatifKoordinat);

//!!!! PIPELINE (HAT) !!!!!!!!!

koordinatlar
  .filter((x) => x < 0)
  .map((t) => t * -1)
  .forEach((y) => console.log(y));

const bireyler = ["Mustafa", "Murat", "Ahmet", "mustafa", "Ayşe", "Canan"];

const basHarfeGoreSec = function (harf) {
  const buyukHarf = harf.toUpperCase();
  const filtrelenmis = bireyler
    .filter((t) => t.startsWith(buyukHarf))
    .map((t) => t);
  return filtrelenmis;
};

console.log(basHarfeGoreSec("m"));
console.log(basHarfeGoreSec("A"));

//! reduce
const koordinatlar1 = [-100, 150, -32, 43, -20];

const toplam = koordinatlar1.reduce(function (x, y) {
  return x + y;
});
console.log(toplam);

const toplamıBul = koordinatlar1.reduce((x, y) => x + y);
console.log("KOORDİNAT TOPLAMI:" + toplamıBul);

const toplam1 = koordinatlar1.reduce(function (x, y, i) {
  console.log(`iterasyon ${i} ${x}`);
  return x + y;
});
console.log(toplam1);

const ortalama = koordinatlar.reduce((x, y) => x + y) / koordinatlar.length;
console.log("Koordinatların Ortalaması:" + ortalama);

//? Bir Firma, 3000 TL den az olan maaşlara %10 zam yapmak istiyor ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor. İlgili programı yazınız.

const maaşlar = [3000, 2891, 3500, 4200, 7000, 2500];
const zamlıToplam = maaşlar
  .filter((x) => x < 3000)
  .map((x) => x * 1.1)
  .reduce((x, y) => x + y);
console.log(zamlıToplam.toFixed(2));
