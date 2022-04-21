// this code show the app is runnig
// console.log("***app.js***")

// let ad = prompt("Enter yoru name")

// console.log("adiniz: " + ad + " dir");
// console.log(`adiniz ${ad} dir`) // ters tırnak koyarak bu şekilde


var myNumber1 = 5;


var myNumber2 = 8;
console.log(myNumber2);

let var1 = 55;
console.log(var1);

// var1 = 99;
// console.log(var1); // tekrar atama yaparken hata veriyor
{
    let localVar1 = 'Local variable';
    console.log(localVar1);
}
// console.log(localVar1); // let'le tanımladığımız için parantez dışında okuyamıyor


// const konusu

const student = {
    firstname: 'Yasin',
    number : 'F1375'
}
console.log(student);

const otherStudent = student;
console.log(otherStudent);
otherStudent.firstname = 'Yılmaz'
console.log(student);