function setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkblue');
  smooth();
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  drawAllSeaStars();
  drawAllBubbles();
  drawAllFish();
}

function drawAllFish() {

}

function drawFish() {

}

function drawBubbles() {

}


function drawAllSeaStars() {
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(500, 600);
    translate(x, y);
    drawSeaStar(random(256), random(256), random(256), random(.5, 1));
    translate(-x, -y);
  }
}

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