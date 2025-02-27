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

console.log("\n**********************************Getter/Setter************************************************\n");

class Rectangle {
  private _width: number;
  private _height: number;
  private readonly _defaultWidth;
  private readonly _defaultHeight;
  //width: number; // we wont need this because we will use setter
  //height: number; // we wont need this because we will use setter
  //area: number; // we wont need this because we will use getter

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this._height = height;
    this._width = width;
    this._defaultHeight = height;
    this._defaultWidth = width;
    //this.area = width * height; // we wont need this because we will use getter
  }

  reset = () => {
    this.width = this._defaultWidth
    this.height = this._defaultHeight;
    //this.area = this._width * this._height; // we wont need this because we will use getter
  }

  get width() {
    return this._width;
  }
  set width(value: number) {
    if (value <= 0) {
      this._width = -value;
    } else {
      this._width = value;
    }
  }

  get height() {
    return this._height;
  }
  set height(value: number) {
    if (value <= 0) {
      this._height = -value;
    } else {
      this._height = value;
    }
  }

  get area() {
    return this.width * this.height;
  }

  get info() {
    return `Rectangle: width=${this.width}, height=${this.height}, area=${this.area}`;
  }
}









const rect = new Rectangle(10, 20);
console.log(rect.info);

rect.width = 30;
console.log(rect.info);

rect.reset();
console.log(rect.info);

rect.height = -80;
console.log(rect.info);

console.log(rect.height);
console.log(rect.width);
