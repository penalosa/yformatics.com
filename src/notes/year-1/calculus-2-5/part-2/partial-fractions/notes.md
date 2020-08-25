## Rational functions

A rational function is an expression of the form $\dfrac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials.

A rational function is called proper if the degree of the numerator $P(x)$ is smaller than the degree of the denominator $Q(x)$. Otherwise, it is called improper.

If you are given one of these to integrate then you can make life far easier for yourself if you know how to change the form of what you're working with.

## Algebraic long division

Some rational functions can be simplified by dividing the numerator by the denominator.

The process for doing this is very similar to doing long division with numbers.

<!-- Note on what the divisor and the quotient are? -->

1. Write out $P(x)$ and $Q(x)$ in a long division thing.

2. Take the first element of the denominator and work out how many times it goes into the first element of the numerator. This is the first element of the quotient which should be put in the column according to its degree.

3. Multiply the element of the quotient you just wrote by the denominator and write the answer under the numerator.

4. Subtract that bottom line from the numerator and write the answer underneath. Be careful of double negatives.

5. Now repeat from step 2 except with the equation at the bottom in place of the numerator.

<!-- Here is a simple example: -->

## Partial fractions

If the rational function does not simplify nicely when algebraically divided then it can be split into partial fractions. These have three main forms depending on the nature of the rational function. In each case, you should look at the denominator to determine your next steps.

To solve each of these you need to select different values of $x$ in order to eliminate factors until you can work out the values of the capital letters.

## Distinct linear factors

The first type is where the denominator is made up of distinct linear factors. Note that you may need to factorise a quadratic expression to obtain these.

$$= \dfrac{A}{\text{factor 1}} + \dfrac{B}{\text{factor 2}}$$

If there are more than two factors then this is easy to adapt for:

$$= \dfrac{A}{\text{factor 1}} + \dfrac{B}{\text{factor 2}} + \dfrac{C}{\text{factor 3}}$$

## Repeated linear factor

The second type contains a repeated linear factor. This means the denominator looks like one factor multiplied the other factor squared. The solution for this type is slightly more complicated as you must include an element for both the second factor and its square.

$$= \dfrac{A}{\text{factor 1}} + \dfrac{B}{\text{factor 2}} + \dfrac{C}{(\text{factor 2})^2}$$

## Irreducible quadratic

The third and final type involves an irreducible quadratic. You can check if you have this type using the discriminant to prevent you from wasting time trying to calculate factors that don't exist. If the discriminant is less than 0 then the quadratic is irreducible. Recall that the discriminant function is:

$$b^2 - 4ac \quad \text{for} \quad ax^2 + bx + c$$

The solution to this is even more complicated again depending on any other factors you may have in the denominator:

$$= \dfrac{A}{\text{factor 1}} + \dfrac{Bx + C}{\text{quadratic}}$$

$$= \dfrac{A}{\text{factor 1}} + \dfrac{B}{(\text{factor 1})^2} + \dfrac{Cx + D}{\text{quadratic}}$$

Depending on if factor 1 is repeated or not.
