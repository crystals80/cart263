/**
Web Storage API
Lam Ky Anh Do

Experimenting with web storage API (see more: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).
*/

"use strict";

/*
// LOCALSTORAGE
// Save the string "Be excellent to each other." as data in the key "meaning-of-life" in user browser's storage
localStorage.setItem(`meaning-of-life`, `Be excellent to each other.`);
// Load data saved under the key
let meaning = localStorage.getItem(`meaning-of-life`); // "Be excellent to each other."
// Once you type meaning in browser:
// meaning
// Be excellent to each other.

// If a key is used and there is no data, it will return null
let moaning = localStorage.getItem(`moaning-of-life`); // null

localStorage.getItem() always saves and returns everything as strings
localStorage.setItem(`my-boolean`, true);
localStorage.setItem(`my-number`, 0.1);
localStorage.setItem(`my-array`, [1,2,3]);

let myBoolean = localStorage.getItem(`my-boolean`); // "true" (NOT the boolean value true)
let myFloat = localStorage.getItem(`my-number`); // "0.1" (NOT the number 0.1)
let myArray = localStorage.getItem(`my-array`); // "1,2,3" (NOT the array [1,2,3])
*/

// TO AVOID THAT, USE JS OBKECTS

// Save data by storing it in an object and using JSON.stringify()
/*let data = {
  text: `Be excellent to each other.`,
  number: 10,
  boolean: true,
  array: [1,2,3]
};
let dataString = JSON.stringify(data); // Convert the data to a string
localStorage.setItem(`my-data`, dataString); // Save the data as a string

// Can also write like this in one step
let data = {
  text: `Be excellent to each other.`,
  number: 10,
  boolean: true,
  array: [1,2,3]
};
localStorage.setItem(`my-data`, JSON.stringify(data)); // Save the data as a string

// Restore our data by loading (as a string) and then converting it back to an object using JSON.parse()
let loadedDataString = localStorage.getItem(`my-data`); // Load the string!
let loadedData = JSON.parse(loadedDataString); // Parse the real data!

console.log(loadedData.text); // "Be excellent to each other."
console.log(loadedData.number); // 10
console.log(loadedData.boolean); // true
console.log(loadedData.array); // [1, 2, 3]

// Can also write like this in one step
let loadedData = JSON.parse(localStorage.getItem(`my-data`)); // Load and parse the data!

console.log(loadedData.text); // "Be excellent to each other."
console.log(loadedData.number); // 10
console.log(loadedData.boolean); // true
console.log(loadedData.array); // [1, 2, 3]*/

// USING LOCALSTORAGE FOR A SCORE GAME: NUMBER OF CLICKS AS A SCORE
// How many clicks
/*let clicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Display the number of clicks
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(clicks, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Track clicks
  clicks++;
}*/

// USING LOCALSTORAGE FOR A SCORE GAME: ADDING A HIGH SCORE
// Track clicks
/*let clicks = 0;
// let highScore = 0; // Isntead of writing it like this, write it like the following
// A place to store the game data
let gameData = {
  highScore: 0 // Start the high score at 0 by default
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Try to load the game data (remembering to parse it first)
  let data = JSON.parse(localStorage.getItem(`game-data`));
  // Same as localStorage BUT not permanent after closing the browser MEANING that sessionStorage is temporary and stores data only when the program is running
  //let data = JSON.parse(sessionStorage.getItem(`game-data`));
  // Check if there's anything there
  if (data !== null) {
    // There is data! So replace our default game data with the save data
    gameData = data;
  }
}

function draw() {
  background(0);

  // Display score
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(clicks, width / 2, height / 2);
  pop();

  // Display high score
  push();
  textSize(32);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(`High score: ${gameData.highScore}`, 100, 100);
  pop();
}

function mousePressed() {
  // They clicked!
  clicks++;
  // Check if this beats the current high score...
  if (clicks > gameData.highScore) {
    // Set the new high score
    gameData.highScore = clicks;
    // localStorage.setItem(`game-data`, gameData); // Cannot save into gameData like that so need to stringify it
    // Save the game data to remember for next time, remembering to stringify the data first
    localStorage.setItem(`game-data`, JSON.stringify(gameData));
  }
}

// USING LOCALSTORAGE FOR A SCORE GAME: DELETION
function keyPressed() {
  if (key === `c`) {
    // Delete the saved highscore
    localStorage.removeItem(`game-data`);
    // Delete all data stored (NOT RECOMMENDED UNLESS RLY NEED IT)
    // localStorage.clear(`game-data`);
  }
}*/

// REMEMBER USER NAME

let userData = {
  name: `stranger`
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`web-storage-example-personalization`));
  if (data != null) {
    userData.name = data.name;
  } else {
    userData.name = prompt(`What's ya name?`);
    localStorage.setItem(`web-storage-example-personalization`, JSON.stringify(userData));
  }
}

function draw() {
  background(255);

  push();
  textSize(64);
  textAlign(CENTER);
  text(`Howdy, ${userData.name}!`, width / 2, height / 2);
  pop();
}