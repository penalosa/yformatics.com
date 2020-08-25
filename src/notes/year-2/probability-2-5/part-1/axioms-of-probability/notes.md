## Sample space & events

Following on from our counting methodology of thinking about experiments and outcomes, we now turn to look at this in a broader context. For each experiment performed, we can collect all of the possible outcomes in a set that we call the 'sample space'.

$$S = \\{ \text{all possible outcomes} \\}$$

Any subset of this total is known as an 'event'.

$$E \subset S$$

For example, let's look at rolling a fair die. The die being 'fair' means that the probabilities of all outcomes in the sample space are equal. The sample space in this case is the set of numbers 1 to 6.

$$S = \\{1,2,3,4,5,6\\}$$

Suppose we want to focus on the event that the result is an even number. That would be the subset:

$$E = \\{2,4,6\\}$$

## Union & intersection

When looking at events we can also look at multiple events at once. Continuing with our example of a fair die, consider the two events that the result is an even number and that the result is a prime number.

$$E_1 = \\{2,4,6\\}$$

$$E_2 = \\{2,3,5\\}$$

The union of these two events is the combination of all the elements of both of the sets together. In this case, all results that are even or prime or both.

$$E_1 \cup E_2 = \\{2,3,4,5,6\\}$$

![Union ven diagram](/img/union-ven.svg)

The intersection of these two events is the set that contains the elements that appear in both events. In this case, all results that are both even and prime.

$$E_1 \cap E_2 = \\{2\\}$$

![Intersection ven diagram](/img/intersection-ven.svg)

You also need to know the composite of an event. This is the rest of the sample space minus that event. It has either of the below notations:

$$E^c$$

$$S \backslash E$$

For the event that the result is an even number, the composite will be that the result is an odd number:

$$E = \\{2,4,6\\}$$

$$E^c = \\{1,3,5\\}$$

![Composite event](/img/composite-event.svg)

## Bernoulli trials

A Bernoulli trial is a random experiment with exactly two possible outcomes. These are often referred to as 'success' and 'failure' but this is just a notation for one outcome happening over the other.

For example, in the case of a fair coin flip. The event that the coin lands heads could be counted as a success and the opposite would be a failure. Other examples of Bernoulli trials include a die roll where one number is a success and all others are a failure or picking the top card out of a shuffled deck where one particular card or any card of one particular suit is a success and all others are a failure.

## Calculating probability

The probability $\Bbb{P}$ of an event is a measure of how likely it is that a given event will occur. This is a number defined for each event between 0 and 1.

In it's simplist form:

$$\Bbb{P}(E) = \dfrac{\text{\\# event outcomes}}{\text{\\# total outcomes}}$$

<!-- We will also see that for any sequence of mutually exclusive events:

$$\Bbb{P}(\bigcup\limits_{i=1}^{\infty}E_i) = \sum\limits_{i=1}^{\infty} \Bbb{P}(E_i)$$ -->

Some key properties of probability are:

$\Bbb{P}(S) = 1$

$\Bbb{P}(\emptyset) = 0$

$\Bbb{P}(E^c) = 1 - \Bbb{P}(E)$

## Inclusion-exclusion principle

Now combining the above two sections, we can determine how to calculate the probability of the union of two events. The obvious method here is to simply add the individual probabilities of each event together.

$$\Bbb{P}(E_1 \cup E_2) = \Bbb{P}(E_1) + \Bbb{P}(E_2)$$

Here is where we come across a problem where we have to account for whether the two events are mutually exclusive or not.

![Disjoint events](/img/disjoint-events.svg)

![Overlap of two events](/img/overlap-two-events.svg)

We can see where there is overlap between the two events, those outcomes would be double counted. In order to account for this, we use a rule called the inclusion-exclusion principle:

$$\Bbb{P}(E_1 \cup E_2) = \Bbb{P}(E_1) + \Bbb{P}(E_2) - \Bbb{P}(E_1 \cap E_2)$$

This works because when events are disjoint, their intersection is zero. By this concept we can also see that for any sequence of mutually exclusive events:

$$\Bbb{P}(\bigcup\limits_{i=1}^{n}E_i) = \sum\limits_{i=1}^{n} \Bbb{P}(E_i)$$

## Probability distribution

The probability distribution is a set of probabilities that correlate to each outcome in the subspace. Formally:

$\text{Suppose } S = \\{x_1,x_2,...,x_n\\} \text{ is finite}$

$\text{let } p_i = \Bbb{P}(x_i) \text{ for } i = 1,2,...,n$

\$\text{then } \\{p_1,p_2,...,p_n\\} \text{ represents the probability distribution}\$

<!-- This can be shown in a graph: -->

<!-- Graph -->

When the probabilities of all outcomes in the subspace are exactly equal, this is known as a uniform distribution.

<!-- Graph -->
