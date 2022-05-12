//! ---------------------------------------------
//! 2. FUNCTION EXPRESSION
//! ---------------------------------------------

const tekCift = function (number) {
  return number % 2 ? `${number} Tektir` : `${number} Çifttir`;
};

console.log(tekCift(2));

const buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x >= y && x >= z) {
    enBuyuk = x;
  } else if (y >= x && y >= z) {
    enBuyuk = y;
  } else if (z >= x && z >= y) {
    enBuyuk = z;
  } else {
    enBuyuk = x;
  }
  return enBuyuk;
};

console.log(`En Büyük Sayi ${buyukBul(11, 3, 22)}`);
console.log(`En Büyük Sayi ${buyukBul(11, 22, 22)}`);

const hesapla = function (islem, s1, s2) {
  let sonuc;
  if (islem == "+") {
    sonuc = topla(s1, s2);
  } else if (islem == "-") {
    sonuc = cikar(s1, s2);
  } else if (islem == "*") {
    sonuc = carp(s1, s2);
  } else if (islem == "/") {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};
const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
console.log(hesapla("+", 3, 5));
console.log(hesapla("-", 3, 5));
