let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    false,
    false,
  )

  addTopic(
    'your age',
    'You look ',
    'I cannot believe how old you look',
    false,
    true,
  )

  // Creates next button and styles it
  const outputDisplayBtn = createButton('NEXT')
    .mousePressed(showOutputHandler)
    .parent(inputDivUI)

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  const inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)


  function updateOutputHandler() {
    const output = createP('').parent(outputDivUI)
    let userInput = inputFieldUI.value()

    if (uppercase === true) {
      // reassign userInput to be userInput.toUpperCase()
      userInput = userInput.toUpperCase()
    }

    if (num === true) {
      // / convert input to type Number
      userInput = Number(userInput)
      userInput = `You look ${userInput + 30} years old! `
    }

    output.html(`${intro} ${userInput} ${detail}`)
  }
}
