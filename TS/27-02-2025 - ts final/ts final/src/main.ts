// this cannot be interface, it has to be type because this type has no properties
type TOperator = "+" | "-" | "*" | "/"; // Union type that only accepts the values +, -, *, /

const operators = ["+", "-", "*", "/"];
const doMathDefault = (number1: number, number2: number, operator: TOperator = operators[Math.floor(Math.random() * operators.length)] as TOperator) => {
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
const calc3 = doMathDefault(1, 2);
const calc4 = doMathDefault(1, 2);
//const calc5 = doMathDefault(1, 2, "p"); // Error: Invalid operator

console.log(calc1); // 3
console.log(calc2); // -1
console.log(calc3); // 2
console.log(calc4); // 0.5

