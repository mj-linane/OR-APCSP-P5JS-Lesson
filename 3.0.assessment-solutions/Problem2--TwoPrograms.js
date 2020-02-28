let i
let result

// Define n as a positive integer
const n = 3

i = 1
result = 0

for (let a = 0; a < n; a += 1) {
  result += i
  i += 1
}

console.log(`Program 1: ${result}`)

i = n
result = 0

for (let a = 0; a < n; a += 1) {
  result += i
  i -= 1
}

console.log(`Program 2: ${result}`)
