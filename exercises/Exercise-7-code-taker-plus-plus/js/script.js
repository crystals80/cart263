/**
Exercise 7: Code Taker++
Lam Ky Anh Do

Create a poem by dragging the letters of another poem
*/

"use strict";

const secretAnswer1 = `short`;
const secretAnswer2 = `few`;
const secretAnswer3 = `nothing`;

// (4) Hide 2nd and 3rd riddles
$(`.two, .three`).hide();

// (3.1) Have a dialog box appear as a pop-up message if all the letters are in the box for the 1st riddle completed
$(`.solved-dialog`).dialog({
  // Hide dialog box till user succeeded the game
  autoOpen: false,
  // Create button for dialog
  buttons: {
    "Yes!": function() {
      // Close dialog box
      $(this).dialog(`close`);
      $(`.two`).show();
    }
  }
});

// (3.2) Make a dialog box appear for the 2nd riddle completed
$(`.solved-again-dialog`).dialog({
  // Hide dialog box till user succeeded the game
  autoOpen: false,
  // Create button for dialog
  buttons: {
    "Too easy~~": function() {
      // Close dialog box
      $(this).dialog(`close`);
      $(`.three`).show();
    }
  }
});

// (3.3) Create a final dialog box appear for the 3rd riddle completed
$(`.complete-dialog`).dialog({
  // Hide dialog box till user succeeded the game
  autoOpen: false,
  // Create button for dialog
  buttons: {
    "It was a piece of cake!": function() {
      // Close dialog box
      $(this).dialog(`close`);
      $(`body`).css(`background-color`, `black`)
    }
  }
});

// (1) Make a letter red when mouse hover over it ONCE
$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).css(`cursor`, `grab`)
  // Make the lette draggable
  $(this).draggable({
    // Clone the letter so that you can drag it while the poem is still intact and not broken
    helper: `clone`
  });
});

// (2) Drop letters in the customizable poem box (elsewhere the letter will disappear as if going back to its original place)
$(`.answer`).droppable({
  // Call drop function
  drop: function(event, ui) {
    // Create var for draggable letter
    let letter = ui.draggable.text();
    // Add letters in the box
    $(this).append(letter);
    // Once letter is in the box, it is not draggable
    ui.draggable.draggable(`disable`);
    // Stop highlighting the letter in red once it the box (also stop mouseover on poem)
    ui.draggable.removeClass(`found`);

    // Check if the letters are in the correct order for riddle 1
    if ($(this).text() === secretAnswer1) {
      // Open dialog box for riddle 1
      $(`.solved-dialog`).dialog(`open`);
    }
    // Check if the letters are in the correct order for riddle 2
    else if ($(this).text() === secretAnswer2) {
      // Open dialog box for riddle 2
      $(`.solved-again-dialog`).dialog(`open`);
    }
    // Check if the letters are in the correct order for riddle 3
    else if ($(this).text() === secretAnswer3) {
      // Open dialog box for riddle 3
      $(`.complete-dialog`).dialog(`open`);
    }
  }
});

// (5) Show a draggable advice dialog box
$(`#advice`).dialog({
  width: 600,
  height: 150,
  closeOnEscape: false,
  open: function(event, ui) {
    $(".ui-dialog-titlebar-close", ui.dialog || ui).hide();
  }
});