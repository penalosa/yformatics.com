## Introduction

For some of this topic, it might be helpful to look back at the previous [Set Theory](https://www.yformatics.com/year-2-5/discrete/missing-parts/set-theory/notes) topic.

## Set product rule

The number of elements in a cartesian product, the number of ordered pairs, is equal to the cardinality of the two crossed sets multiplied.

$$|A \times B| = |A| \cdot |B|$$

We can also generalise this to $n$ crossed sets.

$$|A_1 \times A_2 \times ... \times A_n| = |A_1| \cdot |A_2| \cdot ... \cdot |A_n|$$

## Bit strings

Suppose we want to generate some bit strings. These are strings containing only 1s and 0s. How many bit strings could we generate with length $n$?

Since each bit can only be either a 1 or a 0, the total number possible of length $n$ is $2^n$.

Suppose now we make this scenario more complicated by trying to generate car license plates. Let these be comprised of three uppercase English letters followed by four digits.

For this, we have to look at the number of possible options for each character in each position.

$$26 \times 26 \times 26 \times 10 \times 10 \times 10 \times 10 = 175,760,000$$

## Counting subsets

A finite set, $S$, has $2^{|S|}$ distinct subsets. There is a one-to-one correspondence (bijection), between subsets of $S$ and bit strings of length $m = {|S|}$. Imagine each element of $S$ as a character in the bit string; let each bit string have a 1 in that position if it contains that element and a 0 in that position if it does not.

For all finite sets $A$ and $B$, the number of distinct functions, $f: A \to B$, is given by $|B|^{|A|}$. There is a one-to-one correspondence between functions $f: A \to B$ and strings of length $m = |A|$ over an alphabet of size $n = |B|$. By the product rule, there are $n^m$ such strings of length $m$.

## Set sum rule

If $A$ and $B$ are disjoint finite sets, then the cardinality of their union is equal to the sum of their individual cardinalities.

$$|A \cup B| = |A| + |B|$$

We can also generalise this to $n$ disjoint sets.

$$|A_1 \cup A_2 \cup ... \cup A_n| = |A_1| + |A_2| + ... + |A_n|$$

This is a simplification of the subtraction rule, also known as the inclusion-exclusion principle. This states that, for any finite sets $A$ and $B$, the cardinality of their union is equal to the sum of their individual cardinalities minus the cardinality of their intersection.

$$|A \cup B| = |A| + |B| - |A \cap B|$$

## The pigeonhole principle

For any positive integer $k$, if $k+1$ objects are placed in $k$ boxes, then at least one box contains two or more objects.

More formally, if a function $f: A \to B$ maps a finite set $A$ with $|A| = k+1$ to a finite set $B$, with $|B| = k$, then $f$ is not injective.

This can be calculated by saying that if $N \ge 0$ objects are placed in $k \ge 1$ boxes, then at least one box contains at least $\lceil\frac{N}{k}\rceil$ objects.

## Stirling’s approximation

$$n! \sim \sqrt{2 \pi n} \Big(\dfrac{n}{e}\Big)^n$$

It is often more useful to have explicit lower and upper bounds on $n!$

For all $n \ge 1$:

$$\sqrt{2 \pi n} \Big(\dfrac{n}{e}\Big)^n e^{\frac{1}{12n+1}} \le n! \le \sqrt{2 \pi n} \Big(\dfrac{n}{e}\Big)^n e^{\frac{1}{12n}}$$

This theorem can also be applied to binomial coefficients:

$$\Big(\dfrac{n}{r}\Big)^r \le \dbinom{n}{r} \le \Big(\dfrac{n e}{r}\Big)^r$$

$$\dbinom{2n}{n} \sim \dfrac{2^{2n}}{\sqrt{\pi n}}$$

$$\dfrac{2^{2n}}{2n+1} \le \dbinom{2n}{n} \le 2^{2n}$$

Vandermonde’s identity is also meant to be helpful:

$$\dbinom{m + n}{r} = \displaystyle\sum\limits_{k=0}^{r} \dbinom{m}{r - k} \dbinom{n}{k}$$

As well as Pascal’s identity, for all integers $n \ge 0$, and all integers $r, 0 \le r \le n + 1$:

$$\dbinom{n + 1}{r} = \dbinom{n}{r - 1} + \dbinom{n}{r}$$

## Permutations

A permutation of a set $S$ is an ordered arrangement of the elements of $S$. In other words, it is a sequence containing every element of $S$ exactly once.

Another way of explaining a permutation of a set $S$ is as a bijection.

$$\pi: S \to S$$

Note that $\pi$ is a bijection if and only if the sequence on the right contains every element of $S$ exactly once.

## r-Permutations

A r-permutation of a set $S$, is an ordered arrangement of $r$ distinct elements of S. There is only one 0-permutation of any set: the empty sequence.

Another way of explaining a r-permutation of a set $S$ is as an injection.

$$f: \\{1,...,r\\} \to S$$

So, for a set $S$ with $|S| = n$, the number of r-permutions of $S, 1 \le r \le n$, is equal to the number of one-to-one functions:

$$f: \\{1,...,r\\} \to \\{1,...,n\\}$$

Let $P(n,r)$ denote the number of r-permutations of an n-element set.

$$P(n,r) = \dfrac{n!}{(n-r)!}$$

There are $n$ different choices for the first element of the sequence. For each of those choices, there are $n−1$ remaining choices for the second element. For every combination of the first two choices, there are $n−2$ choices for the third element, and so forth.

## The binomial theorem

This is the method of working out the coefficients of terms in multiplied out polynomail.

For all $n \ge 0$:

$$(x + y)^n = \displaystyle\sum\limits_{j=0}^{n} \dbinom{n}{j} x^{n-j}y^j$$

## Combinations

An r-combination of a set $S$ is an unordered collection of $r$ elements of $S$. In other words, it is simply a subset of $S$ of size $r$.

Let $C(n,r)$ denote the number of r-combinations of an n-element set. These are called 'binomial coefficients' and are read as "$n$ choose $r$". It can also be written as:

$$\dbinom{n}{r} = \dfrac{n!}{r!(n-r)!}$$

## Indistinguishable objects

This type of question is often presented as a word with repeated letters where you are asked how many anagrams can be made. However, bare in mind that if a word contains two As then we have to account for the case where those two As are swapped but all other letters are the same. We have to compensate for that case being double-counted.

The number of permutations of $n$ objects, with $n_1$ indistinguishable objects of type $1$ and $n_k$ indistinuishable objects of type $k$, is:

$$\dfrac{n!}{n_1! n_2! ... n_k!}$$
