---
title: 'APCSP 8: The Need for Addressing'
date: '2019-09-18T07:23:53-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-8-the-need-for-addressing
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26036
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 11:17 am'
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

You will invent a protocol (similar to the real Internet Protocol IP) to encode the necessary elements for playing a simplified, but multi-person, game of Battleship. You will first play unplugged, then using a new version of the Internet Simulator configured to allow a user to broadcast messages to a group.

Purpose
-------

This lesson builds up to your learning about the “Internet Protocol” addressing system, commonly known as IP Addresses.

Up to this point in the course, the Internet Simulator has only assumed point-to-point communication. The “protocols” you were inventing mostly had to do with encoding information in binary, rather than also encoding communication information required for successful delivery of the message.

The lesson mimics a real problem that designers of the internet had to solve. Many computers are connected together by networks. So if a computer sends some bits out, those bits pass through many computers. How does a computer know who those bits are for? If a response is necessary, how does it send it back? This is a complicated question, but the first part of the answer is that you need an addressing system, and some kind of fixed structure for messages that everyone agrees on (a protocol) so messages can be interpreted properly. (We’ll get to routing later).

The Internet Simulator for this lesson is setup to “broadcast” every message to every person in the group. Since everyone receives any bits that were sent by anyone else, a method for identifying the intended sender and receiver of the message is needed. You will invent a protocol for addressing messages.

Many network systems, such as local ethernet and WiFi, rely on addressing schemes to make sure bits are received by the correct computer based on address and for other computers to simply ignore messages not intended for them.

Vocabulary
----------

- **IP Address** – A number assigned to any item that is connected to the Internet.
- **Packets** – Small chunks of information that have been carefully formed from larger chunks of information.
- **Protocol** – A set of rules governing the exchange or transmission of data between devices.

Resources
---------

- [Broadcast Battleship Game Board](https://docs.google.com/document/d/1oKi5_35xB-6Np5stnbGq7MCKnRZVC5qCVUQmAJByrTI/export?format=pdf) – Activity Guide (copy as [MS Word](https://docs.google.com/document/d/1oKi5_35xB-6Np5stnbGq7MCKnRZVC5qCVUQmAJByrTI/export?format=doc), [Google Doc](https://docs.google.com/document/d/1oKi5_35xB-6Np5stnbGq7MCKnRZVC5qCVUQmAJByrTI/copy))
- [Broadcast Battleship Rules](https://docs.google.com/document/d/1r1r1JScAThVhJog9VJ-gbQx0zyxT3dXFLMEkp6m5Awg/export?format=pdf) – Activity Guide (copy as [MS Word](https://docs.google.com/document/d/1r1r1JScAThVhJog9VJ-gbQx0zyxT3dXFLMEkp6m5Awg/export?format=doc), [Google Doc](https://docs.google.com/document/d/1r1r1JScAThVhJog9VJ-gbQx0zyxT3dXFLMEkp6m5Awg/copy))
- [Internet Simulator – Part 3](https://youtu.be/x_YTEBRnR1U) – Video ([download](http://videos.code.org/2015/csp/internetsimulator_3.mp4))
- [IP and DNS Video Worksheet (Optional)](https://docs.google.com/document/d/1YSWsBrwuzqG0TzVXyH7Boi7XUrlPuslHxwZy0vVVjZY/export?format=pdf) – Video Worksheet (copy as [MS Word](https://docs.google.com/document/d/1YSWsBrwuzqG0TzVXyH7Boi7XUrlPuslHxwZy0vVVjZY/export?format=doc), [Google Doc](https://docs.google.com/document/d/1YSWsBrwuzqG0TzVXyH7Boi7XUrlPuslHxwZy0vVVjZY/copy))
- [Invent a Binary Protocol for Battleship](https://docs.google.com/document/d/1hq1UNK1Q4K0LHqmu0_yeO0a0NQKHzC8W--Q0QaISHVI/export?format=pdf) – Activity Guide (copy as [MS Word](https://docs.google.com/document/d/1hq1UNK1Q4K0LHqmu0_yeO0a0NQKHzC8W--Q0QaISHVI/export?format=doc), [Google Doc](https://docs.google.com/document/d/1hq1UNK1Q4K0LHqmu0_yeO0a0NQKHzC8W--Q0QaISHVI/copy))
- [The Internet: IP Addresses and DNS](https://youtu.be/5o8CwafCxnU) – Video ([download](https://videos.code.org/2015/csp/concept_internet_ip_dns.mp4))