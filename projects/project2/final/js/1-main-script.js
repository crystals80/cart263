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
let bgMondstadt, bgLiyue, bgInazuma, bgSereniteaPot, bgCelestia, bgEnkanomiya, bgCarpet, bgMondstadtNoSeal;
// Declare fonts vars
let extraBold;

// Declare vars for digit lock puzzle
let currentDigit1, currentDigit2, currentDigit3;

// Declare vars for found fatui sign pieces
let foundFatui1 = false;
let foundFatui2 = false;
let foundFatui3 = false;
let foundFatui4 = false;

// Declare vars for draggable function
let numDropItem = 0; // For pieces of fatui sign
let resetDraggableItem = false;
let numDropNewItem = 0; // For complete fatui sign

// Function loading fonts, images and sounds
function preload() {
  // Load fonts
  extraBold = loadFont(`assets/fonts/Montserrat-ExtraBold.ttf`);
  // Load background images
  bgMondstadt = loadImage(`assets/images/mondstadt.png`);
  bgLiyue = loadImage(`assets/images/liyue.png`);
  bgInazuma = loadImage(`assets/images/inazuma.png`);
  bgSereniteaPot = loadImage(`assets/images/serenitea-pot.png`);
  bgCelestia = loadImage(`assets/images/celestia.png`);
  bgEnkanomiya = loadImage(`assets/images/enkanomiya.png`);
  bgCarpet = loadImage(`assets/images/lifted-carpet.png`);
  bgMondstadtNoSeal = loadImage(`assets/images/mondstadt-no-seal.png`);
} // END OF PRELOAD FUNCTION

// Function configurating the simulation
function setup() {
  // Create canvas
  createCanvas(1200, 600);

  inventory(); // Set up an droppable inventory
  keypad();
  digitLockPuzzle(); // Set up digit lock puzzle
} // END OF SETUP FUNCTION

// Function storing the setup for an droppable inventory
function inventory() {
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
} // END OF INVENTORY FUNCTION

// Function storing the setup for a droppable keypad zone
function keypad() {
  // Create a droppable keypad zone
  $(`#invisible-keypad`).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      // If there is the complete fatui sign in the keypad zone...
      if (numDropNewItem < 1) {
        // ...disable the draggable option for this item
        $("#" + ui.draggable[0].id).draggable("disable");
        // When the complete fatui sign is dropped in the keypad zone, fade it out...
        $(`#fatui-sign`).fadeOut(1000, function() {
          // ...and show change the background by removing the circle seal
          state = `mondstadtNoSeal`;
        });
        // Check which fatui sign dragged and put in the inventory through console
        console.log(ui.draggable[0].id);
        // Count the items in the keypad zone
        numDropNewItem++;
        // Check how many items are dropped in the keypad zone
        console.log(numDropNewItem);
      }
      return true;
    },
  });
} // END OF KEYPAD FUNCTION

// Function storing digit lock puzzle setup
function digitLockPuzzle() {
  /****** DIGIT CHANGE ON LOCK ******/
  // Click on the first digit to change numbers
  $(`.digit-1`).click(function() {
    // Show current digit as 0 or since last time the user clicked
    currentDigit1 = parseInt($(`.digit-1`).text());
    // If digit is 9...
    if (currentDigit1 === 9) {
      // ...then after 9, the digit will return to 0
      currentDigit1 = 0;
    } else {
      // Else the digit will go from 0 to 9 with each click
      currentDigit1 += 1;
    }
    // Display digit on HTML text
    $(`.digit-1`).text(currentDigit1);
  });

  // Same comments as first digit but for the second digit
  $(`.digit-2`).click(function() {
    currentDigit2 = parseInt($(`.digit-2`).text());
    if (currentDigit2 === 9) {
      currentDigit2 = 0;
    } else {
      currentDigit2 += 1;
    }
    $(`.digit-2`).text(currentDigit2);
  });

  // Same comments as first and second digit but for the third digit
  $(`.digit-3`).click(function() {
    currentDigit3 = parseInt($(`.digit-3`).text());
    if (currentDigit3 === 9) {
      currentDigit3 = 0;
    } else {
      currentDigit3 += 1;
    }
    $(`.digit-3`).text(currentDigit3);
  });
} // END OF DIGIT-LOCK-PUZZLE FUNCTION

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
  } else if (state === `mondstadtNoSeal`) {
    mondstadtNoSeal();
  }
} // END OF DRAW FUNCTION

