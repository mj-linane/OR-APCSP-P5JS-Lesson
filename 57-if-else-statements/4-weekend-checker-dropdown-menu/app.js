function setup() {
  createCanvas(windowWidth, windowHeight)

  // Create Header
  createDiv().id('inputs')
  createElement('h2', 'Game Age Checker').parent('inputs')
  createElement('h4', 'Select Your Age').parent('inputs')
  // Create Select Button
  const sel = createSelect()
  sel.parent('inputs')
  // ADD CODE: Add dropdown options for ages 5-18+
  sel.option('5')
  sel.option('6')
  sel.option('7')
  sel.option('8')
  sel.option('9')
  sel.option('10')
  sel.option('11')
  sel.option('12')
  sel.option('13')
  sel.option('14')
  sel.option('15')
  sel.option('16')
  sel.option('17')
  sel.option('+18')
  sel.changed(updateResultHandler)

  const result = createP('Result').parent('inputs').id('result-text')

  function updateResultHandler() {
    // ADD CODE: Add If-Else Statement compare the age in the dropdown menu to the right age

    if (sel.value() >= 13) {
      result.html('You are old enough to play this game')
    } else {
      result.html('You are not old enough to play this game.')
    }
  }
}
