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

    this.satisfiedFood();
    this.dislikedFood();

    // Display score counter on top of simulation
    this.scoreUpdate();

    // Allow user to use keyboard arrows to move hungry avatar emoji
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  scoreUpdate() {
    // Set score counter at 0
    this.score = 0;
    // Style text strings
    let textStyle = {
      fontFamily: `sans-serif`,
      fontSize: `16px`,
      color: `#fff`,
      backgroundColor: `rgba(255,255,255, 0.1)'`,
      padding: 10,
    };
    // Create strings
    this.scoreText = this.add.text(50, 50, `Mx. Emoji Satisfied: 0`, textStyle);
  }

  // Function storing THE satisfying food constructors
  satisfiedFood() {
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

    // Display peach emoji
    this.handleFood(this.peach, `peach`);
    // Display strawberry emoji
    this.handleFood(this.strawberry, `strawberry`);
    // Display sushi emoji
    this.handleFood(this.sushi, `sushi`);
    // Display taco emoji
    this.handleFood(this.taco, `taco`);
    // Display fries emoji
    this.handleFood(this.fries, `fries`);
  }

  // Function to storing food constructors, which avoid repetition
  handleFood(foodName, imageKey) {
    // Display fries emoji
    foodName = this.physics.add.sprite(0, 0, imageKey);
    // Set boundary to keep hungry avatar on canvas
    foodName.setCollideWorldBounds(true);
    // Create random position for fries emoji
    Phaser.Actions.RandomRectangle([foodName], this.physics.world.bounds);
    // Check overlap of hungry avatar emoji and fries emoji
    this.physics.add.overlap(this.hungryAvatar, foodName, this.happy, null, this);
    // Check collision of hungry avatar emoji and fries emoji
    this.physics.add.collider(this.hungryAvatar, foodName);
  }

  // Function to call new position of satisfying food emoji
  satisfied(avatar, bubbleTea) {
    // Generate new position for bubble tea emoji once it is hit by hungry avatar
    Phaser.Actions.RandomRectangle([bubbleTea], this.physics.world.bounds);

    // Add 10 points every time bubble tea is overlapped by hungry avatar emoji
    this.score += 10;
    console.log(this.score);
    this.scoreText.setText(`Mx. Emoji Satisfied: ` + this.score);
  }

  // Function to call new position of good food emojis
  happy(avatar, peach, strawberry, sushi, taco, fries) {
    // Generate new position for all good food emojis once it is hit by hungry avatar
    Phaser.Actions.RandomRectangle([peach], this.physics.world.bounds);
    Phaser.Actions.RandomRectangle([strawberry], this.physics.world.bounds);
    Phaser.Actions.RandomRectangle([sushi], this.physics.world.bounds);
    Phaser.Actions.RandomRectangle([taco], this.physics.world.bounds);
    Phaser.Actions.RandomRectangle([fries], this.physics.world.bounds);

    // Add a range of 1 to 3 points every time bubble tea is overlapped by hungry avatar emoji
    this.score += Math.floor(Math.random() * 3) + 1;
    console.log(this.score);
    this.scoreText.setText(`Mx. Emoji Satisfied: ` + this.score);
  }

  // Function storing disliked food constructors
  dislikedFood() {
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

    // this.dislikedFoodGroup = [this.alcohol, this.eggplant, this.onion];

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
    // Run handleInput on every frame
    this.handleInput();
    // Switch play scene to ending scene
    this.switchToEndingScene();
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

  // Function allowing user to the next scene once score 100 is achieved
  switchToEndingScene() {
    // Switch to ending scene
    if (this.score >= 10) {
      this.scene.start(`ending`);
      console.log(this.scene);
    }
  }
}