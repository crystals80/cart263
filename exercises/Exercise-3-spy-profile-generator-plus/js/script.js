/**
Spy Profile Generator
Lam Ky Anh Do

Generate a randomized spy profile for the user and password protecting it
*/

"use strict";

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
};

let instrumentData, objectData, tarotData;

function preload() {
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Pop-up msg as prompt to ask for name
  // generateSpyProfile();
  // Have generateSpyProfile() only doesn't save the data BUT adding localStorage will
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // Save and load the generated profile (even after reloading page)
  if (data !== null) {
    let password = prompt(`Agent! What is your password? (Pressed C if you forgot your password)`);
    if (password === data.password) {
      setSpyData();
    }
  } else {
    generateSpyProfile();
  }
}

function setSpyData() {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
}

// Generate a profile using JSON data
function generateSpyProfile() {
  // Type in your name
  spyProfile.name = prompt(`Agent! What is your name?`);
  // Generate alias
  let instrument = random(instrumentData.instruments)
  spyProfile.alias = `The ${instrument}`;
  // Generate secret weapon
  let object = random(objectData.objects)
  spyProfile.secretWeapon = random(objectData.objects);
  // Generate password
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
}

function draw() {
  background(100, 100, 100);

  // Get the user’s name and display a default profile
  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}`;

  push();
  textFont(`Courier,monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  // Instead of having text aligned on after another, set a profile template (see above)
  // text(spyProfile.name, 100, 100);
  // text(spyProfile.alias, 100, 200);
  // text(spyProfile.secretWeapon, 100, 300);
  // text(spyProfile.password, 100, 400);
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