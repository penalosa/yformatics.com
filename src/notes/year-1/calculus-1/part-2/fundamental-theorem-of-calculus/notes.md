<!-- ## Introduction

Although so far we have looked at differentiation and integration and some useful theorems to tackle problems, we have not dug into the guts of what is at the core of calculus. Here, we find a set of theorems that define the ground rules that the rest is built on.

The following will be laid out randomly until we find a good structure to put it in.

1.

Suppose a continuous function $f(x) = \not 0 \\, \\, \forall x \in [a,b]$.

This implies that:

$$\displaystyle\int_{a}^{b} f(x) \\, \\, dx = \not 0$$

Since $f$ is continuous and does not cross 0 we can see:

- if $f(x) \gt 0 \forall x \in [a,b]$ then $\displaystyle\int_{a}^{b} f(x) \\, \\, dx \gt 0$.

- if $f(x) \lt 0 \forall x \in [a,b]$ then $\displaystyle\int_{a}^{b} f(x) \\, \\, dx \lt 0$. -->

## Take two - from the book

I'm determined to make this make sense.

## Introduction

The fundamental theorem of calculus is an important collection of theorems which connect differential calculus and integral calculus. Differentiation grew out of the tangent problem, whereas integration grew out of the area problem. Until the 1600s, mathematicians worked on these problems separately until Isaac Barrow realised they were connected and had an inverse relationship to each other.

## The first part

The first part of the fundamental theorem of calculus examines functions of the form:

$$g(x) = \displaystyle\int_{a}^{x} f(t) \\, dt$$

Where $f$ is a continuous function on $[a,b]$ and $x$ is between $a$ and $b$. If $x$ is a fixed number then the computed integral is a definite number and if $x$ varies then the computed integral also varies. This variation defines a function of $x$ which we call $g(x)$.

![Graph](/img/g-inegral-of-f.svg)

$g$ is an antiderivative of $f$. That is $g'(x) = f(x)$.

## Inverse processes

If you were to integrate a function $f$ and then differentiate the result then you would arrive back at the original function $f$.

$$\dfrac{d}{dx} \displaystyle\int_{a}^{x} f(t) \\, dt = f(x)$$

## The second part

$$\displaystyle\int_{a}^{b} f(x) \\, dx = F(b) - F(a)$$

Where $F$ is any antiderivative of $f$.
