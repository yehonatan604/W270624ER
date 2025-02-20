console.log('Hello, world!');

// js way of defining variables
// let x = 10;
// x = "hello";

// console.log(x);

// ts way of defining variables

//let/const variableName: type = value;
let y: number = 10;
console.log(y);

// any type
let z: any = "hello";
z = 100;

console.log(z);

// types
type Person = {
  name: string,
  age: number
}

const joe: Person = {
  name: "Joe",
  age: 20
}

const moe: Person = {
  name: "Moe",
  age: 30
}

console.log(joe, moe);

// arrays
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr2);


// union types
let id: string | number = 123;
id = "abc";

console.log(id);

// id = true // error

// casting
let a: unknown;

a = {
  name: "Joe",
  age: 20
}

console.log((a as Person).name);


// HomeWork
let hello: unknown = "hello";
let helloString = (hello as string).toUpperCase();
console.log(typeof helloString, helloString);

let myArr: unknown = [];
myArr = helloString.split("");
let myArr2 = myArr as string[];
console.log(typeof myArr2, myArr2);
