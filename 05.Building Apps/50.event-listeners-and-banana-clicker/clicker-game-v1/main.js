// NAVIGATE TO PAGES
let button
function setup() {
  createCanvas(400, 400)
  button = createButton('Play The Game')
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}
function draw() {
  background(220)
}
function goToLink() {
  window.location.href = 'game.html' // Same tab
}
