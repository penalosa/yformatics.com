## Introduction

So far in this course, we have looked at individual singular events and unions of multiple singular events. This topic explores when we have an event which is linked to previous events before it. We define this as an event with the condition of another event - "probability of $E$, given $F$":

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)}$$

## Independence

Two events are said to be independent if the following holds:

$$\Bbb{P}(E \cap F) = \Bbb{P}(E)\Bbb{P}(F)$$

This means that the probability of either event occurring has no effect on the other. Events being independent is generally not equivalent to events being mutually exclusive.

This also affects conditional probability calculations, if $E$ and $F$ are independent and $E = \not \emptyset$ then:

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)} = \Bbb{P}(E)$$

## Sequence of events

For any given sequence of events, we can say they are all independent if:

$$\Bbb{P}(E_1 \cap E_2 \cap ... \cap E_n) = \displaystyle\prod_{i=1}^n \Bbb{P}(E_i)$$

There is also a multiplication rule for probabilities:

$$\Bbb{P}(E_1 \cap E_2 \cap ... \cap E_n) = \Bbb{P}(E_1)\Bbb{P}(E_2|E_1) \\, ... \\, \Bbb{P}(E_n|E_1 \cap ... \cap E_{n-1})$$

## Law of total probability

Suppose we were to represent the sample space as a union of mutually exclusive events.

$$S = F_1 \cup F_2 \cup ... \cup F_n$$

We could then express any given event in that sample space as the following:

$$\Bbb{P}(E) = \Bbb{P}(E|F_1)\Bbb{P}(F_1) + ... + \Bbb{P}(E|F_n)\Bbb{P}(F_n)$$

## Bayes theorem

Extending everything we have covered in this topic, we have seen different ways to approach conditions in probability. This culminates in a formula that is often applied to these situations depending on the information you are given.

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(F|E)\Bbb{P}(E)}{\Bbb{P}(F)}$$
