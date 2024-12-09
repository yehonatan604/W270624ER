const styleElement = (element) => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.style.fontSize = '20px';
    element.style.boxShadow = '3px 6px 12px black';
    element.style.textAlign = 'center';
}

const container = document.getElementById('container');

styleElement(container);