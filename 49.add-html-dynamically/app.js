// CREATE SPECIFIC HTML ELEMENTS
function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')
  createP('This was created in javascript!')
}

function draw() {
  // This will create paragraphs continually
  createP('This is was also created in javascript')
}

// // CREATE HTML WITH CREATEELEMENT WITHOUT IDs
// function setup() {
//   createCanvas(windowWidth, windowHeight)
//   createElement('h1', 'My lucky number is...')
//   createElement('p', '14')
// }

// // CREATE HTML WITH CREATEELEMENT WITH IDs
// function setup() {
//   createCanvas(windowWidth, windowHeight)
//   let titleText = createElement('h1', 'My lucky number is...')
//   let numText = createElement('p', '14')
//   console.log(numText) // Find out what is inside of this newly created numText objects
// }
