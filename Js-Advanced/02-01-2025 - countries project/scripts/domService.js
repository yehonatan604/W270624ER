import { countries, reset, search } from "./countriesService.js";
const cardsContainer = document.getElementById('cards');

document.getElementById('search-input').addEventListener('input', (event) => {
    console.log(event.target.value);
    reset();
    cardsContainer.innerHTML = '';

    if (!event.target.value || event.target.value === '') {
        createCards();
    } else {
        search(event.target.value);
        createCards();
    }

});

const generateCard = (country) => {
    // create a card & style it
    const card = document.createElement('div');
    card.className = "card m-2 col-sm-12 col-md-3"

    // create an image, style it and set the source
    const cardImg = document.createElement('img');
    cardImg.src = country.flags.png;
    cardImg.className = "card-img-top img mt-2 border rounded shadow";

    // create a card body, style it
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    // create a card title, style it and set the text
    const cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.innerText = country.name.common;

    // create a paragraph for population, style it and set the text
    const population = document.createElement('p');
    population.className = "card-text";
    population.innerText = `Population: ${country.population}`;

    // create a paragraph for region, style it and set the text
    const region = document.createElement('p');
    region.className = "card-text";
    region.innerText = `Region: ${country.region}`;

    // create a card footer, style it
    const cardFooter = document.createElement('div');
    cardFooter.className = "card-footer d-flex justify-content-center mb-2";

    // create a heart icon, style it
    let heartIcon = document.createElement('i');
    heartIcon.className = "fa fa-heart text-dark";

    heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('text-danger');
        heartIcon.classList.toggle('text-dark');

        // if(heartIcon.classList.contains('text-dark')){
        //     heartIcon.classList.remove('text-dark');
        //     heartIcon.classList.add('text-danger');
        // } else {
        //     heartIcon.classList.remove('text-danger');
        //     heartIcon.classList.add('text-dark');
        // }
    });

    // add the heart icon to the card footer
    cardFooter.appendChild(heartIcon);

    // add the card title, population and region to the card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(population);
    cardBody.appendChild(region);

    // add the image, card body and card footer to the card
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    // get the cards container and append the card
    cardsContainer.appendChild(card);
}

// create cards for all countries in the array
const createCards = () => {
    for (const country of countries) {
        generateCard(country);
    }
}

export { createCards };