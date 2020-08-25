## Binary search trees

The official definition of a binary tree is that it is either empty or has a root vertex with a left and/or a right child, each of which is also a tree. This is a recursive datatype so the definition applies at any given vertex. These vertices fall into two types:

- Internal vertex <br>
  This type of vertex has one or two children where a choice can be made to travel to either.

- Leaf vertex <br>
  This type of vertex has no children and is the end of a given path.

An internal vertex with one or both children being leaves is called a near leaf vertex.

A tree structure is specifically a binary search tree if, for every internal vertex:

- The key of that vertex is greater than or equal to every key in its left subtree.
- The key of that vertex is less than or equal to every key in its right subtree.

The leaves of the tree are kept empty to that $null$ can be returned when methods hit the end of a path.

## Tree height

The height of a vertex is measured by the maximum length of a path downwards to a leaf of the tree. The overall height of a tree is defined as the height of the root vertex.

If we were to use a binary search tree as an implementation of a dictionary then we would use methods findElement, insertItemBST and removeItemBST. Each would have runtime $\Theta(h)$ where $h$ is the height of the tree.

When talking about a 'level' of a tree we are referring to how many steps that level is from the root where the root is level 0.

## AVL trees

A vertex of a tree is considered balanced if the heights of its children differ by at most one. An AVL tree is a binary search tree in which all vertices are balanced.

This slight difference in balancing the tree can actually make a big difference in its use. Now if we were to implement a dictionary using it then findElement, insertItem and removeItem all have runtime $\Theta(ln(n))$ where $n$ is the number of items stored in the tree.

The only problem with AVL trees is that inserting or removing an item can mean that the new tree is no longer an AVL tree by making it unbalanced.

## Rebalancing

In order to ensure that an AVL stays balanced when items are added or removed we may need to restructure it a bit. This is done by rotating either clockwise or anticlockwise at the unbalanced vertex. In its simplist form, this looks something like this:

![Clockwise rebalancing](/img/clockwise-rebalancing.svg)

Remember that this must still adhere to the rules of binary search trees by having all keys of left children be lower and right children be higher.

<!-- ## Insertions

## Removals -->
