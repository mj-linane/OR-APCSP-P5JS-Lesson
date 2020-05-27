---
title: 'Recursive Function'
author: 'MJ Linane'
date: '05-27-2020'
unit: 'Post-AP'
course: 'apcsp'
---

## Defining Recursion

The strategy of solving problems where a function calls itself.

### Example #1

```javascript
function someFun() {
  background("black")
  someFun()
}

someFun()
```

## Factorials

$$
n! = n (n - 1) *(n - 2)* (n-3)
$$

## Writing Recursive Functions

There are often two parts to a recursion. Theses branches make up a thing called a recursion tree. The first recursion is considered the base and immediately produces potential branches for the code to cycle through.

One branch is the recursive call, which is the part of the function that calls itself.

The other branch is the equivalent of an escape clause. This occurs when the conditions no longer meet for the recursion to continue.

## Example #2: Recursive Math

````javascript
let counter = 0

function subtractToTwo(num) {
  counter += 1
  console.log(`Counter: ${counter}`)
  console.log(`Num: ${num}`)

  if (num === 2) {
    return 2
  }

  return subtractToTwo(num - 1)
}

subtractToTwo(1000)

````

## EXAMPLE #2: FRACTAL RECURSION

## Difference between Loops and Recursive Functions

The major difference between recursions and loops is that recursions are contained and produce a specific output based on input, while loop runs in a linear manner and demands each succession executed as expected.

While some things may work well in a loop, certain things like in web development (async callbacks) won’t do too well. This is because the loop will continue through the loop, regardless of whether the callback has completed or not.

As a result, your loop will perform unpredictable and return the wrong results.

With a recursion, however, the function won’t call itself again until the processes are probably executed with the correct inputs.
