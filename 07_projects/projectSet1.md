# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
console.log("sourabh")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons)

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Solution

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  console.log(height);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi > 0 && bmi <= 18.6) {
      results.innerHTML = `<span>${bmi} Under Weight</span>`;
    }
    if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} Normal Range</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi} Over Weight</span>`;
    }
  }
});


```

## Project 3

```javascript

const clock = document.getElementById("clock");

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);

```