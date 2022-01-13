/**
Activity 1: Where's Sausage Dog?
Lam Ky Anh Do

Represent a generic "animal" via classes (using inheritance)
*/

"use strict";

// Declare fixed num for animals and their images
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

// Declare empty array variables for animals and their images
let animalImgs = [];
let animals = [];

function preload() {
  // Create a for loop to load all animal images by using iterator i
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImg = loadImage(`assets/images/animal${i}.png`);
    // Push here means to load each images declared from the for loop
    animalImgs.push(animalImg);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImg = random(animalImgs);
    let animal = new Animal(x, y, animalImg);
    animals.push(animal);
  }
}

function draw() {
  // Create a coloured background
  background(255, 255, 0);

  // Display the animals
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
}