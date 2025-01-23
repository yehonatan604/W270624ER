console.log("\n*************** Array Destructuring ***************\n");
// array destructuring
const arr = [1, 2, 3, 4, 5];

// this is the old way
const num1 = arr[0];
const num2 = arr[1];
const result = (num1 + num2) * 4;

console.log(result); // 12
console.log("\n******************************\n");

// this is the new way - destructuring

const [first, second, ...rest] = arr;
console.log((first + second) * 4);
console.log(first);
console.log(second);
console.log(rest);

console.log("\n**************** Object Destructuring **************\n");

const person = {
    fname: "John",
    age: 25,
    country: "USA",
    job: "Developer",
};

const { country, fname, ...restOfPerson } = person;
console.log(fname);
console.log(country);
console.log(restOfPerson);

console.log("\n**************** Exercise Destructuring **************\n");

const people = [
    { name: "John", age: 25, country: "USA" },
    { name: "Jane", age: 30, country: "UK" },
    { name: "Bob", age: 35, country: "Canada" },
];

for (const { name, country } of people) {
    console.log(`${name} lives in ${country}`);
};

console.log("\n**************** Nested Destructuring **************\n");
const [john] = people;
//const nameOfJohn = john.name;

let { name: nameOfJohn } = john;
nameOfJohn = "Peter";
console.log(nameOfJohn);
console.log(people);

console.log("\n**************** Default Parameters **************\n");

const add = (num1, num2 = 50) => {
    console.log(num1 + num2);
}

add(5);