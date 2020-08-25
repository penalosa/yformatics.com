## Introduction

Every real number $x$ has a multiplicative inverse (except $x = 0$).

$$y = \dfrac{1}{x} \qquad xy = 1$$

For $x \mod m$ we wish to find $y \mod m$ such that:

$$xy = 1 (\text{mod} \\, m)$$

For example, if $x = 8, m = 15$ then $2x = 16 \equiv 1 (\text{mod} \\, m)$. So 2 is a multiplicative inverse of 8.

Some combinations of $x$ and $m$ do not have a multiplicative inverse mod $m$.

The multiplicative inverse is calculated using the extended Euclidean algorithm.

## Chinese remainder theorem

Let $m_1, m_2, ... , m_n$ be pairwise relatively prime (coprime) positive integers greater than 1 and $a_1, a_2, ... , a_n$ be arbitrary integers. Then the system:

$$
x \equiv a_1 (\text{mod} \\, m_1) \\\\
x \equiv a_2 (\text{mod} \\, m_2) \\\\
\vdots \\\\
x \equiv a_n (\text{mod} \\, m_n)
$$

has a unique solution modulo $m = m_1 m_2 ... m_n$.

## Fermat's little theorem

If $p$ is prime and $p$ is not a factor of $a$ then $a^{p-1} \equiv 1 (\text{mod} \\, p)$. From this we can extrapolate that for every interger $a$ we have $a^p \equiv a (\text{mod} \\, p)$.

$\text{gcd}(p,a) = 1$ since $a$ has a unique prime decomposition that does not include $p$.

For example, find $7^{222} \bmod 11$

$$
\begin{aligned}
a^{p-1} &\equiv 1 \bmod p \\\\
7^{11-1} &\equiv 1 \bmod 11 \\\\
7^{10} &\equiv 1 \bmod 11 \\\\
7^{222} &= (7^{10})^{22} \cdot 7^2 \\\\
&\equiv (1)^{22} \cdot 49 \bmod 11 \\\\
&\equiv 5 \bmod 11
\end{aligned}
$$

## Private key cryptography

Encryption is a helpful way to send secret messages. Sending a message $M$ with a private key $En$ applied to it and an inverse $De$ allows the recipient to decrypt it.

$$De ( En (M) ) = M$$

This message could be decrypted by a third party.

## Public key cryptography

A message could be made more secure by simply sending it encrypted without the key to decrypt it. It would be very difficult for anyone to compute $De$ if they are only given $En(M)$.

## RSA cryptosystem

In this method, you choose two distinct primes $p$ and $q$. Let $n = pq$ and $k = (p-1)(q-1)$. Then choose an integer $e$ where $1 \lt e \lt k$ and $\text{gcd}(e,k) = 1$. $(n,e)$ is released as the public key. Let $d$ be the multiplicative inverse of $e \bmod k$, so $de \equiv 1 \bmod k$. $(n,d)$ is the private key, kept secret.
