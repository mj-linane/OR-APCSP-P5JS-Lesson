---
title: 'APCSP 54: User Strings, String Methods, &#038; Template Literals'
date: '2020-02-25T12:04:42-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-54-user-strings-mad-libs-draft
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27845
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 28, 2020 @ 9:00 am'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
course_id:
    - '25132'
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
---
Overview
--------

 You will develop a simple Mad Libs® app, learning to collect and process text strings as input from the user.

Vocab
-----

- **Concatenate** – to link together or join. Typically used when joining together text Strings in programming (e.g. “Hello, “+name)
- **String** – Any sequence of characters between quotation marks (ex: “hello”, “42”, “this is a string!”).

We Code: String Methods &amp; Template Literals
-----------------------------------------------

Lets run through a number of these different string methods together.

1. Create a new folder called “54 String Methods”
2. Create an app.js and a index.html

Relevant String Properties
--------------------------

[length](https://www.w3schools.com/jsref/jsref_length_string.asp) – Returns the length of a string

Relevant String Methods
-----------------------

<figure class="wp-block-table is-style-stripes"><table class=""><tbody><tr><th>Method</th><th>Description</th></tr><tr><td>[charAt()](https://www.w3schools.com/jsref/jsref_charat.asp)</td><td>Returns the character at the specified index (position)</td></tr><tr><td>[concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp)</td><td>Joins two or more strings, and returns a new joined strings</td></tr><tr><td>[endsWith()](https://www.w3schools.com/jsref/jsref_endswith.asp)</td><td>Checks whether a string ends with specified string/characters</td></tr><tr><td>[includes()](https://www.w3schools.com/jsref/jsref_includes.asp)</td><td>Checks whether a string contains the specified string/characters</td></tr><tr><td>[indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)</td><td>Returns the position of the first found occurrence of a specified value in a string</td></tr><tr><td>[lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof.asp)</td><td>Returns the position of the last found occurrence of a specified value in a string</td></tr><tr><td>[match()](https://www.w3schools.com/jsref/jsref_match.asp)</td><td>Searches a string for a match against a regular expression, and returns the matches</td></tr><tr><td>[repeat()](https://www.w3schools.com/jsref/jsref_repeat.asp)</td><td>Returns a new string with a specified number of copies of an existing string</td></tr><tr><td>[replace()](https://www.w3schools.com/jsref/jsref_replace.asp)</td><td>Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced</td></tr><tr><td>[search()](https://www.w3schools.com/jsref/jsref_search.asp)</td><td>Searches a string for a specified value, or regular expression, and returns the position of the match</td></tr><tr><td>[slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)</td><td>Extracts a part of a string and returns a new string</td></tr><tr><td>[split()](https://www.w3schools.com/jsref/jsref_split.asp)</td><td>Splits a string into an array of substrings</td></tr><tr><td>[startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp)</td><td>Checks whether a string begins with specified characters</td></tr><tr><td>[substr()](https://www.w3schools.com/jsref/jsref_substr.asp)</td><td>Extracts the characters from a string, beginning at a specified start position, and through the specified number of character</td></tr><tr><td>[substring()](https://www.w3schools.com/jsref/jsref_substring.asp)</td><td>Extracts the characters from a string, between two specified indices</td></tr><tr><td>[toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp)</td><td>Converts a string to lowercase letters</td></tr><tr><td>[toString()](https://www.w3schools.com/jsref/jsref_tostring_string.asp)</td><td>Returns the value of a String object</td></tr><tr><td>[toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp)</td><td>Converts a string to uppercase letters</td></tr><tr><td>[trim()](https://www.w3schools.com/jsref/jsref_trim_string.asp)</td><td>Removes whitespace from both ends of a string</td></tr><tr><td>[Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)</td><td>Converts the text to a number type object.</td></tr></tbody></table>

</figure>### Template Literals

#### What are they?

Template literals are enclosed by the backtick (` `) character instead of double or single quotes.

Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (`tag` here), this is called a *tagged template*. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.

#### Syntax

```javascript
`string text ${expression} string text`
```

#### Why?

Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```javascript
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

Using template literals, you can do the same like this:

```javascript
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```