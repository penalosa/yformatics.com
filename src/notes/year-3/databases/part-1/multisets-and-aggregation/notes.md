## Duplicates

In relational algebra, a projection on a relation produces a set. A set cannot have duplicate values so all some rows may be left out. However, using SQL SELECT returns all rows in given columns including duplicates. This type of response is called a 'bag'.

## Multiset bags

As explained above, a bag is essentially a set with duplicates. This is also referred to interchangeably as a multiset.

The number of occourences of an element is called its multiplicity.

## RA on bags

We can still do relational algebra with bags. The only difference is that it will return bags of tuples instead of sets of tuples.

Projection latex

Selction latex

## Duplicate elimination

## SQL on bags

## Aggregation functions

- `MIN`
- `MAX`
- `COUNT`
- `SUM`
- `AVG`
