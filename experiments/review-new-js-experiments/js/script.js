/**
Constants
Lam Ky Anh Do

Experimenting with constants

constants (const) basically turn variables into fixed variables that never change and cannot be change
*/

"use strict";

// const PI = 3.14159;
// const I_LOVE_TO_LEARN = true;
// const MY_FAVORITE_PROGRAMMING_LANGUAGE = `JavaScript`;
// const HOW_MUCH_WOOD_COULD_A_WOODCHUCK_CHUCK = undefined;

// Replace let numCircles = 10; by const
const NUM_CIRCLES = 10;
let circleAlpha = 50;
let circleSizeIncrease = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0)

  circleAlpha = map(mouseX, 0, width, 10, 100);
  circleSizeIncrease = map(mouseY, 0, height, 10, 100);

  // Apply const var to for loop
  for (let i = 0; i < NUM_CIRCLES; i++) {
    push();
    fill(255, circleAlpha);
    ellipse(width / 2, height / 2, i * circleSizeIncrease);
    pop();
  }
}