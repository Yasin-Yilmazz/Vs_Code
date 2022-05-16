//! Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

const isPrime = function (x) {
  for (let i = 2; i < x; i++) if (x % i === 0) return `${x} is not prime`;
  return `${x} is prime`;
};
console.log(isPrime(15));

function divisors(integer) {
  let divider = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) divider.push(i);
  }
  //   if (divider.length == 0) return `${integer} is prime`;

  //   return divider;
  return divider.length ? divider : integer + " is prime";
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));
