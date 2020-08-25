## Introduction

A set is an unordered collection of elements. It can be finite or infinite and the order of the elements does not matter. Repeated elements in the set are only listed once. A set can also be empty.

The 'cardinality' of a set is defined as the number of elements in that set. It has the notation $|A|$. The cardinality of the empty set is 0.

<!-- - Elements shown within curly brackets $A = \\{3,2\\}$
- Membership $2 \in A$
- Non-membership $2 \notin A$
- Empty set $\emptyset = \\{\\}$

There are many important mathematical sets which it can be very helpful to keep in mind when studying the content of this course:

- $\Bbb{N} =$ Natural numbers $= \\{0,1,2,3...\\}$
- $\Bbb{Z} =$ Integers $= \\{...{-3},{-2},{-1},0,1,2,3...\\}$
- etc. -->

There are also different sets that can be created by combining other sets in some way:

- Union $A \cup B$
- Intersection $A \cap B$
- Difference $A − B$
- Complement $\bar{A}$
- Subset $B \subseteq A$

<!-- ## Set notation -->

## Ordered pairs

An ordered pair is a set $(a,b)$ that contains two elements where the order they are in does matter. An example of this you might have seen before is 2-dimensional coordinates.

<!-- $$\\{\\{a\\},\\{a,b\\}\\}$$ -->

## Cartesian product

This is sometimes also called the 'cross product' of two sets. It is a set of ordered pairs.

$$A \times B = \\{(a,b) | a \in A \land b \in B\\}$$

The order that the sets are crossed in matters as the first element of each ordered pair comes from the first set and the second from the second set.

## Functions

Assume $A$ and $B$ are non-empty sets. $f$ is a function from $A$ to $B$ if $f$ assigns to each element of $A$ a unique element of $B$. This is written as $f(a) = b$ if $f$ assigns $b$ to $a$. If this is the case then we would write $f: A \to B$ where $A$ is called the domain and $B$ is called the codomain.

There are a few different types of functions you need to know:

- Identity functions <br>
  $f: A \to A$ where each element maps to itself.

- Injective functions <br>
  $f: A \to B$ is injective iff $\\, \forall a,c \in A \\, (\text{if } f(a) = f(c), \\, \text{then } a = c)$.

- Surjective functions <br>
  $f: A \to B$ is surjective iff $\\, \forall b \in B \\,\\, \exists a \in A \\, (f(a) = b)$.

- Bijections <br>
  $f: A \to B$ is a bijection iff it is both injective and surjective.

<!-- ## Types of functions -->

## Function composition

The composition of two functions is itself a function:

Let $f: B \to C$ and $g: A \to B$. The composition function $f \circ g: A \to C$ is ${(f \circ g)(a)} = {f(g(a))}$

From this, there are a few other mathematical facts we can derive:

- The composition of two injective functions is an injective function.
- The composition of two surjective functions is a surjective function.
- The composition of two bijections is a bijection.

## Inverse functions

If $f: A \to B$ is a bijection, then the inverse of $f$, written as $f^{−1}: B \to A$ is $f^{−1}(b) = a$ iff $f(a) = b$.

![Inverse function](/img/inverse-function.svg)

The inverse of an identity function is itself and the composition of any given function with its inverse is an identity function.

## Subsets

A subset is a set of elements, $B$, whose elements are also elements of a larger set, $A$. It has the notation $B \subset A$. The empty set is also a subset of every set.

<!-- Should the counting subsets section of the next topic be here? -->

## Power sets

A power set is a set of elements, $P(A)$, which contains every possible subset of another set, $A$. Since the empty set is a subset of every set, it is also in the power set.

The cardinality of a power set, $|P(A)|$, is given by $2^{|A|}$.

## Partition of a set

A partition of a set $A$ is a collection of disjoint, non-empty subsets that have $A$ as their union. The collection of subsets $A_i \subset A$ with $i \in I$ (where $I$ is an index set) forms a partition of $A$ iff:

- $A_i \mathrlap{\\,/}{=} \empty \qquad \qquad \forall i \in I$
- $A_i \cap A_j = \empty \qquad \forall i \mathrlap{\\,/}{=} j \in I$
- ${\bigcup}_{i \in I} A_i = A$

<!-- ## Example functions -->

<!-- ## Set operations

## Union & intersection -->
