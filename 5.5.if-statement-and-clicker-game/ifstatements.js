// Initialize Variables
let score = 5
let scoreDisplay
let scoreWarning

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  // Setup Instructions heading
  const heading = createElement('h1', 'Click the bottons to change the score')
  heading.position(width / 6, height / 6)
  heading.style('font-family', 'roboto')
  heading.style('font-size', '50px')

  // Setup Score Report
  scoreDisplay = createElement('h1', score)
  scoreDisplay.position(width / 2.25, height / 2)
  scoreDisplay.style('font-family', 'roboto')
  scoreDisplay.style('font-size', '100px')

  // Setup Warning Box
  scoreWarning = createElement('h1', ' ')
  scoreWarning.position(width / 2.25, height / 2.5)
  scoreWarning.style('font-family', 'roboto')
  scoreWarning.style('font-size', '30')

  // Creates and sets up images
  const upImg = createImg('./images/up.svg', 'up image')
  upImg.size(200, 200)
  upImg.position(width / 8, height / 2)
  upImg.mousePressed(increaseScore)

  const downImg = createImg('./images/down.svg', 'down image')
  downImg.size(200, 200)
  downImg.position(width / 1.5, height / 2)
  downImg.mousePressed(decreaseScore)
}

function increaseScore() {
  score = score + 1
  scoreDisplay.html(score)
  checkScore()
}

function decreaseScore() {
  score = score - 1
  scoreDisplay.html(score)
  checkScore()
}

function checkScore() {
  // If score is between 0 and 10, inclusive, displays an empty string inside of the html
  // Because this function is called after every click, it will display nothing by default and only change if one of the conditions below is met.
  scoreWarning.html(' ')
  scoreWarning.style('color', 'inherit')

  // If score goes below 0, display a warning
  if (score < 0) {
    scoreWarning.html('Too Small!')
    scoreWarning.style('color', 'red')

  }

  // If score goes above 10, display a warning
  if (score > 10) {
    scoreWarning.html('Too big!')
    scoreWarning.style('color', 'red')

  }
}