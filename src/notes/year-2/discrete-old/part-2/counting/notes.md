## Possible outcomes

Suppose a traveling salesman was traveling along a path between 4 cities. They start in city 1. There are 3 possible routes they could take to travel from city 1 to city 2. There are 4 possible routes they could take to travel from city 2 to city 3. There are 5 possible routes they could take to travel from city 3 to city 4. How many total possible routes could the salesman take?

The answer is given by:

$$
\begin{aligned}
n &= n_1 \times n_2 \times n_3 \times n_4 \\\\
&= 3 \times 4 \times 5 \\\\
&= 60
\end{aligned}
$$

We can formalise this with:

Consider experiments $E\_1, E\_2 \text{ ... } E\_r$.

Suppose experiment $E\_1$ has $n\_1$ outcomes.

For each outcome of experiment $E\_1$, experiment $E\_2$ has $n\_2$ outcomes.

For each outcome of experiments $E\_1$ ... $E\_i$, experiment $E\_{i+1}$ has $n\_{i+1}$ outcomes for all $i \leq r-1$.

## Accounting for repetition

Consider a 7 digit car registration plate. The first 3 characters are letters and the last 4 characters are numbers. Suppose first that repetition of characters is allowed.

There are 26 letters in the alphabet and 10 single digit numbers so the total number of possible plates in this case is given by:

$$
\begin{aligned}
n &= n_1 \times n_2 \times n_3 \times n_4 \times n_5 \times n_6 \times n_7 \\\\
&= 26 \times 26 \times 26 \times 10 \times 10 \times 10 \times 10 \\\\
&= 175,760,000
\end{aligned}
$$

Consider a 7 digit car registration plate. The first 3 characters are letters and the last 4 characters are numbers. Suppose now that repetition of characters is not allowed.

There are 26 letters in the alphabet and 10 single digit numbers but this time we need to decrease the number we have to pick from for each new character as one is used. So the total number of possible plates in this case is given by:

$$
\begin{aligned}
n &= n_1 \times n_2 \times n_3 \times n_4 \times n_5 \times n_6 \times n_7 \\\\
&= 26 \times 25 \times 24 \times 10 \times 9 \times 8 \times 7 \\\\
&= 78,624,000
\end{aligned}
$$

You can see by comparing these two examples the massive difference in the final answer that simply allowing repetition causes.

## Ordering & distinction

In the example above it was specified that 3 letters must come first on the plate and the numbers second. Now consider an example where you must consider the ordering of distinct collections.

Suppose you have 4 maths books, 3 chemistry books, 2 history books and 1 language book on a shelf. How many arrangements are there so that all books in a given subject are together?

There are two things to think about there:

- Ordering of subjects
- Ordering of books

Let:

$n_1 =$ number of subjects

$n_2 =$ number of arrangements for each subject

We can pick these number out of the question using techniques above.

$n_1 = 4$

$n_2 = m_1 \times m_2 \times m_3 \times m_4$

Where:

$m_1 = 4 \times 3 \times 2 \times 1 = 4!$ (maths)

$m_2 = 3 \times 2 \times 1 = 3!$ (chemistry)

$m_3 = 2 \times 1 = 2!$ (history)

$m_4 = 1 = 1!$ (language)

$$
\begin{aligned}
n &= n_1 \times n_2 \\\\
&= n_1 \times m_1 \times m_2 \times m_3 \times m_4 \\\\
&= 4 \times 4! \times 3! \times 2! \times 1! \\\\
&= 6912
\end{aligned}
$$

<br>

Distinction is also extremely important when considering situations where you have indistinct objects and you are looking for the total number of distinct orderings of that object.

Suppose you have 9 flags; 4 are red, 3 are blue and 2 are green. How many flag signals can you construct?

In this question, there will be some orderings of the flags that are identical due to the flags being indistinct. We need to find a way to count them while discounting repeated orderings.

You know there are 9 flags in total and how many of each colour, so let's define:

$n_t = 9$ (total)

$n_1 = 4$ (red)

$n_2 = 3$ (blue)

$n_3 = 2$ (green)

The equation to use in this context when there will be dupicates is:

$$n = \dfrac{n_t!}{n_1!n_2!...n_r!}$$

Where r is the number of distinct objects.

So in this example:

$$
\begin{aligned}
n &= \dfrac{9!}{4!3!2!} \\\\
\\\\
&= \dfrac{362880}{288} \\\\
\\\\
&= 1260
\end{aligned}
$$
