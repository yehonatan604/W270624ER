const styleElement = (element) => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.style.fontSize = '20px';
    element.style.boxShadow = '3px 6px 12px black';
    element.style.textAlign = 'center';
    element.style.borderBottom = '2px solid black';
}

const container = document.getElementById('container');

styleElement(container);
console.log(container.style.fontSize);

const emptyDiv = document.createElement('div');

const h2 = document.createElement('h2');
h2.innerText = 'I am a h2!!!';

emptyDiv.appendChild(h2);
document.body.appendChild(emptyDiv);

console.log("**************  remove elements  *******************");

const removeBox1 = () => {
    const box1 = document.getElementById('box1');
    document.body.removeChild(box1);
}

const removeContainer2 = () => {
    document.body.removeChild(document.getElementById('container2'));
}

const removeItemsFromList = () => {
    const list = document.getElementById('list');
    const listItems = list.querySelectorAll('li');

    console.log(listItems);

    list.innerHTML = '';
    listItems.forEach((item) => {
        if (item.innerText === "Yes" || item.innerText === "No") {
            list.appendChild(item);
        }
    });
}