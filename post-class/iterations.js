const fiyatlar = [100, 250, 50, 89];

//? fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

const zamliFiyatlar = 0;
fiyatlar.forEach((zam, fiyat) => (fiyatlar[fiyat] = zam *= 1.1));
console.log(fiyatlar);

//? fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.
console.log("********************************");
const kucuk90 = fiyatlar
  .filter((x) => x > 90)
  .forEach((x, y) => console.log(x));
console.log(kucuk90);

console.log("*********************************");
//? fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const kucuk110 = fiyatlar
  .filter((x) => x < 110)
  .map((x) => x * 1.1)
  .forEach((x) => console.log(x));
console.log(kucuk110);

const maaslar = [3000, 5000, 4000, 6000, 6500];

console.log("=================================");
//? maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const zamliMaaslar = [];
maaslar
  .filter((x) => x < 4000)
  .map((x) => x * 1.5)
  .forEach((x) => zamliMaaslar.push(x));
console.log(zamliMaaslar);

console.log("********************************");
//? Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

const dusukZam = maaslar
  .filter((x) => x > 4000)
  .map((x) => x * 1.25)
  .forEach((x) => console.log(x));
console.log(dusukZam);

console.log("*********************************");
//? Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.

let toplam = 0;
maaslar.forEach((maas) => (toplam += maas));
console.log(toplam);

let toplam1 = maaslar.reduce((x, y) => x + y);
console.log(toplam1);
