// form submit samples
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Form submitted! Thank you for reaching out.');
});

let x = 1; // number type // when your variables can be chnaged
const y = 10; // when you value will not change

const firstName = 'MK';
const lastName = 'Haque';

const fullName = firstName + ' ' + lastName;

console.log(fullName);

// turnary operator

// let age = 8;

// let text = age < 18 ? 'Minor' : 'Adult';

// console.log(text);

// for loops
// const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
// let len = cars.length;

// let text = '';
// for (let i = 0; i < len; i++) {
//   text += cars[i] + ' ';
// }

// console.log(text);

let text = 'ABCDEFGHIJKLMNOPQRSTUVWX';
let length = text.length;

// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b; // arrow function

console.log(multiply(10, 5));

// array in js
const cars = ['Saab', 'Volvo', 'BMW'];
let car = cars[2];

console.log(car);

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.push('Kiwi');

const numbers = [45, 4, 9, 16, 25];
let txt = '';
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value * 2 + ' ';
}

console.log(txt);

const person = {
  firstName: 'MK',
  lastName: 'Haq',
  age: 50,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.lastName);

const randomBtn = document.getElementById('random-button');

randomBtn.addEventListener('click', function () {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('body').style.backgroundColor = randomColor;
});

// DOM examples

function colorChange() {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    document.getElementById('body').style.color = 'red';
  });
}
