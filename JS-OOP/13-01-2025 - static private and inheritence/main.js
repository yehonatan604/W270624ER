
class Person {
    static count = 0;
    static people = [];
    firstName;
    lastName;
    age;
    email;
    #id;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        Person.count++;
        this.#id = Person.count;
        Person.people.push(this);
    }

    changeName(newFirstName, newLastName) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }

    static getPersonCount() {
        console.log(`There are ${Person.count} people`);
    }

    static getPeople() {
        console.log(...Person.people);
    }
}

const moshe = new Person('Moshe', 'Cohen', 30, 'moshe@email.com');
const bob = new Person('Bob', 'Smith', 40, 'bob@email.com');
const alice = new Person('Alice', 'Johnson', 26, 'alice@email.com');
const alice2 = new Person('Alice', 'Johnson', 30, 'alice@email.com');

Person.getPeople();
// console.log(alice2);
// alice2.changeName('Rut', 'Levi');
// console.log(alice2);

// console.log("*****************************************");

// console.log(moshe);
// console.log(bob);
// console.log(alice);

// Person.getPersonCount();
// Person.getPeople();

// console.log("*****************************************");

// // bob.#age = 50;
// // bob.age = 50;

// const moe = {
//     firstName: 'Moe',
//     lastName: 'Doe',
//     email: 'moe@email.com'
// }

// console.log(moe);
// moe.age = 25;
// console.log(moe);

class User extends Person {
    password;

    constructor(firstName, lastName, age, email, password) {
        super(firstName, lastName, age, email);
        this.password = password;
    }
}

const user = new User('User', 'Name', 30, 'user@email.com', "1234");
console.log(user);