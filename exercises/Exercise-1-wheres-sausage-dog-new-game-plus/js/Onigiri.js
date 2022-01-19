class Onigiri extends Animal {
  constructor(x, y, image) {
    super(x, y, image);
    this.found = false; // For tracking finding
    this.rotationSpeed = 0.1; // For spinning
  }

  update() {
    super.update(); // Take after the update() of the parent class

    // If onigiri is found, it will spin
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    // If mouse is within the dimension of Sausage Dog's img, then img is found when clicked
    //if (mouseX > this.x - this.image.width / 2 && mouseX < this.x + this.image.width / 2 && mouseY > this.y - this.image.height / 2 && mouseY < this.y + this.image.height / 2) {

    // Same as previous condition but more neat as previous condition moved to parent class
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}