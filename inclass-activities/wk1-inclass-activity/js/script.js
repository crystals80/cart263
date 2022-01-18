/**
In-class Activity - Week 1
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

// (1) CONSTANTS FOR STRINGS
// Constants are used for repetitive var
/*const WIDTH = 500;
const HEIGHT = 500;

// For example, avoid typos & errors in repetitive code
const IMG_PATH =`assets/images`;

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
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  let =clownImg = random(clownImgs);
  image(clownImg,0,0);
}*/


// (2) PARAMETERS

function setup() {
  createCanvas(500, 500);
}

function draw() {

}


// (3) FIRST CLASS FUNCTIONS

/*function setup(){
  createCanvas(500,500);
}

function draw(){

}*/