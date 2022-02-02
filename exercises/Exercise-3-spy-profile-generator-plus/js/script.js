/**
Spy Profile Generator
Lam Ky Anh Do

Generate a randomized spy profile for the user and password protecting it
*/

"use strict";

// Declare a global variable for a spy profile where all properties has a hidden value (**REDACTED**)
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
};

// Declare a global variable for preloading specific JSON files
let instrumentData, objectData, tarotData;

// Function to load JSON files before the program runs
function preload() {
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
}

// Function for setting up the canvas, for setting up user's spy profile and for accessing user's spy profile via their password after setting up their spy profile
function setup() {
  // Create canvas
  createCanvas(windowWidth, windowHeight);

  // Get user's spy profile from generateSpyProfile() that was saved
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // Add a password check
  if (data !== null) {
    // Type in user's password (after user's profile is generated) + message for user to reset profile if they forget the password
    let password = prompt(`Agent! What is your password? (Pressed C if you forgot your password)`);
    // If user's password matches the one from their profile, they can access their profile
    if (password === data.password) {
      displaySpyData();
    }
  } else {
    // Display a pop-up message as a prompt to ask for user's name (for the first time they arrive on the page on a browser)
    generateSpyProfile();
  }
}

// Function to display user's profile
function displaySpyData() {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
}

// Generate a profile using JSON data
function generateSpyProfile() {
  // Type in user's name
  spyProfile.name = prompt(`Agent! What is your name?`);
  // (IN 2 STEPS)
  // Generate a random alias for user using the file instruments.json
  let instrument = random(instrumentData.instruments);
  // Display chosen generated alias
  spyProfile.alias = `The ${instrument}`;
  // (IN 1 STEP)
  // Display a randomly generated secret weapon for user
  let object = random(objectData.objects);
  spyProfile.secretWeapon = random(objectData.objects);
  // Display a randomly generated password for user
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  // Save and load the generated profile as strings (even after reloading page)
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
}

// Function to run the program by drawing the background and by displaying user's spy profile
function draw() {
  // Create a neutral background colour
  background(100, 100, 100);

  // Set a profile template THEN Get the user’s name AND Display the profile
  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **
  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}`;

  // Display text in a formal setting (government document)
  push();
  textFont(`Courier,monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  text(profile, 100, 100);
  pop();
}


function mousePressed() {

}

// Function allowing user to clear data if they forgot their password
function keyPressed() {
  if (key === `c`) {
    // Delete the saved data
    localStorage.removeItem(`game-data`);
    // Delete all data stored (NOT RECOMMENDED UNLESS RLY NEED IT)
    // localStorage.clear(`game-data`);
  }
}