const secretNumber = 6

function setup() {
  const inputsDivUI = createDiv()
  inputsDivUI.id('inputs')

  const header = createElement('h2', 'Guess my secret number')
  header.parent('inputs')

  const pickNumber = createSelect()
  pickNumber.parent('inputs')
  pickNumber.changed(checkNumber)
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

  const resultText = createP('')
  resultText.parent('inputs')
  resultText.id('result-text')

  function checkNumber() {
    const userGuess = Number(pickNumber.value())
    if (userGuess === secretNumber) {
      resultText.html('You win!')
    } else if (userGuess > (secretNumber + 2)) {
      resultText.html('Guess lower.')
    } else if (userGuess < secretNumber) {
      resultText.html('Guess higher but close!')
    } else if (userGuess > secretNumber) {
      resultText.html('Guess lower but close.')
    } else if (guess < (secretNumber - 2)) {
      resultText.html('Guess higher')
    }
  }
}
