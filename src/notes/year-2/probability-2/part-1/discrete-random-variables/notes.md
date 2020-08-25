## Introduction

A discrete random variable $X$ is a function from the sample space $S$ to a set of possible values $R$.

$$X: S \rightarrow R$$

Each of those possible values has a probability of occurring depending on the mappings from the sample space.

<!-- For example... -->

## Probability mass function

This is the function that determines the probability of a discrete random variable $X$ having a certain value. The equation used to calculate this value will differ depending on the type of random variable.

$$p(x) = \Bbb{P}(X = k)$$

This can also be used to determine the distribution of probabilities for each possible value of $X$.

![Probability mass function](/img/p-mass-function.svg)

## Expected value

In any given situation, we are able to calculate the value of a discrete random variable $X$ that is expected. This value is like a weighted average.

It is given by the equation below:

$$\Bbb{E}[X] = \displaystyle\sum\limits_{k=0}^{n} k\Bbb{P}(X = k)$$

It is important to note that the above will change depending on the type of random variable you are working with. In other words, be careful when expanding $\Bbb{P}(X = k)$.

There is also a case where we can be asked to find the expected value of a function of $X$:

$$\Bbb{E}[g(X)] = \displaystyle\sum\limits_{k=0}^{n} g(k)\Bbb{P}(X = k)$$

A moment of a discrete random variable is the expected value of a given power of $X$. The $n^{th}$ moment of a discrete random variable is defined as:

$$\Bbb{E}[X^n] = \displaystyle\sum\limits_{k=0}^{n} k^n \Bbb{P}(X = k)$$

## Stirling's approximation

This is a method of approximating factorials:

$$k! \backsim \bigg(\dfrac{k}{e}\bigg)^k \sqrt{2 \pi k}$$

Where the $\backsim$ symbol means that the ratio of the two quantities tends to 1 as $k$ tends to infinity.

$$\displaystyle\lim_{k \to \infty} \dfrac{k!}{\bigg(\dfrac{k}{e}\bigg)^k \sqrt{2 \pi k}} = 1$$

## Joint distributions

So far we have examined cases with the possible values of one random variable. Now we need to think about what to do when we want to know the probability of two random variables having certain values.

$$\Bbb{P}(X = k, Y = j)$$

If these two random variables are independent then:

$$\Bbb{P}(X = k, Y = j) = \Bbb{P}(X = k) \Bbb{P}(Y = j)$$

Otherwise, we need to look at the marginal distributions which are essentially the probability mass function of each value of a random variable laid out in a table.

For example, let's take a case where we have 2 red pens, 1 green pen and 1 blue pen. Two pens are picked at random without replacement. Let $X$ be the number of red pens chosen and $Y$ be the number of green pens chosen. We can calculate the marginal distributions as:

![Marginal distributions](/img/marginal-distributions.svg)

These can then be joined into a joint distribution table:

![Joint distributions](/img/joint-distributions.svg)

Some properties of joint distributions include:

- $\Bbb{E}[aX + bY] = a\Bbb{E}[X] + b\Bbb{E}[Y]$

- $Var[X + Y] = Var[X] + Var[Y] + 2Cov[X,Y]$

- $\Bbb{E}[XY] = \displaystyle\sum_X \displaystyle\sum_Y x \\, y \\, p(x,y)$ <br>
  Sum of the product of x,y,p for each element in the joint table.

You can also use the following to calculate joint distribution table values:

$$\Bbb{P}(X = x, Y = y)  = \Bbb{P}(X = x | Y = y) \Bbb{P}(Y = y)$$

This works both ways:

$$\Bbb{P}(X = x | Y = y) = \dfrac{\Bbb{P}(X = x, Y = y)}{\Bbb{P}(Y = y)}$$

## Variance & covariance

The variance of a discrete random variable $X$ is a number which defines how much the possible values of $X$ differ from each other. It can be calculated using:

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

However, be aware that this statement only works in one logical direction. Covariance being zero does not implicate anything. You can prove that two random variables are not independent if:

$$Cov[X,Y] = \not 0$$
