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
    // Load avatar images
    this.load.image(`hungry-avatar`, `assets/images/dizzy-face.png`);
    this.load.image(`satisfied-avatar`, `assets/images/relieved-face.png`);
    // Load THE satisfying food
    this.load.image(`bubble-tea`, `assets/images/bubble-tea.png`);
    this.load.image(`peach`, `assets/images/peach.png`);
    this.load.image(`strawberry`, `assets/images/strawberry.png`);
    this.load.image(`sushi`, `assets/images/sushi.png`);
    this.load.image(`taco`, `assets/images/taco.png`);
    this.load.image(`fries`, `assets/images/french-fries.png`);
    // Load the disliked food
    this.load.image(`alcohol`, `assets/images/cocktail.png`);
    this.load.image(`eggplant`, `assets/images/eggplant.png`);
    this.load.image(`onion`, `assets/images/onion.png`);
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