const getAllCountries = () => {
    const request = fetch("https://restcountries.com/v3.1/all");
    request.then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}

getAllCountries();
console.log("Hello World");

const getOneCountry = async (country) => {
    const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await request.json();
    return data;
}

const clickMe = async () => {
    try {
        const nigeria = await getOneCountry("Nigeria");
        console.log(nigeria);
        console.log("Hello World");
        console.log(nigeria[0].flags.png);
        console.log(nigeria[0].name.common);
    } catch (error) {
        console.log(error);
    }
};

const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    await clickMe();
    console.log("Button Clicked");
});

// const israel = await getOneCountry("israel").then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

