## Probabolistic classification

In the previous topic, we examined classification of data where there are generally clear lines to separate categories and a high degree of accuracy. Unfortunately, the real world is often messier than that and requires more estimation to determine properties of data.

The probability you have learned this year and in previous maths courses is referred to as 'theoretical probability' where you calculate the likelihood that an event _should_ happen. When working on machine learning this can often differ widely from actual results and so instead we focus on 'empirical probability' based on the data you are given.

## Naive Bayes

Decision-making probabilities will often take the form:

$$\Bbb{P}(H|E)$$

Where you are given a property, $E$, of the data object and asked to determine the likelihood of hypothesis $H$.

Using Bayes more formally, you are given a set of classes ${C = \\{1,...,K\\}}$ where $C_k$ is used to denote ${C = k}$ with input feature ${X = x}$.

Each part of the Bayes equation is labelled below:

$$
\overbrace{\Bbb{P}(C_k|x)}^{\text{posterior}} = \dfrac{\overbrace{\Bbb{P}(x|c_k)}^{\text{likelihood}} \\, \overbrace{\Bbb{P}(C_k)}^{\text{prior}}}{\Bbb{P}(x)}
$$

## Practical calculations

When using this in practical calculations, there are two directions of thought. In order to compute the denominator of the above fraction you can use:

$$\Bbb{P}(x) = \displaystyle\sum_{j=1}^K \Bbb{P}(x|C_j)\Bbb{P}(C_j)$$

Where these values should be more or less provided to you in the data. $\Bbb{P}(x|C_j)$ is the number of samples found in that category divided by the total number collected and $\Bbb{P}(C_j)$ is simply 1 over the number of categories.

However, an important observation is that:

$$\Bbb{P}(C_k|x) \propto \Bbb{P}(x|C_k)\Bbb{P}(C_k)$$

This means that if you are asked to find the posterior probabilities then you need to do the full calculation to determine the answer. However, if a question only asks you to determine which class a data object will be in based on the data then you can do two much simpler calculations and then just compare which one is higher.

This Bayes method gives the minimum error rate and it is often referred to as either:

- Minimum error rate classification
- Maximum posterior probability decision rule

## Identifying spam

One major application of probabilistic classification is the identification and prevention of spam emails.
