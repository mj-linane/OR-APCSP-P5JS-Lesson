function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Control Refresh/Draw Rate (Frames Per Second)
  frameRate(10)
}

function draw() {
  //squares('rgb(0,255,0)',200, 50);
  lines(random(windowWidth), random(windowHeight), 50);
}

function squares(color, yCor, size) {
  fill(color);
  square(100, yCor, size);
  square(300, yCor, size)
}

function lines(xCor, yCor) {
  stroke(random(256), random(256), random(256));
  stroke(color);
  strokeWeight(random(2));
  line(0, yCor, xCor, yCor);

}