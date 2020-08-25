## Relations

A binary relation $R$ on sets $A$ and $B$ is a subset $R \subseteq A \times B$. This takes the form of a set of tuples $(a,b)$ with $a \in A$ and $b \in B$. It is also sometimes written as $aRb$.

Given sets $A_1 \\, ... \\, A_n$, a subset $R \subseteq A_1 \times ... \times A_n$ is a n-ary relation.

## Relation composition

Let $R \subseteq B \times C$ and $S \subseteq A \times B$. The composition relation $(R \circ S) \subseteq A \times C$ is $\\{(a,c) \space | \space \exists b \space (a,b) \in S \land (b,c) \in R\\}$.

<!-- Diagram -->

If there is a relation $(a,b) \in S$ and a relation $(b,c) \in R$ where the $b$ in $S$ is the same as the $b$ in $R$, then we have a relation $(a,c) \in R \circ S$.

Unlike function composition, there can be more than one element used to get from $a$ to $c$. For example, $(a,d) \in S$ and $(d,c) \in R$ also leads to $(a,c) \in R \circ S$.

Suppose $R$ is a relation on $A$, $(R \subseteq A \times A)$. This means:

- $R^0$ is the identity relation
- $R^{n+1} = R^n \circ R$
- $R^* = \bigcup_{n \ge 0} R^n$

## Equivalence relations

Some properties of a binary relation on $A$ might include:

- Reflexive <br>
  iff $\forall x \in A \quad (x,x) \in R$

- Symmetric <br>
  iff $\forall x,y \in A \quad ((x,y) \in R \to (y,x) \in R)$

- Antisymmetric <br>
  iff $\forall x,y \in A \quad (((x,y) \in R \land (y,x) \in R) \to x = y)$

- Transitive <br>
  iff $\forall x,y,z \in A \quad (((x,y) \in R \land (y,z) \in R) \to (x,z) \in R)$

A relation $R$ on a set $A$ is an equivalence relation iff it is reflexive, symmetric and transitive.

Let $R$ be an equivalence relation on set $A$ and $a \in A$. Let $[a]_R = \\{s | (a,s) \in R\\}$ be the equivalence class of $a$ with respect to $R$. If $b \in [a]_R$ then $b$ is called a representitive of the equivalence class.

Following from this, the following 3 statements are equivalent:

- $aRb$
- $[a]_R = [b]_R$
- $[a]_R \cap [b]_R = \not \empty$

## Sequences

Sequences are ordered lists of elements. A sequence over a set $S$ is a function $f$ from a subset of the integers (typically $\Bbb{N}$ or $\Bbb{Z}^+$) to the set $S$. If the domain of $f$ is finite then the sequence is finite.

## Progressions

An arithmetic progression is of the form:

$$a, a+d, a+2d, ... , a+nd, ...$$

A geometric progression is of the form:

$$a, ar, ar^2, ... , ar^n, ...$$

Where the initial element $a$, common difference $d$, and common ratio $r$ are all real numbers.

## Recurrence relations

A recurrence relation for $\\{a_n\\}$ is an equation that expresses $a_n$ in terms of one or more of the elements $a_0, a_1, ... , a_{n-1}$. Typically it just expresses $a_n$ is terms of a fixed number of previous elements. The initial conditions specify the first elements of the sequence before the recurrence relation applies. A sequence is a solution of a recurrence relation iff its terms satisfy the relation.

## Compound interest

In general, compound interest can be written as a recurrence relation.

$$P_n = (i)^n P_0$$

Where $P_n$ is the value after $n$ years, $P_0$ is the initial value and $i$ is the interest rate as a decimal.
