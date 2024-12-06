class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(otherValue) {
    this._email = otherValue;
  }
}

const sourabh = new User("sp@sourabh.com", "aasd");
// sourabh.password = "qwer";
console.log(sourabh);
console.log(sourabh.password);
console.log(sourabh.email);
