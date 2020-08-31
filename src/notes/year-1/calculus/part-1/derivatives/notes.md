## How to differentiate

In this topic, we will look at many different rules for how to integrate different types of functions. In general, we can define differentiation as the following operation.

$$
\begin{aligned}
f(x) &= x^n \\
f'(x) &= nx^{n-1}
\end{aligned}
$$

## Definition

The definition of the derivative of a fuction $f$ is given by:

$$f'(x) = \displaystyle\lim_{h \to 0} \dfrac{f(x + h) - f(x)}{h}$$

This can be very useful and there is guaranteed to be a question in the exam where you need to use this so it is worth learning.

A function is said to be differentiable at a point $a$ if $f'(a)$ exists. It might be a hint that a function isn't differentiable if it is discontinuous or has asymptotes.

## Standard derivatives

More of these are available on reference page 5 of the textbook.

## Trigonometric derivatives

## Chain rule

In a previous topic, we looked at composite functions. When you have a function that is the composite of two separate functions of $x$.

$$
\begin{aligned}
f(x) &= f(g(x)) \\
f'(x) &= f'(g(x))g'(x)
\end{aligned}
$$

## Product rule

This is for when you need to differentiate a function that is the product of two separate functions of $x$.

$$
\begin{aligned}
f(x) &= f(x)g(x) \\
f'(x) &= f'(x)g(x) + f(x)g'(x)
\end{aligned}
$$

## Quotient rule

This is for when you need to differentiate a function that is the division of two separate functions of $x$.

$$
\begin{aligned}
f(x) &= \dfrac{f(x)}{g(x)} \\
\\
f'(x) &= \dfrac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}
\end{aligned}
$$

## Linearity of differentiation

$$\dfrac{d}{dx} (f + g) = \dfrac{df}{dx} + \dfrac{dg}{dx}$$

$$\dfrac{d}{dx} (\lambda f) = \lambda \dfrac{df}{dx}$$

## Higher derivatives

Differentiating a function $f(x)$ gives us another function $f'(x)$, but this function can also be differentiated. This gives us the second derivative $f''(x)$. In theory, we can keep differentiating until we have a function that is no longer differentiable.

$$\dfrac{d^2y}{dx^2} = f''(x) = \displaystyle\lim_{h \to 0} \dfrac{f'(x + h) - f'(x)}{h}$$

## Tangent lines

## Linear approximation

$$f(x) \approx f(a) + f'(x)(x-a)$$

## Shape applications

This is essentially an application of chain rule where you will be given two functions $f$ and $g$. Suppose $f$ is a function for the surface area of a shape in terms of $g$ and $g$ is a function of the radius in terms of $t$. To calculate the rate of change of $f$ you need to differentiate $f$ in terms of $t$.
