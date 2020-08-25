## Process

Although you may not have an instinctual idea for how to sketch complex functions, the process for doing it is actually quite formulaic.

1. Determine the domain of the function

2. Find the axis intercepts

3. Determine if there is any symmetry

4. Determine if there are any asymptotes

5. Determine the intervals over which the function is increasing & decreasing

6. Find any local maxima & minima

7. Determine the concavity of the points of infection

Once all of this information is found, sketching the graph is just a matter of putting it all together. Each of the steps is outlined in more detail below.

## Example question

In order to demonstrate each step in the process, let's look at a specific example.

Sketch the graph of the function:

$$f(x) = ln(sin (x))$$

## Domain

As you saw in the first topic, the domain of a function shows the range of values on which the function is defined. To do this for a composite function like our example, we must look at the domain for each function part individually.

- Domain of $sin(x)$ <br>
  $sin(x)$ is defined for all $x \in \Bbb{R}$.

- Domain of $ln(y)$ <br>
  $ln(y)$ is defined for all $y \gt 0$ where $y = sin(x)$.

Since $sin(x) \gt 0$ at $x \in ... \cup (-2\pi,-\pi) \cup (0,\pi) \cup (2\pi,3\pi) \cup ...$

That also gives the domain of $ln(sin (x))$.

## Axis intercepts

To find the y-intercepts and x-intercepts, we need to compute our function at ${x = 0}$ and at ${y = 0}$.

$$
\begin{aligned}
f(0) &= ln(sin(0)) \\\\
&= ln(0)
\end{aligned}
$$

Since $ln(0)$ is not defined, there are no y-intercepts.

$$
\begin{aligned}
f(x) &= 0 \\\\
ln(sin(x)) &= 0 \\\\
&\Rightarrow sin(x) = 1 \\\\
&\Rightarrow x = \dfrac{\pi}{2} + 2u\pi, u \in \Bbb{Z}
\end{aligned}
$$

For each multiple of $\pi$, given by each value of $u$, we will get a different value from our equation. This means, in this case, there are infinitely many x-intercepts.

## Symmetry

Determining if a function has symmetry is simply a matter of working out if the function is odd or even and if it is periodic.

A function is periodic if $f(x + period) = f(x)$.

$$
\begin{aligned}
f(x + 2\pi) &= ln(sin(x + 2\pi)) \\\\
&= ln(sin(x)) \\\\
&= f(x) \\\\
&\Rightarrow \text{period} = 2\pi
\end{aligned}
$$

A function is odd if $f(-x) = -f(x)$ and even if $f(-x) = f(x)$.

One way to determine this is to simply compute these equalities. However, in this case there is an easier and quicker method. We can draw out the domain we have already calculated and see if there is any symmetry in that.

![Ranges of domain](/img/ranges-of-domain.svg)

As there is no symmetry with respect to the origin, we can say this funcion is neither odd nor even.

## Asymptotes

## Increasing & decreasing

## Maxima & minima

## Concavity

## Sketch

Now that we have all of the information we need, we can use this to sketch the graph. Start with the axis intercepts and Asymptotes to mark where the lines go to and then use the increasing, decreasing and concavity values to draw in the connecting lines.

![Sketch](/img/sketch.svg)
