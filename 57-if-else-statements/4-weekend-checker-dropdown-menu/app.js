/* eslint-disable no-lonely-if */
function setup() {
  createCanvas(windowWidth, windowHeight)

  // Create Header
  createDiv().id('inputs')
  createElement('h2', 'Weekend Checker').parent('inputs')
  createElement('h4', 'What Should I Do Today?').parent('inputs')

  // Create Day Select Button
  const day = createSelect()
  day.parent('inputs')
  day.changed(updateResultHandler)
  // ADD CODE: Add dropdown options for days of the week
  day.option('Monday')
  day.option('Tuesday')
  day.option('Wednesday')
  day.option('Thursday')
  day.option('Friday')
  day.option('Saturday')
  day.option('Sunday')

  const result = createP('Result')
    .id('result-text')
    .parent('inputs')

  function updateResultHandler() {
    if (day.value() === 'Saturday') {
      result.html("It's the weekend! Stay home!")
    } else {
      if (day.value() === 'Sunday') {
        result.html("It's the weekend! Stay home!")
      } else {
        result.html("It's a weekday. Go to school!")
      }
    }
  }
}
