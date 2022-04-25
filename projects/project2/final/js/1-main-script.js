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
let bgMonstadt, bgLiyue, bgInazuma, bgSereniteaPot, bgCelestia, bgEnkanomiya, bgCarpet;
// Declare fonts vars
let extraBold;

// Declare vars for found fatui sign pieces
let foundFatui1 = false;
let foundFatui2 = false;
let foundFatui3 = false;
let foundFatui4 = false;

// Declare vars for draggable function
let numDropItem = 0;
let resetDraggableItem = false;

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
}

// Function configurating the simulation
function setup() {
  // Create canvas
  createCanvas(1200, 600);

  // Create a droppable inventory
  $(`#inventory`).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      // If there are 4 fatui sign pieces in the inventory...
      if (numDropItem < 4) {
        // ...disable the draggable option for these items
        $("#" + ui.draggable[0].id).draggable("disable");
        // Check which fatui sign dragged and put in the inventory through console
        console.log(ui.draggable[0].id);
        // Count the items in the inventory
        numDropItem++;
        // Check how many items are dropped in the inventory
        console.log(numDropItem);
      }
      return true;
    },
  });
}

// Function running the simulation
function draw() {
  // Set states as scenes for simulation
  if (state === `title`) {
    title();
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

  // If there are 4 pieces of fatui sign in the inventory and state is equal to mondstadt...
  if (numDropItem === 4 && resetDraggableItem === false) {
    // ...reset draggable to be able to drag items
    resetDraggableItem = true;
    // ...enable draggable to game canvas
    $(`.fatui`).draggable("enable");
    // ...and make revert valid so that items will not be contained in the inventory
    $(`.fatui`).draggable({
      revert: `valid`,
      containment: `document`,
    });
  };
}

// Function displaying the gaming area of the escape room
function liyue() {
  background(bgLiyue);

  // Hide fatui puzzle pieces by default to keep them on their specific state...
  $(`#fatui1`).hide();
  $(`#fatui2`).hide();
  $(`#fatui3`).hide();

  // ...but show them when they are dragged into the inventory area even if their initial state is not displayed
  if ($(`#fatui1`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui1`).show();
  }
  if ($(`#fatui2`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui2`).show();
  }
  if ($(`#fatui3`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui3`).show();
  }
}

// Function displaying the changing area of the escape room
function inazuma() {
  background(bgInazuma);
  // Hide fatui puzzle pieces by default to keep them on their specific state...
  $(`#fatui2`).hide();
  $(`#fatui3`).hide();
  $(`#fatui4`).hide();

  // ...but show them when they are dragged into the inventory area even if their initial state is not displayed
  if ($(`#fatui2`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui2`).show();
  }
  if ($(`#fatui3`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui3`).show();
  }
  if ($(`#fatui4`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui4`).show();
  }

  // Show found fatui sign 1
  if (foundFatui1 === true) {
    $(`#fatui1`).show();
  }
}

// Function displaying the resting area of the escape room
function sereniteaPot() {
  background(bgSereniteaPot);
  // Hide fatui puzzle pieces by default to keep them on their specific state...
  $(`#fatui1`).hide();
  $(`#fatui2`).hide();
  $(`#fatui4`).hide();

  // ...but show them when they are dragged into the inventory area even if their initial state is not displayed
  if ($(`#fatui1`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui1`).show();
  }
  if ($(`#fatui2`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui2`).show();
  }
  if ($(`#fatui4`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui4`).show();
  }

  // Show found fatui sign 3
  if (foundFatui3 === true) {
    $(`#fatui3`).show();
  }

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
  // Hide fatui puzzle pieces by default to keep them on their specific state...
  $(`#fatui1`).hide();
  $(`#fatui2`).hide();
  $(`#fatui3`).hide();
  $(`#fatui4`).hide();

  // ...but show them when they are dragged into the inventory area even if their initial state is not displayed
  if ($(`#fatui1`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui1`).show();
  }
  if ($(`#fatui2`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui2`).show();
  }
  if ($(`#fatui3`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui3`).show();
  }
  if ($(`#fatui4`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui4`).show();
  }
}

// Function displaying the floor of the escape room
function enkanomiya() {
  background(bgEnkanomiya);
  // Hide fatui puzzle pieces by default to keep them on their specific state...
  $(`#fatui1`).hide();
  $(`#fatui3`).hide();
  $(`#fatui4`).hide();

  // ...but show them when they are dragged into the inventory area even if their initial state is not displayed
  if ($(`#fatui1`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui1`).show();
  }
  if ($(`#fatui3`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui3`).show();
  }
  if ($(`#fatui4`).hasClass(`ui-draggable-disabled`)) {
    $(`#fatui4`).show();
  }

  // Show found fatui sign 4
  if (foundFatui2 === true) {
    $(`#fatui2`).show();
  }

  // Display invisible circle as button to trigger background change onclick (see mousePressed function)
  push();
  noFill();
  noStroke();
  ellipse(610, 300, 475, 475);
  pop();
}

// Function storing keyboard inputs
function keyPressed() {
  // Press "m" to look at the lobby
  if (keyCode === 77) {
    state = `mondstadt`;
    // Press "l" to look at the gaming area
  } else if (keyCode === 76) {
    state = `liyue`;
    // Press "i" to look at the changing area
  } else if (keyCode === 73) {
    state = `inazuma`;
    // Press "s" to look at the bedroom
  } else if (keyCode === 83) {
    state = `sereniteaPot`;
    // Press "c" to lok at the ceiling
  } else if (keyCode === 67) {
    state = `celestia`;
    // Press "e" to look at the floor
  } else if (keyCode === 69) {
    state = `enkanomiya`;
  }
}

// Function storing mouseclicks inputs
function mousePressed() {
  // If Liyue wall is visible on screen...
  if (state === `liyue` && mouseIsPressed) {
    /****** CLUE PAPER 1 & 3 ******/
    // Click on invisible rectangle to...
    $(`#invisible-note-1`).click(function() {
      // Display clue paper 1
      $(`#clue-to-read-1`).show();
    });
    // Click on invisible rectangle to...
    $(`#invisible-note-2`).click(function() {
      // Display clue paper 2
      $(`#clue-to-read-2`).show();
    });

    /****** CLUE PAPER 1 & 3 - CLOSE BUTTON ******/
    // Click button to close the (overlay screen) clue paper 1 & 3...
    $(`.clue-btn`).click(function() {
      // ...by hiding it
      $(`#clue-to-read-1, #clue-to-read-2`).hide();
    });
  }

  /****** DIGIT LOCK PUZZLE ******/
  // If Inazuma wall is visible on screen...
  if (state === `inazuma` && mouseIsPressed) {
    // Click on invisible rectangle to...
    $(`#invisible-lock`).click(function() {
      // Display lock
      $(`#lock-puzzle`).show();
    });

    /****** DIGIT LOCK PUZZLE - CLOSE AND CONFIRM BUTTONS ******/
    // Click button to close the (overlay screen) digit lock puzzle...
    $(`.close-btn`).click(function() {
      // ...by hiding it
      $(`#lock-puzzle`).hide();
    });
    // Click button to submit chosen digits...
    $(`.confirm-btn`).click(function() {
      // ...then show Fatui puzzle piece 1
      $(`#fatui1`).show();
    });
  }


  /****** FIND FATUI SIGN PIECES ******/
  // If Serenitea Pot wall is visible on screen...
  if (state === `sereniteaPot` && mouseIsPressed) {
    // Click on invisible ellipse to...
    $(`#invisible-plush`).click(function() {
      // Show Fatui puzzle piece 3
      $(`#fatui3`).show();
    });
  }

  // If Celestia ceiling is visible on screen...
  if (state === `celestia` && mouseIsPressed) {
    /****** CLUE PAPER 2 ******/
    // Click on invisible rectangle to...
    $(`#invisible-note-3`).click(function() {
      // Display clue paper 3
      $(`#clue-to-read-3`).show();
    });

    /****** CLUE PAPER 2 - CLOSE BUTTON ******/
    // Click button to close the (overlay screen) clue paper 2...
    $(`.clue-btn`).click(function() {
      // ...by hiding it
      $(`#clue-to-read-3`).hide();
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
      foundFatui2 = true
    });
  }
}