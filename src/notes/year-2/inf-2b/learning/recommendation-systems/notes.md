## Introduction

For this topic, we will be analysing a specific example of a basic recommendation system in order to keep things simple. Imagine a film & tv streaming service such as Netflix, how do they accurately suggest what you should watch?

## Training data

Before we even start looking at new users to recommend movies to, we need to establish a model for which kinds of films are enjoyed by which kinds of people. To keep our example simple we are going to do this by taking the reviews of six different films by six different critics. The rating that each critic gave each film is given in the table below.

$$
\begin{array}{c|cccccc}
 & \text{Critic 1} & \text{Critic 2} & \text{Critic 3} & \text{Critic 4} & \text{Critic 5} & \text{Critic 6} \\\\
\hline
\text{Film 1} & 3 & 7 & 7 & 5 & 5 & 7 \\\\
\text{Film 2} & 7 & 5 & 5 & 6 & 8 & 7 \\\\
\text{Film 3} & 4 & 5 & 5 & 8 & 8 & 8 \\\\
\text{Film 4} & 9 & 3 & 0 & 5 & 8 & 4 \\\\
\text{Film 5} & 9 & 8 & 8 & 9 & 10 & 7 \\\\
\text{Film 6} & 7 & 8 & 4 & 8 & 9 & 8
\end{array}
$$

This can then be expressed as a maxtrix $X_{mc}$, and each critic could be expressed as an individual vector in the form $X_c = (x_{c1},...,x_{cM})$.

$$
\left[
\begin{array}{cccccc}
3 & 7 & 7 & 5 & 5 & 7 \\\\
7 & 5 & 5 & 6 & 8 & 7 \\\\
4 & 5 & 5 & 8 & 8 & 8 \\\\
9 & 3 & 0 & 5 & 8 & 4 \\\\
9 & 8 & 8 & 9 & 10 & 7 \\\\
7 & 8 & 4 & 8 & 9 & 8
\end{array}
\right]
$$

Each column vector is called a 'feature vector'. We like to always work with vertical vectors becasue they are better to compute.

## Introducing new data

Now that we have our table of training data in a form we can compute, we can turn our attention to new user data. Here we have a similar table but showing two users who have only seen and rated two or three films of the six.

$$
\begin{array}{c|cc}
 & \text{User 1} & \text{User 2} \\\\
\hline
\text{Film 1} & - & - \\\\
\text{Film 2} & - & 6 \\\\
\text{Film 3} & - & 9 \\\\
\text{Film 4} & 2 & - \\\\
\text{Film 5} & - & - \\\\
\text{Film 6} & 7 & 6
\end{array}
$$

Our goal is to predict the ratings that these users would give to the films they haven't seen to fill in the gaps in the table.

We also want to convert this table of data into vector form to allow us to do calculations with it.

## Graphing vectors

For visual purposes, we can display all of the vectors we have looked at above in a 2D vector space.

<!-- graph -->

As humans, we can see visually that the two user points are closer to critic x and critic y and therefore who these users align with most. For computers, we have to do a series of calculations in order to determine which points are closest to which. This becomes especially apparent at higher volumes of data and higher dimensions when the data can no longer be visualised in a meaningful way.

## Vector comparison

In this two-dimentional case, the equation for the distance between two data points is called the Euclidean distance and is given by:

$$\bm{u} = \dbinom{u_1}{u_2} \qquad \bm{v} = \dbinom{v_1}{v_2}$$

$$r(\bm{u},\bm{v}) = \sqrt{(u_1 - v_1)^2 + (u_2 - v_2)^2}$$

This can also be generalised for when dealing with cases in any dimention:

$$r(\bm{u},\bm{v}) = \sqrt{\sum\limits_{k=1}^{D} (u_k - v_k)^2}$$