// Function displaying first scene of game
function title() {
  // Display a dark-grey background as if user eyes are closed
  background(`#202020`);
} // END OF TITLE FUNCTION

// Function displaying the lobby of the escape room
function mondstadt() {
  // Display the lobby/entrance/exit's background image
  background(bgMondstadt);

  enableDragAgain(); // Setup renabling draggable option to mondstadt state
} // END OF MONDSTADT FUNCTION

// Function storing draggable code
function enableDragAgain() {
  // If there are 4 pieces of fatui sign in the inventory and state is equal to mondstadt...
  if (numDropItem === 4 && resetDraggableItem === false) {
    // ...reset draggable to be able to drag items
    resetDraggableItem = true;
    // Fade out fatui sign pieces...
    $(`#fatui1, #fatui2, #fatui3, #fatui4`).fadeOut(1000, function() {
      // ...and hide them permanently
      $(this).hide();
    });
    // ...to fade in the complete fatui sign
    $(`#fatui-sign`).fadeIn(1000, function() {
      // ...and show it permanently once its pieces are hidden
      $(this).show();
      // Trigger a dialog at the same time
      innerPara(
        $(`#dialog`).text(`Whoa! The Fatui seal! What kind of sorcery is that?!`));
    });
  };
} // END OF ENABLE-DRAG-AGAIN FUNCTION

// Function displaying the gaming area of the escape room
function liyue() {
  // Display the gaming area's background image
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
} // END OF LIYUE FUNCTION

// Function displaying the changing area of the escape room
function inazuma() {
  // Display the changing room's background image
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
} // END OF INAZUMA FUNCTION

// Function displaying the resting area of the escape room
function sereniteaPot() {
  // Display the bedroom's background image
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
} // END OF SERENITEAPOT FUNCTION

// Function displaying the ceiling of the escape room
function celestia() {
  // Display the ceiling's background image
  background(bgCelestia);
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

  // Show found fatui sign 3
  if (foundFatui4 === true) {
    $(`#fatui4`).show();
  }
} // END OF CELESTIA FUNCTION

// Function displaying the floor of the escape room
function enkanomiya() {
  // Display the floor's background image
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
} // END OF ENKANOMIYA FUNCTION

function mondstadtNoSeal() {
  // Display the Mondstadt-with-no-seal's background image
  background(bgMondstadtNoSeal)
} // END OF MONDSTADT-NO-SEAL FUNCTION

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
} // END OF KEYPRESSED FUNCTION

