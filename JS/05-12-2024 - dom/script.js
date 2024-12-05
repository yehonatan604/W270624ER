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
