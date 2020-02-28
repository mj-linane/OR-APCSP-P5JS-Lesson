let json
const apiURL = 'https://geek-jokes.sameerkumar.website/api'

function preload() {
  json = loadJSON(apiURL)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  document.getElementById('joke').innerHTML = json.keys
}
