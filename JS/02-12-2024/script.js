
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

    changeYear: (year) => {
        this.year = year;
    },

    changeModel: (model) => {
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
car.changeYear(2024);

console.log(car);

console.log("********************** Object - this ***************************");

