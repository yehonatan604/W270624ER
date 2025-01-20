// const user = 'yoni';
// const password = '1234';

// const user1 = prompt("Please enter your username:");
// const password1 = prompt("Please enter your password:");

// user1 === user && password1 === password && console.log("Welcome " + user1);
// user1 !== user && password1 !== password && console.log("Wrong username and password");

// const number1 = +prompt("Please enter a number1:");
// const number2 = +prompt("Please enter a number2:");

// number1 > number2 && console.log(number1 + " is bigger than " + number2);
// number1 < number2 && console.log(number1 + " is smaller than " + number2);
// number1 === number2 && console.log(number1 + " is equal to " + number2);

// ///////////////////////////////////////// conditions /////////////////////////////////////

// function compareNumbers(adi1, adi2) {
//     if (adi1 > adi2) {
//         console.log(adi1 + " is bigger than " + adi2);
//     } else if (adi1 < adi2) {
//         console.log(adi1 + " is smaller than " + adi2);
//     } else if (isNaN(adi1) && isNaN(adi2)) {
//         console.log("Please enter a number");
//     } else {
//         console.log(adi1 + " is equal to " + adi2);
//     }
// }

// // if (adi1 > adi2) {
// //     console.log(adi1 + " is bigger than " + adi2);
// // } else if (adi1 < adi2) {
// //     console.log(adi1 + " is smaller than " + adi2);
// // } else if (isNaN(adi1) && isNaN(adi2)) {
// //     console.log("Please enter a number");
// // } else {
// //     console.log(adi1 + " is equal to " + adi2);
// // }

// const number3 = +prompt("Please enter a number3:");
// const number4 = +prompt("Please enter a number4:");

// compareNumbers(number3, number4);
// compareNumbers(1, 3);

///////////////////////////////////////////////////////////////////////////////////////

const uName = prompt("Please enter your name:");
const days = +prompt("hello" + uName + "Please enter the number of days do you want to stay:");
const pricePerDay = 100;
const priceOfBreakfast = 30;
let total = days * pricePerDay;

let roomType;

console.log(uName + " you will stay for " + days + " days and the total price is " + total + "$");

const breakfast = prompt("Do you want to have breakfast for " + days + " days? (yes/no)");

if (breakfast === "yes") {
    //total = total + totalBreakfast;
    total += days * priceOfBreakfast;
} else if (breakfast === "no") {
    console.log("You don't want breakfast");
}

console.log(uName + " you will stay for " + days + " days and the total price is " + total + "$");


// const bool = confirm("Do you want to continue?");
// if (bool === true) {
//     console.log("Thank you for your reservation");
// } else {
//     console.log("You canceled your reservation");
// }


//roomType = prompt("Please choose your room type: 1. single room 2. double room 3. family room");