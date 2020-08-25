## Dictionaries

A dictionary is a data structure which stores item pairs, each with an element and a key. Several elements can have the same key, they are not unique. There are three main functions which it uses:

- findElement(k) <br>
  If the dictionary contains an item with key k then return that element.

- insertItem(k,e) <br>
  Add an item with key k and element e.

- removeItem(k) <br>
  If the dictionary contains an item with key k then delete it and return that element.

If we were to impliment a dictionary using a linked list, as seen in the previous topic, then we would see runtimes of:

- findElement(k) - $\Theta(n)$
- insertItem(k,e) - $\Theta(1)$
- removeItem(k) - $\Theta(n)$

However, as you will see in this topic, there are far better ways to implement a dictionary.

## Direct addressing

Another way to approach implementing a dictionary is to store the elements in an array. In this case, we require the keys to be integers which are stored implicitly in the array address. This also means that each element must have a distinct key. It has all of the same functions as above, but because you can access the data directly they all have runtime $\Theta(1)$.

## Bucket arrays

If we want to remove the restriction of needing unique keys then we could alter the structure such that our array is an array of lists of elements. This solves the problem of 'collisions', where an element is attempted to be inserted into the array with a key that is already in use. In this implementation, each list is referred to as a bucket and the array is called a bucket array.

As we are dealing with lists, we have to use slightly different functions. All of them have runtime $\Theta(1)$:

- first()
- insertFirst()
- remove(1)

These are still triggered by findElement(k) and removeItem(k) but it is always the first element of the list at that key which is processed, leading to the $\Theta(1)$ runtime.

## Hash tables

While bucket arrays have their advantages, they still require the keys to be integers. To allow us to have arbitrary keys we can implement a dictionary with a hash table. We still initialise a bucket array to hold our elements with integer indexes, but this time we also use a hash function to map each key we want to use to a respective integer.

The runtime of this varies widely depending on how long it takes to compute the hash function used. In the worst case, hash tables are no more efficient than a list dictionary. However, if we were able to have a hash function that evenly distributed the keys then we could reduce the runtime by an order of magnitude.

## Hash functions

A hash function, as mentioned above, map arbitrary object keys to integers between 0 and $N-1$. Ideally, we want this to have the following properties:

- Evenly distribute the keys over the whole range
- Be easy to compute

A common strategy is to first map the arbitrary objects to integers by a function called the hash code and then map arbitrary integers to integers in the range using a function called the compression map.

<!-- ## Polynomials -->

<!-- ## Compression maps -->

## Load factors

The load factor of a hash table is calculated by the ratio of buckets that contain elements to the total number of buckets. This number is critical to performance as if it is too high then there will be many collisions but if it is too low then memory is just being wasted. A common practice for good load factor for hash tables is around 3/4.
