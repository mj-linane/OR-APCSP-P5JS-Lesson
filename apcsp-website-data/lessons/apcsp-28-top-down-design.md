---
title: 'APCSP 28: Top Down Design'
date: '2019-11-17T14:52:13-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-28-top-down-design
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26610
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

- **Abstraction** – a simplified representation of something more complex. Abstractions allow you to hide details to help you manage complexity, focus on relevant concepts, and reason about problems at a higher level.
- **Function** – A named group of programming instructions. Functions are reusable abstractions that reduce the complexity of writing and maintaining programs.
- **Top Down Design** – a problem solving approach (also known as stepwise design) in which you break down a system to gain insight into the sub-systems that make it up.

Tips For Writing Your Own Functions
-----------------------------------

- When we layer functions – with functions that call other functions – we are creating layers of abstraction.
- In programming, writing functions helps us create layers of abstraction that allow us to design and create increasingly complex systems.
- Identify useful patterns that can be reused and give them **their own functions**.
- Remember: The functions you design **can call one another**. This is how you create layers of abstraction.
- Functions should be given names that are **descriptive and meaningful**.
- Your program should be kicked off with a single call to a function that makes calls to subsequent functions.

**Top-Down Problem Solving**
----------------------------

One method for approaching programming problems is called “Top-Down Design” or “Stepwise Refinement”. This strategy is an informal way of repeatedly dividing a system into simpler subsystems. As these pieces of the original problem get smaller and smaller, eventually you will arrive at pieces that you can program solutions to in a straightforward manner. These pieces of code can then be recombined to solve your original, complex problem. As a result you can eventually solve a large problem, but along the way you only ever had to address smaller ones. Another benefit of this strategy is that it can help you choose names for the different functions you’ll design.

Once you’ve identified the layers of functions you want to design, you begin by writing and testing the bottom layer first and work your way up. Higher layers of functions depend on lower layers working perfectly, since they use them without needing to know the exact details of how they are programmed. The benefit of having these **layers of abstraction** is that it lets you approach increasingly complex problems in an organized way. This typically **makes reasoning about your code much easier**, and your code will read almost like *you are describing your solution to the problem in plain English.*

### Top Down Design Practice #1 — Driving A Robot

Robot built in functions:  
 moveForward() // defaults to 25px  
turnLeft() // defaults to 90 degrees

Using a whiteboard, list the functions you would write to program a robot to draw this shape. You don’t need to write the code, just the function names. The function names need to be descriptive to what the code does,

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/53679cc10ff90b6120184d93ad012797-image-1441770558200.png)<figcaption>*The arrow represents the robot and its starting position.*</figcaption></figure></div>### Top Down Design Practice #2

 Using a whiteboard, list the functions you would write to draw this shape. You don’t need to write the code, just the function names. The function names need to be descriptive to what the code does,

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/afed66de9dc3cdb10f627a176139c58f-image-1441822234028.09.33%20PM.png)<figcaption>*The arrow represents the robot and its starting position.*</figcaption></figure></div>Try Out Your Top Down Design
----------------------------

Go to Code.org by clicking on the link below. Test out your ability to

[https://studio.code.org/s/csp3-2019/stage/6/puzzle/2](https://studio.code.org/s/csp3-2019/stage/6/puzzle/2?section_id=2308727)

AP Practice – Performance Task Response
---------------------------------------

Top-down design is design process and strategy for breaking down complex things. The AP Create Peformance task asks you to write about your development process when writing code.

Let’s take a minute to understand this writing prompt and how it is scored. Here is the actual writing prompt **2b** from the AP Create Task guidelines:

> **2b.** Describe the incremental and iterative development process of your program, focusing on two distinct points in that process. Describe the difficulties and/or opportunities you encountered and how they were resolved or incorporated. In your description clearly indicate whether the development described was collaborative or independent. At least one of these points must refer to independent program development. *(Must not exceed 200 words)*
> 
> <cite> AP Create Task guidelines </cite>

Your response to this prompt can get up to 2 points, and is scored looking at two major things:

1. (1 point) Do you describe a real *iterative* process for writing the *whole* program – “Incremental and iterative” means that you continuously improved your program based on testing, reflection, or feedback from a partner.
2. (1 point) Do you actually describe *two* points in time while writing your code, what the specific issue was, and how you got past it by *reflecting* or *incorporating feedback* from a collaborative partner.

Here are the actual scoring guidelines:

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://images.code.org/1b6b0abda7a11382803193c3ffedc4b1-image-1540476298994.04.28%20AM.png)</figure></div>### Practice Drafting Response

Try to write a response to this AP Prompt thinking about either how you developed the idea for the drawAllTrees() drawing program, or how you resolved to make the 3×3 grid waffle program. You might have to use a little bit of imagination to assume that it’s part of a larger program you created yourself. The point is to *practice writing* about your development process.

Code 3.1: Top Down Design Practice
----------------------------------

Plan out an original image. Break down the image to at least 3 parts. Then write the code for it. The image should include three functions, one that calls on two others that you created. Each function should consist of at least 2 commands.

<iframe frameborder="0" height="1000" src="https://repl.it/student_embed/assignment/4324291/eb10ed74a2a72c97f15f2aa4a56c664f" width="100%"></iframe>