/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
// Icons made by Iconixar from Flaticon.com

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  const inputUIDiv = createDiv()
  inputUIDiv.id('inputs')

  createElement('h1', 'Password Checker')

  const h4 = createElement('h4', 'Enter Your Password')
  h4.id('inputs-label')
  h4.parent('inputs')

  const passwordUI = createInput('')
  passwordUI.id('input-field')
  passwordUI.parent('inputs')

  let resultTextUI = createP('')
  resultTextUI.id('result-text')
  resultTextUI.parent('inputs')

  const lockedImg = createImg('lock.svg', 'locked image')
  lockedImg.id('locked-image')
  lockedImg.parent('inputs')
  lockedImg.hide()

  const unlockedImg = createImg('unlock.svg', 'unlocked image')
  unlockedImg.id('unlocked-image')
  unlockedImg.parent('inputs')
  unlockedImg.hide()

  const loginBtn = createButton('Login')
  loginBtn.parent('inputs')
  loginBtn.mousePressed(checkPassword)

  const password = 'test'

  function checkPassword() {
    // CODE: hide both images by default
    unlockedImg.hide()
    lockedImg.hide()

    // CODE: add if statement that checks if the user entered password
    // matches the stored password
    if (passwordUI) {
      // CODE: show unlocked image, change result text, change result color.
    }
  }
}
