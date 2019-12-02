function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  smooth();
}

function draw() {
  translate(100, 100);
  oneSquare();
  translate(200, 0);
  scale(2);
  oneSquare();


}

function oneSquare() {
  strokeWeight(10);
  fill('white');
  stroke('white');
  rect(0, 0, 100, 100);
}
