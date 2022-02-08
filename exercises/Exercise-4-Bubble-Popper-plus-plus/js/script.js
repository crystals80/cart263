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


// Declare OOP pin & bubble variables
let pins = [];
let bubbles = [];
const NUM_PIN = 1;
const NUM_BUBBLE = 5;
let pin, bubble;

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
  // pin = new Pin(fingerName);
  let thumbPin = new Pin(`thumb`)
  pins.push(thumbPin);

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
}

// Function to reset bubble position once the previous bubble is popped
// function resetBubble() {
// Check if bubble pops
//   let d = dist(tipX, tipY, bubble.x, bubble.y);
//   if (d < bubble.size / 2) {
//     bubble.x = random(width);
//     bubble.y = height;
//   }
// }