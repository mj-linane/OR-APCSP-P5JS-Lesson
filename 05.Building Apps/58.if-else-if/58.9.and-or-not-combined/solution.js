/* eslint-disable prefer-const */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

const userAge = Number(prompt('Enter your age.'))
const userDay = prompt('Enter a day of the week.')
let resultText = ' '

function checkAgeAndDay(age, day) {
  console.log(`Day is: ${day}`)
  console.log(`Age is: ${age}`)
  // Write your code here
  if (!(day === 'Saturday' || day === 'Sunday') && age < 18) {
    // If it's not the weekend AND the user is under 18
    resultText = 'Time for school!'
  } else if (!(day === 'Saturday' || day === 'Sunday') && age >= 18) {
    // If it's not the weekend AND the user is 18 or older
    resultText = 'Time to go to work!'
  } else if ((day === 'Saturday' || day === 'Sunday') && age < 18) {
    // If it's the weekend AND the user is under 18
    resultText = 'Time to relax for the weekend!'
  } else if ((day === 'Saturday' || day === 'Sunday') && age >= 18) {
    // If it's the weekend AND the user is 18 or older
    resultText = 'Time to relax for the weekend!'
  }

  // Don't change the console log
  console.log(resultText)
}
