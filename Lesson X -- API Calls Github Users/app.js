let json;
let fact;
const api_url = '';


function preload() {
  json = loadJSON(api_url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fact = json.text;
  document.getElementById('fact').innerHTML = fact;
}