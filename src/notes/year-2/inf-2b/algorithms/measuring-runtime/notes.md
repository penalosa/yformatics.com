## Evaluating algorithms

There are many possible ways to measure how successful an algorithm is. Correctness, efficiency or simplicity are all valid aspects to evaluate. In this course, we will be looking in-depth at the runtime of an algorithm.

The runtime can vary widely based on several factors such as the input, the code implementation and the machine used to execute the program. We will be looking at different algorithms at a high level; to account for different languages and implementations we examine these algorithms in pseudocode.

## Worst case vs average

When measuring runtime, there are many different perspectives that we can take.

The worst case of an algorithm specifies the maximum number of computations performed on an input of size n. This can be good at providing an upper bound but it is not very accurate when trying to predict real-world statistics.

The average of an algorithm specifies the average number of computations performed on an input of size n. This can be a more realistic estimation of an algorithm but there is debate about what 'average' actually means, as well as this calculation being much more complicated or even sometimes impossible.

## Big-O notation

The official definition is:

$\text{Let } f, g: \Bbb{N} \rightarrow \Bbb{R} \text{ be functions. We say that } f \text{ is } O(g) \text{ if there is some } n_0 \in \Bbb{N} \text{ and some } c \gt 0 \text{ from } \Bbb{R} \text{ such that for all } n \geq n_0 \text{ we have:}$

$$0 \leq f(n) \leq cg(n)$$

What this translates to, is that by '$f \text{ is } O(g)$' we are saying that 'for sufficiently large n', $f \in O(g)$. This tells us the growth rate of the runtime of an algorithm $f$ is no greater than that of $g$.

When writing this in practice, we use the form $f = O(g)$. For example:

- $3n^3 = O(n^3)$ with $c = 3$ and $n_0 = 0$

- $3n^2 + 6 = O(n^2)$ with $c = 9$ and $n_0 = 1$

- $lg(n) = O(n)$ with $c = 1$ and $n_0 = 1$

- $8n^2 + 150n + 10000 = O(n^2)$ with $c = 10158$ and $n_0 = 1$

There may be more than one correct set of values for $c$ and $n_0$ in each case.

## Laws of big-O

1. For any constant $a \gt 0$ in $\Bbb{R}: f_1 = O(g_1) \Rightarrow af_1 \in O(g_1)$

2. $f_1 = O(g_1)$ and $f_2 = O(g_2) \Rightarrow f_1 + f_2 = O(g_1 + g_2)$

3. $f_1 = O(g_1)$ and $f_2 = O(g_2) \Rightarrow f_1 f_2 = O(g_1 g_2)$

4. $f_1 = O(g_1)$ and $g_1 = O(g_2) \Rightarrow f_1 = O(g_2)$

5. For any $d \in \Bbb{N}:$ if $f_1$ is polynomial of degree $d$ with positive leading coefficient then $f_1 = O(n^d)$

6. For any constants $a \gt 0$ and $b \gt 1$ in $\Bbb{R}: n^a = O(b^n)$

7. For any constants $a \gt 0$ in $\Bbb{R}: lg(n^a) = O(lg(n))$

8. For any constants $a \gt 0$ and $b \gt 0$ in $\Bbb{R}: lg^a(n) = O(n^b)$

## Big-Ω notation

The official definition is:

$\text{Let } f, g: \Bbb{N} \rightarrow \Bbb{R} \text{ be functions. We say that } f \text{ is } \Omega(g) \text{ if there is some } n_0 \in \Bbb{N} \text{ and some } c \gt 0 \text{ from } \Bbb{R} \text{ such that for all } n \geq n_0 \text{ we have:}$

$$0 \leq cg(n) \leq f(n)$$

Similar to big-O setting an upper bound, this tells us the growth rate of the runtime of an algorithm $f$ is no less than that of $g$. Big-$\Omega$ sets a lower bound.

## Big-Θ notation

Now that you can work out the upper and lower bounds of a given algorithm, there is one more notation to be aware of. An algorithm $f$ is said to be $\Theta(g)$ if $f = O(g)$ and $f = \Omega(g)\$.

## The Master Theorem

The Master Theorem is used for asymptotic analysis of algorithms in the form of recurrence relations. The theorem is given below:

$\text{Let } n_0 \in \N, \text{ } k \in \N_{0} \text{ and a, b} \in \R \text{ with } a \gt 0 \text{ and } b \gt 1, \text{ and let } \newline \text{T : } \N \rightarrow \N \text{ satisfy the following condition: }$

$$
\text{T(n) = }
\begin{cases}
\Theta(1), &\text{ if n} \lt n_{0} \\\\
aT(\frac{n}{b}) + \Theta(n^{k}), &\text{ if n } \geq n_{0}
\end{cases}
$$

$\text{Let } e = \log_{b}(a) \text{; we call } e \text{ the critical exponent. Then: }$

$$
\text{T(n) = }
\begin{cases}
\Theta(n^{e}), &\text{ if k } \lt e \\\\
\Theta(n^{e}lg(n)), &\text{ if k } = e \\\\
\Theta(n^{k}), &\text{ if k } \gt e
\end{cases}
$$

## In-Place

An algorithm is said to be **in-place** if it can implement on the input array with only $O(1)$ extra space. For example, Quick Sort and Insertion Sort.

## Stable

An algorithm is said to be **stable** if for every pair of indices with $A[i].key = A[j].key$ and $i \lt j, $ the entry $A[i]$ comes before $A[j]$ in the output array. For example, Insertion Sort and Merge Sort.
