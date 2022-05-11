let ogrenciler = ['Çınar', 'Yigit', 'Ada'];

sonuc = ogrenciler.length;

//array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("   ");

// eleman silme
// sonuc = ogrenciler.pop(); // son eleman silinir ve geri döndürülür
sonuc = ogrenciler.shift();  //ilk eleman silinir

// eleman ekleme
sonuc = ogrenciler.push('Sena'); // dizinin sonuna elaman eklenir
sonuc = ogrenciler.unshift('Sena'); // listenin başına ekle


let markalar1 = ['mazda', "toyota"];
let markalar2 = ['opel', "renault"];
let markalar3 = ['mercedes'];

sonuc = markalar1.concat(markalar2); // concat ediyor birleştiriyor
sonuc = markalar1.splice(0, 1, "bmw", "audi"); // 0 dan başla 1. elemanı sil sonrakileri ekle


console.log(sonuc);
console.log(markalar1 );


let ogr1 = ["Yiğit", "Bilgi", 2010, [70,60,80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80,80,90]];
let ogr3 = ["Ahmet", "Turan", 2009, [50,60,70]];

ogrenciler = [ogr1, ogr2, ogr3]

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2]; 
let ada_yas = new Date().getFullYear() - ogrenciler[1][2]; 
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2]; 

sonuc = ogrenciler[0][2];
console.log(`yiğitin yaşı ${yigit_yas}'dir.`);
console.log(`adanın yaşı ${ada_yas}'dir.`);
console.log(`ahmetin yaşı ${ahmet_yas}'dir.`);

