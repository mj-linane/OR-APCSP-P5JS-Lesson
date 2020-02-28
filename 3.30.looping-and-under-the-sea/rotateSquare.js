// Setup angle to change it by 1 after each drawing

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)

  // Defaults to radians (measurement of the arc) so we need to setup DEGREES
  angleMode(DEGREES)
  noLoop()
  smooth()
}

function draw() {
  // Setup color
  stroke(255)
  fill('red')

  // Change origin of drawing
  translate(700, 300)

  // rectMode(CENTER);
  // Have greater control over the number of squares being drawn by using a for loop
  for (let i = 0; i < 23; i++) {
    rotate(angle)
    square(0, 0, 150)
  }
}

function setup() {
  createCanvas(600, 120)
  noStroke()
}

function draw() {
  background(180)

  for (let x = 100; x < width; x = x + 100) {
    ellipse(x, 60, 40, 40)
  }
}
