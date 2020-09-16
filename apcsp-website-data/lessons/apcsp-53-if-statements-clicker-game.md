---
title: 'APCSP 53: If Statements &#038; Clicker Game'
date: '2020-02-14T08:10:51-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-53-if-statements-clicker-game
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27632
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 27, 2020 @ 9:28 am'
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

In this lesson, we will first learn about where you should create your variables. And then you will learn about the equality operators. Finally, you will expand on your Clicker Game into its version 2.0 with additional score and lives reporting to the player.

Vocab
-----

- **===** – The equality operator (sometimes read: “equal equal”) is used to compare two values, and returns a Boolean (true/false). Avoid confusion with the assignment operator “=”,
- **Global Variable** – A variable whose scope is “global” to the program, it can be used and updated by any part of the code. Its global scope is typically derived from the variable being declared (created) outside of any function, object, or method.
- **If-Statement** – The common programming structure that implements “conditional statements”.
- **Local Variable** – A variable with local scope is one that can only be seen, used and updated by code within the same scope. Typically this means the variable was declared (created) inside a function — includes function parameter variables.
- **Variable Scope** – dictates what portions of the code can “see” or use a variable, typically derived from where the variable was first created. (See Global v. Local)

How To Create Variables in the Right Place: Global vs Local Scoped Variables
----------------------------------------------------------------------------

### Example Problem

The code below has something wrong with it.

```javascript
button.mousePressed(increase){
}

function increase(){
  let score = score + 1
}
```

### Problem: What Went Wrong

**Problem: writing `let score `again**.

The problem you encountered was caused by the line **`let score = score + 1`** is telling the computer to create a *new variable* called **score** inside the event handling function.

 So it creates a new variable, but then when trying to assign it a value it cannot compute `score + 1` because `score `doesn’t have a value anymore. We don’t want a new variable; we want to reassign the value of the variable we already created in Line 1.

### Solution:

**Solution: remove** `let score`

Instead of trying to create a new variable inside the event handler, this code will now reference the one created in Line 1. Because we only created the variable once, all references to `score`refer to the same variable.

### Where You Decide to *Create* Variables in Your Code **Matters**

In JavaScript you have two choices of where to create a variable:

1. Create a variable **inside** of any function.
2. Create a variable **outside** of a function.

The term for this concept is **“variable scope.”** The **scope** of a variable defines which parts of your code can access and modify the variable.

1. `var `// globally scoped, use only when absolutely necessary
2. `let `// locally scoped
3. `const `// locally scoped

### Understanding Variable Scope

JavaScript has two scopes: **global** and **local**. Here’s the difference…

#### **Local Variables**

Variables created *within a function* become **local** to the function. Local variables have **local scope**: they can *only* be accessed within the function.

In the example below, we say that **age** is “local to” **someFunction** which means that only code within **someFunction** can access and modify the value **age**. Code that’s outside this function **cannot** see or use the variable. In fact, local variables are *created* when a function starts, and *destroyed* when the function is completed. Local variables only exist for the life of one function call.

```javascript
// code here CANNOT see or use age variable

function someFunction(){
  let age = 17
}

// Code here CANNOT see or use age variable
```

#### **Global Variables**

 A variable declared outside a function, becomes **global**. A global variable has **global scope** which means the variable is accessible and modifiable throughout your program by *any* code, and also in *any* function.

In the example to the right we say that **lives** is a **global variable**.

```javascript
let lives = 3
// code here CAN see and modify the lives variable

function someFunction(){
  // code here CAN see and modify the lives variable
}
```

### **Why Use Local Variables?**

Local variables are useful temporary placeholders for data that you need to perform a computation of some kind.

Often a program might have several functions that perform different but related tasks, and you’d like to reuse variable names. Since local variables are only recognized inside their functions, variables with the same name can be reused in different functions.

The best example of this is **function parameters**. Function parameters are a form of local variable – they get created and initialized when a function is called, they get used while the function runs, and then they get destroyed when the function completes.

Imagine if all we had were global variables. Then you **could not** write this code:

```javascript
function drawSquare(size){
  // some code
}

function drawTriangle(size){
  // some code
}
```

If all variables had to be global we’d have to invent different variable names for every function parameter in the entire program. But because the **size** variable is **local** to the function, we can re-use this handy parameter name.

#### **Common Pitfalls with Local Variables**

