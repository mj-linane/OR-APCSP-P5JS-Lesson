let json
let fact
const apiURL = 'https://cat-fact.herokuapp.com/facts/random'

function preload() {
  json = loadJSON(apiURL)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  fact = json.text
  document.getElementById('fact').innerHTML = fact
}
