// Create Ending class
class Ending extends Phaser.Scene {
  // Construct Ending class
  constructor() {
    // Key name of this scene is "ending"
    super({
      key: `ending`,
    });
  }

  // Function storing ending scene elements
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
    let titleString = `Great job!`;
    let thankYouString = `Thank you for helping Mx. Emoji getting their daily dose of energy`;
    let instructionString = `Press any key to let Mx. Emoji go to sleep`;
    // Display strings
    this.add.text(310, 150, titleString, titleStyle);
    this.add.text(110, 300, thankYouString, textStyle);
    this.add.text(278, 500, instructionString, instructionStyle);

    // Switch boot scene to play scene
    this.switchToBootScene();
  }

  // Function allowing user to switch to next scene on mouseclick
  switchToBootScene() {
    this.input.once(`pointerdown`, function(event) {
      this.scene.start(`boot`);
    }, this);
  }
}