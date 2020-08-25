## Finite & infinite sets

A finite set is any non-infinite set with the following properties:

- $|A| \le |B|$ iff there exists an injection $f: A \to B$.
- $|A| = |B|$ iff there exists a bijection $f: A \to B$.

<!-- However, examples such as $\Bbb{N}, \Bbb{Z}, \Bbb{R}$ are all infinite sets. It turns out these actually have the same two properties. -->

<!-- ## Cardinality of sets

Cardinality refers to the size or number of elements in a set. Two sets have the same cardinality, $|A| = |B|$, iff there exists a bijection from $A$ to $B$. -->

## Countable sets

A set $S$ is called countably infinite iff it has the same cardinality as the positive integers. A set is called countable iff it is either finite or countably infinite.

To show a set is countably infinite, construct a bijection from the positive integers to the set. For example, the set of even numbers can be defined by:

$$E = \\{2n | n \in \Bbb{N}\\}$$

## Finite strings

The set $\Sigma^*$ of all finite strings over alphabet $\Sigma$ is countably infinite. To prove this, define an alphabetical ordering on the symbols in $\Sigma$. The strings can be listed in sequence:

- First $\epsilon$ of length 0
- Then all strings of length 1 in lexicographic order
- Then all strings of length 1 in lexicographic order
- And so on for a countable number of lengths

Each of these sets is countable and so their union is also countable.

<!-- ## Infinite binary strings -->

## Uncountable sets

Imagine an infinite length string of bits 10010...

This string is a function $d: \Bbb{Z}^+ \to \\{0,1\\}$.

The set of infinite binary strings is uncountable. This can be proved using diagonalization.

We have a set $X$ of infinite binary strings:

$$X = \\{d | d : \Bbb{Z}^+ \to \\{0,1\\} \\}$$

The function of $d$ has the property $d_m = d(m)$ is the $m$th symbol.

Assume there is a bijection from $\Bbb{Z}^+ \to X$. Suppose $f(i) = d^i$ so $X = \\{d^1, d^2, ... , d^n, ...\\}$. So each $d^i$ is each $d^i_i$ is a digit.

$$
d^1 = d^1_1 \\, d^1_2 \\, ... \\, d^1_n \\, ... \\\\
d^2 = d^2_1 \\, d^2_2 \\, ... \\, d^2_n \\, ... \\\\
\vdots \\\\
d^n = d^n_1 \\, d^n_2 \\, ... \\, d^n_n \\, ... \\\\
\vdots \\\\
$$

Consider taking the diagonal of these $d^n$s and creating a new binary string with them. We would be able to form a $d \in X$ and $d \mathrlap{\\,/}{=} d^i$ by creating the string with the diagonal $d^n$s and flipping them.

So $d = (d^i_i + 1) \bmod 2$. Every $d^i$ would have at least one digit different to $d$. Thus $d \in X$ and $d \mathrlap{\\,/}{=} d^i$ is a contradiction. There is no bijection $\Bbb{Z}^+ \to X$ and the set of infinite binary strings is uncountable.

A similar argument shows that $\Bbb{R}$ via $[0,1]$ is uncountable using infinite decimal strings, as seen in the textbook.

## Theorems

- Schröder-Bernstein theorem <br>
  If $|A| \le |B|$ and $|B| \le |A|$ then $|A| = |B|$.

- Cantor's theorem <br>
  $|A| \lt |P(A)|$

Cantor's theorem has some implications:

- $P(\Bbb{N})$ is not countable, in fact $|P(\Bbb{N})| = |\Bbb{R}|$.

- The continuum Hypothesis claims there is no set $S$ with $|\Bbb{N}| \lt |S| \lt |\Bbb{R}|$.

- There exists an infinite hierarchy of sets of even larger cardinality:

$$S_0 = \Bbb{N} \qquad \qquad S_{i+1} = P(S_i)$$

$$|S_0| \lt |S_1| \lt ... \lt |S_i| \lt |S_{i+1}|$$
