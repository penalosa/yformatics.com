<!-- ## Introduction

## Partial sums

## Convergence

## Geometric series

## Series limits

## Linearity of series

## Integral test

## p-Series

## Comparison test

## Alternating series

## Absolute convergence

## Ratio test -->

## Introduction

If we add the terms of a sequence together then we get a series. If we add the terms of an infinite sequence then we get an infinite series.

$$\displaystyle\sum_{n=1}^{\infty} a_n = a_1 + a_2 + ...$$

We can also consider partial sums up to a certain number of terms:

$$
\begin{aligned}
S_1 &= a_1 \\
S_2 &= a_1 + a_2 \\
S_3 &= a_1 + a_2 + a_3 \\
S_n &= a_1 + a_2 + ... + a_n
\end{aligned}
$$

These partial sums can be viewed as another sequence which may or may not have a limit. If the sequence $\{S_n\}$ is convergent and $\lim_{n \to \infty} S_n = s$ exists as a real number, then the series $\sum a_n$ is also convergent.

$$\displaystyle\sum_{n=1}^{\infty} a_n = s$$

If the sequence $\{S_n\}$ is divergent then the series $\sum a_n$ is divergent.

To summarise, the sum of a series is the limit of the sequence of partial sums.

$$\displaystyle\sum_{n=1}^{\infty} a_n = \displaystyle\lim_{n \to \infty} \displaystyle\sum_{i=1}^{n} a_i$$

<!-- ## Arithmetic & geometric? -->

## Harmonic series

One of the most basic series to examine is called the harmonic series.

$$\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n} = 1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + ...$$

It is sometimes referred to as the divergent infinite series as it is always divergent.

## Geometric series

One series that is used in a lot of examples is called the geometric series. Each term is obtained from the preceding one by multiplying by the common ratio $r$.

$$\displaystyle\sum_{n=1}^{\infty} ar^{n-1} = a + ar + ar^2 + ... + ar^{n-1} + ...$$

This series is convergent when $-1 \lt r \lt 1$ and divergent when $r \le -1$ or $r \ge 1$. When it is convergent, its sum is given by:

$$\displaystyle\lim_{n \to \infty} S_n = \dfrac{a}{1-r}$$

## Divergence test

If a series $\sum a_n$ is convergent, then $\lim_{n \to \infty} a_n = 0$.

This is a mathematical fact which you can find the proof for on page 440 of the textbook. However, the converse of that statement is not correct. A series can have the limit of their terms be $0$ and still be divergent, such as the harmonic series for example. There are alternate claims that can be made for divergent series:

If $\lim_{n \to \infty} a_n$ does not exist or if $\lim_{n \to \infty} a_n \not = 0$, then the series $\sum a_n$ is divergent.

In conclusion, this is a good first step to test if a series is divergent. If you find ${\lim_{n \to \infty} a_n \not = 0}$ then you know it is definitely divergent but if you find ${\lim_{n \to \infty} a_n = 0}$ then that is not conclusive.

There are also some useful simplifying laws on page 441 of the textbook.

## Integral test

The sections above focus a lot on finding the sum of a series, but this isn't always as easy. There are some other tests you can do to determine if a series is convergent or divergent without needing to explicitly calculate their sums.

Suppose we have the following series:

$$\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n^2} = \dfrac{1}{1^2} + \dfrac{1}{2^2} + \dfrac{1}{3^2} + \dfrac{1}{4^2} + ...$$

We can express this geometrically by drawing a graph with what looks like a Riemann sum under it. Each rectangle has a base of length 1 and a height of ${y = 1/x^2}$ at its right endpoint.

<!-- Graph -->

Excluding the left-most rectangle, the combined area of the other rectangles is less than the total area under the graph. Recall that we can calculate the area under the graph using integration, which means the total area of rectangles must be less than:

$$\dfrac{1}{1^2} + \displaystyle\int_{1}^{\infty} \dfrac{1}{x^2} \, dx = 2$$

Thus the partial sums are bounded and the series converges.

<!-- ## Comparison test

## Alternating series

## Absolute & conditional

## Ratio test -->

## Power series

A power series is a series of the form:

$$\displaystyle\sum\limits_{n=0}^{\infty} c_n x^n$$

Bear in mind that the above power series is centred at 0. You may be asked for the expansion of one centred at a different value, in which case you can use the form:

$$\displaystyle\sum\limits_{n=0}^{\infty} c_n (x - a)^n$$

Where the power series is centred at $a$.

<!-- A (power) series always converges at its centre. -->

There is also another type of problem where you are asked to represent a given function as a power series. This is actually simpler than it looks if you read page 470 of the textbook.

<!-- ## Radius of convergence

## Taylor & Maclaurin -->
