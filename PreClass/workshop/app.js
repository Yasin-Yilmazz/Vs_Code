// Write a function that takes an array of characters and reverses the words order.
// Please note that, single word should not be reversed!

let inp1 = "my code of duty";
const arrayInp = inp1.split(" ");

let result = [];
for (let i = arrayInp.length - 1; i >= 0; i--) {
  result.push(arrayInp[i]);
}
const lastResult = result.join(" ");
console.log(lastResult);
