const user = 'yoni';
const password = '1234';

const user1 = prompt("Please enter your username:");
const password1 = prompt("Please enter your password:");

user1 === user && password1 === password && console.log("Welcome " + user1);
user1 !== user && password1 !== password && console.log("Wrong username and password");

const number1 = +prompt("Please enter a number1:");
const number2 = +prompt("Please enter a number2:");

number1 > number2 && console.log(number1 + " is bigger than " + number2);
number1 < number2 && console.log(number1 + " is smaller than " + number2);
number1 === number2 && console.log(number1 + " is equal to " + number2);

///////////////////////////////////////// conditions /////////////////////////////////////

function compareNumbers(adi1, adi2) {
    if (adi1 > adi2) {
        console.log(adi1 + " is bigger than " + adi2);
    } else if (adi1 < adi2) {
        console.log(adi1 + " is smaller than " + adi2);
    } else if (isNaN(adi1) && isNaN(adi2)) {
        console.log("Please enter a number");
    } else {
        console.log(adi1 + " is equal to " + adi2);
    }
}

// if (adi1 > adi2) {
//     console.log(adi1 + " is bigger than " + adi2);
// } else if (adi1 < adi2) {
//     console.log(adi1 + " is smaller than " + adi2);
// } else if (isNaN(adi1) && isNaN(adi2)) {
//     console.log("Please enter a number");
// } else {
//     console.log(adi1 + " is equal to " + adi2);
// }

const number3 = +prompt("Please enter a number3:");
const number4 = +prompt("Please enter a number4:");

compareNumbers(number3, number4);
compareNumbers(1, 3);

///////////////////////////////////////////////////////////////////////////////////////


