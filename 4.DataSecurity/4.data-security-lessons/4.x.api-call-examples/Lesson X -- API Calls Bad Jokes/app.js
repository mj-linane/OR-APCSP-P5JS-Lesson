let json
let jokeSetup
let jokePunchline
const apiURL = 'https://official-joke-api.appspot.com/random_joke'

function preload() {
  json = loadJSON(apiURL)
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  jokeSetup = json.setup
  jokePunchline = json.punchline

  document.getElementById('setup').innerHTML = jokeSetup
  document.getElementById('punchline').innerHTML = jokePunchline
}
