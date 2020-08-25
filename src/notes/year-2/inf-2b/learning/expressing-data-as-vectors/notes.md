## Machine learning

At a basic level, machine learning is the process of collecting a bunch of data to train a computer what to look for in order to allow it to match new data with the existing set to identify patterns. Some exaples of this inclue vision, graphics, natural language processing, robotics and Compilers.

## Raw data to numbers

The first step in building any machine learning model is to convert the raw data, which computers niether understand nor know how to work with, to numbers which can allow us to do calculations on it. While it is up to humans to decide on some of the parameters of the model, using data in this way has been found to be far more accurate and robust than human-written rules to define things.

## Classes

One way that computers can help interpret data is to divide it into classes and then match new data to one of those classes. This is normally done by percentage comparison rather than absolute true/false to allow for edgecases, but it has been found to be incredibly accurate. We call this kind of system a 'classifier'.

## Graphing data

Let's take the exaple of a classifier for lemons and oranges. One way we could analyse the images is to measure the height and width of the fruit.

<!-- Insert diagram -->

![Measuring fruit](/img/measuring-fruit.png)

We can then graph this data to make it easier to visually compare them and see if we can identify any trends.

<!-- Insert graph -->

![Fruit graph](/img/fruit-graph.svg)

## Pixelation

One of the most common ways of training vision models and image classifiers is to pixelate the image and then use that as a data point.

![Pixelated A](/img/pixelated-a.svg)
