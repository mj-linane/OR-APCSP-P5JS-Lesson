let startButton;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create and Style Header
  const heading = createElement('h1', 'Welcome to Catch The Banana Game!')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('text-align: center')
  heading.style('top: 100px')
  heading.style('font-family: roboto')

  // Create and Style Button
  button = createButton('START');
  button.style('background-color: lightblue')
  button.size(100, 50)
  button.style('position: absolute')
  button.mousePressed(startGame);
  background(220);
}

function startGame() {
  window.location.href = 'game.html'; // Same tab
}