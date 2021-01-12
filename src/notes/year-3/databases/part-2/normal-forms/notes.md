## Schema design

Blah blah blah

Good design doesn't have duplicate unformation but also splits stuff up so as to keep relevant things together in a modular way.

Blah blah blah

## Boyce-Codd normal form

Referred to as BCNF.

Bad design is caused in schema which have FDs $X \to Y$ where X is not a key.

A relation is in BCNF if for every FD $X \to Y$:

- $Y \subseteq X$ or
- $X$ is a key

A databas is in BCNF if all of its relations are in BCNF.

## BCNF decomposition algorithm

Given a set of FDs and the attibutes, a decomposition of them is a set of sets of tuples. Each with a set of FDs and attributes such that the union of all attribiutes is equal to the inital list given and the FDs refer to attributes in its tuple.

This is a BCNF decomposition if each tuple set is in BCNF.

The imput to the algorithm is set of attributes and set of FDs. The general idea is to find a database schema.

See lecture 21.

## Third normal form

Referred to as 3NF.

This allows more redundancy then BCNF but can be easier.

The main points are that a set of attributes and FDs are in 3NF if for every FD $X \to Y$ one of the following holds:

- $Y \subseteq X$
- $X$ is a key
- All attributes of Y are prime

Every schema which is in BCNF is also in 3NF.

## Minimal covers

## 3NF synthesis algorithm
