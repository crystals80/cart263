/**
Slamina
Lam Ky Anh Do

Using ResponsiveVoice and annyang!, the program will speak the name of a common animal backwards and the user will have to say (with their voice) what they think it is in the form “I think it is x.”

If they get it right, their guess will be displayed in green, if they get it wrong, their guess will be displayed in red.
*/

"use strict";


let

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