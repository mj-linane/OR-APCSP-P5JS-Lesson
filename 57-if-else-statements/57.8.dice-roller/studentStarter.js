/* eslint-disable no-unused-vars */
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
  const guessSelectUI = createSelect()
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
  const rollResultUI = createElement('h4', 'You rolled a: ')
  rollResultUI.parent('inputs')

  const scoreLabelUI = createElement('h4', 'Your Score: ')
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

    // ADD COED: Update the score UI
  }
}

function checkGuess(guess, roll) {
  // ADD CODE: if else statement to check guess and roll
}

function increaseScore(amount) {
  // ADD CODE: increase score by amount
}

function decreaseScore(amount) {
  // ADD CODE: decrease score by amount
}
