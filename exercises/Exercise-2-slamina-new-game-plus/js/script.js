/**
Slamina New Game Plus
Lam Ky Anh Do

ResponsiveVoice (https://responsivevoice.org/) & annyang! (https://www.talater.com/annyang/)
*/

"use strict";

// STATE VARIABLE: title, simulation, ending and restart
let state = "title";
// IMAGE VARIABLES
let titleImg;

// TITLE SCREEN VARIABLES
let width, height;

// SIMULATION VARIABLES
// Fixed var for animals in an array
const animals = ["aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bison", "boar", "buffalo", "bull", "camel", "canary", "capybara", "cat", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "dog", "donkey", "dromedary", "elephant", "elk", "ewe", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guinea pig", "hamster", "hedgehog", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "kangaroo", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "mandrill", "marmoset", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "pig", "platypus", "polar bear", "porcupine", "porpoise", "prairie dog", "puma", "rabbit", "raccoon", "ram", "rat", "reindeer", "reptile", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "squirrel", "tapir", "tiger", "toad", "turtle", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra"]

// Variables stating the current animal or speech recognition answer
let currentAnimal = ``;
let currentAnswer = ``;

function preload() {
  titleImg = loadImage('assets/images/animals.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up pointillism background image for title screen
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


function draw() {

  if (state === `title`) {
    title();
    pointillismBg(titleImg);
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `ending`) {
    ending();
  } else if (state === `restart`) {
    restart();
  }
}

function title() {

}

// Trigger ResponsiveVoice to say the reversed animal name
function mousePressed() {
  // Assign a random animal name from the animals array to currentAnimal
  currentAnimal = random(animals);
  // Say currentAnimal backwards
  let reverseAnimal = reverseString(currentAnimal);
  // Use ResponsiveVoice to speak reverse animal names
  responsiveVoice.speak(reverseAnimal);
}

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

function simulation() {
  displayAnswer();
}

function displayAnswer() {
  // Display whether a guess is right or wrong
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);
}

// Called by annyang!, when it gears a guess
function guessAnimal(animal) {
  // Assign the animal guess as the current answer (in lower case)
  currentAnswer = animal.toLowerCase();
  // Track answers
  console.log(currentAnswer);
}

// Reverses the provided string
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