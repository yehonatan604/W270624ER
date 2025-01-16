import { drawTableRows } from "./domService.js";

export class User {
    static usersList = [];

    firstName;
    lastName;
    email;
    password;
    isLogedIn = false;

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

        User.usersList.push(this);
        drawTableRows(User.usersList);
    }
}