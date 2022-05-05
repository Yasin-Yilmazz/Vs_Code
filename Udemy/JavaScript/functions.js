// function yasHesapla(dogumYili) {
//     return 2022 - dogumYili;
// }

function emeklilikYasKalan(dogumYili,isim) {
    let yas = 2022 - dogumYili;
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`)
    }
    else {
        console.log("Emeklilik yaşınızı doldurdunuz.")
    }
}
emeklilikYasKalan("1998","yasin");

// gönderilen kelimeyi istenilen adet kadar yazdırma

function tekrarYaz (kelime,tekrar) {
    for (let i=0; i<tekrar; i++) {
        console.log(kelime)
    }
}

tekrarYaz("yasin",5);

// dikdörtgenin alan ve çevresini hesaplayan fonksiyon

function alanCevreHesapla (kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = kisa * 2 + uzun * 2;
    console.log(`Dikdörtgenin alanı ${alan}, çevresi ${cevre}dir`);
}
alanCevreHesapla(20,10)

// yazı tura uygulaması

function yaziTura() {
    let random = Math.random(); // 0 - 1

    if (random <= 0.5) {
        console.log("yazı");
    }
    else {
        console.log("tura");
    }
    // console.log(random);
}

yaziTura();
yaziTura();
yaziTura();

function tamBolen(sayi) {
    let bolen = [];
    for(let i = 0; i <= sayi; i++) {
        if (sayi % i == 0) {
            bolen.push(i);
        }
    }
    console.log(bolen);
}

tamBolen(44);

// verilen adetteki parametrelerin toplamı
function toplam() {
    let sonuc = 0;

    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    console.log(sonuc);
}

toplam(1, 5, 6, 8, 9);
toplam(1, 6, 7);
toplam(12, 45, 67, 54);