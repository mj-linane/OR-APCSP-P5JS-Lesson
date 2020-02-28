let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  createHeadings()
  createInputBox()
  createOutputBox()
  outputDivUI.hide()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.'
  )

  createOutputDisplayBtn()
}

function createHeadings() {
  const titleUI = createElement('h1', 'Mad Libs Game')
  titleUI.style('position: absolute')
  titleUI.style('text-align: center')
  titleUI.style('top: 30px')
  titleUI.style('margin-left: auto')
  titleUI.style('margin-right: auto')

  const subtitleUI = createElement('h4', 'Enter Some Text to See The Result')
  subtitleUI.style('position: absolute')
  subtitleUI.style('text-align: center')
  subtitleUI.style('top: 70px')
  subtitleUI.style('margin-left: auto')
  subtitleUI.style('margin-right: auto')
}

function createInputBox() {
  inputDivUI = createDiv('')
  inputDivUI.style('position: absolute')
  inputDivUI.style('display: flex')
  inputDivUI.style('flex-direction: column')
  inputDivUI.style('margin-left: auto')
  inputDivUI.style('margin-right: auto')
  inputDivUI.style('padding: 30px')
  inputDivUI.style('width: 500px')
  inputDivUI.style('top: 200px')
  inputDivUI.style('background-color: white')
}

function createOutputBox() {
  outputDivUI = createDiv('')
  outputDivUI.style('position: absolute')
  outputDivUI.style('margin-left: auto')
  outputDivUI.style('margin-right: auto')
  outputDivUI.style('width: 500px')
  outputDivUI.style('top: 300px')
  outputDivUI.style('background-color: white')
  outputDivUI.style('padding: 60px')
}

function createOutputDisplayBtn() {
  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.parent(inputDivUI)
  outputDisplayBtn.size(100, 50)
  outputDisplayBtn.mousePressed(showOutputHandler)
  outputDisplayBtn.style('position: relative')
  outputDisplayBtn.style('margin-top: 60px')
  outputDisplayBtn.style('margin-left: auto')
  outputDisplayBtn.style('margin-right: auto')
  outputDisplayBtn.style('background-color: red')
  outputDisplayBtn.style('color: white')
  outputDisplayBtn.style('font-size: 14px')

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }
}

function addTopic(topic, intro, detail) {
  let inputLabel = createElement('p', 'Name a ' + topic.toUpperCase())
  inputLabel.parent(inputDivUI)
  inputLabel.style('position: relative')
  inputLabel.style('margin-left: auto')
  inputLabel.style('margin-right: auto')
  inputLabel.style('padding-top: 30px')

  let inputFieldUI = createInput(' ')
  inputFieldUI.parent(inputDivUI)
  inputFieldUI.style('position: relative')
  inputFieldUI.style('margin-left: auto')
  inputFieldUI.style('margin-right: auto')
  inputFieldUI.style('margin-top: 10px')
  inputFieldUI.size(250, 25)

  inputFieldUI.changed(updateOutputHandler)

  let output = createP(' ')
  output.parent(outputDivUI)

  function updateOutputHandler() {
    output.html(intro + inputFieldUI.value() + detail)
  }
}
