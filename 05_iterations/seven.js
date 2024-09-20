const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map( (item) => item + 10)

const newNumbers = myNumbers
                    .map( (item) => item * 10)
                    .map( (item) => item + 1)
                    .filter( (item) => item >= 41)
console.log(newNumbers);