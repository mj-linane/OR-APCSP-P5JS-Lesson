---
title: 'APCSP 53: Assignment &#8211; Clicker Game v2'
date: '2020-02-27T09:05:06-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-53-assignment-clicker-game-v2
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27901
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
You Code: Clicker Game v2
-------------------------

 You will be creating your own “clicker” game similar to the Banana Clicker game we made earlier. The general object of the game is to click on an element that jumps around every time you click it. You will pick your own theme and decide what the rules are and how to keep score. You will then navigate the user to a lose or win screen depending on their lives or score.

### Example

<figure class="wp-block-video"><video controls="" src="https://mycodingclass.co/wp-content/uploads/2020/02/Clicker-Game-Demo.webm"></video></figure>Code Starter Files
------------------

You will want to create a new folder called “53 Clicker Game v2” or something like it that makes sense to you.

[Clicker Game v2 Starter Files](https://github.com/mj-linane/apcsp-student-templates) – GitHub Link

### Overall Requirements

1. 4 Pages (Main, Game, Win, Lose)
  1. A welcome screen that explains what your game is and how to play, and lets the user start by clicking a start button.
  2. A screen for game play that displays some data(variables) on the screen that updates during play (LIVES and SCORE)
  3. A “win” screen to show a congratulatory message if the player “wins” the game by reaching a maximum score on the game.
  4. A “loss” screen to show when the player “loses” the game by losing too many lives by not clicking on the image.
2. Add variables to track some data during game play
3. Event handlers for clicks.
4. Navigation to the next screen
5. Add your own images
6. Pick a theme for your game and add appropriate images and styling

### Code Requirements

1. **4 Pages** – Explained Above
2. **Event Handlers:** Add code to event handlers to check for clicks on the image and button navigation.
3. **If-Statement:** Your game must end – there must be a way to “win” and a way to “lose.” Hint: You will need to use an if-statement here to check for either the score reaching the target score or a player running out of lives.
4. **Variables:** You must use at least one variable (but you may use as many as you like) to keep track of some data during game play (such as a score, or a number of lives remaining, number of times a certain element was clicked, etc.).
5. **Restart Button**: From the the win/loss screens, it must be possible to start the game over without simply re-running the app from scratch; this means resetting all variables and displays back to initial values and navigating back to the game page.
6. **Sliders/Buttons:** Add a slider or 2 buttons that will control the difficulty level. This will change the `frameRate()` and slow down or increase the speed of the clickable object.
7. **Formatting:** Your program code should follow good style, particularly by making sure to create global variables in the first few lines of code and giving UI elements and variables descriptive and meaningful IDs.
8. **Clean Design:** Your user interface should be intuitive to use. Your elements should be placed uniformly and in line with one another.

### Process

- Choose the theme of your game: what is jumping around the screen that the user is trying to click? Many themes and metaphors are possible. Any inappropriate images or themes may result in a deduction of points.
- Program your app: it’s suggested you start by adding some functionality before style. Add one variable into the program, and add code to update and display it properly.
- Have a peer test it out to see if there are any more improvements you should make. Make any necessary final adjustments.

How To Code Specific Parts
--------------------------

### Coding The If-Statement

Add an if statement so that when the player runs out of lives, the page navigates to the lose page. And add another if statement that checks if the player has won and then navigate them to the win.html page.

These of these if statements should happen inside of their own functions.

```javascriptfunction checkWin(){
  if( ){
  }
}
```

```javascriptfunction checkLose(){
  if( ){
  }
}
```

### Coding The Reset Button

The code should:

- Set a button
- Add an event listener that listens for a mouse press.
- Add to that mouse press a callback function that will navigate the user to the appropriate page.
- 90% of this code will be the same for both the win.html and lose.html pages.

### Advanced Challenges: If Game Is Complete

- **Timing**: If you store a timestamp in a variable when the player starts the game and then grab a timestamp when they win, you can calculate how long it took and you could factor this into your score. Use JavaScript’s time functions: https://www.w3schools.com/jsref/jsref\_gettime.asp
- **Accessing Variables Between Scripts:** Use sessionStorage to save a score variable and display it on the lose and win pages.
- **Fading**: Try using CSS and JavaScript to fade out elements on the screen that are not being used.