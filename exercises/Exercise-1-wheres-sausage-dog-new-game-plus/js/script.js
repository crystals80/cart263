/**
Exercise 1: Where's the Gullible Onigiri, Tohru?
Lam Ky Anh Do

Simulation: Find the intruder among the Zodiac Family
*/

"use strict";

// STATE VARIABLE: openScreen, title(s), simulation
let state = `openScreen`;

// FONT VARIABLES
let fontRegular, fontItalic;

// SIMULATION VARIABLES
// Declare fixed num for animals and their images
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

// Declare empty array variables for animals and their images
let animalImgs = [];
let animals = [];

// Declare sausage dog var and its image
let onigiriImg, onigiri;

function preload() {

  // TYPEFACES (see assets README for more info on typeface)
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')

  // Create a for loop to load all animal images by using iterator i
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImg = loadImage(`assets/images/animal${i}.png`);
    // Push here means to load each images declared from the for loop
    animalImgs.push(animalImg);
  }
  // Laod sausageDogImg
  onigiriImg = loadImage(`assets/images/tohru-onigiri.png`)
}

function setup() {
  // Create canvas window-sized
  createCanvas(windowWidth, windowHeight);

  // Create animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImg = random(animalImgs);
    let animal = new Animal(x, y, animalImg);
    animals.push(animal);
  }

  // Create sausage dog
  let x = random(0, width);
  let y = random(0, height);
  onigiri = new Onigiri(x, y, onigiriImg);
}

function draw() {
  // Create states for screen transitions
  if (state === `openScreen`) {
    openScreen();
  } else if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  }
}

function openScreen() {
  // Introduction message
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(255);
  textSize(60);
  text(`Welcome!`, width / 2, height / 3);
  textSize(30);
  text(`Would you like to proceed?`, width / 2, height / 2);
  textSize(10);
  text(`~ PRESS ENTER to continue ~`, width / 2, height - 50);
  pop();
}

function title() {

}

function simulation() {
  // Create a coloured background
  background(255, 255, 0);

  // Display the animals
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  // Display sausage dog
  onigiri.update();
}

function mousePressed() {
  // Clicked on sausage dog when found makes it spin
  onigiri.mousePressed();
}

function keyPressed() {
  // Once button is clicked, switch "openScreen" state to "title" state
  if (state === `openScreen` && keyIsDown(13)) {
    state = `title`
  }
}