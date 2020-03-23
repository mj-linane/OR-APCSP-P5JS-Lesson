function setup() {
  let die1 = -1
  while (die1 !== 2 || die1 !== 3) {
    die1 = random(1, 6)
    console.log(`Rolled a ${die1}`)
  }
  console.log('Done.')
}
