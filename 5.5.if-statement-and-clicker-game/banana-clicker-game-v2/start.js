let startButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createElement('h1', 'Welcome To The Banana Clicker Game!')
  button = createButton('Start');
  button.position(width / 2, height / 2);
  button.mousePressed(startGame);
  background(220);
}

function startGame() {
  window.location.href = 'game.html'; // Same tab
}