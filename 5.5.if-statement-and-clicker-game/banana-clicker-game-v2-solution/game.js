// Initialize Variables
let bananaImg
let scoreDisplay
let livesDisplay
let lives = 3
let score = 0

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  bananaImg = createImg('./images/banana.png', 'banana image')
  bananaImg.size(200, 100)
  background('lightblue')

  // Setup Title
  const title = createElement('h1', 'CLICK THE BANANA 10 TIMES!')
  title.position(width / 2.75, height / 14)

  // Setup Lives Display
  livesDisplay = createElement('h4', 'Lives Left: ' + lives)
  livesDisplay.position(width / 20, height / 14)

  // Setup Score Display
  scoreDisplay = createElement('h4', 'Your score: ' + score)
  scoreDisplay.position(width / 20, height / 10)

  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'Difficulty')
  difficultyLabel.position(width / 20, height / 7)
  const difficultySlider = createSlider(1, 10, 1)
  difficultySlider.position(width / 20, height / 5)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value())

  // Randomly Position Banana
  bananaImg.position(random(width), random(height))
  bananaImg.mousePressed(increaseScore)
}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
  score = score + 1
  scoreDisplay.html('Your score: ' + score)
}

function decreaseLives() {
  lives = lives - 1
  checkLose()
  livesDisplay.html('Lives Left: ' + lives)
}

function checkLose() {
  if (lives <= 0) {
    window.location.href = 'lose.html'; // Same tab
    sessionStorage.setItem('score', score)
  }
}

// Save In Session Storage
