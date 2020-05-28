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
- [The Fibonacci Sequence with Recursive Functions and a Termination Clause](#the-fibonacci-sequence-with-recursive-functions-and-a-termination-clause)
  - [Code Example: The Fibonacci Sequence in JavaScript](#code-example-the-fibonacci-sequence-in-javascript)
- [Recursive Function vs Loops In Real Life: Callbacks Functions](#recursive-function-vs-loops-in-real-life-callbacks-functions)
- [Conclusion](#conclusion)

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

## The Fibonacci Sequence with Recursive Functions and a Termination Clause

The Fibonacci (also called the Golden Ratio) is a sequence of numbers as such:

`1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

Notice anything? The pattern of the sequence is that each value is the sum of the 2 previous values. According to Wikipedia:

> “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones.”

The actual equation is:

$$
F(n) = F(n-1) + F(n-2)
$$

>FUN FACT: Fibonacci sequence can be found a lot in nature. It can be found in patterns of seed heads, curves of waves, spirals of snail shells, pinecones, and branches of trees.

### Code Example: The Fibonacci Sequence in JavaScript

Lets take a look at the Fibonacci sequence first as a loop:

````javascript
function fibLoop(num){
    let a = 0
    let b = 1
    let temp = 1
    for(let i = 2; i <= num; i+=1) {
        temp = a + b
        a = b
        b = temp
    }
    return temp
}

fibLoop(5)
````

Now lets take a look at how we could write this as a recursive function.

````javascript
function fibRecur(num) {
  if (num < 2) {
    return num
  }

  return fibRecur(num - 1) + fibRecur(num - 2)
}

console.log(fibRecur(5))
````

What is that calculating? It is calculating what the 5th number in the fibonacci sequence is. We can see it if we add a short loop to show us, say, the first 10 numbers of the fibonacci sequence.

````javascript
function fibRecur(num) {
  if (num < 2) {
    return num
  }

  return fibRecur(num - 1) + fibRecur(num - 2)
}

console.log(fibRecur(5))

for (let i = 0; i <= 10; i += 1) {
  const result = `fibRecur(${i}) = ${fibRecur(i)}`
  console.log(result)
}
````

We see now that the 4th number generated in the fibonacci sequence is a `5`. This is the same number we saw when we simply `console.log(fibonacci(5))`.

The function doing behind the scenes?

````javascript
// First
fibRecur(4) + fibRecur(3)
// Second
(fibRecur(3) + fibRecur(2)) + (fibRecur(2) + fibRecur(1))
// Third
((fibRecur(2) + fibRecur(1)) + fibRecur(1) + fibRecur(0)) + (fibRecur(1) + fibRecur(0)) + fibRecur(1)
//Fourth
(fibRecur(1) + fibRecur(0)) + fibRecur(1) + fibRecur(1) + fibRecur(0) + fibRecur(1) + fibRecur(0) + fibRecur(1)

// OR

````

## Recursive Function vs Loops In Real Life: Callbacks Functions

OK, so beyond math, is there a purpose for using recursive functions? An example where a recursive function is better than a loop is in web development. In particular when writing callback functions. A recursive function is used instead of a loop because there is a delay in waiting for a web browser or server to fetch data. If using a loop, the loop will continue, regardless of whether the callback has completed or not.

With a recursion, however, the function won’t call itself again until the processes are probably executed with the correct inputs.

## Conclusion

Ok, so we have taken a look at what is recursion, aka recursive functions. We learned why they are sometimes a better choice than loops. And we learned that they can be used in practical purposes in practical coding applications.

This is only part of the story though. What about calculation time? Is a loop faster than recursion? In the upcoming video, we will talk about algorithm speed and we will see which is faster!
