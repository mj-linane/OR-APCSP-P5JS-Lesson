let json;
let joke;
const api_url = 'https://api.chucknorris.io/jokes/random';


function preload() {
  json = loadJSON(api_url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  joke = json.value;
  document.getElementById('joke').innerHTML = joke;
}