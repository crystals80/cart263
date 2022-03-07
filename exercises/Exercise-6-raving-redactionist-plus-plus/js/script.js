/**
Raving Redactionist
Lam Ky Anh Do

Generate a redacted text being revealed and user has to make it redacted
*/

"use strict";

// Redact text onclick
$(`.top-secret`).on(`click`, redact);
// Make redactions disappears after every half a second
setInterval(revelation, 1000);

// Function to redact text
function redact(event) {
  // Show redactions
  $(this).removeClass(`revealed`);
  // Remove redactions
  $(this).addClass(`redacted`);
}

// Function to make redactions disappears
function revelation() {
  $(`.redacted`).each(attemptReveal);
}

// Function to randomize the redactions' disappearances and appearances
function attemptReveal() {
  // Set a random range
  let r = Math.random();
  if (r < 0.1) {
    // Remove redactions
    $(this).removeClass(`redacted`);
    // Show redactions
    $(this).addClass(`revealed`);
  }
}

$(`.top-secret`).on(`click`, function(event) {
  // Fade out the titles over two seconds...
  $(`.stamp`).fadeOut(2000, function() {
    // .. then fade them back in over two seconds
    $(this).fadeIn(2000);
    // Fade out the h2 over two seconds...
    $(`h2`).fadeOut(2000, function() {
      // .. then fade it back in over two seconds
      $(this).fadeIn(2000);
    });
  });
});

// If "Domino's" link is clicked, a warning message pops up...
$(`#domino-link`).on(`click`, function(event) {
  // ...showing a red background with warning text
  $(`#domino`).css('display', 'block');
})

// If "here" link is clicked, a warning message pops up...
$(`#top-secret-recipe-link`).on(`click`, function(event) {
  // ...showing a red background with warning text
  $(`#top-secret-recipe`).css('display', 'block');
})

// If click on "Click to proceed"
$(`#proceed`).on(`click`, function(event) {
  // ...navigate to link
  $(`#proceed a`).trigger('click');
})