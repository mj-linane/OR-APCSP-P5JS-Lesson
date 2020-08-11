function setup() {
  let num = -1
  while (num !== 6) {
    console.log(`Number is: ${num}`)
    num = Math.floor(random(7))
  }
  console.log('Done.')
}
