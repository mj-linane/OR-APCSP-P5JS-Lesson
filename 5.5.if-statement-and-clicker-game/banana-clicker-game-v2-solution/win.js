function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgreen')
  const resultText = createElement('h1', 'You Won :)')
  resultText.position(width / 2.25, height / 2.5)
  const playAgainBtn = createButton('Play Again?')
  playAgainBtn.position(width / 2.15, height / 1.5)
  playAgainBtn.mousePressed(resetGameLink)

  // OPTIONAL: Retrieve game save data from local storage
  const score = sessionStorage.getItem('score')
  const scoreDisplay = createElement('h2', 'Final Score: ' + score)
  scoreDisplay.position(width / 2.25, height / 2)
}

function resetGameLink() {
  window.location.href = 'game.html'; // Same tab
}