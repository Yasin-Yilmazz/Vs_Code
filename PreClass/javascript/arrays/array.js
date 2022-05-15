//! arrays are objects

// ➤ Arrays are also object type. The JavaScript typeof operator returns "object" for arrays.
// ➤ To check if a variable holds an array, use either Array.isArray() method, or instanceof operator:

const myArr = [1, 2, 3];
const myObj = { firstName: "John", lastName: "Doe", age: 24 };
console.log(typeof myArr); // object
console.log(Array.isArray(myArr)); // true
console.log(myArr instanceof Array); // true
console.log(typeof myObj); // object
console.log(Array.isArray(myObj)); // false
console.log(myObj instanceof Array); // false

//! Add, remove, and change in arrays

// *************************************************************************
//! Adding elements
// *************************************************************************

// ➤ Use the built-in method push() and unshift() to add elements to an array.
// ➤ The push() method adds one or more elements to the end of an array and returns the new length of the array. For example,

let dailyActivities = ["eat", "work", "sleep"];

//! add an element at the end
const newLength = dailyActivities.push("exercise");
console.log(dailyActivities); //  ['eat', 'work', 'sleep', 'exercise']
console.log(newLength); // 4

//  The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. For example,

let dailyActivities = ["eat", "work", "sleep"];

//! add an element at the start
const newLength = dailyActivities.unshift("get dressed");

console.log(dailyActivities); // ['get dressed', 'eat', 'work', 'sleep']
console.log(newLength); // 4

// *************************************************************************
//! Removing elements
// *************************************************************************

//! ➤ The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let dailyActivities1 = ["work", "eat", "sleep", "exercise"];
// remove the last element
const removedElement = dailyActivities1.pop();
//get removed element
console.log(removedElement); // 'exercise'
console.log(dailyActivities1); // ['work', 'eat', 'sleep']

//! ➤ The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let dailyActivities = ["work", "eat", "sleep"];
// remove the first element
const removedElement = dailyActivities.shift();
console.log(removedElement); // 'work'
console.log(dailyActivities); // ['eat', 'sleep']

//! ➤ To change an element of the array, use the index value of the cell you want to replace:
const myArray = ["h", "e", "l", "l", "o"];
// first element
myArray[0] = "H";
console.log(myArray[0]); // "H"
// second element
myArray[1] = "a";
console.log(myArray[1]); // "a"
console.log(myArray); // ['H', 'a', 'l', 'l', 'o']

// *************************************************************************
//! concat() method
// *************************************************************************

// ➤ The concat() method is used to combine two or more arrays.
// ➤ This method does not modify the current arrays but returns a new array that contains the elements of the joined arrays.
const languages1 = ["JavaScript", "Python", "Java"];
const languages2 = ["C", "C++"];

// concatenating two arrays
const new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
const new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]

// *************************************************************************
//! join() method
// *************************************************************************

// ➤ The join() method is used to combine all the elements in an array to create a string, and does not mutates the array.
// ➤ This method takes an element and outputs it inbetween the strings.
//? Array.prototype.join([separator]);
