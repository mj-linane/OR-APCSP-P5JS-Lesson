/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
let resultText = ' '
const userScore = prompt('What was your quiz score (0-100)?')

function checkGrade(score) {
  console.log(score, typeof score)
  resultText = ''
  // ADD CODE: Convert user score from string to Number
  score = Number(score)
  // ADD CODE: Add if-else-if conditional statements

  if (score >= 90) {
    resultText = 'Your quiz grade is an A'
  } else if (score >= 80) {
    resultText = 'Your quiz grade is a B'
  } else if (score >= 70) {
    resultText = 'Your quiz grade is a C'
  } else if (score >= 60) {
    resultText = 'Your quiz grade is a D'
  } else {
    resultText = 'Your quiz grade is an F'
  }

  // Don't change console.log()
  console.log(resultText)
}

checkGrade(userScore)
