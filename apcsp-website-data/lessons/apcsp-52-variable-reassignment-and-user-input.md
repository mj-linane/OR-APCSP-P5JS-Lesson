---
title: 'APCSP 52: Variable Reassignment and User Input'
date: '2020-02-13T14:21:57-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-52-variable-reassignment-and-user-input
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27602
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 24, 2020 @ 12:54 pm'
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
Variable Reassignment
---------------------

So far we have only set a variable’s value once. But it’s called a *variable* for a reason – its value can change (or vary) throughout a program. This is useful and necessary for keeping track of things like a score in a game.

To re-assign a value to a variable all you have to do is maintain the mental model of what’s happening:

- Variables are containers for information.
- The `=` sign is an instruction to set the value.
- A series of assignment statements (see example to right) is a list of instructions to execute one at a time – it’s not a series of equations that define the state of the world.

### You Code: Make A Prediction

```javascriptlet a = 3
let b = 7
a = b
b = a
//add console.log statements below
```

- **Make a prediction.** The code on the following screen looks like what is shown at right. Study it and make a prediction about what will happen when you run the code. What will the values of `a` and `b` be at the end of the program?
- **Add `console.log` statements.** Prove it to yourself by adding `console.log` statements at the end of the program to find out what the value of `a` and `b` are.
- **NOTICE:** in the code above, after the variable `a` has been created using `let/const`, to change a variable’s value, you only need to refer to the variable by its name. The word `let`only needs to be used once – when the variable is created for the first time.
- It’s a **common mistake** to use `let/const`everytime you want to *use* a variable but just **remember** `let/const` **means CREATE a new variable**. When you create a new variable it will lose its old value. We’ll look at errors related to this later.

Variable Reassignment – Updating Values
---------------------------------------

All of our examples so far have shown how to set the value of a variable by using combinations of numbers and other variables. But what if you wanted to do something like **add 10 to the *current* value of a variable**?

Because updating the value in a variable is just moving memory around, the process has to go something like this:

- Read the current value of a variable.
- Add 10 to it.
- Store the new value back into the same variable.

The technical term for this is called **variable re-assignment** – when you change the value of a variable based on its current contents. To increase the value of `num1` by 10 you actually need to do this:

```javascriptnum1 = num1 + 10;
```

The diagram above shows a picture of what’s happening (it assumes the value of `num1` is 7 before the line is executed). It’s actually very similar to what happens with plain old arithmetic: compute a value, then store it in a variable. Because the computation has to happen before storing the result in a variable, there is no contradiction here.

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/c49b1a0fb81de4b90558fdb278e40987-image-1445942169121.png)</figure></div>You Code: Make A Prediction then console.log()
----------------------------------------------

 **Make a prediction.** I start you out with some code again:

```javascriptlet  someNum = 7;

someNum = someNum + 1;
console.log("The value of someNum is now: " + someNum);

someNum = someNum + 1;
console.log("The value of someNum is now: " + someNum);

someNum = someNum + 1;
console.log("The value of someNum is now: " + someNum);

someNum = someNum * someNum;
```

Trace the code and predict what you think will be printed to the console. (NOTE: I’m serious about this “make a prediction” stuff. When you force yourself to make a prediction about what code will do you will learn faster since it triggers you to apply your mental model of what’s happening.)

- **Run the program** to see if you were right.
- **Add a `console.log` statement**.

I’ve left you with a *little bit* of programming to do: add a `console.log` statement at the end of the program to see the last value of `someNum` to see if your full prediction is correct.

Variable Reassignment Challenges
--------------------------------

### Challenge 1

**Instructions:** In each of the following challenges, set the value of the variable(s) to make the `console.log` statement display what it’s supposed to.

**Rules**:

- You may **only** add lines of code that re-assign values of variables provided.
- You may **only** use assignment (`=`) and arithmetic operators (`+` `-` `*` `/`).
- You **MAY NOT** type or introduce any numbers.
- You **MAY NOT** add or create any new variables.
- You **MAY NOT** change or alter the `console.log` statement at all.

### Example

```javascriptlet x = 2
let y = 3
// your code here

console.log("The value of y is: " + y + " (y should be 5)");
```

The code you’re given will have a few variables initialized to some values. The last line will be one or more `console.log` statements with a comment indicating what the expected value to display should be.

 You need to add a line (or multiple lines) of code to re-assign the values in variables so the `console.log` statement displays what’s expected. In this example below I show a solution on line 5. Please note that there are several different things you could do. For example, you could go crazy and do something like: **y = x + x + (x/x);**. What you do is up to you.

```javascriptlet x = 2
let y = 3
// your code here

console.log("The value of y is: " + y + " (y should be 5)");
```

### Challenge 2

- Click through to see a new problem provided in the starter code.
- A reminder of the rules and example are below if you need to sneak a peek.

