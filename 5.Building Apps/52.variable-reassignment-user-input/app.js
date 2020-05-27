let heading
let textInput

function setup() {
  textInput = createInput(heading)
  heading = createElement('h1', ' ')
}

function draw() {
  heading.html(textInput.value())
}
