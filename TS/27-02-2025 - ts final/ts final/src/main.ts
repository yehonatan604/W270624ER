// this cannot be interface, it has to be type because this type has no properties
type TOperator = "+" | "-" | "*" | "/"; // Union type that only accepts the values +, -, *, /

const operators: TOperator[] = ["+", "-", "*", "/"];
const doMathDefault = (
  number1: number, number2: number, operator: TOperator = operators[Math.floor(Math.random() * operators.length)]
) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      throw new Error("Invalid operator");
  }
}

const doMathOptional = (number1: number, number2: number, operator?: TOperator) => {
  switch (operator) {
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    case "+":
    default:
      return number1 + number2;
  }
}

const calc1 = doMathDefault(1, 2);
const calc2 = doMathDefault(1, 2);
const calc3 = doMathDefault(1, 2, "+");
const calc4 = doMathDefault(1, 2);
//const calc5 = doMathDefault(1, 2, "p"); // Error: Invalid operator

console.log(calc1); // random
console.log(calc2); // random
console.log(calc3); // 3
console.log(calc4); // random

console.log("\n**********************************************************************************\n");

class ListNotGeneric {
  items: any[] = [];

  add(item: any) {
    this.items.push(item);
  }

  constructor(items: any[]) {
    this.items = items;
  }
}

const numbers = new ListNotGeneric([1, 2, 3]);
numbers.add(4);
numbers.add("uytyut");

console.log(numbers);

const numbers2: Array<number> = [1, 2, 3];
console.log(numbers2);
// numbers2.push("werewr"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

