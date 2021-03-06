/********************************
Scene 4 and SenseCheckCircle Class
Lam Ky Anh Do

This js file contains the SenseCheckCircle class, showing its constructor, how it moves and how it is displayed, and functions related to SCENE 4.
********************************/

function substatesScene4() {
  // Trigger Part 2 with a customized timer (using Ready,Set,Go Method)
  if (linkStarted === 0) {
    linkStarted = 1;
    startTime = millis();
  } else if (linkStarted === 1) {
    currentTime = millis() - startTime;
    // In 2 seconds, trigger Part 2
    if (currentTime >= 2000) {
      // Sub-state animate deep-diving effect
      linkStarted = 2;
    }
  } else {
    deepDiveScene(deepDiveImg); // Part 2


    // Trigger Part 3 with a customized timer (same method as triggering Part 2)
    if (linkStarted === 2) {
      linkStarted = 3;
      startTime = millis();
    } else if (linkStarted === 3) {
      currentTime = millis() - startTime;
      // In 3.75 second, trigger Part 3
      if (currentTime >= 3750) {
        // Sub-state animate user's sense being verified
        linkStarted = 4;
      }
    } else {
      verifyScene(); // Part 3


      // Trigger Part 4 with a customized timer (same method as triggering Part 2)
      if (linkStarted === 4) {
        linkStarted = 5;
        startTime = millis();
      } else if (linkStarted === 5) {
        currentTime = millis() - startTime;
        // In 1.5 second, trigger Part 4
        if (currentTime >= 1500) {
          // Sub-state animate chosen language
          linkStarted = 6;
        }
      } else {
        languageCheckScene(); // Part 4


        // Trigger Part 5 with a customized timer (same method as triggering Part 2)
        if (linkStarted === 6) {
          linkStarted = 7;
          startTime = millis();
        } else if (linkStarted === 7) {
          currentTime = millis() - startTime;
          // In 1.5 second, trigger Part 5
          if (currentTime >= 1500) {
            // Sub-state animate user loggin in game
            linkStarted = 8;
          }
        } else {
          inputUserDataScene(); // Part 5


          // Trigger Part 6 with a customized timer (same method as triggering Part 2)
          if (linkStarted === 8) {
            linkStarted = 9;
            startTime = millis();
          } else if (linkStarted === 9) {
            currentTime = millis() - startTime;
            // In 1.75 second, trigger Part 4
            if (currentTime >= 1750) {
              // Sub-state animate user confirming his character creation
              linkStarted = 10;
            }
          } else {
            characterConfirmationScene(); // Part 6
          } // Trigger Part 6
        } // Trigger Part 5
      } // Trigger Part 4
    } // Trigger Part 3
  } // Trigger Part 2
} // substatesScene4()

// Function to display part 2 of SCENE 4 by illustrating a pointillism effect to illustrate the "deep-diving-in-game" scene
function deepDiveScene(sourceImage) {
  background(255);
  // Display pointillism effect
  for (let i = 0; i < 10; i++) {
    // Create new x and y pos according to image
    // floor allows random to give decimal
    imgWidth = floor(random(sourceImage.width));
    imgHeight = floor(random(sourceImage.height));
    // Get image to pointillize
    let pix = sourceImage.get(imgWidth, imgHeight);
    fill(pix, 128);
    noStroke();
    ellipse(imgWidth, imgHeight, 150, 150);
  }
}

// Function to modify text during initial state of checking the 5 senses
function verifyingTextStyle() {
  fill(128, 222, 216);
  textSize(34);
}
// Function to modify text after checking 5 senses
function verifiedTextStyle() {
  fill(255);
  textSize(34);
}

