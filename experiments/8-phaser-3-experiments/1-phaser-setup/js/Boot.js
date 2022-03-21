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
    this.scene.start(`play`);
  }

  // (17) Call update function every single frame
  update() {

  }

}