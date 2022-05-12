var a = 50
if (a>6) {
    console.log("Hello")
}
//ternary statements
let grade = 36;
let result = (grade>= 50) ? 'passed' : 'failed';
console.log(`You ${result} the exam.`)

let age = 13;
let legal = (age>18) ? 'legal' : 'Not legal';
console.log(`You are ${legal}`);

let a = -3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);

const first = 0; // play with values
const second = 20;
const third = 30;
let result = first || second || third;
console.log(result);// ilk true olanı aldı yani 20 yi

let day = 5;
let dayName;
switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName); // Tuesday

let a = 3;
switch (a) {
  case "3":
    a = 33;
    break;
  case 2:
    a = 'two';
    break;
  case 3:
    a = 'three';
    break;
  default:
    a = 'not found';
    break;
}
console.log(`The value is ${a}`);

let sum = 0;
for (i = 0; i < 6; i++) {
    console.log(i);
    sum += i;
}
console.log(`The total is ${sum}`);

let count = 1;
while (count < 10) {
    console.log(count);
    count += 2;
}

var sum = 0;
for (var i = 3; i < 7; i++) {
sum += i;
if (i ===3 || sum > 10) {
continue;
}
console.log(i);
}

var i = 0;
var sum=0;
while (i < 3) {
var sum = sum + i; i++;
}
console.log ("The total is: " + sum);

