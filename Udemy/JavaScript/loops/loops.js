for(let i = 0; i < 10; i++) {
    console.log(i);
}

let toplam = 0;

for (let i = 1; i <= 10; i++) {
    toplam += i;
}
console.log(toplam);

let sayilar = [1, 5, 7, 15, 3, 25];

for (let i of sayilar) {
    console.log(i**2);
}
console.log("***********")
for (let i in sayilar) {
    console.log(sayilar[i]**2)
}

// let sayilar = [1, 5, 7, 15, 3, 25];

for (let i of sayilar) {
    if (i % 5 == 0) {
        console.log(`${i} sayısı 5 in katıdır`);
    }
}

// let sayilar = [1, 5, 7, 15, 3, 25];
let sonuc = 0;
for (let i of sayilar) {
    if (i % 2 == 0) {
        sonuc += i;
    }
}
console.log(sonuc);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

for (let i of urunler) {
    console.log(i.toUpperCase());
}

adet = 0;
for (let i in urunler) {
    if (urunler[i].includes("samsung")) {
        adet ++ ;
    }
}
console.log(adet);

let ogrenciler = [
    {"ad":"yiğit", "soyad":"bilgi","notlar":[60,70,60]},
    {"ad":"ada", "soyad":"bilgi","notlar":[80,70,80]},
    {"ad":"çınar", "soyad":"turan","notlar":[70,70,60]},
];

for (let i of ogrenciler) {
    // console.log(i.notlar);
    let notToplam = 0;
    for (let not of i.notlar) {
        notToplam += not;
    }
    let ort = notToplam / ogrenciler.length;
    console.log(ort);
}
