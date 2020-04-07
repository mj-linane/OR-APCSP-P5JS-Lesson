
console.log('Driver Verification')
const age = prompt('Please Enter Your Age')

if (age >= 16) {
  console.log("It looks like you're old enough to drive!")
} else {
  console.log("Sorry, you can't drive yet.")

  if (16 - age > 1) {
    console.log(`You need to wait ${16 - age} more years.`)
  } else {
    console.log('You need to wait 1 more year.')
  }
}
