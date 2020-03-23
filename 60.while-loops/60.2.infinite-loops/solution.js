let num = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('white')
  frameRate(1)
}

function draw() {
  while (num !== 50) {
    const randomX = random(width)
    const randomY = random(height * 0.8)
    translate(randomX, randomY)
    fill('red')
    circle(random(width), random(height * 0.8), 20)
    num = Math.floor(51, random(100)) // We have to use Math.floor to get an integer
    translate(-randomX, -randomY)
    console.log(num)
  }
}
