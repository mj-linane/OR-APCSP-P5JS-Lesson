function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  drawCrosses()
}

function cross() {
  strokeWeight(5)
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
  cross()
  translate(-200, 0)
  stroke('black')
  cross()
}
