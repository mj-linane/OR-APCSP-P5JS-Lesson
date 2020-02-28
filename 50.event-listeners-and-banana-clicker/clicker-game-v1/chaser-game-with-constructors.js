// CHASER GAME -- ACCESSING IMAGES ON CANVAS WITH CONSTRUCTORS
let bananaImg
let strawberryImg
let banana
let strawberry
function preload() {
  bananaImg = loadImage('/images/banana.png')
  strawberryImg = loadImage('/images/strawberry.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(2)
}

function draw() {
  clear()
  banana = new Fruit(random(width), random(height), bananaImg)
  strawberry = new Fruit(random(width), random(height), strawberryImg)
}

function mousePressed() {
  banana.clicked()
  strawberry.clicked()
}

function Fruit(x, y, img) {
  this.x = x
  this.y = y
  image(img, this.x, this.y, 100, 100)
  this.clicked = function () {
    const d = dist(mouseX, mouseY, this.x, this.y)

    if (d < 100) {
      console.log('you won!')
    }
  }
}
