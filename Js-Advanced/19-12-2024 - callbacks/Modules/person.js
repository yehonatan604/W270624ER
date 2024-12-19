const car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1969
}

const changeCar = (newBrand, newModel, newYear) => {
    car.brand = newBrand;
    car.model = newModel;
    car.year = newYear;
}

const printCar = () => {
    console.log(`brand: ${car.brand}`);
    console.log(`model: ${car.model}`);
    console.log(`year: ${car.year}`);
}

export { changeCar, printCar };
