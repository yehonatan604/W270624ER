import { changeCar, printCar } from "./car.js";
import { tryLogin, tryChangeName } from "./userHandler.js";

console.log("******************* before change *********************");
printCar();
changeCar('Toyota', 'Corolla', 2020);

console.log("******************* after change *********************");
printCar();


console.log("******************* user exercise *********************");
tryLogin();
tryChangeName();