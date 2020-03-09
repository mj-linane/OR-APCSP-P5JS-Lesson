/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const userAge = prompt('Enter your age.')
let resultText = ' '

function checkAge(age) {
  console.log(`Age is: ${userAge}`)
  // write your code here
  resultText = 'You are a teenager!'
  resultText = 'You are NOT a teenager.'

  // Don't change console.log
  console.log(resultText)
}

checkAge(userAge)
