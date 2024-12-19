import { changeCar, printCar } from "./person.js";

console.log("******************* before change *********************");
printCar();
changeCar('Toyota', 'Corolla', 2020);

console.log("******************* after change *********************");
printCar();