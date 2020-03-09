const secretNumber = 5
let resultText = ' '

function setup() {
  const inputsDivUI = createDiv()
  inputsDivUI.id('inputs')

  const header = createElement('h2', 'Guess my secret number')
  header.parent('inputs')

  const pickNumber = createSelect()
  pickNumber.parent('inputs')
  pickNumber.changed(getInputAndCheck)
  pickNumber.option('1')
  pickNumber.option('2')
  pickNumber.option('3')
  pickNumber.option('4')
  pickNumber.option('5')
  pickNumber.option('6')
  pickNumber.option('7')
  pickNumber.option('8')
  pickNumber.option('9')
  pickNumber.option('10')

  const resultDisplayUI = createP('')
  resultDisplayUI.parent('inputs')
  resultDisplayUI.id('result-text')

  function getInputAndCheck() {
    // Get user input
    const userGuess = pickNumber.value()

    // Convert to number
    const userGuessNum = Number(userGuess)

    // Check numbers and update result text
    checkNumber(userGuessNum)

    // Update the UI
    resultDisplayUI.html(resultText)
  }
}

function checkNumber(guess) {
  if (guess > secretNumber + 2) {
    resultText = 'Guess lower.'
  } else if (guess < secretNumber - 2) {
    resultText = 'Guess higher.'
  } else if (guess < secretNumber) {
    resultText = 'Guess higher but close!'
  } else if (guess > secretNumber) {
    resultText = 'Guess lower but close!'
  } else if (guess === secretNumber) {
    resultText = 'You win!'
  }
}
