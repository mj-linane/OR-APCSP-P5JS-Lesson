/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
const userAge = prompt('How old are you?')

function ageChecker(age) {
  let resultText = ''
  // ADD CODE: Convert age from a string to a number
  age = Number(age)

  // ADD CODE: Add your if-else-if code here
  if (age >= 17) {
    resultText = 'You can play a rated M game'
  } else if (age >= 13) {
    resultText = 'You can play a rated T game'
  } else if (age >= 5) {
    resultText = 'You can play a rated E game'
  } else {
    resultText = "Uh. You're too young for most things."
  }

  // Don't change the console.log statement
  console.log(resultText)
  // Do not delete the return statement, used for testing
  return resultText
}

ageChecker(userAge)
