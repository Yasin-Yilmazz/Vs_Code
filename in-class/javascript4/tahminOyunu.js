//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// Pseudocode :
// 1. hak=5
// 2. Rastgele bir sayı tut.
// 3. Kullanıcıdan tahmin al
// 4. hak = hak -1
// 5.  eğer (tahmin =? rastgele sayı)
//         print(tebrikler)
//         exit
//     değilse
//         eğer (tahmin < rastgele sayı)
//             print(ARTTIR)
//         değilse
//             print(AZALT)
// 6.  eğer hak > 0 goto ---> 3
//     değilse
//         print(Üzgünüm hakkınız bitti.)

// let hak = 5;
// const rasgeleSayi = Math.round(Math.random() * 100 + 1);
// console.log(rasgeleSayi);
// while (hak > 0) {
//   let tahminEt = prompt("0-100 arası sayı tahmin ediniz");
//   if (tahminEt == rasgeleSayi) {
//     console.log("Tebrikler bildiniz");
//     break;
//   }
//   hak -= 1;
//   console.log(`${hak} hakkınız kaldı`);
//   if (hak == 0) {
//     console.log("Hakkınız bitti kaybettiniz");
//   }
// }

let devam;

do {
  let hak = 5;
  const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rasgeleSayi);

  do {
    const tahmin = prompt("Lütfen 0-100 arası sayı giriniz");
    hak -= 1;
    if (tahmin == rasgeleSayi) {
      console.log(`Tebrikler ${5 - hak} denemede bildiniz. 🥳`);
      break;
    } else {
      console.log(`Dikkat ${hak} hakkınız kaldı. ⚠`);
      if (tahmin < rasgeleSayi) {
        console.log("Arttır ⬆");
      } else {
        console.log("Azalt ⬇");
      }
    }
  } while (hak > 0);

  if (hak === 0) {
    console.log("Üzgünüz oyunu kaybettiniz 😢");
  }

  devam = prompt("Yeniden oynamak ister misiniz e/h?");
} while (devam == "e" || devam == "E");

console.log("Yine bekleriz");
