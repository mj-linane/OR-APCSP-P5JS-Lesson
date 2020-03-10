/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
// Icons made by Iconixar from Flaticon.com
const password = 'test'

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  const inputsDivUI = createDiv()
  inputsDivUI.id('inputs')

  createElement('h1', 'Password Checker')

  const passwordLabelUI = createElement('h4', 'Enter Your Password')
  passwordLabelUI.id('inputs-label')
  passwordLabelUI.parent('inputs')

  const passwordUI = createInput('')
  passwordUI.id('input-field')
  passwordUI.parent('inputs')

  let resultTextUI = createP('')
  resultTextUI.id('result-text')
  resultTextUI.parent('inputs')

  const lockedImg = createImg(
    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4MHB0IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjQ4MHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00MzIgMjQwYzAgMTA2LjAzOTA2Mi04NS45NjA5MzggMTkyLTE5MiAxOTJzLTE5Mi04NS45NjA5MzgtMTkyLTE5MiA4NS45NjA5MzgtMTkyIDE5Mi0xOTIgMTkyIDg1Ljk2MDkzOCAxOTIgMTkyem0wIDAiIGZpbGw9IiNjZmQyZmMiLz48cGF0aCBkPSJtMjQwIDQ4MGMtMTMyLjU0Njg3NSAwLTI0MC0xMDcuNDUzMTI1LTI0MC0yNDBzMTA3LjQ1MzEyNS0yNDAgMjQwLTI0MCAyNDAgMTA3LjQ1MzEyNSAyNDAgMjQwYy0uMTQ4NDM4IDEzMi40ODQzNzUtMTA3LjUxNTYyNSAyMzkuODUxNTYyLTI0MCAyNDB6bTAtNDY0Yy0xMjMuNzEwOTM4IDAtMjI0IDEwMC4yODkwNjItMjI0IDIyNHMxMDAuMjg5MDYyIDIyNCAyMjQgMjI0IDIyNC0xMDAuMjg5MDYyIDIyNC0yMjRjLS4xNDA2MjUtMTIzLjY1MjM0NC0xMDAuMzQ3NjU2LTIyMy44NTkzNzUtMjI0LTIyNHptMCAwIiBmaWxsPSIjODY5MGZhIi8+PHBhdGggZD0ibTI0MCAxMDRjLTMwLjkxNDA2Mi4wMzUxNTYtNTUuOTY0ODQ0IDI1LjA4NTkzOC01NiA1NnYzMmMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDh2LTQwYzAtMjIuMDg5ODQ0IDE3LjkxMDE1Ni00MCA0MC00MHM0MCAxNy45MTAxNTYgNDAgNDB2NDBoOGM0LjQxNzk2OSAwIDgtMy41ODIwMzEgOC04di0zMmMtLjAzNTE1Ni0zMC45MTQwNjItMjUuMDg1OTM4LTU1Ljk2NDg0NC01Ni01NnptMCAwIiBmaWxsPSIjODY5MGZhIi8+PHBhdGggZD0ibTE1MiAxOTJoMTc2djE0NGgtMTc2em0wIDAiIGZpbGw9IiM1MTUzZmYiLz48L3N2Zz4=',
    'locked image',
  )
  lockedImg.id('locked-image')
  lockedImg.parent('inputs')
  lockedImg.hide()

  const unlockedImg = createImg(
    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4MHB0IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjQ4MHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00MzIgMjQwYzAgMTA2LjAzOTA2Mi04NS45NjA5MzggMTkyLTE5MiAxOTJzLTE5Mi04NS45NjA5MzgtMTkyLTE5MiA4NS45NjA5MzgtMTkyIDE5Mi0xOTIgMTkyIDg1Ljk2MDkzOCAxOTIgMTkyem0wIDAiIGZpbGw9IiNjZmQyZmMiLz48cGF0aCBkPSJtMjQwIDQ4MGMtMTMyLjU0Njg3NSAwLTI0MC0xMDcuNDUzMTI1LTI0MC0yNDBzMTA3LjQ1MzEyNS0yNDAgMjQwLTI0MCAyNDAgMTA3LjQ1MzEyNSAyNDAgMjQwYy0uMTQ4NDM4IDEzMi40ODQzNzUtMTA3LjUxNTYyNSAyMzkuODUxNTYyLTI0MCAyNDB6bTAtNDY0Yy0xMjMuNzEwOTM4IDAtMjI0IDEwMC4yODkwNjItMjI0IDIyNHMxMDAuMjg5MDYyIDIyNCAyMjQgMjI0IDIyNC0xMDAuMjg5MDYyIDIyNC0yMjRjLS4xNDA2MjUtMTIzLjY1MjM0NC0xMDAuMzQ3NjU2LTIyMy44NTkzNzUtMjI0LTIyNHptMCAwIiBmaWxsPSIjODY5MGZhIi8+PHBhdGggZD0ibTI1NiAyMTZjLTQuNDE3OTY5IDAtOC0zLjU4MjAzMS04LTh2LTMyYzAtMzAuOTI5Njg4IDI1LjA3MDMxMi01NiA1Ni01NnM1NiAyNS4wNzAzMTIgNTYgNTZjMCA0LjQxNzk2OS0zLjU4MjAzMSA4LTggOHMtOC0zLjU4MjAzMS04LThjMC0yMi4wODk4NDQtMTcuOTEwMTU2LTQwLTQwLTQwcy00MCAxNy45MTAxNTYtNDAgNDB2MzJjMCA0LjQxNzk2OS0zLjU4MjAzMSA4LTggOHptMCAwIiBmaWxsPSIjODY5MGZhIi8+PHBhdGggZD0ibTEyOCAyMDhoMTc2djE0NGgtMTc2em0wIDAiIGZpbGw9IiM1MTUzZmYiLz48L3N2Zz4=',
    'unlocked image',
  )
  unlockedImg.id('unlocked-image')
  unlockedImg.parent('inputs')
  unlockedImg.hide()

  const loginBtn = createButton('Login')
  loginBtn.parent('inputs')
  loginBtn.mousePressed(checkPassword)

  function checkPassword() {
    // hide both images by default and set empty result text
    resultTextUI.html('')
    lockedImg.hide()
    unlockedImg.hide()

    if (passwordUI.value() === password) {
      // show unlocked image, change result text, change result color.
      unlockedImg.show()
      resultTextUI.html('Login Successful')
      resultTextUI.style('color: green')
    }
    // ADD CODE: Add an else block that will show locked image,
    // change result text, change result color.
  }
}
