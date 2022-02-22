/**
In-class Activity - Week 7
Lam Ky Anh Do

Reviewing lecture 5

1- How do we iterate via CSS classes in JS?
*/

"use strict";

// let paras = document.querySelectorAll(.
//   `paragraph`);
//
// let parasArray = Array.from(paras);
// parasArray.push("New Thing!");
//
// // Treat it like a std array
// for (let i = 0; i < paragraph.length; i++) {
//   let p = paras[i];
//   p.innerHTML = `Changed`;
//   p.style.color = `#ff0000`;
// }

// (1a) Using forEach() to modify CSS classes

// Use forEach with a named function
// Not guaranteed to work
// paras.forEach(hoohah);
//
// function hoohah(element) {
//   element.innerHTML = `Hoo-Hah!`;
// })

// Use forEach with an anonymous function
// Works better like this
// paras.forEach(function(element) {
//   element.innerHTML = `Hoo-Hah!`;
// })

// (1c) Using CSS IDs instead of CSS classes
//
// paras.forEach(hoohah);

// function hoohah(element) {
//   element.getElementById(`p2`) = `Hoo-Hah!`;
// })

// Use forEach to modify/add/remove a specific class
/*paras.forEach(hoohah);

function hoohah(element) {
  let = text = element.innerText;
  if (text.includes(`Lorem`)) {
    // element.setAttribute(`class`,`highlight`);
    element.classList.add(`highlight`); // Can add
    // element.classList.remove(`highlight`); // And can remove
    // element.classList.add(`highlight otherclass`); // Can have new classes
  }
})*/

// (2a) How to animate HTML using p5.js by flickering highlight class
/*let p1;

function setup() {
  let p1 = document.getElementById(`p1`);
  window.requestAnimationFrame(draw);
}

function draw(){
  p1.classList.toggle(`highlight`);

  window.requestAnimationFrame(draw)
}*/

// (2b) How to animate HTML using p5.js by moving #p1
let p1;
let offsetX = 0;

function setup() {
  let p1 = document.getElementById(`p1`);
  p1.style.position = `relative`;
  window.requestAnimationFrame(draw);
}

function draw() {
  p1.style.left = `${offsetX}px`;
  offsetX += 2;

  window.requestAnimationFrame(draw)
}