import { changeName, login } from "./user.js";

const tryLogin = () => {
    const email = prompt('Enter email');
    const pass = prompt('Enter password');
    const loginOutcome = login(email, pass); // true or false

    if (loginOutcome === true) {
        console.log("Ofir Amar Welcome");
    } else {
        console.log("Invalid email or password, Try Again");
    }
}

const tryChangeName = () => {
    const pass = prompt('Enter password');
    const newName = prompt('Enter new name');
    changeName(pass, newName);
}

export { tryLogin, tryChangeName };
