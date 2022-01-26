/**
Slamina New Game Plus
Lam Ky Anh Do

ResponsiveVoice (https://responsivevoice.org/) & annyang! (https://www.talater.com/annyang/)
*/

"use strict";

// STATE VARIABLE: title, simulation, ending and restart
let state = "title";

// FONT VARIABLES
let fontRegular, fontItalic;

// IMAGE VARIABLES
let titleImg, simulationImg, bubbleSpeech1, bubbleSpeech2, bubbleSpeech3, bubbleImg;

// AUDIO VARIABLES
let bubblySFX = []; // Array variable storing bubble rising SFX
let bubbly, bgAudio1; // Variables for background music

// TITLE SCREEN VARIABLES
let titleWidth, titleHeight;

// GOOD ENDING VARIABLES
let bubble;
let bubbles = []; // Bubble array variable
let numBubble = 20; // Number of bubble

// SIMULATION VARIABLES
// Fixed var for animals in an array
const animals = ["aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bison", "boar", "buffalo", "bull", "camel", "canary", "capybara", "cat", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "dog", "donkey", "dromedary", "elephant", "elk", "ewe", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guinea pig", "hamster", "hedgehog", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "kangaroo", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "mandrill", "marmoset", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "pig", "platypus", "polar bear", "porcupine", "porpoise", "prairie dog", "puma", "rabbit", "raccoon", "ram", "rat", "reindeer", "reptile", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "squirrel", "tapir", "tiger", "toad", "turtle", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra"]

// Variables storing strings
let currentAnimal = ``;
let currentAnswer = ``;
let reverseAnimal = ``;
// Variable for when there is no guess at the beginning of the simulation
let noGuess = true;
// Variable for point counter
let gainPoint = 0;
// Variable for text colour
let textColor;

// Function that loads necessary assets before the program runs
function preload() {
  // TYPEFACES (see fonts README in assets folder for more info on typeface)
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')

  // IMAGES (see images README in assets folder for more info on images)
  // Background images
  titleImg = loadImage('assets/images/animals.jpg');
  simulationImg = loadImage('assets/images/walking-animals.jpg');
  // Text speeches for simulation screen
  bubbleSpeech1 = loadImage('assets/images/bubble-speech-1.png');
  bubbleSpeech2 = loadImage('assets/images/bubble-speech-2.png');
  bubbleSpeech3 = loadImage('assets/images/bubble-speech-3.png');
  // Good ending special effect
  bubbleImg = loadImage('assets/images/bubble.png')

  // AUDIO (see sounds README in assets folder for more info on sounds)
  // Audios for good ending screen
  bubblySFX[0] = loadSound('assets/sounds/zapsplat-bubble_rising1.mp3');
  bubblySFX[1] = loadSound('assets/sounds/zapsplat-bubble_rising2.mp3');
  bgAudio1 = loadSound('assets/sounds/YAL_Seaside_Piazza_Aaron_Kenny.mp3'); // Good ending background audio
}

// Function to set up the program
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up pointillism background image for title screen
  // NOTE: To set up pointillism background in different states, every image is required to be set up separately for it to work
  push();
  // Declare width and height for title screen background image
  titleWidth = titleImg.width;
  titleHeight = titleImg.height;
  // Center the background image
  imageMode(CENTER);
  // Resize the background image to window size
  titleImg.resize(windowWidth, windowHeight);
  // Delete border of the background image
  noStroke();
  // Make background white so that background image can load in pixel
  background(255);
  titleImg.loadPixels();
  pop();

  // Set up annyang!
  if (annyang) {
    // Let program guess animal by your guess via annyang!'s speech recognition
    let commands = {
      'I can see the *animal': guessAnimal
    };
    // Add our commands to annyang
    annyang.addCommands(commands);
    // Start listening
    annyang.start();
    //annyang.debug(true); // To debug annyang, assign true/false
  } else {
    // annyang doesn't work
    alert(`Please visit this page on Google Chrome!`)
  }

  // Display speech recognition
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER);
  textColor = color(0); // Set text color in black initially

  // Create new bubbles and store them in an array
  // Bubble floating up
  bubble = new Bubble(bubbleImg);
  for (let b = 0; b < numBubble; b++) {
    let bubble = new Bubble(bubbleImg)
    bubbles.push(bubble);
  }
}

