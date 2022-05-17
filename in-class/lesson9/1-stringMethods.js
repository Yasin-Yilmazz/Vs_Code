// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("******* STRING METHODS ********");

//! Klasik yöntem ile string tanımlarsanız bu string bir primitive değişkendir
const str1 = "Clarusway";
const str2 = " Hello";
const str3 = "World";

console.log(typeof str1);
const str4 = str1 + str2;
console.log(str4);

console.log(str4.concat(str3));

const str5 = new String("Non-Primitive String");
console.log(str5, typeof str5);
const str6 = str5.repeat(2);
console.log(str6);
//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek açıklama için : https://javascript.info/primitive-methods

//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------
const s1 = "hello";
const s2 = "world";
const s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat(" Clarusway", str2));

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------
console.log(s3.charAt()); //! 0.indexteki bulunan charı getirir
console.log(s3.charAt(4)); //! o
console.log(s3.charAt(s3.length - 1));

//* ----------------------------------------------------------
//* includes()
//* ----------------------------------------------------------
const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //! true
console.log(word.includes("That")); //! false
console.log(word.includes("")); //! true
console.log(word.includes("to be", 18)); //! false
console.log(word.includes("to be", 13)); //! true

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf()
//* ----------------------------------------------------------
const tobeIndex = word.indexOf("or");
console.log(tobeIndex);
console.log(word.indexOf("be")); //! 3
console.log(word.lastIndexOf("be")); //! 16
console.log(word.lastIndexOf("BE"));

//* ----------------------------------------------------------
//* startsWidth() , endsWith()
//* ----------------------------------------------------------
const word2 = "Salına salına sinsice";
console.log(word2.startsWith("sa")); //! false
console.log(word2.startsWith("sa", 7)); //! true
console.log(word2.endsWith(""));

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith)
//* ----------------------------------------------------------
let oku = "Oku Baban gibi,saf olma";
console.log(oku.replace("saf olma", "akıllı ol"));
oku = oku.replace("saf olma", "akıllı ol");
console.log(oku);

//* Detaylı değiştirme alternatifi için regex kullanılabilir
console.log(oku.replace("/AKILLI/i", "developer"));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece..";
const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); // gündüz gece string

console.log(veysel.slice(17, 30)); // dayım yürüyor
console.log(veysel.slice(-10)); // düz gece
console.log(veysel.slice(-23, -19)); // yürü
//! negatif indeks substring ile kullanılamaz.
console.log(veysel.substring(17, 30)); // dayım yürüyor.

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalım";
const splited = tarkan.split(" ");
console.log(splited, typeof splited);
const gece = splited[2]; //* indisleme ile değer okunabilir
console.log(gece);

const chars = tarkan.split("");
console.log(chars); // null karakteri harfleri ayırarak bir char dizisi oluşturdu

const copyTarkan = tarkan.split();
console.log(copyTarkan); // Stringi array haline getirdi

//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

let youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let shortYoutube = youtube.replace("www.youtube.com/watch?v=", "youtu.be/");
console.log(shortYoutube);
shortYoutube =
  youtube.slice(0, youtube.indexOf("www")) +
  "youtu.be/" +
  youtube.slice(youtube.indexOf("=") + 1);
console.log(shortYoutube);

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "   Hoş geldin ya şehri Ramazan    ";
console.log(ramazan);
console.log(ramazan.length); // 34
console.log(ramazan.trim());
console.log(ramazan.trim().length); // 27
