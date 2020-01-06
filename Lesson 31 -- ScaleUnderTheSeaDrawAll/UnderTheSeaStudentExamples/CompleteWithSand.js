

function setup() {
  createCanvas(600, 600);
  background('darkblue');
  noLoop();
  smooth();
}

function draw() {
  drawSand();
  drawAllSeaStars();
  drawAllFish();
  drawAllBubbles();
  drawAllSunbeams();
}

function drawSand() {
  strokeWeight(0);
  fill('Moccasin');
  ellipse(300, 595, 800, 50);
  drawAllSands();
}

function drawAllSands() {
  for (let i = 0; i < random(75, 100); i++) {
    noStroke();
    fill('tan');
    circle(random(600), random(575, 600), 2);
  }
}

function drawAllSeaStars() {
  for (let i = 0; i < random(10); i++) {
    drawSeaStar(255, random(100), random(100));
  }
}

function drawAllFish() {
  for (let i = 0; i < random(10, 15); i++) {
    drawFish(random(.25, 1.25), 150 + random(105), 100 + random(75), random(55));
  }
}

function drawAllBubbles() {
  for (let i = 0; i < random(200, 400); i++) {
    drawBubble();
  }
}

function drawAllSunbeams() {
  for (let i = 0; i < 100; i++) {
    drawSunbeam(random(0.5, 2));
  }
}

function drawSeaStar(r, g, b) {
  strokeWeight(20);
  stroke(r, g, b);
  fill(r, g, b);
  x = random(600)
  y = height - random(50, 75)
  translate(x, y)
  line(25, 0, 40, 49.5)
  line(40, 49.5, 0, 19)
  line(0, 19, 50, 19)
  line(50, 19, 10, 49.5)
  line(10, 49.5, 25, 0)
  translate(-x, -y)
}

function drawFish(size, red, green, blue) {
  scale(size);
  x = random(width);
  y = random(height);
  translate(x, y);
  fill(red, green, blue);
  stroke(red, green, blue);
  strokeWeight(30);
  // Fish body
  circle(20, 20, 50);

  // Fish tail
  line(40, 20, 80, 0);
  line(80, 0, 80, 40);
  line(80, 40, 40, 20);
  translate(-x, -y);
  scale(1 / size);

}

function drawBubble() {
  strokeWeight(1)
  let x = random(width);
  let y = random(height);
  stroke(100, 100, 255, 100);
  fill(100, 100, 255, 80);
  translate(x, y);
  circle(0, 0, random(25));
  translate(-x, -y);

}

function drawSunbeam(size) {
  strokeWeight(random(5, 25));
  let x = random(-30, 600);
  translate(x, 0);
  stroke(255, 255, 255, random(25));
  line(0, 0, 50, (height / 1.9) * size);
  translate(-x, 0);
}