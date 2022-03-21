// Create Boot class
class Boot extends Phaser.Scene {
  // Construct Boot class
  constructor() {
    // Key name of this scene is "boot"
    super({
      key: `boot`,
    });
  }

  // Function to load assets
  preload() {
    // Load image
    this.load.image(`avatar`, `assets/images/neutral-face.png`);
    this.load.image(`thumbs-down`, `assets/images/thumbs-down.png`);
    this.load.image(`thumbs-up`, `assets/images/thumbs-up.png`);
    // Once assets are loaded, launch play scene
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {

  }

  update() {

  }

}