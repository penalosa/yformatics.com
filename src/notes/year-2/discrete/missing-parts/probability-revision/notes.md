## Sample space

For any probabilistic experiment or process, the set $\Omega$ of all its possible outcomes is called its sample space.

In general, sample spaces need not be finite, and they need noteven be countable. In this course, we focus on finite and countable sample spaces. This simplifies the axiomatic treatment needed to do probability theory.

## Probability distributions

A probability distribution over a finite or countable set $\Omega$, is a function:

$$P: \Omega \to [0,1]$$

Such that $\textstyle\sum_{s \in \Omega} P(s) = 1$.

It is the set of probabilities of each of the outcomes in the samble space.

## Events

For a countable sample space $\Omega$, an event, E, is simply a subset $E \subseteq \Omega$ of the set of possible outcomes. Given a probability distribution $P: \Omega \to [0,1]$, we define the probability of the event as $P(E) = \textstyle\sum_{s \in E} P(s)$.

## Conditional probability

Let $P: \Omega \to [0,1]$ be a probability distribution, and let $E,F \subseteq \Omega$ be two events, such that $P(F) \gt 0$. The conditional probability of $E$ given $F$, denoted $P(E|F)$, is defined by:

$$P(E|F) = \dfrac{P(E \cap F)}{P(F)}$$

## Independence

Events $A$ and $B$ are called independent if $P(A \cap B) = P(A)P(B)$.

This means that if $A$ and $B$ are independent and $P(B) \gt 0$ then:

$$P(A|B) = \dfrac{P(A \cap B)}{P(B)} = P(A)$$

## Bernoulli trials

A Bernoulli trial is a probabilistic experiment that has two possible outcomes: success or failure.

## Binomial distribution

Take PwA distributions sheet into exam with you.

## Random variables

A random variable, is a function $X: \Omega \to R$, that assigns a real value to each outcome in a sample space $\Omega$.

<!-- Conditional probability topic below -->

## Bayes' theorem

<!-- Random Variables, Expectation, andVariance topic below -->

## Expected Values

## Inefficient expectation

## Linearity of expectation

## Independent RVs

## Variance
