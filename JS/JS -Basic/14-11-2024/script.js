console.log("***********************for loop on array**************************\n\n");

const fruites = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach', 'Cherry'];

// 0.frurit is: Apple

for (let i = 0; i < fruites.length; i++) {
    console.log((i + 1) + ".fruit is: " + fruites[i]);
    break;
}

console.log("\n\n***********************for-of loop on array**************************\n\n");

const cars = ['bmw', 'audi', 'mercedes', 'toyota', 'honda', 'suzuki'];

// car is: Bmw
for (let car of cars) {
    //const i = cars.indexOf(car);
    console.log("car is: " + car);
}

console.log("\n\n***********************for-in loop on object**************************\n\n");

// car is: Bmw
for (let i in cars) {
    // let number = i;

    // if (number !== cars.length - 1) {
    //     number++;
    // }

    console.log(i + ".car is: " + cars[i]);
}

console.log("\n\n***********************break-continue**************************\n\n");

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let i in numbers) {
    // if (i == 3) {
    //     break;
    // }

    if (numbers[i] === 500 || numbers[i] === 600) {
        continue;
    }

    console.log("Number is: " + numbers[i]);
}

console.log("\n\n***********************split - join**************************\n\n");

const text = "I am a web developer"; // ["I", "am", "a", "web", "developer"]

const words = text.split(" ");
console.log(words);

const bmw = "bmw";
const bmwArray = bmw.split("");
bmwArray[0] = bmwArray[0].toUpperCase();
console.log(bmwArray);

// B-m-w
// const newText = bmwArray[0] + bmwArray[1] + bmwArray[2]; // yehonatan don't allow this
const newText = bmwArray.join("-");
console.log(newText);

console.log("\n\n***********************exercise**************************\n\n");

/* 
    1. צרו מערך של 5 שמות שחקני קולנוע באנגלית
    2. הגדילו את האות הראשונה של כל אחד משמות השחקנים
    3. הדפיסו את השמות החדשים

    * use split and join methods
    * use for loop (for-of, for-in or standard for loop)

    // הגדלת אות ראשונה

    // const name = "john"
    // const nameArray = name.split("");
    // nameArray[0] = nameArray[0].toUpperCase();
    // const newName = nameArray.join("");
*/

console.log("\n\n***********************filter**************************\n\n");

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numbersWithout5 = numbers2.filter(function (item, i) {
//     console.log("i: " + i + ", item: " + item);
//     return item !== 5;
// });

const oddNumbers = numbers2.filter(function (item) {
    return item % 2 !== 0;
});

console.log(oddNumbers);

console.log("\n\n***********************exercise 2**************************\n\n");

/*
    1. צרו מערך של 10 מספרים    
    2. צרו מערך חדש של המספרים הזוגיים בלבד מתוך המערך הראשוני
    3. הכפילו כל מספר במערך החדש ב-100
    4. הדפיסו את המערך החדש
*/

const grades = [100, 93, 80, 71, 65, 50, 40, 39, 20, 10];

const evenGrades = grades.filter(function (grade) {
    return grade % 2 === 0;
});

for (let grade of evenGrades) {
    const newGrade = grade * 100;
    evenGrades[grade] = newGrade;
}

console.log(evenGrades);