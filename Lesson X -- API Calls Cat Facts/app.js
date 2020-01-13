let json;
let fact;
const api_url = 'https://cat-fact.herokuapp.com/facts/random';


function preload() {
  json = loadJSON(api_url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fact = json.text;
  document.getElementById('fact').innerHTML = fact;
}