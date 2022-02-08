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
let bubble;

// const video = document.getElementById('video');


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

  // Set up bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }
}

// Function to draw handpose
function draw() {
  background(0);

  // Set coordinates of index finger
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Display index finger as a pin
    // Draw a line connecting the tip of index finger to its base (Pin body)
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    // Draw a circle at the base of the index finger (Pin head)
    push();
    nostroke();
    fill(255, 255, 0);
    ellipse(baseX, baseY, 20, 20);
    pop();

    // Check if bubble pops
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  // Move bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  // Set bubble position (move it into canvas)
  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  // Display bubble
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse();
  pop();
}