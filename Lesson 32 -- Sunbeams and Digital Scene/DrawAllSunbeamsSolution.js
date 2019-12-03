function setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkblue');
  smooth();
  noLoop();
}

function draw() {
  drawAllSunbeams()
}

function drawAllSunbeams() {
  for(let i = 0; i < 200; i++){
    drawSunbeam();
  }
}

function drawSunbeam() {
  // Sets up the size of the beams
  strokeWeight(random(1, 15));

  // White light with a random opacity. Try changing the random(256) to random(25) for a more natural look
  stroke(256, 256, 256, random(256));
  // Generate random locations for sunbeams
  let x1 = random(width);
  let x2 = x1 + 100;
  let y2 = random(height / 4, height / 2);

  // draws individual sunbeam
  line(x1, 0, x2, y2);
}