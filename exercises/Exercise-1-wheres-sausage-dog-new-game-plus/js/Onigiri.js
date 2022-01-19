// Declare var replacing "this"
let self;

class Onigiri extends Animal {
  constructor(x, y, image) {
    super(x, y, image);
    this.found = false; // For tracking finding
    this.speed = 0.1; // For spinning
    self = this; // Variable for "this" (see mousePressed())
    this.newAngle = 0; // New angle to not interfere with "this.angle" in parent class (aka not for spinning)
    this.newSpeed = 0.125; // For making onigiri jumping up and down
  }

  update() {
    super.update(); // Take after the update() of the parent class displaying onigiri

    // If onigiri is found, it will spin
    if (this.found) {
      this.angle += this.speed;
    }
  }

  setEndingVariable() {
    this.angle = 0;
    this.x = 4 * width / 9;
    this.y = height / 2.5;
  }

  updateEnd() {
    super.update(); // Take after the update() of the parent class displaying onigiri

    // See value range (between -10 and 10) of sin() in console
    // Using sin() because it makes movement smoother than mapping noise()
    console.log(sin(this.newAngle) * 6);
    // Make onigiri bounces up and down
    this.newAngle += this.newSpeed;
    let changeY = sin(this.newAngle) * 6;
    this.y += changeY; // New y position takes after previous y position according to sin()
  }

  winState() {
    // Display ending state
    state = `ending`;
  }

  mousePressed() {
    // If mouse is within the dimension of onigiri's img, then img is found when clicked
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;

      // Trigger state after a delay:

      // By adding ".bind(this)" it helps trigger any function in setTimeout (in a class file)
      //setTimeout(this.winState.bind(this), 5000);
      //setTimeout(self.winState, 5000); // Can also write like this

      // But if there is a need to add something else within the function inside setTimeout(), then write it out like this
      setTimeout(function() {
        // Trigger ending state after 5 sec
        state = 'ending';
        // Display a "new" onigiri after ending state is triggered
        self.setEndingVariable();
      }, 5000)
    }
  }
}