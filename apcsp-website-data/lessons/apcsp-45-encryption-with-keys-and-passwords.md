---
title: 'APCSP 45: Encryption with Keys and Passwords'
date: '2020-01-27T07:19:22-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-45-encryption-with-keys-and-passwords
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27161
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

Cryptography and encryption are important and far-reaching fields within computer science. This lesson dives deeper into the human side of cybersecurity: choosing good passwords through an exploration of the classic *Vigenère Cipher*. We also learn that the Vigenère cipher is actually susceptible to frequency analysis (though at first glance it is not) and in subsequent lessons we learn that better methods are used today.

Strong encryption techniques are typically publicly known algorithms, but **have mathematical properties** which ensure that the original message cannot easily be retrieved. These techniques typically feature a secret “key” or piece of information that is used when encrypting the message. While the algorithm can be publicly known, the secret key is not. The art of encryption is coming up with an algorithm that 1) makes the message undecipherable without the key and 2) is such that the key should *only* be discoverable through an exhaustive search of all possible keys, rather than through some other analytical technique.

In this lesson we focus on making a good key, while in subsequent lessons we learn more about problems and algorithms that are **computationally hard.** Guessing a random sequence of 200 characters, for example, is computationally hard, because there is no known way to approach the problem besides trying the trillions and trillions of possible character combinations.

Vocabulary
----------

- **Computationally Hard** – a “hard’ problem for a computer is one in which it cannot arrive at a solution in a reasonable amount of time.
- **Vigenere’s cipher**

Resources
---------

- [Vigenere Cipher Widget](https://studio.code.org/s/csp4-2019/stage/8/puzzle/1?section_id=2314156)
- [Exploring the Vigenere Cipher Widget](https://docs.google.com/document/d/1r3I5XjhVY7btXmj9-Mzil7DxSMq-2SaL7H5al3PM7hU/edit) – Worksheet Make a Copy
- [Keys and Passwords](https://docs.google.com/document/d/14iF-WokiRlifOvTS-SwVYNAn8HQ1-lY7lGbJriRlIfQ/edit?usp=sharing) – Worksheet Make a Copy
- [The Internet: Encryption &amp; Public Keys](https://www.youtube.com/watch?v=ZghMPWGXexs) – Video ([download](https://videos.code.org/2015/csp/concept_encryption.mp4))
- [(Optional) How Not to Get Hacked](https://code.org/curriculum/csp/docs/hownottogethacked) – Resource
- [Vigenere Cracking Tool](http://www.simonsingh.net/The_Black_Chamber/vigenere_cracking_tool.html) – Link

Prompt
------

> *“Are there ethical reasons to try to crack secret codes?”*

Encryption: Algorithms vs Keys
------------------------------

We want to make sure that we distinguish between an **encryption algorithm** and an **encryption key**

- An **Encryption algorithm** is some method of doing encryption.
- The **Encryption key** is a specific input that dictates how to apply the method and can also be used to decrypt the message.

### Decrypting vs Cracking

There’s a common misconception that “cracking” and “decrypting” are interchangeable terms.

- **Decrypting** is just using an algorithm to undo the encryption. It’s like using a key to unlock a lock. It’s what the sender is expecting the intended recipient to do to recover the original message.
- **Cracking** is more like detective work – it’s like trying to pick a lock – using various methods to try to figure out what the secret message is without having or knowing the decryption “key” ahead of time. Some people might say “What is the *key* to unlocking this message?”

### Cipher Algorithm vs Key

There is a difference between the algorithm (how to execute the encryption and decryption) and key (the secret piece of information).

- In encryption you should always **assume that your ‘enemy’ knows the encryption algorithm** and has access to the same tools that you do.
- What makes encryption REALLY strong is making it hard to guess or crack the “key,” *even if the “enemy” knows* the encryption technique you’re using.
- A key is the actual letter-to-letter mapping that was used to encode the message – it can also be used to decrypt.

### Question

> *“If random substitution is an algorithm for encryption, what is the **key** to a random substitution cipher?”*

Vigenere Cipher
---------------

For this activity, we are using:

- [Vigenere Cipher Widget](https://studio.code.org/s/csp4-2019/stage/8/puzzle/1?section_id=2314156)
- [Exploring the Vigenere Cipher Widget](https://docs.google.com/document/d/1r3I5XjhVY7btXmj9-Mzil7DxSMq-2SaL7H5al3PM7hU/edit) – Worksheet Make a Copy

Checking Your Passwords
-----------------------

 For this activity, we are using:

- [Keys and Passwords](https://docs.google.com/document/d/14iF-WokiRlifOvTS-SwVYNAn8HQ1-lY7lGbJriRlIfQ/edit?usp=sharing) – Worksheet Make a Copy

Homework: Cipher Research
-------------------------

[Crypto Corner: http://crypto.interactive-maths.com/](http://crypto.interactive-maths.com/)

- Choose a cipher from the list.
- Research the cipher and fill out the doc on Classroom
- Including information on its algorithm
- Its history
- What they would have to do to crack the cipher. You should present an example, and describe the process they follow in cracking the code.