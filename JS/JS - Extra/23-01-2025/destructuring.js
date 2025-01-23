console.log("\n******************************\n");
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
console.log(rest);
console.log(first);

console.log("\n******************************\n");