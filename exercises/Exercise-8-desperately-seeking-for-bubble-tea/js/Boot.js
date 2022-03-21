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
    this.load.image(`avatar`, `assets/images/dizzy-face.png`);
    this.load.image(`bubble-tea`, `assets/images/bubble-tea.png`);
    this.load.image(`alcohol`, `assets/images/cocktail.png`);
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