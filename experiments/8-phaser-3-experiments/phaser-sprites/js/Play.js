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

    /* // REMOVED because we don't need it anymore
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
    this.add.text(100, 100, gameDescription, style);*/

    // (21) Display image as a var since it is easier to call it later
    this.wall = this.add.image(100, 100, `wall`);
    // (22) Set a tint to image
    this.wall.setTint(0xdd3333); // "0x" is hex and "dd3333" is the colour code

    // (24) Add spritesheet as sprite
    this.avatar = this.add.sprite(200, 200, `avatar`);

    // (27) Tidy the animation var in a function
    this.createAnimations();

    // (26) Play animation
    this.avatar.play(`avatar-moving`);
  }

  // (6) Call update function every single frame
  update() {
    // Test if class works
    // console.log(`Play scene updated`);
  }

  createAnimations() {
    // (25) Create animation
    this.anims.create({
      // Key name of animation
      key: `avatar-moving`,
      // Helper Function: generateFrameNumbers helps figure out the frames of the animation you want
      frames: this.anims.generateFrameNumbers(`avatar`, {
        // by specifying the starting and ending frames
        start: 0, // 1st frame is counted as 0
        end: 6 // Therefore, the last frame is 6
      }),
      // Specify how fast the animation is
      frameRate: 24,
      // Specify how many times it should be animated
      // repeat: 0, // This won't play DUH
      // repeat: 2, // This will play 2 times and then stops
      repeat: -1, // This will loop the animation
    });

    // (28) Create a new animation (not moving for now)
    // this.anims.create({
    //   key: `avatar-idle`,
    //   frames: this.anims.generateFrameNumbers(`avatar`, {
    //     start: 0,
    //     end: 0
    //   }),
    //   frameRate: 24,
    //   repeat: 0,
    // });
  }
}