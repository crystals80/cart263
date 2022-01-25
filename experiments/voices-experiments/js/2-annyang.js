/**
annyang!
Lam Ky Anh Do

Experimenting with annyang!, a speech recognition library (https://www.talater.com/annyang/).

Frustrating elements about annyang!:
1- One annyang! program running at a time
2- Speech recognition is not perfect
*/

"use strict";

// TESTING ANNYANG! WITH POP-UP MESSAGES
/*function setup() {
  createCanvas(500, 500);

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    let commands = {
      'hello': function() {
        alert('Howdy!');
      },
      'goodbye': function() {
        alert('Ciao bella!');
      }
    };

    // Can also write like this with a function:
    // if (annyang) {
    //   // Let's define our first command. First the text we expect, and then the function it should call
    //   let commands = {
    //     'hello': sayHello
    //   };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
}

function draw() {
  background(0)
}*/

// function sayHello() {
//   alert("Hello there!");
// }



// TESTING ANNYANG! WITH SIMPLE COMMANDS INTEGRATED WITH P5

// (1) IS THE LIGHT ON OR OFF?
/*let on = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Check if annyang is available
  if (annyang) {
    // Create commands
    let commands = {
      'Turn the light on': function() {
        on = true;
      },
      'Turn the light off': function() {
        on = false;
      }
    }
    // Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  // If on is true, make the background yellow, otherwise make it black
  if (on) {
    background(255, 255, 0);
  } else {
    background(0);
  }
}*/

// THE PROGRAM'S FACE
/*let face = `:-|`;

function setup() {
  createCanvas(500, 500);
  // Check if annyang is available
  if (annyang) {
    // Create commands
    let commands = {
      // They love me!
      'I love you': love,
      // They hate me!
      'I hate you': hate
    }
    // Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  background(0);

  // Draw the current face emoji in the center of the canvas
  // rotated to display more like a regular face
  push();
  translate(width / 2, height / 2);
  rotate(PI / 2);
  textSize(400);
  textAlign(CENTER, CENTER);
  fill(255);
  text(face, 0, 0);
  pop();
}

function love() {
  // Attempt making face pink-red
  // push();
  // rectMode(CENTER);
  // fill(255, 23, 93);
  // rect(width / 2, height / 2, 500, 500);
  // pop();
  face = `:-)`;
}

function hate() {
  // Attempt making face purple-blue
  // push();
  // rectMode(CENTER);
  // fill(78, 92, 191);
  // rect(width / 2, height / 2, 500, 500);
  // pop();
  face = `:-(`;
}*/


// BONUS

// "SPLATS"
/*const commands = {
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" will call showFlickr('Batman and Robin');
  'show me *tag': showFlickr,
};

const showFlickr = function(tag) {
  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
}*/

// (3) GREETING USER BY NAME

// Default name
let userName = `stranger`

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      // A command that listens for "my name is..." and the captures
      // whatever they say after that and sends it as an argument to setName()
      'My name is *name': setName
    }
    annyang.addCommands(commands);
    annyang.start();
  }
}

// Sets the current username to whatever argument is passed to it by annyang!
// Now how what the user said will be passed into the parameter called name
function setName(name) {
  userName = name;
}

function draw() {
  background(0);

  // Greet the user
  push();
  fill(255, 255, 0);
  textSize(32);
  rectMode(CENTER);
  text(`Hi there, ${userName}!`, 100, 100);
  pop();
}