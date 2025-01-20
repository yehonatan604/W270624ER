const now = new Date();
console.log(typeof now);
console.log(now.toString());

// year, months, day, times
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

console.log(new Date('February 1 2022'));
console.log(new Date('2008-05-13'));

setInterval(() => {
    const time = document.getElementById("time");
    time.innerHTML = new Date().toLocaleTimeString({ hour12: false });
}, 1000);

const parisTime = new Date();
parisTime.setHours(parisTime.getHours() + 1);

console.log(parisTime.toLocaleTimeString());

console.log("************************* Exercise 2 *************************");

setInterval(() => {
    const bancockTime = new Date();
    bancockTime.setHours(bancockTime.getHours() + 5);
    const el = document.getElementById("bTime");
    el.innerHTML = bancockTime.toLocaleTimeString();
}, 1000);

