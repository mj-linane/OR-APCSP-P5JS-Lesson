/* eslint-disable no-unused-vars */

// Fractal Trees With Recursion

let angle

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  stroke('white')
  // Set line thickness
  strokeWeight(3)
  background('black')

  // Set angle of the branches from mouseX
  // Set it to equal 0 - 90
  // Take the mouseX, divide by with to get decimal 0-1,
  // then set the max range to be 90.
  angle = (mouseX / width) * 90

  // console.log(angle)

  // Start drawing tree from center
  translate(width / 2, height)

  // Trunk height
  const trunkH = (height / 3) * -1

  // Draw a line on the Y to be the trunk
  line(0, 0, 0, trunkH)

  // Move to the end of the line
  translate(0, trunkH)

  // Start drawing recursive branches
  drawBranch(200)
}

function drawBranch(num) {
  // Each branch is 2/3 the previous branch
  const length = num * 0.6
  // console.log(length)

  // Exit/Escape Condition
  // When the length of the branch is less than 2 pixels
  if (length > 2) {
    /* **** DRAW TO THE RIGHT **** */
    // Save current drawing and current X,Y
    push()
    // Rotate canvas by the angle
    rotate(angle)
    // Draw a branch line
    line(0, 0, 0, -length)
    // Move canvas to the end of the branch
    translate(0, -length)
    // Draw 2 more branches
    drawBranch(length)
    // Go back to the previous matrix state (x, y)
    pop()

    /* **** DRAW TO THE LEFT **** */
    push()
    rotate(-angle)
    line(0, 0, 0, -length)
    translate(0, -length)
    drawBranch(length)
    pop()
  }
}
