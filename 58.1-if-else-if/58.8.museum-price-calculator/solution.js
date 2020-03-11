/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
let resultText = ' '

function setup() {
  const inputsDivUI = createDiv()
  inputsDivUI.id('inputs')

  const header = createElement('h2', 'Museum Price Calculator')
  header.parent('inputs')

  const dayInputLabelUI = createElement('p', 'Select the day of the week')
  dayInputLabelUI.parent('inputs')

  dayInputUI = createSelect()
  dayInputUI.mousePressed(function() {
    // Clears out result text when select is clicked
    resultText = ' '
  })
  dayInputUI.parent('inputs')
  dayInputUI.id('day-select')
  dayInputUI.option('Sunday')
  dayInputUI.option('Monday')
  dayInputUI.option('Tuesday')
  dayInputUI.option('Wednesday')
  dayInputUI.option('Thursday')
  dayInputUI.option('Friday')
  dayInputUI.option('Saturday')

  const ageInputLabelUI = createElement('p', 'Select your age')
  ageInputLabelUI.parent('inputs')
  ageInputLabelUI.id('age-input-label')

  ageInputUI = createSelect()
  ageInputUI.parent('inputs')
  ageInputUI.id('age-select')
  ageInputUI.option('5')
  ageInputUI.option('6')
  ageInputUI.option('7')
  ageInputUI.option('8')
  ageInputUI.option('9')
  ageInputUI.option('10')
  ageInputUI.option('11')
  ageInputUI.option('12')
  ageInputUI.option('13')
  ageInputUI.option('14')
  ageInputUI.option('15')
  ageInputUI.option('16')
  ageInputUI.option('17')
  ageInputUI.option('18')
  ageInputUI.option('19')
  ageInputUI.option('20')
  ageInputUI.option('21')

  calculateBtnUI = createButton('Calculate')
  calculateBtnUI.mousePressed(getInputsAndCheck)
  calculateBtnUI.parent('inputs')

  resultUI = createP('')
  resultUI.parent('inputs')
  resultUI.id('result-text')

  function getInputsAndCheck() {
    // Get user input and convert to a number
    const userAge = Number(ageInputUI.value())
    const userDay = dayInputUI.value()

    // Check the number and update the resultText
    checkAgeAndDay(userAge, userDay)

    // ADD CODE: Update result test in UI
    resultUI.html(resultText)
  }
}

function checkAgeAndDay(age, day) {
  if (day === 'Tuesday' || day === 'Thursday' || (age > 12 && age < 21)) {
    resultText = 'You get a discount'
  } else {
    resultText = 'You must pay full price'
  }
}
