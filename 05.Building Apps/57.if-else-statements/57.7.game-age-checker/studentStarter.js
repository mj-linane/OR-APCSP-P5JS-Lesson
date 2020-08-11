/* eslint-disable no-unused-vars */
let resultText = ' '

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
  // ADD CODE: Add dropdown options for ages 5-18

  // ADD CODE: add a sel.changed() and give it the callback function

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
  }
}

function checkAge(age) {
  // ADD CODE: Add If-Else Statement compare the age in the dropdown menu to the right age
  resultText = 'You are old enough to play this game.'
  resultText = 'You are not old enough to play this game.'
}
