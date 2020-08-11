function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(200)
  console.log(mouseX, mouseY)
  fill('SaddleBrown')
  rect(-1, 300, 2000, 500)
  drawTree()
  translate(300, -134)
  drawTree()
  translate(300, -134)
  drawTree()
}

function drawTree() {
  fill('brown')
  square(100, 250, 50)
  fill('green')
  triangle(50, 250, 200, 250, 125, 75)
  triangle(50, 200, 200, 200, 125, 50)
  decorations()
}

function ornament() {
  fill('red')
  circle(100, 100, 20)
}

function decorations() {
  ornament()
  translate(50, 20)
  ornament()
  translate(20, 40)
  ornament()
  translate(-50, -10)
  ornament()
  translate(-50, 20)
  ornament()
  translate(60, 20)
  ornament()
  translate(50, 20)
  ornament()
  translate(-30, 20)
  ornament()
  translate(-50, 5)
  ornament()
}
