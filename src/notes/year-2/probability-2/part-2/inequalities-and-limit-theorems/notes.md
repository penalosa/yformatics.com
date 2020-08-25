## Markov's inequality

If $X \ge 0$, then for all $a \gt 0$ :

$$\Bbb{P}(|X - \mu| \ge a) \le \dfrac{\Bbb{E}[X]}{a}$$

## Chebyshev's inequality

If $\mu = \Bbb{E}[X]$, then for all $a \gt 0$ :

$$\Bbb{P}(|X - \mu| \ge a) \le \dfrac{Var(X)}{a^2}$$

## Chernoff bounds

Let $X$ be a random variable with $M_X(t) = \Bbb{E}[e^{tX}]$ moment generating function.

$$\Bbb{P}(X \ge a) \le e^{-ta} M_X(t), \quad \text{for all } t \ge 0$$

$$\Bbb{P}(X \le a) \le e^{-ta} M_X(t), \quad \text{for all } t \lt 0$$

## Weak Law of Large numbers

Let $X_1 ... X_n$ be a sequence of independent identically distributed random variables with mean $\mu$ and variance $\sigma^2$.

$$\Bbb{P} \bigg( \bigg| \dfrac{X_1 + ... + X_n}{n} - \mu \bigg| \ge \epsilon \bigg) \xrightarrow[]{n \to \infty} 0$$

For all $\epsilon \gt 0$.

## Strong Law of Large numbers

Basically just a confirmation that the mean of a set of things exists?

$$\mu = \Bbb{E}[S_n]$$

## Central limit theorem

Let $X_1 ... X_n$ be a sequence of independent identically distributed random variables. Then the sample mean is given by:

$$S_n = \dfrac{X_1 + ... + X_n}{n}$$

$$\Bbb{P} \bigg( \dfrac{X_1 + ... + X_n - n \mu}{\sigma \sqrt{n}} \le x \bigg) \xrightarrow[]{n \to \infty} \dfrac{1}{\sqrt{2\pi}} \displaystyle\int_{-\infty}^{x} e^{-y^2/2} \\, dy$$
