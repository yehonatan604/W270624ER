let userName = 'John Doe';
let email = "john@email.com"
let password = "1234";

export const changeName = (pass, newName) => {
    if (password === pass) {
        userName = newName;
        console.log('Name changed to', userName);
    } else {
        console.log('Invalid password');
    }
}

export const login = (checkEmail, checkPassword) => {
    if (checkEmail === email && checkPassword === password) {
        return true;
    } else {
        return false;
    }
}

