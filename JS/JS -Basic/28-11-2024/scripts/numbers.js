const num1 = "9.2";
const num2 = "3.2";

console.log(parseInt(num1) + Number(num2)); // 12.2
console.log(parseFloat(num1) + Number(num2)); // 12.4
console.log(num1 + num2);

console.log("*************************** Math Object ***************************");
console.log(Math);

console.log(Math.floor(2.9)); // 2
console.log(Math.ceil(2.1)); // 3

console.log(Math.round(2.9)); // 3
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.5)); // 3


console.log("*************************** Random ***************************");

console.log(Math.round(Math.random() * 100));

// const total = rndNum1 * rndNum2;

// console.log(`${rndNum1} * ${rndNum2} = ${total}`);

console.log("*************************** Random ***************************");

const rndNum1 = Math.ceil(Math.random() * 10);
const rndNum2 = Math.ceil(Math.random() * 10);
const operators = ["+", "-", "*", "/"];

const randomIndex = Math.floor(Math.random() * operators.length);

const operator = operators[randomIndex];

let result = 0;

if (operator === "+") {
    result = rndNum1 + rndNum2;
} else if (operator === "-") {
    result = rndNum1 - rndNum2;
} else if (operator === "*") {
    result = rndNum1 * rndNum2;
} else if (operator === "/") {
    result = rndNum1 / rndNum2;
}

console.log(`${rndNum1} ${operator} ${rndNum2} = ${result}`);

console.log(+2.92342342234.toFixed(2) + 1); // 2.92

const onClick = () => {
    const input = document.getElementById("input");
    console.log(input.value);
}



