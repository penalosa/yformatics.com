## Introduction

The `NULL` is an all-purpose marker to represent incomplete information. It is also the main source of problems and inconsistencies.

Dpending on the context, `NULL` could mean there is a missing value or that a value is not applicable as there is no `undefined` in SQL.

It can behave like a constant or like an 'unknown' truth-value (true/false/null).

The ultimate meaning of `NULL` is defined by its context and the application. All that is set in stone is what is written in the SQL standard.

`NULL` values are not allowed in primary keys. Although they do seem to behave as distinct with the `UNIQUE` command because they are ignored when checking constraints. All except `NOT NULL`.

## Null in aggregation

In general, aggregate functions ignore `NULL` values in a table. The one exception to this is `COUNT(*)`.

However, the returned values of aggregate functions can be `NULL` in the event that they are undefined. Again with the exception of `COUNT` which simply returns $0$.

## Set operations

Each of the following defines how the `NULL` value behaves in set operations. The sets are defined as:

- $R = \{1, \text{NULL}, \text{NULL}\}$
- $S = \{\text{NULL}\}$

Note here `NULL` is treated like any other constant in a set and has duplicates elinimated.

```
SELECT * FROM R UNION SELECT * FROM S;
```

This would return $R \cup S = \{1, \text{NULL}\}$

```
SELECT * FROM R INTERSECTION SELECT * FROM S;
```

This would return $R \cap S = \{\text{NULL}\}$

```
SELECT * FROM R EXCEPT SELECT * FROM S;
```

This would return $R - S = \{1\}$

Adding the `ALL` keyword after the set operation turns the returns into bags instead of sets so all duplicates are included.

## Logic

SQL uses three truth values: true (t), false (f) and unknown (u).

Every comparison (except `IS [NOT] NULL` and `EXISTS`) where one of the arguments is `NULL` evaluates to unknown.

Confusingly, SQL also uses the term 'null' when refering to unknown truth values.

Here are the truth tables for `AND`, `OR` and `NOT`:

![SQL truth tables](/img/sql-truth-tables.png)

In an SQL query, only the rows where the condition evaluates to true are returned.

## Confusion

This whole topic is meant to be confusing. Many clever people have clever quotes on the oddity that is the `NULL` value.

The main thing to take from it is that you should always be thinking about your schema design to eliminate non-appliciable columns and make tables more efficient.

## Outer joins

All joins we have seen so far in the course have been `INNER` joins. This essentially means it has been an intersection or where certain fields have equal values.

Outer joins are more of a union approach. However, for tables of different sizes they may not match up. In this case we can use the rows of one table to join to certain rows of the other.

```
SELECT * FROM R LEFT [OUTER] JOIN S ON R.B = S.C;
```

Left join takes all of the rows of the `FROM` table. Where the `FROM` table does not have a corresponding row in the table being joined, these row values are filled with `NULL`.

```
SELECT * FROM R RIGHT [OUTER] JOIN S ON R.B = S.C;
```

There is also a right outer join which does the same thing but takes all of the rows of the table being joined and matches the `FROM` table to those rows.

```
SELECT * FROM R FULL [OUTER] JOIN S ON R.B = S.C;
```

Finally we also see the full outer join. This is essentially the intersection of the left and right joins.

All left, right and full outer joins will include the inner join rows in them.

## Coalescing null values

This is a way to check if certian values return `NULL` and replce them with a different expression. It has the syntax:

```
COALESCE(exp1, exp2)
```

The logic is very simple:

```
CASE WHEN exp1 IS NULL
    THEN exp2
    ELSE exp1
END
```

Used in a full SQL example:

```
SELECT COALESCE(R.A, 0) AS A FROM R;
```

This returns the row value in the row if the value of $A$ is not `NULL` and $0$ in the row if it is.
