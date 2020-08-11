/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
const userAge = prompt('How old are you?')
let resultText = ' '

function ageChecker(age) {
  // ADD CODE: Convert age from a string to a number

  // ADD CODE: Add your if-else-if code here

  resultText = 'You can play a rated M game.'
  resultText = 'You can play a rated T game.'
  resultText = 'You can play a rated E game.'
  resultText = "Uh. You're too young for most things."

  // Don't change the console.log statement
  console.log(resultText)
}

ageChecker(userAge)
