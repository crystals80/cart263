/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

Reanimate an opening scene from Sword Art Online (SAO)

Note: whether I say program, simulation or animation, it refers to the (re)animation of a scene from SAO.
*/

"use strict";

let state = `gearUpScene`; // Set up state variable for the simulation

let angle = 0; // Set angle in degrees at 0
let industryLight, philosopher; // Font vars
// Vars for time shown on clock
let timer, counter;
let seconds, minutes;

// Funtion to preload fonts, images and sounds
function preload() {
  industryLight = loadFont('assets/fonts/Industry-Light.ttf');
  // playfairDisplay = loadFont('assets/fonts/Playfair-Display-Regular.ttf');
  philosopher = loadFont('assets/fonts/Philosopher-Regular.ttf');
}

// Function to set up program
function setup() {
  createCanvas(windowWidth, windowHeight);

  // rectMode(CENTER); // Set rect(s) location to its center
  angleMode(DEGREES); // Set rotation angle to degrees instead of radians
}

// Function to run the program
function draw() {
  // Display states
  if (state === `title`) {
    title();
  } else if (state === `openingScene`) {
    openingScene();
  } else if (state === `gearUpScene`) {
    gearUpScene();
  }

  //else if (state === `waitingScene`) {
  //   waitingScene();
  // }
}

// Function to set up the title screen before running the simulation
function title() {
  background(20);

  push();
  textFont(philosopher);
  fill(237);
  textSize(90);
  textAlign(CENTER, CENTER);
  text(`Hello there!`, width / 2, height / 3);
  textSize(50);
  text(`Thank you for purchasing our game!`, width / 2, 1.75 * height / 3);
  textSize(36);
  text(`Are you ready to deep dive into a fantasy?`, width / 2, 2 * height / 3);
  textSize(16);
  text(`Click anywhere to start!`, width / 2, height - 55);
  pop();
}

// Function to display the 1st scene of the animation
function openingScene() {
  // Set background for digital clock's frame
  background(121, 123, 130); // Grey

  // Display digital's clock background
  push();
  rectMode(CENTER);
  stroke(0);
  fill(181, 230, 235); // Pastel teal
  rect(width / 2, height / 2, 1200, height);
  pop();

  // Display date on the top-left corner
  push();
  textFont(industryLight);
  fill(0);
  textSize(80);
  textAlign(RIGHT, CENTER);
  text(`2022/11/06 sun`, 10 + width / 2, 100);
  countUp()
  pop();
}

// Function to set up a count-up timer to display the time of a clock
function countUp() {
  // Convert time to seconds as an integer
  timer = int(millis() / 1000);
  // Set timer at 55 seconds
  counter = timer + 55;

  if (counter < 55) {
    // 1 counter = 1 second
    counter++;
  } else if (counter === 60) {
    state = `gearUpScene`;
  }

  // Convert count-up timer into a hour-minute-second format
  minutes = floor(counter / 60);
  seconds = counter % 60;

  // Convert the number to a string
  let numberString = `${seconds}`;
  // Use padStart to add the number 0 to the front making sure there are always two digits long when the clock indicates time under 10 seconds
  numberString = numberString.padStart(2, `0`);

  // Display count-up timer
  push();
  textFont(industryLight);
  fill(0);
  textSize(210);
  textAlign(CENTER, CENTER);
  text(`12:5${minutes+5}:${numberString}`, width / 2, 2.3 * height / 4);
  pop();
}

// Function to display the 2nd scene of the animation
function gearUpScene() {
  // Set up background as a wall
  background(20); // Dark-Grey

  // Display a telephone wall outlet
  push();
  rectMode(CENTER);
  stroke(20);
  // Display digital's clock background
  fill(121, 123, 130); // Grey
  rect(width / 2, height / 2, 400, 600); // Display a telephone wall plate
  rect(width / 2, 250, 150); // Display a modular jack frame 1
  rect(width / 2, height - 250, 150); // Display a Modular jack frame 2
  noStroke();
  fill(40); // Dark grey
  // Display a modular jack 1
  rect(width / 2, 245, 30, 40);
  rect(width / 2, 255, 65, 40);
  rect(width / 2, 275, 80, 60);
  // Display a modular jack 2
  rect(width / 2, height - 255, 30, 40);
  rect(width / 2, height - 245, 65, 40);
  rect(width / 2, height - 225, 80, 60);
  pop();
}


// Function to set up mouse clicks
function mousePressed() {
  if (state === `title`) {
    state = `openingScene`;
  }
}