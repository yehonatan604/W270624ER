// this cannot be interface, it has to be type because this type has no properties
type TOperator = "+" | "-" | "*" | "/"; // Union type that only accepts the values +, -, *, /

const doMath = (number1: number, number2: number, operator: TOperator = "+") => {
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

const calc1 = doMath(1, 2);
const calc2 = doMath(1, 2, "-");
const calc3 = doMath(1, 2, "*");
const calc4 = doMath(1, 2, "/");

//const calc5 = doMath(1, 2, "p"); // Error: Invalid operator

console.log(calc1); // 3
console.log(calc2); // -1
console.log(calc3); // 2
console.log(calc4); // 0.5
