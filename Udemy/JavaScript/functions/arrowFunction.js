let welcomeES5 = function () {
  console.log("Hello");
};

welcomeES5();

let welcomeES6 = () => {
  console.log("hello");
};

welcomeES6();

// with parameter

let multiplyES5 = function (x, y) {
  return x * y;
};
console.log(multiplyES5(10, 5));

let multiplyES6 = (x, y) => x * y;
console.log(multiplyES6(10, 7));

// ES5
let splitES5 = function (text) {
  return text.split(" ");
};
console.log(splitES5("Udemyden preclass çalışıyorum"));

//ES6
let splitES6 = (text) => text.split(" ");
console.log(splitES6("Udemyden preclass çalışıyorum"));

// object letrals

// ES5
let getProductES5 = function (id, name) {
  return {
    id: id,
    name: name,
  };
};
console.log(getProductES5(1, "Yasin"));

//ES6
let getProductES6 = (id, name) => ({ id: id, name: name });
console.log(getProductES6(1, "Yasin"));

const phones = [
  { name: "Iphone 8", price: "4000" },
  { name: "Iphone 7", price: "3000" },
  { name: "Iphone 6", price: "2000" },
  { name: "Iphone 5", price: "1000" },
];
