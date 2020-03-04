// Icons made by Iconixar from Flaticon.com

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  createDiv().id('inputs')

  createElement('h1', 'Password Checker')

  createElement('h4', 'Enter Your Password')
    .id('inputs-label')
    .parent('inputs')


  passwordUI = createInput(' ')
    .id('input-field')
    .parent('inputs')

  const resultTextUI = createP(' ')
    .id('result-text')
    .parent('inputs')


  const lockedImg = createImg('lock.svg', 'locked image').id('locked-image').parent('inputs').hide()
  const unlockedImg = createImg('unlock.svg', 'unlocked image').id('unlocked-image').parent('inputs').hide()

  createButton('Login')
    .parent('inputs')
    .mousePressed(checkPassword)

  const password = 'test'

  function checkPassword() {
    // CODE: hide both images by default
    unlockedImg.hide()
    lockedImg.hide()

    // CODE: add if statement that checks if the user entered password
    // matches the stored password
    if (passwordUI.value().trim() === password) {
      // CODE: show unlocked image, change result text, change result color.
      unlockedImg.show()
      resultTextUI.html('Login Successful')
      resultTextUI.style('color: green')
    } else {
      // CODE: show locked image, change result text, change result color.
      lockedImg.show()
      resultTextUI.html('Password Incorrect')
      resultTextUI.style('color: red')
    }
  }
}
