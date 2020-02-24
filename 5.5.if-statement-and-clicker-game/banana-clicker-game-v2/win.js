// OPTIONAL: Retrieve game save data from local storage
let score = sessionStorage.getItem('score')

// Initialize Variable
let resultText
let playAgainBtn

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgreen')
  resultText = createElement('h1', 'You Lost :( ' + score)
  resultText.position(width / 2.25, height / 2.5)
  playAgainBtn = createButton('Play Again?')
  playAgainBtn.position(width / 2.15, height / 2)
  playAgainBtn.mousePressed(resetGameLink)
}

function resetGameLink() {
  window.location.href = 'game.html'; // Same tab
}