const counter = 0
printPrime(45423)

function printPrime(value) {
  const primes = []
  for (let i = 2; i < value; i += 1) {
    primes[i] = true
  }
  const limit = Math.sqrt(value)
  for (let i = 2; i < limit; i += 1) {
    if (primes[i] === true) {
      for (let j = i * i; j < value; j += i) {
        primes[j] = false
      }
    }
  }
  for (let i = 2; i < value; i += 1) {
    if (primes[i] === true) {
      console.log(`${i} ${primes[i]}`)
    }
  }
}
