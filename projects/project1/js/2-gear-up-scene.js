/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

JS file for the 2nd scene of the animation (gearUpScene)
*/

// Function to display the beginning of scene 2
function wallSocket() {
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
  // setTimeout(pluggedIn, 1000);
}

setTimeout(pluggedIn, 1000);

// Function to draw a cable for the 2nd scene
function pluggedIn() {
  // Display the modular jack 1 plugged in
  push();
  rectMode(CENTER);
  stroke(40);
  fill(200); // Light grey
  // Display a modular connector
  rect(width / 2, 245, 30, 40);
  rect(width / 2, 255, 65, 40);
  rect(width / 2, 275, 80, 60);
  // Making the modular connector 3D
  fill(170); // mid-light grey
  rect(width / 2, 235, 25, 15);
  rect(width / 2, 246, 55, 15);
  rect(width / 2, 240, 10, 30);
  fill(60); // Mid-dark grey
  noStroke();
  rect(width / 2, 275, 70, 50);
  // Display the cord of connected to the modular connector to make a cable
  fill(255);
  ellipse(770, 285, 30, 50);
  strokeWeight(1);
  fill(255);
  beginShape();
  curveVertex(930, height + 70);
  curveVertex(860, height + 30);
  curveVertex(870, 700);
  curveVertex(840, 600);
  curveVertex(775, 420);
  curveVertex(755, 290);
  curveVertex(780, 270);
  curveVertex(800, 400);
  curveVertex(865, 580);
  curveVertex(895, 680);
  curveVertex(885, height + 10);
  curveVertex(865, height + 50);
  endShape();
  pop();
}