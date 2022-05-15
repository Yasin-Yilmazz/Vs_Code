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

// *************************************************************************
//! reverse() method
// *************************************************************************

// ➤ The reverse() method reverses the array and mutates the array in-place.
const cwPaths = [
  "Full-Stack",
  "AWS-Devops",
  "Data Science",
  "Cyber Security",
  "Salesforce",
];
console.log("Original Array: " + cwPaths);
// reversing array order
reversed_arr = cwPaths.reverse();
// reverse() modifies the original array
console.log("Array after reverse(): " + cwPaths);
// reverse() also returns the reversed array
console.log("Return Value of reverse(): " + reversed_arr);

// *************************************************************************
//! sort() method
// *************************************************************************

//➤ The sort() method sorts elements of an array in-place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array. It mutates the array.
// ➤ By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.

const numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);
// [ 0, 1, 10, 2, 20, 3, 30 ]

const numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);
// [ 0,  1,  2, 3, 10, 20, 30 ]

// *************************************************************************
//! splice() Method
// *************************************************************************

//? Delete elements using splice()
// ➤ The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in-place. To access part of an array without modifying it, see slice().
// ➤ The splice() method returns,
// • An array containing the deleted elements.
// • If only one element is removed, an array of one element is returned.
// • If no elements are removed, an empty array is returned.
let scores = [15, 21, 18, 42, 17];
let deletedScores = scores.splice(0, 3);
console.log(scores); // [42, 17]
console.log(deletedScores); // [15, 21, 18]

//? Insert elements using splice()
// ➤ The first parameter (2) determines the position of the first element to insert .
// ➤ The second parameter (0) determines the number of elements to delete. Nothing will be deleted in this example.
// ➤ The remaining parameters ('purple', 'orange') determines the new elements to be added.
// ➤ The splice() returns deleted items in an array, if nothing is deleted, then an empty array [] is returned. The original array is mutated and having the updated array items.
let colors = ["red", "green", "blue"];
let deletedColors = colors.splice(2, 0, "purple", "orange");
console.log(colors); // ['red', 'green', 'purple', 'orange', 'blue']
console.log(deletedColors); // [] nothing deleted

//? Update elements using splice()
// ➤ The first parameter (3) determines the position of the first element to insert .
// ➤ The second parameter (1) determines the number of elements to delete. 'orange' will be deleted in this example.
// ➤ The remaining parameter ('pink') determines the new elements to be added.
// ➤ The splice() returns deleted items in an array, In this example it returns ['orange'] . The original array is mutated and having the updated array items.
let colors = ["red", "green", "purple", "orange", "blue"];
let deletedColors = colors.splice(3, 1, "pink");
console.log(colors); // ['red', 'green', 'purple', 'pink', 'blue']
console.log(deletedColors); // ['orange'] is deleted

// *************************************************************************
//! slice() Method
// *************************************************************************

// ➤ The slice() method slices a piece of an array into a new array.
// ➤ The original array will not be modified.
// ➤ The first parameter determines the starting position of the new array. Slice() starts at 0 if the start parameter is unknown.
// ➤The second parameter determines the ending (not included end) position of the new array.If the stop parameter isn't specified, the slice() method will use the array's length as the stop parameter.
// ➤ Both the start and stop parameters can be left blank. In this case, the original array is cloned.
//? slice(start, stop);

const colors = ["Red", "Yellow", "Green", "Blue"];
const slicedColors = colors.slice(1, 3);

const newColors = colors.slice();

console.log(colors);
console.log(slicedColors);
console.log(newColors);
