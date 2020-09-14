---
title: 'APCSP 17: Text Compression Heuristics, Black and White Images'
date: '2019-10-16T07:30:17-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-17-text-compression-heuristics-black-and-white-images
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26274
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 13, 2020 @ 2:28 pm'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
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
course_id:
    - '25132'
---
### Develop a heuristic for doing compression

In computer science there is a word for strategies to use when you’re not sure what the exact or best solution to a problem is.

**Vocabulary**
--------------

- **Heuristic** a problem solving approach (typically an algorithm) to find a satisfactory solution where finding an optimal or exact solution is impractical or impossible.
- **Image** – A type of data used for graphics or pictures.
- **metadata** – is data that describes other data. For example, a digital image may include metadata that describe the size of the image, number of colors, or resolution.
- **Pixel** – short for “picture element”, the fundamental unit of a digital image, typically a tiny square or dot that contains a single point of color of a larger image.

**Activities**
--------------

### Develop A Compression Heuristic

- Make a copy of: [Activity Guide – Text Compression Heuristics](https://docs.google.com/document/d/1U1SPSyBYS9tnJmpnQd-xbWnhb6TpwdJ6i82H662hxdM/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1U1SPSyBYS9tnJmpnQd-xbWnhb6TpwdJ6i82H662hxdM/copy))
- Continue working on compressing your poem using the Text Compression Widget. As you do so, develop a set of rules, or a “heuristic” that generally seems to provide good results.
- **Record your heuristic** as a list of steps that someone else unfamiliar with the problem could follow and still end up with decent compression.

The point here is to establish:

- There is no real way to determine for sure that you’ve got the *best* compression besides trying everything possible by brute force.
- Heuristics are techniques for at least making progress toward a “good enough” solution.
- Following the same heuristic might lead to different results.

- **Trade your heuristics with another group.** Are they clear and specific enough that you always know what to do? If not, provide feedback to one another and improve your heuristics to provide clearer instructions.
- Using another group’s heuristic, attempt to compress one or more of the poems in the tool. Record the amount of compression you achieve.

#### **Share Findings** Questions

*“What did all groups’ processes for compression have in common?”*

*“Will following this process always lead to the same compression? (i.e. two people following the process for the same poem, will result in the same compression?)”*

#### Compression in the Real World (.zip)

**Zip Compression**

- There is a compression algorithm called [LZW compression](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch) upon which the common “zip” utility is based. Zip compression does something very similar to what you did today with the text compression widget.
- Here is an animation of [lzw in action](https://curriculum.code.org/media/uploads/lempelziv.gif). You can see the algorithm doesn’t compress it the most, but it is following a heuristic that will lead to better and better compression over time.
- Do you want to use zip compression for real? Most computers have it built in:
  - **Windows:** select a file or group of files, right-click, and choose “Send To…Compressed (zipped) Folder.”
  - **Mac:** select a file or group of files, ctrl+click, and choose “Compress Items.”
- Warning: if you try this results may vary.
  - Zip works *really* well for text, but only on large files. If you try to compress the simple hello.txt file we used in a previous lesson, you’ll see the resulting file is actually *bigger*.
  - Zip is meant for text. It might not work well on non-text files very well because they are already compressed or don’t have the same kinds of embedded patterns that text documents do.

Encoding Black and White Images
-------------------------------

As we move to encoding images and lossy compression, we need to first learn how image data is saved.

Digital images can be stored in many formats, but one of the most common formats is “raster”. Raster images store the image as an array of individual pixels, each of which has a particular color. Higher-quality images can be obtained by decreasing the size of the pixels (resolution). While full color will be addressed in the next lesson, an important idea here is that images on computer screens are created with light by illuminating pixels on the screen. This is why it is typical in a black and white image for the value 1 to represent white – it means turn the light on – and 0 represents black – light off. If you were drawing on paper you might do the inverse.

Resources/Graded Assignment
---------------------------

 [B&amp;W Pixelation Widget](https://docs.google.com/document/d/1kLLr-ELXgBKDULCYDm3slAVQkszAHez85es7aLdAk_Q/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1kLLr-ELXgBKDULCYDm3slAVQkszAHez85es7aLdAk_Q/copy))