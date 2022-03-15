/**
jQuery Form Inputs
Lam Ky Anh Do

Experimenting jQuery inputs with pure js
*/

"use strict";

// (1) Remove button
// $(`#example-button`).on(`click`, function(event) {
//   $(this).remove();
// });

// (2) Add text field and trigger alert after button is clicked
$(`#example-button`).on(`click`, function(event) {
  // Use .val() to get the current value (text) in the text input
  let input = $(`#example-text-input`).val();
  alert(input); // Print value on pop-up msg
});

// (3) Add a range slider and trigger its value after button is clicked
$(`#range-slider`).on(`change`, function(event) {
  // Use .val() to access the current value of the slider
  let value = $(this).val();
  alert(value); // Print value on pop-up msg
});