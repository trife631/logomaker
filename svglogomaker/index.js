const inquirer = require('inquirer');
const fs = require('fs');

// function to generate the logo
function generateLogo() {

  // prompt the user for input using Inquirer
  inquirer.prompt([{
    type: "input",
    message: "Enter text (up to three characters):",
    name: "text",
  }, {
    type: "input",
    message: "Choose text color (e.g. 'red' or '#FF0000'):",
    name: "textColor",
  }, {
    type: "list",
    message: "Choose shape:",
    choices: ["Triangle", "Square", "Circle"],
    name: "shape",
  }, {
    type: "input",
    message: "Choose shape color (e.g. 'blue' or '#0000FF'):",
    name: "shapeColor",
  }]).then(function(answers) {

    // start building the SVG string
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';

    // check the chosen shape and add the corresponding SVG code
    switch(answers.shape) {
      case "Triangle":
        svgString += '<polygon points="150, 18 244, 182 56, 182" fill="' + answers.shapeColor + '"/>';
        break;
      case "Square":
        svgString += '<rect x="73" y="40" width="160" height="160" fill="' + answers.shapeColor + '"/>';
        break;
      case "Circle":
        svgString += '<circle cx="150" cy="115" r="80" fill="' + answers.shapeColor + '"/>';
        break;
    }

    // add the text to the SVG string
    svgString += '<text x="150" y="130" text-anchor="middle" font-size="40" fill="' + answers.textColor + '">' + answers.text + '</text>';
    svgString += '</g>';
    svgString += '</svg>';

    // write the SVG string to a file named "logo.svg"
    fs.writeFile("logo.svg", svgString, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Logo generated!");
      }
    });

  });
}

// call the generateLogo function to start the logo generation process
generateLogo();
