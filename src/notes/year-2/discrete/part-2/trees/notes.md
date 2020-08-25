## Introduction

A graph $G$ is a tree if and only if there is a unique simple path between any two vertices of $G$.

Every tree, $T = (V,E)$ with $|V| \ge 2$, has at least two vertices that have degree 1.

Every tree with $n$ vertices has exactly $n-1$ edges.

## Rooted trees

A rooted tree, is a pair $(T,r)$ where $T = (V,E)$ is a tree, and $r \in V$ is a chosen root vertex of the tree. Often, the edges of a rooted tree $(T,r)$ are viewed as being directed, such that for every vertex $v$ the unique path from $r$ to $v$ is directed away from (or towards) $r$.

- For each node $v \\, {=}\mathllap{/\\,} \\, r$, the parent of that node is the unique vertex $u$ such that $(u,v) \in E$. $v$ is then called a child of $u$. Two vertices with the same parent are called siblings.

- A leaf is a vertex with no children. Non-leaves are called internal vertices.

- The height of a rooted tree is the length of the longest directed path from the root to any leaf.

- The ancestors (or descendants) of a vertex $v$ are all vertices $u \\, {=}\mathllap{/\\,} \\, v$ such that there is a directed path from $u$ to $v$ (from $v$ to $u$, respectively).

- The subtree rooted at $v$, is the subgraph containing $v$ and all its descendants.

## m-ary trees

For $m \ge 1$, A rooted tree is called a m-ary tree if every internal node has at most $m$ children. It is called a 'full' m-ary tree if every internal node has exactly $m$ children. An m-ary tree with $m = 2$ is called a binary tree.

A rooted ordered tree is a rooted tree $(T,r)$ where the children of each internal vertex $v$ are linearly ordered according to some ordering. This is normally drawn with the lower ordered child on the left and the higher ordered child on the right.

For all $m \ge 1$, every full m-ary tree with $i$ internal vertices has exactly $m(i + 1)$ vertices. Every vertex other than the root is a child of an internal vertex. There are thus $m \times i$ such children, plus 1 root.

For all $m \ge 1$, a full m-ary tree with:

- $n$ vertices has $(n−1)/m$ internal vertices and $((m−1)n+1)/m$ leaves.

- $i$ internal vertices has $m(i + 1)$ vertices and $(m−1)i + 1$ leaves.

- if $m \ge 2$, then if the m-ary tree has $l$ leaves then it has $(ml−1)/(m−1)$ vertices and $(l−1)/(m−1)$ internal vertices.

There are at most $m^h$ leaves in an m-ary tree of height $h$.

If an m-ary tree has $l$ leaves, then its height $h \ge \lceil{\log_ml}\rceil$.

## Spanning trees

For a simple undirected graph $G$, a spanning tree of $G$ is a subgraph $T$ of $G$ such that $T$ is a tree and $T$ contains every vertex of $G$.

Every connected graph $G$ has a spanning tree.

## Prim's algorithm

Input: Connected, edge-weighted, undirected graph.

Output: A minimum-cost spanning tree $T$ for $G$.

```
Initialize: T = {e}   (where e is a minimum-weight edge in E)
for i = 1 to n − 2 do
    Let e' = a minimum-weight edge incident to
             some vertex in T, and not forming a circuit
             if added toT;
    T = T ∪ {e'};
end for
Output the tree T
```
