const user = {
  _email: "s@sp.com",
  _password: "qwert",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value
  },
};

const tea = Object.create(user);
console.log(tea.email);
