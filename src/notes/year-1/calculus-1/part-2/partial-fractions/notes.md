## Introduction

Often you may come across questions that ask you to find the integral of complex equations. Some of these can be polynomials in the form:

$$\dfrac{P(x)}{Q(x)}$$

When faced with this, attempting the equation as it is can take a really long time or even be beyond your current ability. However, there are ways we can simplify it into manageable parts in order to complete the question far more easily.

## Algebraic long division

Before we look at splitting up any fractions, we need to ensure it is in its simplest form. If the degree of the numerator is higher than that of the denominator, we need to use algebraic long division. This is very similar to numeric long division but can have a few more steps.

To see this in action, let's use the example:

$$\dfrac{x^2 + 12}{x - 2}$$

<!-- Follow through this example -->

## Types of functions

Once we have the function in its simplest form, we can now split it up into different parts. Now we need to look at its properties in order to work out how to do that. There are three main options when factorising the functions:

- Product of linear factors <br>
  The function breaks down into linear factors where no factor is either repeated or a multiple of another. This means that the partial fraction decomposition will be in the form:

  $$\dfrac{P(x)}{Q(x)} = \dfrac{A_1}{a_1x + b_1} + \dfrac{A_2}{a_2x + b_2} + ... + \dfrac{A_k}{a_kx + b_k}$$

  Where $k$ is the number of factors of the denominator and each $a_ix + b_i$ is one of the linear factors.

- Product of repeated linear factors <br>
  In this case the function also breaks down into linear factors however this time at least one of them is repeated. This means that the partial fraction decomposition will be in the form:

  $$\dfrac{P(x)}{Q(x)} = \dfrac{A_{1a}}{a_1x + b_1} + \dfrac{A_{1b}}{(a_1x + b_1)^2} + \dfrac{A_{1c}}{(a_1x + b_1)^3} + ... + \dfrac{A_k}{a_kx + b_k}$$

  The degree of the partial denominators included in each example is determined by the degree to which the repeated factor is repeated.

- Product of irreducible quadratic factors <br>
  This time when the function is factorised it contains irreducible quadratic factors, none of which are repeated. This means that the partial fraction decomposition will be in the form:

  $$\dfrac{P(x)}{Q(x)} = \dfrac{A_1x + B_1}{a_1x^2 + b_1x + c_1} + \dfrac{A_2}{a_2x + b_2} + ... + \dfrac{A_k}{a_kx + b_k}$$

## Calculations

By now you should have a rational function of factorised polynomials. The final step is to compute the value of the numerator on each of the parts that will make up your sum. Of course, this process will differ slightly depending on which of the above types you are dealing with.

## Applications
