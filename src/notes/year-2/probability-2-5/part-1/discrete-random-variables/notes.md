## Introduction

Given a sample space $S$, a random variable $X$ with values in some set $\mathcal{R}$ is a function:

$$X: S \to \mathcal{R}$$

Where $\mathcal{R}$ is usually $\Bbb{N}$.

## Probability mass function

Each value of a random variable $X$ will have a different probability of occurring. Think of a certain value as an event. We calculate this probability using a formula called the probability mass function.

<!-- Take the example of repeated Bernoulli trials such as a fair coin flip. If the coin is flipped 3 times then the probability mass function will look like: -->

<!-- Image -->

For a full list of discrete distributions, see the next topic.

## Stirling’s approximation

Many of the distribution functions involve factorials in some way. These can be approximated using this useful model which the lecturer insists is very important.

$$k! \sim \bigg(\dfrac{k}{e}\bigg)^k \sqrt{2 \pi k}$$

## Expected value

This topic has explained how to calculate the probability of individual values of a random variable, but you may be asked to calculate its expected value. Think of this as a weighted average.

$$\Bbb{E}[X] = \displaystyle\sum_{k=1}^n k \\, \Bbb{P}(X = k)$$

If a random variable is given as some function $g(X)$ then you can still calculate its expected value.

$$\Bbb{E}[g(X)] = \displaystyle\sum_{k=1}^n g(k) \\, \Bbb{P}(X = k)$$

<!-- ## Variance

Another property of random variables is its variance. A measure of spread for a distribution of a random variable that determines the degree to which the values of a random variable differ from the expected value. It is defined as:

$$Var[X] = \Bbb{E}[(X - \Bbb{E}[X])^2]$$

## Covariance -->

<!-- ## Joint distributions

$$\Bbb{P}(Y = y, X = x) = \Bbb{P}(E \cap F)$$

Where:

$E = \Bbb{P}(Y = y)$

$F = \Bbb{P}(X = x)$ -->

## Joint distributions

So far we have examined cases with the possible values of one random variable. Now we need to think about what to do when we want to know the probability of two random variables having certain values.

$$\Bbb{P}(X = x, Y = y)$$

If these two random variables are independent then:

$$\Bbb{P}(X = x, Y = y) = \Bbb{P}(X = x) \Bbb{P}(Y = y)$$

Otherwise, we need to look at the marginal distributions which are essentially the probability mass function of each value of a random variable laid out in a table.

For example, let's take a case where we have 2 red pens, 1 green pen and 1 blue pen. Two pens are picked at random without replacement. Let $X$ be the number of red pens chosen and $Y$ be the number of green pens chosen. We can calculate the marginal distributions as:

![Marginal distributions](/img/marginal-distributions.svg)

All values in each table must sum to 1.

These can then be joined into a joint distribution table:

![Joint distributions](/img/joint-distributions.svg)

Each row and column must sum to the equivalent value in its respective marginal distribution table.

Some properties of joint distributions include:

- $\Bbb{E}[aX + bY] = a\Bbb{E}[X] + b\Bbb{E}[Y]$

- $Var[X + Y] = Var[X] + Var[Y] + 2Cov[X,Y]$

- $\Bbb{E}[XY] = \displaystyle\sum_X \displaystyle\sum_Y x \\, y \\, p(x,y)$ <br>
  Sum of the product of x,y,p for each element in the joint table.

You can also use the following to calculate joint distribution table values:

$$\Bbb{P}(X = x, Y = y)  = \Bbb{P}(X = x | Y = y) \Bbb{P}(Y = y)$$

Or rearranged it to calculate conditional probabilities:

$$\Bbb{P}(X = x | Y = y) = \dfrac{\Bbb{P}(X = x, Y = y)}{\Bbb{P}(Y = y)}$$

## Variance & covariance

The variance of a discrete random variable $X$ is a measure of spread for a distribution of a random variable that determines the degree to which the values of a random variable differ from the expected value. It can be calculated using:

$$
\begin{aligned}
Var[X] &= \Bbb{E}[(X - \Bbb{E}[X])^2] \\\\
&= \Bbb{E}[X^2] - \Bbb{E}[X]^2
\end{aligned}
$$

The covariance, on the other hand, determines how much the possible values of two random variables $X$ and $Y$ differ from each other. It can be calculated using:

$$
\begin{aligned}
Cov[X,Y] &= \Bbb{E}[(X - \Bbb{E}[X])(Y - \Bbb{E}[Y])] \\\\
&= \Bbb{E}[XY] - \Bbb{E}[X]\Bbb{E}[Y]
\end{aligned}
$$

As a side note, the standard deviation can be calculated by:

$$SD(X) = \sqrt{Var[X]}$$

## Independent variables

By definition, two random variables $X, Y$ are independent if:

$$\Bbb{P}(X = x_k, Y = y_j) = \Bbb{P}(X = x_k) \Bbb{P}(Y = y_j)$$

An implication of this, using the equivalencies in the section above, is:

$$\text{Independence} \Rightarrow Cov[X,Y] = 0$$

Be aware that this statement only works in one logical direction. Covariance being zero does not implicate anything. However, by contraposition, you can prove that two random variables are not independent if:

$$Cov[X,Y] \\, {=}\mathllap{/\\,} \\, 0$$
