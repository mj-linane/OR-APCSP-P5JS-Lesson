let json
let fact
const apiURL = ''

function preload() {
  json = loadJSON(apiURL)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  fact = json.text
  document.getElementById('fact').innerHTML = fact
}
