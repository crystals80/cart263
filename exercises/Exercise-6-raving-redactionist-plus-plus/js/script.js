/**
Raving Redactionist
Lam Ky Anh Do

Generate a redacted text being revealed and user has to make it redacted
*/

"use strict";

// Redact text onclick
$(`.top-secret`).on(`click`, redact);
// Make redactions disappears after every half a second
setInterval(revelation, 750);

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