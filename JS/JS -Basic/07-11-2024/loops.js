// let myNumber = 0;

// while (myNumber < 100) {
//     myNumber++;
//     console.log(myNumber);
// }

// console.log("***************************");

// let myNumber2 = 5;

// while (myNumber2 <= 10) {
//     console.log(myNumber2);
//     myNumber2++;
// }

// console.log("**************q5*************");

// let myNumber3 = 2;

// while (myNumber3 <= 20) {
//     console.log(myNumber3);
//     myNumber3 += 2;
// }

// console.log("**************for-loops*************");

// for loops syntax:
// for (decleratiom; condition; increment/decrement) {...}

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }


// const start = +prompt("Please enter start number:");
// const end = +prompt("Please enter end number:");

// for (let i = start; i <= end; i++) {
//     console.log(i);
// }


console.log("**************q9*************");

const start = +prompt("Please enter start number:");
const end = +prompt("Please enter end number:");

if (start > end) {
    for (let i = start; i >= end; i--) {
        console.log(i);
    }
} else {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

console.log("**************q11*************");

const numberOfWords = +prompt("Please enter number of words:");
let sentence = "";

for (let i = 1; i <= numberOfWords; i++) {
    const word = prompt("Please enter word number " + i);
    sentence += word + " ";
}

console.log(sentence);

console.log("**************multiply*************");

let board = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        board += i * j + "\t";
    }
    board += "\n";
}

console.log(board);

// console.log("**************multiply board*************");

// let board = ""
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         board += i * j + "\t";
//     }
//     board += "\n";
// }

// console.log(board);