```javascriptlet x = 7;
let y = 3;
// your code here

console.log("The value of y is: " + y + " (y should be 4)");
```

### Challenge 3

```javascriptlet x = 2;
let y = 3;
// your code here

console.log("The value of x is: " + x + " (x should be 7)");
```

### Challenge 4

```javascriptlet x = 2;
// your code here

console.log("The value of x is: " + x + " (x should be 8)");
```

Getting User Input From Sliders
-------------------------------

### Let’s Code: Add a Slider To Control Colors

Sliders allow users to pick a value within a certain range by dragging a knob along a line. We can use the value of the slider to control something in our page or in our canvas.

#### Step 1: Setup Project

1. Create a new folder called Slider Inputs in this lesson’s folder. Create a new index.html and a new app.js.
2. Setup our normal html elements and the setup and draw functions.
3. In setup(), create a slider element
4. In draw(), instead of setting the background hue to 0, set it to the value of the slider. Because draw is called over and over again, each time the background is drawn it will use the latest value of the slider.

```javascriptfunction setup() {
  createCanvas(600, 120); 
  colorMode(HSB);
}

function draw() {
  background(0, 100, 100);

  textSize(80);
  text("hello", 210, 100);
}
```

#### What is HSB?

Take a look at this link: <https://codepen.io/HunorMarton/details/eWvewo>

#### Step 2: **Create a slider element**

The p5 function for creating a slider and inserting into the DOM is `createSlider`. It takes three arguments:

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/la/7_5/code_to_slide.png)</figure></div>Because we will need to access the value of the slider from within the draw() function, we need to save a reference to it. Let’s store it in a variable named slider, and declare that on top of our sketch:

```javascriptlet slider;
function setup() {
  	slider = createSlider(0, 360, 100);
  	createCanvas(600, 120); 
  	colorMode(HSB);
}
```

#### Step 3: **Set hue to slider value**

Right now we are setting the hue of the background to be 0 every time the draw() function runs (0 is red in the HSB color wheel). Instead, we need to set it to be the value that the slider is at ––if the user moved the slider to 100, the hue should be 100; if the user moved it to 260, the hue should be 260. Slider elements have a function called value() that tells us where it’s at, so we can replace 0 with a call to this function:

```javascriptfunction draw(){
	background(slider.value(), 100, 100);

	textSize(80);
  	text("hello", 210, 100);
}
```

Note: value(), like position() and html(), is a function that all HTML elements have.

### You **Code** – Sliders To Control Saturation and Brightness

Add two more sliders, make them control saturation and brightness.

Get User Text Input
-------------------

### Let’s Code: User Text Input Box

A text input field is a box where a user can type text, like their name. The p5 function that creates an input field element and inserts it to the DOM structure is `createInput`. We can the see the value of that by using the `.value` method on that variable to access its stored memory.

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/la/7_5/createTextInput.png)</figure></div>The steps to add an input field are very similar to the steps for adding a slider:

1. Update your Slider Input files to this new code.
2. Initialize two variables at the top of the JavaScript file: `let slider` and `let textInput`
3. Setup our normal html elements and the setup and draw functions.
4. In setup(), create an input field element, and store it its value in the `textInput `variable declared on top of the sketch. Give it a default value of “Hello”s
5. In draw(), instead of setting the text to “hello”, set it to the value of the input field. We can do this by getting the `textInput `variable’s property with the `.value()` method.

```javascriptlet slider;
let textInput;
function setup() {
  	slider = createSlider(0, 360, 100);
  	textInput = createInput("hello");
  	createCanvas(600, 120); 
  	colorMode(HSB);
}
function draw(){
	background(slider.value(), 100, 100);

	textSize(80);
  	text(textInput.value(), 210, 100);
}
```

### **You Code** – h1 Gets Input

 Add an h1 element to your website using the createElement function. Use the h1’s html function to set the header’s text to the content of the input field.

Wrapping up
-----------

In the lesson we created a button and attached a function to its mousePressed event, so that the function’s code is executed each time you click on the button:

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_5/button_clicked_handler.jpg)</figure></div>In this lesson we did something different. We created a slider and a text input field, but we did not attach a function to an event ––we didn’t say ‘each time the user slides the slider, execute function A’, or ‘each time the user types in the input, execute function B’. Rather, we relied on the fact that the draw() function is a loop:

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/la/7_5/draw_values.png)</figure></div>The value() function gives us access to the latest position of the slider, and to the latest text in the input. It is because draw() runs over and over again, re-drawing background and text each time, that we always see the latest color and the latest text on our canvas.

It is possible, however, to attach functions to slider and text input events, just like we attached the “changeColor” function to our button’s mousePressed event: we can change the text only when the user hits enter, for example, and change the background color only when the user is done moving the slider. In the next learning activity we will learn about these and other HTML element events we can respond to.