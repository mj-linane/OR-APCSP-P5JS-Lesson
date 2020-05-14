let simNum = 0 // Track number of simulations run so far
let numHeads = 0 // Track heads streak (number of heads flipped in a row)

flipCounter(5)

function flipCounter(target) {
  while (numHeads < target) { // Change looping condition
    const flip = Math.floor(Math.random())
    if (flip === 1) {
      numHeads += 1 // If flip is 1 (heads), increment heads streak counter
    } else { // If flip is 0 (tails)
      numHeads = 0 // Reset streak counter
    }
    console.log(flip)
    console.log(`Heads Streak: ${numHeads}`)
    simNum += 1 // Increment number of simulations
  }

  console.log(`Total Flips: ${simNum}`)
  return simNum
}
