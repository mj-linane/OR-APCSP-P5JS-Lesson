function setup() {
  let die1 = -1
  let die2 = -1
  while (die1 !== 2 || die1 !== 3) {
    die1 = Math.floor(random(7))
    console.log(`Rolled a ${die1}`)
  }
  console.log('Done.')
}
