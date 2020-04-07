## 8 Track Streak of Heads

We are going to alter our simulation so that it doesn't count the total number of heads, but rather the longest streaks of heads. This will allow us to simulate how many flips it takes to get 12 heads in a row.

To begin with you will change your looping condition so that the loop again only runs 10 times. This will allow us to visually confirm our code is working.

Keeping Track of Streaks: We know we need to count streaks of heads, how do we do this in code? Do we need to keep track of all the previous flips so we know that we're on a streak?

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
