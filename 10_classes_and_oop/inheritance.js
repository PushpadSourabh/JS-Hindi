class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("sourabh", "asd@awe.com", "2345");
chai.logMe();

const masalaChai = new User("masala chai");
masalaChai.logMe();

console.log(chai instanceof User);
