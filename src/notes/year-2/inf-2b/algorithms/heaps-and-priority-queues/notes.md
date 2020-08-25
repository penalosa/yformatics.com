## Stacks & queues

So far we have looked at many different types of abstract data types with different properties. Now we will look at three new ones for where you have a collection of elements that you want to access in a particular order.

- Stacks <br>
  Last-in-first-out.

- Queues <br>
  First-in-first-out.

- Priority Queues <br>
  Elements have a priority ranking associated with them. The element with the highest priority is first out.

## Priority queues

The priority ranking values used simply need to be a linearly ordered set but there is no need for values to be consecutive or regularly periodic, as long as they can be compared. This type of abstract data type has slightly different methods it uses:

- insertItem(k,e) <br>
  Insert element e with key k.

- maxElement() <br>
  Return the element with the maximum key, this can be measured as the highest or lowest value depending on the implementation.

- removeMax() <br>
  Return the element with the maximum key and remove it from the queue.

In a binary search tree, the item with the maximum key will always be the furthest right interior vertex. This makes it a good contender for a way to implement a priority queue.

## Almost complete trees

These are a subset of binary search trees with two important properties:

- All levels except the last one must have the maximum possible number of vertices across it.

- On the second last level, all internal vertices are to the left of any leaves.

## Heaps


A heap is an almost complete binary tree whose internal vertices store items such that for every vertex $v$ other than the root, the key stored
at $v$ is smaller than or equal to the key stored at the parent of $v$. Where the maximum element is at the root.
For all $n$ with $2^{h-1}$ $\leq$ n $\leq$ $2^{h} - 1$ we have $\lfloor{lg(n)}\rfloor = h - 1$.
The last vertex of a heap of height h is the right-most internal vertex in the $h^{th}$ level.


To find the maximum element in the heap:
```
function maxElement()
    return root.element
```

To remove the last element (last vertex) in the heap:
```
function removeMax()
    e = root.element
    root.element = last.item
    delete last
    heapify(root)
    return e

function heapify()
    if v.left is an internal vertex and v.left > v.key then
      s = v.left
    else
      s = v.key

    if v.right is an internal vertex and v.right > v.key then
      s = v.right

    if v != s then
      swap the items of v and s
      heapify(s)
```

To insert an item to last vertex in the heap, and swaps $v$ with $v$.parent if $v$'s key is bigger:
```
function insertItem(k, e)
   Create new last vertex v.
   while v is not the root and k > v.parent.key do
   store the item stored at v.parent at v
   v = v.parent
   store (k, e) at v
```


## Heaps as arrays
The items of the heap are stored in an array, with the internal vertices as indices of the array by numbering them level-wise from the left to the right. The $\lfloor{\frac{n-2}{n}}\rfloor$ is the maximum $v$ such that $2v + 1 \leq n - 1$.

To turn the heap into an array:
```
function buildHeap(H)
   n = H.length
   for v = floor((n-2)/2) downto 0 do
   for v =
   heapify(v)
```

