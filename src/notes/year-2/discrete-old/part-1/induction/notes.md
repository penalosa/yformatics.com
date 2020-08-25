## Introduction

So far we have looked at a few different methods of mathematical proof. Using direct implication, contraposition and contradiction we can show that a statement is true or false. Induction works in a similar way, allowing us to show if a statement is true for all of the elements in a set.

## Proof method

Show $P(0)$ is true.

Assume $P(k)$ is true for an arbitrary $k$.

Show $P(k+1)$ is true.

## Spotting errors

There is often at least one question in each exam that gives you a proof by induction and asks you to find the error in the logic. This often occurs when your function is divided or multiplied by something at some stage of the proof where it will not work for a specific case or set of cases. You only need to find one counterexample where it fails.

## Examples

If you get stuck working through a proof then take a look at the RHS and try to work back to see if there is something you can factorise or cancel. The textbook might have some examples to help you.

Remember if you're dealing with a sum, you assume $P(k)$ so you can use that total and simply add the $(k+1)$ function value.

## Strong induction

In standard mathematical induction, we assume $P(k)$ for the induction step and prove $P(k + 1)$. For strong induction, we assume $P(j)$ for all $b \le j \le k$ where $b$ is the element in the base case and then show $P(k + 1)$.

## The pie problem

An even / odd number of people throw pies at each other. Show that all of them / one of them doesn't get hit.
