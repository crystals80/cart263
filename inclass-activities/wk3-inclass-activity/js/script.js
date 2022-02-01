/**
In-class Activity - Week 3
Lam Ky Anh Do

Reviewing lecture 2

1- annyang!?
 - General review of the process?
2- ResponsiveVoice
 - Can you connect ResponsiveVoice to other libraries
 - Can you filter ResponsiveVoice
*/

"use strict";

// (1) Reviewing annyang!

let face = `:-|`

function setup() {
  createCanvas(500, 500);

  responsiveVoice.speak("pikachu");

  if (annyang) {
    let commands = {
      "Don't worry": happy,
      "I lost": sad,
      "Be ambivalent": ambivalent,
      // anything will be recorded by annyang in between Yes please
      "Yes please": {
        "regexp": /^Yes.*please$/,
        "callback": yesPlease
      }
    }
    annyang.addCommands(commands);
    annyang.start();
    annyang.debug(true); // To debug annyang, assign true/false
  } else {
    // annyang doesn't work
    alert(`Please visit this page on Google Chrome!`)
  }
}

function draw() {
  background(0);

  push();
  fill(255, 255, 0);
  ellipse(width / 2, height / 2, 200, 200);
  textSize(128);
  textAlign(CENTER, CENTER);
  fill(0)
  text(face, width / 2, height / 2);
  pop();
}

function happy() {
  face = `:-)`;
  //console.log("I'm listening");
}

function sad() {
  face = `:-(`;
}

function ambivalent() {
  face = `:-|`;
}

function yesPlease() {
  face = `:-O`;
}

// (2) Reviewing ResponsiveVoice

/*function setup() {
  createCanvas(500, 500);

  responsiveVoice.speak("pikachu");
}

function draw() {
  background(0);

}*/