/**
Haiku Generator
Lam Ky Anh Do

Generate a customizable haiku from existent haikus
*/

"use strict";

// Create existent haiku lines taken from famous authors (first lines are mine)
let haikuLines = {
  firstFiveSyllables: [
    `Terrific, rolling`,
    `An old silent pond`,
    `A world of dew`,
    `The light of a candle`,
    `I write, erase, rewrite`,
    `Over the wintry`,
    `love between us is`,
    `life’s little, our heads`
  ],
  sevenSyllables: [
    `The voice of mighty thunders`,
    `A frog jumps into the pond—`,
    `And within every dewdrop`,
    `Is transferred to another candle—`,
    `Erase again, and then`,
    `Forest, winds howl in rage`,
    `speech and breath. loving you is`,
    `sad. Redeemed and wasting clay`
  ],
  secondFiveSyllables: [
    `Thunder and lightning.`,
    `Splash! Silence again.`,
    `A world of struggle`,
    `Spring twilight`,
    `A poppy blooms.`,
    `With no leaves to blow.`,
    `a long river running.`,
    `this chance. Be of use.`
  ],
};

let haikuTitles = [
  `Upsetting the Sky`,
  `The Old Pond`,
  `A World of Dew`,
  `Lighting One Candle`,
  `A Poppy Blooms`,
  `Over the Wintry`,
  `Haiku [for you]`,
  `Lines on a Skull`
];

let haikuAuthors = [
  `DLKA`,
  `Matsuo Bashou`,
  `Kobayashi Issa`,
  `Yosa Buson`,
  `Katsushika Hokusai`,
  `Natsume Souseki`,
  `Sonia Sanchez`,
  `Ravi Shankar`
];

// Our three elements on the page that contain each line of the poem
let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);

// Set up the starting lines
setupLines();
// Listen for clicks on each element and respond by changing them
addListeners();

// Put a randomly chosen haiku line in each line of the poem in HTML
function setupLines() {
  line1.innerText = random(haikuLines.firstFiveSyllables);
  line2.innerText = random(haikuLines.sevenSyllables);
  line3.innerText = random(haikuLines.secondFiveSyllables);
}

// Adds event listeners for changing each line of the poem
function addListeners() {
  line1.addEventListener(`click`, changeLine);
  line2.addEventListener(`click`, changeLine);
  line3.addEventListener(`click`, changeLine);
}

// Trigger a fade out when a line is clicked
function changeLine(event) {
  fadeOut(event.target, 1);
}

// Reduce the opacity of the provided element until it reaches zero then changes its line and triggers a fade in
function fadeOut(element, opacity) {
  // Change the opacity of the line
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  // Check if the opacity is greater than 0...
  if (opacity > 0) {
    // If so, keep fading on the next frame
    // Note the use of an anonymous function here so we can pass
    // arguments to fadeOut()
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  } else {
    // If not, we can switch lines and fade in...
    // Set a new line of poem for the element
    setNewLine(element);
    // Trigger a fade in
    fadeIn(element, 0);
  }
}

// Increase the opacity of the provided element until it reaches 1 and then stops.
function fadeIn(element, opacity) {
  // Increase the opacity
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  // Check if opacity is still less than 1
  if (opacity < 1) {
    // Keep fading. Note the use of an anonymous function here so we
    // can pass arguments to fadeIn()
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  } else {
    // Do nothing - we're done!
  }
}

// Set the text of the element to a randomly chosen haiku line, accounting for syllables
function setNewLine(element) {
  if (element === line1) {
    // If the element is line1 or line3, use five syllables
    element.innerText = random(haikuLines.firstFiveSyllables);
  } else if (element === line3) {
    element.innerText = random(haikuLines.secondFiveSyllables)
  } else {
    // If the element is line2 use seven syllables
    element.innerText = random(haikuLines.sevenSyllables);
  }
}

// A helper function that returns a random element from the provided array
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}