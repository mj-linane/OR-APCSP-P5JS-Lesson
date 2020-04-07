/**
 * INSTRUCTIONS
 *Your goal is to write a function to control a robot driving forward.
 *There is a wall ahead at a distance of 30.
 *Your robot cannot run into that wall.
 * 
 * Write a function called driveForward with the parameter target.
 * This function should:
 * 1. Check if the target value entered into the function is greater than or equal to the wallDistance. It if is, set resultText to "Target exceeds range".  
 * 2. If the target does not exceed the wallDistance, the function should run a while loop, increasing the counter until the target is reached.
 * 3. Once the target is the same as the counter, the function should set resultText = 'Target reached'
 */

let counter = 0
let resultText = ' '
const wallDistance = 30

function driveForward(target) {
  resultText = 'Target exceeds range.'
  resultText = 'Target reached'

  // Don't change console.log statements
  console.log(resultText)
  console.log(counter)
}

driveForward(0)