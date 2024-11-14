console.log("***********************for loop on array**************************\n\n");

const fruites = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach', 'Cherry'];

// 0.frurit is: Apple

for (let i = 0; i < fruites.length; i++) {
    console.log((i + 1) + ".fruit is: " + fruites[i]);
}

console.log("\n\n***********************for-of loop on array**************************\n\n");

const cars = ['bmw', 'audi', 'mercedes', 'toyota', 'honda', 'suzuki'];

// car is: Bmw
for (let car of cars) {
    //const i = cars.indexOf(car);
    console.log("car is: " + car);
}

console.log("\n\n***********************for-in loop on object**************************\n\n");

// car is: Bmw
for (let i in cars) {
    // let number = i;

    // if (number !== cars.length - 1) {
    //     number++;
    // }

    console.log(i + ".car is: " + cars[i]);
}

