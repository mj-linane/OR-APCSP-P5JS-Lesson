arr = []
for (let i = 0; i < 10; i += 1) {
  arr.push(Math.floor(Math.random() * 100))
}
console.log(arr)

for (let i = 0; i < arr.length; i += 1) {
  arr[i] -= 1
  for (let j = 0; j < arr.length; j += 1) {
    arr[j] -= 1
  }
}

console.log(arr)
