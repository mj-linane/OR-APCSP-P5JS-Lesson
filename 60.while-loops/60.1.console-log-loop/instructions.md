# While Loops

The while loop uses a boolean condition to repeatedly run a block of code. It checks the expression, and if it is true it runs the block of code contained within it. This process of checking the condition and running the block of code is repeated as long as the boolean condition remains true. Once the boolean expression becomes false it will stop.

We are going to start exploring a while loop by modifying the condition on which a while loop runs and using console.log to ensure it is correctly evaluating its condition.

## Math.floor

Notice in the code we need to include the command `Math.floor(random())`. We need to do this because it will round the randomly generated floating point decimal number that random() produces and give us a number we can easily check for.

If we just leave it as `random()`, the result could be a mess of number that may never trigger our check condition variable in resonable time. If our target number is "2", `random(3)` might result in 1.2353456, 2.3452, 1.999999 or 2.11111111, but not "2". By using `Math.floor()` we can get rid of the decimal numbers we don't need and speed up our program considerably.

## Do This

- **Starter code** is provided which creates a while loop that repeatedly draws circles around the screen.
- **Add a console.log** command inside the loop after num is assigned a random number. This way you can see the value the loop is based on.
