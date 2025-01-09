// create a class Box with height and width properties
class Box {
    height = 100;
    width = 200;

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