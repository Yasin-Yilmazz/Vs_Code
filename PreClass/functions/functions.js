// function sayHi(name) {
//   return `Hello ${name}`;
// }

// console.log(sayHi());

const sayHi = function greet(name) {
  return `Hello ${name}`;
};

console.log(sayHi("yasin"));

function sameLevel2() {
  let a = 10;
  b = 20;
  console.log({ a, b });
}
function sameLevel1() {
  let a = 30;
  let b = 8;
  console.log({ a, b });
  sameLevel2();
}
let b = 5;
sameLevel1();
console.log({ b });
console.log(sameLevel1());

var num = [7, 12, 143, 54, 37];
num.sort(function (a, b) {
  return b - a;
});
console.log(num);

function num() {
  return 5 + 7;
}
console.log(typeof num);
