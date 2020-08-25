## Introduction

A graph $G$ is a tree if and only if there is a unique simple path between any two vertices of $G$.

Every tree, $T = (V,E)$ with $|V| \ge 2$, has at least two vertices that have degree 1.

Every tree with $n$ vertices has exactly $n-1$ edges.

## Rooted trees

A rooted tree, is a pair $(T,r)$ where $T = (V,E)$ is a tree, and $r \in V$ is a chosen root vertex of the tree. Often, the edges of a rooted tree $(T,r)$ are viewed as being directed, such that for every vertex $v$ the unique path from $r$ to $v$ is directed away from (or towards) $r$.

- For each node $v {=}\mathllap{/\\,} r$ the parent, is the unique vertex $u$ such that $(u,v) \in E$. $v$ is then called a child of $u$. Two vertices with the same parent are called siblings.

- A leaf is a vertex with no children. Non-leaves are called internal vertices.

- The height of a rooted tree is the length of the longest directed path from the root to any leaf.

- The ancestors (descendants, respectively) of a vertex $v$ are all vertices $u {=}\mathllap{/\\,} v$ such that there is a directed path from $u$ to $v$ (from $v$ to $u$, respectively).

- The subtree rooted at $v$, is the subgraph containing $v$ and all its descendants, and all directed edges between them.

## m-ary trees

For $m \ge 1$, A rooted tree is called a m-ary tree if every internal node has at most $m$ children. It is called a full m-ary tree if every internal node has exactly $m$ children. An m-ary tree with $m = 2$ is called a binary tree.

## Spanning trees

## Prim's algorithm
