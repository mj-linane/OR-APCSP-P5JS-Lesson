let resultText

function setup() {
  createCanvas(windowWidth, windowHeight)

  // Create Header
  createDiv().id('inputs')
  createElement('h2', 'Weekend Checker').parent('inputs')
  createElement('h4', 'What Should I Do Today?').parent('inputs')

  // Create Day Select Button
  const dayDropdownUI = createSelect()
  dayDropdownUI.parent('inputs')
  dayDropdownUI.changed(getUserInputAndCheck)
  // ADD CODE: Add dropdown options for days of the week
  dayDropdownUI.option('Monday')
  dayDropdownUI.option('Tuesday')
  dayDropdownUI.option('Wednesday')
  dayDropdownUI.option('Thursday')
  dayDropdownUI.option('Friday')
  dayDropdownUI.option('Saturday')
  dayDropdownUI.option('Sunday')

  resultDisplayUI = createP('Result')
  resultDisplayUI.id('result-text')
  resultDisplayUI.parent('inputs')

  function getUserInputAndCheck() {
    const userSelect = dayDropdownUI.value()
    checkDay(userSelect)

    // ADD CODE: update the resultDisplayUI html with the variable resultText
    resultDisplayUI.html(resultText)
  }
}

function checkDay(day) {
  if (day === 'Saturday') {
    resultText = "It's the weekend! Stay home!"
  } else if (day === 'Sunday') {
    resultText = "It's the weekend! Stay home!"
  } else {
    resultText = "It's a weekday. Go to school!"
  }

  return resultText
}
