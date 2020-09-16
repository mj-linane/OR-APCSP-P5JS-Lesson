---
title: 'APCSP 16: Text Compression'
date: '2019-10-10T12:31:26-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-16-text-compression
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26221
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

At some point we reach a physical limit of how fast we can send bits and if we want to send a large amount of information faster, we have to find a way to represent the same information with fewer bits – we must compress the data.

Vocab
-----

- **Heuristic** – a problem solving approach (algorithm) to find a satisfactory solution where finding an optimal or exact solution is impractical or impossible.
- **Lossless Compression** – a data compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.

Resources
---------

- [Decode this message](https://docs.google.com/document/d/1x89s9Xo6lwMJPQjJqhzPaBg_huwTF9LmV2PrUrESYZQ/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1x89s9Xo6lwMJPQjJqhzPaBg_huwTF9LmV2PrUrESYZQ/copy))
- [Activity Guide – Text Compression](https://docs.google.com/document/d/1dEvtuFNhx9tOWBFt8z_7_uB6WqeS5SSSdYamsZu6hJ0/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1dEvtuFNhx9tOWBFt8z_7_uB6WqeS5SSSdYamsZu6hJ0/copy))
- [Video: Text Compression with Aloe Blacc](https://www.youtube.com/watch?v=LCGkcn1f-ms&feature=youtu.be) – Video

Activities
----------

Historical Challenges of Storage
--------------------------------

Early 1900s — Punched Tape

<div class="wp-block-image"><figure class="aligncenter is-resized">[![PaperTapes-5and8Hole.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PaperTapes-5and8Hole.jpg/1200px-PaperTapes-5and8Hole.jpg)](https://commons.wikimedia.org/wiki/File:PaperTapes-5and8Hole.jpg#/media/File:PaperTapes-5and8Hole.jpg)<figcaption> By TedColes – Own work, Public Domain, [Link](https://commons.wikimedia.org/w/index.php?curid=11736857)</figcaption></figure></div>