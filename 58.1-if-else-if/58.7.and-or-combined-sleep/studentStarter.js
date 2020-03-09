/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const userDay = prompt('Enter a day of the week.')
const userAge = Number(prompt('Enter your age.'))
let resultText = ' '

function checkSleepIn(day, age) {
  console.log(`Day is: ${day}`)
  console.log(`Age is: ${age}`)
  // write your code here

  resultText = 'Sleep in!'
  resultText = 'Uh oh. Have to wake up.'

  // Don't change console.log
  console.log(resultText)
}

checkSleepIn(userDay, userAge)
