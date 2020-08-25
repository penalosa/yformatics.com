## How to differentiate

In this topic, we will look at many different rules for how to integrate different types of functions. In general, we can define differentiation as the following operation.

$$
\begin{aligned}
f(x) &= x^n \\\\
f'(x) &= nx^{n-1}
\end{aligned}
$$

## Definition

The definition of the derivative of a fuction $f$ is given by:

$$f'(x) = \displaystyle\lim_{h \to 0} \dfrac{f(x + h) - f(x)}{h}$$

This can be very useful and there is guaranteed to be a question in the exam where you need to use this so it is worth learning.

A function is said to be differentiable at a point $a$ if $f'(a)$ exists. It might be a hint that a function isn't differentiable if it is discontinuous or has asymptotes.

## Chain rule

In a previous topic, we looked at composite functions. When you have a function that is the composite of two separate functions of $x$.

$$
\begin{aligned}
f(x) &= f(g(x)) \\\\
f'(x) &= f'(g(x))g'(x)
\end{aligned}
$$

## Product rule

This is for when you need to differentiate a function that is the product of two separate functions of $x$.

$$
\begin{aligned}
f(x) &= f(x)g(x) \\\\
f'(x) &= f'(x)g(x) + f(x)g'(x)
\end{aligned}
$$

## Quotient rule

This is for when you need to differentiate a function that is the division of two separate functions of $x$.

$$
\begin{aligned}
f(x) &= \dfrac{f(x)}{g(x)} \\\\
\\\\
f'(x) &= \dfrac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}
\end{aligned}
$$

## Maxima & minima

Many of the problems you will come across that apply differentiation involve optimisation of some kind. This means you are trying to find the maximums or minimums of a function. You may recall studying stationary points in high school.

> > _"Stationary points occour at $f'(x) = 0$"_ - Ms Fyfe 2K16

The values of $x$ such that $f'(x) = 0$ are called critical points. However, there are two different types of maximums and minimums found in functions:

- Local maximum / minimum <br>
  A value is considered a local critical point if it is greater than or less than other values of $f(x)$ near that $x$.

- Absolute maximum / minimum <br>
  A value is considered an absolute critical point if it is greater than or less than other values of $f(x)$ for all $x$ in the domain.

Note that absolute maxima & minima are also technically local maxima & minima.

The mean value theorem states that if a function $f$ is continuous over $[a,b]$ and differentiable over $(a,b)$ then there exists a number $c$ in $(a,b)$ such that:

$$f'(c) = \dfrac{f(b) - f(a)}{b - a}$$

This is essentially saying that you can draw a tangent line at point $c$ that is parallel to a straight line drawn between points at $a$ and $b$.

<!-- Diagram -->

Also check out the extreme value theorem or intermediate value theorem when asked about any proof for roots, critical points or concavity. Sometimes proof just needs to be explained without any actual working.
