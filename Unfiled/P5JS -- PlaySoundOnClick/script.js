let mysound;

function preload() {
  mysound = loadSound("bensound-perception.mp3")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(220);
}

function mousePressed() {
  if (mysound.isPlaying()) {
    // .isPlaying() returns a boolean
    mysound.stop();
    background(255, 0, 0);
  } else {
    mysound.play();
    background(0, 255, 0);
  }
}
