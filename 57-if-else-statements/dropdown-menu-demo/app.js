/* eslint-disable no-lonely-if */
function setup() {
  createCanvas(windowWidth, windowHeight)

  // Create Header
  createDiv().id('inputs')
  createElement('h2', 'Dropdown Menu Demo').parent('inputs')

  // Create foods Select Button
  const foods = createSelect()
  foods.parent('inputs')
  foods.changed(updateResultHandler)

  // ADD CODE: Add dropdown options for foods of the week
  foods.option('Pizza')
  foods.option('Burgers')
  foods.option('Apples')
  foods.option('Sourdough')
}
