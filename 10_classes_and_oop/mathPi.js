// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const chai = {
  name: "ginger Tea",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log(`Chai nahi bani`);
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let key in chai) {
  if (typeof chai[key] !== "function") {
    console.log(`${key}: ${chai[key]}`);
  }
}
