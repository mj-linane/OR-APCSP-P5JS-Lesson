let resultText

function setup() {
  createCanvas(windowWidth, windowHeight)

  // Create Header
  const createDivUI = createDiv()
  createDivUI.id('inputs')

  const header = createElement('h2', 'Game Age Checker')
  header.parent('inputs')

  const subheader = createElement('h4', 'Select Your Age')
  subheader.parent('inputs')
  // Create Select Button
  const sel = createSelect()
  sel.parent('inputs')
  // ADD CODE: Add dropdown options for ages 5-18+
  sel.option('5')
  sel.option('6')
  sel.option('7')
  sel.option('8')
  sel.option('9')
  sel.option('10')
  sel.option('11')
  sel.option('12')
  sel.option('13')
  sel.option('14')
  sel.option('15')
  sel.option('16')
  sel.option('17')
  sel.option('+18')
  sel.changed(getInputAndCheck)

  const result = createP('Result')
  result.parent('inputs')
  result.id('result-text')

  function getInputAndCheck() {
    // Get user input and convert it to a number
    const userAge = sel.value()
    const userAgeNum = Number(userAge)

    // Calls checkAge function to check the age and update resultText
    checkAge(userAgeNum)

    // ADD CODE: Display the result back to the user after checked
    result.html(resultText)
  }
}

function checkAge(age) {
  // ADD CODE: Add If-Else Statement compare the age in the dropdown menu to the right age
  if (age >= 13) {
    resultText = 'You are old enough to play this game.'
  } else {
    resultText = 'You are not old enough to play this game.'
  }
}
