/**
Activity 1: Where's Sausage Dog? (Edition Plus)
Lam Ky Anh Do

Represent a generic "animal" via classes (using inheritance)
*/

"use strict";

// STATE VARIABLE: openScreen, title(s), simulation
let state = `title`;

// VARIABLE FOR TITLE SCREEN, including complete and gameover screens
let button; // Variable for button (that will initiate the simulation)


// SIMULATION VARIABLES
// Declare fixed num for animals and their images
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

// Declare empty array variables for animals and their images
let animalImgs = [];
let animals = [];

// Declare sausage dog var and its image
let onigiriImg, onigiriDog;

function preload() {
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

  // Create a button to start the simulation
  startButton();

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

function startButton() {
  // Create start button to initiate simulation
  button = createButton('Of course!');
  button.position(0, 0); // Center the button within the canvas
  button.center(); // Center the text within the button
  let noColour = color(255, 255, 255, 0); // Set transparent colour
  button.style('background-color', noColour); // Apply transparent colour to button initial grey background
  button.mousePressed(switchState); // Transition to title screens
}

function openScreen() {
  background
}

function title() {}

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

function switchState() {
  state = `title`;
}