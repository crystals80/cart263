/********************************
Bubble Classes
Lam Ky Anh Do

This js file contains the parent Pin class along with its specific children Pin classes ( classes). It shows its constructor and how it is displayed
********************************/

// Set up parent bubble class
class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height;
    this.size = 50;
    this.vx = 0;
    this.vy = random(-3, 0);
    this.fill = {
      r: random(255),
      g: random(255),
      b: random(255),
    }
  }

  // Function wrapping up all functions below together so it won't be lengthy in the main script
  // Function allowing new parameters in children classes
  update() {
    this.resetBubble();
    this.move();
    this.display();
  }

  // Function to reset bubble position once the previous bubble is popped
  resetBubble() {
    // Check if bubble pops by using the distance between user's finger tip and circle
    let d1 = dist(thumbPin.tipX, thumbPin.tipY, this.x, this.y);
    let d2 = dist(indexPin.tipX, indexPin.tipY, this.x, this.y);
    let d3 = dist(pinkyPin.tipX, pinkyPin.tipY, this.x, this.y);
    // If user's finger tip is within a bubble, it pops
    if (d1 < this.size / 2 || d2 < this.size / 2 || d3 < this.size / 2) {
      // And re-position at a new place at the bottom
      this.x = random(width);
      this.y = height;
      score += 1; // Gain a score every time a bubble is popped
    }
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
    // Display bubble in random colors
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}