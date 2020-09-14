---
title: 'APCSP 26: Getting Started P5JS &#038; Drawing Simple Shapes'
date: '2019-11-07T15:56:02-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-26-getting-started-p5js-drawing-simple-shapes
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26491
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 13, 2020 @ 2:27 pm'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
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
course_id:
    - '25132'
---
Vocabulary
==========

1. **Dependency:** is a broad programming term used to refer when a piece of software relies on another one.
2. **Functions**: Functions are self-contained lines of code (also known as “blocks”) that perform specific tasks. Think of these as mini-programs inside of your main program.
3. **Parameters or arguments:** Are the values inside of a parenthesis following the name of the function. These are variables used to change the outcome of a function.
4. **Documentation** – a description of the behavior of a command, function, library, API, etc.
5. **Library** – a collection of commands / functions, typically with a shared purpose. P5JS is a library for Javascript. It is a Dependency in our programs, in that our program depends on it to run.

Resources
---------

1. [Repl.it](https://repl.it/)
2. <https://p5js.org/>
3. [P5 Documentation](https://p5js.org/reference/)

Software
--------

 In this course we are going to make projects using p5.js written on Repl.it. P5.JS (or simply p5) is a JavaScript library for creating visual and interactive art in web browsers. p5.js works with the three native web languages (JavaScript, HTML, and CSS) to make work that is easily shareable on the Internet.

Link to signup for class on repl

<https://repl.it/data/classrooms/share/31c6cff73ec2575183611088ce2fccf3>

Setting Up Project
------------------

A P5 project needs 3 files.

1. HTML file
2. Javascript file
3. CSS file — nothing to see here

### An HTML file

Usually called index.html. This contains the markdown styled content on the page. This needs to include the p5 api library. A typical file will look like this:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="html" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="script.js"></script>
  </body>
</html>
```

**Warning: we need to add in the dependency by linking to the p5js source files. We add this above our own script.js file inside of the HTML. This version “** ***/0.9.0/*** ” **will change as the library is changed.**

 **&lt;script src=”https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js”&gt;&lt;/script&gt;**

### A Javascript File

While setup and draw are defined by the developer in each sketch, most of the p5 functions we’ll use are defined by the p5 library, and **invoked** in our code.

`Ex. rect(50, 50, 100, 100);`

When a function is invoked, or called, the programmer is asking the program to run the code within the function. The **parenthesis operator** is used to invoke the function.

Our Javascript files need to include two pre-built functions. The first function is called `function setup(){}` that runs one time, as soon as the program is loaded. The second, `function draw(){]` runs in a loop as long as the program is open.

The values inside of the parentheses are known as **arguments** or **parameters**. These are used to change the outcome of a function.

```javascriptfunction setup() {

}

function draw() {
}
```

### Example

For example, the code below, this code means “draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels”.

```javascriptfunction setup() {

}

function draw() {
  ellipse(50, 50, 80, 80);
}
```

### Coding 26.1

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4278626/7c7854f20048a14f966bd7b1cdb8dc86" width="100%"></iframe>Setting Up The P5 Canvas
------------------------

In p5, we use code to draw graphics on a “canvas”. The canvas displays the output of your code.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/visualoutcome.png)</figure></div>### Using the createCanvas() function

**`createCanvas()` function**

- This function creates a p5.js canvas.
- The canvas is an element on the web page on which we will draw our graphics.
- Syntax: `createCanvas(width, height)`

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.2/functionname.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.2/createcanvas.png)</figure></div>### Using the background() function

**`background()` function**

- This function gives our canvas a background grayscale color between 0 (black) and 255 (white)
- Syntax: `background(value)`

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.2/backgroundblack.png)</figure></div>### Drawing Coordinates

In a computer screen every pixel is a coordinate. It has an “x” value (horizontal) and a “y” value (vertical) that determines where the pixel is going to be located. But computers use a different coordinate system than the one you’re used to: the origin is located in the top left and the x value increases to the right while the y-value increases down vertically.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/coordinategrid.png)<figcaption> *Source: https://processing.org/tutorials/drawing/* </figcaption></figure></div><div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/robot.png)<figcaption>*Example*</figcaption></figure></div>For example, this program creates a canvas that is 640 pixels wide and 480 pixels high, and then starts drawing white circles at the position of the mouse. When a mouse button is pressed, the circle color changes to black. We’ll explain more about the elements of this program in detail later. For now, run the code, move the mouse, and click to experience it.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
```

### Coding 26.2

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4278626/7c7854f20048a14f966bd7b1cdb8dc86" width="100%"></iframe>Drawing A 3×3 Waffle On A Plate
-------------------------------

Draw a waffle on a plate using rectangles and ellipses.

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/heightwidthsquare.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/heightwidth.png)</figure></div>### Coding 26.3

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4278649/d03419d4aede12efbfd86292395f4247" width="100%"></iframe>Going Beyond
------------

Once you complete your waffle, open a new HTML, Javascript, CSS file on repl and practice your drawing skills. Create a symbol or icon that’s meaningful to you. Think about the things that are meaningful to you, your community, or your family. If you had to make a super simple symbol for those things, what basic shapes would you use? Draft it out on a whiteboard and then try coding it in a new Repl.

</body></html>