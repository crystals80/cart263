/**
Phaser 3 Setup: Class Boot
Lam Ky Anh Do

Setting up class Boot for first scene of game (loading scene)
*/

// (11) Create Play class
class Boot extends Phaser.Scene {
  // (12) Construct Play class
  constructor() {
    // Key name of this scene is "play"
    super({
      key: `boot`,
    });
  }

  // (19) After drawing sprites on Piskel App and saved them as png, Load images
  preload() {
    // this refer to this scene
    this.load.image(`wall`, `assets/images/wall.png`);
    // (23) Load image as a spritesheet for animation
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      frameWidth: 32,
      frameHeight: 32,
      // Last frame is 6 because avatar.png has 7 frames
      endFrame: 6
    });
    // (20) Once image is loaded, launch play scene
    // Use arrow functions because anonymous functions don't work well
    this.load.on(`complete`, () => {
      this.scene.start(`play`)
    })
  }

  // (13) Call create function one time
  create() {
    // (14) Separate text style for string
    let style = {
      fontFamily: `sans-serif`,
      fontSize: `40px`,
      color: `#fff`
    };
    // (15) Create a var for string
    let loadingString = `Loading...!`
    // (16) Display text
    this.add.text(100, 100, loadingString, style);

    // (18) Switch to play scene
    // this.scene.start(`play`); // REMOVED because we need the image to load first before starting play scene
  }

  // (17) Call update function every single frame
  update() {

  }

}