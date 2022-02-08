class Pin {
  // Function to set up index finger
  constructor(fingerName) {
    this.fingerName = fingerName;
  }

  // Function wrapping up all functions below together so it won't be lengthy in the main script
  // Function allowing new parameters in children classes
  update(predictions) {
    if (predictions.length > 0) {
      this.hand = predictions[0];
      this.index = this.hand.annotations[this.fingerName];
      // Set coordinates of index finger
      this.tip = this.index[3];
      this.base = this.index[0];
      this.tipX = this.tip[0];
      this.tipY = this.tip[1];
      this.baseX = this.base[0];
      this.baseY = this.base[1];
    }
    this.display();
  }

  // Function to display index finger as a pin
  display() {
    // Draw a line connecting the tip of index finger to its base (Pin body)
    push();
    noFill();
    stroke(255); // Black
    strokeWeight(2);
    line(this.baseX, this.baseY, this.tipX, this.tipY);
    pop();

    // Draw a circle at the base of the index finger (Pin head)
    push();
    noStroke();
    fill(255, 255, 0); // Yellow
    ellipse(this.baseX, this.baseY, 20, 20);
    pop();
  }
}