## Introduction

A graph consists of a non-empty set of vertices and a set of edges that connect pairs of vertices. There are many different types of graphs that have different formal definitions which we will cover in more detail in this topic.

## Undirected graphs

A simple undirected graph, $G = (V,E)$, consists of a non-empty set V of vertices, and a set $E \subset [V]^2$ of undirected edges. Every edge $\\{u,v\\} \in E$ has two distinct vertices $u \mathrlap{\\,/}{=} v$ as endpoints, and such vertices $u$ and $v$ are then said to be adjacent in the graph.

## Directed graphs

Adirected graph, $G = (V,E)$, consists of a non-empty set $V$ of vertices, and a set $E \subset [V]^2$ of directed edges. Each directed edge $(u,v) \in E$ has a start vertex $u$, and an end vertex $v$.

## Multigraphs & pseudographs

Both directed and undirected multigraphs are very similar to normal directed and undirected graphs except they allow for multiple edges between any two vertices. Be careful as this definition differs slightly from the Rosen textbook where their definition allows for loops but the one used in this course does not.

Both directed and undirected pseudographs are very similar to directed and undirected multigraphs except they allow for loops from a vertex to itself, including multiple loops.

## Degree & neighbourhood

The degree of a vertex $v$ in an undirected graph is the number of edges incident with it. The degree of the vertex $v$ is denoted by $\text{deg}(v)$.

An undirected graph has an even number of vertices of odd degree.

For directed graphs, the 'in-degree' of a vertex $v$, denoted $\text{deg−}(v)$, is the number of edges directed into $v$. The 'out-degree' of $v$, denoted $\text{deg+}(v)$, is the number of edges directed out of $v$. Note that a loop at a vertex contributes 1 to both in-degree and out-degree.

The neighbourhood of a vertex $v$ in an undirected graph, denoted $N(v)$, is the set of vertices adjacent to $v$.

## Handshaking theorem

Let $G = (V,E)$ be an undirected graph with $m$ edges, then:

$$2m = \displaystyle\sum_{v \in V} \text{deg}(v)$$

Each edge contributes twice to the degree count of all vertices. Hence, both the left-hand and right-hand sides of this equation equal twice the number of edges.

## Complete graphs

A complete graph on $n$ vertices, denoted by $K_n$, is the simple graph that contains exactly one edge between each pair of distinct vertices.

![Complete graphs](/img/complete-graphs.svg)

## Cycles

A cycle for $n \ge 3$, denoted by $C_n$, consists of n vertices $v_1,v_2,...,v_n$, and edges $\\{v_1,v_2\\},\\{v_2,v_3\\},...,\\{v_{n-1},v_n\\},\\{v_n,v_1\\}$.

<!-- This definition needs some work -->

![Cycles](/img/cycles.svg)

## n-Cubes

An n-dimensional hypercube, or n-cube, is a graph with $2^n$ vertices representing all bit strings of length n, where there is an edge between two vertices if and only if they differ in exactly one bit position.

![n-Cubes](/img/n-cubes.svg)

<!-- There is more info on this in the textbook -->

## Bipartite graphs

An equivalent definition of a bipartite graph is one where it is possible to colour the vertices either red or blue so that no two adjacent vertices are the same colour.

![Bipartite graph](/img/bipartite-graph.svg)

A graph can be shown to be bipartite by splitting its set to vertices $V$ into two subsets where none of the vertices in a given subset are neighbours.

A complete bipartite graph is a graph that has its vertex set partitioned into two subsets $V_1$ of size $m$ and $V_2$ of size $n$ such that there is an edge from every vertex in $V_1$ to every vertex in $V_2$.

<!-- Diagram -->

A bipartite graph is called $k$-regular if every vertex in $G$ has degree exactly $k$.

## Matchings

A matching, $M$, in a graph, $G = (V,E)$, is a subset of edges, $M \subseteq E$, such that there does not exist two distinct edges in $M$ that are incident on the same vertex. In other words, if $\\{u,v\\},\\{w,z\\} \in M$, then either $\\{u,v\\} = \\{w,z\\}$ or $\\{u,v\\} \cap \\{w,z\\} = \emptyset$.

A maximum matching in graph $G$ is a matching in $G$ with the maximum possible number of edges.

For a graph $G = (V,E)$, we say that a subset of edges, $W \subseteq E$, covers a subset of vertices, $A \subseteq V$, if for all vertices $u \in A$, there exists an edge $e \in W$, such that $e$ is incident on $u$, i.e. such that $e = \\{u,v\\}$, for some vertex $v$.

In a bipartite graph $G = (V,E)$ with bipartition $(V_1,V_2)$, a complete matching with respect to $V_1$, is a matching $M' \subseteq E$ that covers $V_1$, and a perfect matching is a matching, $M* \subseteq E$, that covers $V$.

<!-- There is more on this after Hall's -->

## Subgraphs

A subgraph of a graph $G = (V,E)$ is a graph $H = (W,F)$, where $W \subseteq V$ and $F \subseteq E$. A subgraph $H$ of $G$ is a proper subgraph of $G$ if $H \mathrlap{\\,/}{=} G$.

<!-- Diagram -->

Let $G = (V,E)$ be a graph. The subgraph induced by a subset $W$ of the vertex set $V$ is the graph $H = (W,F)$, whose edge set $F$ contains an edge in $E$ if and only if both endpoints are in $W$.

Formally, a bipartite graph is a undirected graph $G = (V,E)$ whose vertices can be partitioned into two disjoint sets $(V_1,V_2)$, with $V_1 \cap V_2 = \emptyset$ and $V_1 \cup V_2 = V$, such that for every edge $e \in E$, $e = \\{u,v\\}$ such that $u \in V_1$ and $v \in V_2$. In other words, every edge connects a vertex in $V_1$ with a vertex in $V_2$.
