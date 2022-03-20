/**
Phaser 3 Setup: Class Play
Lam Ky Anh Do

Setting up class Play for game (simulation scene)
*/

// (3) Create Play class
class Play extends Phaser.Scene {
  // (4) Construct Play class
  constructor() {
    // Key name of this scene is "play"
    super({
      key: `play`,
    });
  }

  // (5) Call create function one time
  create() {
    // Test if class works
    // console.log(`Play scene created`);

    // (9) Separate text style for string
    let style = {
      fontFamily: `sans-serif`,
      fontSize: `40px`,
      color: `#fff`
    };
    // (10) Create a var for string
    let gameDescription = `Think of a number... wrong!`
    // (8) Display text
    // .add creates and add whatever in the scene
    this.add.text(100, 100, gameDescription, style);
  }

  // (6) Call update function every single frame
  update() {
    // Test if class works
    // console.log(`Play scene updated`);

  }

}