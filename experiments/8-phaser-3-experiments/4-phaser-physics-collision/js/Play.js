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

  // (5) Call create function one time (similar to p5.js setup function)
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

    /*
    // (21) Display image as a var since it is easier to call it later
    // (29) Add .physics property to let the program knows that we are going to use physics
    this.wall = this.physics.add.image(100, 100, `wall`);
    // (36) Make wall object immovable
    this.wall.setImmovable(true); // If this is not here, you will be kicking the wall with avatar
    // (22) Set a tint to image
    this.wall.setTint(0xdd3333); // "0x" is hex and "dd3333" is the colour code
    */ // REMOVED because group of walls was created

    // (40) Create a group of multiple walls
    this.walls = this.physics.add.group({
      // (41) Configure group
      // Key name of group
      key: `wall`,
      // Set group of walls immovable
      immovable: true,
      // Specify the number of walls
      quantity: 100,
    })
    // (42) Access each wall...
    // .children is the walls in the group
    this.walls.children.each(function(wall) {
      // (43) ...to generate a random position for each wall
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      wall.setPosition(x, y);
      // Set tint to walls
      wall.setTint(0xdd3333);
    }, this) // REMEMBER TO CALL THE CONTEXT else it doesn't work

    // (45) Create group of collectables
    this.collectables = this.physics.add.group({
      key: `wall`,
      immovable: true,
      quantity: 100,
    })
    this.collectables.children.each(function(collectable) {
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      collectable.setPosition(x, y);
      collectable.setTint(0x33dd33);
    }, this)

    // (38) Add another wall to check overlapping conditions
    /*this.collectable = this.physics.add.image(300, 300, `wall`);
    this.collectable.setTint(0x33dd33); */ // REMOVED because group of collectable is created
    // this.collectable2 = this.physics.add.image(400, 300, `wall`); REMOVED to make Phaser groups
    // this.collectable2.setTint(0x33dd33); REMOVED to make Phaser groups

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

    // (37) Set objects that will collide with each other
    // this.physics.add.collider(this.avatar, this.wall); // REMOVED because group of walls was created
    // (44) Set collision between avatar and group of walls
    this.physics.add.collider(this.avatar, this.walls);

    /*
        // (39) Set objects that will overlap each other
        // This will listen to avatar overlapping collectable; if so, then collectItem() is called without an extra method (null) while using the current context of the current scene (this) when the method (collectItem) is called
        // this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this); // by calling "null, this" one ensures that collectItem() will refer to this overlap event of avatar and collectable
        // Don't need to recall collectItem() because already written as function with vars in it
        // this.physics.add.overlap(this.avatar, this.collectable2, this.collectItem, null, this); REMOVED to make Phaser groups
    */ // REMOVED because group of collectables is created

    // (46) Check overlap of avatar and group of collectables
    this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);

    // (32) Allow user to use keyboard arrows to move avatar
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // Function to collect the 2nd wall when the avatar is overlapping it
  collectItem(avatar, collectable) {
    // Make 2nd wall disappear by destroying it
    collectable.destroy();
  }

  // (6) Call update function every single frame (simialr to p5.js draw function)
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