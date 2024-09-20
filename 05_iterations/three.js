// For Of Loop

const arr = [1, 3, 5, 6, 2, 8];

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world!";

for (const greet of greetings) {
    // console.log(`The characters are ${greet}`);
}

const map = new Map();

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map);

for(let pair of map) {
    // console.log(pair)
}

for(let [key, value] of map) {
    // console.log(key," :- ",value);
}

let myObject = {
    "game1": "NFS",
    "game2": "FIFA"
}

//Objects are not iterable like these
// for (const [key, value] of myObject) {
//     console.log(key," :- ",value);
// }