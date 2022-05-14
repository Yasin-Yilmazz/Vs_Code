function countDown(number) {
  console.log(number);

  const newNumber = number - 1;
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
const num = 3;
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

function power(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else {
    return base * power(base, exp - 1);
  }
}
var result2 = power(2, 5);
console.log(result2);
