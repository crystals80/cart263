/**
Project 1: A Glimpse of Project SAO
Lam Ky Anh Do

Reanimate an opening scene from Sword Art Online
*/

"use strict";

let angle = 0; // Set angle in degrees at 0
let industryLight;

function preload() {
  industryLight = loadFont('assets/fonts/Industry-Light.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // rectMode(CENTER); // Set rect(s) location to its center
  angleMode(DEGREES); // Set rotation angle to degrees instead of radians
}

function draw() {
  background(70, 64, 54); //33, 27, 20 // 68, 62, 53

  push();
  fill(48, 52, 55);
  stroke(0);
  rect(0, 0, 175, height);
  rect(width - 175, 0, 175, height);
  pop();

  push();
  textFont(industryLight);
  fill(0);
  textSize(80);
  textAlign(RIGHT);
  text(`2022/11/06 sun`, 50 + width / 2, 150);
  pop();
}