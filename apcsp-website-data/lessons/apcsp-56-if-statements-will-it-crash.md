---
title: 'APCSP 56: If Statements (Will It Crash?)'
date: '2020-03-02T08:26:30-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-56-if-statements-will-it-crash
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27974
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'March 4, 2020 @ 10:47 am'
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
Vocabulary
----------

- **Boolean** – A single value of either TRUE or FALSE
- **Boolean Expression** – in programming, an expression that evaluates to True or False.
- **Conditionals** – Statements that only run under certain conditions.
- **If-Statement** – The common programming structure that implements “conditional statements”.
- **Selection** – A generic term for a type of programming statement (usually an if-statement) that uses a Boolean condition to determine, or select, whether or not to run a certain block of statements

When vs If
----------

> **When** the button is clicked add one to the score.  
> **If** the button is clicked add one to the score.

If-statements, Conditionals, Selection
--------------------------------------

- **If-statements** exist so that your program can adapt, respond, or make choices about whether or not to execute certain portions of code based on some condition that you check while the program is executing.
- Because it involves checking conditions, these statements are sometimes called **conditional statements**, or sometimes just **conditionals**.
- A conditional statement (if-statement) requires a **conditional expression**, something that is either **true** or **false** and it’s what an if-statement uses to decide whether or not to execute a certain portion of code.
- A generic term used by the AP CSP Framework for this is **Selection**. As in: your program can *select* whether or not to run certain blocks of code.

### **Key Idea: If-statements are how programs adapt and respond to conditions on the ground.**

The whole point is to be able to handle cases where you can’t know ahead of time whether or when certain conditions will exist in your program. So you have to write code to say something like: “Okay, at this point in the program, if *such and such* is true, then do *this*, otherwise do *that*.”

### Practice with the AP Pseudocode

For the activities that follow, we’re going to get our feet wet with if-statements using the **AP CS Principles pseudocode** language. To start we’re going to use the IF/ELSE structures, but to keep things simple we’ll only use the Robot conditional expression `CAN_MOVE (direction)` – which evaluates to **true** or **false**.

Below is the official documentation for Selection and Robot statements along with some extra commentary.

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/7bf70fa24c45876b861c948e13f173be-image-1571280498727.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/d8b42f76868c6477e5edd630d625db21-image-1571280504891.png)</figure></div>A Worked Example
================

The following shows a step-by-step, line-by-line execution of a 10-line program with if-statements that uses the AP pseudocode for if-statements and the robot.

The purpose of the example is to show:

- Code executes one line at a time from top to bottom.
- Each if-statement condition is checked in the order of execution
- The conditions of later if-statements may be affected by what did, or didn’t happen, in earlier lines of code.

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/2ebce9f7eab42bdd2e6215c86edd3f93-image-1571330102314.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/e04ee663081cc7a5e1482541b2df4ecd-image-1571330112758.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/8c4a47a1b97e59f24b3f385e8c7883d6-image-1571330120128.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/d859615bb8cc155d6a9325032dd35b15-image-1571330125541.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/8b0897854a17f001aaba108073d66298-image-1571330130750.png)</figure></div>Will It Crash?
--------------

### Activity Resources

