/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

Reanimate an opening scene from Sword Art Online (SAO)

Note: whether I say program, simulation or animation, it refers to the (re)animation of a scene from SAO.
*/

"use strict";

// Global vars for any function
let state = `title`; // Set up state variable for the simulation
let industryLight, industryBold, philosopher, latoReg; // Font vars
let nerveGearImg, innerNerveGearImg, deepDiveImg, imgWidth, imgHeight, senseCheckImg; // Images vars
let sceneAudio; // Audio var
let angle = 0; // Set angle in degrees at 0 ()

// Vars for customizable time-delay timers
let currentTime = 0; // Timer var at 0 second
let startTime = 0; // Countdown timer var

// Vars for pop-up messages in the beginning of title screen
let userData = {
  name: `user`,
  password: `secret pass`,
  character: `Kirito`,
  gender: `X`
};

// Vars for time shown on clock (openingScene & waitingScene)
let timer, counter;
let seconds, minutes;
let timerStarted = 0; // Transition var to display count-up timer

// Set up time-delay vars for SCENE 2 (gearUpScene)
let isPluggedIn = 0; // Sub-state var for parts 2-3-4 of SCENE 2
let nextScene = 0; // Transition var for changing state with time delay

// Set up time-delay vars for SCENE 3 (waitingScene) specifically for blinking effect
let blinkingStartTime = 0;
let blinkingCurrentTime = 0;
let blinkingSemiColon = `:`;

// Set up time-delay vars for SCENE 4 (linkStartScene)
let linkStarted = 0; // Sub-state var for parts 2-3-4-5-6 of SCENE 4
let verified = 0; // Set up time-delay var to animate visuals (Part 3)
let blink = 0; // Var for textbox blinking effect (Part 4)
let inputData = 0; // Set up time-delay var to animate text (Part 5)
let confirmed = 0; // Set up time-delay var to animate textbox (Part 6)

// Set up visuals var for Part 3 of SCENE 4 (verifyScene)
let circle = {
  size: 325,
};
let rectangle = {
  width: 125,
  height: 50
};

// Vars for easing animation to make text appear
let fadeIn;
let fadeAmount = 1;

// Set up time-delay var for SCENE 5 (linkStartScene)
let inGame = 0; // Sub-state var the final SCENE 5

// Funtion to preload fonts, images and sounds
function preload() {
  // LOAD FONTS
  industryLight = loadFont('assets/fonts/Industry-Light.ttf');
  industryBold = loadFont('assets/fonts/Industry-Bold.ttf');
  latoReg = loadFont('assets/fonts/Lato-Regular.ttf');
  philosopher = loadFont('assets/fonts/Philosopher-Regular.ttf');
  // LOAD IMAGES
  nerveGearImg = loadImage('assets/images/nerve-gear.jpg');
  innerNerveGearImg = loadImage('assets/images/inner-nerve-gear.jpg');
  deepDiveImg = loadImage('assets/images/deepdiving.png');
  senseCheckImg = loadImage('assets/images/sense-check-circle.png');
  // LOAD SOUNDS
  sceneAudio = loadSound('assets/sounds/sao-scene-edit.mp3');
}

// Function to set up program
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up pop up message allowing user to type in their username and password
  let data = JSON.parse(sessionStorage.getItem(`web-storage-sao-reanimation`));
  // Replaced undetermined username and password by user's data
  if (data != null) {
    userData.name = data.name;
    userData.password = data.password;
    userData.gender = data.gender;
  } else {
    // Ask user their username and password
    userData.name = prompt(`[You have 30 seconds] What is your username? (1-10 characters)`);
    userData.password = prompt(`What is your password? (1-10 characters)`);
    userData.gender = prompt(`What is your gender? (M, F, X)`);
    localStorage.setItem(`web-storage-sao-reanimation`, JSON.stringify(userData));
  }

  // Set up pointillism background image for Part 2 of SCENE 4
  // NOTE: To set up pointillism background in different states, every image is required to be set up separately for it to work
  push();
  // Declare width and height for title screen background image
  imgWidth = deepDiveImg.width;
  imgHeight = deepDiveImg.height;
  // Center the background image
  imageMode(CENTER);
  // Resize the background image to window size
  deepDiveImg.resize(windowWidth, windowHeight);
  // Delete border of the background image
  noStroke();
  deepDiveImg.loadPixels();
  pop();

  fadeIn = 0; // Set up var for an easing animation for text to appear

  rectMode(CENTER); // Center rect(s)
  textAlign(CENTER, CENTER); // Align text to the center horizontally and vertically
  imageMode(CENTER); // Center image(s)
  angleMode(DEGREES); // Set rotation angle to degrees instead of radians
}

// Function to run the program
function draw() {
  // Display states
  if (state === `title`) {
    title();
  } else if (state === `openingScene`) {
    openingScene(); // SCENE 1
  } else if (state === `gearUpScene`) {
    gearUpScene(); // SCENE 2
  } else if (state === `waitingScene`) {
    waitingScene(); // SCENE 3
  } else if (state === `linkStartScene`) {
    linkStartScene(); // SCENE 4
  } else if (state === `finalScene`) {
    finalScene(); // SCENE 5
  }
}

