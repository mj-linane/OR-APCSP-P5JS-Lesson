function setup() {
  let num = -1
  while (num !== 6) {
    console.log(`Number is: ${num}`)
    num = random(1, 6)
  }
  console.log('Done.')
}
