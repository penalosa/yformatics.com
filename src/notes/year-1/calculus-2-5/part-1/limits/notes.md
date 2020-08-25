## Definition

As seen in the previous topic, we know that functions may not be defined for all $x$. If we take some $a$ and say that we know a function $f$ is defined over an interval up to but not necessarily including $a$, then we can define the limit at $a$ as:

$$L = \displaystyle\lim_{x \to a} f(x)$$

This means that as $x$ tends to $a$ we see that $f(x)$ tends to $L$.

<!-- Epsilon sigma definition? -->

## One-sided limits

When working with a discontinuous function, there may be points where the limit as $x$ approaches $a$ from one side is different than from the other side. There are three main possibilities when looking at limits:

- Only the left limit is defined <br>
  Suppose that a limit at a point exists only when $x$ approaches $a$ from the lower side. We represent this as the limit when $x$ is sufficiently close to but less than $a$:

  $$\displaystyle\lim_{x \to a^-} f(x)$$

  <br>

- Only the right limit is defined <br>
  Suppose that a limit at a point exists only when $x$ approaches $a$ from the higher side. We represent this as the limit when $x$ is sufficiently close to but greater than $a$:

  $$\displaystyle\lim_{x \to a^+} f(x)$$

  <br>

- Both the left and right limits are defined <br>
  Suppose that a limit at a point exists when $x$ approaches $a$ from both sides. However, because the function is discontinuous the two limits return different values. For example, in this case, the left and right limits will be given by:

$$\displaystyle\lim_{x \to 0^-} f(x) = \dfrac{3}{2} \qquad \displaystyle\lim_{x \to 0^+} f(x) = \dfrac{5}{2}$$

<!-- More on this -->

![discontinuous-function](/img/discontinuous-function.svg)

## Limit laws

When calculating limits there are 8 rules that can make them much easier to deal with.

1. $\displaystyle\lim_{x \to a} [f(x) + g(x)] = \displaystyle\lim_{x \to a} f(x) + \displaystyle\lim_{x \to a} g(x)$

2. $\displaystyle\lim_{x \to a} [f(x) - g(x)] = \displaystyle\lim_{x \to a} f(x) - \displaystyle\lim_{x \to a} g(x)$

3. $\displaystyle\lim_{x \to a} [cf(x)] = c \displaystyle\lim_{x \to a} f(x)$

4. $\displaystyle\lim_{x \to a} [f(x) g(x)] = \displaystyle\lim_{x \to a} f(x) \times \displaystyle\lim_{x \to a} g(x)$

5. $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)} = \dfrac{\displaystyle\lim_{x \to a} f(x)}{\displaystyle\lim_{x \to a} g(x)} \qquad \text{ if } \displaystyle\lim_{x \to a} g(x) \\, \mathrlap{\\,/}{=} \\, 0$

6. $\displaystyle\lim_{x \to a} [f(x)]^n = \Big[\displaystyle\lim_{x \to a} f(x) \Big]^n$

7. $\displaystyle\lim_{x \to a} c = c$

8. $\displaystyle\lim_{x \to a} x = a$

## Calculating limits

When finding the values of limits, there are three main techniques depending on the nature of the question.

- Direct substitution <br>
  This is the simplest case, where either the answer is obvious or you can find it by applying the laws above. Be careful that this only applies if the function is continuous and so the values on either side of $a$ lead up to the limit.

  $$\displaystyle\lim_{x \to 1} x + 1 = 2$$

- Common factors <br>
  When limit laws cannot be applied to solve the problem, your next step is to factorise the function. This is most common when faced with a division where at the limit the denominator would be 0, making the entire function undefined. When this happens, there is often a certain factorisation that will present a factor of one part that already appears as another part of the function and can, therefore, be cancelled out.

  $$
  \begin{aligned}
  \displaystyle\lim_{x \to 1} \dfrac{x^2 - 1}{x - 1} &= \displaystyle\lim_{x \to 1} \dfrac{(x - 1)(x + 1)}{x - 1} \\\\
  \\\\
  &= \displaystyle\lim_{x \to 1} x + 1
  \end{aligned}
  $$

  As you can see, after factorising this example then reduces down to a problem where you can use direct substitution. Remember that while cancelling a function down may change the value at $a$, to find a limit we only need to consider values sufficiently close to $a$.

- Rationalising the function <br>
  Sometimes, especially when dealing with functions containing roots, limit laws cannot be applied right away so we need to rationalise the function. This involves multiplying the whole function by the root over itself, eliminating it without changing the value of any given fraction. Be careful of any negated values and ensure you have your signs correct.

  This is also very often followed by a cancellation step so watch out for values that can be factorised. Speaking of correct negation signs, recall difference of two squares:

  $$(a + b)(a - b) = a^2 - b^2$$

## L'hopitals rule

Suppose you need to find the limit of a function that is the quotient of two separate functions of $x$ where the limits of each individually are either both 0 or both infinity. If this is the case then:

$$\displaystyle\lim_{x \to a} \dfrac{f(x)}{g(x)} = \displaystyle\lim_{x \to a} \dfrac{f'(x)}{g'(x)}$$

## The squeeze theorem

Despite all of the different techniques for calculating limits, there are still times when it is not possible. However, in these cases, there are other rules we can use to find a limit, one of which is the squeeze theorem. This dictates that if the limit of a function $f$ is not known as $x$ approaches $a$ but we have two other functions that bound $f$ on either side such that if:

$$
g(x) \le f(x) \le h(x) \\\\
\displaystyle\lim_{x \to a} g(x) = \displaystyle\lim_{x \to a} h(x) = L.
$$

Then:

$$\displaystyle\lim_{x \to a} f(x) = L$$
