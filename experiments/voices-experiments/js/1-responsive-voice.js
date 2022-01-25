/**
ResponsiveVoice
Lam Ky Anh Do

Experimenting with ResponsiveVoice, a speech synthesis library (https://responsivevoice.org/).

HOW TO MEET A LIBRARY
1- Go to the homepage and read the introductory
   material
2- Find resources provided for learning the library,
   especially examples and tutorials and most fundamentally the API
3- Look at examples to get a broad sense of the usage
4- Read/browse the API to get a sense of the range of
   the library’s abilities
5- Obtain the library itself and incorporate it into a
   blank project (may include API key)
6- Start experimenting!
*/

"use strict";

// EXPERIMENTING WITH RESPONSIVEVOICE
/*function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0)

}

function mousePressed() {
  // Not much intonation but enough so you can understand that it is there
  responsiveVoice.speak("hello world");
  //responsiveVoice.speak("hello world", "UK English Male");
  //responsiveVoice.speak("Comment ça va", "French Female");
  //responsiveVoice.speak("hello world", "UK English Male", {pitch: 2});
  //responsiveVoice.speak("hello world", "UK English Female", {rate: 1.5});
  //responsiveVoice.speak("hello world", "UK English Male", {volume: 1});
  //responsiveVoice.speak("hello world", "UK English Male", {onstart: StartCallback,onend: EndCallback});
  //responsiveVoice.speak(document.getElementById("article-container").textContent);
}*/

// CALLBACKS
let phrase = `Hello, world!`;
let saying = ``; // Track what is currently being said

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Display what is currently being said...
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  text(saying, width / 2, height / 2);
  pop();
}

function mousePressed() {
  responsiveVoice.speak(phrase, "UK English Male", {
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking() {
  saying = phrase;
}

function hideSpeaking() {
  saying = ``;
}

// RANDOM VOICE
/*let voices; // To remember the array of voices
let currentVoiceName = ``;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Get the array of voices
  voices = responsiveVoice.getVoices();
}

function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER,CENTER);
  text(currentVoiceName,width/2,height/2);
  pop();
}

function mousePressed() {
  // Choose a random voice object from the list
  let voice = random(voices);
  // We need the "name" property of our
  // randomly chosen voice object
  let currentVoiceName = voice.name;

  // Say the text using the randomly chosen voice and with
  // random rate and pitch.
  responsiveVoice.speak("Now I talk like this.", currentVoiceName);
}*/