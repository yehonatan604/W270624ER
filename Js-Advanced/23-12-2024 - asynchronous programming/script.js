// asynchronous programming

const fn1 = () => {
    setTimeout(() => {
        console.log('Function 1');
    }, 200);
};

const fn2 = () => {
    console.log('Function 2');
};

// fn1(); // Function 1 will be printed after 200ms
// fn2(); // Function 2 will be printed immediately

console.log("*************** XMLHttpRequest ********************");

const getData = () => {
    const request = new XMLHttpRequest();
    console.log(request);

    request.onload = () => {
        console.log(request.response);
        console.log(JSON.parse(request.response));

        console.log(request.status);

    };

    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/squirtle');

    request.send();
}

// getData();


console.log("*************** Exercise ********************");

const getCountry = (country) => {
    const request = new XMLHttpRequest();
    console.log(request);

    try {
        request.open('GET', `https://restcountries.com/v3.1/name/${country}`, false);
        request.send();

        if (request.status === 200) {
            return JSON.parse(request.response);
        } else {
            return 'Country not found';
        }
    } catch (error) {
        console.log(error.message);
    }
};

const printCountryData = (country) => {
    const data = getCountry(country);
    console.log(data);
}

printCountryData('france');
printCountryData('francewerwer');
fn2();