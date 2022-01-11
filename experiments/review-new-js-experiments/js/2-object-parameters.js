/**
Object Parameters
Lam Ky Anh Do

Experimenting with object parameters

Object parameters allow one to make their code more neat and organized when there are too many numbers
*/

"use strict";

function setup() {
  createCanvas(500, 500);
}

/*function draw() {
  background(0)

  drawFancyRect(250, 250, 200, 200, 255, 255, 0, CENTER);
}

function drawFancyRect(x, y, w, h, r, g, b, mode) {
  push();
  fill(r, g, b);
  rectMode(mode);
  rect(x, y, w, h);
  pop();
}*/

// Instead of having lots of numbers and parameters, you can declare it in a (config) variable
function draw() {
  background(0)

  // This declared variable will stay only in function draw()
  let config = {
    x: 250,
    y: 250,
    width: 200,
    height: 200,
    fillColor: {
      r: 255,
      g: 255,
      b: 0
    },
    mode: CENTER
  };

  // Replace object parameters with declared var config as an object (here and in its function)
  drawFancyRect(config);
}

/*function drawFancyRect(config) {
  // Apply config parameters to the following p5 functions
  push();
  fill(config.fillColor.r, config.fillColor.g, config.fillColor.b);
  rectMode(config.mode);
  rect(config.x, config.y, config.width, config.height);
  pop();
}*/

// Instead of writing config. in front of every arguments, you can list the var of the config object
function drawFancyRect({
  x,
  y,
  width,
  height,
  fillColor,
  mode
}) {
  // Apply config parameters to the following p5 functions
  push();
  fill(fillColor.r, fillColor.g, fillColor.b);
  rectMode(mode);
  rect(x, y, width, height);
  pop();
}