/**
Bubble Popper
Lam Ky Anh Do

Pop bubbles with your index finger as a pin
*/

"use strict";

// Declare global variables
let handpose;
let video; // User's webcam
let predictions = []; // The current set of predictions
let score = 0; // Point counter

// Declare OOP pin & bubble variables
let pins = [];
let bubbles = [];
const NUM_PIN = 1;
const NUM_BUBBLE = 20;
let thumbPin, indexPin, pinkyPin, bubble;

// Function setting up canvas and webcam
function setup() {
  // Create a canvas that is best for the ml5.js Handpose feature
  createCanvas(640, 480);

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

  // Create pins and store them in an array
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

// Function to draw handpose
function draw() {
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

  push();
  fill(255);
  textAlign(LEFT, TOP);
  textSize(16);
  text(score, width - 100, 25);
  pop();
}