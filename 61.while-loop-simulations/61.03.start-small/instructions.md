## 3 Start Small: Generating Random 0 and 1

To start, we're going to simulate flipping a coin 10 times. You might be thinking that isn't many coin flips, and that we could just do those flips in real life, but this is actually an important step in developing a simulation. At small scales we can make sure our code is working as intended because we can still visually confirm its output. Once we're convinced that the logic of our program is reliable we'll move up to simulating larger numbers of flips.

The core logic of our program will be focused on **a `while` loop** that simulates flipping a coin by repeatedly generating **random 0's or 1's using p5js's `random()`**. This is a great opportunity to keep practicing using loops while applying your knowledge of variables, iteration, and if statements.

### Do This: Generate Random 0 and 1

When we want to flip a coin with a computer we will instead generate a random number between 0 and 1.

1. Write a program that uses a while loop to flip a coin 10 times and console.logs() the value of each flip to the screen.
2. **HINT:** you will need to use a counter variable in your while loop to keep track of how many times the coin has been flipped.
3. **HINT:** You will also need to use the `Math.floor()` JavaScript function we used in the previous lesson. Otherwise, the numbers being flipped won't be 0 and 1, it will be 0, .9334534, .12121, etc. You get the point.