class Person {
  public name: string;
  public age: number;
  private readonly id: number;
  private static count: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

    Person.count++;
    this.id = Person.count;

    this.printInfo();
  }

  public printInfo() {
    const info: string = `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    console.log(info);
  }
}

new Person('Ortal', 28);
new Person('Snir', 32);

