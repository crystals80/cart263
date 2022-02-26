/**
Intro to HTML, CSS and DOM
Lam Ky Anh Do

Experimenting HTML, CSS and DOM without p5.js
*/

"use strict";

// (1) Check if html page is loaded
// console.log(document);

// Written differently but same way to check
// setup();
//
// function setup() {
//   console.log(document);
// }

// (2) Customize main heading in JS
let mainHeading = document.getElementById('main-heading'); // Access element by ID
// mainHeading.style.color = '#339966';
// mainHeading.style.fontSize = '4rem';
// mainHeading.style.fontFamily = 'Courier, monospace';
// mainHeading.style.backgroundColor = 'red';

// Cuztomize main heading using CSS tags
// mainHeading.style['color'] = '#339966';
// mainHeading.style['font-size'] = '4rem';
// mainHeading.style['font-family'] = 'Courier, monospace';
// mainHeading.style['background-color'] = 'red';

// (3) Customize section
let wellSection = document.getElementById('well-section');
wellSection.style['color'] = '#339966';

// (4) Customize text from pronoun class
let pronoun = document.getElementById('pronoun');
// pronoun.innerText = 'you';

// (5) Change text using if statement
// if (pronoun.innerText === 'we') {
//   pronoun.innerText = 'you';
// }

// (6) Customize text (not as strings so you can add tags within the '')
// pronoun.innerHTML = '<strong>you</strong>'

// (7) Change image using setAtrribute
let image = document.getElementById('clown-image');
image.setAttribute('src', 'https://loremflickr.com/320/240/clown');

// (8) Customize header
let headers = document.getElementsByClassName('header'); // Access elements by class

// Change every header font colour to red
// for (let i = 0; i < headers.length; i++) {
//   headers[i].style['color'] = '#ff0000';
// }

// (9) Customize tag
let h2s = document.getElementsByTagName('h2'); // Access elements by tag

// Change every header font colour to red
for (let i = 0; i < h2s.length; i++) {
  h2s[i].style['color'] = '#ef5f00';
}

// (10) Customize header
let headings = document.querySelectorAll('h1,h2'); // Access elements by qyery selecting

// Change every header font colour to red
for (let i = 0; i < headings.length; i++) {
  headings[i].style['color'] = '#ee0d50';
}

// (11) Add new text by creating an element
let newP = document.createElement('p');
newP.innerText = 'Gosh, I sure do like clowns';

// (12) Put new text element after the image
let clownSection = document.getElementById('clown-section');
clownSection.appendChild(newP); // append = after & prepend = before

// (13) Remove child from parent
mainHeading.parentElement.removeChild(mainHeading);