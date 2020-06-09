---
title: 'Algorithm Efficiency and Big O Notation'
author: 'MJ Linane'
date: '06-04-2020'
course: 'apcsp'
---

## Introduction

There comes a time in every developer’s journey where they will be asked about the time complexity of their algorithm. It might be during a white board interview ( which you should never do ) or while talking to other developers about a certain way of doing things. And while premature optimization leads to bike-shedding, knowing and understanding Big O notation can guide the way we as developers think about and shape our applications.
To understand what I mean, first we need to set the rules for how we will grade the time complexity of an algorithm and have a basic definition of what an algorithm is.
When we say ‘algorithm’, all we are meaning is a defined set of steps that our worker will follow in order to produce an outcome. For instance, the algorithm to make coffee at my mentor’s house is as follows:

1. Get a cup from the cupboard
2. Get a K-cup pod of the coffee I want
3. Ensure that the water in the Keurig is at or above the minimum level
4. Place the cup on the grate
5. Place the K-cup inside of the Keurig
6. Press 'Start'
7. Wait till the cup is full
8. Enjoy

While there might be smaller steps like how to get a cup from the cupboard or how to place the K-cup inside of the machine, the algorithm for making a cup of coffee above outlines each step in the processes and anyone following these steps can make a cup of coffee.
What if we had a list of people that we wanted to make cups of coffee for? This is where time complexity comes into the picture.

Suppose we had n people that wanted cups of coffee. Since the steps and time involved to make a cup of coffee will be the same each time, we say that making n cups of coffee will take n time units to complete. So for 5 cups of coffee it will take 5 units of time or in Big O notation, it will take O(5) to make. If we wanted to make 100 cups of coffee it would take O(100). It is common practice, however, to express Big O notation asymptotically or ‘as the input grows to infinity’. In this way, our Coffee Making algorithm is O(n).
Another rule for grading our algorithm in terms of time complexity is that we usually use the worst case. That means when we say something is O(n), we are saying that the longest this algorithm will take is equal to the amount of time it takes to perform the action against n number of elements.

## Why Learn

As you learn more about algorithms you’ll see these expressions used a lot because writing your code while understanding this relationship can be the difference between an operation being nearly instantaneous or taking minutes and wasting, sometimes enormous amounts of, money on external processors like Firebase.
