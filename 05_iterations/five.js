const coding = ["js", "python", "java", "ruby", "c++"];

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => console.log(item));

// function printMe(val) {
//     console.log(val);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => console.log(item.languageName))