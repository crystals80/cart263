/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

JS file for the 2nd scene of the animation (gearUpScene), which consists of wallSocket() that's already inserted in the main script and substatesScene2() compiling all the following functions as a sub-state to gearUpScene(): pluggedIn(), powerOn(), powerOnPOW() and powerOnWAN().
*/

// Function to display part 1 of SCENE 2
function wallSocket() {
  // Set up background as a wall
  background(20); // Dark-Grey

  // Display a telephone wall outlet
  push();
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






// Function comppiling all sub-states of SCENE 2
function substatesScene2() {
  // Trigger Part 2 with a customized timer (using Ready,Set,Go Method)
  // Part 1 is onscreen and ready to trigger Part 2 (READY)
  if (isPluggedIn === 0) {
    isPluggedIn = 1;
    startTime = millis(); // Convert time to seconds
  }
  // Once Part 1 is onscreen, start countdown timer to trigger Part 2 (SET)
  else if (isPluggedIn === 1) {
    currentTime = millis() - startTime;
    // In 1 second, trigger Part 2 (GO)
    if (currentTime >= 1000) {
      // Sub-state now includes Parts 1 & 2
      isPluggedIn = 2;
    }
  } else {
    // Part 2 is triggered and remains visible with Part 1
    pluggedIn(); // Part 2


    // Trigger Part 3 with a customized timer (same method as triggering Part 2)
    if (isPluggedIn === 2) {
      isPluggedIn = 3;
      startTime = millis();
    } else if (isPluggedIn === 3) {
      currentTime = millis() - startTime;
      // In 0.5 second, trigger Part 3
      if (currentTime >= 500) {
        // Sub-state now displays a headgear (Nerve Gear)
        isPluggedIn = 4;
      }
    } else {
      powerOn(); // Part 3


      // Trigger Part 4 (Light POW) with a customized timer (same method as triggering Part 2)
      if (isPluggedIn === 4) {
        isPluggedIn = 5;
        startTime = millis();
      } else if (isPluggedIn === 5) {
        currentTime = millis() - startTime;
        // In 0.5 second, trigger Part 4a
        if (currentTime >= 500) {
          // Sub-state includes Part 3 with Part 4a
          isPluggedIn = 6;
        }
      } else {
        powerOnPOW(); // Part 4


        // Trigger Part 4 (Light WAN) with a customized timer (same method as triggering Part 2)
        if (isPluggedIn === 6) {
          isPluggedIn = 7;
          startTime = millis();
        } else if (isPluggedIn === 7) {
          currentTime = millis() - startTime;
          // In around 5 milliseconds, trigger Part 4b
          if (currentTime >= 70) {
            // Sub-state includes Part 4b with Parts 3-4a
            isPluggedIn = 8;
          }
        } else {
          powerOnWAN(); // Part 4


          // Trigger next state (waitingScene() aka SCENE 3) with a customized timer (using Ready,Set,Go Method)
          // Part 4 of SCENE 2 is onscreen and ready to trigger SCENE 3 (READY)
          if (nextScene === 0) {
            nextScene = 1;
            startTime = millis(); // Convert time to seconds
          }
          // Once Part 4 is onscreen, start countdown timer to trigger SCENE 3 (SET)
          else if (nextScene === 1) {
            currentTime = millis() - startTime;
            // In 4.5 seconds, trigger SCENE 3 (GO)
            if (currentTime >= 4500) {
              // Sub-state is shifting to SCENE 3
              nextScene = 2;
            }
          } else {
            // SCENE 3 is triggered and displayed
            state = `waitingScene`; // SCENE 3
            startTime = millis();
            currentTime = 0;
          } // Transition to next state aka waitingScene()
        } // Trigger Part 4 (Light WAN)
      } // Trigger Part 4 (Light POW)
    } // Trigger Part 3
  } // Trigger Part 2
} // substatesScene2()





// Function to display part 2 of SCENE 2 by drawing a plugged in cable
function pluggedIn() {
  // Display the modular jack 1 plugged in
  push();
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

// Function to display part 3 of SCENE 2
function powerOn() {
  fill(5); // Colour rect(s) in black

  push();
  // Create background with image
  image(nerveGearImg, width / 2, height / 2, width, height);
  // Create light source (rectangle) for `POW`
  translate(width - 175, 350);
  rotate(60);
  rect(0, 0, 20, 30, 2);
  pop();

  push();
  // Create light source (rectangle) for `WAN`
  translate(width - 150, 400);
  rotate(60);
  rect(0, 0, 20, 30, 2);
  pop();

  push();
  // Create light source (rectangle) for `BLK`
  translate(width - 125, 450);
  rotate(60);
  rect(0, 0, 20, 30, 2);
  pop();
}

// Function to display part 4 of SCENE 2 by turning on the POW light source
function powerOnPOW() {
  push();
  // Create light source (rectangle) for `POW` by adding glowing effect
  drawingContext.shadowBlur = 32; // See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur
  drawingContext.shadowColor = color(89, 185, 79); // See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor
  fill(89, 185, 79);
  translate(width - 175, 350);
  rotate(60);
  rect(0, 0, 20, 30, 2);
  pop();
}

// Function to display part 4 of SCENE 2 by turning on the WAN light source
function powerOnWAN() {
  push();
  // Create light source (rectangle) for `WAN` by adding glowing effect
  drawingContext.shadowBlur = 32; // See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur
  drawingContext.shadowColor = color(89, 185, 79); // See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor
  fill(89, 185, 79);
  translate(width - 150, 400);
  rotate(60);
  rect(0, 0, 20, 30, 2);
  pop();
}