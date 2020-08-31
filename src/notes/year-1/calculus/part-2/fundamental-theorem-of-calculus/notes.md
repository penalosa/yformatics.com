<!-- ## Part one

## Inverse processes

## Part two -->

<!-- From attempt 1 -->

## Introduction

The fundamental theorem of calculus is an important collection of theorems which connect differential calculus and integral calculus. Differentiation grew out of the tangent problem, whereas integration grew out of the area problem. Until the 1600s, mathematicians worked on these problems separately until Isaac Barrow realised they were connected and had an inverse relationship to each other.

## The first part

The first part of the fundamental theorem of calculus examines functions of the form:

$$g(x) = \displaystyle\int_{a}^{x} f(t) \, dt$$

Where $f$ is a continuous function on $[a,b]$ and $x$ is between $a$ and $b$. If $x$ is a fixed number then the computed integral is a definite number and if $x$ varies then the computed integral also varies. This variation defines a function of $x$ which we call $g(x)$.

![Graph](/img/g-inegral-of-f.svg)

$g$ is an antiderivative of $f$. That is $g'(x) = f(x)$.

## Inverse processes

If you were to integrate a function $f$ and then differentiate the result then you would arrive back at the original function $f$.

$$\dfrac{d}{dx} \displaystyle\int_{a}^{x} f(t) \, dt = f(x)$$

## The second part

$$\displaystyle\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$

Where $F$ is any antiderivative of $f$.
