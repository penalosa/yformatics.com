## Definition

A graph is made up of two sets. One is a non-empty set of vertices and the other is a set of edges which span pairs of vertices. However, there are many different ways that this can be arranged.

- Simple undirected graph

- Complex undirected graph

- Simple directed graph

- Complex directed graph

- Undirected multigraph

- Directed multigraph

- Undirected pseudograph

- Directed pseudograph

## Directed & undirected

A directed graph, $G = (V,E)$, consists of a non-empty set, $V$, of vertices, and a set $E \subseteq V \times V$ of directed edges. Each directed edge $(u,v) \in E$ has a start vertex $u$, and an end vertex $v$.

A simple undirected graph, $G = (V,E)$, consists of a non-empty set $V$ of vertices, and a set $E \subseteq [V]^2$ of edges. Every edge ${u,v} \in E$ has two distinct vertices $u = \not v$ as endpoints, and such vertices $u$ and $v$ are then said to be adjacent in the graph.

## Degree & neighbourhood

The degree of a vertex $v$ in an undirected graph is the number of edges incident with it. It is denoted $\text{deg}(v)$.

The neighbourhood (neighbour set) of a vertex $v$ in an undirected graph is the set of vertices adjacent to $v$. It is denoted $N(v)$.

## Handshaking theorem

If $G = (V,E)$ is an undirected graph with $m$ edges then:

$$2m = \displaystyle\sum_{v \in V}^{} \text{deg}(v)$$

An undirected graph has an even number of vertices that are of odd degree.

## Something

## Complete graphs

A complete graph on $n$ vertices, denoted by $K_n$, is the simple graph that contains exactly one edge between each pair of distinct vertices.

<!-- Diagram -->

## Cycles

A cycle $C_n$ for $n \ge 3$ consists of $n$ vertices $v_1, v_2, \\, ... \\, , v_n$ and edges $\\{v_1,v_2\\}, \\{v_2,v_3\\}, \\, ... \\, , \\{v_{n-1},v_n\\}, \\{v_n,v_1\\}$.

<!-- Diagram -->

## n-cubes

An n-dimensional hypercube or n-cube, is a graph with $2^n$ vertices representing all bit strings of length $n$, where there is an edge between two vertices iff they differ in exactly one bit position.

## Bipartile graphs

## Subgrphs

A graph $G = (V,E)$ has a subgraph $(W,F)$ where $W \subseteq V$ and $WF\subseteq E$. A subgraph $H$ of $G$ is a proper subgraph of $G$ if $H = \not G$.

## Matchings

## Hall's marriage theorem

## Adjacency lists

## Adjacency matrices

## Isomorphism

Two undirected graphs $G_1 = (V_1,E_1)$ and $G_2 = (V_2,E_2)$ are isomorphic if there is a bijection $f: V_1 \to V_2$, with the property that for all vertices $a,b \in V_1$:

$$\\{a,b\\} \in E_1 \quad \text{iff} \quad \\{f(a),f(b)\\} \in E_2$$

Intuitively, isomorphic graphs are "the same".

Showing two graphs are not isomorphic can be done by finding a property that only one graph has. This property is called the graph invariant. For example, the number of vertices of a given degree or the sequence of degrees.

One method of finding an isomorphism is matching each vertex in one graph to the other using brute force.

## Paths

A path is a sequence of edges connecting vertices.

## Euler paths

An Euler path in a multigraph $G$ is a simple path that contains every edge of $G$, so every edge occurs exactly once in the path.

An Euler circuit in a multigraph $G$ is a simple circuit that contains every edge of $G$, so every edge occurs exactly once in the circuit.

A connected undirected multigraph $G$ with at least two vertices has an Euler circuit iff all vertices of $G$ have even degree.

A connected undirected multigraph $G$ has an Euler path with is not an Euler circuit iff $G$ has exactly two vertices of odd degree.

## Hamiltonian paths

A Hamiltonian path in an undirected graph $G$ is a simple path that passes through every vertex of $G$ exactly once.

A Hamiltonian circuit in an undirected graph $G$ is a simple circuit that passes through every vertex of $G$ exactly once.

There is no efficient algorithm for determining whether a given graph has a Hamiltonian path or circuit. However, there are sufficient criteria that guarantee the existence of a Hamiltonian circuit.

- Ore's Theorem <br>
  Every simple undirected graph $G = (V,E)$ with $n \ge 3$ vertices, in which $\text{deg}(u) + \text{deg}(v) \ge n$ for every two non-adjacent vertices $u$ and $v$ in $V$, has a Hamiltonian circuit.

- Corollary (Dirac's Theorem) <br>
  Every simple undirected graph $G = (V,E)$, with $n \ge 3$ vertices, in which $\text{deg}(u) \ge n/2$ for all vertices $u \in V\$, has a Hamiltonian circuit.
