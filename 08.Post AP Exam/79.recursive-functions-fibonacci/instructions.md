# The Fibonacci Sequence with Recursive Functions and a Termination Clause

The Fibonacci (also called the Golden Ratio) is a sequence of numbers as such:

`1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

Notice anything? The pattern of the sequence is that each value is the sum of the 2 previous values. According to Wikipedia:

> “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones.”

The actual equation is:

$$
F(n) = F(n-1) + F(n-2)
$$

>FUN FACT: Fibonacci sequence can be found a lot in nature. It can be found in patterns of seed heads, curves of waves, spirals of snail shells, pinecones, and branches of trees.

## Code Example: The Fibonacci Sequence in JavaScript

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
