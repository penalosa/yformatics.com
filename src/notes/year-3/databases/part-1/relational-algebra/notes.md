## Algebra expressions

These statements take in a series of relations, applies a sequence of operations and returns the output. Think of it as the mathematical definition of database manipulation.

Projection ($\pi$)

This is a vertical operation where you choose some of the columns. It's syntax is as follows:

$$\pi_\text{set of attributes}(\text{relation})$$

Selection ($\sigma$)

This is a horizontal operation where you choose rows satisfying some condition. It's syntax is as follows:

$$\sigma_\text{condition}(\text{relation})$$

Product ($\times$)

Also called the Cartesian product, it essentially joins two tables such that it concatenates each tuple of $R$ with all the tuples of $S$.

To join with a particular attribute across tables you need to combine product with selection.

Renaming ($\rho$)

Simply gives a new name to an attribute in a table. It's syntax is as follows:

$$\rho_{\text{old} \to \text{new}}(\text{relation})$$

## Converting from SQL

When converting from SQL to relational algebra or vise versa here is the basic conversion:

SELECT $\to$ Projection ($\pi$)

WHERE $\to$ Selection ($\sigma$)

FROM $\to$ Product ($\times$)

JOIN $\to$ Product ($\times$) + Selection ($\sigma$)

Renaming depends on the nature of the output requested.

## Set operations

Union ($\cup$)

Intersection ($\cap$)

Difference ($-$)

## Derived operations

Although the 4 basic operations are outlined above, there are others that can be derived from those and given their own symbol for convenience.

Natural join ($\Join$)

Joins two tables on their common attributes.

## Division
