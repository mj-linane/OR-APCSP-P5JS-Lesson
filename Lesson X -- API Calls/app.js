let weather;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?zip=02739&units=imperial&APPID=2acad937ffe0ddfb37cf4b76eeb5d094', gotData())
  background(0)
}

function gotData(data) {
  weather = data
}
function draw() {

  if (weather) {
    background()

  }
}
