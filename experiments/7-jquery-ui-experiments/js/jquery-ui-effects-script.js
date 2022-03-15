/**
jQuery UI Effects
Lam Ky Anh Do

Experimenting jQuery UI effects
*/

"use strict";

// (1) Initiate text colour animation (will be looped) by dragging the prisoner once

// Prisoner is draggable
// $(`#prisoner`).draggable({
//   // Prisoner cannot be dragged out of the prison
//   containment: `#prison`,
//   // Prisoner gets an underline and turns blue when dragging starts
//   start: function(event, ui) {
//     $(this).css(`text-decoration`, `underline`);
//     // NEW! Color animation!
//     $(this).animate({
//       "color": `#4444ff`
//     }, 1000);
//   },
//   // Prisoner loses underline and turns black when dragging stops
//   stop: function(event, ui) {
//     $(this).css(`text-decoration`, `none`);
//     // NEW! Color animation!
//     $(this).animate({
//       "color": `#000000`
//     }, 1000);
//   }
// });

// Prisoner is droppable
// $(`#escape-tunnel`).droppable({
//   // Prisoner disappears after being dragged into the tunnel
//   drop: function(event, ui) {
//     ui.draggable.remove();
//   }
// });

// (2) Add/Remove a class to animate colour (so here colour changes only when prisoner is dragged aka no looping animation unless triggered)

// $(`#prisoner`).draggable({
//   // Prisoner cannot be dragged out of the prison
//   containment: `#prison`,
//   // Prisoner gets an underline and turns blue when dragging starts
//   start: function(event, ui) {
//     // NEW! Animated class adding
//     $(this).addClass(`prisoner-dragging`, 1000);
//   },
//   // Prisoner loses underline and turns black when dragging stops
//   stop: function(event, ui) {
//     // NEW! Animated class removal
//     $(this).removeClass(`prisoner-dragging`, 1000);
//   }
// });

// (3) Add a shaking effect to text ONCE at the beginning of (every time refreshing) the webpage

// Prisoner shakes with rage at the start
// $(`#prisoner`).effect(`shake`);

// (4) A more effective way to Add a smooth shaking effect to text

// Prisoner shakes with control at the start
// $(`#prisoner`).effect({
//   effect: `shake`,
//   duration: 2000
// });

// (5) Add a number of times the text will shake
// $(`#prisoner`).effect({
//   effect: `shake`,
//   duration: 2000,
//   // Text shakes faster but 10 times only
//   times: 10
//   // NOTE: Interesting effect where Prisoner shakes with control at the start and then really fast after 2 seconds IF THE PREVIOUS FUNCTION (4) IS ON
// });

// (6) Add a range of distance for the text to shake (shake short and faster or shake slower at a longer pace)
// $(`#prisoner`).effect({
//   effect: `shake`,
//   duration: 2000,
//   times: 10,
//   // NOTE: Text shakes a bit less fast but the distance is reduced
//   distance: 7
// });

// (7) Same as last but faster
// $(`#prisoner`).effect({
//   effect: `shake`,
//   duration: 2000,
//   // NOTE: Text shakes pretty fast this time
//   times: 15,
//   distance: 7
// });

// Sometimes the effects are in conflict with the interactions (events) and other effects...
// (8) ...and to prevent that we can put the interactions, events or other effects in a function AND Call it after the effect is executed

// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  // Call draggable interaction after effect is completed/executed
  complete: makePrisonerDraggable
});

// Makes the prisoner draggable
function makePrisonerDraggable() {
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

// (9) Hide tunnel after prisoner is dragged into tunnel
// NOTE: prisoner is already hidden after dragging it in the tunnel
// $(`#escape-tunnel`).droppable({
//   // Elements dropped on escape tunnel are removed from the page
//   drop: function(event, ui) {
//     // Remove the dragged element
//     ui.draggable.remove();
//     // And let's hide the tunnel too for a sneaky effect!
//     $(this).hide();
//   }
// });

// (10) Hide tunnel after prisoner is dragged into tunnel with blind effect for a smoother hiding/disappearing transition
$(`#escape-tunnel`).droppable({
  // Elements dropped on escape tunnel are removed from the page
  drop: function(event, ui) {
    // Remove the dragged element
    ui.draggable.remove();
    // And let's hide the tunnel too for a sneaky effect!
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});