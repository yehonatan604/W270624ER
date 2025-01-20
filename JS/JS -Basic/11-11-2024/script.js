const fruites = ["Lemon", "Apple", "Banana", "Mango"];
console.log(fruites);

fruites[0] = "Orange";

console.log(fruites);
console.log(fruites.length); // length is the property of array which returns the number of elements in the array
console.log(typeof fruites);

const z = fruites.push("Grapes"); // push() method is used to add an element at the end of the array
console.log("length:", z);
console.log(fruites);

fruites[5] = "Pineapple";
console.log(fruites);

console.log(fruites[fruites.length - 1]);
console.log(fruites[0]);

//fruites.push(prompt("Enter a fruit name: ")); // 

console.log("************************pop*************************");

console.log(fruites);

const poped = fruites.pop();
console.log("poped: ", poped);

console.log(fruites);

console.log("*********************unshift****************************");
fruites.unshift("Kiwi");

console.log(fruites);

console.log("***********************shift**************************");
const shifed = fruites.shift();
console.log("shifed: ", shifed);
console.log(fruites);

console.log("***********************splice**************************");

let colors = ['Blue', 'Yellow', 'Red', 'Green', 'Purple', 'Orange'];
//colors.splice(2); // remove all elements from index 2 to end
colors.splice(2, 1); // remove 2 elements from index 2 and add 'Black' and 'White'
console.log(colors);

console.log("***********************slice**************************");
const colors2 = ['Blue', 'Yellow', 'Red', 'Green', 'Purple', 'Orange'];
console.log(colors2);

const colors3 = colors2.slice(2, 5);
console.log(colors2);
console.log(colors3);


console.log("***********************loop**************************");
const colors24 = ['Blue', 'Yellow', 'Red', 'Green', 'Purple', 'Orange'];

for (let i = 0; i < colors24.length; i++) {
    console.log("this is color: " + colors24[i]);
}





