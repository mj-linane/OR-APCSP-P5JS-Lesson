---
title: 'APCSP 32: Under the Sea Final and Digital Scene Project Planning'
date: '2019-12-03T15:07:42-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-32-under-the-sea-final-and-digital-scene-project-planning
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26801
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
uagb_style_timestamp-css:
    - '1580489425'
---
Overview
--------

Today we will be working to finalize the Under the Sea image. And begin the project planning for the final digital design group project.

Under the Sea Sunbeams
----------------------

```javascriptfunction drawSunbeam() {
  // Sets up the size of the beams
  strokeWeight(random(1, 15));

  // White light with a random opacity. Try changing the random(256) to random(25) for a more natural look
  stroke(256, 256, 256, random(256));
  // Generate random locations for sunbeams
  let x1 = random(width);
  let x2 = x1 + 100;
  let y2 = random(height / 4, height / 2);

  // draws individual sunbeam
  line(x1, 0, x2, y2);
}
```

### Do This: Add Sunbeams in Loop

Finally, we’ll add some visual flourish by writing `drawAllSunbeams()`. **Add a for loop** to `drawAllSunbeams` to **draw about 200 sunbeams**.

Here is our updated `drawSunbeam()` code. Notice, that the sunbeams are a little bit too white for what would naturally occur under water. Try **changing the random opacity to random(25)** for a more natural look.

<iframe frameborder="0" height="1000px" src="https://repl.it/student_embed/assignment/4370147/dc90f3583e590adb283e81db9670eca8" width="100%"></iframe>Submit Under the Sea Final
--------------------------

Submit the final scene by clicking submit. Final list of components:

1. at least 200 bubbles
2. at least 200 sunbeams
3. at least 15 fish
4. at least 5 sea stars

Final Project Design A Digital Scene
------------------------------------

You will be designing a digital scene in a group of 2-4.

### Deliverables: 

1. Planning Doc: Go to [classroom.google.com](http://classroom.google.com) for the planning doc assignment.
2. Final Scene Written in[ Project on Repl.it.](https://repl.it/student/classrooms/160134)
3. Final Submission of PDF of your code.

<div class="warning uagb-infobox__outer-wrap uagb-block-8e19ac81-8705-45c8-aaee-889b27623bef"><div class="uagb-infobox__content-wrap uagb-infobox uagb-infobox-has-icon uagb-infobox-icon-left uagb-infobox-left uagb-infobox-stacked-tablet uagb-infobox-image-valign-middle uagb-infobox-enable-border-radius "><div class="uagb-ifb-left-right-wrap"><div class="uagb-ifb-image-icon-content uagb-ifb-imgicon-wrap"><div class="uagb-ifb-icon-wrap"><span class="uagb-ifb-icon"><svg viewbox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></span></div></div><div class="uagb-ifb-content"><div class="uagb-ifb-title-wrap">### STOP

</div><div class="uagb-ifb-separator-parent"><div class="uagb-ifb-separator"></div></div><div class="uagb-ifb-text-wrap">DO NO DO TUTORIAL #5 – BUILD, SHARE, PLAY

</div></div></div></div></div>```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="html" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="index.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

</body></html>