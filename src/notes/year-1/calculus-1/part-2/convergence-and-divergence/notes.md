## Improper integrals

Page 353

So far when working with definite integrals, they have all been defined over a finite interval. This topic will explore the cases where there is an infinite interval or functions that have an infinite discontinuity. These types of integrals are called improper.

## Infinite intervals

For infinite intervals, we can split this into two possibilities:

$$\displaystyle\int_{a}^{\infty} f(x) \\, dx = \displaystyle\lim_{t \to \infty} \displaystyle\int_{a}^{t} f(x) \\, dx$$

$$\displaystyle\int_{-\infty}^{b} f(x) \\, dx = \displaystyle\lim_{t \to -\infty} \displaystyle\int_{t}^{b} f(x) \\, dx$$

In each of these cases, if the corresponding limits exist as a finite number then they are convergent and they are divergent if not. This law also covers the case of an infinite interval in both directions as:

$$\displaystyle\int_{-\infty}^{\infty} f(x) \\, dx = \displaystyle\int_{-\infty}^{a} f(x) \\, dx + \displaystyle\int_{a}^{\infty} f(x) \\, dx$$

Answering this kind of question involves using this fact to get a limit of a definite integral. Integrate and sub in $t$, then calculate the limit.

## Infinite discontinuity

Suppose we have a positive continuous function defined on a finite interval $[a,b)$ where there is a vertical asymptote at $b$. We can write an integral of this function as:

$$\displaystyle\int_{a}^{b} f(x) \\, dx = \displaystyle\lim_{t \to b^-} \displaystyle\int_{a}^{t} f(x) \\, dx$$

The discontinuity can also be on the left.

$$\displaystyle\int_{a}^{b} f(x) \\, dx = \displaystyle\lim_{t \to b^+} \displaystyle\int_{t}^{b} f(x) \\, dx$$

Again, in these cases, if the corresponding limits exist as a finite number then they are convergent and they are divergent if not.

## Effective p-series

If you get an integral of the form:

$$\displaystyle\int_{1}^{\infty} \dfrac{1}{x^p} \\, dx$$

Then it will converge for $p \gt 1$ and diverge for $p \le 1$.

## Comparison test

If calculating the limit as above is difficult then there is another way to determine if an improper integral is convergent or divergent. Suppose $f$ and $g$ are continuous functions with $f(x) \ge g(x) \ge 0$ for $x \ge a$.

If $\int_{a}^{\infty} f(x) \\, dx$ is convergent then $\int_{a}^{\infty} g(x) \\, dx$ is also convergent.

If $\int_{a}^{\infty} g(x) \\, dx$ is divergent then $\int_{a}^{\infty} f(x) \\, dx$ is also divergent.

See the examples they use for this on page 359 of the textbook.
