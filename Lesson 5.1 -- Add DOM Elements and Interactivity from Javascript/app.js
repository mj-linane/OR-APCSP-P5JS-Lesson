// Code: Add an h1, an h2, an h3 and an h4 to your app.js using the createElement function.

// CREATE HTML ELEMENTS

// CREATE ELEMENTS WITHOUT IDs
// function setup() {
//   createCanvas(windowWidth, windowHeight)
//   createElement('h1', 'My lucky number is...')
//   createElement('p', '14')
// }

// CREATE ELEMENTS WITH ID
// function setup() {
//   createCanvas(windowWidth, windowHeight)
//   let titleText = createElement('h1', 'My lucky number is...')
//   let numText =  createElement('p', '14')
// }


// EVENT LISTENERS

// MOUSE CLICKS
// GUESS LUCKY NUMBER
// function setup() {
//   createCanvas(400, 400)
//   createElement('h1', 'my lucky numbers below')
// }

// function mousePressed() {
//   createP('my lucky number is ' + random(0, 10))
// }

// function draw() {
//   background(220);
// }

// CREATE TEXT
// let gray = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }


// function draw() {
//   background('white');
// }

// function mouseReleased() {
//   createP('Hello There!') 
// }

// function createSomeText() {
// }

// // BUTTON CLICK LISTENERS
// let button
// let greeting

// function setup() {
//   // create canvas
//   createCanvas(windowWidth, windowHeight)

//   button = createButton('submit');
//   button.position(width / 2, height / 2)
//   button.mousePressed(greet)

//   greeting = createElement('h2', 'Say Hello!')
//   greeting.position(width / 2, height / 3)

//   textAlign(CENTER)
//   textSize(50)
// }

// function greet() {
//   greeting.html('HELLO!')

//   for (let i = 0; i < 200; i++) {
//     push();
//     fill(random(255), 255, 255);
//     translate(random(width), random(height))
//     rotate(random(2 * PI));
//     text('HELLO', 0, 0);
//     pop();
//   }
// }
