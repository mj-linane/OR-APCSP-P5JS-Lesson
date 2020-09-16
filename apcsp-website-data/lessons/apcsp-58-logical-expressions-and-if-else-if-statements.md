---
title: 'APCSP 58: Logical Expressions and If-Else-If Statements'
date: '2020-03-10T10:47:13-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-58-logical-expressions-and-if-else-if-statements
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 28106
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'March 11, 2020 @ 9:06 am'
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
If-Else-If
----------

Syntax
------

The **if** statement specifies a block of code to be executed if a condition is true:

```
<pre class="wp-block-preformatted">if (<em>condition</em>) {
<em>  // block of code to be executed if the condition is true

 </em>}
```

The **else** statement specifies a block of code to be executed if the condition is false:

```
<pre class="wp-block-preformatted">  if (<em>condition</em>) {<br></br><em>  // block of code to be executed if the condition is true<br></br></em>} else { <br></br><em>  // block of code to be executed if the condition is false<br></br></em>}     
```

The **else if** statement specifies a new condition if the first condition is false:

```
<pre class="wp-block-preformatted"> if (<em>condition1</em>) {<br></br><em>  // block of code to be executed if condition1 is true<br></br></em>} else if (<em>condition2</em>) {<br></br><em>  // block of code to be executed if the condition1 is false and condition2 is true</em><br></br> } else {<br></br><em>  // block of code to be executed if the condition1 is false and condition2 is false<br></br></em>}   
```

We Code: If-Else-If In-Class Examples
-------------------------------------

<div class="wp-block-image">![](../../../../../uploads/2020/03/ifelseif-we-code-examples.png)</div>Logical Operators
-----------------

<figure class="wp-block-table"><table class=""><tbody><tr><th>Operator</th><th>Syntax</th><th>Description</th></tr><tr><td>Logical AND (`&&`)</td><td>`<em>expr1</em> && <em>expr2</em>`</td><td>If `expr<strong>1</strong>` can be converted to `true`, returns `expr<strong>2</strong>`; else, returns `expr<strong>1</strong>`.</td></tr><tr><td>Logical OR (`||`)</td><td>`<em>expr1</em> || <em>expr2</em>`</td><td>If `expr<strong>1</strong>` can be converted to `true`, returns `expr<strong>1</strong>`; else, returns `expr<strong>2</strong>`.</td></tr><tr><td>Logical NOT (`!`)</td><td>`!<em>expr</em>`</td><td>Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.</td></tr></tbody></table>

</figure>### Operator precedence

The following expressions might seem equivalent, but they are not, because the `&&` operator is executed before the `||` operator (see [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)).

```javascripttrue || false && false      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply
```

### Logical AND (`&&`)

The following code shows examples of the `&&` (logical AND) operator.

```javascripta1 = true  && true       // t && t returns true
a2 = true  && false      // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = ''    && false      // f && f returns ""
a9 = false && ''         // f && f returns false
```

### Logical OR (`||`)

The following code shows examples of the `||` (logical OR) operator.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
```

We Code: Logical Operators In-class Examples
--------------------------------------------

### AND Operator

<div class="wp-block-image">![](../../../../../uploads/2020/03/logical-and-operator-we-code-example.png)</div>### OR OPERATOR

<div class="wp-block-image">![](../../../../../uploads/2020/03/logical-or-operator-we-code-example.png)</div>### NOT OPERATOR

<div class="wp-block-image">![](../../../../../uploads/2020/03/logical-not-operator-we-code-example.png)</div>You Code: Repl Practice Exercises 58.1-58.9
-------------------------------------------