class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.angle = 0;
  }

  update() {
    this.display();
  }

  display() {
    push()
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    // x and y of image() is 0 because they were stated in translate()
    image(this.image, 0, 0);
    pop();
  }

  overlap(x, y) {
    // Check whether the provided coordinates are inside the animal’s image dimensions and returns true if they are. OTHERWISE false
    // Taken from child class (SausageDog) but replacing mouseX/Y by x and y
    if (x > this.x - this.image.width / 2 && x < this.x + this.image.width / 2 && y > this.y - this.image.height / 2 && y < this.y + this.image.height / 2) {
      return true;
    } else {
      return false;
    }
  }
}