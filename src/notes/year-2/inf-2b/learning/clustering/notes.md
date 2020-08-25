## Introduction

Clustering is a method of partitioning a data set into meaningful distinct groups based on the distances between data points. This is an unsupervised process, there are no predefined class labels.

This can be helpful when working with large data sets as it can help to understand the data, as well as allowing the data to be compressed by representing a group of vectors as a single cluster index.

## K-means clustering

One popular method of clustering is called 'K-means clustering'. This involves a repeating algorithm where K random centre points are selected to start. Each data point is assigned to the centre point nearest to it. The centre points are then moved to the mean of all the data points assigned to it. If the centre points move, then the data points are reassigned to the centre near it and the process runs again. The algorithm terminates when the centre points no longer move.

Data points are assigned by their shortest Euclidean distance to a centre point.

$$r(\bm{u},\bm{v}) = \sqrt{\sum\limits_{k=1}^{D} (u_k - v_k)^2}$$

The centre points are moved to the mean of the data points in its set.

$$\overline{x} = \displaystyle\sum \frac{x_i}{n}$$

Recall our oranges and lemons example from the first topic.

![Fruit graph](/img/fruit-graph.svg)

As this process is unsupervised, the computer does not see any predefined classes.

![Colourless graph](/img/colourless-graph.svg)

<!-- ## Measuring accuracy

## Hierarchical clustering

## Dimensionality reduction

## Principal component analysis -->
