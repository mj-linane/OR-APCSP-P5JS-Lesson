---
title: 'APCSP 31: Adding Random Colors and Scaling to the Under The Sea Drawing'
date: '2019-11-26T06:59:17-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-31-adding-random-colors-and-scaling-to-the-under-the-sea-drawing
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26752
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
site-sidebar-layout:
    - default
site-content-layout:
    - default
theme-transparent-header-meta:
    - default
stick-header-meta:
    - default
ld_course_25132:
    - '25132'
uagb_style_timestamp-css:
    - '1581521866'
---
Overview
--------

Today we are going to add more code to our Under The Sea drawing to add additional complexity.

Code 31.1 Add Random Colors to Previous Code
--------------------------------------------

1. **Add a parameter** to the function definition for `drawFish` that allows you to control its size. Make sure your parameter has a **descriptive and meaningful** name.
2. **Update your function calls** to use your new version
3. Draw **two starfish** (Triangles or Lines)
4. **Add a parameter** to the function definition for `drawStarfish`that allows you to control its size. Make sure your parameter has a **descriptive and meaningful** name. *(**Note:** this means that drawStarfish will now have 4 parameters total: size, red, green, and blue)*. Use the Scale() function inside of your program to control size.
5. **Update your function calls** to use your new version
6. **Add a parameter** to the function definition for `drawFish` that allows you to control its size. Remember to separate them with commas! *(**Note:** this means that drawStarfish will now have 4 parameters total: size, red, green, and blue)*. Use the Scale() function inside of your program to control size.
7. **Use random() to provide random input** to *both* of your drawing functions (*drawStarfish, drawFish*) . Just insert the call to `random()` where you would otherwise put numbers.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4349875/375638b2591fdec4b257f27c3df50e86" width="100%"></iframe><div class="wp-block-image"><figure class="aligncenter size-large">![](../../../../../uploads/2019/11/d2031f555ed23bcfa4a6a6165074b559-image-1442852053630.png)<figcaption>/</figcaption></figure></div>New Code
--------

- scale()

Scale()
-------

### Documentation

<https://p5js.org/reference/#/p5/scale>

### Syntax

```
<pre class="wp-block-preformatted">scale(s, [y], [z])
```

#### Parameters

