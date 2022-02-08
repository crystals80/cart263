class Bubble {
  // Function to set up bubble
  constructor(x, y) {
    this.x = random(width);
    this.y = height;
    this.size = 100;
    this.vx = 0;
    this.vy = -2;
  }

  // Function wrapping up all functions below together so it won't be lengthy in the main script
  // Function allowing new parameters in children classes
  update() {
    this.move();
    this.display();
  }

  // Function to set up bubble movement
  move() {
    // Move bubble
    this.x += this.vx;
    this.y += this.vy;

    // Set bubble position (move it into canvas)
    if (this.y < 0) {
      this.x = random(width);
      this.y = height;
    }
  }

  // Function to display bubbles to pop
  display() {
    // Display bubble with blue gradient
    push();
    fill(0, 100, 200); // Blue
    noStroke();
    ellipse();
    pop();
  }
}