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
  foods.option('Pizza')
  foods.option('Burgers')
  foods.option('Apples')
  foods.option('Sourdough')

  function updateResultHandler() {

  }
}
