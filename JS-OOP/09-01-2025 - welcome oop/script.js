// create a class Box with height and width properties
class Box {
    height = 100;
    width = 200;

    resetValues() {
        this.height = 100;
        this.width = 200;
        return this;
    }

    setValues(height, width) {
        this.height = height;
        this.width = width;
    }

    printBox() {
        console.log(`Height: ${this.height}, Width: ${this.width}`);
    }
}

// create an object (instance) of Box class
const myBox = new Box();
console.log(myBox);

// change the height and width of the box
myBox.height = 200;
console.log(myBox);

// create another object of Box class
const anotherBox = new Box();
console.log(anotherBox);

// change the height and width of the another box
anotherBox.setValues(300, 400);
anotherBox.printBox();
anotherBox.resetValues().setValues(500, 600);
anotherBox.printBox();

// constructor

class Box2 {
    width;
    height;
    color;
    bgColor;
    text;

    constructor(newWidth, newHight, newColor, newBgColor, newText) {
        this.width = newWidth;
        this.height = newHight;
        this.color = newColor;
        this.bgColor = newBgColor;
        this.text = newText;

        const div = document.createElement('div');
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.color = this.color;
        div.style.backgroundColor = this.bgColor;
        div.innerText = this.text;

        document.body.appendChild(div);
    }
}

const bigRedBox = new Box2(200, 200, 'white', 'red', 'Hello World');
const smallGreenBox = new Box2(100, 100, 'white', 'green', 'Small Box');
const newbox55 = new Box2(100, 100, 'blue', 'yellow', 'text');
