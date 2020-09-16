---
title: 'APCSP 25: Creativity in Algorithms'
date: '2019-11-07T08:20:16-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-25-creativity-in-algorithms
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26462
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

You will continue to work with the “Human Machine Language” – with an added SWAP command – to design an algorithm to move the minimum card to the front of the list. You may design more algorithms for other problems and challenges provided.

Vocab
-----

- **Algorithm** – A precise sequence of instructions for processes that can be executed by a computer
- **Iterate** – To repeat in order to achieve, or get closer to, a desired goal.
- **Selection** – A generic term for a type of programming statement (usually an if-statement) that uses a Boolean condition to determine, or select, whether or not to run a certain block of statements.
- **Sequencing** – Putting commands in correct order so computers can read the commands.

Resources
---------

- [Human Machine Language 2.0 – Part 2: Min To Front](https://docs.google.com/document/d/1l2XoaDmn0vYphlT_KS9_Yl7TVgoy6z310qUuUGGKbGg/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1l2XoaDmn0vYphlT_KS9_Yl7TVgoy6z310qUuUGGKbGg/copy))
- [Human Machine Language Programming](https://perryma.tk/HML/?swap=)
- [You Should Learn to Program: Christian Genco at TEDxSMU](https://www.youtube.com/watch?v=xfBWk4nw440) – Video

Activities
----------

1. Try to find the **min** value in the list of cards using the existing Machine Learning Language.
2. Try to sort cards **to move {{random number}} to front** using the Human Machine Language 2.0 &gt; [Human Machine Language Programming](https://perryma.tk/HML/?swap=)
3. Additional Challenges
4. [You Should Learn to Program: Christian Genco at TEDxSMU](https://www.youtube.com/watch?v=xfBWk4nw440) – Video
5. [15 Sorting Algorithms in 6 Minutes – Youtube](https://www.youtube.com/watch?v=kPRA0W1kECg)

**Additional Challenges**
-------------------------

**This list of challenges is given in no particular order. Find one that intrigues you and try it out.**

For all of these challenges make the following assumptions:

- Cards start randomly valued, and randomly ordered, and are dealt from an infinitely large deck. I.e. you could face a row of all one value, or there could be seven 2s and one 6, and so on.
- Algorithms should work in principle for any number of cards, and any values that are comparable.
- Algorithms must STOP and be in the END STATE given in the challenge description.

<table class="wp-block-table"><tbody><tr><td>**Challenge Description**</td></tr><tr><td>**Search for 2 or a 10** Search the list and stop when find EITHER a 2 OR a 10 (you could substitute 2 and 10 for any other two values if you like).  
END STATE: the left hand should be touching the first 2 or 10 encountered in the list. End state does not matter if there is no 2 or 10, but the program should stop.</td></tr><tr><td>**Hi-Lo** Find the min and max values in the list and move them to the first and last positions, respectively.  
END STATE: The card with lowest value in the list is in position 0, and the card with the highest value is in the last position (position 7 if there are 8 cards). The end state of the hands does not matter, the positions of the other cards does not matter.</td></tr><tr><td>**Search for 2 and a 10** Search the list and stop once you have found BOTH a 2 AND a 10.   
END STATE: the left hand should be touching a 2 and the right hand should be touching a 10. End state does not matter if there is not both 2 and a 10.</td></tr><tr><td>**Sort** Get the cards into sorted order from least to greatest.  
END STATE: end state of the hands does not matter, but cards should be in ascending order, and the program should stop.</td></tr><tr><td>**Partition** Call the last card in the list the *pivot value*. Arrange the list so that the all of the cards less than the pivot value are to the left of it and all the cards greater than the pivot are to the right. (Cards equal to the pivot can go to the left or right of it, your choice).  
END STATE: The pivot value is in the middle of the list somewhere with all values less than it to the left, and all values greater than it to the right. The ordering of the cards to the left and right do matter. The end state of the hands does not matter.</td></tr><tr><td>**Count** Count the number of 2s in the list and set the right hand so that its position number is equal to the number of 2s in the list.  
END STATE: the position number of the right hand is equal to the number of 2s in the list. If the count is higher than the possible position numbers (i.e. every value is a 2) then set the right hand to the position past the end of the list. I.e. if there are 8 positions (0-7) the right hand should end in position 8.</td></tr></tbody></table>