// Function to run the program
function draw() {
  // Display states
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `goodEnding`) {
    goodEnding();
  } else if (state === `badEnding`) {
    badEnding();
  }
}

// Function showing title screen aka introducing the simulation with some instructions
function title() {
  // Display pointillism background
  pointillismBg(titleImg);
  // Introduction message
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(39, 12, 105);
  textSize(50);
  text(`Welcome to Slamina Zoo!`, width / 2, height / 7);
  textSize(30);
  text(`Are you ready for an adventure?!`, width / 2, height / 4);
  textSize(16);
  text(`Follow me! I'll give you a tour!`, width / 2, height / 3);
  textBox();
  textSize(12);
  text(`~ PRESS ENTER to continue ~`, width / 2, height - 50);
  pop();
}

function textBox() {
  push();
  rectMode(CENTER);
  fill(255, 255, 255, 20);
  // Draw a rectangle with rounded corners, each having a radius of 20.
  rect(width / 2, height - 47, 200, 25, 20);
  pop();
}

// Function to set up pointillism background using any image
function pointillismBg(sourceImage) {
  for (let i = 0; i < 5; i++) {
    // floor allows random to give decimal
    let x = floor(random(sourceImage.width));
    let y = floor(random(sourceImage.height));
    let pix = sourceImage.get(x, y);
    fill(pix, 128);
    noStroke();
    ellipse(x, y, 20, 20);
  }
}

// Function showing simulation state aka where ResponsiveVoice and annyang are in play
function simulation() {
  // Display simulation's background
  background(255)
  imageMode(CENTER);
  image(simulationImg, width / 2, 2.5 * height / 4, windowWidth - 100, windowHeight - 200);
  // Display instruction on how to play game
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  instruction();
  // Display ResponsiveVoice suggestion
  fill(0);
  text(`Can you see the ${reverseAnimal}?`, width / 4, height / 6)
  // Display point counter
  text(gainPoint, width - 50, 50);
  // Display annyang's answer
  displayAnswer();

  // Trigger "ending" state user accidentally presses SPACE
  if (state === `simulation` && gainPoint == 1) {
    state = `goodEnding`;
  }
}

function instruction() {
  push();
  imageMode(CENTER);
  image(bubbleSpeech1, width / 6, 2.55 * height / 4, 350, 100);
  image(bubbleSpeech2, 8.5 * width / 10, 5 + 2.25 * height / 4, 225, 75);
  image(bubbleSpeech3, 15 + width / 2, 5 + 2.5 * height / 4, 300, 75);
  fill(25, 101, 125); // Dark turquoise
  textSize(12);
  text(`Pssst, read the illegible word backwards!!!`, -25 + width / 6, 3.9 * height / 6);
  fill(242, 181, 54); // Rich Yellow
  text(`Press SHIFT for a new prompt!`, 8.5 * width / 10, 2.25 * height / 4);
  fill(225, 96, 54); // Rich Yellow
  text(`Press SPACE to give me some food!`, 30 + width / 2, 2.475 * height / 4);
  pop();
}

// Function displaying the correct/wrong guess
function displayAnswer() {
  // Set fill text colour with colours set with textColor
  fill(textColor);
  // Display answer a bit to the right
  text(`I can see the ${currentAnswer}`, 4 * width / 6, height / 6);
}

// Called by annyang!, when it catches user's verbal guess
function guessAnimal(animal) {
  // Assign the animal guess as the current answer (in lower case)
  currentAnswer = animal.toLowerCase();
  // Track answers
  console.log(currentAnswer);
  // As there is no guess, at the beginning of the simulation, then the text will remain black.
  noGuess = false;
  if (noGuess === true) {
    textColor = color(0);
  } else {
    // Display whether a guess is right or wrong
    if (currentAnswer === currentAnimal) {
      // Once user starts guessing, the text turns green if the guess is correct
      textColor = color(0, 255, 0);
      // Every time user guesses correctly, they gain a point
      gainPoint += 1;
    } else {
      // Once user starts guessing, the text turns red if the guess is wrong
      textColor = color(255, 0, 0);
    }
  }
}

