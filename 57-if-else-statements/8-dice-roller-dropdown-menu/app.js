let smileImg
let sadImg
let score = 0
let dieValue = 0
let scoreLabelUI
let rollResultUI
let guessSelectUI

function setup() {
  createCanvas(windowWidth, windowHeight)

  const inputDivUI = createDiv()
  inputDivUI.id('inputs')

  // Create Header
  const header = createElement('h2', 'Guessing Game')
  header.parent('inputs')

  const subheader = createElement('h4', 'Make A Guess and Click To Roll')
  subheader.parent('inputs')

  // Create guess select dropdown
  guessSelectUI = createSelect()
  guessSelectUI.parent('inputs')
  guessSelectUI.option('1')
  guessSelectUI.option('2')
  guessSelectUI.option('3')
  guessSelectUI.option('4')
  guessSelectUI.option('5')
  guessSelectUI.option('6')

  // Create Roll Button
  createButton('Roll The Die')
    .parent('inputs')
    .mousePressed(getUserInputAndCheck)

  // Creates passive UI elements
  rollResultUI = createElement('h4', `You rolled a: ${dieValue}`)
  rollResultUI.parent('inputs')

  smileImg = createImg('smile.svg', 'smile image')
  smileImg.addClass('result-img')
  smileImg.parent('inputs')
  smileImg.hide()

  sadImg = createImg('frown.svg', 'sad image')
  sadImg.addClass('result-img')
  sadImg.parent('inputs')
  sadImg.hide()

  scoreLabelUI = createElement('h4', `Your Score: ${score}`).parent('inputs')
}

// resetUI is called from handler function
function resetUI() {
  // reset images and score label on change
  sadImg.hide()
  smileImg.hide()
  scoreLabelUI.html(`Your Score: ${score}`)
}

function getUserInputAndCheck() {
  let guessNum = Number(guess.value())
  checkGuess(guessNum)
}

function checkGuess(guess) {
  if (dieValue === guess) {
    smileImg.show()
    score += 50
    scoreLabelUI.html(`Your Score: ${score}`)
    // ADD CODE: else
  } else {
    sadImg.show()
    score -= 1
    // ADD CODE: update the score label to the new score
    scoreLabelUI.html(`Your Score: ${score}`)
  }

  function updateResultHandler() {
    resetUI()
    dieValue = Math.ceil(random(6))

    // Update the result
    rollResultUI.html(`You rolled a: ${dieValue}`)

    // ADD CODE: If the guess is equal to dieValue
  }
}
