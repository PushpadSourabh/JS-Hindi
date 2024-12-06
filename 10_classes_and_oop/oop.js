function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const user1 = new user("Sourabh", 12, true);
console.log(user1);

const user2 = new user("Sachin", 92, false);
console.log(user2);
console.log(this);
