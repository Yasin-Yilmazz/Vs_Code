// console.log(a);
// var a = 3;

// console.log(b);
// let b = 1;
// console.log(b)

// let c = '2';
// let d = 2;
// console.log(typeof c);
// console.log(typeof d);

// let e = prompt('Bir şey yazınız: ');
// console.log(typeof e);

// let k = prompt('Bir şey yazınız: ');
// console.log(typeof k, k);
// console.log(isNaN(k));

// console.log(015+025);

// let userName = 'Yasin';
// let p = `Merhaba ${userName}`
// console.log(p);

// var a = [];
// console.log(Boolean(a)); //true

const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
  }
  
  console.log(myCar);
  
  myCar.color = 'Red';
  
  myCar.sunRoof = true;
  
  
  myCar.age = function(current) {
    console.log(current - this.year)
  }
  
  console.log(myCar);

  myCar.age(2022); // 57

  delete myCar.sunRoof; // sunRoof deleted 
  console.log(myCar)

