/**
Intro to jQuery
Lam Ky Anh Do

Experimenting jQuery without p5.js
*/

"use strict";

// (1) Access ID tag by jQuery
// let $mainHeading = $(`#main-heading`); // Having the $ before any tag/id/class is to refer to jquery
// Set CSS text color with jQuery
// $mainHeading.css(`color`, `#339966`);

// (2) Same thing but less lengthy
// $(`.header`).css(`color`, `#ff0000`); // The common way to access HTML files and CSS features with jQuery

// (3) Modify a group of CSS features of a class
// $(`.header`).css(`color`, `red`);
// $(`.header`).css(`background-color`, `black`);
// $(`.header`).css(`font-size`, `3rem`);

// More efficient to write by declaring a var and use it in place of the jQuery version of "getElementByClassName":
let $headers = $(`.header`);

$headers.css(`color`, `blue`);
$headers.css(`background-color`, `black`);
$headers.css(`font-size`, `3rem`);

// (4) Set up multiple CSS features at the same time
// $(`.header`).css({
//   "color": `yellow`,
//   "background-color": `black`,
//   "font-size": `10rem`
// });

// (5) Modify text with jQuery
// $(`#example-span`).text(`a Spaniel`);

// (6) Use var to modify text by reversing it with jQuery
let spanText = $(`#example-span`).text();
let reversedSpanText = spanText.split(``).reverse().join(``);
$(`#example-span`).text(reversedSpanText);

// (7) Use var to modify HTML element by making the text bold with jQuery
let spanHTML = $(`#example-span`).html();
$(`#example-span`).html(`<strong>${spanHTML}</strong>`);

// (8) Create an editable content using attribute element (attr)
$(`#main-heading`).attr(`contenteditable`, `true`);

// (9) Change text link using jQuery
let $link = $(`#thicc-link`);

if ($link.attr(`href`) === `https://thi.cc`) {
  $link.text(`THICC`);
}

// (10) Create sentences with jQuery
let $p = $(`<p></p>`);
// Set text
$p.text(`Fresh, fresh paragraph!`);
// Select section to add text
$(`#second-section`).prepend($p); // At the beginning of the section
$(`#second-section`).append($p); // At the end of the section
$(`h2`).after($p); // Immediately after h2 texts

// (11) Remove elements with jQuery
// $(`#main-heading`).remove(); // Remove main header
// $(`.header`).remove(); // Remove headers