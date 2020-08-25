## Division

If $a$ and $b$ are integers with $a = \not 0$ then $a$ divides $b$, written $a|b$, if there exists an integer $c$ such that $b=ac$. Following this base theorem, we can extrapolate the following facts:

- If $a|b$ and $a|c$ then $a|(b+c)$
- If $a|b$ then $a|bc$
- If $a|b$ and $b|c$ then $a|c$

## The algorithm

If $a$ is an integer and $d$ is a positive integer, then there are are unique integers $q$ and $r$ with $0 \le r \lt d$ such that:

$$a = dq + r$$

Where $d$ is called the divisor, $q$ is called the quotient and $r$ is called the remainder.

## Modulo relation

If $a$ and $b$ are integers and $m$ is a positive integer, then $a$ is congruent to $b$ modulo $m$. This can also be written as $a \equiv b \\, (\bmod \\, m)$, iff $\\, m | (a−b)$.

Congruence is an equivalence relation on integers.

Another rule is $a \equiv b \\, (\bmod \\, m)$ iff there is an integer $k$ such that $a = b + km$.

If $a \equiv b \\, (\bmod \\, m)$ and $c \equiv d \\, (\bmod \\, m)$ then $a + c \equiv b + d \\, (\bmod \\, m)$ and $ac \equiv bd \\, (\bmod \\, m)$.

- $(a + b) \\, \bmod \\, m = ((a \mod m) + (b \mod m)) \mod m$
- $ab \mod m = ((a \mod m) (b \mod m)) \mod m$

<!-- ## Negative modulo

With negative numbers, you have to imagine modulo as a circle going anticlockwise to find the positive version. -->

<!-- Example diagram -->

## Primes

A positive integer $p \gt 1$ is called a prime iff the only positive factors of $p$ are $1$ and $p$. Otherwise, it is called a composite.

Every positive integer greater than $1$ can be written uniquely as a prime or as the product of its prime factors, written in order of nondecreasing size. The uniqueness means that every positive integer has only one prime decomposition.

There are infinitely many primes, as can be proved by contradiction of the statement above.

## Greatest common divisor

Let $a,b \in \Bbb{Z}^+$. The largest integer $d$ such that $d|a$ and $d|b$ is called the greatest common divisor of $a$ and $b$, written as $\text{gcd}(a,b)$.

The integers $a$ and $b$ are coprime if $\text{gcd}(a,b) = 1$. Meaning they have no positive integer common factors other than $1$.

## Prime factorisation

Suppose that the prime factorisation of $a$ and $b$ are:

$$a = {p_1}^{a_1} {p_2}^{a_2} \\, ... \\, {p_n}^{a_n}$$

$$b = {p_1}^{b_1} {p_2}^{b_2} \\, ... \\, {p_n}^{b_n}$$

Where each exponent is a nonnegative integer. Then:

$$\text{gcd}(a,b) = {p_1}^{\text{min}(a_1,b_1)} {p_2}^{\text{min}(a_2,b_2)} \\, ... \\, {p_n}^{\text{min}(a_n,b_n)}$$

This number would clearly divide $a$ and $b$. No larger number can divide $a$ and $b$. Factorisation is a very inefficient method since the factorisations must be computed.

## Euclidean algorithm

This is another method of computing the gcd which uses recursion.

```
gcd(x,y):
 if y = 0
    return (x)
 else
    return gcd(y,(x mod y))
```

This logic uses facts covered earlier in this topic to draw together if $x = qy + r$ and $r = x \mod y$ where $x$ and $y$ are integers. Then it follows that:

$$\text{gcd}(x,y) = \text{gcd}(y,r)$$

## Linear combinations

If $x$ and $y$ are positive integers, then there exist integers $a$ and $b$ such that $\text{gcd}(x,y) = ax + by$. This is called Bézout's theorem.

This can be proved using the extended Euclidean algorithm.

```
e-gcd(x,y):
    if y = 0
        return (x,1,0)
    else
        (d,a,b) = e-gcd(y,(x mod y))
        return ((d,b,a - ((x div y) * b)))
```
