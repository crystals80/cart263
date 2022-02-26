/**
DOM Form Inputs
Lam Ky Anh Do

Experimenting DOM inputs with pure js
*/

"use strict";

// Customize button
let btn = document.getElementById(`example-button`);

// (1) Hide (3rd) button on click
btn.addEventListener(`click`, function(event) {
  alert(`Nice clicking!`);
  event.target.style[`display`] = `none`;
});

// (2) Display input on alert
let textInput = document.getElementById(`example-text-input`);
let submitBtn = document.getElementById(`submit-button`);

submitBtn.addEventListener(`click`, function(event) {
  // We can get the text in the text input using its .value property
  let input = textInput.value;
  alert(input);
});

// (3) Display input when keycode 13 (ENTER) is pressed
textInput.addEventListener(`keydown`, function(event) {
  // Check if they hit return
  if (event.keyCode === 13) {
    // Show the content of the text input
    let input = event.target.value;
    alert(input);
  }
});

// Customize slider
let slider = document.getElementById(`range-slider`);
let printBtn = document.getElementById(`print-button`);

// (4) Display range of number on alert
printBtn.addEventListener(`click`, function(event) {
  // We can get the current value set on the slider through its .value property
  let value = slider.value;
  alert(value);
});

// (5) Check slider range without button

// Listen for changes to the slider
let sliderr = document.getElementById(`range-sliderr`);
sliderr.addEventListener(`change`, function(event) {
  // Print out the current value
  alert(slider.value);
});

// Create a colour picker
let colorPicker = document.getElementById(`color-picker`);

colorPicker.addEventListener(`input`, function(event) {
  let color = event.target.value;
  // (6) Display colour code via a colour picker
  // alert(color);
  // (7) Set the background color of the document when the color picker is used
  document.body.style[`background-color`] = color;
});

// (8) Set password input
let passwordInput = document.getElementById(`password-input`);
let loginButton = document.getElementById(`login-button`);

// Check the password when they click the button
loginButton.addEventListener(`click`, function(event) {
  // Get the password value entered
  let password = passwordInput.value;
  // Check if it's correct and notify the user
  if (password === `password`) {
    alert(`Logged in!`);
  } else {
    alert(`Wrong password!`);
  }
});

// (9) Set date picker input
let datePicker = document.getElementById(`date-picker`);

// Alert the date chosen each time it's changed
datePicker.addEventListener(`change`, function(event) {
  let date = event.target.value;
  alert(date);
});