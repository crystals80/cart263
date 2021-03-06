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
    // Load THE satisfying food images
    this.load.image(`bubbleTea`, `assets/images/bubble-tea.png`);
    // Load the good food images
    this.load.image(`peach`, `assets/images/peach.png`);
    this.load.image(`strawberry`, `assets/images/strawberry.png`);
    this.load.image(`sushi`, `assets/images/sushi.png`);
    this.load.image(`taco`, `assets/images/taco.png`);
    this.load.image(`fries`, `assets/images/french-fries.png`);
    // Load the disliked food images
    this.load.image(`alcohol`, `assets/images/cocktail.png`);
    this.load.image(`eggplant`, `assets/images/eggplant.png`);
    this.load.image(`onion`, `assets/images/onion.png`);
    // Once assets are loaded, launch play scene
    this.load.on(`complete`, () => {
      this.scene.start(`boot`);
      console.log(this.scene);
    });
  }

  // Function storing title scene elements
  create() {
    // Style title string
    let titleStyle = {
      fontFamily: `sans-serif`,
      fontSize: `40px`,
      color: `#fff`,
      align: `center`,
    };
    // Style text strings
    let textStyle = {
      fontFamily: `sans-serif`,
      fontSize: `20px`,
      color: `#fff`,
      align: `center`,
    };
    let instructionStyle = {
      fontFamily: `sans-serif`,
      fontSize: `13px`,
      color: `#fff`,
      align: `center`,
    };
    // Create strings
    let titleString = `Desperately Seeking for Bubble Tea!`;
    let introString = `It has been 8 hours since midnight that \n Mx. Emoji missed out of his bubble tea intake!`;
    let instructionString1 = `Help Mx. Emoji get their daily dose of bubble tea!`;
    let instructionString2 = `Click anywhere to lend Mx. Emoji a hand`;
    // Display strings
    this.add.text(75, 150, titleString, titleStyle);
    this.add.text(188, 275, introString, textStyle);
    this.add.text(180, 375, instructionString1, textStyle);
    this.add.text(281, 500, instructionString2, instructionStyle);

    // Switch boot scene to play scene
    this.switchToPlayScene();
  }

  // Function allowing user to switch to next scene on mouseclick
  switchToPlayScene() {
    this.input.once(`pointerdown`, function(event) {
      this.scene.start(`play`);
    }, this);
  }

  update() {

  }

}