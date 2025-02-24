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
  name: string = "";
  age: number = 0;
  weight: number = 0;
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
}

const cat = new Cat("Tom", 2, 0.5, "green", "meow");
console.log(cat);