
const load = () => {
    const storageName = localStorage.getItem("name");
    const title = document.getElementById('title');

    const storageColorsHtml = localStorage.getItem("colors");
    const list = document.getElementById('list');
    list.innerHTML = storageColorsHtml || "";

    title.innerHTML = "Hello " + (storageName || "Guest");
}

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

if (localStorage.getItem("people") === null) {
    localStorage.setItem("people", people);
}
