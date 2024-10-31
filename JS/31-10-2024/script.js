var myNumber1 = "5.2";
var myNumber2 = "20.2";

// Casting - המרה
// method 1
console.log(+myNumber1 + +myNumber2);

// method 2
console.log(parseInt(myNumber1) + parseInt(myNumber2));

// method 3
console.log(parseFloat(myNumber1) + parseFloat(myNumber2));

// method 4
console.log(Number(myNumber1) + Number(myNumber2));

// ****************** prompt *******************

// var userNumber1 = prompt("Please enter a number1:");
// var userNumber2 = prompt("Please enter a number2:");
// console.log(+userNumber1 + +userNumber2);

// ****************** let *******************
console.log("****************** let *******************");


var num1 = 5;
var num1 = 10;

console.log(num1);

let num2 = 5;
num2 = 10;

console.log(num2);

// ****************** const *******************
console.log("****************** const *******************");

const num3 = 5;
//num3 = 10;


const myBool = true;

// ****************** functions *******************
console.log("****************** functions *******************");


// function declaration
function shahar() {
    // function scope
    const userNumber1 = +prompt("Please enter a number1:");
    const userNumber2 = +prompt("Please enter a number2:");
    const sum1 = userNumber1 + userNumber2;
    console.log(userNumber1 + " + " + userNumber2 + " = " + sum1);
}

console.log(shahar);
console.log(typeof shahar);

// shahar();
// shahar();
// shahar();

// console.log(userNumber1); - error - out of scope

// ****************** parameters *******************
console.log("****************** parameters *******************");

function addNumbers(x, y) {
    const sum2 = x + y;
    console.log(x + " + " + y + " = " + sum2);
}

addNumbers();
addNumbers(100, 200);
addNumbers(50, 30);
addNumbers(30, 24);

// ****************** return *******************

console.log("****************** return *******************");

function calcSquareArea(length, width) {
    const area = length * width;
    return area;
}

calcSquareArea(5, 5);

const square1 = calcSquareArea(5, 5);
console.log(square1);


const square2 = calcSquareArea(7, 4);
console.log(square2 * square1);
console.log(square2 + square1);
console.log(square2 - square1);
console.log(square2 * square1);
