/**
Project 2: Escape the Gamingverse
Lam Ky Anh Do

Create an escape room filled with Genshin impact content, including the puzzle
Note: I will attempt making the puzzle understandable for non- Genshin Impact players.

This JS file is a mix of p5.js, DOM and Jquery.
*/

"use strict";

let state = `title`; // Declare state(s) var

// Declare areas-related and directions-related vars
let currentArea = 0; // Set the area the player is facing

// Declare images vars
let bgMonstadt, bgLiyue, bgInazuma, bgSereniteaPot, bgCelestia, bgEnkanomiya, bgCarpet, fatuiSign, fatuiPuzzlePiece1, fatuiPuzzlePiece2, fatuiPuzzlePiece3, fatuiPuzzlePiece4;
// Declare fonts vars
let extraBold;

// Function loading fonts, images and sounds
function preload() {
  // Load fonts
  extraBold = loadFont(`assets/fonts/Montserrat-ExtraBold.ttf`);
  // Load background images
  bgMonstadt = loadImage(`assets/images/mondstadt.png`);
  bgLiyue = loadImage(`assets/images/liyue.png`);
  bgInazuma = loadImage(`assets/images/inazuma.png`);
  bgSereniteaPot = loadImage(`assets/images/serenitea-pot.png`);
  bgCelestia = loadImage(`assets/images/celestia.png`);
  bgEnkanomiya = loadImage(`assets/images/enkanomiya.png`);
  bgCarpet = loadImage(`assets/images/lifted-carpet.png`);
  fatuiSign = loadImage(`assets/images/fatui-sign.png`);
  // Load item images for puzzles
  fatuiPuzzlePiece1 = loadImage(`assets/images/fatui-piece-1.png`);
  fatuiPuzzlePiece2 = loadImage(`assets/images/fatui-piece-2.png`);
  fatuiPuzzlePiece3 = loadImage(`assets/images/fatui-piece-3.png`);
  fatuiPuzzlePiece4 = loadImage(`assets/images/fatui-piece-4.png`);
}

// Function configurating the simulation
function setup() {
  createCanvas(1200, 600);
}

// Function running the simulation
function draw() {
  // Set states as scenes for simulation
  if (state === `title`) {
    title();
    // } else if (state === `welcomeMsg`) {
    //   welcomeMsg();
  } else if (state === `mondstadt`) {
    mondstadt();
  } else if (state === `liyue`) {
    liyue();
  } else if (state === `inazuma`) {
    inazuma();
  } else if (state === `sereniteaPot`) {
    sereniteaPot();
  } else if (state === `celestia`) {
    celestia();
  } else if (state === `enkanomiya`) {
    enkanomiya();
  } else if (state === `ending`) {
    ending();
  }
}

// Function styling p5.js text
function textStyling() {
  textFont(extraBold);
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(`#202020`);
}

function title() {
  background(`#202020`);

}


// Function displaying the lobby of the escape room
function mondstadt() {
  background(bgMonstadt);
}

// Function displaying the gaming area of the escape room
function liyue() {
  background(bgLiyue);
}

// Function displaying the changing area of the escape room
function inazuma() {
  background(bgInazuma);
}

// // change the combination in the lock
// function changeCode() {
//   // get current combo
//   let num = $(this).text();
//   // if reaches 9, reset to 0
//   if (num === "9") {
//     $(this).text("0");
//     // add 1 to the digit
//   } else {
//     num = int(num) + 1;
//     $(this).text(num);
//   }
//   // SOUND_COMBO_LOCK.play();
// }

// Function displaying the resting area of the escape room
function sereniteaPot() {
  background(bgSereniteaPot);

  // Display invisible elllipse as button to trigger background change onclick (see mousePressed function)
  push();
  noFill();
  noStroke();
  ellipse(210, 475, 100, 135);
  pop();
}

// Function displaying the ceiling of the escape room
function celestia() {
  background(bgCelestia);
}

// Function displaying the floor of the escape room
function enkanomiya() {
  background(bgEnkanomiya);

  // Display invisible circle as button to trigger background change onclick (see mousePressed function)
  push();
  noFill();
  noStroke();
  ellipse(610, 300, 475, 475);
  pop();
}

// Function storing keyboard inputs
function keyPressed() {
  if (keyCode === 77) {
    state = `mondstadt`;
  } else if (keyCode === 76) {
    state = `liyue`;
  } else if (keyCode === 73) {
    state = `inazuma`;
  } else if (keyCode === 83) {
    state = `sereniteaPot`;
  } else if (keyCode === 67) {
    state = `celestia`;
  } else if (keyCode === 69) {
    state = `enkanomiya`;
  }
}

// Function storing mouseclicks inputs
function mousePressed() {
  // If Inazuma wall is visible on screen...
  if (state === `inazuma` && mouseIsPressed) {
    // Click on invisible rectangle to...
    $(`#invisible-lock`).click(function() {
      // Display lock
      $(`#fatui1`).show();
    });
  }
  // If Serenitea Pot wall is visible on screen...
  if (state === `sereniteaPot` && mouseIsPressed) {
    // Click on invisible ellipse to...
    $(`#invisible-plush`).click(function() {
      // Show Fatui puzzle piece 3
      $(`#fatui3`).show();
    });
  }

  // If Enkanomiya floor is visible on screen...
  if (state === `enkanomiya` && mouseIsPressed) {
    // ...and clicked within invisible circle/yellow carpet
    let d = dist(mouseX, mouseY, 610, 300);
    if (d < 200) {
      // Change background image
      bgEnkanomiya = bgCarpet;
    }

    // Click on invisible circle to...
    $(`#invisible-carpet`).click(function() {
      // Show Fatui puzzle piece 2
      $(`#fatui2`).show();
    });
  }
}