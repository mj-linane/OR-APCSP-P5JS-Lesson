/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
let resultText = ' '
const userScore = prompt('What was your quiz score (0-100)?')

function checkGrade(score) {
  resultText = ''
  // ADD CODE: Convert user score from string to Number

  // ADD CODE: Add if-else-if conditional statements

  resultText = 'Your quiz grade is an A'
  resultText = 'Your quiz grade is a B'
  resultText = 'Your quiz grade is a C'
  resultText = 'Your quiz grade is a D'
  resultText = 'Your quiz grade is an F'

  // Don't change console.log()
  console.log(resultText)
}

checkGrade(userScore)