- The most common mistake is something you just experienced: **accidentally re-creating a variable inside a function when you intended to reference a global variable**.
- When you create a variable inside a function, and it happens to have the same name as a global variable, the **local variable takes precedence** and the function will try to use the local variable first.

### **Why Use Global Variables?**

Global variables are useful for keeping track of data over the lifetime of the program that’s running.

If you want to keep track of some data between events, or between function calls, you want a global variable.

#### **Where to Create Global Variables**

By convention global variables are created and initialized in the **very first lines of code** in a program.

#### **Common Pitfalls with Global Variables**

- Because you can create a global variable *anywhere* in your code that is outside of a function definition, you can get yourself into trouble if you have variable declarations scattered throughout a large program. You might accidentally re-create or create a new variable for a purpose you’ve already made a variable for.
- **ADVICE:** Stick to the convention: if you need a global variable in your program, create it and give it an initial value at the very top of your program. Keep all global variables in a group at the top where you can look them up.

For our programs coming up we’re particularly interested in global variables since that gives us the ability to remember data like the score of a game over the life of a program.

Let’s Code: A Clicker Counter
-----------------------------

1. Create new folder called “53 Clicker Counter”
2. Add an app.js, index.html, and the two pictures to the folder. These can be found in the starter folder below.

### Starter Files

[Clicker Counter Starter Files](https://github.com/mj-linane/apcsp-student-templates/tree/master/53-clicker-counter) – GitHub Link

### 4 Problems

- Score hasn’t been declared
- Missing code for the increase() function
- Missing code for the decrease() function
- Score is not being properly displayed. We need to update the display with .html()

### 3 More Problems

1. App doesn’t show correct warning when counting at top limit
2. App doesn’t show correct warning when counting at bottom limit
3. checkScore() is never called

#### checkScore() Hint

Notice, we have some if statements inside of checkScore. *Where* do we put the check score? We want make sure those if statements are called we update its value.

Simple if Statements
--------------------

Now that you have variables keeping track of useful information in an app, the next thing you probably want to do is make decisions based on their values.

For example: in the Clicker Counter what told the program was: **“if the score reaches X then warn the user”**

You use an `if` statement to specify a block of JavaScript code to be executed if a condition is true.

### Syntax

```javascriptif (condition) {
  // block of code to be executed if the condition is true
 }
```

Note that `if` is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

**Notice: use `===` to compare values.** As you know the simple `=` means assign a value to a variable. So we need a different operator to check if one value is equal to another. That operator is the “equal equal” operator: `===`.

### Operators

<figure class="wp-block-table is-style-stripes"><table class=""><thead><tr><th>Operators </th><th>Description </th></tr></thead><tbody><tr><td>== </td><td>Compares the equality of two operands without considering type. </td></tr><tr><td>=== </td><td>Compares equality of two operands with type. </td></tr><tr><td>!= </td><td>Compares inequality of two operands. </td></tr><tr><td>&gt; </td><td>Checks whether left side value is greater than right side value. If yes then returns true otherwise false. </td></tr><tr><td>&lt; </td><td>Checks whether left operand is less than right operand. If yes then returns true otherwise false. </td></tr><tr><td>&gt;= </td><td>Checks whether left operand is greater than or equal to right operand. If yes then returns true otherwise false. </td></tr><tr><td>&lt;= </td><td>Checks whether left operand is less than or equal to right operand. If yes then returns true otherwise false. </td></tr></tbody></table>

</figure>### The Operators === vs. =

`=` read as: “gets”

`===` read as: “equal-equal”

The reason why we recommended that you read `=` as “gets” is really to avoid confusion with the `===` operator, which to avoid confusion even further, many programmers read as “equal-equal”.

To state what should be obvious by this point: `=` is for assigning a value to a variable and `===` is for checking or testing to see what a value is. You can probably imagine the number of mistakes that beginners might make here.

**TIP:** if you continue to read code “aloud” in your head using “gets” and “equal-equal” it might help you discover bugs in your code or avoid them in the first place.

### Misconception Alert – Where to Put *if* Statements

An `if` statement does not constantly monitor your program checking the condition to see if it’s true or false. An `if` statement is an instruction just like any other that gets executed line by line in order from top to bottom.

This means that you need to insert an `if` statement into your code **at the exact place where you need the condition checked**. Once the condition is checked program execution picks up at the end of the `if` statement and proceeds from there.

This is why we need to check the value of score EVERY time the up arrow is clicked. So that means the if statement must be written into the event handler for the up arrow, and checked *after* we update the value of `score`.