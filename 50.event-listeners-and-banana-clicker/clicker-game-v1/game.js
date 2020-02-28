//CREATE HTML WITH CREATEELEMENT WITHOUT IDs
function setup() {
  createCanvas(windowWidth, windowHeight)
  createElement('h1', 'My lucky number is...')
  createElement('p', '14')
}

//CREATE HTML WITH CREATEELEMENT WITH IDs
function setup() {
  createCanvas(windowWidth, windowHeight)
  let titleText = createElement('h1', 'My lucky number is...')
  let numText = createElement('p', '14')
}

//EVENT LISTENERS

// MOUSE CLICKS
// GUESS LUCKY NUMBER
function setup() {
  createCanvas(400, 400)
  createElement('h1', 'my lucky numbers below')
}

function mousePressed() {
  createP('my lucky number is ' + random(0, 10))
}

function draw() {
  background(220)
}

// CREATE TEXT
let gray = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background('white')
}

function mouseReleased() {
  createP('Hello There!')
}

function createSomeText() {}

// BUTTON CLICK LISTENERS
let button
let greeting

function setup() {
  createCanvas(windowWidth, windowHeight)

  button = createButton('Try Me')
  button.position(width / 2, height / 2)
  button.mousePressed(greet)

  greeting = createElement('h2', 'Say Hello!')
  greeting.position(width / 2, height / 3)

  textAlign(CENTER)
  textSize(50)
}

function greet() {
  greeting.html('HELLO!')

  for (let i = 0; i < 200; i++) {
    push()
    fill(random(255), 255, 255)
    translate(random(width), random(height))
    rotate(random(2 * PI))
    text('HELLO', 0, 0)
    pop()
  }
}

// CHASER GAME-- ACCESSING IMAGES ON CANVAS WITH CREATEIMG
let bananaImg
let heading

function setup() {
  createCanvas(windowWidth, windowHeight)
  bananaImg = createImg('/images/banana.png', 'banana image')
  bananaImg.size(200, 100)
  console.log(bananaImg)
  frameRate(1)

  heading = createElement('h2', 'Click The Banana!')
  heading.position(width / 3, height / 4)
}

function draw() {
  bananaImg.position(random(width), random(height))
  bananaImg.mousePressed(youWon)
}

function youWon() {
  heading.html('You Won!')
  console.log('You Won')
  bananaImg.remove()
}

// NAVIGATE LINKS
let button

function setup() {
  createCanvas(400, 400)
  button = createButton('GO TO TWITTER')
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}

function draw() {
  background(220)
}

function goToLink() {
  window.open('https://twitter.com/')
}

// NAVIGATE TO PAGES
let button

function setup() {
  createCanvas(400, 400)
  button = createButton('Play The Game')
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}

function draw() {
  background(220)
}

function goToLink() {
  window.location.href = 'main.html' // Same tab
}
