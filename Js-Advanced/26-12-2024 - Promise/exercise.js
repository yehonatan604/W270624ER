const getPokemons = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0', false);

    request.send();

    if (request.status === 200) {
        return JSON.parse(request.response);
    } else {
        return 'Error';
    }
}

// const myPromise = new Promise((resolve, reject) => {
//     const pokemons = getPokemons();
//     if (pokemons !== 'Error') {
//         resolve(pokemons);
//     } else {
//         reject('Error');
//     }
// }).then((pokemons) => {
//     console.log(pokemons);
// }).catch((error) => {
//     console.log(error.message);
// }).finally(() => {
//     console.log('Promise finished');
// });

const myPromise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

    request.onload = () => {
        if (request.status === 200) {
            resolve(JSON.parse(request.response));
        } else {
            reject(new Error('Error'));
        }
    }

    request.send();
});

myPromise.then((pokemons) => {
    console.log(pokemons);
    console.log('Promise finished');

    for (const pokemon of pokemons.results) {
        const h1 = document.createElement('h1');
        h1.textContent = pokemon.name;
        document.body.appendChild(h1);
    }
}).catch((error) => {
    console.log(error.message);
    console.log('Promise finished');
});

console.log('End of the script');
