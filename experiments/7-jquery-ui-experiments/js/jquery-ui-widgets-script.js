/**
jQuery UI Widgets
Lam Ky Anh Do

Experimenting jQuery UI widgets (just one of them)
*/

"use strict";

// (1) Taken from the last thing we went through in the jQuery UI Effects JS file, you can drag prisoner into tunnel to make both disappears from the prison

// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
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
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});

// Makes the prisoner draggable
function makePrisonerDraggable() {
  $(`#prisoner`).draggable();
  // Prisoner is draggable
  $(`#prisoner`).draggable({
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

// (2) Add a dialog box
// $(`#introduction-dialog`).dialog();

// (3) Add a modal dialog box (cannot interact with page until box is gone)
// $(`#introduction-dialog`).dialog({
//   // NOTE: The page will have grey tint indicating that it cannot be used till modal is false (aka until you close the dialog box)
//   modal: true
// });

// (4) Add buttons to close the dialog box (can still use X button)
// $(`#introduction-dialog`).dialog({
//   modal: true,
//   buttons: {
//     "Imagination": function() {
//       $(this).dialog(`close`);
//     },
//     "Escape tunnel": function() {
//       $(this).dialog(`close`);
//     }
//   }
// });

// (5) Hide escape tunnel at first and then show it when dialog box has been interacted

// // Hide the escape tunnel initially
// $(`#escape-tunnel`).hide();
//
// $(`#introduction-dialog`).dialog({
//   modal: true,
//   buttons: {
//     // NOTE: Here the tunnel will not appear if this button is clicked/chosen
//     "Imagination": function() {
//       $(this).dialog(`close`);
//     },
//     // If they want an escape tunnel, give it to them...
//     "Escape tunnel": function() {
//       // NOTE: Here we are forcing the user to chose escape using tunnel, which causes gameover if other options are chosen
//       $(`#escape-tunnel`).show();
//       $(this).dialog(`close`);
//     }
//   }
// });

// (6) If Imagination button is chosen, then user can only drag it around in the prison (trapped and game over muahahahha)

// Hide the escape tunnel initially
$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  modal: true,
  buttons: {
    "Imagination": function() {
      // NEW! Ability to drag prisoner contained in prison
      $(`#prisoner`).draggable(`option`, `containment`);
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      // If they want an escape tunnel, give it to them...
      $(`#escape-tunnel`).show();
      $(this).dialog(`close`);
    }
  }
});

// (7) Same as previous but prisoner can move outside their prison cell (assuming the webpage is the prison building)

// Hide the escape tunnel initially
$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  modal: true,
  buttons: {
    "Imagination": function() {
      // NEW! Remove the restriction of the prisoner being contained by the prison! (with `none`)
      $(`#prisoner`).draggable(`option`, `containment`, `none`);
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      // If they want an escape tunnel, give it to them...
      $(`#escape-tunnel`).show();
      $(this).dialog(`close`);
    }
  }
});