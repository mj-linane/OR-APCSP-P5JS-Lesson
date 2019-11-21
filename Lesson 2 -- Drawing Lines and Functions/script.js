function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  drawCrosses()
  // present()
  // translate(200,0)
  // present()
}

function present() {
  square(100, 100, 100);
  line(100, 150, 200, 150);
  line(150, 100, 150, 200);
}

function cross() {
  strokeWeight(5);
  line(100, 100, 150, 100)
  line(125, 75, 125, 125)
}

function drawCrosses() {
  stroke('red')
  cross()
  translate(200, 0)
  stroke('black')
  cross()
  translate(0, 200)
  stroke('red')
  cross();
  translate(-200, 0)
  stroke('black')
  cross()
}