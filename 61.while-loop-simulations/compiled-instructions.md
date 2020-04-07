# While Loop Simulations Student Lesson Plan

## 1 Overview

In this lesson, you will create a website that will simulate the flipping of a coin. Now, the trick here is that this coin flipping program is going to model an experiment that while possible for a human to do, it is unreasonable.

You are going to write the program to use loops to flip a coin continuously until certain conditions are met.

### Vocabulary

- Models and Simulations: a program which replicates or mimics key features of a real-world event in order to investigate its behavior without the cost, time, or danger of running an experiment in real life.

## 2 Make a Hypothesis

### Coin Flip Hypothesis

For this little experiment, try flipping an actual coin. I know this is 2020 and few of us probably have coins at the read. If you don't have a real coin, use this: <https://www.google.com/search?q=flip+a+coin>

Over the next several exercises we are going to be **building a program that simulates flipping coins** in order to find out how many flips it takes to get **10,000 heads in total** and how many flips it takes to **get a streak of 12 heads in a row**.

We will start off with a small-scale experiment using a real coin or a simulated "coin". Doing this smaller scale activity may have given you some intuition for what the outcome of the larger experiment will be, but before running an experiment it's usually a good idea to develop a hypothesis.

### Do This: Flip and Record

1. Flip a coin until you get 5 total heads. How many flips did it take?
2. Record your flips writing “H” or “T” for each flip.
3. Flip a coin until you get 3 heads in a row. How many flips did it take?
4. Record your flips by writing “H” or “T” for each flip.

We’ll be developing a simulation that flips coins for us. As a result, we can test how many flips it takes to get many more total heads and longer strings of heads. Before we make our simulation, predict the following:

1. What is the most flips you expect to see in order to get 10,000 total heads?
2. What are the fewest flips you expect to see in order to get 10,000 total heads?
3. What is the most flips you expect to see in order to get 12 heads in a row?
4. What are the fewest flips you expect to see in order to get 12 heads in a row?

## 3 Start Small: Generating Random 0 and 1

To start, we're going to simulate flipping a coin 10 times. You might be thinking that isn't many coin flips, and that we could just do those flips in real life, but this is actually an important step in developing a simulation. At small scales we can make sure our code is working as intended because we can still visually confirm its output. Once we're convinced that the logic of our program is reliable, we'll move up to simulating larger numbers of flips.

The core logic of our program will be focused on **a `while` loop** that simulates flipping a coin by repeatedly generating **random 0's or 1's using p5js's `random()`**. This is a great opportunity to keep practicing using loops while applying your knowledge of variables, iteration, and if statements.

### Do This: Generate Random 0 and 1

When we want to flip a coin with a computer, we will instead generate a random number between 0 and 1.

1. Write a program that uses a while loop to flip a coin 10 times and console.logs() the value of each flip to the screen.
2. **HINT:** you will need to use a counter variable in your while loop to keep track of how many times the coin has been flipped.
3. **HINT:** You will also need to use the `Math.floor()` JavaScript function we used in the previous lesson. Otherwise, the numbers being flipped won't be 0 and 1, it will be 0, .9334534, .12121, etc. You get the point.

## 4 Counting Heads

We are going to alter our simulation so that it doesn't count the total number of heads, but rather the longest streaks of heads. This will allow us to simulate how many flips it takes to get 12 heads in a row.

To begin with you will change your looping condition so that the loop again only runs 10 times. This will allow us to visually confirm our code is working.

Keeping Track of Streaks: We know we need to count streaks of heads; how do we do this in code? Do we need to keep track of all the previous flips so we know that we're on a streak?

_The answer is: no. We can instead just count in a clever way that makes our code pretty simple. Make a variable to use as a counter and..._

1. every time you see heads, add 1 to a counter.
2. every time you see tails, set the counter back to 0

Here is some pseudocode showing how it works. You might take a minute to study and reason about why and how it works.

