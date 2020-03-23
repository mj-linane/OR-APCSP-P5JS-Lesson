function setup() {
  let die1 = -1
  let die2 = -1
  while (die1 < 3 || die2 < 3) {
    die1 = Math.floor(random(7))
    die2 = Math.floor(random(7))
    console.log(`Rolled a ${die1} and a ${die2}`)
  }
  console.log('Done.')
}
