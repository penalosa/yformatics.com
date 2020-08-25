## Introduction

Where discrete random variables look at a value in at a certain point, continuous random variables look at values over an interval. This allows us to calculate the probability of a random variable $X$ being between two values.

In an example where $X$ can be any number between 0 and 1:

$$\Bbb{P}(a \leq X \leq b) = b - a \qquad 0 \leq a \leq b \leq 1$$

## Cumulative distribution

Similar to a probability mass function, when examining the values of $X$ greater than or less than a value we use a distribution function $F_X$ called the cumulative distribution.

$$\text{Probability mass function} = \Bbb{P}(X = a)$$

$$\text{Cumulative distribution} = \Bbb{P}(X \leq a)$$

Combining everything above, we can now see that:

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

## Expected value

The expected value of a continuous random variable is defined as:

$$\Bbb{E}[X] = \displaystyle\int_{-\infty}^{\infty} s f_X(s) \\, ds$$

A moment of a continuous random variable is the expected value of a given power of $X$. The $n^{th}$ moment of a continuous random variable is defined as:

$$\Bbb{E}[X^n] = \displaystyle\int_{-\infty}^{\infty} s^n f_X(s) \\, ds$$

Variance and covariance appear to work the same way as discrete random variables.

## Gaussian random variables

A random variable is considered Gaussian if it has the density function:

$$f_X (x) = \dfrac{1}{\sqrt{2\pi}\sigma} \\, e^{-\frac{(x - \mu)^2}{2\sigma^2}}$$

Gaussian distributions are also referred to as normal distributions and are given the notation $X \thicksim N (\mu, \sigma^2)$.

## De Moivre-Laplace theorem

This is a method of essentially using the central limit theorem to approximate binomial distributions as normal distributions.

$$\Bbb{P} \bigg( a \le \dfrac{S_1 + ... + S_n - np}{\sqrt{np(1 - p)}} \le b \bigg) \xrightarrow[]{n \to \infty} \dfrac{1}{\sqrt{2\pi}} \displaystyle\int_{a}^{b} e^{-z^2/2} \\, dz$$

Where $S_1 ... S_n$ are Bernoulli trails.

## Hazard rate functions

Known as the mortality or failure rate, this is a function that gives the probability that an object will fail within time $t$.

$$\lambda_X(t) = \dfrac{f_X(t)}{1 - F_X(t)}$$

Where $f_X$ is the probability density function and $F_X$ is the cumulative distribution.
