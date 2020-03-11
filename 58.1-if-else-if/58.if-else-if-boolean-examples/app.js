/* eslint-disable no-shadow */
/* eslint-disable space-before-blocks */
/* eslint-disable no-lonely-if */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-alert */
/* eslint-disable no-empty */
/* eslint-disable prefer-const */

// Nested if statements, hard to follow logic
let time = 12
let greeting = ' '

if (time < 12) {
  greeting = 'Good morning'
} else {
  if (time < 16) {
    greeting = 'Good afternoon'
  } else {
    greeting = 'Good evening'
  }
}

// IF ELSE IF

// Limit user input of time to max time
function checkUserTime(userTime) {
  if (userTime < 24) {
    let maxTime = 24
    timeChecker(maxTime)
  }
}

// if else if check for time and set greeting
function timeChecker(time) {
  let numTime = Number(time)
  if (numTime <= 12) {
    greeting = 'Good morning'
  } else if (numTime < 16) {
    greeting = 'Good afternoon'
  } else if (numTime < 20) {
    greeting = 'Good evening'
  } else {
    greeting = 'Good night'
  }
}

// LOGICAL OPERATORS -- AND
let day = 'Wednesday'

if (day === 'Wednesday' && day === 'Tuesday') {
  // some code
}

// let day = 'Wednesday'

// // LOGICAL OPERATORS -- OR
// if (day === 'Wednesday' || day === 'Tuesday' || day === 'Saturday') {
//   // some code
// }

// TESTING FOR TRUE/TRUTH
let hasCar = true

if (hasCar === true) {
  // true
  console.log('you have car')
}

if (hasCar) {
  // true
  console.log('you have car')
}

// TESTING FOR FALSE
if (hasCar === false) {
  // false
  console.log("you don't have a car")
}

// LOGICAL OPERATORS -- NOT
if (hasCar !== true) {
  // false
  console.log("you don't have a car")
}

if (!hasCar) {
  // false
  console.log('you no have car')
}
