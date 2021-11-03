"use strict";

// ES6 CLASSES

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // method  dont need to write "function" and no ";"
  calcArea() {
    return this.height * this.width;
  }
}
// using "extends" copying all the methods from Rectangle
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    // calling superconstructor which will get "  this.height = height;
    // this.width = width;" from Rectangle
    // SUPER MUST BE ALWAYS FIRST
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps() {
    console.log(`Text: ${this.text}, Color ${this.bgColor}`);
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 2000

const div = new ColoredRectangleWithText(25, 10, "Hello world", "red");

div.showMyProps(); // Text: Hello world, Color red
console.log(div.calcArea()); // 250
