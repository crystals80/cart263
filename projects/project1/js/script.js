/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

Reanimate an opening scene from Sword Art Online
*/

"use strict";

let angle = 0; // Set angle in degrees at 0
let industryLight; // Font var
// Vars for time shown on clock
let timer, counter;
let seconds, minutes;

// Funtion to preload fonts, images and sounds
function preload() {
  industryLight = loadFont('assets/fonts/Industry-Light.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // rectMode(CENTER); // Set rect(s) location to its center
  angleMode(DEGREES); // Set rotation angle to degrees instead of radians
}

function draw() {
  // Set background for digital clock
  background(181, 230, 235);

  // Create the frames of digital clock
  push();
  stroke(0);
  fill(121, 123, 130);
  rect(0, 0, 175, height);
  rect(width - 175, 0, 175, height);
  pop();

  // Display date on the top-left corner
  push();
  textFont(industryLight);
  fill(0);
  textSize(80);
  textAlign(RIGHT);
  text(`2022/11/06 sun`, 50 + width / 2, 125);
  countUp()
  pop();
}

// Set a count-up timer to display the time of a clock
function countUp() {
  // Convert time to seconds as an integer
  timer = int(millis() / 1000);
  // Set timer at 55 seconds
  counter = timer + 55;

  if (counter < 55) {
    // 1 counter = 1 second
    counter++;
  }
  // Convert count-up timer into a hour-minute-second format
  minutes = floor(counter / 60);
  seconds = counter % 60;

  // Convert your number to a string
  let numberString = `${seconds}`;
  // Use padStart to add 0s to the front to make sure it's always two characters (digits) long
  numberString = numberString.padStart(2, `0`);

  // Display count-up timer
  push();
  textFont(industryLight);
  fill(0);
  textSize(180);
  textAlign(CENTER);
  text(`12:5${minutes+5}:${numberString}`, width / 2, 2.5 * height / 4);
  pop();
}