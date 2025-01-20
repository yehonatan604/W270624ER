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
    // Create an XMLHttpRequest object
    const request = new XMLHttpRequest();

    //print the request object
    console.log(request);

    // we use try catch because request can throw an error
    try {
        // Open a new connection, using the GET request on the URL - GET will get the data SYNCHRONOUSLY
        request.open('GET', `https://restcountries.com/v3.1/name/${country}`, false); // false means synchronous

        // Send request
        request.send();

        // Check if the request was successful
        if (request.status === 200) {
            // Parse the data from the request and return it
            const data = JSON.parse(request.response);
            return data;
        } else {
            // If the request was not successful, return an error message
            return 'Country not found';
        }
    } catch (error) {
        // If there was an error with the request, return the error message
        console.log(error.message);
    }
};

// Print the data for a specific country
const printCountryData = (country) => {
    // Get the data for the country using the getCountry function
    const data = getCountry(country);

    // Print the data to the console
    console.log(data);

    //put country flag in image tag
    const img = document.getElementById('loading');
    img.src = data[0].flags.png;
}

printCountryData('france'); // print the data for France
printCountryData('israel'); // print 404 error message
printCountryData('japan'); // print 404 error message
printCountryData('australia'); // print 404 error message
fn2();

