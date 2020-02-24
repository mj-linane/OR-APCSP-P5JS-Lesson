let winText
let playAgainBtn

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgreen')
  winText = createElement('h1', 'You Won! :) ' + score)
  winText.position(width / 2.25, height / 2.5)
  playAgainBtn = createButton('Play Again?')
  playAgainBtn.position(width / 2.15, height / 2)
  playAgainBtn.mousePressed(resetGameLink)
}

function resetGameLink() {
  window.location.href = 'game.html'; // Same tab
}