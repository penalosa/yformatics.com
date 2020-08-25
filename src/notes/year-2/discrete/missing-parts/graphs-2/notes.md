## Hall's marriage theorem

For a bipartite graph $G = (V,E)$, with bipartition $(V_1,V_2)$, there exists a matching $M \subseteq E$ that covers $V_1$ if and only if for all $S \subseteq V_1, |S| \le |N(S)|$.

<!-- More proof of this ect? -->

## Adjacency matrices

An adjacency list represents a graph by specifying the vertices that are adjacent to each other vertex.

Suppose that $G = (V,E)$ is a simple graph where $|V| = n$. Arbitrarily list the vertices of $G$ as $v_1, v_2, ..., v_n$.

The adjacency matrix, $A$ of $G$, with respect to this listing of vertices, is the $n \times n$ binary matrix with its (i,j)th entry equal to 1 when $v_i$ and $v_j$ are adjacent, and equal to 0 when they are not adjacent.

The adjacency matrix of an undirected graph is always symmetric. Also, if there are no loops, each diagonal entry is zero.

When multiple edges connect vertices $v_i$ and $v_j$, the (i,j)th entry equals the number of edges connecting the pair of vertices.

Adjacency matrices can represent directed graphs in exactly the same way. The matrix $A$ for a directed graph $G = (V,E)$ has a 1 in its (i,j)th position if there is an edge from $v_i$ to $v_j$, where $v_1, v_2, ..., v_n$ is a list of the vertices.

## Isomorphism

Two undirected graphs $G_1 = (V_1,E_1)$ and $G_2 = (V_2,E_2)$ are isomorphic if there exists a bijection, $f: V_1 \to V_2$, with the property that for all vertices $a,b \in V_1$.

Such a function $f$ is called an 'isomorphism'. Intuitively, isomorphic graphs are 'the same', except for 'renamed' vertices.

It is difficult to determine whether two graphs are isomorphic by brute force: there are n! bijections between vertices of two n-vertex graphs. Often, we can show two graphs are not isomorphic by finding a property that only one of the two graphs has. Such a property is called the 'graph invariant'. For example, the number of vertices of a given degree.

## Paths

Informally, a path is a sequence of edges connecting vertices.

Formally, an undirected graph $G = (V,E)$, an integer $n \ge 0$, and vertices $u,v \in V$, a path of length $n$ from $u$ to $v$ in $G$ is a sequence:

$$x_0, e_1, x_1, e_2,...,x_{n−1}, e_n, x_n$$

of interleaved vertices $x_j \in V$ and edges $e_i \in E$, such that $x_0 = u$ and $x_n = v$, and such that $e_i = \\{x_{i−1},x_i\\} \in E$ for all $i \in \\{1,...,n\\}$. Such a path starts at $u$ and ends at $v$.

A path of length $n \ge 1$ is called a 'circuit' if the path starts and ends at the same vertex. A path or circuit is called 'simple' if it does not contain the same edge more than once.

## Connectedness

An undirected graph $G = (V,E)$ is called 'connected' if there is a path between every pair of distinct vertices.

There is always a simple path between any pair of vertices $(u,v)$ of a connected undirected graph $G$.

A connected component $H = (V',E')$ of a graph $G = (V,E)$ is a maximal connected subgraph of $G$, meaning $H$ is connected and $V' \subseteq V$ and $E' \subseteq E$, but $H$ is not a proper subgraph of a larger connected subgraph $R$ of $G$.

A directed graph $G = (V,E)$ is called 'strongly connected', if for every pair of vertices $u$ and $v$ in $V$, there is a directed path from $u$ to $v$, and a directed path from $v$ to $u$.

A 'strongly connected component' of a directed graph $G$, is a maximal strongly connected subgraph $H$ of $G$ which is not contained in a larger strongly connected subgraph of $G$.

A directed acyclic graph is a directed graph that contains no circuits or loops.

## Euler paths & circuits

An Euler path in a multigraph $G$ is a simple path that contains every edge of $G$.

An Euler circuit in a multigraph $G$ is a simple circuit that contains every edge of $G$.

A connected undirected multigraph with at least two vertices has an Euler circuit if and only if each of its vertices has even degree.

A connected undirected multigraph $G$ has an Euler path which is not an Euler circuit if and only if $G$ has exactly two vertices of odd degree.

## Hamiltonian paths & circuits

A Hamiltonian path in an undirected graph $G$ is a simple path that visits every vertex exactly once.

A Hamiltonian circuit in an undirected graph $G$ is a simple circuit that passes through every vertex, except for the common start and end, exactly once.

Ore’s theorem states every simple undirected graph, $G = (V,E)$, with $n \ge 3$ vertices, in which $\text{deg}(u) + \text{deg}(v) \ge n$ for every two non-adjacent vertices $u$ and $v$ in $V$, has a Hamiltonian circuit.

Dirac’s theorem states every simple undirected graph, $G = (V,E)$, with $n \ge 3$ vertices, in which $\text{deg}(u) \ge \frac{n}{2}$ for all vertices $u \in V$, has a Hamiltonian circuit.

## Dijkstra's algorithm

An edge-weighted directed graph, $G = (V,E,w)$, has a function $w: E \to \N$ which maps each edge to to a non-negative integer.

Consider a directed path:

$$x_0e_1x_1e_2...e_nx_n$$

from $u = x_0 \in V$ to $v = x_n \in V$, in graph $G = (V,E,w)$. The length of this path is defined to be:

$$\displaystyle\sum\limits_{i=0}^{n} w(x_{i-1},x_i)$$

```
Initalise: S = {s}; L(s) = 0;
Initalise: L(v) = w(s,v), for all v in V-{s};
While (S != V) do
    u = arg(min(z in V-S)) {L(z)};
    S = S U {u};
    For all v in V-S such that (u,v) in E do
        L(v) = min(L(v), L(u) + w(u,v));
    End for
End while
Output function L(.);
```

**Read up more on this.**

## Graph colouring

Suppose we have $k$ distinct colours with which to colour the vertices of a graph. Let $[k] = {1,...,k}$. For an undirected graph, $G = (V,E)$, an admissible vertex k-colouring of $G$ is a function $c: V \to [k]$, such that for all $u,v \in V$, if $(u,v) \in E$ then $c(u) {=}\mathllap{/\\,} c(v)$.

For an integer $k \ge 1$, we say an undirected graph $G = (V,E)$ is k-colourable if there exists a k-colouring of $G$. The chromatic number of $G$, denoted $χ(G)$, is the smallest positive integer $k$, such that $G$ is k-colourable.

Example

## Ramsey’s theorem
