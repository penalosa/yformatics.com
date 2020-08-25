## Propositional logic

This forms the basis of simple logical arguments. You may recognise the notation from first year Computation & Logic:

- Negation: $\lnot$
- Conjunction: $\land$
- Disjunction: $\lor$
- Implication: $\to$
- Biconditional: $\leftrightarrow$

This can often be useful for dealing with a selection of facts and working out their implications. However, these laws do not give us the tautologies that we are looking for in solid mathematical proof.

## Predicate logic

This takes propositional logic an important step further by adding:

- Variables: $x, y, z ...$
- Predicates: $P(x), Q(y), R(x,y) ...$
- Quantifiers: $\forall, \exists$

Predicates are a generalisation of propositions since they can contain variables which stand for elements from their domain.

A simple example of this in action would be:

$P(x)$ is defined by $x \gt 0$ and the domain of $x$ is $\Z$.

In this case, we can see:

- $P(5) =$ true
- $P(-5) =$ false

## Quantifiers

An important part of what makes predicate logic so specific in its arguments is quantifiers. These allow us to specify whether a predicate is true for all $x$, at least one $x$ or no $x$ in the domain.

The two of these that we use in this course are:

- $\forall$ specifies for all $x$.
- $\exists$ specifies at least one $x$.

Variables that are in the scope of a quantifier are called 'bound variables' and those not in the scope are called 'free variables'.

## Rules of inference

Suppose we take an arbitrary proposition $P(x)$; there are a few truths we can infer from knowing if $P(x)$ holds for all, some or none of the domain.

$$\dfrac{\forall x \\, P(x)}{P(v)}$$

In this case, $v$ is an arbitrary element in the domain. If we know $\forall x \\, P(x)$ holds, we can infer that $P(v)$ is true for any value of $v$ in the domain.

If we know $\lnot (\forall x \\, P(x))$ then that implies $\exists x \\, (\lnot P(x))$, there is a counterexample. Conversely, if we know $\lnot (\exists x \\, P(x))$ then that implies $\forall x \\, (\lnot P(x))$.

Suppose we flip this and do not know if $\forall x \\, P(x)$ holds, that is what we are trying to determine.

$$\dfrac{P(c)}{\forall x \\, P(x)}$$

In this case, $c$ is an arbitery element in the domain. We can infer $\forall x \\, P(x)$ if we choose a generalised value for $c$, for example $2k+1$ to represent odd numbers, and prove $P(c)$.

## Proof techniques

All of the above logic can be applied in order to prove mathematical facts from first principles. For example:

$\forall x$ (if $x$ is odd then $x^2$ is also odd).

This can be shown by framing it as $A(x) \to B(x)$ in each of the following ways:

- Direct proof
  - Assume $n$ is an arbitrary element of the domain
  - Assume $A(n)$ is true
  - Show $\forall x (A(n) \to B(n))$ is true
- Proof by contraposition
  - Use equivalence of $A(x) \to B(x) \leftrightarrow \lnot B(x) \to \lnot A(x)$
  - Assume $n$ is an arbitrary element of the domain
  - Assume $\lnot B(n)$ is true
  - Show $\forall x (\lnot B(n) \to \lnot A(n))$ is true
- Proof by contradiction
  - Assume statement $p$ is false
  - Show $\lnot p$ implies both $q$ and $\lnot q$
  - Since $(q \land \lnot q)$ is always false this shows $p$ must be true
- Proof by cases
  - To prove a proposition of the form $(p_1 \lor p_2 \lor ... \lor p_k) \to q$
  - Use the tautology $(p_1 \lor ... \lor p_k \to q) \leftrightarrow ((p_1 \to q) \land ... \land (p_k \to q))$
  - If each of these $k$ cases are true then the proposition must be true

These kinds of proof questions become much easier if you are familiar with mathematical definitions, such as the definition of an odd number being $2k+1$ for some $k$.

## Nested quantifiers

There can be multiple quantifiers in a single statement, for example $\forall x \\, \exists y \\, (x + y = 0)$. One quantifier is said to be in the scope of another.

The order they are placed in does have an effect on and can completely change the proposition. Following the example above:

$$\forall x \ \exists y \ (x + y = 0) \qquad \text{TRUE}$$

$$\exists y \ \forall x \ (x + y = 0) \qquad \text{FALSE}$$

The former statement is saying that for each value of $x$ there is a separate value of $y$ to match each one, whereas the latter is saying that there is a single value of $y$ which remains the same for all values of $x$.
