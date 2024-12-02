
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
        car.year = year;
    },

    changeModel: function (model) {
        this.model = model;
        console.log(this);
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

console.log(Object.keys(car));
console.log(Object.values(car));

for (let props of Object.values(car)) {
    console.log(props);
}

console.log("********************** Object - chaining methods ***************************");

const charcter = {
    name: "John",
    level: 1,
    xp: 0,

    raiseXp: function (points) {
        this.xp += points;

        if (this.xp === 10) {
            this.level++;
            this.xp = 0;
            // this.print('level');
        }
        return this;
    },

    print: function (mode) {
        if (mode === 'all') {
            console.log(this);
        } else if (mode === 'level') {
            console.log("Level Up:", this.level);
        }
        return this;
    }
};

charcter.raiseXp(10).print('level').print('all');
//charcter.print('all');

// chaining array methods
const arr = [1, 2, 3, 4, 5];
const newarr = arr.filter((item) => item > 2).map((item) => item * 2);
