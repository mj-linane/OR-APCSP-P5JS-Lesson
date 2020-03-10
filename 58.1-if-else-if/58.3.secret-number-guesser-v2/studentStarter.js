/* eslint-disable no-unused-vars */
const secretNumber = 6
let resultText = ' '

function setup() {
  const inputsDivUI = createDiv()
  inputsDivUI.id('inputs')

  const header = createElement('h2', 'Guess my secret number')
  header.parent('inputs')

  pickNumber = createSelect()
  pickNumber.parent('inputs')
  pickNumber.id('num-select')
  pickNumber.changed(getGuessAndCheck)
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

  resultUI = createP('')
  resultUI.parent('inputs')
  resultUI.id('result-text')

  function getGuessAndCheck() {
    // Get user input and convert to a number
    const userGuess = Number(pickNumber.value())

    // Check the number and update the resultText
    checkNumber(userGuess)

    // ADD CODE: Update result test in UI
    resultUI.html(resultText)
  }
}

function checkNumber(guess) {
  if (guess === secretNumber) {
    resultText = 'You got it!'
  } else {
    resultText = "Nope that's not it. Guess again"
  }
}
