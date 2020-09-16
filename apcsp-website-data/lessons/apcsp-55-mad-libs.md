---
title: 'APCSP 55: Mad Libs'
date: '2020-02-28T09:00:58-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-55-mad-libs
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27928
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'April 6, 2020 @ 1:48 pm'
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

Today will will approach two different problems. The first: how to use string methods and template literals to accept user input and output a Mad Libs game. Secondly, we will start taking a look at if statements and how they can be used to control the flow of the program.

The activities here get right to many commons misconceptions about how if-statments work and how programs execute. You may have a simple common-sense intuition about how if-statements work, but there are several ways you can get your wires crossed when considering how programs actually execute. There are two main issues: 1) how the flow of program execution works, and 2) How complex logical statements are composed and evaluated. In this lesson we just address program flow and tracing execution. We’ll look at more complex logical expressions later. Even though Boolean expressions show up in this lesson, we try to avoid using that term until the next lesson. For this lesson it’s a condition that is simply true or false.

Vocab
-----

- **Conditionals** – Statements that only run under certain conditions.
- **If-Statement** – The common programming structure that implements “conditional statements”.
- **Selection** – A generic term for a type of programming statement (usually an if-statement) that uses a Boolean condition to determine, or select, whether or not to run a certain block of statements.

You Code: Mad Libs
------------------

1. Create new folder called “55 Mad Libs”
2. Add the starter files to that folder.

### Starter Files

[Mad Libs](https://github.com/mj-linane/apcsp-student-templates/tree/master/55.mad-libs) – GitHub Repo

### Additional Relevant Code:

1. **changed()** – p5 event listener that listens for a change to a UI element.
2. **.div()** – p5 method for adding a div to the html page.
3. **.id()** – p5 method for adding an id to a UI element
4. **.parent()** – p5 method for attaching a UI element as a child to the parent element specified.
5. **.hide()** – p5 method for hiding UI elements
6. **.show()** – p5 method for showing UI elements

### Challenges

#### 1. inputDivUI Still Showing On Output

 You will have to add `.hide()` to the inputDivUI in order to hide it. This should happen once the displayBtn is pressed, meaning, inside of the`showOutputhandler()` function.

#### 2. Attach the outputDisplayBtn to the inputDivUI so that it disappears when the outputDisplayBtn is clicked

Add a .parent() to the outputDisplayBtn that attaches that item to the inputDivUI. To do this you would pass the inputDivUI as a parameter to the ouputDisplayBtn, so the result looks like: `outputDisplayBtn.parent(inputDivUI)`

#### 3. Convert All User Input To Lower Case By Default

Add a `.toLowerCase()` conversion on the `inputFieldUI.value()` in the `updateOutputHandler()`

```javascript   let userInput = inputFieldUI.value().toLowerCase()
```

#### 4. Make A User Yell — Convert One Text Input to Uppercase

Add a lower case conversion on at least one of the user inputted values. We can do this by adding an if statement inside of the function updateOutputHandler(){}

```javascript if(uppercase === true)
```

Pass a true variable to at lease one of the function calls addTopic(param, param, param, true, false).

#### 5. Take A Number Input and Perform Math On The Output

To convert a string to a number, we will need to use the JavaScript method `Number()`.

First, lets check to see if the userInput is a number:

Inside of the updateOutputHandler lets add:

```javascript if(num === true){
}
```

Now, lets change the userInput to be a number version of that input:

```javascript      userInput = Number(userInput)
```

Lastly, lets modify the input by performing some sort of math on it before it is outputted back to the user. An example might be:

```javascript      userInput = userInput+30
```

#### 6. Add Additional Text Fields

Add at least **5** text fields inputs and customize the string concatenation on the existing field. Use the template literal format for the user input.