// Function triggering ResponsiveVoice to say the reversed animal name
function sayAnimalBackwards() {
  // Assign a random animal name from the animals array to currentAnimal
  currentAnimal = random(animals);
  // Say currentAnimal backwards
  reverseAnimal = reverseString(currentAnimal);
  // Use ResponsiveVoice to speak reverse animal names
  responsiveVoice.speak(reverseAnimal, "Japanese Female");
}

// Function reversing the provided string via annyang capturing user's voice
function reverseString(string) {
  // Split (break apart) the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}

function goodEnding() {
  // Play bubbly sound effects at random
  bubbly = random(bubblySFX);
  playAudio1(); // Play audio setup for title screen

  // Set up gradient background
  let c1, c2, n;
  c1 = color(63, 191, 191); // Light teal
  //c2 = color(63,76,191); // light indigo
  c2 = color(63, 108, 191); // light blue

  for (let c = 0; c < height; c++) {
    n = map(c, 0, height, 0, 1);
    let newColor = lerpColor(c1, c2, n);
    stroke(newColor);
    line(0, c, width, c);
  }

  // Congratulating message + Next step instruction
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(255);
  textSize(50);
  text(`Congratulation!`, width / 2, height / 4);
  textSize(30);
  text(`You are good at this!`, width / 2, height / 2);
  textSize(16);
  text(`Let's continue our adventure!`, width / 2, 50 + height / 2);
  textSize(12);
  text(`~ PRESS ENTER to continue ~`, width / 2, height - 50);

  // For every bubble object in the bubbles array, call the display and move functions
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.move();
    bubble.display();
  }
}

// Play SFX audio for good ending screen
function playAudio1() {
  // If bubblySFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!bubbly.isPlaying() && !bgAudio1.isPlaying()) {
    bubbly.setVolume(0.3); // Lower SFX volume from 1 to 0.3
    bubbly.loop(); // Loop SFX to make a continuous audio
    bgAudio1.setVolume(0.32); // Lower background music from 1 to 0.32 in order to hear a bit of the SFX
    bgAudio1.loop(); // Replay background music after it ends
  }
}

function badEnding() {
  background(0)

  // Game over message + Next step instruction
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(255);
  textSize(50);
  text(`HEY YOU! YEAH YOU!`, width / 2, height / 4);
  textSize(30);
  text(`What are you doing?!`, width / 2, 50 + height / 3);
  textSize(16);
  text(`You cannot feed the animals without my permission! It's dangerous!
  I will kindly ask you to go to the entrance while my collegue fills up a report for yourunacceptable behaviour! `, width / 2, 25 + height / 2);
  textSize(100);
  text(`>:(`, width / 2, 3.5 * height / 5);
  textSize(12);
  text(`~ PRESS ENTER to continue ~`, width / 2, height - 50);
}

// Function allows user to switch states by having certain keys pressed down and
function keyPressed() {
  // Switching from "title" state to "simulation" state by pressing ENTER
  if (state === `title` && keyIsDown(13)) {
    state = `simulation`;
  }
  // Trigger ResponsiveVoice by pressing SHIFT
  if (state === `simulation` && keyIsDown(16)) {
    sayAnimalBackwards();
  }
  // Switching from "goodEnding" state to "title" state by pressing ENTER
  if (state === `goodEnding` && keyIsDown(13)) {
    state = `title`;
    background(255); // Re-integrate white background
    bubbly.stop();; // Stop bubblySFX
    bgAudio1.stop(); // Stop background audio of title screen
  }
  // Trigger "badEnding" state user accidentally presses SPACE
  if (state === `simulation` && keyIsDown(32)) {
    state = `badEnding`;
  }
  // Switching from "goodEnding" state to "title" state by pressing ENTER
  if (state === `badEnding` && keyIsDown(13)) {
    state = `title`;
    background(255); // Re-integrate white background
  }
}