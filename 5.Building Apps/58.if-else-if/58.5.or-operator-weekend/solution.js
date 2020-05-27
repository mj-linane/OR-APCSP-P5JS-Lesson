/* eslint-disable no-unused-vars */
const userDay = prompt('Enter a day of the week.')
let resultText = ' '

function checkDay(day) {
  console.log(`Day is: ${day}`)
  // write your code here
  if (day === 'Saturday' || day === 'Sunday') {
    resultText = "It's the weekend!"
  } else {
    resultText = "Can't wait for the weekend to get here."
  }

  console.log(resultText)
}

checkDay(userDay)
