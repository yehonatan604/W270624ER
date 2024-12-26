// this is a promise object that will either resolve or reject based on the random number generated
const myPromise = new Promise((resolve, reject) => {
    // Generate a random number between 0 and 100
    const randomNumber = Math.floor(Math.random() * 100);

    // Check if the number is even
    if (randomNumber % 2 === 0) {
        resolve(randomNumber); // If the number is even, resolve the promise
    } else {
        reject(randomNumber + " is not even"); // If the number is odd, reject the promise
    }
});

console.log(myPromise);

// Handle the promise

// The then() method is called when the promise is resolved
myPromise.then((value) => {
    console.log('Success, Promise resolved');
    console.log(value);
}).catch((value) => { // the catch() method is called when the promise is rejected
    console.log(value);
}).finally(() => { // the finally() method is called when the promise is settled
    console.log('Promise is settled');
});

// This will be printed before the promise is settled
console.log('End of script');