### Pseudocode: Counting Heads

    // Outside loop
    headsCount <-- 0

    // Inside loop  
    IF (current flip is a heads)
      headsCount <-- headsCount + 1
    ELSE
      headsCount <-- 0
    DISPLAY (current flip)
    DISPLAY (headsCount)

### Do This: Counting Heads

1. Change your while loop's condition so that it only runs 10 times.
2. Add code to the simulation that displays the length of each streak of heads following the logic described above. Note that pseudocode should translate to JavaScript pretty easily.
3. The example below shows an example of what output from your program might look like.

### Expected Output: Counting Heads

Your console should look like this:

    1
    Heads: 1
    1
    Heads: 2
    1
    Heads: 3
    0
    Heads: 3
    1
    Heads: 4
    0
    Heads: 4
    0
    Heads: 4
    0
    Heads: 4
    1
    Heads: 5
    0
    Heads: 5

## 5 Change the Loop Condition - Counting Heads

We want our simulation to run while the streak of heads is less than a target length. In order to do this, we'll need to change our looping condition to use the variables we've been using to count our streak of heads. To begin with your simulation should look for a streak of 3 heads so that you can still visually confirm the output.

### Do This: Change the Loop Condition - Counting Heads

1. Change the condition used by your while loop so that it now runs while the streak of heads is less than 3
2. Test your program by running it and visually confirming that its output is correct.

### Expected Output: Change Loop Condition - Counting Heads

Your console should look like this:
    1
    Heads: 1
    0
    Heads: 1
    1
    Heads: 2
    1
    Heads: 3
    1
    Heads: 4
    1
    Heads: 5
    Total Flips: 6

## 6 10,000 Heads

You're ready to increase the number of heads your simulation is looking for and test your first hypothesis. Before we move up to the full 10,000 heads, however, we're going to perform a quick check of our program logic. When you make changes to your program it is possible that some portion of your programming logic will stop working as you expected. In order to feel more confident about your model you will first change the number of heads you are looking for to a number that we can still visually verify (7 heads). If our code still works after making changes then we should be confident that it should work at 10,000. We will remove the intermediate output and run the full simulation!

### Do This: 10,000 Heads

1. Increase the number of heads you are looking for to 7 and visually confirm that the code is still working as you expect.
2. If everything seems to be working, comment out the console.log() command that displays the results of each flip. You can use // to comment out a single line of code. Make sure that the total count of flips still prints though!
3. Run your simulation and find out how long it takes to get to 10,000 heads. Then run it a few more times. What patterns are you noticing?

### Expected Output: 10,000 Heads

    Total Flips: 20153

## 7 Update Your Hypotheses

If everything has gone well you should already be able to make a determination about your first hypothesis

- How close were your guesses on the high and low bounds for the number of flips to get 10,000 heads?
- Were you at all surprised by this result? If they were different from what you predicted why might this be the case?

Update either of your hypotheses to reflect what you observed in this first experiment.

## 8 Track Streak of Heads

We are going to alter our simulation so that it doesn't count the total number of heads, but rather the longest streaks of heads. This will allow us to simulate how many flips it takes to get 12 heads in a row.

To begin with you will change your looping condition so that the loop again only runs 10 times. This will allow us to visually confirm our code is working.

Keeping Track of Streaks: We know we need to count streaks of heads; how do we do this in code? Do we need to keep track of all the previous flips so we know that we're on a streak?

The answer is: **no**. We can instead just count in a clever way that makes our code pretty simple. Make a variable to use as a counter and...

  1. every time you see heads, add 1 to a counter.
  2. every time you see tails, set the counter back to 0.

Here is some pseudocode showing how it works. You might take a minute to study and reason about why and how it works.

### Pseudocode: Track Streak of Heads

        // Outside loop
        headsCount <-- 0

        // Inside loop  
        IF (current flip is a heads)
        headsCount <-- headsCount + 1
        ELSE
        headsCount <-- 0
        DISPLAY (current flip)
        DISPLAY (headsCount)

### Do This: Track Streak of Heads

