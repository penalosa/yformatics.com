## Introduction

So far in this course, we have looked at individual singular events and unions of multiple singular events. This topic explores when we have an event which is linked to previous events before it. We define this as an event with the condition of another event - "probability of $E$, given $F$":

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)}$$

## Independence

Two events are said to be independent if the following holds:

$$\Bbb{P}(E \cap F) = \Bbb{P}(E)\Bbb{P}(F)$$

This means that the probability of either event occurring does not affect the other. Events being independent is generally not equivalent to events being mutually exclusive.

This also affects conditional probability calculations, if $E$ and $F$ are independent and $E \\, \mathrlap{\\,/}{=} \\, \emptyset$ then:

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)} = \Bbb{P}(E)$$

## Sequence of events

For any given sequence of events, we can say they are independent only if every ordered subset is proven independent using the equality above. This is defined formally as:

A sequence $E_1,E_2,...,E_n$ is said to be independent if for every $i_1 \lt i_2 \lt ... \lt i_r$ such that $i_j \in \\{1,2,...,n\\}$ and $1 \le r \le n$, we have:

$$\Bbb{P}(E_{i_1} \cap E_{i_2} \cap ... \cap E_{i_r}) = \displaystyle\prod_{j=1}^r \Bbb{P}(E_{i_j})$$

Note that pairwise independence does not imply independence, the whole set together must also be independent.

$$\Bbb{P}(E_1 \cap E_2 \cap ... \cap E_n) = \displaystyle\prod_{i=1}^n \Bbb{P}(E_i)$$

This can also be written as a multiplication rule for probabilities which reduces to the above when the set is independent:

$$\Bbb{P}(E_1 \cap E_2 \cap ... \cap E_n) = \Bbb{P}(E_1)\Bbb{P}(E_2|E_1) \\, ... \\, \Bbb{P}(E_n|E_1 \cap ... \cap E_{n-1})$$

## Law of total probability

Suppose we represent the sample space as a union of mutually exclusive events.

$$S = F_1 \cup F_2 \cup ... \cup F_n$$

Then any event $E \subseteq S$ can be represented as:

$$E = EF_1 \cup EF_2 \cup ... \cup EF_n$$

$$\Bbb{P}(E) = \Bbb{P}(E|F_1)\Bbb{P}(F_1) + ... + \Bbb{P}(E|F_n)\Bbb{P}(F_n)$$

## Bayes’ formula

Let's now bring all of these elements together, we know that if we want to find a conditional probability then we use:

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)}$$

If you apply the multiplication rule to the top and law of total probability to the bottom then you get:

$$\dfrac{\Bbb{P}(E_j \cap F)}{\Bbb{P}(F)} = \dfrac{\Bbb{P}(F|E_j)\Bbb{P}(E_j)}{\Bbb{P}(F|E_1)\Bbb{P}(E_1)+...+\Bbb{P}(F|E_n)\Bbb{P}(E_n)}$$

Most commonly you only need to apply this to the top, but now you know where it comes from.

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(F|E)\Bbb{P}(E)}{\Bbb{P}(F)}$$
