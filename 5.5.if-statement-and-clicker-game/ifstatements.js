// Initialize Variables
let score = 5
let scoreDisplay
let scoreWarning

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  // Setup Instructions heading
  const heading = createElement('h1', 'Click the bottons to change the score')
  heading.style('font-family: roboto')
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')

  // Setup Score Report
  scoreDisplay = createElement('h1', score)
  scoreDisplay.style('font-family: roboto')
  scoreDisplay.style('font-size: 100px')
  scoreDisplay.style('position: absolute')
  scoreDisplay.style('width: 100%')
  scoreDisplay.style('text-align: center')
  scoreDisplay.style('top: 50%')

  // Setup Warning Box
  scoreWarning = createElement('h1', 'just right')
  scoreWarning.style('font-family: roboto')
  scoreWarning.style('font-size: 30px')
  scoreWarning.style('position: absolute')
  scoreWarning.style('width: 100%')
  scoreWarning.style('text-align: center')
  scoreWarning.style('top: 40%')

  // Creates and sets up images
  const upImg = createImg('./images/up.svg', 'up image')
  upImg.size(150, 150)
  upImg.style('position: absolute')
  upImg.style('left: 200px')
  upImg.style('top: 60%')

  upImg.mousePressed(increaseScore)

  const downImg = createImg('./images/down.svg', 'down image')
  downImg.size(150, 150)
  downImg.style('position: absolute')
  downImg.style('right: 200px')
  downImg.style('top: 60%')

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