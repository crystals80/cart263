/**
Project 2: Escape the Gamingverse
Lam Ky Anh Do

Create an escape room filled with Genshin impact content, including the puzzle

Note: I will attempt making the puzzle understandable for non- Genshin Impact players.
*/

"use strict";

let state = `lobby`; // Declare state(s) var

// Declare fonts vars
let extraBold;

// Function loading fonts, images and sounds
function preload() {
  extraBold = loadFont(`assets/fonts/Montserrat-ExtraBold.ttf`);
}

// Function configurating the simulation
function setup() {
  createCanvas(1200, 600);
}

// Function running the simulation
function draw() {
  // Set states as scenes for simulation
  if (state === `title`) {
    title();
  } else if (state === `welcomeMsg`) {
    welcomeMsg();
  } else if (state === `lobby`) {
    lobby();
  } else if (state === `gamingArea`) {
    gamingArea();
  } else if (state === `changingArea`) {
    changingArea();
  } else if (state === `restingArea`) {
    restingArea();
  } else if (state === `ceiling`) {
    ceiling();
  } else if (state === `floor`) {
    floor();
  } else if (state === `ending`) {
    ending();
  }
}

// Function styling p5.js text
function textStyling() {
  textFont(extraBold);
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(`#202020`);
}

// Function displaying the lobby of the escape room
function lobby() {
  background(`#30c990`);

  push();
  textStyling();
  text(`LOBBY`, width / 2, height / 2);
  pop();
}

// Function displaying the gaming area of the escape room
function gamingArea() {
  background(`#fd2663`);

  push();
  textStyling();
  text(`GAMING AREA`, width / 2, height / 2);
  pop();
}

// Function displaying the changing area of the escape room
function changingArea() {
  background(`#8203a1`);

  push();
  textStyling();
  text(`CHANGING AREA`, width / 2, height / 2);
  pop();
}

// Function displaying the resting area of the escape room
function restingArea() {
  background(`#1d2563`);

  push();
  textStyling();
  text(`RESTING AREA`, width / 2, height / 2);
  pop();
}

// Function displaying the ceiling of the escape room
function ceiling() {
  background(`#b8e12b`);

  push();
  textStyling();
  text(`CEILING`, width / 2, height / 2);
  pop();
}

// Function displaying the floor of the escape room
function floor() {
  background(`#131635`);

  push();
  textStyling();
  text(`FLOOR`, width / 2, height / 2);
  pop();
}