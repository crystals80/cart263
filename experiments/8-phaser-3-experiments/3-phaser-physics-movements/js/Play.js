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
    // (29) Add .physics property to let the program knows that we are going to use physics
    this.wall = this.physics.add.image(100, 100, `wall`);
    // (22) Set a tint to image
    this.wall.setTint(0xdd3333); // "0x" is hex and "dd3333" is the colour code

    // (24) Add spritesheet as sprite
    this.avatar = this.physics.add.sprite(200, 200, `avatar`); // See (29) for .pĥysics

    // (27) Tidy the animation var in a function
    this.createAnimations();

    // (30) Set up physics velocity
    // This will move the avatar to the right at 100px/sec
    // this.avatar.setVelocityX(100); // REMOVED because no longer is an automated movement

    // (26) Play animation
    // this.avatar.play(`avatar-moving`);
    // (35) Change the playing animation because of cursor movement setup
    this.avatar.play(`avatar-idle`);

    // (31) Stop moving once hit the edge of canvas to keep it on canvas
    this.avatar.setCollideWorldBounds(true);

    // (32) Allow user to use keyboard arrows to move avatar
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // (6) Call update function every single frame
  update() {
    // Test if class works
    // console.log(`Play scene updated`);

    // (33) Set up cursors movement
    this.avatar.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(300);
    }
    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-300);
    } else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(300);
    }

    // (34) Play animation when avatar is moving
    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
      // If avatar is moving on the x/y axis, play animation
      this.avatar.play(`avatar-moving`, true);
      // true here is saying "If the animation is already playing then don't restart it every frame"
      // This will make the animation work (whoohoo)
    } else {
      // Otherwise, stop animation when avatar is not moving
      this.avatar.play(`avatar-idle`, true);
    }
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

    // (28) Create a new animation (basically just the 1st of the 7 frames)
    this.anims.create({
      key: `avatar-idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 0
      }),
      frameRate: 24,
      repeat: 0,
    });
  }
}