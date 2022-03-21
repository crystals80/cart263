/**
Desperately Seeking for Bubble Tea
Lam Ky Anh Do

An emoji in search of satisfying sadness in a world of positivity (seeking for emotions in space)
*/

"use strict";

// Create a standard configuration object
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

  scene: [Boot, Play], // Call Play and Boot scenes
};

// Start the game giving it the configuration object
let game = new Phaser.Game(config);