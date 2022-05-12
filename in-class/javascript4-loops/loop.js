for (let i = 0; i < 10; i++) {
  console.log("merhaba");
}

// math.trunc virgülsüz yazdırır
// math.floor = zemine yuvarlar
// math.ceil = yukarı yuvarlar
// math.round = hangisine yakınsa ona yuvarlar
// math.trunc = kesirli sayının tam kısmını alır

for (let i = 1; i <= 10; i++) {
  const randomSayi = Math.floor(Math.random() * 100 + 1);
  console.log(randomSayi);
}

console.log("Program bitti");

// örnek : 1 den n kadar sayıları toplayan kodu

// const n = prompt("n sayisini giriniz");
// let toplam = 0;

// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }

// console.log("Toplam:", toplam);

// Örnek: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// let input = prompt("Asal olup olmadığını kontrol etmek için sayı giriniz");

// for (let i = 2; i < input; i++) {
//   if (input % i == 0) {
//     console.log(`${input} sayısı asal değildir.`);
//     break;
//   } else {
//     console.log(`${input} sayısı asal sayıdır.`);
//     break;
//   }
// }

//************************* WHILE ********************************* */

// let i = 1;
// while (i <= 5) {
//   console.log("Merhaba");
//   break;
// }

// console.log("bitti");

// //************************************************************* */

// let not;
// do {
//   // not = prompt("0-100 arası bir not giriniz");
// } while (not < 0 || not > 100);
// {
//   console.log("girdiğiniz not 0-100 arasındadır");
// }

//? ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let inp1;
do {
  inp1 = prompt("Enter any letter: ");
  if (inp1 == "q" || inp1 == "Q") {
    break;
  }
} while (inp1 !== "q" || inp1 !== "Q");
