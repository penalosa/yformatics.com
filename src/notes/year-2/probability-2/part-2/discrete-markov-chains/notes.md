## Introduction

Suppose we have a system with a set of states over time. We want to know the probability of transitioning to the next state given the previous one at the previous time.

## Transition matrices

As these problems can get quite complex, we create a matrix where each $P_{i,j}$ is the probability of a transition from state $i$ to $j$.

$$P_{i,j} = \Bbb{P}(\text{system at state } i \text{ at time } n+1 \\, | \\, \text{system at state } j \text{ at time } n)$$

Each row in the matrix is the probabilities of all the possible transition options from state $i$. This means that each row sums up to 1.

## Probability vectors

At any given time $n$, we can write a probability vector $\pi^{(n)}$ :

$$\pi^{(n)} = (\pi_1^{(n)}, ... , \pi_N^{(n)})$$

Where each $\pi_i^{(n)}$ is the probability of the system being in state $i$ at time $n$.

In order to transition forward in time and obtain the next vector, you multiply the previous vector by the transition matrix.

$$\pi^{(n+1)} = \pi^{(n)} P$$

Since we can expand this definition and work backwards, we can then generalise it to calculate the next vector from any previous vector throughout time from the start:

$$\pi^{(n+m)} = \pi^{(n)} P^m$$

$$\pi^{(m)} = \pi^{(0)} P^m$$

<!-- ## Stationary distribution -->
