// import shape classes from ./shapes.js
const { Circle, Square, Triangle} = require("./shapes.js");

//circle w/ magenta background
describe("Circle test", () => {
  test("test for a circle with a #magenta background", () => {
    const shape = new Circle();
    shape.setColor("magenta");
    expect(shape.render()).toEqual(
      '<circle cx="300" cy="230" r="160" fill="#magenta" />'
    );
  });
});

//square w/ purple background test
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="300" height="300" fill="purple" />'
    );
  });
});

//triangle w/ blue background test
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="100,36 300,300 12,300" fill="blue" />'
    );
  });
});

