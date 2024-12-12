
const load = () => {
    const storageName = localStorage.getItem("name");
    const title = document.getElementById('title');

    const storageColorsHtml = localStorage.getItem("colors");
    const list = document.getElementById('list');
    list.innerHTML = storageColorsHtml || "";

    title.innerHTML = "Hello " + (storageName || "Guest");
}

// if (localStorage.length > 0) {
//     console.log("Local storage is supported");
// } else {
//     console.log("Local storage is not supported");
// }

window.onload = load;

const save = () => {
    const name = document.getElementById('name');
    const title = document.getElementById('title');

    title.innerHTML = "Hello " + name.value;
    localStorage.setItem("name", name.value);
}

const pickColor = () => {
    const color = document.getElementById('colors').value;
    const colorLi = document.createElement('li');
    colorLi.innerText = color;
    colorLi.style.color = color;

    const list = document.getElementById('list');
    const colorsArr = list.getElementsByTagName('li');

    for (let i = 0; i < colorsArr.length; i++) {
        if (colorsArr[i].innerText === color) {
            alert("Color already exists");
            return;
        }
    }

    list.appendChild(colorLi);
    localStorage.setItem("colors", list.innerHTML);
}

const people = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 30
    },
    {
        name: "Jim",
        age: 35
    }
];

// Convert object to JSON
const jsonString = JSON.stringify(people);

console.log(people);
console.log(jsonString);

// Save JSON to localStorage
localStorage.setItem("people", jsonString);

// Get JSON from localStorage
const data = localStorage.getItem("people");

// Convert JSON to object
const parsed = JSON.parse(data);

// Add new object to the array
parsed.push({ name: "Jack", age: 40 });

// print final object after the addition
console.log(parsed);

console.log("**************************** exercise *******************************");

const animals = ["dog", "cat", "fish", "lion", "tiger", "elephant", "bird", "snake", "monkey", "bear"];
const animalsToStorage = JSON.stringify(animals);
sessionStorage.setItem("animals", animalsToStorage);

const animalsFromStorage = sessionStorage.getItem("animals");
const parsedAnimals = JSON.parse(animalsFromStorage);
parsedAnimals.pop();

sessionStorage.setItem("new-animals", JSON.stringify(parsedAnimals));



