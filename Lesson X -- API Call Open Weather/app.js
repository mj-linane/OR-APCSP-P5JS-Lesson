let weather;
let json;

function preload() {
  let url = 'http://api.openweathermap.org/data/2.5/weather?zip=02739&units=imperial&APPID=2acad937ffe0ddfb37cf4b76eeb5d094';
  json = loadJSON(url)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
}

function draw() {
  noLoop();

  // CALCULATE HUE AND SET BACKGROUND COLOR

  // Round temp so it can be easily converted to Hue
  temp = Math.round(json.main.temp);

  /* 
  Calculates hue as a range of colors from 0 - 360 for HSL
  If 100℉ is the hottest we go(360) and 0℉ is the coldest(200),
  then we have a color scale of 160 points.To figure out where in that 160 point range we need to be,
  we can divide the current temperature by the upper bound of 100℉
  which will give us the exact percentage we need to move in our range,
  or 50 %.If we move 50 % of the way into a 160 point range,
  that leaves us at 80. Since we are starting at 200,
  that gives us a hue of 280.
  */

  let hue = 200 + (160 * (temp / 100))

  // SET BACKGROUND FOR CURRENT TEMP
  background(hue, 100, 50)

  console.log("Current Temp: " + temp + "F in Mattapoisett")
  console.log("Hue: " + hue)
}
