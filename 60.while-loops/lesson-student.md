# Overview: while Loops

The while loop uses a boolean condition to repeatedly run a block of code. It checks the expression, and if it is true it runs the block of code contained within it. This process of checking the condition and running the block of code is repeated as long as the boolean condition remains true. Once the boolean expression becomes false it will stop.

We are going to start exploring a while loop by modifying the condition on which a while loop runs and using console.log to ensure it is correctly evaluating its condition.

## while Loop Syntax

The while loop we are using is just plain JavaScript. P5js doesn't add anything to the way we write or use it.

    while(conditionA === conditionB){
      // Run some code
    }

Notice, the while statement is very similiar to if statement in the way it is written. The only difference is that an if/else statement check will run one time, a while loop runs until a condition is met.

### Explanation Resources

- [Debugging JavaScript - Chrome DevTools 101](https://www.youtube.com/watch?v=H0XScE08hy8) - YouTube Video
- [Coding Train: Local Server, Text Editor, JavaScript Console](https://www.youtube.com/watch?v=UCHzlUiDD10) - Coding Train YouTube Video
- [Mozilla JavaScript While Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## How To Use This Lesson's Activities & Code Templates

Below I posted a series of exercises that demonstrate a way that while loops work in Javascript.

For each topic, I post some code and then instructions on what to do to the starter code.

You can copy/paste the code into a REPL or you could access the files on GitHub and copy/paste the code into your editor.

Here are the GitHub source files: [while Loops Source Code](https://github.com/mj-linane/apcsp-student-templates/tree/master/60.while-loops)

## 1 Console Log while Loop Values

### New Code: Math.floor()

Notice in the code we need to include the command `Math.floor(random())`. We need to do this because it will round the randomly generated floating point decimal number that random() produces and give us a number we can easily check for.

If we just leave it as `random()`, the result could be a mess of number that may never trigger our check condition variable in resonable time. If our target number is "2", `random(3)` might result in 1.2353456, 2.3452, 1.999999 or 2.11111111, but not "2". By using `Math.floor()` we can get rid of the decimal numbers we don't need and speed up our program considerably.

### Do This: Console Log while Loop values

- **Starter code** is provided which creates a while loop that repeatedly draws circles around the screen.
- **Add a console.log** command inside the loop after `num` is assigned a random number. This way you can see the value of `num` the loop's continuation is based on.

### Starter Code

    let num = 0

    function setup() {
      createCanvas(windowWidth, windowHeight)
      background('white')

      while (num < 10) {
        const randomX = random(width)
        const randomY = random(height * 0.8)
        translate(randomX, randomY)
        fill('red')
        circle(0, 0, 20)
        translate(-randomX, -randomY)
        num = Math.floor(random(20)) // We have to use Math.floor to get an integer
      }
    }

## 2 Infinite while Loops

while loops run until their condition becomes false, which raises an interesting question. What happens if the condition never becomes false?

In these cases the program enters what is called an *infinite loop* over the commands in the while loop, and it never reaches the rest of your program. We normally avoid infinite loops in our programs, but let's try it out to see what happens.

### Do This: Infinite while Loops

Starter code is provided which creates a while loop to draw circles on the screen.

- **Change** the while loop condition to something that will always be true The easiest way to do this is to change 50 to be a number that random will never generate such as 200.
- **Run the program.** Notice that it will never stop running. You may even get an error from your browser. It's possible you may even need to close the browser window and reload the page.
- **Test** a condition using < or > that will also cause an infinite loop.

### Starter Code: Infinite while Loops

    let num = 0

    function setup() {
      createCanvas(windowWidth, windowHeight)
      background('white')
      fill('red')

      while (num !== 10) {
        let randomX = random(width)
        let randomY = random(height * 0.8)
        translate(randomX, randomY)
        circle(0, 0, 20)
        translate(-randomX, -randomY)
        num = Math.floor(random(5)) // Math.floor to get an integer
        console.log(num)
      }
    }

## 3 Changing if To while Loops

How many times would we have to roll a die before it comes up as a 6? In the program you're about to see, we simulate rolling a die (generating a random number between 1 and 6) in order to answer this question.

### Do This: Change if To while Loop

- **Starter code** is provided which re-rolls a die once if the first roll is not a 6.
- **Change the if statement to a while loop** so the program will keep rolling the die while the current roll is not a 6.
- **HINT:** The easiest way to do this is to change the text from if to while.
- **Run** the program to test out the change.

### Starter Code: if To while Loops

    function setup() {
      let num = Math.floor(random(7))
      console.log(`Number is ${num}`)

      if (num !== 6) {
        console.log('Nope. Not 6. Roll again.')
        num = Math.floor(random(7))
        console.log(`New number is: ${num}`)
      }
      console.log('Done.')
    }

## 4 Debug while Loop Variable Values

Up until now, if we wanted to find out the value of a variable at some point in the execution of a program, we've used console.log. That is still going to be a great strategy but the Debug Console can do even more for us!

Check this out: We can check the value of a variable in real time (as our program executes) by typing its name into the prompt within the Debug Console and hitting "enter". This is another powerful tool for debugging your programs.

Do This: Debug while Loop Variable Values

- **Run** the program.
- **Use the Chrome Developer Tools** and its Debug console to check the ending value of `num`. You can do this by typing `num` in the Debug Console and hitting enter!

### Starter Code: Debugging while Loops

    function setup() {
      let num = Math.floor(random(7))
      console.log(`Number is ${num}`)
      while (num !== 6) {
        console.log('Nope. Not 6. Roll again.')
        num = Math.floor(random(7))
        console.log(`New number is: ${num}`)
      }
      console.log('Done.')
    }

### Debugging Commands: Set Breakpoints

Using these tools we can investigate the state of variables and other elements of the program at any point, mid-execution. This makes it much easier to see what’s happening while the programming is actually running!

In order to use the debug commands, you first have to indicate which line you want the program to pause at. This is called adding a “breakpoint”.

#### Do This: Set Debug Breakpoint

- Add a breakpoint on the line where the while loop starts. (Just click the line number.)
- Use the button to execute each line one at a time.
- Each time you hit the breakpoint, use the console to check value of `num`.
- NOTE: If you hit it will "continue" executing the program normally, unless of course it hits another breakpoint.

### Developer Chrome Tools Full Guide

How to use Chrome Developer Tools: <https://developers.google.com/web/tools/chrome-devtools/javascript>

## 5 Update while Loop Condition

In order for a while loop to stop at some point, the code inside the loop must change something about the state of the program - usually the value of a variable - so that eventually the boolean expression becomes false. Otherwise you'd have an infinite loop!

### Do This: Update while Loop Condition

The starter code runs an infinite loop.

- **Run** the code to see the problem in action. Remember to hit the reset button to stop the infinite loop.
- **Add code** inside the while loop which will update the variable `num` so that the condition will eventually become false.
- **HINT:** You can use the debugging tools if you think they would be helpful.

### Starter Code: Update while Loop Condition

    const num = 1
    while (num !== 6) {
      console.log('Nope. Not 6. Roll again.')
    }
    console.log('Done.')

## 6 console.log Before the Loop Starts

Sometimes our code will be doing the right thing but we won't be able to tell because of the way we are console.log ing values. We need to make sure we console.log  all the values we are interested in.

This program should write all the values of `num` to the screen as it runs; however it misses one - the first one generated.

### Do This: console.log  Before the Loop Starts

- **Run the program** a few times and notice that sometimes it just console.log "Done." and nothing else, even though a number was generated. The first value of `num` never gets displayed.
- **Add a console.log statement** before the loop to console.log the first number.
- **HINT:** Look at the two times `num` is assigned a value. Which one isn't being displayed?

### Starter Code: console.log  Before the Loop Starts

    function setup() {
      let num = Math.floor(random(7))

      while (num !== 6) {
        num = Math.floor(random(7))
        console.log(`Number is: ${num}`)
      }
      console.log('Done.')
    }

## 7 Set A Starting Condition

We have seen that loops can run infinitely. In the last section we saw that there is also the chance that the loop never runs at all! If the condition of the while loop starts out false then the loop will never run.

We fixed this problem in the last exercise by displaying the value of `num` in two places: before the loop and in the loop. Duplicating code is generally a bad strategy, so the question is: can we be a little clever and get into the loop without missing any values? The answer is yes.

The solution is to initialize the values used in our boolean expression so that we are certain it will evaluate to true the first time the loop checks it. For example, if your loop condition is: `while (num !== 6)` you could initialize `num` to anything other than 6 and you'd know that you get into the loop.

If you use this technique though...

- You need to make sure you set the value of `num` right away inside the loop.
- You probably want to use a nonsense value like -1, so that if you ever see that displayed it will be obvious something is wrong and be easier to debug.

### Do This: Set A Starting Condition

- **Starter code** is provided which creates a while loop that never runs.
- **Run** the program once to see that the loop is never entered.
- **Fix** the problem by changing the initial value of `num` to a nonsense value such as -1.

### Starter Code: Set A Starting Condition

    function setup() {
      let num = 6

      while (num !== 6) {
        console.log('Nope. Not 6. Roll again.')
        num = Math.floor(random(7))
        console.log(`New number is ${num}`)
      }
      console.log('Done.')
    }

## 8 console.log After Setting Value

We started trying to remove the duplicate code we had on the last section by initializing a variable to a nonsense, or "dummy," value that would still ensure we entered the loop.

In the code provided, not every number is going to display. However, this time we want to try not to add code to fix the problem, since duplicate code is inefficient.

### Do This: console.log After Setting Value

The code is completely functional except that it does not console.log one of the numbers it's supposed to. In addition we don't want it to console.log the dummy variable of -1.

- **Run the program** to see the behavior.
- **Fix the code** so that it console.log s all the values of `num`.
- **HINT:** You don't need to add any code. Just switch the order of the code you have now!
- **HINT:** What should be the last number that console.logs every time this program runs?

### Starter Code: console.log After Setting Value

    function setup() {
      let num = -1

      while (num !== 6) {
        console.log(`Number is: ${num}`)
        num = Math.floor(random(7))
      }
      console.log('Done.')
    }

## 9 Boolean Operators in while Loops

We can create compound boolean expressions to control our while loops just like our if statements. Let's try using boolean operators in our while loop condition.

### Do This: Boolean Operators in while Loops

Right now this code rolls two dice as long as either one of them is less than 3.

- **Modify the condition** so that it keeps rolling as long as both are less than 3.
- **HINT:** To say that both dice are less than 3 the boolean expression must say: if die1 less-than 3 AND die2 less-than 3...

### Starter Code: Boolean Operators in while Loops

    function setup() {
      let die1 = -1
      let die2 = -1
      while (die1 < 3 || die2 < 3) {
        die1 = Math.floor(random(7))
        die2 = Math.floor(random(7))
        console.log(`Rolled a ${die1} and a ${die2}`)
      }
      console.log('Done.')
    }

## 10 Expressing Stopping Conditions: "Until Loops"

It is often more natural to think about looping in terms of when the loop should end rather than when it should continue. For example you might say "keep going down the road until you see the gas station" or "keep calling until you get through to someone." You might think of these as "until loops" rather than "while loops," since we want the loop to continue until a condition is true rather than while a condition is true.

There is no "until loop" in JavaScript but it is actually quite easy to translate "until loops" into while loops so that you can use them in programs. An "until loop" runs until a condition is true, as opposed to a while loop which runs as long as a condition is true. That means an until loop is the logical inverse of a while loop - it runs as long as the condition is false. The table below shows how you can use the NOT ( ! ) operator to translate stopping conditions into while loop conditions.

### Expressed as Stopping

- *Stop once you reach the gas station*
- *Stop calling when you get through to someone*
- *Stop when x === y*

### Expressed as Until Loop

- *Keep going until you reach the gas station*
- *Keep going while you have NOT reached the gas station*
- *until(x === y){...*

### Expressed as While Loop

- *Keep calling until you get through to someone*
- *Keep calling while you have NOT gotten through to someone*
- *while(!(x == y)){...*

NOTE how we can use the NOT operation to find the logical inverse (or opposite) of the condition from our "until loop" to create a while loop. Let's do a little practice of that now.

### Do This: Until Loops

Starter code is provided that repeatedly rolls two dice and writes their values to the screen.

Careful: before you edit this code it creates an infinite loop.

- Use the technique above to modify this code so that the loop stops when both dice are 5 or greater.
- Try it out and experiment. You should exit the loop the first time both dice have values greater than or equal to 5 displayed.

### Starter Code: Until Loops

    function setup() {
      let die1 = -1
      let die2 = -1
      while (true) {
        die1 = Math.floor(random(7))
        die2 = Math.floor(random(7))
        console.log(`Rolled a ${die1} and a ${die2}`)
      }
      console.log('Done.')
    }

## 11 Write a Loop From English

Alright it’s your turn. Can you translate the English into code

This problem also involves an "until loop" problem.

### Do This: Write A Loop From English

Take this statement in English and translate it into code:

>*“Write a program that simulates the rolling of two dice. Keep rolling the dice UNTIL the sum of the dice is either a 7 OR an 11."*

Your program should display the results of each roll.

**HINT:** In English, we sometimes say "or" when in cold hard logic we mean "and".

### Starter Code: White A Loop From English

    function setup() {
      let die1 = Math.floor(random(7))
      let die2 = Math.floor(random(7))
    }

## 12 Debugging: Complex Logic

In this challenge you need to find and fix a bug in a program that simulates rolling one die.

The given code accidentally loops infinitely, so something must be wrong with the condition. Can you figure out how to fix it?

### Do This: Debug Complex Logic

- **Fix the condition** so that it keeps rolling the die as long as the value is not a 2 or a 3.
- **HINT:** Think about other ways you can express this idea in English.

### Starter Code: Debug Complex Logic

    function setup() {
      let die1 = -1
      while (die1 !== 2 || die1 !== 3) {
        die1 = Math.floor(random(7))
        console.log(`Rolled a ${die1}`)
      }
      console.log('Done.')
    }

## 13 Repeat Specific Number of Times

Instead of writing code that makes the loop run a random number of times, we can control the while loop by changing the variable used in the boolean expression differently. Let’s try just console.log a string 5 times.

### Do This: Repeat Specific Number of Times

- Right now the code prints a string "Hi" twice.
- **Change the code** so that it prints the string "Hi" 5 times.
- Notice how count is being re-assigned each time through the loop.

### Starter Code: Repeat Specific Number of Times

    function setup() {
      let count = 0
      while (count < 2) {
        console.log('Hi')
        count + 1
      }
    }

## 14 New += and ++ Operators

As programmers we are always looking for more concise ways to write code. It is so common to add 1 to a variable such as in `count = count + 1` that there is actually two different shorthands for it.

### ++ Operator To Add 1

You can write `count++` to add 1 to count. `count++` does the exact same thing as `count = count + 1`.

This will always count by 1.

### += Operator To Add To Any Number (Recommended)

You can also write  `count = count + 1` as `count += 1` to add 1 to count. `count += 1` does the exact same thing as the other methods but with one advantage, you can add whatever number you would like to it, including variables.

All of these are acceptable:

- `count += 1`
- `count += a`
- `count += (a + 10)`

### Programmer Style Choice

In fact the computer turns `count++` and `count += 1` into `count = count + 1` behind the scenes - it really is just a convenient shorthand.

This is more of a programmer style choice so if you want to write your code using `count = count + 1` instead there is nothing wrong with that!

### Do This: ++ And += Operators

**Change the code** to use `count++` or `count += 1` instead of `count = count + 1`.

**Misconception Alert:** You don't need to write `count = count++` (the computer is doing the assignment for you)

### Starter Code: ++ And += Operators

    function setup() {
      let count = 0
      while (count < 4) {
        console.log('Hi')
        count = count + 1
      }
    }

## 15 New -- AND -= Operators

As you may have guessed, just as we can write `count = count + 1` as `count++` we can also write `count = count - 1` as `count--` or `count -= 1`.

Let's write a program that counts down from 10 down to 1.

### Do This: -- And -= Operators

The current program counts up from 1 to 10.

Change the code to use `count -= 1` to count down from 10 to 1.

You will need to:

- Change the looping condition.
- Change `count += 1` to `count -= 1`.
- Change the initial value assigned to count.

### Starter Code: -- And -= Operators

    function setup() {
      let count = 0
      while (count < 10) {
        count += 1
        console.log(count)
      }
    }

## 16 Defensive Loop Conditions

Take a look at the starting code. Instead of counting by 3's we had decided to count by 4's.

But this will run us into a problem. Can you see why?

We wanted to stop counting at 30, but when you count by 4 you will actually never hit 30. It would go... 24, 28, 32, 36... What we really want to do is stop when the number is greater than 30. This is an important defensive programming strategy. Make the condition catch more cases than you think you need so that if for some reason something does not go exactly as you planned it will hit the stop condition and not go infinitely.

### Do This: Defensive Loop Conditions

Change the loop condition to prevent the infinite loop and stop counting once the count is past 30.

### Starter Code: Defensive Loop Conditions

    function setup() {
      let count = 0
      while (count !== 30) {
        count += 4
        console.log(count)
      }
    }

## 17 Use An if Statement In A while Loop

A common thing to do is to use variables to keep track of some sort of count. When used in a loop we count things very quickly.

>*Scenario: If you roll a pair of dice, rolling a 12 (two sixes) is rare. How rare? If you were to roll a pair of dice 1,000 times, on average, how many times would it come up as 12?*

To figure this out, we could write code to run an experiment. It would go something like this:

- Make a loop that simulates rolling a pair of dice 1,000 times.
- Inside the loop, add an if statement: *if die1 + die2 == 12, then add 1 to a counter.*
- After the loop, display the result.

### Do This: Use An if Statement In A while Loop

The starter code sets up the whole experiment for you, except it doesn't count the number of 12's rolled - that's your job.

- **Run the code** to see what the experiment does.
- **Add an if statement** inside the loop to check if the sum of the dice is equal to 12, and add 1 to twelveCount.
- **Display the number** of times the sum was 12 once the loop has completed

**NOTE:** If you remove (or comment out) the console.log statement that displays every roll of the dice, the experiment will speed up A LOT! You could do tens of thousands of dice rolls in a matter of seconds.

### Starter Code: if Statement In while Loop

    function setup() {
      let die1 = -1
      let die2 = -1
      let loopNum = 0 // use to count number of loops
      let twelveCount = 0 // use to count 12's

      while (loopNum < 1000) {
        loopNum += 1
        die1 = Math.floor(random(7))
        die2 = Math.floor(random(7))
        console.log(`Rolled a ${die1} and a ${die2} for a total of ${die1 + die2}`)
      }
      console.log(`The number of times 12 was rolled was: ${twelveCount}`)
      console.log('Done.')
    }

## More Practice

### Khan Academy

- **GREAT:** Lessons written in P5JS
- [Javascript Looping](https://www.khanacademy.org/computing/computer-programming/programming/programming/looping#looping) - Lesson Link

### FreeCodeCamp

- **OK:** Lessons written in plain/vanilla JavaScript
- **NOT GOOD:** Our topic ordering is not the same as there. You will have to search for the lessons/topics you want to practice.
- [freeCodeCamp Javascript Lessons](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
  