let json;
let jokeSetup;
let jokePunchline;
const api_url = 'https://official-joke-api.appspot.com/random_joke';


function preload() {
  json = loadJSON(api_url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  jokeSetup = json.setup;
  jokePunchline = json.punchline;
  document.getElementById('setup').innerHTML = jokeSetup;
  document.getElementById('jokePunchline').innerHTML = jokePunchline;
}
