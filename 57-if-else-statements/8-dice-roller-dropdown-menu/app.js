let smileImg
let sadImg
let score = 0
let dieValue = 0
let scoreLabelUI
let rollResultUI

function setup() {
  createCanvas(windowWidth, windowHeight)

  createDiv().id('inputs')

  // Create Header
  createElement('h2', 'Guessing Game').parent('inputs')
  createElement('h4', 'Make A Guess and Click To Roll').parent('inputs')
  // Create guess select dropdown
  const guess = createSelect()
  guess.parent('inputs')
  guess.option('1')
  guess.option('2')
  guess.option('3')
  guess.option('4')
  guess.option('5')
  guess.option('6')

  // Create Roll Button
  createButton('Roll The Die')
    .parent('inputs')
    .mousePressed(getUserInputAndCheck)

  rollResultUI = createElement('h4', `You rolled a: ${dieValue}`).parent(
    'inputs',
  )
  smileImg = createImg('smile.svg', 'smile image')
    .addClass('result-img')
    .parent('inputs')
    .hide()
  sadImg = createImg('frown.svg', 'sad image')
    .addClass('result-img')
    .parent('inputs')
    .hide()
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

function checkGuess() {}

function updateResultHandler() {
  resetUI()
  dieValue = Math.ceil(random(6))

  // Update the result
  rollResultUI.html(`You rolled a: ${dieValue}`)

  // ADD CODE: If the guess is equal to dieValue
  if (dieValue === Number(guess.value())) {
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
}
