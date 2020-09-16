---
title: 'APCSP 27: Writing Functions and Drawing Lines'
date: '2019-11-12T07:59:22-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-27-writing-functions-and-drawing-lines
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26532
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
Overview
--------

You will learn to define and call your own procedures (or “functions”) in order to create and give a name to a group of commands for easy and repeated use in their code. Named procedures are a form of abstraction that enable the programmer to reduce complexity by removing details and generalizing functionality.

Vocab
-----

- **Abstraction** – a simplified representation of something more complex. Abstractions allow you to hide details to help you manage complexity, focus on relevant concepts, and reason about problems at a higher level.
- **Function** – A named group of programming instructions. Functions are reusable abstractions that reduce the complexity of writing and maintaining programs.
- **Parameters or Arguments** – Are the values inside of a parenthesis following the name of the function. These are variables used to change the outcome of a function.

Resources
---------

- <https://p5js.org/reference/>

Drawing Lines in P5JS
---------------------

To draw on the canvas, call p5.js *functions* like `point()` and `line()`.

- A point is defined by an (x, y) coordinate.
- A line is defined by its start and end points.

In the graphs we are used to, the y-coordinate grows upward; in p5’s canvas, it grows as we move down the screen.

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.2/graphsingeneral.png)</figure></div><div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.2/diagonalline.png)</figure></div>- `point(x,y)`– The function name to draw a point is “point”. The parameters are (x,y) which are the x and y coordinates.
- `line(x1,y1,x2,y2)`– The function name to draw a line is “line.” The first x and y are the starting point and and the second are the end point.

<div class="wp-block-image">![](../../../../../uploads/2019/11/Line-Image-Example.png)</div>Coding 2.1
----------

In the following P5JS template, complete the following drawings.

1. Draw a point near the top-right corner of the canvas.
2. Draw a point in the middle of the canvas.
3. Draw a point near the bottom-left.
4. Draw a horizontal line, a vertical line, a diagonal line.
5. Draw a line from the top-left corner to the bottom-right corner.

***Note: Remember, you will need to setup your two main functions and canvas size. Go back to the previous lesson to remember how.***

<figure><iframe height="1000px" src="https://repl.it/student_embed/assignment/4292731/e7312161a492a161c6342b40d4d8dee2" width="100%"></iframe></figure>Defining And Calling Functions
------------------------------

### Function Syntax

A JavaScript function is defined with the `function` keyword, followed by a **name**, followed by parentheses **( )**.

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

**camelCase:** Function names are written in the camelCase. “Camel Case” refers to a stylized way of writing compound words or phrases. This means that multi-word function names are made a single word which begins in lowercase and uses uppercase letters to indicate the start of a new word. For example: camelCaseFunction()

**Functions Names Can’t Start with Numbers:** In most programming languages, including JavaScript, function names are not allowed to begin with numbers or most symbols. Underscore, however, is allowed.

The parentheses may include parameter names separated by commas:  
**(*parameter1, parameter2, …*)**

The code to be executed, by the function, is placed inside curly brackets: **{ }**

```javascriptfunction name (parameter1, parameter2, parameter3) {
  // <em>code to be executed
}
```

Function **parameters** are listed inside the parentheses () in the function definition.

Function **arguments** are the **values** received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

Code 2.2
--------

### Part 1

Draw a cross and place it inside of a function called drawCross()

### Part 2

Write a function called draw allCrosses() that calls the drawCross() function, followed by a translate() function to move the cross. Make an alternating pattern of black and red crosses.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4304797/350cc4c196ce9a85118356faa46f4018" width="100%"></iframe>Code 2.3
--------

Write a series of functions that creates a scene of holiday trees with ornaments.

1. drawTree() // Draws a tree using at least 2 stacked **`triangles()`**, makes a call to `drawOrnaments()`
2. drawOrnaments() // Draw 4 circles on a tree
3. drawAllTrees() // Makes calls to `drawTree()` to draw at least 4 trees next to each other (Hint, use `translate()` to move them around)

More comfortable? Try add the following:

1. Coloring your tree
2. Coloring your ornaments
3. Adding presents

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4306378/7b75d260f0cc9eef238584b2d49bf2b4" width="100%"></iframe>