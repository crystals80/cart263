/**
A Spy on a Secret Mission
Lam Ky Anh Do

Generate a randomized spy profile for the user and password protecting it. Let's not forget that the user will then get a secret mission.
*/

"use strict";

// Declare a global variable for a spy profile where all properties has a hidden value (**REDACTED**)
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
  target: `**REDACTED**`,
  age: `**REDACTED**`,
  occupation: `**REDACTED**`,
  location: `**REDACTED**`,
};

// Declare a global variable for web storage
let data;
// Declare a global variable for preloading specific JSON files
let instrumentData, objectData, tarotData, targetData, occupationData, locationData;

// Function to load JSON files (found on Darius Kazemi's corpora project on Github) before the program runs
function preload() {
  // Data list of music instruments
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  // Data list of everyday objects
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  //  Data list of keywords of tarot interpretations
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  // Data list of last names
  targetData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`);
  // Data list of occupations
  occupationData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/occupations.json`);
  locationData = loadJSON(`assets/data/countries.json`);
}

// Function for setting up the canvas, for setting up user's spy profile and for accessing user's spy profile via their password after setting up their spy profile
function setup() {
  // Create canvas
  createCanvas(windowWidth, windowHeight);

  // Get user's spy profile from generateSpyProfile() that was saved
  data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  //console.log(`in setup: ${data.age}`);
  // Add a password check
  if (data !== null) {
    // Type in user's password (after user's profile is generated) + message for user to reset profile if they forget the password
    let password = prompt(`Agent! What is your password? (Pressed C if you forgot your password)`);
    // If user's password matches the one from their profile, they can access their profile
    if (password === data.password) {
      loadSpyData();
      // Display stamps only when the spy profile is generated/loaded
      document.getElementById('top-secret').style.display = 'block';
      console.log(document.getElementById('top-secret'));
      document.getElementById('approved').style.display = 'block';
      console.log(document.getElementById('approved'));
    }
  } else {
    // Display a pop-up message as a prompt to ask for user's name (for the first time they arrive on the page on a browser)
    generateSpyProfile();
  }
}

// Function to load user's and target's profile
function loadSpyData() {
  // USER'S SPY PROFILE
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
  // TARGET'S PROFILE
  spyProfile.target = data.target;
  spyProfile.occupation = data.occupation;
  spyProfile.age = data.age;
  spyProfile.location = data.location;
}

// Generate a profile using JSON data
function generateSpyProfile() {

  // Generate a spy profile for user
  // Type in user's name
  spyProfile.name = prompt(`Agent! What is your name?`);
  // Generate a random alias for user using the file instruments.json
  let instrument = random(instrumentData.instruments);
  // And then display chosen generated alias
  spyProfile.alias = `The ${instrument}`;
  // Display a randomly generated secret weapon for user
  let object = random(objectData.objects);
  spyProfile.secretWeapon = `A ${object}`;
  // Display a randomly generated password for user
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  // Generate a mission for user
  generateMission();

  // Display stamps only when the spy profile is generated/loaded
  document.getElementById('top-secret').style.display = 'block';
  console.log(document.getElementById('top-secret'));
  document.getElementById('approved').style.display = 'block';
  console.log(document.getElementById('approved'));

  // Save and load the generated profile as strings (even after reloading page)
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
}

function generateMission() {
  // TARGET'S PROFILE
  // Display a randomly generated target's name
  let target = random(targetData.lastNames);
  spyProfile.target = `${target}`;
  // Display a randomly generated target's occupation
  let occupation = random(occupationData.occupations);
  spyProfile.occupation = `Work as a ${occupation}`;
  // Display a randomly generated target's age number
  let age = floor(random(1, 100));
  spyProfile.age = `${age}`;
  // Display a randomly generated target's location
  let location = random(locationData.countries);
  spyProfile.location = `${location}`;
}

// Function to run the program by drawing the background and by displaying user's spy profile
function draw() {
  // Create a neutral background colour
  background(175);

  // Set a profile template AND Display the mission profile
  let profile = `** SPY PROFILE | DO NOT DISTRIBUTE **
  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}

  ** TOP SECRET MISSION | DO NOT DISTRIBUTE **
    Target: ${spyProfile.target}
    Occupation: ${spyProfile.occupation}
    Age: ${spyProfile.age}
    Location: ${spyProfile.location}

  YOU KNOW WHAT TO DO.
  THANK YOU FOR YOUR SERVICE.
  MAY LUCK BE BY YOUR SIDE.

  PROCEED WITH YOUR SUITCASE.`;

  // Display instructions for user to customize their profile in case of dissatisfaction
  let instructions = `** NO POP-UP MESSAGE? **
  ** REFRESH THE PAGE TO ACCESS YOUR PROFILE **

  ** NOT SATISFIED WITH PROFILE? **
  ** CHOOSE YOUR OWN IDENTITY **
  KEYPRESSED "S" TO RENEW YOUR ENTIRE PROFILE;
  KEYPRESSED "A" TO GET A NEW ALIAS;
  KEYPRESSED "W" TO IMPROVE SECRET WEAPON;
  KEYPRESSED "P" TO RESET THE PASSWORD.

  ** DONE WITH YOUR PREVIOUS MISSION? **
  ** WELCOME BACK **
  KEYPRESSED "M" TO OBTAIN A NEW MISSION.`;

  // Display text in a formal setting (government document)
  push();
  textFont(`Courier,monospace`);
  textSize(22);
  textAlign(LEFT, TOP);
  text(profile, 100, 70);
  // textSize(16);
  // textAlign(RIGHT, TOP);
  text(instructions, 750, 317);
  // text(instructions, 1200, 300);
  pop();
}


function mousePressed() {

}

// Function allowing user to clear data if they forgot their password
function keyPressed() {
  if (key === `c`) {
    // Delete the saved data
    localStorage.removeItem(`spy-profile-data`);
    // Delete all data stored (NOT RECOMMENDED UNLESS RLY NEED IT)
    // localStorage.clear(`game-data`);
  }
  if (key === `s`) {
    // Re-generate spy profile by removing saved data
    // localStorage.removeItem(`spy-profile-data`);
    // and generate a new spy profile
    generateSpyProfile();
  }
  if (key === `a`) {
    // Generate a new alias by keypressing a
    let instrument = random(instrumentData.instruments);
    spyProfile.alias = `The ${instrument}`;
    // Save and load the generated profile as strings (even after reloading page)
    localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
  }
  if (key === `w`) {
    // Generate a new secret weapon by keypressing w
    let object = random(objectData.objects);
    spyProfile.secretWeapon = `A ${object}`;
    // Save and load the generated profile as strings (even after reloading page)
    localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
  }
  if (key === `p`) {
    // Generate a new password by keypressing p
    let card = random(tarotData.tarot_interpretations);
    spyProfile.password = random(card.keywords);
    // Save and load the generated profile as strings (even after reloading page)
    localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
  }
  if (key === `m`) {
    // Generate a new mission by keypressing m
    generateMission()
    // Save and load the generated profile as strings (even after reloading page)
    localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile))
  }
}