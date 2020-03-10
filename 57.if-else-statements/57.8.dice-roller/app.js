/* eslint-disable prefer-const */
let score

function setup() {
  createCanvas(windowWidth, windowHeight)

  const inputDivUI = createDiv()
  inputDivUI.id('inputs')

  // Create Header and subheader
  const header = createElement('h2', 'Guessing Game')
  header.parent('inputs')

  const subheader = createElement('h4', 'Make A Guess and Click To Roll')
  subheader.parent('inputs')

  // Create guess select dropdown
  let guessSelectUI = createSelect()
  guessSelectUI.parent('inputs')
  guessSelectUI.option('1')
  guessSelectUI.option('2')
  guessSelectUI.option('3')
  guessSelectUI.option('4')
  guessSelectUI.option('5')
  guessSelectUI.option('6')

  // Create Roll Button
  const rollBtnUI = createButton('Roll The Die')
  rollBtnUI.parent('inputs')
  rollBtnUI.mousePressed(getUserInputAndCheck)

  // Creates passive UI elements
  let rollResultUI = createElement('h4', 'You rolled a: ')
  rollResultUI.parent('inputs')

  let scoreLabelUI = createElement('h4', 'Your Score: ')
  scoreLabelUI.parent('inputs')

  function getUserInputAndCheck() {
    // Get user guess and convert to a number type
    const guessNum = Number(guessSelectUI.value())

    // gets random number 0-6
    const dieValue = Math.ceil(random(6))

    // Update the roll display
    rollResultUI.html(`You rolled a: ${dieValue}`)

    // Check the number and the guess
    checkGuess(guessNum, dieValue)

    // Update the score UI
    scoreLabelUI.html(`Your Score: ${score}`)
  }
}

function checkGuess(guess, roll) {
  if (roll === guess) {
    increaseScore(10)
  } else {
    decreaseScore(1)
  }
}

function increaseScore(amount) {
  score += amount
}

function decreaseScore(amount) {
  score -= amount
}
