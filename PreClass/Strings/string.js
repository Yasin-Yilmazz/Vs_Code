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
