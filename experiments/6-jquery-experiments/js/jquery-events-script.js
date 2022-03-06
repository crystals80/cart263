/**
DOM Events
Lam Ky Anh Do

Experimenting DOM events with pure js
*/

"use strict";

// Customize text using ID
let para = document.getElementById('paragraph');

// (1) Make sentence appear red after 3 sec once
// setTimeout(function() {
//   para.style['color'] = '#ff0000';
// }, 3000);

// (2) Make sentence blink every .5 sec
// setInterval(blink, 500);

// Customize opacity (show and disappear)
// function blink() {
//   let opacity = para.style['opacity'];
//   if (opacity === '1') {
//     para.style['opacity'] = '0';
//   } else {
//     para.style['opacity'] = '1';
//   }
// }

// (3) Make sentence disappear by fading out
let opacity = 1;
// setInterval(fadeOut, 100);

// Set opacity to progressively make text invisible
// function fadeOut() {
//   opacity -= 0.01;
//   para.style['opacity'] = opacity;
// }

// (4) A better way to animate is to requestAnimationFrame to recall function again (smoother and faster)
// fadeOut();
//
// function fadeOut() {
//   opacity -= 0.01;
//   para.style['opacity'] = opacity;
//   if (opacity > 0) {
//     requestAnimationFrame(fadeOut);
//   }
// }

// (5) Customize body background colour by click using addEventListener
document.addEventListener('click', function(event) {
  document.body.style['background-color'] = '#affcb0';
});

// (6) Customize text by click using addEventListener
para.addEventListener('click', function(event) {
  para.style['background-color'] = '#beecff';
});

// (7) Debug using addEventListener
para.addEventListener('click', function(event) {
  console.log(event);
  // (8) Display coordinates of mouse when click on para
  para.innerText = `${event.clientX},${event.clientY}`;
  // (9) Display coordinates of mouse (more generic)
  event.target.innerText = `${event.clientX},${event.clientY}`;
});

// Customize headlines using ID
let mainHeading = document.getElementById('main-heading');
let subHeading = document.getElementById('sub-heading');

// (10) Change text colour on click using target.event and addEventListener
mainHeading.addEventListener('click', setOrangeTextColor);
subHeading.addEventListener('click', setOrangeTextColor);
para.addEventListener('click', setOrangeTextColor);

function setOrangeTextColor(event) {
  event.target.style['color'] = '#fab000';
}

// (11) Show a secret message when hover
let originalText = para.innerText;

// para.addEventListener('mouseenter', function(event) {
//   para.innerText = `SECRET MESSAGE!!! TOAST IS GREAT!!!`;
// })

// para.addEventListener('mouseleave', function(event) {
//   para.innerText = originalText;
// })

// (12) Show a secret message when right-clicked
para.addEventListener('contextmenu', function(event) {
  event.target.innerText = `SECRET MESSAGE!!! TOAST IS GREAT!!!`;
})

para.addEventListener('mouseleave', function(event) {
  event.target.innerText = originalText;
})

// (13) Change text colour every time a key is pressed on the html page
document.addEventListener('keydown', function(event) {
  para.style['color'] = '#fabee0';
  // (14) ...every time keyCode 32 (SPACE) is pressed
  if (event.keyCode === 32) {
    para.style['color'] = '#fabbbf';
    // (15) ...every time r is pressed
  } else if (event.key === `r`) {
    para.style['color'] = '#23bbbf';
  }
  // (16) Display anything typed
  para.innerText = para.innerText + event.key;
})

// (17) Change text colour every time a key is released on the html page
document.addEventListener('keyup', function(event) {
  para.style['color'] = '#babaf0';
});

// (18) Show a sad face when wifi is not on
window.addEventListener('offline', function(event) {
  mainHeading.innerText = ':(';
});