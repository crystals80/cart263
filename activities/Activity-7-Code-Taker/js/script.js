/**
Code Taker
Lam Ky Anh Do

Create a poem by dragging the letters of another poem
Da Vinci?!
*/

"use strict";

// (3) Have a dialog box appear as a pop-up message if all the letters are in the box (ending message)
$(`#solved-dialog`).dialog({
  // Hide dialog box till user succeeded the game
  autoOpen: false,
  // Create button for dialog
  buttons: {
    "I know.": function() {
      // Close dialog box
      $(this).dialog(`close`);
    }
  }
});

// (1.1) Make a letter red when mouse hover over it
// $(`.secret`).on(`mouseover`, function(event) {
//   // But the poem is broken as letters are missing
//   $(this).addClass(`found`, 500);
// });

// (1.2) Make a letter red when mouse hover over it ONCE
$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  // Make the lette draggable
  $(this).draggable({
    // Clone the letter so that you can drag it while the poem is still intact and not broken
    helper: `clone`
  });
});

// (2) Drop letters in the customizable poem box (elsewhere the letter will disappear as if going back to its original place)
$(`#answer`).droppable({
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

    // Check if the letters are in the correct order
    if ($(this).text() === `Theremin`) {
      // Open dialog box
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});