---
title: 'APCSP 51: Computer Components &#038; Controlling Memory with Variables'
date: '2020-02-11T10:10:41-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-51-computer-components-controlling-memory-with-variables
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27496
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 24, 2020 @ 10:33 am'
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

Today we will be looking at computer memory and how information can be stored with variables into memory and store data from user inputs.

Vocab
-----

- **Data Type** – All values in a programming language have a “type” – such as a Number, Boolean, or String – that dictates how the computer will interpret it. For example 7+5 is interpreted differently from “7”+”5″
- **Expression** – Any valid unit of code that resolves to a value.
- **Variable** – A placeholder for a piece of information that can change.
- **Concatenation** – Is the operation of joining two or more strings together

Parts of A Computer – Khan Academy
----------------------------------

At a high level, all computers are made up of a processor (CPU), memory, and input/output devices.Each computer receives **input** from a variety of devices, processes that data with the **CPU** and **memory**, and sends results to some form of **output**.This diagram visualizes that flow:

<div class="wp-block-image"><figure class="aligncenter">![An illustration of the components of a computer. A keyboard is labeled as "input" and an arrow flows from the keyboard to two components labeled as "CPU" and "memory". An arrow flows from them to a monitor labeled as "output".](https://cdn.kastatic.org/ka-perseus-images/4e4ea28c9df4c48a95ce61e5191fc4aeb8938116.svg)</figure></div>An illustration of the components of a computer. A keyboard is labeled as “input” and an arrow flows from the keyboard to two components labeled as “CPU” and “memory”. An arrow flows from them to a monitor labeled as “output”.

<figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><div class="ast-oembed-container"><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="281" src="https://www.youtube.com/embed/DKGZlaPlVLY?feature=oembed" title="How Computers Work: CPU, Memory, Input & Output" width="500"></iframe></div></div></figure>Input and Output Devices, CPUs, Main Memory, Secondary Memory
-------------------------------------------------------------

### Activity Resources

- [Input and Output](https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101/computer--components/a/input-output-devices?modal=1) – Website
- [Central Processing Unit (CPU)](https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101/computer--components/a/central-processing-unit-cpu?modal=1) – Website
- [Computer Memory](https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101/computer--components/a/computer-memory?modal=1) – Website
- [Secondary Memory](https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101/computer--components/a/computer-secondary-memory?modal=1) – Website
- [Exploring Microcomputers](https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101/computer--components/a/exploring-microcomputers?modal=1) – Website

### Controlling Memory – Say “gets” instead of “equals”

We know that the `=` sign, in a JavaScript statement like `a = b`, **isn’t** a statement of mathematical equality. It’s an instruction to move memory around. We’ll talk about how to do mathematical equalities in JavaScript soon, but for now we’ll just focus on the meaning of `=`.

One tip is to read a statement like `let score = 0` as: **“The variable score *gets* the value 0″** or maybe just **“score *gets* 0″** to be brief. Another example: `a = b + 7` should be read as **“a gets b plus 7”**

When you read the `=` sign as “gets”, and say it out loud that way, you’ll prevent confusing yourself, and other programmers will know what you’re talking about.

As we’re about to see there are other ways to store values in variables besides just hard-coding single numbers. But in all cases, even when it’s more complicated, **using the word “gets”** when you see a single `=` sign will help your mental model of what’s happening.

Setup File/Folders on VS Code
-----------------------------

APCSP  
–Lesson 3 Variables  
—-app.js  
—-index.html

Variables and Arithmetic Expressions
------------------------------------

A common thing to want to do is store the result of an arithmetic expression. The 4 basic arithmetic operations `+ - * /` are available.

### Misconception Alert

When you have a statement like `result = 5 + 7;` realize that this **does NOT store a mathematical expression in the variable.**

Rather, with this instruction you are asking to compute 5 + 7 and **THEN** store the answer (a single number) in the variable.

### Code This:

1. Write console.log or .html statements to display the values of each of the variables.
2. Using **multiplication: what’s the biggest a number you can store** in a variable? How many digits are in the biggest number before it starts using scientific notation?
3. Using **subtraction (or multiplication with negative numbers): what’s the lowest number you store?** (low means a negative number with a lot of digits)

```javascriptconst add = 7 + 3;
const sub = 7 - 3;
const mult = 7 * 3;
const div = 7 / 3;
const paren = (83 + 92 + 86 + 94) / 4;
```

 Text and Variables Living Together — String Concatenation
----------------------------------------------------------

 Sometimes it’s useful to display text along with the value of a variable in the same line of output. We call this fitting together of values **concatenation**.To do this you use `+` to attach a variable onto a literal string of characters. Here is an example:

```javascriptlet score = 0
console.log('Current Score: ' + score) 
```

Notice that the `+` operator has **two different meanings in JavaScript depending on what type of data you’re applying it to**. Click the explanations below for more details. If **both operands are numbers**`+` means to add those two numbers together. If **either of the operands is a string**`+` treats both as if they were strings and combines them to create a single string.

**TIP:** It’s common to want to sandwich a variable between some text when displaying it. You can string together multiple pieces of text and variables using the `+` operator. For example, you can do this:

```javascriptlet numLikes = 7
console.log('So far ' + numLikes + ' people like this page')
```

### Code This:

I have given you the starting code shown below. You should **modify** the `console.log()`statement on **line 3** to combine text and variables together to make the app display a single line of text. The output should be: `You have {lives} lives left with score: {score}`.

```javascriptlet score = 0;
let lives = 3;
console.log("change this text");
```

Expressions with variables
--------------------------

In the starting code I have provided you with variables that might be the kinds of things you would keep track of in a game: `totalTime`, `points` and `lives`.

```javascriptlet points = 1023;
let lives = 3;
let totalTime = 45;
console.log("Points: " + points);
console.log("Lives: " + lives);
console.log("Total Time: " + totalTime + " secs");
console.log("---------------------------");
let totalScore = 0;
console.log("Your Total Score is: " + totalScore);
```

Right now the `totalScore` is just set to 0. I want you to compute a final score so that the person is rewarded for having a lot of points and lives, but penalized for taking a lot of time.

**Write an expression** that calculates the player’s total score and stores it in the `totalScore` variable. The calculation is: **the player’s points *times* lives *divided* by the total time.**

The output should look like this:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Points: 1023
Lives: 3
Total Time: 45 secs
---------------------------
Your total Score is 68.2
```

Random and Variables
--------------------

Programs become much more interesting when the values in variables change while the program is running. We can also assign to a variable the value returned by a function. For example:

```javascriptlet some val = Math.Random(0, 100)
console.log(someVal)
```

Because the `random` function *evaluates to a number* it means we can treat it *as though it were a number*. We’ve used it before by just “plugging it in” to some function that needed a number as a parameter.

Because the `random `function generates a new and different number each time you call it, one thing we *could not* do before we had variables was generate a random number, and use that *same number* for two different things in a program. Now we can.

### Code This:

Write a program that simulates the rolling of two dice and reports their individual values as well as the sum. The program should:

- Generate two random numbers between 1 and 6 and store each result in its own variable.
- Display the individual values of the two dice.
- Display the sum of the two dice
- Every time you run the program the result will be a little different.

The output should look like this:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Rolling Dice!
You rolled a: 5
and a: 2
For a total of: 7
```

Disclaimer: Parts of this lesson were taken from Khan Academy. Khan Academy in no way directly endorses this site nor this content. Note: All Khan Academy content is available for free at ([www.khanacademy.org)](http://www.khanacademy.org/).