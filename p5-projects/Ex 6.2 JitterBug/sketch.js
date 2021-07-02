let a_bug = [];

function setup() {
  createCanvas(480, 120).mousePressed(function () {
    add_bug(mouseX, mouseY);
  })
  createSpan('Click canvas to create a JitterBug')
  background(204);
}

function draw() {
  for (let bug of a_bug) {
    bug.move();
    bug.display();
  }
}

function add_bug(x, y) {
  let r = random(2,20);
  let c = random(['red', 'green', 'yellow'])
  let bug = new JitterBug(x, y, r, c);
  a_bug.push(bug);
}

class JitterBug {
  constructor(tempX, tempY, tempDiameter, tempC) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2.5;
    this.color = tempC;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  display() {
    stroke(this.color);
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

// https://editor.p5js.org/jht1493/sketches/UfXdsZAHU
// Ex 6.2 JitterBug

// https://editor.p5js.org/jht1493/sketches/HSp7qS5n4
// Ex_11_09 Managing Many Objects-remix

// https://editor.p5js.org/jht1493/sketches/XDfmnW1JD
// Ex_11_09 Managing Many Objects

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_09.js