1. [Will it Crash?](https://docs.google.com/document/d/1wuC7wypejOSs9A8VfyECNNWuAJbSbzN4EHSrHi-sxxc) – Activity Guide

Algorithms – Solving Problems
-----------------------------

### What is an algorithm?

**Definition**

An algorithm is a precise sequence of instructions for a process that completes a task. Algorithms can be executed by a computer and are implemented using programming languages.

### Automating Physical Tasks

<div class="wp-block-media-text alignwide has-media-on-the-right"><figure class="wp-block-media-text__media">![](https://images.code.org/3f6dc46078eb19ba8885fb6d02fe0203-image-1515092634132.jpg)</figure><div class="wp-block-media-text__content">**Physical Tasks in Daily Life**

Daily life is filled with tasks. Most mornings, for example, you’ll need to get dressed, pack your things, and then travel from one place to another. Your day at work or school will be filled with tasks to complete. Even keeping up with friends, relaxing, or going to bed includes some tasks if you look closely.

</div></div><div class="wp-block-media-text alignwide has-media-on-the-right"><figure class="wp-block-media-text__media">![](https://images.code.org/a2835a98c80954695d1db19f0d66cf6b-image-1515092970066.jpg)</figure><div class="wp-block-media-text__content">**Automating Tasks**

We want to complete most tasks quickly, easily, and reliably. One important way we do this is by identifying step-by-step processes that we know work well. The steps to tie your shoes or the steps of a recipe are examples of processes we use to help us effectively take care of everyday tasks.

</div></div><div class="wp-block-media-text alignwide has-media-on-the-right"><figure class="wp-block-media-text__media">![](https://images.code.org/28011d19f50522a3b3b5c563e9a79c37-image-1515091698632.JPG)</figure><div class="wp-block-media-text__content">**Automation Requires Algorithms**

At the heart of automation is a well-defined step-by-step process that the machine is completing. A machine to weave cloth, for example, is built to make stitches in a precise way in a precise number of rows using a precise number of threads. In other words, automating a tasks means first identifying the process or **algorithm** your machine will complete. Often a human could use that same algorithm to complete a task, but the machine will typically do so more quickly, easily, and reliably.  
  
 Processes to complete tasks are powerful because not only can humans use them, so can machines. Automation is the use of machines to complete some task with little to no human intervention, and from agriculture to manufacturing to transportation, it has transformed our society, economy, and daily lives.

</div></div>### Algorithms and Information Tasks

**Information Tasks and Tools**

Many tasks don’t require physical work, but they do require thinking. For example, you might need to keep track of money, remember birthdays, or schedule activities. At their core these problems have to do with how we organize and make sense of information. Tools like calendars, clocks, and financial records help us complete these information tasks.

**Automating Information Tasks**

Just like physical tasks, many information tasks can be completed using algorithms. For example when you learn the steps to add or multiply two numbers, you’re really just using an algorithm for addition or multiplication. The recognition that information tasks could be described algorithmically led to the desire to automate these tasks as well, and eventually, to the creation of the computer.

### Algorithms, Programming, and Computer Science

**The Everything Machine**

Through history machines to automate information tasks usually did only one thing. A machine could track stars in the sky, or add numbers, but couldn’t do both. By comparison, a single modern computer can add numbers, show video, communicate over the Internet, and play music. This is clearly a very different type of machine!

**Everything is Numbers**

Many important ideas led to the design of the modern computer. First was the realization that most information can be represented as numbers. In fact, you learned in Units 1 and 2 that text, images, sound and many other pieces of information you can dream up can be represented in some way as binary numbers. This means information problems can be represented in a standardized way.

**Simple Commands**

The next important realization is that information processes can be broken down into a common set of very simple commands. For example those steps might be adding or subtracting two numbers, moving information from one place to the next, or comparing two numbers. Even complex information processes like sorting a list of 1,000,000 names or determining if a picture has a cat in it can be represented on some level as a sequence of these simple commands.

**People Write Algorithms for Computers**

Together these two ideas allow information tasks to be standardized to a degree that a single machine (a computer) could be designed to complete many of them. In order for this to work a computer is first designed to do this small set of low level commands. Next, and most importantly, the computer is designed to let a human being write out their own sequence of commands to control the machine to complete the task at hand. Said another way, a computer is a machine that’s designed for a human to write algorithms for it to run!

### Algorithms and Creativity

**Sequence, Selection, Iteration**

Any programming language only provides so many commands. Algorithms are created by combining these instructions in three ways. In fact, using these three you can describe ANY algorithm completed by a computer. Those three ways are:

- **Sequence:** This is placing commands in an order. When you write a program that runs line by line you are defining the order in which a computer should run the fundamental commands that it understands.
- **Selection:** This is when a computer chooses to run one of two or more sections of code. When you use an if-statement you are making use of selection.
- **Iteration:** This is when a computer repeats a section of code. For example you can do this by using a loop.

**Algorithms, Programming, and Creativity**

Even with the limited commands a computer understands and the limited ways you can combine them, there are actually many, conceivably infinite, ways to write a program to complete a task. Some may be more efficient or easier to understand than others, but there is typically no single “right” algorithm to complete a task. There also isn’t an “algorithm for writing algorithms”. You need to investigate and understand the problem you are trying to solve, and then get creative with how you’ll combine the tools the programming language provides you. Computer science is a creative discipline because computers literally require human creativity to do anything at all!

Algorithms, Unit 5, and the AP Exam
-----------------------------------

**Algorithms and AP Computer Science Principles**

(1) Algorithms is one of the seven big ideas of AP Computer Science Principles.

(2) For the AP Create Performance Task you need to…

> \[identify\] a code segment that contains an algorithm you developed…\[and\]…explain how the algorithm helps achieve