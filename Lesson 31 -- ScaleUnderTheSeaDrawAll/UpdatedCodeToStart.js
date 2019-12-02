function setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkblue')
  noLoop();
  smooth();
  angleMode(DEGREES);
}

function draw() {
  // These five functions draw everything. Order matters
  // for how different parts of the picture are layered.
  drawAllSeaStars();
  // drawAllFish();
  // drawAllBubbles();
  // drawAllSunbeams();
}


// To do: Repeatedly draw sea stars 
function drawAllSeaStars() {
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(500, 600);
    translate(x, y);
    drawSeaStar(random(256), random(256), random(256), random(.5, 1));
    translate(-x, -y);
  }
}

// To do: Repeatedly draw fish
function drawAllFish() {
  // Add loop

  drawFish(random(256), random(256), random(256), random(.5, 1));
}

// To do: Repeatedly draw bubbles
function drawAllBubbles() {
  for (let i = 0; i < 10; i++) {

  }
}

// To do: Repeatedly draw sunbeams
function drawAllSunbeams() {
  // Add loop


}


// Draw a five-pointed star with a wide pen of the given scale
function drawSeaStar(r, g, b, size) {
  scale(size);
  noStroke();
  fill(r, g, b);
  for (let i = 0; i < 5; i++) {
    triangle(0, -30, -10, 0, 10, 0);
    rotate(360 / 5);
  }
  scale(1 / size);
}

// Draws a fish at the current turtle location with the given scale and color
function drawFish(red, green, blue, size) {
  stroke(red, green, blue);
  scale(size);

  // Fish body


  // Fish tail

}

// Bubbles are semi-transparent dots
function drawBubble() {
  stroke(100, 100, 256, 100);
  fill(100, 100, 256, 100);
  circle(random(width), random(height), random(50));
}

// Sunbeams are semi-transparent lines
function drawSunbeam(size) {
  scale(size);
  strokeWidth(random(1, 15));
  stroke(256, 256, 256, 0.1);
  scale(1 / size);
}




