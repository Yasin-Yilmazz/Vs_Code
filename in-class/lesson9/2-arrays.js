//* Dizi Tanımlama
//* ----------------------------------------------

//! 1.yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "mehmet", "ismet", "saffet"];
console.log(isimler);
console.log(isimler.length);

//! 2. yöntem (Object Constructor)
const diller = new Array("Python", "Java", "C++", "JS", "Go");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const sayilar = new Array(10); //! 10 elemanlık boş bir array oluşturdu
console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ----------------------------------------------

//! Okuma
const java = diller[1];
console.log(java);

//! Yazma
isimler[2] = "Canan";
console.log(isimler);

//! Hata, const keyword'u ile tanımlanmış bir diziye tamamıyla bir atama yapılmaz

// isimler = ["Can", "Cana", "Cavidan"];
// console.log(isimler);
//! Uncaught TypeError: Assignment to constant variable.
const yaslar = [22, 18, 15];
const kisiler = ["Ahmet", "Yilmaz", 2022, 2022 - 1970, true, 5.6, yaslar];
console.log(kisiler);

console.log(kisiler[6][1]);
const sonYas = ++kisiler[6][2];
console.log(sonYas, kisiler);

//? ================================================================
//? DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ================================================================

const cars = ["BMW", "Porche", "Mercedes", "Fiat"];

const deleted = cars.pop();
console.log(cars, "silinen: ", deleted);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman saysini döndürür
const n = cars.push("Volvo");
console.log(cars, n);

//* unshift dizinin 0. indexine elaman ekler
const boyut = cars.unshift("Audi");
console.log(boyut, cars);

//* dizinin 0. indeks elemanını siler ve silinen elemanı dondurur
const silinen = cars.shift();
console.log(silinen, cars);

//* dizinin tamamnını ters sıraya cevirdi
console.log(cars.reverse());
console.log(cars);

//* diziyi alfabetik olarak sıralar
console.log(cars.sort());

const rakamlar = [3, 5, 1, 10, 55];
console.log(rakamlar.sort()); //! alfabetik sıraladığı için kesin doğru çıkmadı

rakamlar.sort((x, y) => x - y);
console.log(rakamlar);

cars.splice(1, 0, "Vosvos");
console.log(cars); //! 1. indise vosvos ekle (eleman sayisini bir artır)

cars.splice(2, 1, "Anadol"); //! 2. indistekini anadol olarak değiştir (eleman sayısı değişmez)
console.log(cars);
