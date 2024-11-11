const fruites = ["Lemon", "Apple", "Banana", "Mango"];
console.log(fruites);

fruites[0] = "Orange";

console.log(fruites);
console.log(fruites.length); // length is the property of array which returns the number of elements in the array
console.log(typeof fruites);

fruites.push("Grapes"); // push() method is used to add an element at the end of the array
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
