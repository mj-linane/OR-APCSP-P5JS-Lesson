---
title: 'APCSP 18: Encoding Color Images &#038; Hexadecimal'
date: '2019-10-18T08:27:00-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-18-encoding-color-images-hexadecimal
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26283
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 13, 2020 @ 2:28 pm'
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

 The most common color representation scheme – RGB – typically uses 24 bits (3 bytes) with 8 bits each for Red, Green and Blue intensities. And one of the most common ways you see these colors represented is in hexadecimal.

The process of rendering color on a computer screen by mixing red, green and blue light is an important concept of this lesson. The results are not always intuitive, because mixing pigment and mixing colored lights (like what’s on a computer screen) lead to different results.

Another important objective of this lesson is to understand how (uncompressed) image file sizes can become quite large. For example, even a relatively small image of 250×250 pixels is a total of 62,500 pixels, each requiring up to three bytes (24 bits) or color information, resulting in a total of 1.5 million bits to store one image! Thus, interesting connections to compression can be made here, but note that lossy compression and image formats like .jpg are covered in the next lesson.

Vocabulary
----------

- **Hexadecimal** – A base-16 number system that uses sixteen distinct symbols 0-9 and A-F to represent numbers from 0 to 15.
- **Pixel** – short for “picture element”, the fundamental unit of a digital image, typically a tiny square or dot that contains a single point of color of a larger image.
- **RGB** – the RGB color model uses varying intensities of (R)ed, (G)reen, and (B)lue light are added together in to reproduce a broad array of colors.

Resources
---------

1. [Hexadecimal Odometer](https://studio.code.org/s/odometer/stage/1/puzzle/1?section_id=2314156)
2. [Hexadecimal Numbers (optional)](https://docs.google.com/document/d/10BkpM4DSvlAJbo6DeJLa3G0CoulCPL08LcRdkdmSIRM/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/10BkpM4DSvlAJbo6DeJLa3G0CoulCPL08LcRdkdmSIRM/copy))
3. [Personal Favicon Project](https://docs.google.com/document/d/1bUVXHZUafmxDT5pOGlWSFkQSc_0Ll_lzMtfSh8JiI20/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1bUVXHZUafmxDT5pOGlWSFkQSc_0Ll_lzMtfSh8JiI20/copy))
4. [A Little Bit about Pixels](https://youtu.be/15aqFQQVBWU) – Video

Activities
----------

### How to encode color — Arecibo Message

<div class="wp-block-image"><figure class="aligncenter">![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Arecibo_message.svg/125px-Arecibo_message.svg.png)<figcaption>Arecibo Message, 1974</figcaption></figure></div>### Central Question? How could something like this be encoded?

> *The Arecibo message is a 1974 interstellar radio message carrying basic information about humanity and Earth sent to globular star cluster M13 in the hope that extraterrestrial intelligence might receive and decipher it. The message was broadcast into space a single time via frequency modulated radio waves at a ceremony to mark the remodeling of the Arecibo radio telescope in Puerto Rico on 16 November 1974. The message was aimed at the current location of M13 some 25,000 light years away because M13 was a large and close collection of stars that was available in the sky at the time and place of the ceremony. The message consisted of 1,679 binary digits, approximately 210 bytes, transmitted at a frequency of 2,380 MHz and modulated by shifting the frequency by 10 Hz, with a power of 450 kW. The “ones” and “zeros” were transmitted by frequency shifting at the rate of 10 bits per second. The total broadcast was less than three minutes.*

About Pixels — Video
--------------------

[A Little Bit about Pixels – Video](https://youtu.be/15aqFQQVBWU)

How to Convert Hexadecimal
--------------------------

See worksheet

Personal Favicon Project
------------------------

See worksheet