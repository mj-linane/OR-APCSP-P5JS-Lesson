function setup() {
  createCanvas(windowWidth, windowHeight)
  background('white')
  noLoop();
  smooth();
}

function draw() {
  drawAllBubbles();

}

function drawAllBubbles() {
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    translate(x, y);
    drawBubble();
    translate(-x, -y)
  }


  function drawBubble() {
    stroke(100, 100, 255, 100);
    fill(100, 100, 255, 100);
    circle(0, 0, random(50));
  }

}