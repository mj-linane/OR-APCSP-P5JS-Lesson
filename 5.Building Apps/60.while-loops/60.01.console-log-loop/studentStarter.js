let num = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('white')

  while (num < 10) {
    const randomX = random(width)
    const randomY = random(height * 0.8)
    translate(randomX, randomY)
    fill('red')
    circle(0, 0, 20)
    translate(-randomX, -randomY)
    num = Math.floor(random(20)) // We have to use Math.floor to get an integer
  }
}
