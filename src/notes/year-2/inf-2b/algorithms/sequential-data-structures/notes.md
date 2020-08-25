## Abstract data types

When dealing with theoretical representations of real-world data types, we need to have standard ways of thinking about the mechanics of how they work. An abstract data type (ADT) defines a 'specification' that has a mathematical model of the data and methods for accessing and modifying that data.

These models are self-contained and have no influence on the possible ways that data should be stored in physical memory or specific algorithms that should be used in conjunction with them.

## Data structures

Where an ADT states what form data is in, a data structure is used to define how it works. This entails a collection of variables for storing the data and the specific methods that can be used.

The data structure chosen can have a dramatic impact on the efficiency of the implementation.

## Sequential data

Many ADTs have a linear sequence of elements which can be connected in different ways, each with different advantages. However, they all share a series of characteristics, such as the sequence must have well-defined first and last elements. Every element except the last must have a unique successor and every element except the first must have a unique predecessor. The rank of an element in a sequence is the number of elements that precede it. Stacks, queues, arrays and linked lists are all sequential.

## Stacks

One example of an ADT is a stack. This a last-in-first-out (LIFO) list that has the following methods:

- push(a): inserts element a
- pop(): removes the most recently inserted element and returns it, if the stack is empty then an error is returned
- isEmpty(): returns a boolean

A stack can be implemented with either an array or linked list where all methods have a worst-case runtime of O(1).

Some applications of stacks include:

- Executing recursive programs
- Depth-first search on a graph
- Evaluating postfix arithmetic expressions

## Queues

Another ADT you need to know is a queue. This is a first-in-first-out (FIFO) list that has the following methods:

- enqueue(a): inserts element a
- dequeue(): removes the first element and returns it, if the queue is empty then an error is returned
- isEmpty(): returns a boolean

A queue can also be implemented with either an array or linked list where all methods have a worst-case runtime of O(1).

## Arrays

Arrays are one ADT that you know from many popular programming languages. These store the data in a sequential list that can be indexed into in order to access any element.

There are two types of array, static and dynamic. Static arrays have a fixed length when they are initialised and cannot be extended. Dynamic arrays get around this problem by allocating enough space for the current array plus a new element in another location in memory and then copying the current array over. Moving arrays around like this is generally quite inefficient but there are ways to improve the runtime.

![Array diagram](/img/array-diagram.svg)

## Linked lists

These work in a similar way to an array by storing a sequential list of data. However, they can store each of their elements in different places in memory as the link to the next element is stored with the data value itself. There are two flavours of linked lists, singly linked lists and doubly linked lists.

The former is a set of tuples where each data value is stored with only the address of the successor.

![Singly linked list diagram](/img/singly-linked-list.svg)

The latter allows methods to travel both ways through the data by storing each data value with the address of both its successor and predecessor.

![Doubly linked list diagram](/img/doubly-linked-list.svg)

<!-- ## Vectors -->

<!-- ## Amortised analysis -->

<!-- ## Dynamic Arrays -->
