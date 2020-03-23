/* eslint-disable prefer-const */
let num = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('white')
  fill('red')

  while (num !== 10) {
    let randomX = random(width)
    let randomY = random(height * 0.8)
    translate(randomX, randomY)
    circle(0, 0, 20)
    translate(-randomX, -randomY)
    num = Math.floor(random(5)) // We have to use Math.floor to get an integer
    console.log(num)
  }
}
