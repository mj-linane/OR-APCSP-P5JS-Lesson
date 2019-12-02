function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  noLoop();
  angleMode(DEGREES);
  let a = 30
}

function draw() {
  background('darkblue');
  drawAllSeaStars();
}

function seaGrassSine() {
  amplitude = 10; // height of wave
  length = 20;// number of pixels to repeat cycle
  frequency = 1; // number of waves to repeat in a given length/num of pixels
}

function drawSeaGrassCosDots() {
  let dx = a * cos(angle);
  let angle = 0
 
  for (let i = 0; i < 200; i++) {
    stroke('green');
    dx = a * cos(angle);
    point(180 - dx, y);
    angle++
    y++
  }
}

function drawSeagrass() {
  for (let i = 0; i < 5; i++) {
    arcLeft();
    arcRight();
    translate(random(100, 0))

  }
  function arcLeft() {
    arc(222, 425, 100, 200, -radians(60), radians(60)); // 60 degrees
  }

  function arcRight() {
    arc(222, 425, 100, 200, radians(120), -radians(120)); // 60 degrees   
  }
}