- s Number|[p5.Vector](https://p5js.org/reference/#/p5.Vector)|Number\[\]: percent to scale the object, or percentage to scale the object in the x-axis if multiple arguments are given
- y Number: percent to scale the object in the y-axis (Optional)
- z Number: percent to scale the object in the z-axis (webgl only) (Optional)
- scales [p5.Vector](https://p5js.org/reference/#/p5.Vector)|Number\[\]: per-axis percents to scale the object

### How it works

The equation for scale() is:

***current size x scale parameter***

**To increase scale:**

For instance, if the current scale is 1, and the function `scale()` is called with a parameter` scale(2)`, the new scale would be all the values of the shape multiplied by 2.

**To decrease scale:**

For instance, if the current scale is 1, and the function `scale()` is called with a parameter` scale(.5)`, the new scale would be all the values of the shape multiplied by .5 or 1/2. Therefore, the shape would be 1/2 the original size.

### Reversing Scale

To reverse scale, we would divide by our original scale. For instance, if `scale()` is called with parameter `s`: `scale(s)`. To reverse the scale, we would call scale(1/s).

### Scale Example (drawSeaStar)

```javascriptfunction drawSeaStar(r, g, b, size) {
  scale(size);
  noStroke();
  fill(r, g, b);
  for (let i = 0; i < 5; i++) {
    triangle(0, -30, -10, 0, 10, 0);
    rotate(360 / 5);
  }
  scale(1 / size);
}
```

Code 31.2 Update Under The Sea // Top-Down Design
-------------------------------------------------

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/b4379f51db96b8b1c921de2579e16357-image-1443011791766.21.53%20AM.png)</figure></div>Look at this complex version of the “Under the Sea” scene you drew in the previous lesson. **You now have all the skills you need to recreate this digital scene.**

We will use **Top-Down Design** to help manage the complexity of drawing this image. The starter code you will be provided already has broken the problem into multiple levels.

Overview of Program Structure
=============================

You are about to see that we’ve provided you with a good amount of starting code. Here’s a brief tour:

**High-Level Function Calls:** These read almost like a story of how you will draw the image. There’s one function for every major component of the scene.

**High-Level Function Definitions:** These currently draw **a single copy of each component**. You will add code to these functions to draw many copies of each component in a variety of sizes and colors.

**Low-Level Functions:** These draw single elements of the scene. Most have been written for you already, but we’ve left a few for you to complete as well.

Do This:
========

- Review the structure of the code in this level.
- Run the code to familiarize yourself with what it currently draws.
- When you are ready to do so, move on!

<div class="warning uagb-infobox__outer-wrap uagb-block-8e19ac81-8705-45c8-aaee-889b27623bef"><div class="uagb-infobox__content-wrap uagb-infobox uagb-infobox-has-icon uagb-infobox-icon-left uagb-infobox-left uagb-infobox-stacked-tablet uagb-infobox-image-valign-middle uagb-infobox-enable-border-radius "><div class="uagb-ifb-left-right-wrap"><div class="uagb-ifb-image-icon-content uagb-ifb-imgicon-wrap"><div class="uagb-ifb-icon-wrap"><span class="uagb-ifb-icon"><svg viewbox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></span></div></div><div class="uagb-ifb-content"><div class="uagb-ifb-title-wrap">### STOP

</div><div class="uagb-ifb-separator-parent"><div class="uagb-ifb-separator"></div></div><div class="uagb-ifb-text-wrap">DO NO DO TUTORIAL #5 – BUILD, SHARE, PLAY

</div></div></div></div></div>```javascriptfunction setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkblue')
  noLoop();
  smooth();
  angleMode(DEGREES);
}

function draw() {
  // These five functions draw everything. Order matters
  // for how different parts of the picture are layered.
  drawAllBubbles();
  drawAllSeaStars();
  // drawAllFish();
  // drawAllSunbeams();
}


// To do: Repeatedly draw sea stars 
function drawAllSeaStars() {
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(500, 600);
    translate(x, y);
    drawSeaStar(random(256), random(256), random(256), random(.5, 1));
    translate(-x, -y);
  }
}

// To do: Repeatedly draw fish
function drawAllFish() {
  // Add loop

  drawFish(random(256), random(256), random(256), random(.5, 1));
}

// To do: Repeatedly draw bubbles
function drawAllBubbles() {
  for (let i = 0; i < 10; i++) {

  }
}

// To do: Repeatedly draw sunbeams
function drawAllSunbeams() {
  // Add loop


}


// Draw a five-pointed star with a wide pen of the given scale
function drawSeaStar(r, g, b, size) {
  scale(size);
  noStroke();
  fill(r, g, b);
  for (let i = 0; i < 5; i++) {
    triangle(0, -30, -10, 0, 10, 0);
    rotate(360 / 5);
  }
  scale(1 / size);
}

// Draws a fish at the current turtle location with the given scale and color
function drawFish(red, green, blue, size) {
  stroke(red, green, blue);
  scale(size);

  // Fish body


  // Fish tail

}

// Bubbles are semi-transparent dots
function drawBubble() {
  stroke(100, 100, 256, 100);
  fill(100, 100, 256, 100);
  circle(random(width), random(height), random(50));
}
```

Step 1: Add Bubbles in Loop
---------------------------

 **Set the number of iterations** in your loop so that the screen is filled with bubbles. Try starting with **200** and then add more to whatever number you like.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4370147/dc90f3583e590adb283e81db9670eca8" width="100%"></iframe>Step 2: Add Fish in Loop
------------------------

 The next high-level function you will write is `drawAllFish`. Draw **15 fish** of random size between **.5 and 2 scale** using `drawFish`.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4370147/dc90f3583e590adb283e81db9670eca8" width="100%"></iframe>Step 3: Add Sea Stars in Loop
-----------------------------

 We’re now ready to add sea stars to our image by writing `drawAllSeaStars`.

- **Add a loop** to `drawAllSeaStars`.
- **Draw 5 sea stars** of random size between **.5 and 2 scale** using `drawSeaStar`.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4370147/dc90f3583e590adb283e81db9670eca8" width="100%"></iframe>All Done? Free Play!
====================

Mess around with your “Under the Sea” scene to make it do different things.

**Ideas:**

- Make different amounts of each component.
- Play with the ranges of random values.
- Add other creatures.
- Play with color values to give the scene a different feel (nighttime? red dawn?).
- Add animation or shimmering by turning on Loop() and changing the opacity.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4370147/dc90f3583e590adb283e81db9670eca8" width="100%"></iframe>