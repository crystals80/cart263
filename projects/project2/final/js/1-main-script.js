/**
Project 2: Escape the Gamingverse
Lam Ky Anh Do

Create an escape room filled with Genshin impact content, including the puzzle
Note: I will attempt making the puzzle understandable for non- Genshin Impact players.

This JS file is a mix of p5.js, DOM and Jquery.
*/

"use strict";

let state = `title`; // Declare state(s) var

// Declare areas-related and directions-related vars
let currentArea = 0; // Set the area the player is facing

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
  } else if (state === `mondstadt`) {
    mondstadt();
  } else if (state === `liyue`) {
    liyue();
  } else if (state === `inazuma`) {
    inazuma();
  } else if (state === `sereniteaPot`) {
    sereniteaPot();
  } else if (state === `celestia`) {
    celestia();
  } else if (state === `enkanomiya`) {
    enkanomiya();
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

function title() {
  background(`#202020`);
  // 
  // push();
  // textStyling();
  // fill(`#fff5ec`);
  // text(`ESCAPE THE GAMINGVERSE`, width / 4, height / 2);
  // pop();
}

// function welcomeMsg() {
//
// }

// Function displaying the lobby of the escape room
function mondstadt() {
  background(`#1bfec5`);

  push();
  textStyling();
  text(`MONDSTADT`, width / 2, height / 2);
  pop();
}

// Function displaying the gaming area of the escape room
function liyue() {
  background(`#ffc800`);

  push();
  textStyling();
  text(`LIYUE`, width / 2, height / 2);
  pop();
}

// Function displaying the changing area of the escape room
function inazuma() {
  background(`#8203a1`);

  push();
  textStyling();
  text(`INAZUMA`, width / 2, height / 2);
  pop();
}

// Function displaying the resting area of the escape room
function sereniteaPot() {
  background(`#ffa95e`);

  push();
  textStyling();
  text(`SERENITEA POT`, width / 2, height / 2);
  pop();
}

// Function displaying the ceiling of the escape room
function celestia() {
  background(`#98f2fa`);

  push();
  textStyling();
  text(`CELESTIA`, width / 2, height / 2);
  pop();
}

// Function displaying the floor of the escape room
function enkanomiya() {
  background(`#1d2563`);

  push();
  textStyling();
  text(`ENKANOMIYA`, width / 2, height / 2);
  pop();
}

// Function storing keyboard inputs
function keyPressed() {
  if (keyCode === 77) {
    state = `mondstadt`
  } else if (keyCode === 76) {
    state = `liyue`
  } else if (keyCode === 73) {
    state = `inazuma`
  } else if (keyCode === 83) {
    state = `sereniteaPot`
  } else if (keyCode === 67) {
    state = `celestia`
  } else if (keyCode === 69) {
    state = `enkanomiya`
  }
}