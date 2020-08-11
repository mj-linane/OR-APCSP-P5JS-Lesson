function fibRecur(num) {
  if (num < 2) {
    return num
  }
  return fibRecur(num - 1) + fibRecur(num - 2)
}

fibRecur(5)
