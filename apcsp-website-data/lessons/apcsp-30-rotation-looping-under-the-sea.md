---
title: 'APCSP 30: Rotation, Looping, &#038; Under the Sea'
date: '2019-11-20T10:00:42-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-30-rotation-looping-under-the-sea
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26676
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 10:13 am'
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

Loops are a relatively straightforward idea in programming – you want a certain chunk of code to run repeatedly – but it takes a little practice to get good at controlling loops and recognizing how and where in your programs to use them. The for loop in JavaScript (and many other programming languages) is designed to be used for both simple and sophisticated programming tasks, thus it has a lot of syntax to it that will be explained in the future.

Random numbers are also used more in this lesson as an effective way to experiment with loops. Creating some randomly-generated output with each iteration of the loop is good visual feedback that the loop is running the way you expect. It also helps you explore the ranges of possible outputs, which tells you more about what your program can and cannot do.

Vocabulary
----------

- **Loops** – A sequence of instructions that is repeated until a certain condition is met.
- **For Loop** – Loops that have a predetermined beginning, end, and increment (step interval).
- **Iterations** <span style="font-size: 1rem;">– The repetition of a process</span>

New Code
--------

- **Variable `Let `**– Used to store a value that can be changed in the future
- `Rotate()` – Rotates a shape around a point of origin using Radians
- `angleMode(DEGREES)` – Changes the default measurements of a program to degrees rather than radians
- `for` loop – Runs a segment of code over and over

Resources
---------

Writing Loops
-------------

### P5JS/Vanilla Javascript

**Documentation**

<https://p5js.org/reference/#/p5/for>

**Syntax**

```javascriptfor (let i = 0; i < 9; i++) {
  console.log(i);
}
```

<div class="wp-block-image">![](../../../../../uploads/2019/11/initialize.jpg)</div>Loop Example
------------

![Example of loop applied to squares](../../../../../uploads/2019/11/Screenshot-11-22-2019-8-28-12-AM.png)<iframe allowfullscreen="true" allowtransparency="true" frameborder="no" height="1000" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" scrolling="no" src="https://repl.it/@MJLinane/JS-For-Loop-Example?lite=true" width="100%"></iframe>Additional Resources
--------------------

[9.1: Transformations Pt.1 (Translate, Rotate, Push/Pop) – p5.js Tutorial](https://www.youtube.com/watch?v=o9sgjuh-CBM) — Video

Code #30.1 – Using A Loop Draw Circles
--------------------------------------

**Figure out how many iterations** (number of times the loop runs) you need to consistently fill the screen entirely with dots so none of the background is showing. It will be a little different every time so you’ll need to experiment.

 Make the dot semi-transparent by setting the alpha value to 128 (50% transparency).

<div class="wp-block-image">![](../../../../../uploads/2019/11/520e45a90988b04bb0ff3baa184f080a-image-1443108426597.png)</div>**Compare what you found** with a neighbor to see how close your results are. Then **move on**.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4349728/5fbacdbf02118183fb7af9d5ae832dd1" width="100%"></iframe>Code #30.2 – Using A Loop To Draw and Erase Circles
---------------------------------------------------

 Add a loop to fill the screen with semi-transparent white dots until the original dots are “erased”.

<div class="wp-block-image">![](../../../../../uploads/2019/11/329912b3c61cc62acbd36035ff4b823a-image-1443109101866.gif)</div><iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4349734/a3b084250f3cce8344c53eb7d8b32fdb" width="100%"></iframe>Code Practice #30.3 – Loop &amp; Rotation
-----------------------------------------

Change the number of loop iterations to draw a lot of squares. Try to create the figure shown below (or something similar).

<div class="wp-block-image">![](../../../../../uploads/2019/11/LoopedSquare3.jpeg)</div>Once you’ve played enough to get the hang of calling a function from inside a loop then **move on**.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4349859/46b00c5157b2082c32211a8a21f0dd5d" width="100%"></iframe>Under the Sea Overview
----------------------

We will be drawing this scene over the next couple of classes.

<div class="wp-block-image">![](../../../../../uploads/2019/11/Final-fish-scene.png)</div>Code 30.4 – Under The Sea – Basic Scene
---------------------------------------

<div class="wp-block-image">![](../../../../../uploads/2019/11/35f9a55244004dad62781f4ae0ce7eb2-image-1442608034411.26.55-PM.png)</div>1. Add code to draw **two fish** in the scene. Each fish needs to be made up of a circle and a triangle.
2. **Add** three parameters called `red` , `green` , and `blue` to your function definition for `drawFish` which allow you to set the color of the fish when you call the function. Remember to separate them with commas!
3. Inside `drawFish `just replace the parameter variables inside of the `stroke()` values with the parameters of your function.
4. **Change** the function calls at the top your code to draw different colored fish.
5. **Use random() to provide random input** to *both* of your drawing functions (*drawStarfish, drawFish*) . Just insert the call to `random()` where you would otherwise put numbers.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4349875/375638b2591fdec4b257f27c3df50e86" width="100%"></iframe>Final Question
--------------

> “When should you use a loop instead of a function, or vice versa?”

AP Practice – Scoring an PT Response – Abstraction and Parameters
-----------------------------------------------------------------

In this scenario imagine that **you are scoring an AP Performance Task response.** Below we show the student’s submitted code as well as their written response for writing prompt **2d**.

Here is that prompt:

> **2d.** Capture and paste a program code segment that contains an abstraction you developed individually on your own (marked with a **rectangle**). The abstraction must integrate mathematical and logical concepts. Explain how your abstraction helped manage the complexity of your program. *(Must not exceed 200 words)*
> 
> <cite>AP Computer Science Performance Task Question</cite>

### Student’s Drawing

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/7648c5293d04a57e4f715b5c08899ff9-image-1441996324573.png)</figure></div>### Student’s Code

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/732ea3633d67312724382facaa281955-image-1507928836621.png)</figure></div>### Student Written Response

> 2d). The abstraction I have identified draws a heart in the program. The whole program draws a picture with turtle graphics that says “I \[heart\] CS” where the \[heart\] is actually a drawing of a heart shape. Because I am using the parameterized versions of these turtle functions it helps manage the complexity of the code. Without the parameters the drawing is achieve-able but would require many many more lines of code. For example: the command to `arcRight(220, 30)` – which moves the turtle in a 220-degree arc with a 30-pixel radius – is possible to do with a long series of repeated `moveForward`, and `turnRight` commands, possibly hundreds. By using the `arcRight` command I encapsulate in one line what the code should be doing rather than having to reason about hundreds of lines of code.

  
Use the scoring guide (shown below) to determine if the student should be awarded the point for each of the two criteria about abstractions (row 7 and 8)

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/478c762d2ac876b8b830caabd62c1571-image-1507929333152.png)</figure></div>You score it
============

Each row of the scoring guide one is worth one point, so response 2d is worth up to 2 points total. Should the student get 0, 1 or 2 points total?

Source: remixed from Code.org, Computer Science Principles (’19-’20)