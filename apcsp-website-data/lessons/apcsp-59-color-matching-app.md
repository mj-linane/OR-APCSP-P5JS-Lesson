---
title: 'APCSP 59: Color Matching App'
date: '2020-03-12T08:07:15-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-59-color-matching-app
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 28134
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'March 24, 2020 @ 11:16 am'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
course_id:
    - '25132'
ld_course_25132:
    - '25132'
site-sidebar-layout:
    - default
site-content-layout:
    - default
theme-transparent-header-meta:
    - default
stick-header-meta:
    - default
---
Overview
--------

You will be building an app from scratch that is a color matching game. By the end, you will be able to:

- Write code to implement solutions to problems from pseudocode or description
- Follow the iterative development process of a collaboratively created program
- Develop and write code for conditional expressions to incorporate into an existing program
- Write a large program from scratch when given directions for each step

Vocabulary
----------

- **Boolean Expression** – in programming, an expression that evaluates to True or False.
- **Conditionals** – Statements that only run under certain conditions.
- **If-Statement** – The common programming structure that implements “conditional statements”.
- **Selection** – A generic term for a type of programming statement (usually an if-statement) that uses a Boolean condition to determine, or select, whether or not to run a certain block of statements.

Color Finder: Planning The App
------------------------------

<div class="wp-block-image"><figure class="aligncenter">[![](https://images.code.org/4eb59e2e07f3bb5d86c7d031274ca836-image-1480703334204.png)](https://images.code.org/4eb59e2e07f3bb5d86c7d031274ca836-image-1480703334204.png)</figure></div>New P5 Code
-----------

1. **select()** : Used to select HTML elements.

###  Description

 Searches the page for an element with the given ID, class, or tag name (using the ‘#’ or ‘.’ prefixes to specify an ID or class respectively, and none for a tag) and returns it as a [p5.Element](https://p5js.org/reference/#/p5.Element). If a class or tag name is given with more than 1 element, only the first element will be returned. The DOM node itself can be accessed with .elt. Returns null if none found. You can also specify a container to search within

### Example: Setting Background Color

```javascriptconst button4 = select('#button4')
button4.style('background-color', color) 
```

Project Files
-------------

[Git](https://github.com/mj-linane/apcsp-student-templates/tree/master/59.color-finder-app-student)[H](https://github.com/mj-linane/apcsp-student-templates/tree/master/59.color-finder-app-student)[ub Project Files](https://github.com/mj-linane/apcsp-student-templates/tree/master/59.color-finder-app-student)

Step 1: Style Other Buttons
---------------------------

 Use style 3 more times to set the color of the other 3 buttons so all 4 are orange.

- I’ve chosen an orange color `RGB(230,155,0)` for now, but this will change later.

Step 2: Make 1 Button Slightly Different
----------------------------------------

Add two lines to the bottom of the code you have that look like something like this.

Setup a variable of diffColor that remembers a RGB string value.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">    let diffColor = 'RGB(100,155,0)'
    button3.style('background-color', diffColor)
```

What does this do? We’re doing two things…

1. Creating a variable to hold the RGB string of a different color, and
2. Overwriting the background color of one of the buttons after having just set it a few lines earlier

Yes, this means your code will change the background color of one of the buttons a few lines after you just set the color in the first place but it will happen so fast you won’t notice, and doing it this way will be useful later on.

Step 3: Make A Button Random
----------------------------

And now, lets style the button.

```javascript    let diffColor = 'RGB(100,155,0)'
    randButtonId = `button${Math.floor(random(1, 5))}`
    select(`#${randButtonId}`).style('background-color', diffColor)
```

Notice that there is really only one new line – to make the `randButtonID` variable.  
 The others change is to replace *“button3”* as the id in select and use with *randButtonID* for styling that HTML element.

Suggestion: Add `console.log(randButtonId)` somewhere after you generate the button ID so you can see which button is supposed to have the different color. It might be hard to spot!

Step 4: Make A Random Color
---------------------------

### How can we make our color flexible? 

If we use RGB() we can generate a random number for each RGB value. Something that looks like this:

```javascriptlet R = random(0,255)
let G = random(0,255)
let B = random(0,255)

let color= `RGB(${R}, ${G}, ${B})`
```

We can then customize it by adding additional values to it:

```javascriptR +=20  //add 20 to current value of R
G +=20
B +=20

let diffColor = `RGB(${R}, ${G}, ${B})`
```

### DO THIS:

**First:** Make the base `color` be a string with random values in it rather than hard-coded.

**Second:** Add 20 to each of the R, G, B values to make `diffColor`

**This means** you will have to insert several lines of code in two different places in your program: just before you create `let color` and just before `let diffColor`.

**Run multiple times to test!** – Each time you run the program you should see randomly chosen colors with a randomly chosen button that’s slightly different.

Step 5: Encapsulate “game board” creation in a function
-------------------------------------------------------

Let’s call the 4 buttons with random colors the **“Game Board.”** Assuming that your program now creates a new randomly generated game board each time you run, let’s take the next step.

When playing the game we need to create a new game board repeatedly, not just when the program starts. Since we have a chunk of code that we want to use repeatedly, **that’s a clue we should take that code and put it in a function**.

### DO THIS:

- Define a new function called `setBoard`.
- Move all of the code that sets the colors of the buttons inside the function – this is actually **all** the code you have so far.
- Add a call to `setBoard()` as the first line of code in the program to verify that it works
- When you’re done the code should look like this:

```javascriptsetBoard()             
function setBoard(){     
// all the button color setting code you wrote from previous steps
}  
```

**NOTE:** The program should not behave any differently after this step – we’re just organizing the code to make it more useful. In the next step will make more use of `setBoard()`. For now, just make the function and call it once.

Step 6: Display Which Button Was Chosen
---------------------------------------

In the game the “correct” button is the one we randomly chose to make a different color. Let’s add a console.log message to display its ID – it will make future work easier.

- add a console.log message like `console.log("correct one is: " + randButtonId)` at the end of the `setBoard` function.
- overall the `setBoard `function will look like this:

```javascriptfunction setBoard(){
    
    // generate random color
    // make all 4 buttons have same color
    // pick a random Button Id
    // set its color to something different
    
    console.log(`correct button is: ${randButtonId}`)
}
```

Step 7: Make randButtonID a global variable
-------------------------------------------

Time to add event handlers. This would be a great time for another function. That will save us from writing the same code over and over again in each event handler.

The function should:

- Check whether they hit the right button or not
- Update the score

### Logic and Workflow

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/69ec2ec89d37fea6848f09f58c2acab4-image-1481147311283.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/f58a4e1e12ff676948c45eac3cfc42d3-image-1481695210092.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/c4fb61e94d04481fd7487f92b31af32f-image-1481695543998.png)</figure></div>Making `randButtonId` global means modifying the code to declare/create it *outside* of any function and then setting its value *inside* setBoard().

- Create a new variable on line 1: `let randButtonId`;
- Inside the setBoard() function, delete the `let `in front of `randButtonId` so that rather than re-creating the variable, we set the value of the global one.

```javascriptlet randButtonId     <-- declare as global variable
setBoard()
function setBoard(){
```

Step 8: Add checkCorrect(buttonId) and Event Handlers 
------------------------------------------------------

This feels like a big step, but it’s actually just a few small ones. We’ll see some new functionality at the end.

1. **Add a function definition for `checkCorrect(buttonId)` that:**
  - Contains a console.log message to display the parameter
  - Calls setBoard()

```javascriptfunction checkCorrect(buttonId){
  console.log(`checking: ${buttonId}`)
  setBoard()
}
```

1. **Add 4 “click” event handlers – one for each button – that call checkCorrect**
  - The event handling functions should call `checkCorrect(...)` with its button id as the parameter.
  - So for *button*4 it should look something like:

```javascript button4.mousePressed(function () {
    checkCorrect('button4')
  })
```

**TESTING**

Once you’ve added this code you should really see some changes. When you click on buttons you should see:

1. Console messages showing what was clicked
2. The board should change each time you click a button
3. Console messages showing the correct answer for each new board.

 Step 9 – add an if-statement in *checkCorrect* 
------------------------------------------------

**Add a simple `if-else` statement inside the function `checkCorrect` that:**

- Compares `buttonId` and `randButtonId` and
- Displays a message to console that they got right or wrong

Insert something like this *between* your existing console.log statement and the call to setBoard()

```javascript    if(buttonId == randButtonId ) {
        console.log("You got it right!")
    } else {
        console.log("WRONG")
    }
```

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/8fd0d14a4c32a6e36299251a2edb56bb-image-1481148748359.png)</figure></div>**TEST IT: Verify that the if-statement is giving correct results**

- You should be able to click on buttons and see messages that verify your if-statement is working
- Be sure to click on all the buttons to test the scenarios
  - Is it detecting correct or incorrect button clicks properly?
  - Is it changing the board every time?
- Your console output might look something like what’s shown at right.

**TIP:** It might be useful to temporarily remove or comment out the call to `setBoard()` so the board doesn’t change every time when you click. This would let you verify that every button works right for a single board setup. Then add it back in once you’re done.

Step 10: Switching Players
--------------------------

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/51b19966ec2e669a6c886a4d4d123243-image-1481213790493.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/a740db3276b9f1009d795fa30147399d-image-1481818219535.png)</figure></div>This is another step that requires 3 parts. But **notice there is a pattern** to what we’re starting to do, and it is a common one:

1. Add a global variable
2. Add a new function definition (that updates that variable in some way)
3. Add a call to the new function you just made.

And that’s exactly what you’re going to do right now.

1. Add global `let currentPlayer = 1` to the top of the program.
2. Add a new function definition in your code for `switchPlayer()` with an if-statement and console.log message. It should look something like this:   
  `function switchPlayer(){     `  
  `if(currentPlayer==1){         `  
  `currentPlayer=2`  
  `} else {`  
  ` currentPlayer=1`  
  `}     `  
  `console.log(`current player: ${currentPlayer}`) }`
3. Add a call `switchPlayer()` as the last line inside the `checkCorrect` function

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/e0cbd1d16fa43842d2352df55caa2959-image-1481210618149.png)</figure></div>**TEST IT OUT**

- After you add this code, you should see a new message in the console among the others indicating whose turn it is. The output might look something like the output shown at right (look for lines that say **current player is: 2**)
- Note: right now most of our output is in the console because it’s easy and fast to verify that things are working. We’ll start updating the UI next!

Step 11: Update the UI to indicate whose turn it is
---------------------------------------------------

A choice has been made for you in the design of the app to indicate whose turn it is in the UI.

- Notice in the design that there are two gray rectangles behind the player scores with ids `player1` and `player2`. Notice that player1 has an additional class “highlight:

### Do this

- Add code to the `if` statement in `switchPlayer`
- For example if it’s player 1’s turn, then add highlight class and remove highlight class from player2

When you’re done you should see the player highlight alternate.

```javascript  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2
      select('#player1').style('filter', 'opacity(20%)')
      select('#player2').style('filter', 'opacity(100%)')
    } else {
      currentPlayer = 1
      select('#player1').style('filter', 'opacity(100%)')
      select('#player2').style('filter', 'opacity(20%)')
    }
    console.log(`current player: ${currentPlayer}`)
  }
```

Step 12: Add Score
------------------

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/c0b4c32edeb6ec0c970273c406d67a4c-image-1481697127214.PNG)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/b0bc443fc879241600121f7b51a47157-image-1481218418095.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/f54131bd28b0477fd5fc2b7ed6440fb8-image-1481218431055.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/509a7b68e35cee73d4c6386bc8c80bc0-image-1481697267243.PNG)</figure></div>DO THIS: add function updateScoreBy
-----------------------------------

We’re going to follow the same pattern we used when adding switch player. We’ll add variables, a function, calls to the function, and for now just use `console.log` statements to verify we’ve got things working.

1. Add global variables to the top of the code: `var p1Score=0;` and `var p2Score=0;`
2. Add a new function definition `updateScoreBy` with an if-statement and console.log to verify. Something like this:

```javascriptfunction updateScoreBy(amt) {
    if (currentPlayer === 1) {
      p1Score += amt
    } else {
      p2Score += amt
    }
    console.log(P1 Score: ${p1Score})
    console.log(P2 Score: ${p2Score})
    p1ScoreDisplay.html(p1Score)
    p2ScoreDisplay.html(p2Score)
  }
```

1. Add calls to `updateScoreBy(1)` and `updateScoreBy(-3)` to the appropriate place inside the if statement in the `checkCorrect` function. 
  - You can leave your console.log statements in there for now as well. Just add calls to `updateScoreBy` along with them.

**TEST IT OUT**

When you run the program now you should be able to verify in the console that the player’s scores are updating. Study the console output to make sure and verify that:

- updateScoreBy is being called from checkCorrect with each click
  - if you have console.log statements in `updateScoreBy` then you should at least see that it’s being called with each click
- The correct player’s score is being updated
- The scores are being updated by the correct amount

A sample of the output might look like this:

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/eb33f7d6d634e4f98e613bc13b231601-image-1481219318239.png)</figure></div>Step 13: Update the UI to show the score.
-----------------------------------------

This is pretty easy at this point.

There are UI text labels for the player’s scores called `score1` and `score2`.

Add `.html `statements at the end of the function (either replace the console.log statements, or just add after them). The label for player 1 would look like this:

```javascript p1ScoreDisplay.html(p1Score)
```

**TEST IT OUT**

You can actually play the game a little bit now!

Step 14: Pick a way for the game to end and implement it
========================================================

Your challenge now is to add some code completely on your own. Use what you’ve learned so far, and Alexis and Michael’s discussion to help you.

**Goal:** Add code that provides a way for the game to end which:

- Displays the `results`
- Shows which player won the game by showing `winner-display`

**Suggestions**

- If you’re stuck for ideas, try to implement the end game condition of “first to 10” – first player to reach a score of 10 wins.

A simple way to update the 0

```javascript  function checkGameOver() {
    if () {
      // if anyone is over 10 points the game is over
      select('.main').style('filter', 'opacity(20%)') // Fade screen
      select('#winner-display').style('display', 'flex')
      if () {
        // figure out who won and show the label
        select('#player1WinText').show()
      } else {
        select('#player2WinText').show()
      }
    }
  }
```