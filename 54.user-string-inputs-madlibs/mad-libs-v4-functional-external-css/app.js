let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic("animal", "I once had a tiny, little pet. It was a ", ". It small, but rare. It was pretty ugly.")

  addTopic("place", "I once lived with my pet in a place called ", ". Never have I been to a more disgusting place where gnomes roam wild.")

  // Creates next button and styles it
  let displayBtn = createButton('NEXT').parent(inputDivUI)
  displayBtn.mousePressed(showOutputHandler)

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

function addTopic(topic, intro, detail) {
  createElement('p', 'Name a ' + topic.toUpperCase()).id('input-label').parent(inputDivUI)

  let inputFieldUI = createInput(' ').id('input-field').parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  let output = createP('').parent(outputDivUI)

  function updateOutputHandler() {
    output.html(intro + inputFieldUI.value() + detail)
  }
}