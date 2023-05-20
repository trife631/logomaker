const fs = require("fs");
const inquirer = require("inquirer");

class Shape {
  constructor(color = "") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="300" cy="230" r="160" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="300" height="300" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="100,36 300,300 12,300" fill="${this.color}" />`;
  }
}

describe("Shapes", () => {
  it("renders a circle with a magenta background", () => {
    const shape = new Circle();
    shape.setColor("magenta");
    expect(shape.render()).toEqual(
      '<circle cx="300" cy="230" r="160" fill="magenta" />'
    );
  });

  it("renders a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="300" height="300" fill="purple" />'
    );
  });

  test("renders a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="100,36 300,300 12,300" fill="blue" />'
    );
  });
});

function generateLogo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter text (up to three characters):",
        name: "text",
      },
      {
        type: "input",
        message: "Choose text color (e.g. 'red' or '#FF0000'):",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose shape:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shape color (e.g. 'blue' or '#0000FF'):",
        name: "shapeColor",
        name: "shapeColor",
      },
    ])
    .then(function (answers) {
      const { shape, shapeColor, text, textColor } = answers;
      let svgString = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <g>`;
      switch (shape) {
        case "Triangle":
          svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`;
          break;
        case "Square":
          svgString += `<rect x="73" y="40" width="160" height="160" fill="${shapeColor}"/>`;
          break;
        case "Circle":
          svgString += `<circle cx="150" cy="115" r="80" fill="${shapeColor}"/>`;
          break;
      }
      svgString += `
            <text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>
          </g>
        </svg>`;
      fs.writeFile("logo.svg", svgString, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Logo generated!");
        }
      });
    })
    .catch((err) => console.error(err));
}

module.exports = { Circle, Square, Triangle };
