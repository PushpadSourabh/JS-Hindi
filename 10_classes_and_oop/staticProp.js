class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const sourabh = new User("sourabh");
// sourabh.logMe();
// console.log(User.createId());

class Teacher extends User {
  constructor(username, email) {
    super(User);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.createId();