// Function storing mouseclicks inputs
function mousePressed() {

  // If the title state is visible on screen...
  if (state === `title` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.mondstadt-objects, .liyue-objects, .inazuma-objects, .sereniteaPot-objects, .celestia-objects, .enkanomiya-objects`).hide();

    // Change dialog sentences by clicking on the orange buttons
    $(`#user-answer-1`).click(function() {
      // Fade out this orange button...
      $(this).fadeOut(1000);
      // ...while another orange button fade in
      $(`#user-answer-2`).delay(6000).fadeIn(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Yes! It's your best friend! I'm kind of stuck here...Help me get out of here!`));
    })
    // Change dialog sentences by clicking on the orange buttons
    $(`#user-answer-2`).click(function() {
      // Fade out this orange button...
      $(this).fadeOut(1000);
      // ...while another orange button fade in
      $(`#user-answer-3`).delay(9000).fadeIn(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Uh...Right...Open your eyes first and you can nagivate using the first letter of each areas (listed on the top-left of the screen)`));
    })
    // Change dialog sentences by clicking on the orange buttons
    $(`#user-answer-3`).click(function() {
      // Fade out this orange button...
      $(this).fadeOut(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Hehe! It's nothing! Oh! I'm here on the stand!`));
    })
  }

  // If Mondstadt wall is visible on screen...
  if (state === `mondstadt` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.liyue-objects, .inazuma-objects, .sereniteaPot-objects, .celestia-objects, .enkanomiya-objects`).hide();
    // ...but only show all objects interactions from the Mondstadt state
    $(`.mondstadt-objects`).show();

    // Trigger interaction by clicking on an object
    $(`#invisible-keypad`).click(function() {
      // ...totrigger a dialog
      innerPara(
        $(`#dialog`).text(`It seems like we need to insert a square shape?`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-door-handle`).click(function() {
      // ...totrigger a dialog
      innerPara(
        $(`#dialog`).text(`Ohhhh Yes!!! The door with Mona's seal!!!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-door`).click(function() {
      // ...totrigger a dialog
      innerPara(
        $(`#dialog`).text(`This reminds me of a similar situation...`));
    });

    // Trigger interaction by clicking on an object
    $(`#invisible-figurine`).click(function() {
      // ...while an orange button fade in
      $(`#user-answer-4`).delay(1500).fadeIn(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Hey! Careful!`));
    });
    // Change dialog sentences by clicking on the orange buttons
    $(`#user-answer-4`).click(function() {
      // Fade out this orange button...
      $(this).fadeOut(1000);
      // ...while another orange button fade in
      $(`#user-answer-5`).delay(5000).fadeIn(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`...Don't laugh! I don't know why I became like this and not you! We were fishing and suddenly...`));
    });
    // Change dialog sentences by clicking on the orange buttons
    $(`#user-answer-5`).click(function() {
      // Fade out this orange button...
      $(this).fadeOut(1000);
      // ...while another orange button fade in
      $(`#user-answer-6`).delay(5000).fadeIn(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`I DONT WANT TO HEAR IT!!! Anyhow, let's look around to get out of here!`));
    });
    // Trigger interaction by clicking on the orange button
    $(`#user-answer-6`).click(function() {
      // ...while another orange button fade in
      $(this).fadeOut(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`All right! Be Paimon's right arm and help me!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-ghost`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Uh...That's Hu Tao's friend...D-Don't touch it!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-lyre`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Venti's lyre?!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-polearm`).click(function() {
      // ...while another orange button fade in
      $(`#user-answer-7`).delay(2000).fadeIn(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Whoa! The Engulfing Lightning! TAKE IT!!!`));
    });
    // Trigger interaction by clicking on the orange button
    $(`#user-answer-7`).click(function() {
      // ...while another orange button fade in
      $(this).fadeOut(1000);
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Agh! Fineeeee...`));
    });
  }


  // If Inazuma wall is visible on screen...
  if (state === `inazuma` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.mondstadt-objects, .liyue-objects, .sereniteaPot-objects, .celestia-objects, .enkanomiya-objects`).hide();
    // ...but only show all objects interactions from the Inazuma state
    $(`.inazuma-objects`).show();

    /* DIGIT LOCK PUZZLE */
    // Click on invisible rectangular box on wall to...
    $(`#invisible-lock`).click(function() {
      // Display lock
      $(`#lock-puzzle`).show();
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`The box is locked! We need to find the combination to this lock! Let's look around for clues!`));
    });

    /* DIGIT LOCK PUZZLE - CLOSE AND CONFIRM BUTTONS */
    // Click button to close the (overlay screen) digit lock puzzle...
    $(`.close-btn`).click(function() {
      // ...by hiding it
      $(`#lock-puzzle`).hide();
    });
    // Click on confirm button to submit the correct set of digits
    $(`.confirm-btn`).click(function() {
      // Choose a set of digits for the correct answer
      let correctDigit1 = 3;
      let correctDigit2 = 7;
      let correctDigit3 = 6;
      // If digit 1-2-3 is correct...
      if (correctDigit1 === currentDigit1 && correctDigit2 === currentDigit2 && correctDigit3 === currentDigit3) {
        // ...then show Fatui puzzle piece 1
        $(`#fatui1`).show();
        // Make sure the fatui sign piece stay on screen but on their original state
        foundFatui1 = true
        // Also show in console the correct answer
        console.log(`Correct Digits: 3-7-6`)
      }
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Yay! You did it! A puzzle fell out of the box!`));
    });

    // Trigger interaction by clicking on an object
    $(`#invisible-mirror`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Hmm...Doesn't it looks like Mirror Maiden's mirror?`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-poster-2`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`To ge-t out?`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-elemental`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Ooh! Neon Elemental Symbols!`));
    });
    // Trigger interaction by clicking on an object
    $(`.invisible-closet`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Nothing here, just clothes.`));
    });
  } // END OF MOUSEISPRESSED ON INAZUMA STATE


  // If Liyue wall is visible on screen...
  if (state === `liyue` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.mondstadt-objects, .inazuma-objects, .sereniteaPot-objects, .celestia-objects, .enkanomiya-objects`).hide();
    // ...but only show all objects interactions from the Liyue state
    $(`.liyue-objects`).show();

    /* CLUE PAPER 1 & 3 */
    // Click on invisible books to...
    $(`#invisible-note-1`).click(function() {
      // Display clue paper 1
      $(`#clue-to-read-1`).show();
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Ganyu? She participated in this?`));
    });
    // Click on invisible trash to...
    $(`#invisible-note-2`).click(function() {
      // Display clue paper 2
      $(`#clue-to-read-2`).show();
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`...Itto...I think he wasn't supposed to reveal the answer...`));
    });
    /* CLUE PAPER 1 & 3 - CLOSE BUTTON */
    // Click button to close the (overlay screen) clue paper 1 & 3...
    $(`.clue-btn`).click(function() {
      // ...by hiding it
      $(`#clue-to-read-1, #clue-to-read-2`).hide();
    });


    // Trigger interaction by clicking on an object
    $(`#invisible-book`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Hmm...Remind me of the Artifacts we had to farm.`));
    });
    // Trigger interaction by clicking on an object
    $(`.invisible-flower`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`That is one gigantic Glaze Lily!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-plant`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Just an ordinary plant...`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-poster-1`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Fi-nd t-he F-a-t-u-i S-ig-n?`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-computer`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`They don't seem to work?`));
    });
    // Trigger interaction by clicking on an object
    $(`.invisible-cabinet`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`It's locked.`));
    });
  } // END OF MOUSEISPRESSED ON LIYUE STATE

  // If Celestia ceiling is visible on screen...
  if (state === `celestia` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.mondstadt-objects, .liyue-objects, .inazuma-objects, .sereniteaPot-objects, .enkanomiya-objects`).hide();
    // ...but only show all objects interactions from the Celestia state
    $(`.celestia-objects`).show();

    /* CLUE PAPER 2 */
    // Click on invisible note to...
    $(`#invisible-note-3`).click(function() {
      // Display clue paper 3
      $(`#clue-to-read-3`).show();
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`It's Klee! Poor thing, I'm sure Kaeya made her do the math`));
    });

    /* CLUE PAPER 2 - CLOSE BUTTON */
    // Click button to close the (overlay screen) clue paper 2...
    $(`.clue-btn`).click(function() {
      // ...by hiding it
      $(`#clue-to-read-3`).hide();
    });


    // Click on invisible lamp to...
    $(`#invisible-lamp`).click(function() {
      // Show Fatui puzzle piece 4
      $(`#fatui4`).show();
      // Make sure the fatui sign piece stay on screen but on their original state
      foundFatui4 = true
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`A piece of puzzle! Who the heck would hide something in a lamp?`));
    });


    // Trigger interaction by clicking on an object
    $(`.invisible-star-lamp`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Primogems?! Nooo! It's just a lamp...`));
    });
  } // END OF MOUSEISPRESSED ON CELESTIA STATE


  // If Serenitea Pot wall is visible on screen...
  if (state === `sereniteaPot` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.mondstadt-objects, .liyue-objects, .inazuma-objects, .celestia-objects, .enkanomiya-objects`).hide();
    // ...but only show all objects interactions from the Serenitea Pot state
    $(`.sereniteaPot-objects`).show();

    // Click on invisible plush to...
    $(`#invisible-plush`).click(function() {
      // Show Fatui puzzle piece 3
      $(`#fatui3`).show();
      // Make sure the fatui sign piece stay on screen but on their original state
      foundFatui3 = true
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`A piece of puzzle? Let's find the others!`));
    });

    // Trigger interaction by clicking on an object
    $(`#invisible-poster-3`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`And S-olv-e all t-he P-uzzles?`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-couch`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Ooh! Comfy! And is that a Taroumaru plush?!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-bed`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`I wanna sleep there!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-plush-1`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`So cute! A Cryo slime plush!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-plush-2`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`IS THAT A GUOBA PLUSH?! ADORABLE!`));
    });
  } // END OF MOUSEISPRESSED ON SERENITEAPOT STATE

  // If Enkanomiya floor is visible on screen...
  if (state === `enkanomiya` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.mondstadt-objects, .liyue-objects, .inazuma-objects, .sereniteaPot-objects, .celestia-objects`).hide();
    // ...but only show all objects interactions from the Enkanomiya state
    $(`.enkanomiya-objects`).show();

    // Click within yellow carpet
    let d = dist(mouseX, mouseY, 610, 300);
    if (d < 200) {
      // Change background image
      bgEnkanomiya = bgCarpet;
    }

    // Click on invisible circle to...
    $(`#invisible-carpet`).click(function() {
      // Show Fatui puzzle piece 2
      $(`#fatui2`).show();
      // Make sure the fatui sign piece stay on screen but on their original state
      foundFatui2 = true
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`A piece of puzzle? Let's find the others!`));
    });


    // Trigger interaction by clicking on an object
    $(`#invisible-poster-4`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Good Luck ehe? Did that Tone-Deaf Bard wrote this?`));
    });

    // Trigger interaction by clicking on an object
    $(`#invisible-poster-5`).click(function() {
      // At the same time another dialog sentence appears
      innerPara(
        $(`#dialog`).text(`Touch Nothing? What? Then how are we supposed to get out?!`));
    });
  } // END OF MOUSEISPRESSED ON ENKANOMIYA STATE

  // If Mondstadt-with-no-seal wall is visible on screen...
  if (state === `mondstadtNoSeal` && mouseIsPressed) {
    // ...hide all objects interactions from other states
    $(`.liyue-objects, .inazuma-objects, .sereniteaPot-objects, .celestia-objects, .enkanomiya-objects`).hide();
    // ...but only show all objects interactions from the Mondstadt-with-no-seal state
    $(`.mondstadt-objects`).show();

    // Trigger interaction by clicking on an object
    $(`#invisible-keypad`).click(function() {
      // ...totrigger a dialog
      innerPara(
        $(`#dialog`).text(`It's a Fatui security system!`));
    });
    // Trigger interaction by clicking on an object
    $(`#invisible-door`).click(function() {
      // ...totrigger a dialog
      innerPara(
        $(`#dialog`).text(`Come on! Open the door! Why are you pushing the door? Don't you know how to open the door? Use the door handle! `));
    });

    // Click on invisible door handle to...
    $(`#invisible-door-handle`).click(function() {
      // ...hide escape room game, which includes the canvas...
      $(`canvas`).fadeOut(2000);
      // ...the direction indicators...
      $(`.direction-indicator`).fadeOut(2000);
      // ...and the dialog box
      $(`#dialog-box`).fadeOut(2000);
      // ...and show ending screen
      $(`#ending`).fadeIn(4000);
      $(`#end-line-1`).delay(3000).fadeIn(2000);
      $(`#end-line-2`).delay(5000).fadeIn(2000);
      $(`#end-line-3`).delay(6000).fadeIn(2000);
      $(`#end-line-4`).delay(9000).fadeIn(2000);
      $(`#end-line-5`).delay(10000).fadeIn(2000);
      $(`#end-line-6`).delay(13000).fadeIn(2000);
      $(`#end-line-7`).delay(14000).fadeIn(2000);
      $(`#end-line-8`).delay(15000).fadeIn(2000);
      $(`#end-line-9`).delay(20000).fadeIn(2000);
      $(`#end-line-10`).delay(23000).fadeIn(2000);
      $(`#fatui-seal`).delay(14500).fadeIn(2000);
    });
  } // END OF MOUSEISPRESSED ON MONDSTADT-NO-SEAL STATW

} // END OF MOUSEPRESSED FUNCTION