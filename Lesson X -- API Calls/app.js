let weather;
let temp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  const api_url = 'https://api.darksky.net/forecast/b0ad7dfb5de5fc4b8195a1f225a19bac/41.6728825,-70.7786461'
  const response = await fetch(api_url);
  const json = await response.json();
  console.log(json);
}

function gotData(data) {
  weather = data
  console.log(weather)
}
function draw() {
  if (weather) {
    temp = weather.currently.temperature;
    console.log(temp);
    background()
  }
}
