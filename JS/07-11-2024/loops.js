let myNumber = 0;

while (myNumber < 100) {
    myNumber++;
    console.log(myNumber);
}

console.log("***************************");

let myNumber2 = 5;

while (myNumber2 <= 10) {
    console.log(myNumber2);
    myNumber2++;
}

console.log("**************q5*************");

let myNumber3 = 2;

while (myNumber3 <= 20) {
    console.log(myNumber3);
    myNumber3 += 2;
}

console.log("**************for-loops*************");

// for loops syntax:
// for (decleratiom; condition; increment/decrement) {...}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


const bla = prompt("Please enter a number:");

for (let i = bla; i <= 100; i++) {
    console.log(i);
}
