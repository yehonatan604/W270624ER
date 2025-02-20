type TPerson = {
  name: string;
  age: number;
  greet: () => void;
};
const israel: TPerson = {
  name: "israel",
  age: 30,
  greet: () => {
    console.log(`Hello`);
  }
}

israel.greet();

interface IPerson {
  name: string;
  age: number;
  greet: () => void;
}

class Person implements IPerson {
  // name: string; - not needed because of the constructor
  // age: number; - not needed because of the constructor

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const israel2 = new Person("israel", 27);
const gilad = new Person("gilad", 22);

israel2.greet();
gilad.greet();


