/**
In-class Activity - Week 10
Lam Ky Anh Do

Reviewing lecture 9

1- Have more than 1 draggable jQuery object (making like a
   minigame)
2- Make a selectable circle
3- A circle following the cursor with pure JS

*/

"use strict";

// Prisoner shakes with rage at the start
$(`.prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});

// Escape tunnel is droppable
$(`#escape-tunnel`).droppable({
  // Elements dropped on escape tunnel are removed from the page
  drop: function(event, ui) {
    /*// Understand better how jQuery UI works with console log
    console.log(event);
    console.log(ui);*/
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});

// Makes the prisoner draggable
function makePrisonerDraggable() {
  $(this).draggable();
  // Prisoner is draggable
  $(this).draggable({
    // Prisoner cannot be dragged out of the prison
    containment: `#prison`,
    // Prisoner gets an underline and turns blue when dragging starts
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 1000);
    },
    // Prisoner loses underline and turns black when dragging stops
    stop: function(event, ui) {
      // NEW! Animated class removal
      $(this).removeClass(`prisoner-dragging`, 1000);
    }
  });
}