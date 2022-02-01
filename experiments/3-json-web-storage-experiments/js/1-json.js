/**
JSON
Lam Ky Anh Do

Experimenting with JSON using Darius Kazemi's corpora data list (https://github.com/dariusk/corpora)

JSON stands for (J)ava(S)cript (O)bject (N)otation. It’s a format for describing structured data that we can then load into our programs.

Generally speaking, we’ll either have JSON data stored in a file or we’ll access it through an API on the internet. Both cases use the same format.

JSON is great because it allows us to work with potentially huge amounts of data and keep that data separate from our actual program. Modularity! Reuse!
*/

"use strict";

// ACCESSING THE FIRST DATA (DESCRIPTION) & LOADING IT
// a.k.a Accessing a specific part of the file
// a.k.a Doing something data-oriented structure the file conrrespond to the structure of an object that we load into the program

// A global variable to store our data in
/*let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Get the description in a variable by following the correct path through the tarot object
  let description = tarot.description;

  // Display the meaning
  push();
  textSize(32);
  textAlign(CENTER);
  fill(255,255,0);
  text(description,width/2,height/2);
  pop();
}*/

// ACCESSING DATA FURTHER IN THE LIST & LOADING IT (A MORE COMPLEX EXAMPLE)
/*let tarotData;

function preload() {
  tarotData = loadJSON(`assets/data/tarot_interpretations.json`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // Get the first shadow meaning into a variable by following the path through the tarot object
  let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];

  // Deciphering this: tarot_interpretations[0].meanings.shadow[0];
  // Main object ({) > 1st data property (tarot_interpretations) > 1st part of 1st data property's array ([0]) > 2nd data property (.meaning) > 3rd data property (.shadow) > 1st part of the 3rd data property's array ([0])

  push();
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(firstShadowMeaning, width / 2, height / 2);
  pop();
}*/

// GET A RANDOM FORTUNE (PULL OUT A RANDOM CARD WITH PRELOAD FUNCTION)
/*let tarotData;
let fortune = `No fortune found yet...`

function preload() {
  tarotData = loadJSON(`assets/data/tarot_interpretations.json`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}

function draw() {
  background(255);

  // Display the fortune
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  // Center the resulting text box
  rectMode(CENTER);
  // Use width and height properties to break up the text
  text(fortune, width / 2, height / 2, width / 2, height / 2);
  pop();
}*/

// GET A RANDOM FORTUNE (PULL OUT A RANDOM CARD WITH CALLBACK A.K.A. NO PRELOAD FUNCTION)
/*let tarotData;
let fortune = `No fortune found yet...`

function preload() {
  // NOTHING in preload because we will load the data dynamically on click
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(fortune, width / 2, height / 2);
  pop();
}

// LOAD JSON AFTER PAGE IS LOADED
function mousePressed() {
  // Once mouse is pressed, JSON will start loading then load the specific JSON file
  // Once JSON file is loaded successfully, then tarotLoaded function acts

  // Call loadJSON as before, but provide a callback function to call when
  // the data has finished loading. The loaded data will be provided as an
  // argument when it is called.
  loadJSON(`assets/data/tarot_interpretations.json`, tarotLoaded)
}

//Load JSON data

// Note that our callback function has a PARAMETER that will have the loaded
// JSON data in it when the function is called
function tarotLoaded(data) {
  // Save the data loaded into our tarot variable for later if we need it
  tarot = data;
  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}*/

// GET A RANDOM FORTUNE (PULL OUT A RANDOM CARD VIA LIVE URL)
// ISSUE: if no Internet, well then it doesn'T work
/*let tarotData;
let fortune = `No fortune found yet...`

function preload() {
  // Load the JSON data from a file online!
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let card = random(tarotData.tarot_interpretations);
  fortune = random(card.fortune_telling);
}

function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(fortune, width / 2, height / 2);
  pop();
}*/

// JSON FROM APIS
/*let jokeText = ``; // The current joke.
let jokeData; // The loaded joke data

function preload() {
  // Website not working*************************
  jokeData = loadJSON(`https://official-joke-api.appspot.com/jokes/programming/random`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // We get the joke object as the first element of the array
  let joke = jokeData[0];
  // Set the joke text as the setup and punchline properties together
  jokeText = `${joke.setup}\n\n${joke.punchline}`;
}

function draw() {
  background(0);

  // Display the current joke
  push();
  fill(255, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(jokeText, width / 2, height / 2, width / 2, height / 2);
  pop();
}*/

// CORS ANYWHERE PROXY
// Not working*************************
let weather;

function preload() {
  // API doesn't run locally
  // weather = loadJSON(`https://www.metaweather.com/api/location/3534`);
  // Adding the CORS anywhere helper
  weather = loadJSON(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/3534`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let forecast = weather.consolidated_weather[0].weather_state_name;

  push();
  textAlign(CENTER);
  textSize(64);
  fill(255, 255, 0);
  text(forecast, width / 2, height / 2);
  pop();
}