/* eslint-disable no-alert */
const userDay = prompt('Enter a day of the week.')
let resultText = ' '

function checkDay(day) {
  console.log(`Day is: ${day}`)
  // write your code here

  resultText = "It's the weekend!"
  resultText = "Can't wait for the weekend to get here."

  // Don't delete console.log()
  console.log(resultText)
}

checkDay(userDay)
