// Guesses Lucky Numbers
function setup() {
  createCanvas(400, 400);
  createElement('h1', 'my lucky numbers below');
}

function mousePressed() {
  createP('my lucky number is ' + random(0, 10));
}

function draw() {
  background(220);
}