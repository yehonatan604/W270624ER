console.log(document);

console.log("******************** getElementById *************************");
// getElementById will return a single element

const title = document.getElementById('title1');
console.log(title.innerHTML);

console.log("******************** getElementsByClassName *************************");
// getElementsByClassName will return an array of elements

const containers = document.getElementsByClassName('container');
console.log(containers);
console.log(containers[0].innerHTML);
console.log(containers[0].innerText);

for (let i = 0; i < containers.length; i++) {
    console.log(containers[i]);
}

console.log("******************** querySelector *************************");
// querySelector wil fetch only the first element

const container = document.querySelector('.container');
console.log(container);

const title2 = document.querySelector('#title2');
console.log(title2);

const titleOfContainer = document.querySelector('.container > h1');
console.log(titleOfContainer);

console.log("******************** querySelectorAll *************************");
// querySelectorAll will fetch all the elements

const titlesOfContainers = document.querySelectorAll('.container > h1');
console.log(titlesOfContainers);

titlesOfContainers.forEach((title) => {
    console.log(title);
});

console.log("******************** Exercise 1 *************************");

const printAllListItems = () => {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item) => {
        console.log(item.innerHTML);
    });
}

printAllListItems();

console.log("******************** innerHtml *************************");

const article = document.querySelector('.article');

const createArticle = () => {
    article.innerHTML = `
    <h2>Article Title</h2>
    
    <p>
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <h2>Article Title</h2>
    
    <p>
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <h2>Article Title</h2>
    
    <p>
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    `
    console.log(article.innerHTML); // will return the innerHTML of the article
    console.log(article.innerText); // will return the innerText of the article
}


console.log("******************** attributes *************************");

article.style = 'background-color: lightblue; padding: 10px;';

article.className = 'article2';
article.setAttribute('class', 'article2'); // will not affect style because it is inline style

article.setAttribute('id', 'articleId');

console.log(article.href);
