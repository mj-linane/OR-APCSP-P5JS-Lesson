let i
let result

// Define n as a positive integer
let n = 3

i = 1
result = 0
for (let a = 0; a < n; a++) {
  result = result + i
  i = i + 1
}
console.log('Program 1: ' + result)

i = n
result = 0
for (let a = 0; a < n; a++) {
  result = result + i
  i = i - 1
}
console.log('Program 2: ' + result)
