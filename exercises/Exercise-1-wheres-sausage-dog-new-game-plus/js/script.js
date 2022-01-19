/**
Exercise 1: Where's the Gullible Onigiri, Tohru?
Lam Ky Anh Do

Simulation: Find the intruder among the Zodiac Family
*/

"use strict";

// STATE VARIABLE: openScreen, title, simulation
let state = `openScreen`;

// FONT VARIABLES
let fontRegular, fontItalic;

// SIMULATION VARIABLES
// Declare fixed num for animals and their images
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 200;
const NUM_STATIC = 2000; // Static var for background

// Declare empty array variables for animals and their images
let animalImgs = [];
let animals = [];

// Declare onigiri var, images & empty var
let onigiri, onigiriImg, bg, endBg, shake;

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
  // Load onigiri image
  onigiriImg = loadImage(`assets/images/tohru-onigiri.png`)

  // Load background image of title()
  bg = loadImage(`assets/images/offering.gif`)
  endBg = loadImage(`assets/images/human-tohru.png`)
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

  // Create onigiri
  let x = random(0, width);
  let y = random(0, height);
  onigiri = new Onigiri(x, y, onigiriImg);

  shake = true;
}

function draw() {
  // Create states for screen transitions
  if (state === `openScreen`) {
    openScreen();
  } else if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `ending`) {
    ending();
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

  // Title screen's background image
  push()
  imageMode(CENTER);
  image(bg, width / 2, height / 2, windowWidth, windowHeight);
  pop()

  // Mission message
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(255);
  textSize(50);
  text(`I have a special mission for you!`, width / 2, height / 3);
  textSize(30);
  text(`But first let me introduce you to the case`, width / 2, height / 2);
  textSize(16);
  text(`Chinese New Year is approaching and I have prepare a few offerings for the God of The Chinese Zodiac
    However, my cats have stolen a piece of onigiri! Please help me find it!`, width / 2, 4 * height / 6);
  textSize(10);
  text(`~ PRESS SPACE to find the Gullible Onigiri Tohru ~`, width / 2, height - 50);
  pop();
}

function simulation() {
  // Create a coloured background
  background(map(mouseX, 0, width, 100, 230));

  //Display static
  for (let i = 0; i < NUM_STATIC; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(random(255));
    point(x, y);
  }

  // Display the animals
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
    // if (shake == true) {
    //   translate(random(-5, 5), random(-5, 5));
    // }
  }

  // Display onigiri
  onigiri.update();
}

function mousePressed() {
  // When onigiri found, it spins
  onigiri.mousePressed();
}

function ending() {
  // Ending screen's background image
  push()
  imageMode(CENTER);
  image(endBg, width / 2, height / 2, windowWidth, windowHeight);
  pop()

  // Display a happy onigiri
  onigiri.updateEnd();

  // Congratulating message
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(50);
  text(`Thank you very much for rescuing me!`, width / 2, height / 12);
  textSize(24);
  text(`Now let's go and bring the offerings
  to the Sohma's estate!`, width / 2, 4.5 * height / 6);
  textSize(16);
  text(`Come on! They're waiting for us!`, width / 2, 6.75 * height / 8);
  textSize(10);
  text(`~ PRESS SPACE to continue ~`, width / 2, height - 50);
  pop();
}

function keyPressed() {
  // Switching from "openScreen" state to "title" state by pressing ENTER
  if (state === `openScreen` && keyIsDown(13)) {
    state = `title`;
  }
  // Switching from "title" state to "simulation" state by pressing ENTER
  if (state === `title` && keyIsDown(32)) {
    state = `simulation`;
  }
}