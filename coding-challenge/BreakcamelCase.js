// Complete the solution so that the function will break up camel casing, using a space between words.

//? "camelCasing"  =>  "camel Casing"
//? "identifier"   =>  "identifier"
//? ""             =>  ""

// complete the function
function solution(string) {
  var newString = "";
  for (let i of string) {
    if (i.toUpperCase() === i) {
      newString += " ";
      newString += i;
    } else {
      newString += i;
    }
  }
  console.log(newString);
}

solution("camelCasingTest");
