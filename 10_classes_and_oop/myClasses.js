/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(password) {
    return `${this.password}abc`;
  }

  changeUsername(username) {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("sourabh", "qwe@aad.com", 1234);
console.log(chai.changeUsername());
console.log(chai.encryptPassword());
*/

//Behind the Scene of above implementation
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  user.prototype.encryptPassword = function (password) {
    return `${this.password}abc`;
  };
  user.prototype.updatedUsername = function (username) {
    return `${this.username.toUpperCase()}`;
  };
}

const someUser = new user("bittu", "bit@asd.com", "12345");
console.log(someUser.encryptPassword());
console.log(someUser.updatedUsername());
