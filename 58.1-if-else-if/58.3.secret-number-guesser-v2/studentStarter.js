const secretNumber = 6
let userGuess
let resultText
let pickNumber

function setup() {
  const inputsDivUI = createDiv()
  inputsDivUI.id('inputs')

  const header = createElement('h2', 'Guess my secret number')
  header.parent('inputs')

  pickNumber = createSelect()
  pickNumber.parent('inputs')
  pickNumber.id('num-select')
  pickNumber.changed(getGuessAndCheckMatch)
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

  resultText = createP('')
  resultText.parent('inputs')
  resultText.id('result-text')

  function getGuessAndCheckMatch() {
    userGuess = Number(pickNumber.value())
    checkNumber(userGuess)
    // ADD CODE: Update result test in UI
    
  }
}

function checkNumber(guess) {
  let hint
  if (guess === secretNumber) {
    hint = 'You got it!'
  } else {
    hint = "Nope that's not it. Guess again."
  }

  // For automatic testing, don't delete return statement
  return hint
}
