## Joint probability revision

A discrete joint probability mass function:

$$p_{X,Y}(x_i,y_j) = \Bbb{P}(X = x_i, Y = y_j)$$

Marginal distribution functions:

$$p_X(x_i) = \Bbb{P}(X = x_i) = \displaystyle\sum_{j}^{} p_{X,Y}(x_i,y_j)$$

$$p_Y(y_j) = \Bbb{P}(Y = y_j) = \displaystyle\sum_{i}^{} p_{X,Y}(x_i,y_j)$$

## Two random variables

As we saw with the cumulative distribution $F_X$ for a single continuous random variable, there is a function $F_{X, Y}$ called the joint probability distribution function.

$$F_{X,Y}(x,y) = \Bbb{P}(X \le x, Y \le y)$$

Just as there is the probability density function to the cumulative distribution, we also have a joint probability density function.

$$f_{X,Y}(x,y) = \dfrac{\delta^2}{\delta x \delta y} F_{X,Y}(x,y)$$

$$F_{X,Y}(x,y) = \displaystyle\int_{-\infty}^{x} \displaystyle\int_{-\infty}^{y} f_{X,Y}(s,t) \\, dt \\, ds$$

This can also be thought of as a sum of discrete joint probabilities:

$$F_{X,Y}(x_i,y_j) = \Bbb{P}(X \le x_i, Y \le y_j) = \displaystyle\sum_{k,l}^{} \Bbb{P}(X = x_k, Y = y_l)$$

For $k,l: x_k \le x_i, y_l \le y_j$.

## Double integrals

While double integrals might appear more complicated than single ones we have looked at before, they are actually very similar just with more steps. For example, looking at the following example:

$$F_{X,Y}(x,y) = \displaystyle\int_{-\infty}^{x} \displaystyle\int_{-\infty}^{y} f_{X,Y}(s,t) \\, dt \\, ds$$

We would take the first integral, the one closest to the function, with respect to $t$.

$$F_{X,Y}(x,y) = \displaystyle\int_{-\infty}^{x} \bigg[ \displaystyle\int_{-\infty}^{y} f_{X,Y}(s,t) \\, dt \bigg] \\, ds$$

Then take the outer one of that answer with respect to $s$.

When each integral is calculated, all not respecting variables are treated as constants. The two integrals can be calculated in any order as long as the variables they respect are correct. You can find a reminder of some useful integration techniques in the calculus notes.

## Graphical area

<!-- Work in progress... -->

Problems in this topic often take the form of the probability of two random variables, $X$ & $Y$, each between two bounds.

$$\Bbb{P}(a \le X \le b, c \le Y \le d) = \displaystyle\int_{c}^{d} \displaystyle\int_{a}^{b} f_{X,Y}(s,t) \\, ds \\, dt$$

If you are able to work out the distribution and get your integration all worked out from the question then you are sorted. However, there is another way to think about it that can help get your head around a confusing context. Suppose we draw a 2D graph with the values of $Y$ on the y-axis and the values of $X$ on the x-axis, then:

![Graphical probability area 1](/img/graphical-probability-area-1.svg)

Each bound of the integration draws a side of the coloured rectangle that holds the area that represents the probability we are trying to find. This method also extends to when we have $x$ as a bound and we simply draw a line at $y = x$, it can even do infinite bounds as we will see in the following example:

$$\Bbb{P}(X \ge 1, Y \le 1)$$

Given density function:

$$
f_{X,Y}(x,y) = \begin{cases}
   2e^{-x}e^{-2y} &\text{if } x,y \gt 0 \\\\
   0 &\text{otherwise}
\end{cases}
$$

Then we could draw a graph to represent this:

![Graphical probability area 2](/img/graphical-probability-area-2.svg)

$$
\begin{aligned}
\Bbb{P}(X \ge 1, Y \le 1) &= \displaystyle\int_{1}^{\infty} \displaystyle\int_{-\infty}^{1} f_{X,Y}(s,t) \\, dt \\, ds \\\\
&= \displaystyle\int_{1}^{\infty} \bigg[ \displaystyle\int_{0}^{1} 2e^{-s}e^{-2t} \\, dt \bigg] \\, ds \\\\
&= 2 \displaystyle\int_{1}^{\infty} e^{-s} \\, ds \displaystyle\int_{0}^{1} e^{-2t} \\, dt \\\\
&= e^{-1}(1 - e^{-2})
\end{aligned}
$$
