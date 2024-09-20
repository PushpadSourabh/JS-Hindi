const myNums = [1, 2, 3]

const initialValue = 0;

// const sumMyNums = myNums.reduce( function(acc, currVal) {
//     console.log(`acc is ${acc} and current value is ${currVal}`);
//     return acc + currVal;
// }, initialValue);

const sumMyNums = myNums.reduce( (acc, currVal) => acc + currVal, initialValue)


// console.log(sumMyNums);


const shoppingCart = [
    {
        courseName: "javascript",
        price: 2999
    },
    {
        courseName: "python",
        price: 999
    },
    {
        courseName: "java",
        price: 3999
    },
    {
        courseName: "data science",
        price: 12999
    },
    {
        courseName: "Full stack",
        price: 10999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay)