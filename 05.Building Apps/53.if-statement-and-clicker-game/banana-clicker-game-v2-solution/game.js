// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let opacity = 1
const winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  bananaImg = createImg('./images/banana.png', 'banana image')
  bananaImg.size(200, 100)
  background('lightblue')

  // Setup Title
  title = createElement('h1', `CLICK THE BANANA ${winningNum} TIMES!`)
  title.position(width / 2.75, height / 14)

  // Setup Lives Display
  livesDisplay = createElement('h4', `LIVES: ${lives}`)
  livesDisplay.position(width / 20, height / 14)

  // Setup Score Display
  scoreDisplay = createElement('h4', `SCORE: ${score}`)
  scoreDisplay.position(width / 20, height / 10)

  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  difficultyLabel.position(width / 20, height / 7)
  difficultySlider = createSlider(1, 10, 1)
  difficultySlider.position(width / 20, height / 5)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value())

  // Randomly Position Banana
  bananaImg.position(random(width), random(height))
  bananaImg.mousePressed(increaseScore)

  titleFade()
}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
  score += 1
  checkWin()
  scoreDisplay.html(`SCORE: ${score}`)
}

function decreaseLives() {
  lives -= 1
  checkLose()
  livesDisplay.html(`LIVES: ${lives}`)
}

function checkWin() {
  if (score >= winningNum) {
    window.location.href = 'win.html' // Same tab

    // Save In Session Storage
    sessionStorage.setItem('score', score)
  }
}

function checkLose() {
  if (lives <= 0) {
    window.location.href = 'lose.html' // Same tab

    // Save In Session Storage
    sessionStorage.setItem('score', score)
  }
}

function titleFade() {
  title.style('opacity', opacity)
  opacity -= 0.15
}
