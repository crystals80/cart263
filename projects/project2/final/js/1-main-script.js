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

// Declare images vars
let bgMonstadt, bgLiyue, bgInazuma, bgSereniteaPot, bgCelestia, bgEnkanomiya, bgCarpet;
// Declare fonts vars
let extraBold;

// Function loading fonts, images and sounds
function preload() {
  // Load fonts
  extraBold = loadFont(`assets/fonts/Montserrat-ExtraBold.ttf`);
  // Load images
  bgMonstadt = loadImage(`assets/images/mondstadt.png`);
  bgLiyue = loadImage(`assets/images/liyue.png`);
  bgInazuma = loadImage(`assets/images/inazuma.png`);
  bgSereniteaPot = loadImage(`assets/images/serenitea-pot.png`);
  bgCelestia = loadImage(`assets/images/celestia.png`);
  bgEnkanomiya = loadImage(`assets/images/enkanomiya.png`);
  bgCarpet = loadImage(`assets/images/lifted-carpet.png`);
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
    // } else if (state === `welcomeMsg`) {
    //   welcomeMsg();
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

}


// Function displaying the lobby of the escape room
function mondstadt() {
  background(bgMonstadt);
}

// Function displaying the gaming area of the escape room
function liyue() {
  background(bgLiyue);
}

// Function displaying the changing area of the escape room
function inazuma() {
  background(bgInazuma);
}

// Function displaying the resting area of the escape room
function sereniteaPot() {
  background(bgSereniteaPot);
}

// Function displaying the ceiling of the escape room
function celestia() {
  background(bgCelestia);
}

// Function displaying the floor of the escape room
function enkanomiya() {
  background(bgEnkanomiya);

  push();
  noFill();
  noStroke();
  ellipse(610, 300, 475, 475);
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

function mousePressed() {
  if (state === `enkanomiya` && mouseIsPressed) {
    let d = dist(mouseX, mouseY, 610, 300);
    if (d < 50) {
      // Change background image
      bgEnkanomiya = bgCarpet;
    }
  }
}