// Function to display Part 3 of SCENE 4 by illustrating a zoom effect to check user's 5 senses
function verifyScene() {
  background(255);

  // Display the animation of verification process using a customized timer
  push();
  // Display initial state of circle aka one of 5 senses (TOUCH)
  image(senseCheckImg, 200, height / 4, circle.size, circle.size);
  fill(255);
  rect(200, height / 4, rectangle.width, rectangle.height);
  verifyingTextStyle();
  // Display text
  text(`Touch`, 200, height / 4);
  // Animate an automated verfication process with a customized timer (using Ready,Set,Go Method)
  if (verified === 0) {
    verified = 1;
    startTime = millis();
  } else if (verified === 1) {
    currentTime = millis() - startTime;
    // In about 0.2 second...
    if (currentTime >= 500) {
      // "Touch" circle is checked
      verified = 2;
    }
  } else {
    // Display verified sign "OK"
    fill(128, 222, 216);
    stroke(255);
    rect(200, height / 4, rectangle.width, rectangle.height);
    verifiedTextStyle()
    text(`OK`, 200, height / 4);


    // Display initial state of circle aka one of 5 senses (SIGHT)
    image(senseCheckImg, 500, 3.5 * height / 5, circle.size, circle.size);
    fill(255);
    rect(500, 3.5 * height / 5, rectangle.width, rectangle.height);
    verifyingTextStyle();
    text(`Sight`, 500, 3.5 * height / 5);
    if (verified === 2) {
      verified = 3;
      startTime = millis();
    } else if (verified === 3) {
      currentTime = millis() - startTime;
      // In about 0.5 second...
      if (currentTime >= 500) {
        // "Sight" circle is checked
        verified = 4;
      }
    } else {
      // Display verified sign "OK"
      fill(128, 222, 216);
      stroke(255);
      rect(500, 3.5 * height / 5, rectangle.width, rectangle.height);
      verifiedTextStyle()
      text(`OK`, 500, 3.5 * height / 5);


      // Display initial state of circle aka one of 5 senses (HEARING)
      image(senseCheckImg, width / 2, height / 4, circle.size, circle.size);
      fill(255);
      rect(width / 2, height / 4, rectangle.width, rectangle.height);
      verifyingTextStyle();
      text(`Hearing`, width / 2, height / 4);
      if (verified === 4) {
        verified = 5;
        startTime = millis();
      } else if (verified === 5) {
        currentTime = millis() - startTime;
        // In about 0.5 second...
        if (currentTime >= 500) {
          // "Hearing" circle is checked
          verified = 6;
        }
      } else {
        // Display verified sign "OK"
        fill(128, 222, 216);
        stroke(255);
        rect(width / 2, height / 4, rectangle.width, rectangle.height);
        verifiedTextStyle()
        text(`OK`, width / 2, height / 4);


        // Display initial state of circle aka one of 5 senses (TASTE)
        image(senseCheckImg, width - 500, 3.5 * height / 5, circle.size, circle.size);
        fill(255);
        rect(width - 500, 3.5 * height / 5, rectangle.width, rectangle.height);
        verifyingTextStyle();
        text(`Taste`, width - 500, 3.5 * height / 5);
        if (verified === 6) {
          verified = 7;
          startTime = millis();
        } else if (verified === 7) {
          currentTime = millis() - startTime;
          // In about 0.5 second...
          if (currentTime >= 500) {
            // "Taste" circle is checked
            verified = 8;
          }
        } else {
          // Display verified sign "OK"
          fill(128, 222, 216);
          stroke(255);
          rect(width - 500, 3.5 * height / 5, rectangle.width, rectangle.height);
          verifiedTextStyle()
          text(`OK`, width - 500, 3.5 * height / 5);


          // Display initial state of circle aka one of 5 senses (SMELL)
          image(senseCheckImg, width - 200, height / 4, circle.size, circle.size);
          fill(255);
          rect(width - 200, height / 4, rectangle.width, rectangle.height);
          verifyingTextStyle();
          text(`Smell`, width - 200, height / 4);
          if (verified === 8) {
            verified = 9;
            startTime = millis();
          } else if (verified === 9) {
            currentTime = millis() - startTime;
            // In about 0.5 second...
            if (currentTime >= 500) {
              // "Smell" circle is checked
              verified = 10;
            }
          } else {
            // Display verified sign "OK"
            fill(128, 222, 216);
            stroke(255);
            rect(width - 200, height / 4, rectangle.width, rectangle.height);
            verifiedTextStyle()
            text(`OK`, width - 200, height / 4);

            // Display a confirmed verification of 5 senses (using the same Ready,Set,Go Method)
            if (verified === 10) {
              verified = 11;
              startTime = millis();
            } else if (verified === 11) {
              currentTime = millis() - startTime;
              // In about 0.5 second...
              if (currentTime >= 500) {
                // All circles is checked
                verified = 12;
              }
            } else {
              // Display all circles confirmed in green
              tint(48, 240, 53);
              image(senseCheckImg, 200, height / 4, circle.size, circle.size);
              image(senseCheckImg, 500, 3.5 * height / 5, circle.size, circle.size);
              image(senseCheckImg, width / 2, height / 4, circle.size, circle.size);
              image(senseCheckImg, width - 500, 3.5 * height / 5, circle.size, circle.size);
              image(senseCheckImg, width - 200, height / 4, circle.size, circle.size);
              fill(70, 245, 92);
              rect(200, height / 4, rectangle.width, rectangle.height);
              rect(500, 3.5 * height / 5, rectangle.width, rectangle.height);
              rect(width / 2, height / 4, rectangle.width, rectangle.height);
              rect(width - 500, 3.5 * height / 5, rectangle.width, rectangle.height);
              rect(width - 200, height / 4, rectangle.width, rectangle.height);
              verifiedTextStyle();
              text(`OK`, 200, height / 4);
              text(`OK`, 500, 3.5 * height / 5);
              text(`OK`, width / 2, height / 4);
              text(`OK`, width - 500, 3.5 * height / 5);
              text(`OK`, width - 200, height / 4);
            } // Check all 5 senses is verified
          } // Check "Smell" sense
        } // Check "Taste" sense
      } // Check "Hearing" sense
    } // Check "Sight" sense
  } // Check "Touch" sense
  pop();
} // Display verifyScene()

