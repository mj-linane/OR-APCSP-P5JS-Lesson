let json;
let joke;
const api_url = 'https://geek-jokes.sameerkumar.website/api';


function preload() {
  json = loadJSON(api_url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.getElementById('joke').innerHTML = json['keys'];
}