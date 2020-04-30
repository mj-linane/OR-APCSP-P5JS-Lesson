/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
let resultText
let time


// ALGORITHM EXAMPLE #1
button1.mousePressed(() => {
  button1.style('color', 'red')
})

button2.mousePressed(() => {
  button2.style('color', 'blue')
})

// ALGORITHM EXAMPLE #2
button1.mousePressed(() => {
  const R = random(256)
  const G = random(256)
  const B = random(256)
  const randomRGB = toString(R + G + B)
  button1.style('background-color', 'black')
  button1.style('color', randomRGB)
})

// ALGORITHM EXAMPLE #3
function manageLogIn() {
  if (loginStatus === 'isLoggedIn') {
    gotoHome()
  } else {
    refreshLogin()
  }
}

function gotoHome() {
  window.location.href = '/home'
}

function refreshLogin() {
  loginStatus = 'isLoggedOut'
  window.location.href = '/login'
}

// ALGORITHM EXAMPLE #4
function increaseScore() {
  score += 1
  checkWin()
  if (gameOver) {
    resultText.html(`You won in ${time} seconds`)
  } else {
    goToResults()
  }
}

function goToResults() {
  resultText.position(width / 2, height / 2)
  resultText.html(`Score + ${score}`)
}

function checkWin() {
  const endTime = getTime()
  totalTime = (startTime - endTime) / 1000
  gameOver = false
  if (score > 10 || totalTime > 20) {
    gameOver = true
  }
}

// ALGORITHM EXAMPLE #5
let done = false

while (done === false) {
  const userNum = prompt('Enter your secret number: ')

  if (userNum === 97) {
    done = true
    resultText.html('You did it! Begin countdown')
    for (let i = 97; i >= 0; i -= 1) {
      countdown.html(i)
    }
    resultText.html('Access Granted')
  } else {
    resultText.html('You guessed correctly')
    if (userNum < 97) {
      resultText.html('Guess higher!')
    } else {
      resultText.html('Guess lower')
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  submitButton = createButton('Submit')
  submitButton.size(200, 200)
  submitButton.position(width / 2, height / 2)
  submitButton.mousePressed(() => {
    const data = submitButton.value()
  })
}
