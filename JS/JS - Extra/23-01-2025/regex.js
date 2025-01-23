const username = document.getElementById('username');
const usernameHelper = document.getElementById('username-helper');
const email = document.getElementById('email');
const emailHelper = document.getElementById('email-helper');
const password = document.getElementById('password');
const passwordHelper = document.getElementById('password-helper');
const submitButton = document.getElementById('submit-btn');

const checkFormIsValid = () => {
    const isUsernameValid = !username.classList.contains('error');
    const isEmailValid = !email.classList.contains('error');
    const isPasswordValid = !password.classList.contains('error');

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};


username.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.trim().length < 3) {
        usernameHelper.innerText = 'Username must be at least 3 characters long';
        if (!username.classList.contains('error')) {
            username.classList.add('error');
        }
    } else {
        usernameHelper.innerText = '';
        username.classList.remove('error');
    }
    checkFormIsValid();
});

email.addEventListener('input', (e) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(value)) {
        emailHelper.innerText = 'Email must be a valid email address';
        if (!email.classList.contains('error')) {
            email.classList.add('error');
        }
    } else {
        emailHelper.innerText = '';
        email.classList.remove('error');
    }
    checkFormIsValid();
});

// minimum 8 characters length
// at least one uppercase letter
// at least one lowercase letter
// at least one digit
// at least one special character (e.g. !@#$%^&*)
// english characters only

password.addEventListener('input', (e) => {
    const value = e.target.value;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(value)) {
        passwordHelper.innerText = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, one special character and only english characters';
        if (!password.classList.contains('error')) {
            password.classList.add('error');
        }
    } else {
        passwordHelper.innerText = '';
        password.classList.remove('error');
    }
    checkFormIsValid();
});