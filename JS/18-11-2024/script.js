console.log('*****************H.W****************\n\n');

const grades = [80, 85, 40, 100, 60];

function calcStudentGrades() {
    const failed = [];
    const passed = [];
    const excellent = [];

    for (let grade of grades) {
        if (grade <= 69) {
            failed.push(grade);
        } else if (grade >= 70 && grade <= 90) {
            passed.push(grade);
        } else {
            excellent.push(grade);
        }
    }

    console.log(failed.length + ' students failed');
    console.log('Passed:', passed.length);
    console.log('Excellent:', excellent.length);
}

calcStudentGrades();

console.log('\n\n*****************Filter****************');

function filterStudentGrades() {
    const failed = grades.filter(function (someItem) {
        return someItem <= 69;
    });

    const passed = grades.filter(function (someItem) {
        return someItem >= 70 && someItem <= 90;
    });
    const excellent = grades.filter(function (someItem) {
        return someItem > 90;
    });

    console.log(failed.length + ' students failed');
    console.log('Passed:', passed.length);
    console.log('Excellent:', excellent.length);
}

filterStudentGrades();

console.log('\n\n*****************Exercise****************');

// צרו מערך המכיל5 בעלי חיים
const animals = ['dog', 'cat', 'fish', 'bird', 'snake'];

// סננו מתוך המערך את כל החיות שאורך שמם גדול מ3
// סננו מתוך המערך את כל החיות שמתחילות באות d

const str = "werewrwerewr ewrwer ewrew rew"
console.log(str[0] === "d"); // false

const biggerThen3 = animals.filter((animal) => {
    return animal.length > 3;
});

console.log(biggerThen3);

console.log('***************** Foreach ****************\n\n');

//const countries = ['israel', 'usa', 'france', 'italy', 'spain'];

// for (let country of countries) {
//     console.log(country);
// }

// countries.forEach((item, index) => {
//     console.log(index + " - " + item);
// });

console.log('***************** Map ****************\n\n');

const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [];

// numbers.forEach( num => {
//     numbers2.push(num * 100);
// })

const numbers2 = numbers.map((num) => {
    return num * 100;
});

console.log(numbers2);

console.log('***************** Exercise ****************\n\n');

// צרו מערך המכיל 5 מספרים   
// צרו מערך חדש שבו כל מספר יהיה כפול 10 מהמערך הראשון

// צרו מערך המכיל 10 מספרים
// צרו מערך חדש שבו כל מספר יהיה כפול 100 מהמערך הראשון במידה והוא זוגי

// צרו מערך של 5 ערי בירה
// צרו מערך נוסף בעל מספר איברים זהה ובו שמות של המדינות של ערי הבירה
// צרו מערך חדש מתוך 2 המערכים שבו כל איבר יהיה סטרינג שבו שם המדינה והעיר

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumsArray = nums.filter((num) => {
    return num % 2 === 0;
}).map((num) => {
    return num * 100;
});

console.log(newNumsArray);


const capitals = ['Jerusalem', 'Paris', 'Berlin', 'London', 'Rome'];
const countries = ['Israel', 'France', 'Germany', 'England', 'Italy'];

// ["Jerusalem - Israel", "Paris - France", "Berlin - Germany", "London - England", "Rome - Italy"]

const citiesAndCountries = capitals.map((item, i) => {
    return i + ": " + item + ' - ' + countries[i];
});

console.log(citiesAndCountries);

console.log('***************** Reduce ****************\n\n');
const ages = [31, 44, 45, 42, 37, 26, 21];

const sum = ages.reduce((acc, item) => {
    return acc + item;
}, 0);

console.log(sum);


console.log("ages average in our humble class is: " + sum / ages.length);

const heights = [180, 170, 160, 190, 200, 150, 140];

const highest = heights.reduce((acc, item) => {
    if (item > acc) {
        return item;
    } else {
        return acc;
    }
}, 0);

console.log("The highest student in our humble class is: " + highest);

