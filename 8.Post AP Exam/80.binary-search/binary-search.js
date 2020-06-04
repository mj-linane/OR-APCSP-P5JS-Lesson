// BINARY SEARCH

/*
SEARCHING PROBLEM?
Problem: Find out if a list of students contains the last name of "Smith"

Searching Options:
a) search through the list one by one
b) split the list and search through the half that is likely to contain the name.

Which is going to be faster?


WHAT IS BINARY SEARCH?
Binary search is a coding algorithm for finding an item from a sorted
list of items. It can accomplish this by finding the midpoint between two
endpoint values and comparing it to the target. If not the target, it narrows
down the endpoint values until it reports the target position or that the
target is not in the list. It works by repeatedly dividing in half the portion
of the list that could contain the item, until


BINARY SEARCH PSEUDOCODE
1. Let min = 0 and max = list length - 1.
2. While the min is less than or equal to the max, continue
3. Get the midpoint between the min and max values, rounded down so that it is an integer.
4. If the midpoint is the target number, stop.
5. If the midpoint was too low, set min to be the midpoint + 1.
6. If the midpoint was too high, set max to be the midpoint - 1.
7. Go back to step two.
8. If the target is not in the list, return unsuccessful
*/

const primes = [89, 97, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83]

function binarySearch(array, targetNum) {
  let min = 0
  let max = array.length - 1
  let counter = 0

  while (max >= min) {
    counter += 1
    const mid = Math.floor((min + max) / 2)
    if (array[mid] === targetNum) {
      console.log(`The number of items searched: ${counter}`)
      return mid
    }

    if (array[mid] < targetNum) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }

  console.log(`The number of items searched: ${counter}`)
  return false
}

let result
// result = binarySearch(primes, 1)
// result = binarySearch(primes, 13)
result = binarySearch(primes, 17)
result = binarySearch(primes, 97)

if (result) {
  console.log(`Prime number found at index position: ${result}`)
} else {
  console.log('That is not a prime number.')
}
