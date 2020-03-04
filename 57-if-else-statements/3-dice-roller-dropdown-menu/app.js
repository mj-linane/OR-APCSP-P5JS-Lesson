let smileImg
let sadImg
let score = 0
let scoreLabel
let result

function setup() {
  createCanvas(windowWidth, windowHeight)

  scoreLabel = createElement('h4', `Your Score: ${score}`).parent('inputs')
  smileImg = createImg('', 'smile image').parent('inputs')
  sadImg = createImg('', 'sad image').parent('inputs')

  result = createP('Result')
    .parent('inputs')
    .id('result-text')

  // Create Header
  createDiv().id('inputs')
  createElement('h2', 'Game Age Checker').parent('inputs')
  createElement('h4', 'Select Your Age').parent('inputs')

  // Create Roll Button
  createButton('Roll the Die')
    .parent('inputs')
    .mousePressed(updateResultHandler)

  // Create Select Dropdown
  const sel = createSelect()
  sel.parent('inputs')
  sel.option('1')
  sel.option('2')
  sel.option('3')
  sel.option('4')
  sel.option('5')
  sel.option('6')
  sel.changed(updateResultHandler)

  createElement('h4', 'You rolled a: ')

  function updateResultHandler() {
    resetUI()
  }

  function resetUI() {
    sadImg.hide()
    smileImg.hide()
    score = 0
    scoreLabel.html(`Your Score: ${score}`)
  }
}
