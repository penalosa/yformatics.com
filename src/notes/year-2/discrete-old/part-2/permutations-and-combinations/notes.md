## Permutations

Now that we have established all the different things to think about when calculating the total number of possibilities, we also need to look at another scenario that makes things more complicated.

What if we wanted to calculate the number of possible subsets under certain conditions from a larger set?

For example, what if we have a group of 5 women and 7 men and we want to select 3 women and 3 men for a committee. How many possible combinations of people on the committee could we have?

This is where choose comes in, a situation where you have to pick $k$ objects from $n$ options:

$$\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$$

For this example we have two distinct categories to pick objects from.

$$
\begin{aligned}
n &= \dbinom{5}{3} \dbinom{7}{3} \\\\
\\\\
&= \dfrac{5!}{3!(5-3)!} \times \dfrac{7!}{3!(7-3)!} \\\\
\\\\
&= \dfrac{5!}{3!2!} \times \dfrac{7!}{3!4!} \\\\
\\\\
&= 10 \times 35 \\\\
\\\\
&= 350
\end{aligned}
$$

