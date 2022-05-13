//! length method

//? ➤ length property returns the count of the total number of characters.
//? ➤ The length of an empty string is 0.
let x = "Clarusway";
var y = "";
console.log(x.length); // 9
console.log(y.length); // 0

//! concat method

//? This method does not modify the current strings but returns a new string that contains the joined strings text.
let s1 = "Hello ";
let s2 = "World!";
let s3 = s1.concat("js " + s2);
console.log(s3);

//! charAt method

//? The charAt() method returns the char value at the specified index in a string.
//? the index of the first character is 0 and the index of the last character is string.length-1.
let str = "Clarusway";

console.log(str.charAt(0)); // C
console.log(str.charAt(3)); // r
console.log(str.charAt(str.length - 1)); //y

//! include method

//? The includes() method specifies whether a string includes the characters of a specified string.
//? This method returns true if the characters are in the string, and if not false.
//* The includes() method is case sensitive.

let str1 = "Hello John, welcome to Clarusway.";
let t = str1.includes("welcome");
let f = str1.includes("Welcome");

console.log(`t = ${t}`);
console.log(`f = ${f}`);

//! indexOf method

//? The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
//? This method returns -1 if the value is not found.

let str = "You do not know what you do not know until you know.";
let findString = "know";
let result = str.indexOf(findString);

console.log(`first occurrence of ${findString} is position at ${result} `);

//?  You can find second or other letters / word in the string with second parameter of indexOf() method. Find the first occurrence of the letter "know" in a string, starting the search at position 12:

let str = "You do not know what you do not know until you know.";
let result = str.indexOf("know", 12); //start search from 12th position

console.log(result);

//! replace method

//? syntax = string.replace(searchValue, newValue)
//? The replace() method does not change the string it is called on. It returns a new string.
//? By default, the replace() method replaces only the first match and the replace() method is case sensitiv

let myString = "Mr Brown has a brown house and a brown car";
let myNewString = myString.replace("brown", "red");
console.log(myNewString); //! Mr Brown has a red house and a brown car

//? To replace case insensitive, use a regular expression with an /i flag (insensitive). /g flag (global) replaces all matches.

let myString = "Mr Brown has a brown house and a brown car";
let myNewString = myString.replace(/brown/gi, "green");
console.log(myNewString); //! Mr green has a green house and a green car

//! slice method

//? The slice() method extracts a section of a string and returns it as a new string
//? We can use a negative number to select from the end of the string.
//? If you dont use the second parameter, the method will slice out the rest of the string.

const str = "CLARUSWAY";

console.log(str.slice(0, 4)); // CLAR
console.log(str.slice(5, 8)); // SWA
console.log(str.slice(2)); // ARUSWAY
console.log(str.slice(3, -3)); // RUS
console.log(str.slice(-8, -4)); // LARU

//! substring method

//* syntax = str.substring(startIndex [, endIndex])
//? The substring() method returns the parts of a string between "start" and "end", index not including "end" itself.
//?  If the endIndex parameter is omitted, the substring() method returns the substring at the end of the string.
//? ➤ The substring() method does not alter the original string.
//? ➤ The substring() method returns an empty string if startIndex and endIndex are equal.
//? ➤ When startIndex is bigger than endIndex, substring() reverses the roles: startIndex becomes endIndex and vice versa.
//? ➤If either startIndex or endIndex is less than zero or greater than the string.length, the substring() considers it as zero (0) or string.length respectively.

let str = "Welcome to Clarusway.";

console.log(str.substring(5, 10)); // me to
console.log(str.substring(10, 5)); // me to
console.log(str.substring(11)); // Clarusway.
console.log(str.substring(10, 100)); // Clarusway.

//! split method

//* syntax = split([separator, [limit]]);

let str = "Hello John, welcome to Clarusway.";

let arr = str.split(" ");
console.log(arr); // ['Hello', 'John,', 'welcome', 'to', 'Clarusway.']

arr = str.split(" ", 2);
console.log(arr); //['Hello', 'John,']

arr = str.split(","); // , is the seperator
console.log(arr); // ['Hello John', ' welcome to Clarusway.']

arr = str.split(""); // empty string as a  seperator.
console.log(arr); // ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'o', 'h', 'n', ',', ' ', 'w', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'C', 'l', 'a', 'r', 'u', 's', 'w', 'a', 'y', '.']

arr = str.split(); // without a  seperator.
console.log(arr); //['Hello John, welcome to Clarusway.']

//! toLowerCase() Method

let s = "WELCOME TO CLARUSWAY";

console.log(s.toLowerCase());

//! toLocaleLowerCase() method

let str = "PİJAMALI"; // This is a Turkish word (meaning : having pyjamas) mappings in Unicode.

console.log(str.toLowerCase()); // pi̇jamali  ❌This is not the correct conversion.
console.log(str.toLocaleLowerCase("tr")); // ✔ pijamalı

//! toUpperCase() Method

let str = "welcome to Clarusway";

console.log(str.toUpperCase());

//! toLocaleUpperCase() method

let str = "istanbul";

console.log(str.toUpperCase()); // ISTANBUL  ❌This is not the correct conversion.
console.log(str.toLocaleUpperCase("tr")); // ✔ İSTANBUL

//! trim() Method

//? ➤ The trim() method eliminates whitespace from both sides of a string.
//? ➤The whitespace characters are space, tab, no-break space, etc.
//? ➤To remove whitespace characters from the beginning or from the end of a string only, you use the trimStart() or trimEnd() method.
//? ➤ The trim() method does not alter the original string.

let str = "                 Welcome to Clarusway                 ";

console.log(str.trim()); // Welcome to Clarusway
console.log(str.trimStart()); // Welcome to Clarusway                 //
console.log(str.trimEnd()); //                  Welcome to Clarusway
