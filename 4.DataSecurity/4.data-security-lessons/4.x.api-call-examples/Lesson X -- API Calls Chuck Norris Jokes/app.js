let json
let joke
const apiURL = 'https://api.chucknorris.io/jokes/random'

function preload() {
  json = loadJSON(apiURL)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  joke = json.value
  document.getElementById('joke').innerHTML = joke
}
