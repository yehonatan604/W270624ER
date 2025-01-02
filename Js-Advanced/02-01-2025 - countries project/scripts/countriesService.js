const getCountries = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch countries', error);
    }
};

const countriesFull = await getCountries();
let countries = [...countriesFull];

const reset = () => {
    countries = [...countriesFull];
}

const search = (word) => {
    countries = countriesFull.filter((country) => {
        const name = country.name.common.toLowerCase();
        const formatedWord = word.toLowerCase();
        return name.includes(formatedWord);
    })
}

export { countries, reset, search };