// Function to display Part 4 of SCENE 4
function languageCheckScene() {
  background(255);

  blink += 1;
  // Display language visuals
  push();
  strokeWeight(2);
  stroke(150);
  fill(5, 131, 250);
  rect(width / 2.5, height / 4, 400, 90, 20);
  // Make chosen language blink
  if (blink % 10 === 0) {
    fill('#04ddeb');
    rect(3 * width / 5, height / 3, 400, 90, 20);
  } else {
    fill(59, 160, 255);
    rect(3 * width / 5, height / 3, 400, 90, 20);
  }
  pop();

  push();
  fill(255);
  textSize(50);
  text(`Language`, width / 2.5, height / 4);
  text(`??? English`, 3 * width / 5, height / 3);
  pop();
}

// Function to display Part 5 of SCENE 4
function inputUserDataScene() {
  background(255);

  // Set up fade-in effect
  if (fadeIn < 0) {
    fadeAmount;
  }
  fadeIn += 5;

  // Display login area
  push();
  strokeWeight(2);
  stroke(150);
  fill(5, 131, 250)
  rect(width / 2, height / 2, 700, 350, 20);
  noStroke();
  fill(255);
  rect(3 * width / 5, +height / 2, 200, 50);
  rect(3 * width / 5, 100 + height / 2, 200, 50);
  // Display login text input
  textFont(latoReg);
  textSize(50);
  text(`Log in_::`, width / 2.5, height / 3);
  textSize(28);
  textAlign(LEFT, CENTER);
  text(`:account`, 60 + width / 2, -50 + height / 2);
  text(`:password`, 60 + width / 2, 50 + height / 2);
  fill(20, 20, 20, fadeIn);
  // Display user's name first, then user's password
  text(`${userData.name}`, 60 + width / 2, height / 2);
  // Animate an automated login process with a customized timer (using Ready,Set,Go Method)
  if (inputData === 0) {
    inputData = 1;
    startTime = millis();
  } else if (inputData === 1) {
    currentTime = millis() - startTime;
    // In about 0.3 second,...
    if (currentTime >= 300) {
      // Display user's password
      inputData = 2;
    }
  } else {
    // Display user's password
    text(`${userData.password}`, 60 + width / 2, 100 + height / 2);
  }
  pop();
}

function characterConfirmationScene() {
  background(255);

  blink += 1;

  // Display login area
  push();
  strokeWeight(2);
  stroke(150);
  fill(5, 131, 250)
  rect(width / 2, height / 4, 450, 75, 20);
  rect(width / 2, 3 * height / 5, 800, 350, 20);
  fill(28, 168, 226);
  noStroke();
  rect(width / 2, 3 * height / 5, 300, 50);
  rect(-200 + width / 2, 3.7 * height / 5, 100, 50, 20);
  rect(200 + width / 2, 3.7 * height / 5, 100, 50, 20);
  // Animate a blinking effect of a textbox with a customized timer (using Ready,Set,Go Method)
  if (confirmed === 0) {
    confirmed = 1;
    startTime = millis();
  } else if (confirmed === 1) {
    currentTime = millis() - startTime;
    // In about 0.05 second, trigger Part 4
    if (currentTime >= 50) {
      // Make text box "YES" blink
      confirmed = 2;
    }
  } else {
    // Textbox "YES" is blinking
    if (blink % 10 === 0) {
      fill('#04ddeb');
      rect(-200 + width / 2, 3.7 * height / 5, 100, 50, 20);
    } else {
      fill(28, 168, 226);
      rect(-200 + width / 2, 3.7 * height / 5, 100, 50, 20);
    }


    // Trigger next state (finalScene() aka SCENE 5) with a customized timer (using Ready,Set,Go Method)
    // Part 6 of SCENE 4 is onscreen and ready to trigger SCENE 5 (READY)
    if (nextScene === 0) {
      nextScene = 1;
      startTime = millis(); // Convert time to seconds
    }
    // Once Part 6 is onscreen, start countdown timer to trigger SCENE 5 (SET)
    else if (nextScene === 1) {
      currentTime = millis() - startTime;
      // In 3.5 seconds, trigger SCENE 5 (GO)
      if (currentTime >= 3500) {
        // Sub-state is shifting to SCENE 5
        nextScene = 2;
      }
    } else {
      // SCENE 5 is triggered and displayed
      state = `finalScene`; // finalScene()
      startTime = millis();
      currentTime = 0;
    } // Transition to next state aka finalScene()
  } // Display login area

  // Display text
  fill(255);
  textFont(latoReg);
  textSize(40);
  text(`Character Creation`, width / 2, height / 4);
  textSize(28);
  text(`Beta test data still available.`, width / 2, height / 2.35);
  text(`Would you like to use it?`, width / 2, height / 2.05);
  text(`${userData.name} ${userData.gender}`, width / 2, 3 * height / 5);
  text(`YES`, -200 + width / 2, 3.7 * height / 5);
  text(`NO`, 200 + width / 2, 3.7 * height / 5);
  pop();
}