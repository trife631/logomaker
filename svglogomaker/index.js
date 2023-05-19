
const inquirer = require("inquirer");
const fs = require("fs");

// Importing classes from shapes
const { Circle, Square, Triangle } = require("./lib/shapes");

// writes SVG file
function writeToFile(fileName, answers) {


  let svgString = "";

  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  svgString += "<g>";

  svgString += `${answers.shape}`;

  let shapeChoice;
  
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;

  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;

  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // insert text content into the SVG file from user prompt input
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgString += "</g>";

  svgString += "</svg>";

  // writes SVG file or logs error
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("logo generated!");
  });
}

// user prompts
function promptUser() {
  inquirer
    .prompt([

      // create text prompt
      {
        type: "input",
        message:
          "create text (enter up to three characters)",
        name: "text",
      },

      // choose text color prompt
      {
        type: "input",
        message:
          "choose text color (enter color or hexadecimal number)",
        name: "textColor",
      },

      // choose shape prompt
      {
        type: "list",
        message: "choose shape",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },

      // desired shape color prompt
      {
        type: "input",
        message:
          "choose shape color (enter color or hexadecimal number)",
        name: "shapeBackgroundColor",
      },

    ])
    .then((answers) => {

      // prompt user to enter 3 characters file or try again.
      if (answers.text.length > 3) {
        console.log("enter no more than 3 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

// call promptUser function.
promptUser();
