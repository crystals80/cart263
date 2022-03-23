/**
Project 2: Escape the Gamingverse
Lam Ky Anh Do

Create an escape room filled with Genshin impact content, including the puzzle

Note: I will attempt making the puzzle understandable for non- Genshin Impact players.
*/

"use strict";

let state = `lobby`;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(255);

  if (state === `title`) {
    title();
  } else if (state === `welcomeMsg`) {
    welcomeMsg();
  } else if (state === `lobby`) {
    lobby();
  } else if (state === `gamingArea`) {
    gamingArea();
  } else if (state === `changingArea`) {
    changingArea();
  } else if (state === `restingArea`) {
    restingArea();
  } else if (state === `ceiling`) {
    ceiling();
  } else if (state === `floor`) {
    floor();
  } else if (state === `ending`) {
    ending();
  }
}

function lobby() {
  background(`#30c990`);
}

function gamingArea() {
  background(`#fd2663`);
}

function changingArea() {
  background(`#8203a1`);
}

function restingArea() {
  background(`#1d2563`);
}

function ceiling() {
  background(`#b8e12b`);
}

function floor() {
  background(`#131635`);
}