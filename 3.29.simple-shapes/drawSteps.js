function setup() {
  createCanvas(800, 800)
}
function draw() {
  // drawSide();
  // drawSide();
  drawLeftSteps()
}

function drawLStep() {
  line(100, 300, 150, 300)
  line(150, 300, 150, 250)
}

function drawLSide() {
  drawStep()
  translate(50, -50)
  drawStep()
  drawStep()
  translate(50, -50)
  drawStep()
  line(150, 250, 200, 250)
}

function drawLeftSteps() {
  rect(50, 250, 50, 50)
  rect(100, 200, 50, 100)
  rect(150, 150, 50, 150)
}
