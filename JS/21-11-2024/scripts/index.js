const apple = "apple";
const banana = "banana";
const orange = "orange";

const fruites = [apple, banana, orange];

fruites.length; // 3

console.log(fruites[0]); // first element of the array

console.log(fruites[fruites.length - 1]); // last element of the array

// fruit is *** apple
// fruit is *** orange
// fruit is *** banana

// for loop on the array
for (let i = 0; i < fruites.length; i++) {
    console.log("fruit is *** " + fruites[i]);
}

console.log("************");

// backward for loop on the array
for (let i = fruites.length - 1; i >= 0; i--) {
    console.log("fruit is *** " + fruites[i]);
}

console.log("************");

// reverse the array
const reversedFruites = fruites.reverse();

// for loop on the array after reversing using function
function printFruit() {
    for (let i = 0; i < reversedFruites.length; i++) {
        console.log("fruit is *** " + reversedFruites[i]);
    }

    const x = 50;
    return x; // return the value of x & break the function
    console.log("this will not be printed");
}

console.log(printFruit()); //option 1

const xxx = printFruit(); //option 2
console.log(xxx);

console.log("************");

const uppercasedArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let word = currentItem[0].toUpperCase() + currentItem.slice(1);
        newArr.push(word);
    }
    return newArr;
};

const movies = ["titanic", "avatar", "inception", "interstellar"];
console.log(uppercasedArray(movies));
//console.log(uppercasedArray(["ofir"])[0]);


console.log("************");

const firstAndLastMovie = movies.filter((item, i) => {
    return i === 0 || i === movies.length - 1;
});

console.log(firstAndLastMovie.length);
