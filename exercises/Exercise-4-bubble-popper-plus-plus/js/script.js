/**
Bubble Popper
Lam Ky Anh Do

Pop bubbles with your index finger as a pin
*/

"use strict";

// Declare global variables
let state = `title`;
let handpose;
let video; // User's webcam
let predictions = []; // The current set of predictions
let score = 0; // Point counter
let musicImg; // Image variable

// Declare OOP pin & bubble variables
let pins = [];
let bubbles = [];
const NUM_PIN = 1;
const NUM_BUBBLE = 20;
let thumbPin, indexPin, pinkyPin, bubble;

// Function to load images before the program runs
function preload() {
  musicImg = loadImage('assets/images/music-notes.png');
}

// Function setting up canvas and webcam
function setup() {
  // Create a canvas that is best for the ml5.js Handpose feature
  createCanvas(640, 480);

  handposeSetup();
  createPinsAndBubbles();
}

// Function to set up ml5.js handpose and classes
function handposeSetup() {
  // Access user's webcam
  video = createCapture(VIDEO)
  // Hide user's webcam till user authorizes webcam to turn on
  video.hide();

  // Load handpose model
  handpose = ml5.handpose(video, {
    // Flip video
    flipHorizontal: true
  }, function() {
    // Check if model is loaded
    console.log(`Model loaded.`);
  });

  // Listen for predictions
  handpose.on('hand', function(results) {
    console.log(results);
    predictions = results;
  });
}

// Create pins and store them in an array
function createPinsAndBubbles() {
  // Create a pin for the thumb
  thumbPin = new ThumbPin(`thumb`)
  pins.push(thumbPin);
  // Create a pin for the index
  indexPin = new IndexPin(`indexFinger`)
  pins.push(indexPin);
  // Create a pin for the pinky
  pinkyPin = new PinkyPin(`pinky`)
  pins.push(pinkyPin);

  // Create bubbles floating up and store them in an array
  bubble = new Bubble();
  for (let i = 0; i < NUM_BUBBLE; i++) {
    let bubble = new Bubble()
    bubbles.push(bubble);
  }
}

// Function to control status of program
function draw() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `ending`) {
    ending();
  }
}

// Function to set up the title screen
function title() {
  background(0)

  image(musicImg, width / 15, height / 3.5, 64, 64);
  rotate(15);
  image(musicImg, width / 2.5, height / 12, 64, 64);
  rotate(-10);
  image(musicImg, width / 2.25, height / 2.5, 64, 64);
  displayGradientHand();
}

// Function to display visuals relating to simulation
function displayGradientHand() {
  // Set colour mode and parameters for the ellipse
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);

  // Set up a blue-purple-tinted radial gradient
  radialGradient(
    width / 2 - 40, height / 2 - 50, 0,
    width / 2 - 40, height / 2 - 50, 350,
    color(175, 100, 100, 100),
    color(305, 100, 100, 100)
  );

  // Draw a hand with ellipse
  ellipse(width / 3.5, 3.5 * height / 5, 75, 80);
  angleMode(DEGREES)
  rotate(-20);
  ellipse(width / 30, 2.75 * height / 5, 10, 40);
  rotate(10);
  ellipse(width / 6, 2.4 * height / 5, 10, 50);
  rotate(15);
  ellipse(width / 3, 1.8 * height / 5, 10, 60);
  rotate(20);
  ellipse(width / 2, height / 5.25, 10, 55);
  translate(315, -110);
  rotate(35);
  ellipse(width / 3, height / 3, 10, 40);
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  // drawingContext.strokeStyle = gradient;
  drawingContext.fillStyle = gradient;
}

// Function to run ml5.js handpose and classes, and to display text and score
function simulation() {
  background(0);

  // For every bubble object in the bubbles array, call the display and move functions
  for (let i = 0; i < pins.length; i++) {
    let pin = pins[i];
    pin.update(predictions)
  }

  // For every bubble object in the bubbles array, call the display and move functions
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.update()
  }

  // Display point counter
  push();
  fill(255);
  textAlign(LEFT, TOP);
  textSize(16);
  text(score, width - 100, 25);
  pop();
}

function mousePressed() {
  if (state === `title` && mouseIsPressed) {
    state = `simulation`
  }
}