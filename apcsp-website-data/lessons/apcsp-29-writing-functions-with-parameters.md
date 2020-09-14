---
title: 'APCSP 29: Writing Functions With Parameters'
date: '2019-11-17T15:43:09-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-29-writing-functions-with-parameters
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26619
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
----------

- **API** – a collection of commands made available to a programmer. P5JS has a number of commands that can be found in the “Reference” section of the site.
- **Documentation** – a description of the behavior of a command, function, library, API, etc.
- **Library** – a collection of commands / functions, typically with a shared purpose. P5JS is a library for Javascript. It is a Dependency in our programs, in that our program depends on it to run.
- **Hexadecimal** – A base-16 number system that uses sixteen distinct symbols 0-9 and A-F to represent numbers from 0 to 15.
- **Parameter** – An extra piece of information passed to a function to customize it for a specific need

Coding Link
-----------

<https://repl.it/join/tchefovf-mjlinane>

Writing Functions With Parameters
---------------------------------

When writing a function like square(100,100,10) we say that it accepts a parameter. And 100,100,10 is the given or supplied parameter. Since this value chance change, you will often see the description for a command look like square(x,y, side length). This is to indicate that the value supplied to square’s parameter should be the x and y coordinates and the length of the sides.

Code 4.1
--------

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4338228/d25ba83ee6673fee9a98524d3a45d701" width="100%"></iframe>Creating Functions With Multiple Parameters
-------------------------------------------

Make a function that sets the fill color, y value, and size of the two squares.

Code 4.2
--------

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4339769/f8aeef7b788d612fb1e0b830dea2b9b3" width="100%"></iframe>Code 4.3 Javascript / P5JS Random Numbers
-----------------------------------------

There are 2 ways to generate random numbers. We can use the P5JS shorter method or we can use the universal Javascript way. Both would produce the same result, just different syntax.

#### **P5JS Random Numbers**

**Documentation**

 <https://p5js.org/reference/#/p5/random>

**Syntax**

```javascriptrandom()
```

#### **Vanilla Javascript**

**Documentation**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

**Syntax**

```javascript Math.random();  
```

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4339770/f7bb666dea67545dff1b5415f78beb77" width="100%"></iframe>Code 4.4 Design A Custom Image Using Parameters and Random
----------------------------------------------------------

Design a custom image using:

- Define and call at least 1 new, original function with at least 1 original parameter that you define yourself *(Example:* *`function drawSquares(100,100, <strong>size</strong>)`, was the one we created when we practiced writing together from scratch.)*
- Generate random numbers using p5js’s `Random()` or vanilla Javascript `Math.Random() `

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4340081/a8d6eda5f7b6c01abf72df15b02ab2a6" width="100%"></iframe>