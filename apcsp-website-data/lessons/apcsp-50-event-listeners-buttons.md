---
title: 'APCSP 50: Event Listeners &#038; Buttons'
date: '2020-02-06T11:28:52-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-50-event-listeners-buttons
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27366
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 10:11 am'
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

In this unit you will learn how HTML and JavaScript can work together in their p5 sketches. They create HTML elements by adding them to an HTML file, then using Javascript, and then manipulate then dynamically, to animate them and add interactivity.

Vocab
-----

- **Callback function** – a function specified as part of an event listener; it is written by the programmer but called by the system as the result of an event trigger.
- **Event** – An action that causes something to happen.
- **Event-driven program** – a program designed to run blocks of code or functions in response to specified events (e.g. a mouse click)
- **Event handling** – an overarching term for the coding tasks involved in making a program respond to events by triggering functions.
- **Event listener** – a command that can be set up to trigger a function when a particular type of event occurs on a particular UI element.
- **UI Elements** – on-screen objects, like buttons, images, text boxes, pull down menus, screens and so on.
- **User Interface** – The visual elements of a program through which a user controls or communicates with the application. Often abbreviated UI.
- **HTML Canvas** – The **Canvas API** provides a means for drawing graphics via [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.

Resources
---------

1. GitHub.com
2. VSCode.com
3. [P5js Interactivity](https://p5js.org/learn/interactivity.html) – Web page

VS Code Settings Changes
------------------------

1. To customize your experience, go to File &gt; Preferences &gt; Settings
2. User &gt; Text Editor &gt; Formatting
3. Recommended Changes
  1. *Git : Post Commit Command &gt; push*
  2. *Git: Enable Smart Commit &gt; checked*
  3. **(Optional)** *JavaScript &gt; Format: Semicolons &gt; insert (This one is optional, semicolons are part of JavaScript but they are added by the browser when interpreting JavaScript.)*

### VS Code Suggested Extensions

1. Bracket Pair Colorizer 2
2. Live Server
3. GitLens
4. HTML CSS Support
5. p5js Snippets
6. Path Intellisense
7. Visual Studio IntelliCode
8. Color Highlight
9. Code Spell Checker
10. Settings Sync

Your Code’s Basic File Structure
--------------------------------

APCSP Main Folder  
–&gt;Lesson Folder Name  
—-&gt;App.js  
—-&gt;Index.html

 Make sure to add p5js and the app.js files to the index.html page by adding the following:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="html" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><script src="app.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
```

### VS Code Suggested Extensions

1. Bracket Pair Colorizer 2
2. Code Runner
3. Live Server
4. GitLens
5. HTML CSS Support
6. p5js Snippets
7. Path Intellisense
8. Visual Studio IntelliCode
9. Color Highlight
10. Code Spell Checker
11. Settings Sync

Add HTML elements to our page dynamically, from JavaScript.
-----------------------------------------------------------

In the previous activity, we created a page that had a header element (&lt;h1&gt;), a paragraph element (&lt;p&gt;), an image element (&lt;img src=”…”&gt;), and a canvas (&lt;canvas&gt;) element. &lt;h1&gt;, &lt;p&gt;, and &lt;img&gt; were added directly on our index.html file. &lt;canvas&gt; was added in JavaScript, by `createCanvas(200, 200)`.

### Code: Add CreateP() To Create HTML Text With JavaScript 

Each of these functions needs some argument inside the parentheses ––what you need to create a paragraph is different from what you need to create an image. You can look arguments up in the p5 reference page. But for now, let’s start with a simple one: `createP`. Add this line right after your `createCanvas` line: `createP("My lucky number is 10");`

When you run your code, you will see a new paragraph added to the bottom of the page. So now we have two paragraphs. One we wrote directly into index.html (“This is a paragraph”), the other we created with JavaScript (“My lucky number is 10”):

<figure class="wp-block-image">![](https://nycdoe-cs4all.github.io/images/la/7_2/createP.jpg)</figure>Now let’s add an h1 element in JavaScript. You might notice that p5 doesn’t have createH1 function. There are so many HTML tags that including a function for each of them would clutter the p5 reference. So p5 only includes specific functions for the most common DOM elements that you might want to create with code:

- [createDiv()](https://p5js.org/reference/#/p5/createDiv) // Used a lot for CSS styling
- [createP()](https://p5js.org/reference/#/p5/createP)
- [createSpan()](https://p5js.org/reference/#/p5/createSpan) // Used a lot for CSS styling
- [createImg()](https://p5js.org/reference/#/p5/createImg)
- [createA()](https://p5js.org/reference/#/p5/createA)
- [createSlider()](https://p5js.org/reference/#/p5/createSlider)
- [createButton()](https://p5js.org/reference/#/p5/createButton)
- [createCheckbox()](https://p5js.org/reference/#/p5/createCheckbox)
- [createSelect()](https://p5js.org/reference/#/p5/createSelect)
- [createRadio()](https://p5js.org/reference/#/p5/createRadio)
- [createInput()](https://p5js.org/reference/#/p5/createInput)
- [createFileInput()](https://p5js.org/reference/#/p5/createFileInput)
- [createVideo()](https://p5js.org/reference/#/p5/createVideo)
- [createAudio()](https://p5js.org/reference/#/p5/createAudio)
- [createCapture()](https://p5js.org/reference/#/p5/createCapture)

###  Code: **Use createElement() to create h1 and p** 

For any HTML element that is not on the list above, like h1 (there are many more: take a look at the full list of elements [here](https://www.w3schools.com/TAgs/)), there is the generic `<a href="https://p5js.org/reference/#/p5/createElement">createElement()</a>` function. This function takes two arguments: the first is the tag to be created, and the second the content that goes inside the tag.

For example, to add a title to all those random numbers, we can add this line `createElement('h1', 'my lucky numbers below')`. Now we have an h1 element we created by writing it directly into index.html (“This is a header”), and another we created by calling `createElement `in our JavaScript code (“my lucky numbers below).

 Create an additional p element that says ‘my lucky number is 7’.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">function setup() { 
  createCanvas(400, 400);
  background(220)
  createElement('h1', 'my lucky numbers below');
  createElement('p', 'my lucky number is 7');
} 

function draw() { 
  background(220);
}	
```

createElement With ID
---------------------

At times, you will want to use elements that you created in your HTML. We can access their properties or run methods on these newly created HTML elements. To do so, we will need to assign IDs to them. We do this by assigning a variable.

```javascript// CREATE HTML WITH CREATEELEMENT WITH IDs
function setup() {
  createCanvas(windowWidth, windowHeight);
  let titleText = createElement('h1', 'My lucky number is...');
  let numText = createElement('p', '14');
  console.log(numText) // Find out what is inside of this newly created numText objects
}
```

Event-driven programming
------------------------

JavaScript/HTML apps work by adding code to respond to certain **events** that occur in a program. It’s the browser’s way of saying “Hey! something just happened!”. Your code can then respond to each of these events.

Collectively, the coding tasks involved in making your app respond to events by triggering functions are called **Event Handling**.

In P5JS all event handling starts by adding event handlers. Here is a list of event handlers.

Mouse Event Listeners
---------------------

###  Code: Add CreateP() To Automatically Create Text On mousePressed() 

So now we can create a page with some built-in content (in this case, h1, p, img), and then content that JavaScript adds to the page when it runs (a canvas, an h1, a new p element each time the user clicks the mouse). In the next part of this lesson we will look at how to manipulate DOM elements: to have them change dynamically.

Now let’s try adding more and more paragraphs whenever the user clicks the mouse (this is *after* the index.html file has loaded). All we need to do is take our `createP `line from setup, and move it to the `mousePressed `function, which fires anytime the user clicks anywhere on the page. Try it!

<figure class="wp-block-image">![](https://nycdoe-cs4all.github.io/images/la/7_2/mousePressed.png)</figure>Each time you click, a new p element is inserted to the page. There is no way for us to know in advance, when writing our HTML page, how many times the user will click the mouse while on our page, so this wouldn’t be possible to do with plain HTML.

### Code: Replace Lucky Number With Randomly Generated One

Now let’s change the text to `my lucky number is " + random(0, 10)`. Each time we click, we will get a new paragraph with a different lucky number on it. Generating random numbers indefinitely, is another thing JavaScript can do, that plain HTML can’t.

<figure class="wp-block-image">![](https://nycdoe-cs4all.github.io/images/la/7_2/p_random.png)</figure>Event-Driven Programming Patterns
---------------------------------

1. Add content to HTML document directly
2. Setup Canvas in app.js
3. Add new UI elements in the app.js file
4. Give the new UI element a name
5. Add onEvent code to listen for some event on that element.
6. Write the code for the event handling function — These are commonly called **Callback Functions**. The code describes what you want the app to do WHEN the specified type of event happens on the specified ID.
7. Run. Test. Debug. — If the program doesn’t work at first (this is very common) try-try again

Choosing Good IDs
-----------------

What you have just done once will become a familiar pattern to you. When making event-driven web apps with P5js you usually go through the following steps:

**Good IDs** are **meaningful and descriptive**.

Just like good names for functions, you will want an ID to describe the intended purpose of the element. For example, if you have many buttons in your program, you will want to give each an ID that describes what the button does.

Instead of this:

- `button1` and `button2`

You might make IDs that convey not only that it’s a button but what you intend the button to be used for, like:

- `forwardButton` and `leftButton` or
- `fwdBtn` and `leftBtn` or
- `forwardBtn` and `leftBtn`

### Rules About IDs

In making descriptive and meaningful IDs there **are some rules about IDs** you need to know. IDs…

- are case-sensitive
- cannot contain spaces.
- *must* begin with a letter (A-Z or a-z) and may be followed by any number of digits and letters.
- can contain hyphens (“-“), underscores (“\_”), colons (“:”), or periods (“.”).

#### Why no spaces?

Many computer systems do not allow function names and IDs to contain spaces. We typically use camelcase in our lessons. You’ve already seen several examples like this: `createCanvas()`, `noLoop(), beginShape()`, etc. It’s important to realize that camelcase is a style convention, not a hard and fast rule of JavaScript.

#### Case-sensitive?

This means there is a difference between `LeftBtn` and `leftBtn` (notice the Capital L on the first one). These differences seem annoying at first, but you get used to it, and actually learn to appreciate the fact that the computer requires such precision. There are a few common styles for capitalization and spelling multi-word IDs:

- **“Camelcase”** — `aCamelcaseNameMightLookLikeThis`
- **Underscores** — `Some_people_like_to_use_underscores_to_separate_words`
- **dashes** — `Others-like-to-use-hyphens-or-dashes`

Whatever you choose is up to you. It’s your style. You just need to be consistent.

Button Event Listeners
----------------------

### Code: Adding Element ID Variable Names

Do the following steps in the setup() function.

1. Use `createButton()` to create a button element that contains “Try Me!” and give it an id of a let variable called button.
2. Give the button position on the canvas with: `button.position(width / 2, height / 2)`
3. Use `createElement()` to create a p element that contains “Say Hello!” and give it an id of a let variable called greeting.
4. Give the p element position on the canvas with: `greeting.position(width / 2, height / 3)`
5. Add font styling and position with: `textAlign(CENTER)` and `textSize(50)`

### Code: Add A Button To Multiply Your Greeting Every Time It Is Clicked

1. In the setup function, check to see if the button has been pressed by adding `button.mousePressed()`. We can then pass a callback function inside of the `mousePressed()` called `greet`. Notice we don’t use () at the end of the function name. The `mousePressed `knows it should be looking for a function and therefore we don’t need (). If we added () to the callback function, it would fire as soon as the program loads, because `mousePressed `runs as soon as the program loads.
2. Create new function in the main program called `greet()`. Inside this function, we can edit the greeting inner HTML with: `greeting.html('HELLO!')`
3. Lastly, lets add the loop that will display the text repeatedly every time the button is clicked.

```javascript  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('HELLO', 0, 0);
    pop();
  }
```

#### Code: Completed Code

```javascriptlet button
let greeting

function setup() {
  createCanvas(windowWidth, windowHeight)

  button = createButton('Try Me');
  button.position(width / 2, height / 2)
  button.mousePressed(greet)

  greeting = createElement('h2', 'Say Hello!')
  greeting.position(width / 2, height / 3)

  textAlign(CENTER)
  textSize(50)
}

function greet() {
  greeting.html('HELLO!')

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('HELLO', 0, 0);
    pop();
  }
}
```

Learning How to Debug Programs
------------------------------

Debugging is a skill and an art. With practice you learn how to write relatively bug-free code and more importantly you **learn about yourself and the kinds of errors you typically make**. But learning how to debug takes some time and getting used to, and you will learn about the different kinds of things that can go wrong when you write programs.

### Debugging is part of the problem-solving process of programming.

- Rarely does code work exactly the way you want the first time.
- If you write some code and need to work out a few bugs that does not mean you are bad programmer – actually the opposite might be true.

### Be a Pro! Even professionals do not expect to write bug-free code on the first try!!!

- Instead they get in the habit of running their code, checking their assumptions, and making changes as needed. Programming isn’t a fixed set of steps.
- It’s a creative and continuous cycle of writing, testing, and improving code.

### Don’t Worry! We’ll Practice.

- With practice you eventually stop making certain kinds of errors that beginners run into, but there’s always something around the corner that needs to be worked out.

### Common Types of Errors

In the next few levels we’ll practice debugging a few common types of errors. They generally fall in two categories:

#### **Syntax errors**

- Things you misspelled or wrote in such a way the computer doesn’t understand what you’re trying to say
- Usually the computer spits out an error message of some kind that is a clue about what it can’t understand
- Fix these with careful reading of the lines that have errors

#### **Logic errors**

- The program runs but doesn’t do what you think it should.
- Can be tricky to fix because there might not be an error message
- Fix by retracing your steps, being humble, and trying to understand why the computer is interpreting what you wrote the way it is.

Code: Chaser Game — Clicking on Image Object On Canvas
------------------------------------------------------

Objective: Create a game where the player needs to click on a banana on screen and console.log (“You Won”) when they click on it.

### Code Needed

1. `createImg()`
2. `position()`
3. `mousePressed()`
4. `html()`
5. `remove()`
6. `random()`
7. `createElement()`

<div class="wp-block-image">![](../../../../../uploads/2020/02/ezgif.com-crop.gif)</div>### Image File

<div class="wp-block-image">![](../../../../../uploads/2020/02/banana.png)</div>### Steps

1. Create A New Folder called Clicker Game and create a game.html and a app.js template files.
2. Add in the standard HTML document information. Make sure to make a call to the app.js script and the p5js cdn script.
3. Add the banana image to your Clicker Game folder.
4. In your .js file, create your variables above the setup() function: `let bananaImg` and `let heading `
5. In your .js file, add your functions `setup `and `draw`.
6. Setup your `function setup`
  1. Create canvas with `createCanvas(windowWidth, windowHeight)`
  
  
  1. Assign your bananaImg to your file with `createImg`: `bananaImg = createImg('banana.png', 'banana image')`
  2. Give the banana a size: `bananaImg.size(200, 100) `
  3. Setup your headings:   
      `heading = createElement('h2', 'Click The Banana!')  <br></br>heading.position(width / 3, height / 4)`
7. Setup your function draw:
  1. Give the banana image a random location using its `.position` method: `bananaImg.position(random(width), random(height))`
  2. Call the `mousePressed `function when the `bananaImg `is clicked. Give it the callback function of `youWon`.
8. Setup the `function youWon`
  1. Change the inner html of the heading variable with `heading.html()`. Give the `.html()` a parameter of `'You Won!'`
  2. Remove the banana from the screen if you have successfully clicked the banana with: `bananaImg.remove()`
9. Lastly, to control the speed of the banana moving on the screen, we can add `frameRate()` to the `setup` function and add a number as a speed parameter. I would recommend a number between 2 and 10.

Code: Button Navigating To Links and Pages
------------------------------------------

To add clickable buttons, we add the same methods as before: `.position` and `.mousePressed`. This time, we are going to use the `createButton()` to create an onscreen button. We then add the position and `mousePressed` events to that specific button with dot notation.

We can then add in the `window.open` function and pass in a URL we want to open. This is a built in JavaScript method that comes with the browser, no p5js needed. It will open the link in a new tab.

### Navigate to Links

```javascriptlet button;

function setup() {
  createCanvas(400, 400);
	button = createButton('GO TO TWITTER');
	button.position(width/2, height/2)
	button.mousePressed(goToLink)
}

function draw() {
  background(220);
}

function goToLink() {
	window.open('https://twitter.com/');
}
```

### Navigate to Pages

We can do the same thing above, but this time we can navigate to another webpage that is a part of the same folder.

1. Add a new main.html
2. Add the code below to the game.html. It will add a button that will link back to the main.html page once clicked.

```javascriptlet button;

function setup() {
  createCanvas(400, 400);
  button = createButton('Go To Main Page');
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}

function draw() {
  background(220);
}

function goToLink() {
  window.location.href = 'main.html'; // Same tab
}
```

Code: Add A Welcome Page to Your Clicker Game With A Start Now Button
---------------------------------------------------------------------

1. Create a welcome page in the main.js file. Add a header that welcomes the player.
2. Center the heading and add in a background styling as well.
3. Create a button on the main.js file.
4. Position the button to be below the heading.
5. When the button is clicked, change the page to the game.html page.
6. The Clicker Game should immediately start. If you are feeling comfortable, try adding in a button on the game.html page that will say “Start Game”. This means the player has to click that button in order for the banana to start moving.

Hint: One thing you are going to encounter is that your p5 `createElements `or `createButtons `will do it on every page that loads up the app.js script. One way to solve this problem is to create a new main.js JavaScript file that only handles the JavaScript on that page. You *could* write all of the JavaScript in one single app.js file and handle the buttons by hiding and showing as well.

When Should You Add HTML Directly Versus Through JavaScript/P5js?
-----------------------------------------------------------------

 If we have a structure that will not change over time ––for example, we might always have the same title, and the same image on our page––, it makes sense to set them up directly in HTML. But if we want to create hundreds of paragraphs (as in [this example](http://alpha.editor.p5js.org/luisa/sketches/B19olIyLz)), or animate them (as in [this example](https://p5js.org/examples/dom-modifying-the-dom.html)); if we want to add a paragraph each time the user clicks, or if we want to make their content random, then it makes sense to generate them in code. This is exactly what we will do in this lesson.

We can actually create all of these elements in Javascript: apart from `createCanvas`, p5 has many other `create` functions:

- `createP()`
- `createDiv()`
- `createButton()`
- `createImg()`
- …and more ––you can see the full list in the [p5 DOM reference](https://p5js.org/reference/#/libraries/p5.dom))

Upload Changes to GitHub
------------------------

1. Go to your VS Code Source Control Tab
2. Give a name to today’s changes. If it is the first time being uploaded, you can simply title it ‘*Initial’*, if not, then simply give a short description to what is being changed. *‘Update colors’*