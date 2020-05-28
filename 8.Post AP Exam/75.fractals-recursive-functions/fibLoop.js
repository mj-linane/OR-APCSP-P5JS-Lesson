function fibLoop(num) {
  let a = 0
  let b = 1
  let temp = 1
  for (let i = 2; i <= num; i += 1) {
    temp = a + b
    a = b
    b = temp
  }
  return temp
}

console.log(fibLoop(5))
