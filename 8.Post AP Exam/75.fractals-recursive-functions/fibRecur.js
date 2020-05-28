function fibRecur(num) {
  if (num < 2) {
    return num
  }
  return fibRecur(num - 1) + fibRecur(num - 2)
}
console.log(fibRecur(4))
for (let i = 0; i <= 10; i += 1) {
  const result = `fibRecur(${i}) = ${fibRecur(i)}`
  console.log(result)
}
