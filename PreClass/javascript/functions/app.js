const yasYazdir = (dogumTarihi) =>
  `Yaşınız ${new Date().getFullYear() - dogumTarihi}`;

console.log(yasYazdir(1998));

const yasVer = (dogumTarihi) => {
  let yas = new Date().getFullYear() - dogumTarihi;
  return `Yaşınız ${yas}`;
};

console.log(yasVer(1998));

const kareAl = (sayi) => sayi ** 2;
const kupAl = (sayi) => sayi ** 3;
const usAl = (x, y) => x ** y;

console.log(kareAl(5));
console.log(kupAl(5));
console.log(usAl(5, 3));

const leapYear = function (year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return `artık yıldır`;
  } else {
    return "artık yıl değildir";
  }
};

const year = prompt("Yılı giriniz: ");
console.log(year, leapYear(year));
