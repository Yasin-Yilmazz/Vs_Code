//! -----------------------------------------
//! 1. FUNCTION DECLERATION
//! -----------------------------------------
//! parametre almamış, bir şey döndürmüyor (void function)
function yazdir() {
  console.log("Merhaba");
}
yazdir();
console.log(typeof yazdir); // function

//! bir parametreyi çağırma sırasında çağırmazsak onun yerine default değer atayabiliriz
function selamla(isim, soyisim = "") {
  console.log(`Merhaba ${isim} ${soyisim}`);
}
selamla("Erhan", "Yılmaz");
selamla("Erol");
selamla("Jason");

function yasHesapla(year, name) {
  // const mesaj = `${name} in yaşı ${2022 - year} dir`;
  const mesaj = `${name} in yaşı ${new Date().getFullYear() - year} dir`;
  return mesaj;
}

const mesaj1 = yasHesapla(2001, "Elif");
console.log(mesaj1);

function tekCift(x) {
  return x % 2 === 0 ? `${x} Çifttir` : `${x} tektir`;
  //   return x % 2 ? "Tek" : "Çift";
}

console.log(tekCift(5));
console.log(tekCift(2));
