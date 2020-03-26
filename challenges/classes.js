// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume(length, width, height) {
    return this.length * this.width * this.height;
  }
  surfaceArea(length, width, height) {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(params) {
    super(params);
    this.length = params.length;
    this.width = params.width;
    this.height = params.height;
  }
  volume() {
    return Math.pow(this.length, 3); // Volume of a cube is length * (3 squared) // I like this better then the above :)
  }
  surfaceArea(length, width, height) {
    // No fancy Math Method :(
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cublet = new CubeMaker({
  length: 10,
  width: 10,
  height: 10
});

console.log(`Total Volume of Cublet is ${cublet.volume()}`);
console.log(`Total Surface Area of Cublet is ${cublet.surfaceArea()}`);
