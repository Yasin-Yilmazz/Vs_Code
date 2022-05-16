//! An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case
//? "Dermatoglyphics" --> true
//? "aba" --> false
//? "moOse" --> false (ignore letter case)

function isIsogram(str) {
  let isogram = str.toLowerCase().split("");
  let report = {};
  isogram.forEach(function (el) {
    report[el] = report[el] + 1 || 1;
  });
  //   console.log(report);
  for (let i in report) {
    if (report[i] > 1) return false;
  }
  return true;
}

console.log(isIsogram(""));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOs"));
console.log(isIsogram("isIsogram"));
