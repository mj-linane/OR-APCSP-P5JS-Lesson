function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  const animalUI = select('#animal').value()
  const placeUI = select('#place').value()

  const outputDivUI = select('#output')
  const inputsDivUI = select('#inputs')
  const submitBtn = select('#submitBtn')

  const animalOutputText =
    'I had an animal named ' + animalUI + ' .It was a disgusting animal'
  const placeOutputText =
    'I once lived in ' + placeUI + ' . it was a tech paradise.'

  submitBtn.mousePressed(displayOutput)

  function displayOutput() {
    inputsDivUI.hide()

    const animalOutput = createElement('p', animalOutputText)
    outputDivUI.appendChild(animalOutput)

    const placeOutput = createElement('p', placeOutputText)
    outputDivUI.html(placeOutput)
  }
}
