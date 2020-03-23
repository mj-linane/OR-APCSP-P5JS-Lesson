function setup() {
  let die1 = -1
  let die2 = -1
  while (true) {
    die1 = randomNumber(1, 6)
    die2 = randomNumber(1, 6)
    console.log(`Rolled a ${die1} and a ${die2}`)
  }
  console.log('Done.')
}