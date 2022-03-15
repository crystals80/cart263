/**
jQuery UI Interactions
Lam Ky Anh Do

Experimenting jQuery UI interactions

NOTE: EVERYTHING HERE IS COMMENTED OUT BECAUSE THEY ARE USED IN THE JQUERY UI EFFECT JS FILE
*/

"use strict";

// (1) Make the prisoner draggable
// $(`#prisoner`).draggable();

// (2) Make the prison draggable
// $(`#prison`).draggable();

// (3) Constrain prisoner's movements horizontally
// $(`#prisoner`).draggable({
//   axis: `x`
// });

// (4) Constrain prisoner's movements horizontally within the prison
// $(`#prisoner`).draggable({
//   axis: `x`,
//   containment: `#prison`
// });

// (5) Trigger events handlers to make things interesting
// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   // Underline prisoner text when dragged
//   start: function(event, ui) {
//     $(this).css(`text-decoration`, `underline`);
//   },
//   // Revert to normal text when stopped dragging
//   stop: function(event, ui) {
//     $(this).css(`text-decoration`, `none`);
//   }
// });

// (6) Make prisoner undraggable after 5 seconds
// setTimeout(function() {
//   $(`#prisoner`).draggable(`disable`)
// }, 5000)

// (7) Make the prisoner escape/disappear by dropping them in the tunnel
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     // After prisoner is removed the tunnel will automatically center itself
//     $(`#prisoner`).remove();
//   }
// });

// (8) Call droppable jQuery UI function for any DRAGGABLE jQuery object
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     // Note: how we didn’t need to select ui.draggable with $() because, as the documentation says, ui.draggable is already a jQuery object
//     ui.draggable.remove();
//   }
// });