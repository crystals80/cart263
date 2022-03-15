/**
jQuery Events
Lam Ky Anh Do

Experimenting jQuery events with pure js
*/

"use strict";

// (1) AddEventListener with jQuery
// $(`#main-heading`).on(`click`, function(event) {
// $(`#main-heading`).remove(); // Remove heading onclick
// $(this).remove() // Same thing but with "this" (more efficient cuz don't need to type tag/id/class)
// });

// (2) Add text onclick
$(`section`).on(`click`, function(event) {
  $(this).append(`<p>This will be added EVERY click.</p>`)
});

$(`section`).one(`click`, function(event) {
  $(this).append(`<p>This will be added once only (one the FIRST click).</p>`)
});

// (3) Using .click rather .on (same as (1) but less preferable and less "efficient" but possible)
// $(`#main-heading`).click( function(event) {
// $(this).remove() // Same thing but with "this"
// });

// (4) Remove events
$(`.header`).on(`click`, function(event) {
  $(this).css(`color`, `turquoise`) // Turn text turquoise
  $(`.header`).off(`click`) // Stop changing text colour
});