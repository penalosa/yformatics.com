## Exponential functions

The function $f(x) = 2^x$ is called an exponential function because the variable, $x$, is in the exponent. In general, exponential functions take the form:

$$f(x) = a^x$$

Where $a$ is some constant.

Recall some laws of exponents:

1. $a^{x+y} = a^x a^y$

2. $a^{x-y} = \dfrac{a^x}{a^y}$

3. $(a^x)^y = a^{xy}$

4. $(ab)^x = a^x b^x$

## One-to-one functions

A function is called a one-to-one function if it never takes on the same value twice:

$$f(x_1) \, \not = \, f(x_2) \qquad x_1 \, \not = \, x_2$$

Think of this as the same as injective functions in DMMR.

You can test if a function is one-to-one in its graph by using the horizontal line test. A function is one-to-one if and only if no horizontal line intersects its graph more than once.

Only one-to-one functions have an inverse.

## Inverse functions

In the first topic of this course, we explored what a function was. We defined it as a rule that maps each element in a set $A$ to an element in a set $B$. An inverse function is a reverse rule that maps $f(x)$ back to $x$. We call this function $f^{-1}(x)$.

$$y = f(x) \iff x = f^{-1}(y)$$

To find the inverse function of a one-to-one function:

1. Write $y = f(x)$
2. Solve this equation for $x$ in terms of $y$
3. To express $f^{-1}$ as a function of $x$, interchange $x$ and $y$

If a one-to-one function $f$ is continuous on a defined interval then its inverse $f^{-1}$ is also continuous.

If a one-to-one function $f$ is differentiable and $f'(f^{-1}(a)) \, \not = \, 0$ then the inverse is differentiable at $a$ and:

$$(f^{-1})'(a) = \dfrac{1}{f'(f^{-1}(a))}$$

## The number e

When working exponential differential functions, it can often be made easier when using the number $e$ as a base. This is defined as:

$$e = \displaystyle\lim_{x \to 0} (1 + x)^{\frac{1}{x}}$$

<!-- This section might be important or it might just be setup for logarithms. -->

## Logarithmic functions

Exponential functions also have an inverse function. This is called the logarithmic function with base $a$.

$$y = a^x \iff x = log_ay$$

If $x$ and $y$ are positive integers, some laws of logarithms include:

1. $log_a(xy) = log_ax + log_ay$

2. $log_a\Big(\dfrac{x}{y}\Big) = log_ax - log_ay$

3. $log_a(x^r) = r \, log_ax$

## Natural logarithm

Above, we simply defined the base of the logarithm as some number $a$. However, there are actually many scenarios when it is very useful to have the base be the number we introduced earlier, $e$. This is called the natural logarithm.

$$log_ex = ln \, x$$

## Logarithmic derivatives

To differentiate a logarithmic function with base $a$:

$$f(x) = log_ax$$

$$f'(x) = \dfrac{1}{x} log_ae$$

A proof for this can be seen on page 164 of the textbook.

The derivative of the natural logarithm is given by:

$$\dfrac{d}{dx} (ln \, x) = \dfrac{1}{x}$$

Here is where you can really see how things get simpler when using $e$ as a base.

## Exponential growth

Equations are often used to model the growth of quantities. In the real world, the rate of growth over time is often linked to the current quantity, such as in the case of population growth. That is to say:

$$f'(t) = kf(x)$$

See chapter 3.4 of the textbook for solutions to some of these problems.

## Inverse trigonometric functions

As the above section explained, only one-to-one functions have an inverse. Trigonometric functions are periodic and so therefore cannot be one-to-one. However, if we were to limit their domains over a certain interval then that function would technically be one-to-one and therefore would have an inverse.

<!-- Graph -->

The inverse of this restricted sine function is called the arcsine function and is denoted $sin^{-1}x$ or $\arcsin x$.

$$\dfrac{d}{dx} sin^{-1}x = \dfrac{1}{\sqrt{1 - x^2}}$$

The same can be applied to cosine:

<!-- Graph -->

The inverse of this restricted cosine function is called the arccosine function and is denoted $cos^{-1}x$ or $\arccos x$.

$$\dfrac{d}{dx} cos^{-1}x = - \dfrac{1}{\sqrt{1 - x^2}}$$

The same again can be applied to tangent:

<!-- Graph -->

The inverse of this restricted tan function is called the arctan function and is denoted $tan^{-1}x$ or $\arctan x$.

$$\dfrac{d}{dx} tan^{-1}x = \dfrac{1}{1 + x^2}$$
