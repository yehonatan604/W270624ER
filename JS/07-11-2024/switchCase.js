//const day = +prompt("Please enter the day (number):");

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3: case 4:
//         console.log("Tuesday or Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6: case 7:
//         console.log("Friday or Saturday");
//         break;
//     default:
//         console.log("Please enter a valid day number");
//         break;
// }

const uName = prompt("Please enter your name:");
const guests = +prompt("Hello " + uName + " Please enter the number of guests:");
let price = 0;
let totalPrice = 0;

switch (guests) {
    case 1: case 2:
        price = 200;
        console.log("Room for 2" + " Total price is " + totalPrice + "$");
        break;
    case 3: case 4: case 5:
        price = 100;
        console.log("Room for 5 " + " Total price is " + guests * price + "$");
        break;
    case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
        price = 50;
        console.log("Room for 15 " + " Total price is " + guests * price + "$");
        break;
}

totalPrice = guests * price;

const nights = +prompt("Please enter the number of nights:");
totalPrice *= nights;
console.log("You will stay for " + nights + " nights and the total price is " + totalPrice + "$");

const breakfast = prompt("Do you want to have breakfast for " + nights + " nights? (yes/no)");

switch (breakfast) {
    case "yes":
        totalPrice += nights * 30;
        console.log("You will have breakfast for " + nights + " nights and the total price is " + totalPrice + "$");
        break;
    case "no":
        console.log("You don't want breakfast and the total price is " + totalPrice + "$");
        break;
    default:
        console.log("we take that as a no and the total price is " + totalPrice + "$");
        break;
}

