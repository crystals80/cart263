/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

Reanimate an opening scene from Sword Art Online (SAO)

Note: whether I say program, simulation or animation, it refers to the (re)animation of a scene from SAO.
*/

"use strict";

// Global vars for any function
let state = `gearUpScene`; // Set up state variable for the simulation
let nerveGearImg, innerNerveGearImg; // Images vars
let industryLight, industryBold, philosopher, latoReg; // Font vars
let angle = 0; // Set angle in degrees at 0 ()

// Vars for customizable time-delay timers
let currentTime = 0; // Timer var at 0 second
let startTime = 0; // Countdown timer var

// Vars for time shown on clock (openingScene & waitingScene)
let timer, counter;
let seconds, minutes;

// Set up time-delay variables for SCENE 2 (gearUpScene)
let isPluggedIn = 0; // Sub-state var for parts 2-3-4 of SCENE 2
let nextScene = 0; // Transition var for chnaging state with time delay

// Funtion to preload fonts, images and sounds
function preload() {
  // LOAD FONTS
  industryLight = loadFont('assets/fonts/Industry-Light.ttf');
  industryBold = loadFont('assets/fonts/Industry-Bold.ttf');
  latoReg = loadFont('assets/fonts/Lato-Regular.ttf');
  philosopher = loadFont('assets/fonts/Philosopher-Regular.ttf');
  // LOAD IMAGES
  nerveGearImg = loadImage('assets/images/nerve-gear.jpg')
  innerNerveGearImg = loadImage('assets/images/inner-nerve-gear.jpg')
  // LOAD SOUNDS
}

// Function to set up program
function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER); // Set rect(s) location to its center
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
  } else if (state === `waitingScene`) {
    waitingScene();
  } else if (state === `linkStartScene`) {
    linkStartScene();
  }
}

// Function to set up the title screen before running the simulation
function title() {
  background(20);

  push();
  textFont(philosopher);
  fill(255);
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
  digitalClockCountUp()
  pop();
}

// Function to set up a count-up timer to display the time of a clock
function digitalClockCountUp() {
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
  wallSocket(); // Part 1
  substatesScene2(); // Parts 2-3-4
} // gearUpScene() as Part 1

let blinkingStartTime = 0;
let blinkingCurrentTime = 0;
let blinkingSemiColon = `:`;

// Function to display the 3rd scene of the animation
function waitingScene() {
  currentTime = millis() - startTime;
  if (currentTime <= 5000) {

    blinkingCurrentTime = Math.floor((millis() - blinkingStartTime) / 500);
    if (blinkingCurrentTime % 2 == 0) {
      blinkingSemiColon = `:`;
    } else {
      blinkingSemiColon = ` `
    }
    console.log(blinkingCurrentTime);

    push();
    // Create background with image
    imageMode(CENTER);
    image(innerNerveGearImg, width / 2, height / 2, width, height);
    textFont(industryBold);
    fill(210);
    strokeWeight(2.5);
    stroke(20);
    textSize(75);
    textAlign(LEFT, CENTER);
    text(`12${blinkingSemiColon}59`, 90, 80);
    pop();
  } else if (currentTime <= 6000) {
    timeOnHeadGear();
  } else {
    state = `linkStartScene`;
  }


  // Trigger a count-up time (timeOnHeadGear()) with a customized timer (using Ready,Set,Go Method)
  // SCENE 3 is onscreen and ready to trigger timeOnHeadGear() (READY)
  if (nextScene === 3) {
    nextScene = 4;
    startTime = millis(); // Convert time to seconds
  }
  // Once SCENE 3 is onscreen, start countdown timer to trigger timeOnHeadGear() (SET)
  else if (nextScene === 4) {
    currentTime = millis() - startTime;
    // In 5 seconds, trigger timeOnHeadGear() (GO)
    if (currentTime >= 5000) {
      // Sub-state is shifting to timeOnHeadGear()
      nextScene = 5;
    }
  } else {
    // timeOnHeadGear() is triggered and displayed
    // timeOnHeadGear();
  } // Transition to next state aka linkStartScene()
}

// Function to set up a count-up timer to display the time of a clock
function timeOnHeadGear() {
  push();
  // Create background with image
  imageMode(CENTER);
  image(innerNerveGearImg, width / 2, height / 2, width, height);
  pop();
  // Convert time to seconds as an integer
  // timer = int((millis() - 18000) / 1000);
  // // Set timer at 55 seconds
  // counter = timer + 59;
  //
  // if (counter < 59) {
  //   // 1 counter = 1 second
  //   counter += 1;
  //   // After a timed delay and the time becomes 13:00, trigger next state (linkStartScene() aka SCENE 4)
  // } else if (counter === 60) {
  //   // state = `linkStartScene`;
  // }
  //
  // // Convert count-up timer into a hour-minute-second format
  // minutes = floor(counter / 60);
  // seconds = counter % 60;
  //
  // // Convert the number to a string
  // let numberString = `${seconds}`;
  // // Use padStart to add the number 0 to the front making sure there are always two digits long when the clock indicates time under 10 seconds
  // numberString = numberString.padStart(2, `0`);

  // Display count-up timer
  push();
  textFont(industryBold);
  fill(210);
  strokeWeight(2.5);
  stroke(20);
  textSize(75);
  textAlign(LEFT, CENTER);
  text(`13:00`, 90, 80);
  pop();
}

function linkStartScene() {
  background(255);
}

// Function to set up mouse clicks
function mousePressed() {
  if (state === `title`) {
    state = `openingScene`;
  }
}