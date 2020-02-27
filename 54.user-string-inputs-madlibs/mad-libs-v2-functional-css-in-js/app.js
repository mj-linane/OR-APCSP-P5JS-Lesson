let outputDiv
let inputDiv

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  createHeadings()
  createInputBox()
  createOutputBox()
  outputDiv.hide()

  addTopic("animal", "I once had a tiny, little pet. It was a ", ". It small, but rare. It was pretty ugly.")

  createDisplayBtn()
}

function createHeadings() {
  const title = createElement('h1', 'Mad Libs Game')
  title.style('position: absolute')
  title.style('text-align: center')
  title.style('top: 30px')
  title.style('margin-left: auto')
  title.style('margin-right: auto')

  const subtitle = createElement('h4', 'Enter Some Text to See The Result')
  subtitle.style('position: absolute')
  subtitle.style('text-align: center')
  subtitle.style('top: 70px')
  subtitle.style('margin-left: auto')
  subtitle.style('margin-right: auto')
}

function createInputBox() {
  inputDiv = createDiv('')
  inputDiv.style('position: absolute')
  inputDiv.style('display: flex')
  inputDiv.style('flex-direction: column')
  inputDiv.style('margin-left: auto')
  inputDiv.style('margin-right: auto')
  inputDiv.style('padding: 30px')
  inputDiv.style('width: 500px')
  inputDiv.style('top: 200px')
  inputDiv.style('background-color: white')
}

function createOutputBox() {
  outputDiv = createDiv('')
  outputDiv.style('position: absolute')
  outputDiv.style('margin-left: auto')
  outputDiv.style('margin-right: auto')
  outputDiv.style('width: 500px')
  outputDiv.style('top: 300px')
  outputDiv.style('background-color: white')
  outputDiv.style('padding: 60px')
}

function createDisplayBtn() {
  // Creates next button and styles it
  let displayBtn = createButton('NEXT')
  displayBtn.parent(inputDiv)
  displayBtn.size(100, 50)
  displayBtn.mousePressed(showOutputHandler)
  displayBtn.style('position: relative')
  displayBtn.style('margin-top: 60px')
  displayBtn.style('margin-left: auto')
  displayBtn.style('margin-right: auto')
  displayBtn.style('background-color: red')
  displayBtn.style('color: white')
  displayBtn.style('font-size: 14px')

  function showOutputHandler() {
    outputDiv.show()
    inputDiv.hide()
  }
}

function addTopic(topic, intro, detail) {
  let inputLabel = createElement('p', 'Name a ' + topic.toUpperCase())
  inputLabel.parent(inputDiv)
  inputLabel.style('position: relative')
  inputLabel.style('margin-left: auto')
  inputLabel.style('margin-right: auto')
  inputLabel.style('padding-top: 30px')

  let input = createInput(' ')
  input.parent(inputDiv)
  input.style('position: relative')
  input.style('margin-left: auto')
  input.style('margin-right: auto')
  input.style('margin-top: 10px')
  input.size(250, 25)

  input.changed(updateOutputHandler)

  let output = createP('')
  output.parent(outputDiv)

  function updateOutputHandler() {
    output.html(intro + input.value() + detail)
  }
}