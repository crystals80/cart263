/**
jQuery Extras
Lam Ky Anh Do

Experimenting more jQuery features with pure js
*/

"use strict";

// (1) Add a highlight to the main heading
$(`#main-heading`).addClass(`highlight`);

// (2) Remove the highlight onclick
$(`#main-heading`).on(`click`, function(event) {
  $(this).removeClass(`highlight`);
});

// (3) Make headers blink
setInterval(function() {
  $(`.header`).toggleClass(`highlight`);
}, 500);

// (4) Hide text onclick
// $(`#button`).on(`click`, function(event) {
//   // Hide the main heading
//   $(`#main-heading`).hide();
// });

// (5) Show text onclick
// $(`#button`).on(`click`, function(event) {
//   // Hide the main heading
//   $(`#main-heading`).hide();
//   // Show it again after two seconds
//   setTimeout(function() {
//     $(`#main-heading`).show();
//   }, 2000);
// });

// (6) Hide/Show with toggle
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).toggle();
// });

// (7) Fade text
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).fadeOut();
// });

// (8) Fade text with a customized timer
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).fadeOut(2000);
// });

// (9) Fade out text then Fade in text
// $(`#button`).on(`click`, function(event) {
//   // Fade out the main heading over two seconds...
//   $(`#main-heading`).fadeOut(2000, function() {
//     // .. then fade it back in over two seconds
//     $(this).fadeIn(2000);
//   });
// });

// (10) Fade text in/out using toggle (onclick)
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).fadeToggle(2000);
// });

// (11) Slide text up
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).slideUp();
// });


// (12) Slide text up wth a customized timer
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).slideUp(2000);
// });

// (13) Slide up text then Slide slideDown text
// $(`#button`).on(`click`, function(event) {
//   // Slide up the main heading over two seconds...
//   $(`#main-heading`).slideUp(2000, function() {
//     // .. then slide it back down over two seconds
//     $(this).slideDown(2000);
//   });
// });

// (14) Slide text up/down using toggle (onclick)
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).slideToggle(2000);
// });

// (15) Animate text onclick by lower its opacity
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5
//   }, 2000);
// });

// (16) Animate text using many CSS properties
// NOTE: CSS Animations are limited as it can only animate using values like numbers (i.e. cannot animate color but you can do with jquery)
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5,
//     "font-size": `1rem`
//   }, 2000);
// });

// (17) Change text colour to indicate that the animation is done
// $(`#button`).on(`click`, function(event) {
//   // Fade to 0.5 opacity
//   $(`#main-heading`).animate({
//     "opacity": 0.5
//   }, 2000, function() {
//     // When the fade completes, set the CSS color property to red
//     $(this).css(`color`, `#ff0000`);
//   });
// });

// (18) Add a notice "Animated!" after animation was done
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.1,
//     "height": `200px`,
//   }, {
//     duration: 2000,
//     complete: function() {
//       $(this).css(`ANIMATED!`);
//     }
//   });
// });

// (19) Add an easing (and other features) transition to the animation
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5
//   }, {
//     duration: 2000,
//     easing: `linear`,
//     complete: function() {
//       $(this).css(`ANIMATED!`);
//     }
//   });
// });

// (20) Reverse each sentence of headers
$(`.header`).each(function() {
  // Get the reversed text of the current heading's text
  let reverseText = $(this).text().split(``).reverse().join(``);
  // Set the new reverse text
  $(this).text(reverseText);
});

// (21) See more of jquery selectors on: https://api.jquery.com/category/selectors/