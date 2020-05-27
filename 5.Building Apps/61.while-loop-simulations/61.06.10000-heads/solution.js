// 10,000 HEADS
let simNum = 0 // Track number of simulations run so far
let numHeads = 0 // Track how many flips were heads
function setup() {
  while (numHeads < 10000) { // ** Change looping condition **
    const flip = Math.floor(random(2))
    if (flip === 1) {
      numHeads += 1 // If flip is 1 (heads), increment numHeads
    }
    // console.log(flip);
    // console.log("Heads: " + numHeads);
    simNum += 1 // Increment number of simulations
  }
  console.log(`Total Flips: ${simNum}`)
}