1. Change your while loop's condition so that it only runs 10 times.
2. Add code to the simulation that displays the length of each streak of heads following the logic described above. Note that pseudocode should translate to JavaScript pretty easily.
3. The example below shows an example of what output from your program might look like.

### Expected Output: Track Streak of Heads

        0
        Heads Streak: 0
        0
        Heads Streak: 0
        0
        Heads Streak: 0
        0
        Heads Streak: 0
        1
        Heads Streak: 1
        1
        Heads Streak: 2
        0
        Heads Streak: 0
        0
        Heads Streak: 0
        1
        Heads Streak: 1
        0
        Heads Streak: 0
        Total Flips: 10

## 9 Changing the Loop Condition --> Streaks of Heads

We want our simulation to run while the streak of heads is less than a target length. In order to do this, we'll need to change our looping condition to use the variables we've been using to count our streak of heads. To begin with your simulation should look for a streak of 3 heads so that you can still visually confirm the output.

### Do This: Changing the Loop Condition --> Streaks of Heads

1. Change the condition used by your while loop so that it now runs while the streak of heads is less than 3.
2. Test your program by running it and visually confirming that its output is correct. Its output should roughly look like the example below.

### Expected Output: Changing the Loop Condition --> Streaks of Heads

    1
    Heads Streak: 1
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    1
    Heads Streak: 2
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    1
    Heads Streak: 2
    1
    Heads Streak: 3
    Total Flips: 23

## 10 Streaks of Heads: 12 in a Row (GRADED)

We're almost ready to test our second hypothesis and find out how long it takes to get 12 heads in a row. Just as before we're first going to visually test our code with a different length streak (4) before removing most of the visual output and running the code for a streak of 12.

### Do This: Streak of 12

1. Change your simulation to run until you get a streak of 4 and visually verify that the values calculated are accurate.
2. Comment out the lines of code that write the current coin flip and the current streak count. You can use to comment out a single line of code.
3. Change your simulation to run until you get a streak of 12 heads.
4. Run your simulation a few times and record your results!

### Expected Output: Streak of 12

    1
    Heads Streak: 1
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    0
    Heads Streak: 0
    1
    Heads Streak: 1
    1
    Heads Streak: 2
    1
    Heads Streak: 3
    1
    Heads Streak: 4
    Total Flips: 10

## 11 Updating Your Hypotheses - Part 2

You should now be ready to compare the results of your simulation to your second hypothesis.

1. How accurate was your prediction of the upper and lower bounds for the number of flips to get a streak of 12 heads?
2. Were you at all surprised by this result?
3. What might explain the differences between your prediction and what you observed?

Just as before, you should update your hypotheses to reflect the results of your simulation. Try to come up with a reasonable explanation for the results you observed.

## 12 Going Further (Optional)

Keep Experimenting!

Your simulation can be updated or changed however you like. What new questions do you have? Do you want to look for longer streaks of heads? Do you want to roll a die instead of flipping a coin? Make any changes and improvements to your simulation that you like.

## 13 Wrapping Up

You may have observed that flipping tens of thousands of coins takes some time on a computer. If we want to simulate even larger problems, it may be difficult for even a computer to complete the full simulation in a time frame that makes sense. Luckily, you should have developed some intuitions about how these problems develop, based on your earlier simulations.

Not all problems are as easy to simulate as a coin flip of course, and we’ve even seen how some problems we can simulate still take a very long time to run.

Simulations are an increasingly important tool for a variety of disciplines. Weather and traffic predictions are based on computer models that simulate weather patterns or people moving through a city. Scientific research, whether in physics, chemistry, or biology, increasingly uses simulations to develop new hypotheses and test ideas before spending the time and money to run a live experiment.

Before you use most of your favorite websites and apps, they will be tested by simulating high levels of traffic moving across the server. Simulations take advantage of computers’ amazing speed and ability to run repeated tasks, as we’ve seen through our exploration of the while loop, in order to help us learn more about the world around us.

As computers get ever faster and models improve, we are able to answer old questions more quickly and start asking new ones.

## 14 Submitting

Please submit your final code to the Repl.it assignment.
