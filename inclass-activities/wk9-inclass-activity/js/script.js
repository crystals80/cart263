/**
In-class Activity - Week 2
Lam Ky Anh Do

Reviewing lecture 1

1- Can I have it all? (p5.js, DOM, jQuery, etc)
 - in the samr JS file?
2- Make a selectable circle
3- A circle following the cursor with pure JS


NOTE:
*/

"use strict";

// (1) Use a bit of all types of JS
let canvas;

// function setup() {
//   canvas = createCanvas(500, 500);
//   canvas.id(`p5-canvas`);
//
//   $(`document`).on(`click`, function() {
//     $(`p5-canvas`).hide();
//   })
// }
//
// function draw() {
//   background(0);
//
//   rect(100, 100,100,100);
// }

// (3.1) Have a circle follows the cursor with a mix of p5.js and pure JS
// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(100);
//
//   ellipse(mouseX, mouseY, 100, 100);
// }
//
// if (mouseX > width / 2) {
//   S(`p5-canvas`).slideToggle();
// }

// (2) Have a selectable circle with pure JS
// $(`#circle`).on(`click`, function() {
//   $(`#clown`).slideUp();
// });

// (3.2) Check if circle follows cursor
// $(`document`).on(`mousemove`, function() {
//   mouseX = event.clientX;
//   mouseY = event.clientY;
// })
// window.requestAnimationFrame(animateCircle);
//
// function animateCircle() {
//   // console.log(mouseX, mouseY);
//
//   $(`#circle`).css({
//     top: `${mouseX}px`,
//     left: `${mouseY}px`,
//   })
// }

// (3) Have a circle follows the cursor with pure JS
let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
};

let mouseX = 0;
let mouseY = 0;

$(`document`).on(`mousemove`, function() {
  mouseX = event.clientX;
  mouseY = event.clientY;
})

window.requestAnimationFrame(draw);

function draw() {
  if (mouseX > circle.x) {
    circle.vx = 2;
  } else if (mouseX < circle.x) {
    circle.vx = -2;
  }

  if (mouseY > circle.y) {
    circle.vy = 2;
  } else if (mouseY < circle.y) {
    circle.vy = -2;
  }

  circle.x += circle.vx;
  circle.y += circle.vy;

  circle.elt.css({
    top: `${circle.x}px`,
    left: `${circle.y}px`,
  })

  window.requestAnimationFrame(draw);
}