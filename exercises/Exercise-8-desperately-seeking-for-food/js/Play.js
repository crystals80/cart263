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

    // Create random position for thumbs-down emoji
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    // Display thumbs-down emoji
    this.sadness = this.physics.add.sprite(x, y, `bubble-tea`);

    // Create agroup of thumbs-up emojis
    this.happiness = this.physics.add.group({
      key: 'alcohol',
      quantity: 120,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    // Generate thumbs-up emojis (this.happiness.getChildren()) at random position within the canvas (this.physics.world.bounds)
    Phaser.Actions.RandomRectangle(this.happiness.getChildren(), this.physics.world.bounds);

    // Check overlap of neutral-face emoji and thumbs-down emoji
    this.physics.add.overlap(this.avatar, this.sadness, this.getSad, null, this);
    // Check collision of neutral-face emoji and thumbs-down emoji
    this.physics.add.collider(this.avatar, this.sadness);
    // Check collision of neutral-face emoji and group of thumbs-up emojis
    this.physics.add.collider(this.avatar, this.happiness);
    // Check collision of between each thumb-up emoji
    this.physics.add.collider(this.happiness, this.happiness);

    // Allow user to use keyboard arrows to move neutral-face emoji
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // Function to call new position of thumbs-down emoji
  getSad(avatar, sadness) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    // Generate new position for thumbs-down emoji once it is overlapped by neutral-face emoji
    this.sadness.setPosition(x, y);
  }

  update() {
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