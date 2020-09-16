---
title: 'APCSP 10: Packets and Making a Reliable Internet'
date: '2019-09-23T13:47:39-04:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-10-packets-and-making-a-reliable-internet
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26067
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 11:17 am'
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
Purpose
-------

This is a problem-solving lesson. On the real Internet packet sizes are limited, and transmission is unreliable. In this lesson we have setup the Internet simulator to restrict packet-size to be very small – 16-bits for the *to* and *from* addresses plus **only 8 ASCII characters**.

The problem you have to solve is how to use the 8-ASCII-characters-worth of data to include both a piece of message you’re trying to send, as well as information about how many messages (packets) there are in the whole message, and which number *this* packet is.

You should invent or at least appreciate the need for something like the Transmission Control Protocol TCP. TCP was designed to overcome the inherent unreliability of the Internet. A small but non-negligible percentage of packets are lost in transmission because of faults in the infrastructure of the Internet. In order to constrain the extent of these errors, larger messages are divided into many packets which are individually routed to their recipient. The receiving computer will send an acknowledgement confirming the receipt of that packet. If the sending computer does not receive an acknowledgement, it will resend the packet until all packets have been acknowledged.

Since packets may arrive out of order, additional data must be included to indicate the order in which the packets should be arranged. Thus, while individual packets cannot be guaranteed to arrive, eventually an entire message can be accurately reconstructed.

Vocabulary
----------

- **Packets** – Small chunks of information that have been carefully formed from larger chunks of information.
- **TCP** – Transmission Control Protocol – provides reliable, ordered, and error-checked delivery of a stream of packets on the internet. TCP is tightly linked with IP and usually seen as TCP/IP in writing.

Activity Link
-------------

**Activity Instructions**
-------------------------

**Packets:** Information travelling across the Internet is not sent all at once. Instead, it is broken into smaller chunks of data called packets. There are many reasons this is done:

- **Limit Data Loss:** The Internet is not actually perfectly reliable. Even in the modern day a small percentage of packets (2% is quite common) are lost on transmission. We would prefer to only have to resend small chunks of data rather than the entire message.
- **Improve Speed:** Once a message is broken into packets, those packets do not have to travel from sender to receiver over the same path. If a faster route opens up mid-transmission, the next packets can switch paths.
- **Efficient Network Usage:** The total traffic across the network can be more easily balanced across routers if messages have been divided into smaller, more manageable chunks.

**An Updated Internet Simulator:** For today’s activity you will be using an updated version of the Internet Simulator which is designed to present some of the challenges associated with sending a large message across the Internet. You will notice the following changes:

<div class="wp-block-image"><figure class="aligncenter">![](https://lh4.googleusercontent.com/oCkAPhnTbN8URUfKkt2IYZds3o3a98KxsgKnASdO3xR5hweKZFAz69xpgii9zPZsJWnO6g12yJpG1S8RBXM7pO2KJm2npWiI5yHZPColeShKgRIjirEmZEUcixtJM7YL02vY8U4i)</figure></div>- **Packets:** You must now split messages into packets, which have been limited in size to ***no more than 8 characters***. You may add a packet by clicking the “Add Packet” button.

- **Unpredictable Order:** Messages travelling over the Internet take longer if they travel longer distances or visit more routers. When sending multiple packets, you have no guarantee of the order in which they will arrive.

- **Unreliable Network:** A small percentage of all packets will be randomly dropped. This is done to simulate both the unreliability of the physical infrastructure of the Internet and the fact that routers can become overwhelmed with traffic and drop packets.

**Goal: Given these constraints, develop a protocol for reliably sending a message across the Internet.**

### **Getting Started**

**Join a Group:** This activity is ideally completed in groups of two or three.

**Go to the Internet Simulator:** You will need to log into Code Studio and find the version of the Internet Simulator included in today’s lesson.

**Join a Router:** Add a router if you need more space. Each member of the group should join a **DIFFERENT** router from the other members of the group.

### **Develop Your Protocol**

#### **Guidelines:** Make sure your protocol meets the following criteria:

- All communication must be done through the Internet Simulator.
- You must send a message that uses at least 10 packets (i.e. minimum 80 total ASCII characters).
- The protocol should account for the possibility that the characters might be entirely random (i.e. not necessarily English – do not count on human intuition to reconstruct the message.
- Do not assume the message is known beforehand.
- The sender and receiver must be confident the full message was successfully transmitted and reconstructed.

#### **The Problem to Solve**

The real problem to solve is to think about what the recipient of the messages should do to inform the sender of what’s missing and needs to be re-sent.

It’s tricky because any message the recipient sends back to the sender also stands a chance of being dropped or lost. Your protocol needs to overcome this unreliability for both the sender or receiver.

#### **Protocol**

Use your whiteboards or a Google Doc to list the steps or components of your protocol. Make sure you test it to ensure it works as you expect.