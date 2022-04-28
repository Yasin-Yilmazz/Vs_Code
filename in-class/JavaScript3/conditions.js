// ! if statement example 


const n1 = 23;
const result = 
n1 >= 0 ? (n1 == 0 ? 'zero' : `${n1} is positive`) :`${n1} is negative`;

console.log(result);

// evaluate if a human can drive a car or not
let canDrive = false;
const hasDriversLicense = false;
const hasGoodVision = false;

const isHandicapped = false;
const usingRegularCar = false;
const usingDisabledCar = true;

let a = 3;
switch (a)  {
    case '3':
        a = 33;
        break
    case 2:
        a = 'two';
        break
    case 3 :
        a = 'three';
        break
    default :
        a = 'not found';
        break
}
console.log(`The value is ${a}`);


let year = 2020+;
const month = 2;
let dayCount;
switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30 ;
        break
    case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) dayCount = 29 ;
        else dayCount = 28;
        break;
    default:
        console.log('Please enter number as month! ')
        
}
console.log(`This month is ${dayCount} days`);