// Function to set up the title screen before running the simulation
function title() {
  background(20);

  push();
  textFont(philosopher);
  fill(255);
  textSize(90);
  text(`Hello ${userData.name}!`, width / 2, height / 3);
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

  // Trigger count-up timer with a customized timer (using Ready,Set,Go Method)
  // SCENE 1 is onscreen and ready to trigger count-up timer (READY)
  if (timerStarted === 0) {
    timerStarted = 1;
    startTime = millis(); // Convert time to seconds
  }
  // Once SCENE 1 is onscreen, start countdown timer to trigger count-up timer (SET)
  else if (timerStarted === 1) {
    currentTime = millis() - startTime;
    // Trigger count-up timer immediately (GO)
    if (currentTime >= 10) {
      // Display count-up timer
      timerStarted = 2;
    }
  } else {
    // Count-up timer is triggered and displayed
    digitalClockCountUp()
  }

  playAudio(); // Play audio
}

// Play audio for animation
function playAudio() {
  // If bubblySFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!sceneAudio.isPlaying() && state === `gearUpScene`) {
    sceneAudio.play(); // Replay background music after it ends
  }
}

// Function to set up a count-up timer to display the time of a clock
function digitalClockCountUp() {

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
  pop();

  // Convert time to seconds as an integer
  timer = int(millis() / 1000);
  // Set timer at 55 seconds
  counter = timer + 30;

  if (counter < 30) {
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


// Function to display the 3rd scene of the animation
function waitingScene() {
  // Start count-down timer
  currentTime = millis() - startTime;
  // Set a delay of 5 seconds...
  if (currentTime <= 5000) {
    // ...while making the semicolon blink...
    blinkingCurrentTime = Math.floor((millis() - blinkingStartTime) / 500);
    if (blinkingCurrentTime % 2 == 0) {
      blinkingSemiColon = `:`;
    } else {
      blinkingSemiColon = ` `;
    }
    // console.log(blinkingCurrentTime);

    // ...so that the time remains at 12:59 for a bit before turning into 13:00...
    push();
    // Create background with image
    imageMode(CENTER);
    image(innerNerveGearImg, width / 2, height / 2, width, height);
    // Display timer at 12:59
    textFont(industryBold);
    fill(210);
    strokeWeight(2.5);
    stroke(20);
    textSize(75);
    text(`12${blinkingSemiColon}59`, 160, 80);
    pop();
    // Trigger timeOnHeadGear() after 6.5 seconds and...
  } else if (currentTime <= 6500) {
    timeOnHeadGear();
    // ...have the state remain at 13:00 for 1 second before triggering new state
  } else {
    state = `linkStartScene`; // SCENE 4
  }
}

// Function to set up a count-up timer to display the time of a clock
function timeOnHeadGear() {
  push();
  // Re-draw background with image to hide previous text
  imageMode(CENTER);
  image(innerNerveGearImg, width / 2, height / 2, width, height);
  pop();

  // Display new timer as 13:00
  push();
  textFont(industryBold);
  fill(210);
  strokeWeight(2.5);
  stroke(20);
  textSize(75);
  text(`13:00`, 160, 80);
  pop();
}

// Function to display the 4th scene of the animation
function linkStartScene() {
  background(20);
  substatesScene4();
}

// Function to display the 5th (and last) scene of the animation
function finalScene() {

  // Set up fade-in effect
  if (fadeIn < 0) {
    fadeAmount;
  }
  fadeIn += 2;

  // Tranisition to SCENE 5 smoothly with a customized timer (using Ready,Set,Go Method)
  if (inGame === 0) {
    inGame = 1;
    startTime = millis();
  } else if (inGame === 1) {
    currentTime = millis() - startTime;
    if (currentTime >= 500) {
      // SCENE 5 is ready to appear
      inGame = 2;
    }
  } else {
    // Display a fade-in background
    background(150, 150, 150, fadeIn);


    // MAke text appear smoothly with a customized timer (using Ready,Set,Go Method)
    if (inGame === 2) {
      inGame = 3;
      startTime = millis();
    } else if (inGame === 3) {
      currentTime = millis() - startTime;
      if (currentTime >= 500) {
        // Text ready to appear
        inGame = 4;
      }
    } else {
      // Display text
      push();
      fill(20, 20, 20, fadeIn);
      textFont(industryBold);
      textSize(115);
      text(`Welcome to`, width / 2, height / 2.75);
      text(`Sword Art Online!`, width / 2, 2.75 * height / 5);
      pop();
    } // Display text for finalScene()
  } // Display fade-in background
} // finalScene()

// Function to set up mouse clicks
function mousePressed() {
  if (state === `title`) {
    state = `openingScene`;
  }
}