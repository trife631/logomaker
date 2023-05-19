// defines shapes
class Shape {
  constructor() {
    this.color = "";
  }

  // sets shape color
  setColor(colorVariable) {
    this.color = colorVariable;
  }
}

// circle properties and inheritance
class Circle extends Shape {
  render() {
    // returns circle with color
    return `<circle cx="300" cy="230" r="160" fill="${this.color}" />`;
  }
}
// square properties and inheritance
class Square extends Shape {
  render() {
    // returns square with color
    return `<rect x="50" y="50" width="300" height="300" fill="${this.color}" />`;
  }
}

// triangle properties and inheritance
class Triangle extends Shape {
  render() {

    // returns triangle with color
    return `<polygon points="100,36 300,300 12,300" fill="${this.color}" />`;
  }
}


// exports all shapes in different order
module.exports = { Circle, Square, Triangle };
