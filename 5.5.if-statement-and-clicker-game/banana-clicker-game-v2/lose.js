let loseText
let playAgainBtn

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('salmon')
  loseText = createElement('h1', 'You Lost :( ' + score)
  loseText.position(width / 2.25, height / 2.5)
  playAgainBtn = createButton('Play Again?')
  playAgainBtn.position(width / 2.15, height / 2)
  playAgainBtn.mousePressed(resetGameLink)
}

function resetGameLink() {
  window.location.href = 'game.html'; // Same tab
}