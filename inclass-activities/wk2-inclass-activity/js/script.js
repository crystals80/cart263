/**
In-class Activity - Week 2
Lam Ky Anh Do

Reviewing lecture 1

1- Constants for strings? How to know when to do what?
 - Path names?
2- Parameters (when to use them? classes vs functions?)
 - x, y, size?
3- First class functions
 - setTimeout()? Maybe showing text for a specific amount of time by switching off text
*/

"use strict";

function setup() {
  createCanvas(500, 500);
}

// (1) CONSTANTS FOR STRINGS
// Constants are used for repetitive var
/*const WIDTH = 500;
const HEIGHT = 500;

// For example, avoid typos & errors in repetitive code
const IMG_PATH =`assets/images`;
const NUM_CLOWN_IMGS = 13;

let clownImgs = []

function preload() {
  // So instead of writing the whole image path...
  //clownImg[0] = loadImage(`assets/images/clown0.png`);
  //clownImg[1] = loadImage(`assets/images/clown1.png`);
  //clownImg[2] = loadImage(`assets/images/clown2.png`);
  // You replace the path by the constant var [ALWAYS inside ${}]
  clownImg[0] = loadImage(`${IMG_PATH}/clown0.png`);
  clownImg[1] = loadImage(`${IMG_PATH}/clown1.png`);
  clownImg[2] = loadImage(`${IMG_PATH}/clown2.png`);
  // Can also reduce it down like this
  for (let = i; i < NUM_CLOWN_IMGS; i++) {
  clownImgs[i] = loadImage(`${IMG_PATH}/clown${i}.png`);
}
}

function draw() {
  let =clownImg = random(clownImgs);
  image(clownImg,0,0);
}*/


// (2) PARAMETERS

//let msg = `NOW YOU SEE ME`;
//let msgVisible = true;

// Instead of declaring many var separately, declare them ad parameter objects
/*let msg = {
  text: `NOW YOU SEE ME`,
  visible: true
}

function draw() {
  background(0);

  // Display msg (or not)
  if (msg.text === true) {
    push();
    fill(255);
    text(msg, 100, 100); // Text size automatically set at 16 pt
    pop();
  }
}

// You can add function manually in console to hide text
function hideMsg() {
  msg.visible = false;
}*/


// (3) FIRST CLASS FUNCTIONS

/*let msg = {
  text: `NOW YOU SEE ME`,
  visible: true,
  hideDelay: 2000
}

function draw() {
  background(0);

  // Display msg (or not)
  if (msg.text === true) {
    push();
    fill(255);
    text(msg, 100, 100); // Text size automatically set at 16 pt
    pop();
  }
  hideMsg(); // to add 1st-class function but not necessary & basically find var hideMsg and run it
}

// Hiding msg after a delay time
function hideMsg() {
  msg.visible = false;
}

// Another way to write function but less clean though more true
// let hideMsg = function () {
//   msg.visible = false;
// }

function mousePressed() {
  //setTimeout(hideMsg, 2000);
  setTimeout(hideMsg, msg.hideDelay);
}

// Can also write hideMsg function like this, putting it inside mousePressed()
// function mousePressed() {
//   let hideMsg = function() {
//     msg.visible = false;
//   }
//   setTimeout(hideMsg, msg.hideDelay);
// }

// Can also write anonymous function
// This is repulsive to look at because not clean and confusing perhaps
// function mousePressed() {
//   setTimeout(function (){
//     msg.visible = false;
//   }, msg.hideDelay);
}

// Not a very good example to use () nor practical but good to know
// function mousePressed() {
//   //setTimeout(hideMsg, 2000);
//   // hideMsg = don't get function right away
//   // getMsgDelay() = get function immediately (as long as the () is there)
//   setTimeout(hideMsg, getMsgDelay());
// }
//
// function getMsgDelay(){
//   return msg.hideDelay;
// }
*/