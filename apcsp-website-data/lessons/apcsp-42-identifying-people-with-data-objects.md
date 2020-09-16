---
title: 'APCSP 42: Identifying People With Data &#038; Objects'
date: '2020-01-15T07:58:25-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-42-identifying-people-with-data-objects
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27092
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
Purpose
-------

While there are many potential benefits associated with the collection and analysis of large amounts of data, these advances pose a constant risk to our collective security and privacy. Large-scale data breaches mean that the details of our personal, professional, and financial lives may be at risk. In order to prevent personal data from being linked to an individual person, personally identifying information, such as name, address, or identification number, is often removed from publicly available data. Nevertheless, through the use of computational analysis, it is often possible to “re-identify” individuals within data, based on seemingly innocuous information. As more of our lives is digitized, questions of security and privacy become ever more prevalent.

Resources
---------

- [World’s Biggest Data Breaches Visualization](http://www.informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/) – Website
- [HaveIBeenPwned](https://haveibeenpwned.com/) – Website
- [Data Privacy Lab](http://aboutmyinfo.org/) – Website
- [Javascript Object Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) – Web Site

World’s Biggest Data Breaches
-----------------------------

Take a look through the two next sites and on your whiteboard, jot down:

- What kind of data is being lost? And how much?
- What kinds of issues could arise from this data getting into the wrong hands?

- [World’s Biggest Data Breaches Visualization](http://www.informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/) – Website
- [HaveIBeenPwned](https://haveibeenpwned.com/) – Website

Data Privacy Lab
----------------

On your whiteboard answer:

> *Why is it significant that you are one of only a few people with your birthday, gender, and ZIP code? What concerns does this raise?”*

Research Yourself
-----------------

On your whiteboards, jot down:

1. What info could you find, and its website
2. If someone *really* wanted to find out about you online, given the information above, what would they know about you?
3. Of the pieces of information you found above, which do you think poses the biggest threat to your security or privacy? Why do you think so?

Accessing Data — Working With Javascript Objects
------------------------------------------------

### Getting Started

Go to repl.it and start a new HTML, CSS, and Javascript repl. Call it *Javascript Objects*.

### Object Syntax

```javascriptconst objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};
```

### Let’s Build an Object

Setup the object

```javascriptconst person = {};
```

If we console log this, we find that nothing is inside of it or it is undefined. Let’s add some data.

```javascriptconst person = {
  firstName: 'MJ',
  lastName: 'Linane'
  age: 34,
  gender: 'male',
  getBirthYear: function(){
    return 2019 - this.age;
  }
};
```

We can then console.log them for a response. We do this with dot notation.

### Dot notation

Above, you accessed the object’s properties and methods using **dot notation**. The object name (person) acts as the **namespace** — it must be entered first to access anything **encapsulated** inside the object. Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object’s methods.

```javascriptperson.firstName
person.age
person.getBirthYear()
```