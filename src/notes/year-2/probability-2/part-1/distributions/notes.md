## Introduction

In the previous topic, we looked at the concept of a probability mass function, but there are many different forms this can take depending on the nature of the problem you're dealing with.

## Geometric distribution

The probability of $k$ trials required before one success. Where the $k^{th}$ trial is a success.

$$\Bbb{P}(X = k) = p(1-p)^{k-1}$$

Where $p$ is the probability of success in each trail.

## Binomial distribution

The probability of $k$ successes in $n$ trials.

$$\Bbb{P}(X = k) = \dbinom{n}{k}p^k(1-p)^{n-k}$$

Where $p$ is the probability of success in each trail.

## Negative binomial distribution

The probability of $k$ trails being required to obtain $n$ successes.

$$\Bbb{P}(X = k) = \dbinom{k - 1}{n - 1} p^n(1 - p)^{k-n}$$

Where $p$ is the probability of success in each trail.

## Poisson distribution

The Poisson distribution is an approximation of the binomial distribution, making it very similar. The key difference with Poisson is that it can take into account a rate of some kind.

$$\Bbb{P}(X = k) = \dfrac{λ^k}{k!}e^{-λ}$$

Where the rate is given by:

$$λ = np$$

With $n$ being the number of trials and $p$ being the probability of each trial being a success. Some questions make you model this as the rate in $T$ time units. In other words, two trains arriving per hour would have a rate of $2T$ where $T$ is the number of hours.

Some properties of Poisson distributions include:

$$
\begin{aligned}
\Bbb{E}[X] &= λ \\\\
\Bbb{E}[X^2] &= λ^2 + λ \\\\
Var[X] &= λ \\\\
\end{aligned}
$$

## Hypergeometric distribution

The probability of $k$ blue balls being chosen from a bag of $N$ balls, where a total of $n$ balls are chosen and $K$ balls in the bag were blue.

$$\Bbb{P}(X = k) = \dfrac{\dbinom{K}{k} \dbinom{N - K}{n - k}}{\dbinom{N}{n}}$$

Where $p$ is the probability of success in each trail.

## More

More on this can be found on page 447 of the textbook.
