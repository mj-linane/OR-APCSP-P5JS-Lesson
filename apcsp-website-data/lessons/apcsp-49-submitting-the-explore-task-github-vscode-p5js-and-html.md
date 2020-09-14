---
title: 'APCSP 49: Submitting the Explore Task, Github, VSCode, P5js and HTML'
date: '2020-02-04T13:01:43-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-49-submitting-the-explore-task-github-vscode-p5js-and-html
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27305
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 10:11 am'
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

In this unit you will learn how HTML and JavaScript can work together in their p5 sketches. They create HTML elements by adding them to an HTML file, then using Javascript, and then manipulate then dynamically, to animate them and add interactivity.

You will learn:

- How the front end of web pages works
- How HTML and JavaScript interact to render content on web pages.
- The structure of HTML
- Be able to add elements to an HTML file both static and dynamically
- Be able to manipulate the DOM through the DOM tree structure

Vocab
-----

- **Callback function** – a function specified as part of an event listener; it is written by the programmer but called by the system as the result of an event trigger.
- **HTML Canvas** – The **Canvas API** provides a means for drawing graphics via [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.

Resources
---------

1. GitHub.com
2. VSCode.com
3. [P5js Interactivity](https://p5js.org/learn/interactivity.html) – Web page

Getting Started With GitHub
---------------------------

What is GitHub? It is a cloud storage, sharing, and source control website that we can use to track your progress in creating web apps.

1. Go to GitHub.com and create an account.
2. Start a new repository(repo) called APCSP

Getting Started With VS Code
----------------------------

What is VS Code? It is a free code editor that Microsoft has released. You can write code for any language and have it save to GitHub.

1. Go to VS Code and download the editor https://code.visualstudio.com/download
2. When check boxes appear, check all of them.
3. Open it up and lets get our git repository from GitHub
4. Go to the Command Pallet &gt; Git Clone &gt; enter the URL that GitHub provided.

VS Code Settings Changes
------------------------

1. To customize your experience, go to File &gt; Preferences &gt; Settings
2. User &gt; Text Editor &gt; Formatting
3. Recommended Changes
  1. *Git : Post Commit Command &gt; push*
  2. *Git: Enable Smart Commit &gt; checked*
  3. **(Optional)** *JavaScript &gt; Format: Semicolons &gt; insert (This one is optional, semicolons are part of JavaScript but they are added by the browser when interpreting JavaScript.)*

### VS Code Suggested Extensions

1. Bracket Pair Colorizer 2
2. Live Server
3. GitLens
4. HTML CSS Support
5. p5js Snippets
6. Path Intellisense
7. Visual Studio IntelliCode
8. Color Highlight
9. Code Spell Checker
10. Settings Sync

Your Code’s Basic File Structure
--------------------------------

APCSP Main Folder  
–&gt;Lesson Folder Name  
—-&gt;App.js  
—-&gt;Index.html

Make sure to add p5js and the app.js files to the index.html page by adding the following:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="html" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><script src="app.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
```

Where Does P5js Fit Into HTML
-----------------------------

Web pages are written in the HTML language (apart from JavaScript). In this lesson, we will look at how HTML is rendered and how we can add HTML with JavaScript. We will add a title, a paragraph and an image ––a simple result, but one that sets the foundation students need to do creative projects later on, animating HTML elements and making them interactive.

When working working on p5js we have been following these steps:

1. Open a repl
2. Add P5js to the index.html
3. Write our JavaScript code in a script.js or app.js file
4. Running the code for a preview on the web page right.

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/la/7_1/editor.png)</figure></div> So far, everything we have done has happened within the limits a “canvas”. The Canvas was added in the HTML5 update and allows us to drawing graphics via [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_1/canvas.png)</figure></div> We can add many different kinds of elements to our web page: headers, paragraphs, images, and more ––anything you have seen on a web page, really.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_1/more_elements.jpg)</figure></div>### Structure of the Document-Object-Model (DOM)

 In order to do add elements to the page that contains our canvas, we need to look into the file that defines this page: index.html. This file is written in HTML, the language of all web pages. Whenever we go to a website, what we see is an HTML file rendered by the browser. To give you an idea, an HTML file looks something like this:

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_1/html_.jpg)</figure></div>### Code: Add a header and a paragraph to index.html

### Code: Add an image to index.html from a URL

How Do HTML and JavaScript Work Together?
-----------------------------------------

The browser starts with a blank page and a file with instructions for it: index.html.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/1.jpg)</figure></div>Before drawing anything on the page, the browser reads the whole index.html file to understand its structure, and builds a tree-like representation of it.

The browser goes through the HTML tags looking for begin tags that have a matching end tag. It sees the html begin (&lt;html&gt;) and close (&lt;/html&gt;) tags, and creates an element for it. Then it goes over the elements inside of html, and creates an element for each of them (&lt;head&gt; and &lt;body&gt;).

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/2.jpg)</figure></div>Then the browser adds the elements inside of the head element (these are scripts: it will check them for instructions later), the elements inside body (our &lt;p&gt;’s, &lt;h1&gt;’s, and &lt;img&gt;’s), and then the elements inside of those, if there are any. It continues until all HTML elements are included in a tree-like structure.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/3.jpg)</figure></div>This tree structure of the page is called the DOM. This stands for Document Object Model. The browser will keep it in its memory for as long as the page is open.

From the DOM tree it has in its memory, the browser draws the page. It knows to draw header text in a larger, bold font, to draw paragraph text in a smaller, thin font, and to go fetch the image file at its source address before drawing it.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/render_DOM_html.jpg)</figure></div>Once it’s done with drawing the DOM, the browser looks at the JavaScript files that index.html references for any further instructions

<div class="wp-block-image"><figure class="aligncenter">![](https://nycdoe-cs4all.github.io/images/la/7_2/4.jpg)</figure></div>The p5 library takes the lead, telling the browser to run the `setup()` and `draw()` functions in app.js

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/5.jpg)</figure></div>So the browser runs the `setup()` function we wrote in app.js, and finds the `createCanvas` line, which tells it to insert a canvas element into its DOM tree:

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/6.jpg)</figure></div>The browser always keeps the drawing of the page consistent with its DOM tree: now that the DOM has a new canvas element, it draws it on the page.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://nycdoe-cs4all.github.io/images/la/7_2/7.jpg)</figure></div>And this is how we end up with a page that has HTML elements defined in index.html, and a canvas element added from app.js.

The important thing to notice here is that we can add elements to a page directly on its HTML file, but we can also add elements to it by writing JavaScript code. In fact, we can even change, and remove elements by writing JavaScript code. This will be useful for us to change our headers, paragraphs, images, and more on the fly ––meaning *after* index.html has been loaded. Accessing the DOM tree from JavaScript will allow us to change the content of a page in response to user actions, to animate elements, and more.

To add or change elements after the page has been loaded is referred to as accessing / changing things *dynamically*. When content doesn’t change once it is defined, we say it is *static*. When it changes after that, in response from events from users or other systems (like the temperature changed), we say content is *dynamic*.

Add HTML elements to our page dynamically, from JavaScript.
-----------------------------------------------------------

In the previous activity, we created a page that had a header element (&lt;h1&gt;), a paragraph element (&lt;p&gt;), an image element (&lt;img src=”…”&gt;), and a canvas (&lt;canvas&gt;) element. &lt;h1&gt;, &lt;p&gt;, and &lt;img&gt; were added directly on our index.html file. &lt;canvas&gt; was added in JavaScript, by `createCanvas(200, 200)`.

### Code: Add CreateP() To Create HTML Text With JavaScript 

Each of these functions needs some argument inside the parentheses ––what you need to create a paragraph is different from what you need to create an image. You can look arguments up in the p5 reference page. But for now, let’s start with a simple one: `createP`. Add this line right after your `createCanvas` line: `createP("My lucky number is 10");`

When you run your code, you will see a new paragraph added to the bottom of the page. So now we have two paragraphs. One we wrote directly into index.html (“This is a paragraph”), the other we created with JavaScript (“My lucky number is 10”):

<figure class="wp-block-image">![](https://nycdoe-cs4all.github.io/images/la/7_2/createP.jpg)</figure>Now let’s add an h1 element in JavaScript. You might notice that p5 doesn’t have createH1 function. There are so many HTML tags that including a function for each of them would clutter the p5 reference. So p5 only includes specific functions for the most common DOM elements that you might want to create with code:

- [createDiv()](https://p5js.org/reference/#/p5/createDiv)
- [createP()](https://p5js.org/reference/#/p5/createP)
- [createSpan()](https://p5js.org/reference/#/p5/createSpan)
- [createImg()](https://p5js.org/reference/#/p5/createImg)
- [createA()](https://p5js.org/reference/#/p5/createA)
- [createSlider()](https://p5js.org/reference/#/p5/createSlider)
- [createButton()](https://p5js.org/reference/#/p5/createButton)
- [createCheckbox()](https://p5js.org/reference/#/p5/createCheckbox)
- [createSelect()](https://p5js.org/reference/#/p5/createSelect)
- [createRadio()](https://p5js.org/reference/#/p5/createRadio)
- [createInput()](https://p5js.org/reference/#/p5/createInput)
- [createFileInput()](https://p5js.org/reference/#/p5/createFileInput)
- [createVideo()](https://p5js.org/reference/#/p5/createVideo)
- [createAudio()](https://p5js.org/reference/#/p5/createAudio)
- [createCapture()](https://p5js.org/reference/#/p5/createCapture)

### Code: **Use createElement() to create h1 and p**

For any HTML element that is not on the list above, like h1 (there are many more: take a look at the full list of elements [here](https://www.w3schools.com/TAgs/)), there is the generic `<a href="https://p5js.org/reference/#/p5/createElement">createElement()</a>` function. This function takes two arguments: the first is the tag to be created, and the second the content that goes inside the tag.

For example, to add a title to all those random numbers, we can add this line `createElement('h1', 'my lucky numbers below')`. Now we have an h1 element we created by writing it directly into index.html (“This is a header”), and another we created by calling `createElement` in our JavaScript code (“my lucky numbers below).

Create an additional p element that says ‘my lucky number is 7’.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">function setup() { 
  createCanvas(400, 400);
  background(220)
  createElement('h1', 'my lucky numbers below');
  createElement('p', 'my lucky number is 7');
} 

function draw() { 
  background(220);
}
```

Upload Changes to GitHub
------------------------

1. Go to your VS Code Source Control Tab
2. Give a name to today’s changes. If it is the first time being uploaded, you can simply title it ‘*Initial’*, if not, then simply give a short description to what is being changed. *‘Update colors’*