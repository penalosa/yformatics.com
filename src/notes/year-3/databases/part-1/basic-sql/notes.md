## The data model

## Query language

SQL stands for Structured Query Language. It is a declarative language for relational databases established in the 1980s. It can be broken down into two sublanguages:

- DDL (Data Definition Language) which operates on the schema.
- DML (Data Manipulation Language) which operates on the instance.

## Tables

Creation

```
CREATE TABLE <table_name> (
    <column1> <type1>,
    <column2> <type2>,
    ...
    <columnN> <typeN>
);
```

Data types

Default values

```
CREATE TABLE <table_name> (
    <column1> <type1>,
    <column2> <type2> DEFAULT <value>,
    ...
    <columnN> <typeN>
);
```

Populating

```
INSERT INTO <table_name> VALUES (...), ..., (...);
```

Destroying

## Basic queries

The basic structure of an SQL query is:

```
SELECT <list_of_attributes> FROM <list_of_tables> WHERE <condition>
```

You can also return all the attributes available by using an `*`.

## Multiple tables

When more than one table is notes in the FROM, each of those tables are concatinated together.

## Database modification

## Explicit syntax

## Renaming variables
