function setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkblue');
  smooth();
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  // Arcs overlap if they have fill
  noFill()
  stroke('black')
  strokeWeight(4);
  drawOneSeagrass();
  drawOneSeagrass();
}


function drawOneSeagrass() {
  push();
  let x = random(width);
  scale(random(.5, 1.5));
  stroke('Green');
  arcLeftBottom(x);
  translate(-32, -190)
  arcRightTop(x);
  pop();
  // translate(0, 100)
}

function arcLeftBottom(xCor) {
  // Arc degrees start counting from 0 on the right side
  let w = 100
  let h = 200
  arc(xCor, 400, w, h, 110, 260);
}

function arcRightTop(xCor) {
  // Arc degrees start counting from 0 on the right side
  let w = 100
  let h = 200
  arc(xCor, 400, w, h, 280, 80);
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
