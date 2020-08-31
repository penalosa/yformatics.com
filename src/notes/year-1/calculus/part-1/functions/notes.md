## Definition

A function $f$ is a rule that assigns each element $x$ in a set $A$ to exactly one element, called $f(x)$, in a set $B$. The set $A$ is called the domain, the set $B$ is called the codomain which has a subset of all the defined output values of the function called the range. That is to say that the range is defined by:

$$\text{Range} \, = \{f(x) \, | \, x \in A\}$$

## Domains

The domain of a function $f$ is the bounds of the values of $x$ for which $f(x)$ is defined. This is most commonly applied when we have a rational function where, for some value of $x$ the denominator will be 0, making $f(x)$ undefined.

Let's look at the example below:

$$f(x) = \dfrac{1}{x^2-x}$$

If we rewrite this as the following:

$$\dfrac{1}{x(x-1)}$$

Then we can more easily see that the denominator will be 0 when $x = 0$ or $x = 1$. Therefore, the domain of $f$ can be written in either of the following notations:

$$f \text{ is defined on } \{x \text{ | } x \not = 0, x \not = 1\}$$

$$(-\infty, 0) \cup (0, 1) \cup (1, \infty)$$

## Continuity

This section requires a relative knowledge of limits, it might help to read through the next topic if any of the notation below is unfamiliar.

A function is said to be continuous at $a$ if:

$$\displaystyle\lim_{x \to a} f(x) = f(a)$$

This definition can be used to prove a point is continuous if it fulfils the following three properties:

1. $f(a)$ is defined, it is in the domain of $f$

2. $\displaystyle\lim_{x \to a} f(x)$ exists

3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

If a function is not found to be continuous at $a$ then we say that '$f$ is discontinuous at $a$'.

## Odd & even functions

Odd and even functions are mathematical categories of functions, which relate a function to its symmetric properties.

Thinking graphically, even functions can be described as being symmetric in the y-axis.

![Even function](/img/even-function.svg)

Even functions can be proven by showing:

$$f(-x) = f(x)$$

Thinking graphically, odd functions can be described as being symmetric about the origin.

![Odd function](/img/odd-function.svg)

Odd functions can be proven by showing:

$$f(-x) = -f(x)$$

The only function that is both odd and even is one that equates to 0.

## Composite functions

Given two functions $f$ and $g$, the composite function $f \circ g$ is defined by:

$$(f \circ g)(x) = f(g(x))$$

Be aware of the order in which this is read, the functions are applied from right to left. Just remember the one closest to the $x$ is always applied first.

## Piecewise functions

Some functions which have bounds of values where they are not defined can often be more easily written in a series of different parts for each bound. For example, we could write:

$$
f(x) = \begin{cases}
   1 - x &\text{if } x \le 1 \\
   x^2 &\text{if } x \gt 1
\end{cases}
$$

Note that each part of the function is continuous within its bounds but that they may not be continuous over the transition between them.

## Increasing & decreasing

A function is called monotonic if it is either always increasing or always decreasing.

This will become more important once we look at the derivative. You can gain more information about whether a function is increasing or decreasing and the rate by which is moving.
