const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr1; // deep copy, arr2 will point to the same memory location as arr1
arr2[0] = 100; // arr1[0] will also change

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log("******************** Spread Operator *************************");

arr2 = [...arr1]; // shallow copy, Spread Operator will create a new array and copy the values of arr1
arr2[0] = 200; // arr1[0] will not change

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(...arr2); // 200 2 3 4 5 6 7 8 9 10

console.log("******************** Rest Parameter *************************");

const printSum = (operator, ...items) => {
    let sum = 0;
    for (const arg of items) {
        if (operator === "+") {
            sum += arg;
        } else if (operator === "-") {
            sum -= arg;
        }
    }
    console.log("Sum", sum);
}
printSum("+", 100, 469, 250, 234);

console.log("******************** spread object *************************");
const person1 = {
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com"
}

let person2 = { ...person1 };
person2.firstName = "Jane";

console.log("person1", person1);
console.log("person2", person2);

const arrays = [
    [1, 2, 3],
    [4, 5, 6],
];

console.log("******************** value vs reference *************************");

let word1 = "Hello";
let word2 = word1;

console.log(typeof word1); // string
console.log(typeof word2); // string

word2 = "World";

console.log(word1, word2);

console.log("******************** try-catch *************************");

const num = 0;

let msg = "";

try {
    num = 5;
    console.log("num", num);
    msg = "success!!!";
} catch (error) {
    console.log("there was an error", error);
    msg = "error!!!";
} finally {
    console.log(msg);
    console.log(num + 1000);
    msg = "";
}

console.log("******************** Throw *************************");

const divide = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    } catch (err) {
        return err.message;
    }
}

console.log(divide(10, 0)); // Uncaught Error: Cannot divide by zero
console.log(divide(10, 2)); // 5
