/**
First-class Functions
Lam Ky Anh Do

Experimenting with first-class functions

Functions in JavaScript are called “first-class” because they’re treated like any other kind of value. That means functions can be assigned to variables, stored in arrays or object properties, passed as arguments to other functions, and more! Anonymous functions (functions without a name) are particularly common in JavaScript programming, and are important to recognize.
*/

"use strict";

/*function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0)
}*/

/*
// POP-UP MESSAGE AT THE VERY START
// Create a new variable (result) and assign function add() to it in order to make var result the new function add()
let result = add(1, 5);
alert(`The result is ${result}!`); // result is 6

// A function to add two numbers together and return the result
function add(a, b) {
  return a + b;
}

// Can also store function in var by replacing var "add" by new var "addingFunction"
// let addingFunction = add;
// let result = addingFunction(1, 10); // result is 11
*/

/*
// POP-UP MESSAGE AFTER A DELAY
// setTimeout must be after for it to work

function hello() {
// Pop up an alert dialog that says "Hello!"
alert(`Hello!`);
}

// Call the hello() function after 5000 milliseconds
setTimeout(hello, 5000);
*/

/*
// AN ANONYMOUS FUNCTION
let hello = function() {
  // Note how the function definition has no name!
  alert(`Hello!`);
};

// Call the function inside the hello variable after 5000 milliseconds
setTimeout(hello, 5000);
*/

/*
// Same way to write anonymous function BUT shorter
setTimeout(function () {
  alert(`Hello!`)
}, 5000); // Call the anonymous function provided after 5000 milliseconds
*/

// AN ARROW FUNCTION
// No writing "Function" and so it is replaced by "=>"
setTimeout(() => {
  alert(`Hello!`)
}, 5000); // Call the anonymous function provided after 5000 milliseconds