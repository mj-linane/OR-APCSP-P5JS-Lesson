let json;
let joke;
const api_url = 'https://icanhazdadjoke.com/';


function preload() {
  json = loadJSON(api_url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  joke = json.joke;
  document.getElementById('joke').innerHTML = joke;
}