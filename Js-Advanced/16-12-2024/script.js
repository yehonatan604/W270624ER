const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr1;
arr2[0] = 100; // arr1[0] will also change

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log("******************** Spread Operator *************************");

arr2 = [...arr1]; // Spread Operator will create a new array and copy the values of arr1
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
printSum("+", 100, 469, 250);

