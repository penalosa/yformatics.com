## Introduction

Where discrete random variables look at a value in at a certain point, continuous random variables look at values over an interval. This allows us to calculate the probability of a random variable $X$ being between two values.

In an example where $X$ can be any number between 0 and 1:

$$\Bbb{P}(a \leq X \leq b) = b - a \qquad 0 \leq a \leq b \leq 1$$

## Cumulative distribution

Similar to a probability mass function, when examining the values of $X$ greater than or less than a value we use a distribution function $F_X$ called the cumulative distribution.

$$\text{Probability mass function} = \Bbb{P}(X = a)$$

$$\text{Cumulative distribution} = \Bbb{P}(X \leq a)$$

We donote the cumulative distribution with the symbol $F_X(a)$. Combining everything above, we can now see that:

$$\Bbb{P}(a \leq X \leq b) = F_X(b) - F_X(a)$$

$F_X(a) = \Bbb{P}(X \leq a)$ can also be graphed as it is a continuous function which is increasing from 0 to 1.

$$F_X(-\infty) = 0 \qquad F_X(\infty) = 1$$

<!-- Insert graph -->

## Probability density function

As well as the cumulative distribution, we also define a function $f_X$ called the probability density function. This function is the antiderivative of the cumulative distribution and can tell us more information about a continuous random variable.

$$f_X = F'_X$$

$$F_X(x) = \displaystyle\int_{-\infty}^{x} f_X(s) \\, ds$$

Reffering this back to our original premise at the top of the page:

$$\Bbb{P}(a \leq X \leq b) = \displaystyle\int_{a}^{b} f_X(s) \\, ds$$

A Key fact to remember is that:

$$\displaystyle\int_{-\infty}^{\infty} f_X(t) \\, dt = 1$$

## Lifetime

## Expectation

## Variance
