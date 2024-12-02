
const car = {
    manafacturer: 'Toyota',
    year: 2015,
    model: 'Corolla',
    color: 'red',
    "number-of-wheels": 4,

    drive: () => {
        console.log("Car is moving");
    },

    stop: () => {
        console.log("Car stopped");
    },

    changeYear: function (year) {
        this.year = year;
    },

    changeModel: function (model) {
        console.log(this);
        this.model = model;
    }
};

console.log(typeof car);
console.log(car);

console.log("model:", car.model);
console.log("model:", car['model']);

console.log("number-of-wheels:", car["number-of-wheels"]);

console.log("********************** Object Methods ***************************");

car.drive();
car.stop();

console.log("********************** Object - this ***************************");

// when we use arrow function,
// this will refer to the global object

car.changeYear(2024);
car.changeModel("Camry");

console.log(car);

console.log("********************** Object - loops ***************************");

// for (let key of car) {
//     console.log(key); // this will throw an error
// }

for (let key in car) {
    console.log(key); // this will print all the keys
}

for (let key in car) {
    console.log(car[key]); // this will print all the values
}

console.log("********************** Object - for-of ***************************");

for (let props of Object.values(car)) {
    console.log(props);
}

console.log(Object.keys(car));
console.log(Object.values(car));

