---
title: 'APCSP 44: Simple Encryption'
date: '2020-01-23T07:07:41-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-44-simple-encryption
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27123
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 10:12 am'
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

This lesson is the first in a series of lessons about cryptography and encryption. “Encryption” is a process for transforming a message so that the original is “hidden” from anyone who is not the intended recipient. Encryption is not just for the military and spies anymore. We use encryption everyday on the Internet, primarily to conduct commercial transactions, and without it our economy might grind to a halt.

This lesson will give you a first look into the kind of thinking that goes into encrypting messages in the face of computational tools. Computational tools dramatically increase the strength and complexity of the algorithms we use to encrypt information, but these same tools also increase our ability to crack an encryption. Developing strong encryption relies on knowledge of problems that are “hard” for computers to solve, and using that knowledge to encrypt messages.

Coding Challenge
----------------

Make a call to a new API and return a new joke back to the web page.

1. Fork your Cat Fact repl to a new repl
2. Change the title &gt; Bad Jokes
3. In the HTML doc, change the &lt;p id=’fact’&gt; to &lt;p id=’joke’&gt;
4. Change the api link to: https://official-joke-api.appspot.com/random\_joke
5. Add a new &lt;p&gt;&lt;/p&gt; under the &lt;p&gt; with id fact. Give this new &lt;p&gt; an id=’punchline’
6. In your .js file, rename fact to jokeSetup.
7. Create a new let variable named jokePunchline.
8. Change your getElementbyId to the right ID.
9. You will need to add a second call to document.getElementById(”).innerHTML to fill in the the &lt;p id=”jokePunchline”&gt; in the HTML doc.

Vocab
-----

- **Caesar Cipher** – a technique for encryption that shifts the alphabet by some number of characters
- **Cipher** – the generic term for a technique (or algorithm) that performs encryption
- **Cracking encryption** – When you attempt to decode a secret message without knowing all the specifics of the cipher, you are trying to “crack” the encryption.
- **Decryption** – a process that reverses encryption, taking a secret message and reproducing the original plain text
- **Encryption** – a process of encoding messages to keep them secret, so only “authorized” parties can read it.
- **Random Substitution Cipher** – an encryption technique that maps each letter of the alphabet to a randomly chosen other letters of the alphabet.

Classic Encryption – Caesar Cipher
----------------------------------

**Background:**

*Many of the ideas we use to keep secrets in the digital age are far older than the Internet. The process of encoding a plain text message in some secret way is called **Encryption***

*For example in Roman times Julius Caesar is reported to have encrypted messages to his soldiers and generals by using a simple alphabetic shift – every character was encrypted by substituting it with a character that was some fixed number of letters away in the alphabet.*

*As a result an alphabetic shift is often referred to as the **Caesar Cipher**.*

Crack A Caesar Cipher
---------------------

Crack A Random Substitution Cipher
----------------------------------

Homework
--------

Blown to Bits reading on google classroom.

Going further
-------------

### Want to try and code it?

Here is a tutorial.

<https://medium.com/@TimSeverien/substitution-cipher-in-javascript-d530eb2d923d>

### Check Out Different Cipher Algorithms

<https://cryptii.com/>