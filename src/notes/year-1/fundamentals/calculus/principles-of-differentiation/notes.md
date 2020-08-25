## Introduction

The derivative of a function at a value $x$ is found by looking at how the values of the function change at that point. It is also referred to as the rate of change of a function. Think of it as the gradient for now.

The tangent line to the graph of $f$ at the point is the linear function which best approximates $f$ at the point $x$. This approximation becomes more and more accurate as we look at a smaller range around the value of $x$.

<!-- ## Definition of limit

We mentioned above how we can approximate the gradient at a single point in a graph. However, in an ideal world, we want the range around $x$ that we compare to be as close to $0$ as possible. The limit of a function allows us to gain this value.

We say that a number $a$ is the limit of $f$ as $h$ tends to $0$. We write this as:

$$\displaystyle\lim_{x \to a} f(x)$$

This needs to be rewritten to make more sense. Ideally, it should have its own bit haha.

Calc does this better. -->

## Definition of derivative

We are now in a position to give the formal definition of the derivative of a function $f$ at a point $x$.

$$f'(x) = \displaystyle\lim_{h \to 0} \dfrac{f(x + h) - f(x)}{h}$$

You can actually calculate the derivative of functions from first principles by using this method.

## The derivative generalised

To avoid all the work and complexity that comes with the working above, we can work out how to quickly calculate derivatives based on some simple examples.

In general, we can say the derivative of each element of a polynomail is given by:

$$
\begin{aligned}
f(x) &= x^n \\\\
f'(x) &= nx^{n-1}
\end{aligned}
$$

## Non-differentiable functions

To understand differentiable functions it is as important to understand what it means to not be differentiable. We say that a function $f$ is differentiable at a point $x$ if the following limit exists:

$$f'(x) = \displaystyle\lim_{h \to 0} \dfrac{f(x + h) - f(x)}{h}$$

This value is then exactly the value of the derivative at that point. However, there are some situations where that limit does not exist.

This is often obvious on a graph where there is an asymptote or where the graph is discontinuous.

## Trigonometric functions

$$
\begin{aligned}
f(x) &= sin(ax) \\\\
f'(x) &= a cos(ax)
\end{aligned}
$$

$$
\begin{aligned}
f(x) &= cos(ax) \\\\
f'(x) &= -a sin(ax)
\end{aligned}
$$

## Linearity of differentiation

$$\dfrac{d}{dx} (f + g) = \dfrac{df}{dx} + \dfrac{dg}{dx}$$

$$\dfrac{d}{dx} (\lambda f) = \lambda \dfrac{df}{dx}$$

## Higher derivatives

Differentiating a function $f(x)$ gives us another function $f'(x)$, but this function can also be differentiated. This gives us the second derivative $f''(x)$. In theory, we can keep differentiating until we have a function that is no longer differentiable.

$$\dfrac{d^2y}{dx^2} = f''(x) = \displaystyle\lim_{h \to 0} \dfrac{f'(x + h) - f'(x)}{h}$$

## Chain rule

Suppose we have a function $f(x)$ we are trying to differentiate but $f$ is actually a composite function of functions $g$ and $h$ on $x$.

$$
\begin{aligned}
f(x) &= (g \circ h)(x) \\\\
f'(x) &= g'(h(x))h'(x)
\end{aligned}
$$

## Product rule

Suppose we have a function $f(x)$ we are trying to differentiate but $f$ is actually a product of two functions $u$ and $v$ on $x$.

$$
\begin{aligned}
f(x) &= u(x)v(x) \\\\
f'(x) &= u'(x)v(x) + u(x)v'(x)
\end{aligned}
$$

## Quotient Rule

Suppose we have a function $f(x)$ we are trying to differentiate but $f$ is actually a devision of two functions $u$ and $v$ on $x$.

$$
\begin{aligned}
f(x) &= \dfrac{u(x)}{v(x)} \\\\
\\\\
f'(x) &= \dfrac{u'(x)v(x) - u(x)v'(x)}{v(x)^2}
\end{aligned}
$$
