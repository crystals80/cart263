/**
Phaser 3 Setup
Lam Ky Anh Do

Setting up Phaser 3
*/

"use strict";

// (1) Create a configuration object
let config = {
  // Property telling how the game will be shown (canvas, WEGL or auto aka both canvas and WEBGL)
  type: Phaser.AUTO,
  // Dimensions
  width: 800,
  height: 600,
  // Property specifying type of physics used in game
  physics: {
    default: `arcade`
  },
  // Property specifying different game scenes
  // (7) Call Play and Boot scenes
  scene: [Boot, Play]
};

// (2) Start the game giving it the configuration object
let game = new Phaser.Game(config);