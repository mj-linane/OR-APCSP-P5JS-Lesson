function setup() {
  let num = 6

  while (num !== 6) {
    console.log('Nope. Not 6. Roll again.')
    num = randomNumber(1, 6)
    console.log(`New number is ${num}`)
  }
  console.log('Done.')
}
