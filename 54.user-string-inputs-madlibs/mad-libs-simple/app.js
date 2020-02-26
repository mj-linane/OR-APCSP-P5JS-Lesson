// Initializes input variables
let input1
let input2
let input3
let input4
let input5

// Stores Input Value --> inputs are automatically stored, this is so we can perform methods on them later
let text1
let text2
let text3
let text4
let text5

// Setup Titles
let subtitle
let input1Label
let input2Label
let input3Label
let input4Label
let input5Label

let displayBtn

let outputContainer
let output1
let output2
let output3
let output4
let output5

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  const title = createElement('h1', 'Mad Libs Game')
  title.position(100, 10)
  subtitle = createElement('h4', 'Enter Some Text to See The Result')
  subtitle.position(100, 50)

  createInputs()
  createDisplayBtn()
  createOutputBox()
}

function createOutputBox() {
  outputContainer = createDiv('')
  outputContainer.style('position: absolute')
  outputContainer.style('margin-left: auto')
  outputContainer.style('margin-right: auto')
  outputContainer.style('width: 500px')
  outputContainer.style('top: 300px')
  outputContainer.style('background-color: white')
  outputContainer.style('padding: 60px')

  output1 = createElement('p', ' ')
  output2 = createElement('p', ' ')
  output3 = createElement('p', ' ')
  output4 = createElement('p', ' ')
  output5 = createElement('p', ' ')

  outputContainer.child(output1)
  outputContainer.child(output2)
  outputContainer.child(output3)
  outputContainer.child(output4)
  outputContainer.child(output5)
}

function createDisplayBtn() {
  // Creates next button and styles it
  displayBtn = createButton('NEXT')
  displayBtn.mousePressed(displayOutput)
  displayBtn.size(100, 50)
  displayBtn.style('position:absolute')
  displayBtn.style('top: 650px')
  displayBtn.style('left: 100px')
  displayBtn.style('background-color: red')
  displayBtn.style('color: white')
  displayBtn.style('font-size: 14px')

  function displayOutput() {
    text1 = input1.value()
    text2 = input2.value()
    text3 = input3.value()
    text4 = input4.value()
    text5 = input5.value()

    output1.html('I once had a tiny, little pet. It small, but rare ' + text1.trim().toLowerCase() + '. What made this animal special is that it could see in the dark.')
    output2.html('Together we used to live in a little, smelly village called ' + text2.trim() + "It isn't much to look at and the people there can be really mean.")
    output3.html('I named this beloved animal ' + text3.trim() + ' after my grandmother of the same name.')
    output4.html('I used to feed ' + text3.trim().toLowerCase() + ' all sorts of ' + text4.trim() + '.')
    output5.html("But then I couldn't stand " + text3.trim() + ' anymore, so I shipped ' + text3.trim() + ' to ' + text5.trim() + '.')

    input1.remove()
    input2.remove()
    input3.remove()
    input4.remove()
    input5.remove()

    input1Label.remove()
    input2Label.remove()
    input3Label.remove()
    input4Label.remove()
    input5Label.remove()
  }
}

function createInputs() {
  // USER INPUTS
  // Creates text input fields and styles them
  input1 = createInput(' ')
  input1.position(100, 150)
  input1.size(250, 25)
  input1Label = createElement('p', 'Name an animal')
  input1Label.position(100, 110)

  input2 = createInput(' ')
  input2.position(100, 250)
  input2.size(250, 25)
  input2Label = createElement('p', 'Name a place')
  input2Label.position(100, 210)

  input3 = createInput(' ')
  input3.position(100, 350)
  input3.size(250, 25)
  input3Label = createElement('p', 'Name a person')
  input3Label.position(100, 310)

  input4 = createInput(' ')
  input4.position(100, 450)
  input4.size(250, 25)
  input4Label = createElement('p', 'Name a food')
  input4Label.position(100, 410)

  input5 = createInput(' ')
  input5.position(100, 550)
  input5.size(250, 25)
  input5Label = createElement('p', 'Name a country')
  input5Label.position(100, 510)
}
