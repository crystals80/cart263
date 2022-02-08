/**
Bubble Popper
Lam Ky Anh Do

Generate a randomized spy profile for the user and password protecting it
*/

"use strict";

let;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(100, 100, 100);


  push();
  textFont(`Courier,monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  text(profile, 100, 100);
  pop();
}


function mousePressed() {

}