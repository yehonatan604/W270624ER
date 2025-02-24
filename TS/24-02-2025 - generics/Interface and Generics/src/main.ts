type TAnimal = { // "="" is used in type but ":" is used in interface
  name: string;
  age: number;
  weight: number;
}

const tiger: TAnimal = {
  name: 'Tiger',
  age: 0.5,
  weight: 0.6
}

console.log(tiger);

interface IAnimal {
  name: string;
  age: number;
  weight: number;
};

const bela: IAnimal = {
  name: 'Bela',
  age: 10,
  weight: 12
};

interface ICat {
  eyesColor: string;
  sound: string
}

console.log(bela);

class Animal implements IAnimal {
  name: string;
  age: number;
  weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}

const animal = new Animal("dag", 1, 0.1);
console.log(animal);

console.log("*****************************************************************");
// class that implements 2 interfaces
class Cat implements IAnimal, ICat {
  name: string;
  age: number;
  weight: number;
  eyesColor: string;
  sound: string;

  constructor(name: string, age: number, weight: number, eyesColor: string, sound: string) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.eyesColor = eyesColor;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

const cat = new Cat("Tom", 2, 0.5, "green", "meow");
console.log(cat);

document.body.innerHTML = `<div>${cat.name}</div>`;

console.log("\n*******************************Generics**********************************\n");

const arr: string[] = ["a", "b", "c"];
const arr2: Array<string> = ["a", "b", "c"];

interface IList<T> {
  items: T[];
  addItem: (item: T) => number;
}

class List<T> implements IList<T> {
  items: T[] = [];

  addItem = (item: T) => {
    this.items.push(item);
    return this.items.length - 1;
  }

  show = () => {
    console.log(...this.items);
  }

  constructor(items: T[]) {
    this.items = items;
  }
}

const numbers = new List<number>([1, 2, 3]);
numbers.addItem(876.5);
numbers.show();

const strings = new List<string | number>(["a", "b", "c", 6, 8, 9]);
strings.addItem("z");
strings.addItem(10);
strings.show();

enum Direction {
  Up = "UP",
  Down = "DOWN",
}

console.log(Direction.Up);
// Direction.Up = "ytrytr";