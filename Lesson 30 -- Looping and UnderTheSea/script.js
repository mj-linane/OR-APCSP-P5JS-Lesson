// Setup angle to change it by 1 after each drawing
let angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  // Defaults to radians (measurement of the arc) so we need to setup DEGREES
  angleMode(DEGREES);
  noLoop();

}

function draw() {
  // Setup color
  stroke(255);
  fill('red');

  // Change origin of drawing
  translate(700, 300);

  // Rotate canvas in an angle
  rotate(angle);

  line(0, 0, 50, 50);
  // rectMode(CENTER);
  // Have greater control over the number of squares being drawn by using a for loop
  for (let i = 0; i < 1; i++) {
    rotate(angle)
    square(0, 0, 300)
    angle = angle + 1
  }

}