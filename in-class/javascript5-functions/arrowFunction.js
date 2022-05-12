//! ------------------------------------------
//! 3. ARROW FUNCTION
//! ------------------------------------------

const topla = (a, b) => a + b;
const usAl = (taban, us) => taban ** us;

console.log(topla(3, 5));
console.log(usAl(4, 3));

//köşeli parantez kullandığımz için return kullanmamız gerekti
const topla1 = (a, b) => {
  const sonuc = a + b;
  return sonuc;
};
console.log(topla1(3, 5));

const menu = (times) => {
  console.log("===============");
  console.log("JAVASCRIPT ÇOK KOLAYMIŞ");
  console.log("===============");
  return times * 2;
};
console.log(menu(2));

const tekMi = (n) => (n % 2 ? "Tektir" : "Çifttir");
console.log(tekMi(3));

const r = prompt("yarıçapı giriniz");
const h = prompt("yüksekliği giriniz");

const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log("silindirin hacmi :", Math.trunc(hacimHesapla(r, h)));
console.log("silindirin hacmi :", hacimHesapla(r, h).toFixed(1));
