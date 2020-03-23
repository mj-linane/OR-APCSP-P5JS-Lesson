function setup() {
  let die1 = -1
  let die2 = -1
  while (die1 < 3 || die2 < 3) {
    die1 = random(1, 6)
    die2 = random(1, 6)
    console.log(`Rolled a ${die1} and a ${die2}`)
  }
  console.log('Done.')
}
