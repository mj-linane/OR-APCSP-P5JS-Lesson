// START SMALL
let simNum = 0 // Track number of simulations run so far

function setup() {
  while (simNum < 10) {
    const flip = Math.floor(random(2))
    console.log(flip)
    simNum += 1
  }
}
