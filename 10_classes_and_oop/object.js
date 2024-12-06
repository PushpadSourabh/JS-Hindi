let myHeroes = ["spiderman", "thor"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",
  getSpiderPower: function () {
    console.log(`Spiderman super power is ${this.spiderman}`);
  },
};

// heroPower.getSpiderPower();

Object.prototype.sourabh = function () {
  console.log(`Sourabh is present in all objects`);
};

Array.prototype.heySourabh = function () {
  console.log(`Hello from sourabh for array`);
};

// heroPower.sourabh();
// myHeroes.sourabh();
// myHeroes.heySourabh();

const User = {
  name: "chai",
  email: "chai@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

//old syntax to give access of properties of user to teacher
teacher.__proto__ = User;

//modern syntax to access of properties of teacher to teachingSupport
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "chaiAurCode  ";

String.prototype.trueLength = function () {
  //   console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();
"sourabh".trueLength();
