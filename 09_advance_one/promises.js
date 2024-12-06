// First type of promise gettting consumed
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`async task one completed`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log(`Promise one consumed`);
});

// Second type of promise getting consumed
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`async task two completed`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`promise two consumed`);
});

//Third type of promise getting consumed (passing parameter to resolve)
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`async task three completed`);
    resolve({ username: "chaiAurCode", email: "chaiAurCode@example.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

// fourth type of promise (error is handeled, specific value is returned from then() )
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "sourabh", password: "12345" });
    } else {
      reject(`ERROR: Something went wrong`);
    }
  }, 1000);
});

promiseFour
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log(`Promise is either fulfilled or rejected`);
  });

// fifth type of promise (using async and await)
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "JS123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetching data from site and returning data

/*
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
