let simdi = new Date(); // şimdiki tarih - saat

// Get Methods
sonuc = simdi; // typeof object
sonuc = simdi.getDate; // typeof dunction // gün bilgisi
sonuc = simdi.getDay(); // 0: Pazar
sonuc = simdi.getFullYear(); // yıl bilgisi
sonuc = simdi.getHours(); // saat
sonuc = simdi.getTime(); //

// Set Methods
simdi.setFullYear(2025);
simdi.setMonth(7);  // 0: Ocak
simdi.setDate(15);



sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();
sonuc = simdi - dogumTarihi;

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);

