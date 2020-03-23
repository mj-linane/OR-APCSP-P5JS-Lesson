function setup() {
  let num = random(1, 6)
  console.log(`Number is ${num}`)

  if (num !== 6) {
    console.log('Nope. Not 6. Roll again.')
    num = random(1, 6)
    console.log(`New number is: ${num}`)
  }
  console.log('Done.')
}
