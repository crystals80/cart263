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
let titleImg, simulationImg, bubbleSpeech1, bubbleSpeech2;

// TITLE SCREEN VARIABLES
let titleWidth, titleHeight;

// SIMULATION VARIABLES
// Fixed var for animals in an array
const animals = ["aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bison", "boar", "buffalo", "bull", "camel", "canary", "capybara", "cat", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "dog", "donkey", "dromedary", "elephant", "elk", "ewe", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guinea pig", "hamster", "hedgehog", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "kangaroo", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "mandrill", "marmoset", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "pig", "platypus", "polar bear", "porcupine", "porpoise", "prairie dog", "puma", "rabbit", "raccoon", "ram", "rat", "reindeer", "reptile", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "squirrel", "tapir", "tiger", "toad", "turtle", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra"]

// Variables stating the current animal or speech recognition answer
let currentAnimal = ``;
let currentAnswer = ``;
let noGuess = true; // Variable for when there is no guess at the beginning of the simulation
let gainPoint = 0; // Variable for point counter
let reverseAnimal = ``;
let textColor;

// Function that loads necessary assets before the program runs
function preload() {
  // TYPEFACES (see assets README for more info on typeface)
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')

  // IMAGES
  titleImg = loadImage('assets/images/animals.jpg');
  simulationImg = loadImage('assets/images/walking-animals.jpg');
  bubbleSpeech1 = loadImage('assets/images/bubble-speech-1.png');
  bubbleSpeech2 = loadImage('assets/images/bubble-speech-2.png');
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
}

// Function to run the program
function draw() {
  // Display states
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
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
}

function instruction() {
  push();
  imageMode(CENTER);
  image(bubbleSpeech1, width / 6, 2.55 * height / 4, 350, 100);
  image(bubbleSpeech2, 8.5 * width / 10, 5 + 2.25 * height / 4, 225, 75);
  fill(25, 101, 125); // Dark turquoise
  textSize(12);
  text(`Pssst, read the illegible word backwards!!!`, -25 + width / 6, 3.9 * height / 6);
  fill(242, 181, 54); // Rich Yellow
  text(`Press SHIFT for a new prompt!`, 8.5 * width / 10, 2.25 * height / 4);
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
  responsiveVoice.speak(reverseAnimal, "US English Female");
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
}