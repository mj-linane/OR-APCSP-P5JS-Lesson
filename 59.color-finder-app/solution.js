/* eslint-disable space-before-function-paren */
/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

function setup() {
  let randButtonId = 1
  let currentPlayer = 1
  let p1Score = 0
  let p2Score = 0

  // Get UI Elements
  const p1ScoreDisplay = select('#score1')
  const p2ScoreDisplay = select('#score2')
  const button1 = select('#button1')
  const button2 = select('#button2')
  const button3 = select('#button3')
  const button4 = select('#button4')

  setBoard()

  function setBoard() {
    let R = random(0, 235)
    let G = random(0, 235)
    let B = random(0, 235)
    let color = `RGB(${R}, ${G}, ${B})`

    button1.style('background-color', color)
    button2.style('background-color', color)
    button3.style('background-color', color)
    button4.style('background-color', color)

    R += 100
    G += 100
    B += 100

    let diffColor = `RGB(${R}, ${G}, ${B})`
    randButtonId = `button${Math.floor(random(1, 5))}`
    select(`#${randButtonId}`).style('background-color', diffColor)
    console.log(`correct button is: ${randButtonId}`)
  }

  // Add Event Listeners
  button1.mousePressed(function() {
    checkCorrect('button1')
  })
  button2.mousePressed(function() {
    checkCorrect('button2')
  })
  button3.mousePressed(function() {
    checkCorrect('button3')
  })
  button4.mousePressed(function() {
    checkCorrect('button4')
  })

  function checkCorrect(buttonId) {
    console.log(`checking: ${buttonId}`)
    if (buttonId === randButtonId) {
      console.log('You got it right!')
      updateScoreBy(1)
    } else {
      console.log('WRONG')
      updateScoreBy(-3)
    }
    checkGameOver()
    setBoard()
    switchPlayer()
  }

  // implements simple "first to 10" game over rule
  function checkGameOver() {
    if (p1Score >= 10 || p2Score >= 10) {
      // if anyone is over 10 points the game is over
      select('.main').style('filter', 'opacity(20%)') // Fade screen
      select('#winner-display').style('display', 'flex')
      if (p1Score > p2Score) {
        // figure out who won and show the label
        select('#player1WinText').show()
      } else {
        select('#player2WinText').show()
      }
    }
  }

  function updateScoreBy(amt) {
    if (currentPlayer === 1) {
      p1Score += amt
    } else {
      p2Score += amt
    }
    console.log(`P1 Score: ${p1Score}`)
    console.log(`P2 Score: ${p2Score}`)
    p1ScoreDisplay.html(p1Score)
    p2ScoreDisplay.html(p2Score)
  }

  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2
      select('#player1').style('filter', 'opacity(20%)')
      select('#player2').style('filter', 'opacity(100%)')
    } else {
      currentPlayer = 1
      select('#player1').style('filter', 'opacity(100%)')
      select('#player2').style('filter', 'opacity(20%)')
    }
    console.log(`current player: ${currentPlayer}`)
  }
}
