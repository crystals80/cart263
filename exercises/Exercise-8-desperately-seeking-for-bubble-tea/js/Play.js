// Create Play class
class Play extends Phaser.Scene {
  // Construct Play class
  constructor() {
    // Key name of this scene is "play"
    super({
      key: `play`,
    });
  }

  create() {
    // Create neutral-face emoji
    this.avatar = this.physics.add.sprite(400, 300, `avatar`);
    // Set boundary to keep avatar on canvas
    this.avatar.setCollideWorldBounds(true);

    // Display bubble tea emoji
    this.bubbleTea = this.physics.add.sprite(0, 0, `bubble-tea`);
    // Create random position for bubble tea emoji
    Phaser.Actions.RandomRectangle([this.bubbleTea], this.physics.world.bounds);

    // Create agroup of thumbs-up emojis
    this.disgusted = this.physics.add.group({
      key: 'alcohol',
      quantity: 20,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    // Generate thumbs-up emojis (this.happiness.getChildren()) at random position within the canvas (this.physics.world.bounds)
    Phaser.Actions.RandomRectangle(this.disgusted.getChildren(), this.physics.world.bounds);

    // Check overlap of neutral-face emoji and thumbs-down emoji
    this.physics.add.overlap(this.avatar, this.bubbleTea, this.happyStomach, null, this);
    // Check collision of neutral-face emoji and thumbs-down emoji
    this.physics.add.collider(this.avatar, this.bubbleTea);
    // Check collision of neutral-face emoji and group of thumbs-up emojis
    this.physics.add.collider(this.avatar, this.disgusted);
    // Check collision of between each thumb-up emoji
    this.physics.add.collider(this.disgusted, this.disgusted);

    // Allow user to use keyboard arrows to move neutral-face emoji
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // Function to call new position of thumbs-down emoji
  happyStomach(avatar, bubbleTea) {
    // Generate new position for bubble tea emoji once it is hit by avatar
    Phaser.Actions.RandomRectangle([bubbleTea], this.physics.world.bounds);
  }

  update() {
    this.handleInput();
  }

  handleInput() {
    // Set up cursors movement
    if (this.cursors.left.isDown) {
      // If either left or right is pressed, rotate appropriately
      this.avatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    }
    // Otherwise stop rotating
    else {
      this.avatar.setAngularVelocity(0);
    }

    // Make avatar rotate as it moves
    if (this.cursors.up.isDown) {
      // If the up key is pressed, accelerate in the current rotation direction
      this.physics.velocityFromRotation(this.avatar.rotation, 200, this.avatar.body.acceleration);
    }
    // Otherwise, zero the acceleration
    else {
      this.avatar.setAcceleration(0);
    }
  }
}