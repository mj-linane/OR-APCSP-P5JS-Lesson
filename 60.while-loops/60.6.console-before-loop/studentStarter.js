function setup() {
  let num = random(1, 6)

  while (num !== 6) {
    num = random(1, 6)
    console.log(`Number is: ${num}`)
  }
  console.log('Done.')
}
