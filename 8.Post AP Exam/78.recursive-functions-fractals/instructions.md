---
title: 'Recursion and Fractals'
author: 'MJ Linane'
date: '05-27-2020'
course: 'apcsp'
---

- [Defining Recursion](#defining-recursion)
  - [Simple Recursive Program](#simple-recursive-program)
- [More Than a Loop](#more-than-a-loop)
- [Factorials](#factorials)
  - [Factorial Equation](#factorial-equation)
  - [Code Example: Factorials](#code-example-factorials)
- [Writing Recursive Functions with Termination Clauses](#writing-recursive-functions-with-termination-clauses)

## Defining Recursion

The strategy of solving problems where a function calls itself.

### Simple Recursive Program

```javascript
function someFun() {
  console.log("hey!")
  someFun()
}

someFun()
```

Wait...so the function is calling itself?

Yes...this is not just valid JavaScript but also commonly used in JavaScript and in programming in general.

## More Than a Loop

You are probably looking at this and wondering...haven't I seen this before? Isn't this just a loop? Like a while loop?

What makes this so special?

The major difference between recursions and loops is that recursions are contained and produce a specific output based on its input.

On the other hand, a loop runs in a linear manner. Loops demand that each iteration is executed as written without regard to changing inputs.

If something goes wrong in a recursive function, we can build conditional checks inside of that function to stop the program and control what the next step will be.

## Factorials

We see a lot of recursive function use in writing out math equations. One example is in calculating factorials.

Factorials are the product of all numbers from 1 to *n*.

These would be difficult to calculate in side of a loop but easy to do with a recursive function.

### Factorial Equation

$$
n! = n*(n-1)*(n-2)*(n-3)...
$$

Written as actual numbers, it would look like this:

$$
4! = 4*(4-1)*(4-2)*(4-3)
$$
$$
4! = 4*3*2*1
$$
$$
4! = 24
$$

### Code Example: Factorials

If we take that equation above and translate it into JavaScript, it might look like this:

```javascript
function factorial(x) {
  if (x < 0) {
    return
  } else if (x === 0) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

factorial(3) // 6
```

## Writing Recursive Functions with Termination Clauses

Recursive functions are sometimes called recursion trees. There are often three parts of recursion.

The first part is called the *termination condition*. Its job is to immediately stop the program if something is wrong.

The The second part is called *the base condition*. Its job is to stop the program at the lowest possible input acceptable to the function.

The third and final part is called *the recursion*. Its job is to call the function again and immediately generate the same options over again.

Let's take a look in more detail why we would need a termination clause in our recursion.

```javascript
function factorial(x) {
  // Termination Condition
  if (x < 0) {
    return undefined

  // Base Condition
  } else if (x === 0) {
    return 1

  // Recursion
  } else {
    return x * factorial(x - 1)
  }
}

factorial(3) // 6
```
