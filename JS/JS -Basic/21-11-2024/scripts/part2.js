const sec1 = () => {
    setTimeout(() => { alert("Hello World") }, 1000);
    console.log("I am first");
}

const printHello = () => {
    alert("Hello Class");
}

const sec2 = () => {
    setTimeout(printHello, 2000);
};

console.log("*************Exercise 1*************");

// צרו פונקציה שמקבלת מספר
// הדפיסו אותו לקונסול לאחר שניה במידה והמספר גדול מ10
// הדפיסו אותו לקונסול לאחר שניה וחצי  במידה והמספר קטן מ10

// את המספר בקשו מהמשתמש 

console.log("*************Exercise 2*************");

let finalAnswer = "";

setTimeout(() => {
    if (finalAnswer === "") {
        alert("Time is up");
    }
}, 4000);

const checkAnswer = (answer) => {
    if (answer === "yes") {
        finalAnswer = "Well done";
        alert("Well done");
    } else {
        alert("You are wrong");
        finalAnswer = "You are wrong";
    }
}
