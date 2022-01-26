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
let titleImg, simulationImg;

// TITLE SCREEN VARIABLES
let width, height;

// SIMULATION VARIABLES
// Fixed var for animals in an array
const animals = ["aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bison", "boar", "buffalo", "bull", "camel", "canary", "capybara", "cat", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "dog", "donkey", "dromedary", "elephant", "elk", "ewe", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guinea pig", "hamster", "hedgehog", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "kangaroo", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "mandrill", "marmoset", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "pig", "platypus", "polar bear", "porcupine", "porpoise", "prairie dog", "puma", "rabbit", "raccoon", "ram", "rat", "reindeer", "reptile", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "squirrel", "tapir", "tiger", "toad", "turtle", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra"]

// Variables stating the current animal or speech recognition answer
let currentAnimal = ``;
let currentAnswer = ``;

function preload() {
  // TYPEFACES (see assets README for more info on typeface)
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')

  // IMAGES
  titleImg = loadImage('assets/images/animals.jpg');
  simulationImg = loadImage('assets/images/walking-animals.jpg');
}

// Function to set up the program
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up pointillism background image for title screen
  // NOTE: To set up pointillism background in different states, every image is required to be set up separately for it to work
  push();
  width = titleImg.width;
  height = titleImg.height;
  imageMode(CENTER);
  titleImg.resize(windowWidth, windowHeight);
  noStroke();
  background(255);
  titleImg.loadPixels();
  pop();

  // Set up annyang!
  if (annyang) {
    // Let program guess animal by your guess via annyang!'s speech recognition
    let commands = {
      'I think it is *animal': guessAnimal
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
}

// Function to run the program
function draw() {

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
  text(`Welcome to Slamina Zoo!`, width / 2, height / 3);
  textSize(30);
  text(`Are you ready for an adventure?!`, width / 2, height / 2);
  textSize(16);
  text(`Follow me! I'll give you a tour!`, width / 2, 4 * height / 6);
  textSize(12);
  text(`~ PRESS ENTER to continue ~`, width / 2, height - 50);
  pop();
}

// Function triggering ResponsiveVoice to say the reversed animal name
function sayAnimalBackwards() {
  // Assign a random animal name from the animals array to currentAnimal
  currentAnimal = random(animals);
  // Say currentAnimal backwards
  let reverseAnimal = reverseString(currentAnimal);
  // Use ResponsiveVoice to speak reverse animal names
  responsiveVoice.speak(reverseAnimal, "US English Female");

  if (responsiveVoice.isPlaying()) {
    fill(0);
    text(reverseString(currentAnimal), 150 + width / 2, height / 6)
  }
}

// Function to set up pointillism background using any image
function pointillismBg(sourceImage) {
  for (let i = 0; i < 2; i++) {
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
  image(simulationImg, width / 2, 3 * height / 4, windowWidth - 100, windowHeight - 200);
  // Display ResponsiveVoice suggestion
  // sayAnimalBackwards()
  // Display annyang's answer
  displayAnswer();
}

// Function displaying the correct/wrong guess
function displayAnswer() {
  // Display whether a guess is right or wrong
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  text(`I think it is ${currentAnswer}`, 150 + width / 2, height / 6);
  text(`______`, 265 + width / 2, height / 6)
}

// Called by annyang!, when it catches user's verbal guess
function guessAnimal(animal) {
  // Assign the animal guess as the current answer (in lower case)
  currentAnswer = animal.toLowerCase();
  // Track answers
  console.log(currentAnswer);
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

// Function allows user to switch states by having certain keys pressed down and to activate ResponsiveVoice
function keyPressed() {
  // Switching from "openScreen" state to "title" state by pressing ENTER
  if (state === `title` && keyIsDown(13)) {
    state = `simulation`;
  }
  //
  if (state === `simulation` && keyIsDown(16)) {
    sayAnimalBackwards();
  }
}