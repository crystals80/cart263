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
    // Create hungry avatar emoji
    this.hungryAvatar = this.physics.add.sprite(400, 300, `hungry-avatar`);
    // Set boundary to keep hungry avatar on canvas
    this.hungryAvatar.setCollideWorldBounds(true);

    this.happyStomach();
    this.agitatedStomach();

    // Allow user to use keyboard arrows to move hungry avatar emoji
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // Function storing THE satisfying food constructor
  happyStomach() {
    // Display bubble tea emoji
    this.bubbleTea = this.physics.add.sprite(0, 0, `bubble-tea`);
    // Set boundary to keep hungry avatar on canvas
    this.bubbleTea.setCollideWorldBounds(true);
    // Create random position for bubble tea emoji
    Phaser.Actions.RandomRectangle([this.bubbleTea], this.physics.world.bounds);
    // Check overlap of hungry avatar emoji and bubble tea emoji
    this.physics.add.overlap(this.hungryAvatar, this.bubbleTea, this.satisfied, null, this);
    // Check collision of hungry avatar emoji and bubble tea emoji
    this.physics.add.collider(this.hungryAvatar, this.bubbleTea);
  }

  // Function to call new position of bubble tea emoji
  satisfied(avatar, bubbleTea) {
    // Generate new position for bubble tea emoji once it is hit by hungry avatar
    Phaser.Actions.RandomRectangle([bubbleTea], this.physics.world.bounds);
  }

  // Function storing disliked food constructors
  agitatedStomach() {
    // Create a group of cocktail emojis
    this.alcohol = this.physics.add.group({
      key: 'alcohol',
      quantity: 40,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    // Create a group of eggplant emojis
    this.eggplant = this.physics.add.group({
      key: 'eggplant',
      quantity: 40,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    // Create a group of onion emojis
    this.onion = this.physics.add.group({
      key: 'onion',
      quantity: 40,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    // this.dislikedFood = [this.alcohol, this.eggplant, this.onion];

    // Generate alcohol emojis (this.alcohol.getChildren()) at random position within the canvas (this.physics.world.bounds)
    Phaser.Actions.RandomRectangle(this.alcohol.getChildren(), this.physics.world.bounds);
    // Check collision between hungry avatar emoji and group of cocktail emojis
    this.physics.add.collider(this.hungryAvatar, this.alcohol);
    // Check collision between each cocktail emoji
    this.physics.add.collider(this.alcohol, this.alcohol);

    // Same for eggplant and onion
    Phaser.Actions.RandomRectangle(this.eggplant.getChildren(), this.physics.world.bounds);
    this.physics.add.collider(this.hungryAvatar, this.eggplant);
    this.physics.add.collider(this.eggplant, this.eggplant);
    Phaser.Actions.RandomRectangle(this.onion.getChildren(), this.physics.world.bounds);
    this.physics.add.collider(this.hungryAvatar, this.onion);
    this.physics.add.collider(this.onion, this.onion);
  }

  update() {
    this.handleInput();
  }

  // Function storing avatar control using arrow keys
  handleInput() {
    // Set up cursors movement
    if (this.cursors.left.isDown) {
      // If either left or right is pressed, rotate appropriately
      this.hungryAvatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.hungryAvatar.setAngularVelocity(150);
    }
    // Otherwise stop rotating
    else {
      this.hungryAvatar.setAngularVelocity(0);
    }

    // Make avatar rotate as it moves
    if (this.cursors.up.isDown) {
      // If the up key is pressed, accelerate in the current rotation direction
      this.physics.velocityFromRotation(this.hungryAvatar.rotation, 200, this.hungryAvatar.body.acceleration);
    }
    // Otherwise, zero the acceleration
    else {
      this.hungryAvatar.setAcceleration(0);
    }
  }
}