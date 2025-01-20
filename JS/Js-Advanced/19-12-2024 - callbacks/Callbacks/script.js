const sayThankYou = () => {
    console.log('Thank you for your purchase! We appreciate your business.');
}

const sayThankYouBigSpender = () => {
    console.log('Thank you for your purchase! We appreciate your business. You are a big spender!');
}


const calcSum = (price1, price2, myFunc) => {
    const finalPrice = price1 + price2;
    console.log(`The total price is $${finalPrice}`);
    myFunc();
}

const start = () => {
    const num1 = +prompt('Enter the first price: ');
    const num2 = +prompt('Enter the second price: ');

    if (num1 + num2 > 2000) {
        calcSum(num1, num2, function () {
            console.log('Thank you for your purchase! We appreciate your business. You are a very very big spender!');

        });
    } else if (num1 + num2 > 1000) {
        calcSum(num1, num2, sayThankYouBigSpender);
    }
    else {
        calcSum(num1, num2, sayThankYou);
    }
}

// setTimeout(()=>{
//     console.log();
// }, 2000);