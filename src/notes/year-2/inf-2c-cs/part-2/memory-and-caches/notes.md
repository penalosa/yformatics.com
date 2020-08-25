## Memory requirements

Programmers want memory to be:

- Large
- Fast
- Random access

In reality, there is no type of memory that has all of this due to the physics of memory. The larger it gets, the longer it takes to access it.

A memory hierarchy is basically approximating the 'ideal' large & fast memory through a compbination of different kinds of memory. This involves multiple levels of memory, with the fastest & smallest being closest to the processor and the slowest but largest being furthest away.

## Memory examples

## Locality

Memory hierarchy is effective due to a couple of principles:

- Temperal locality <br>
  A recently accessed location is likely to be accessed again in the near future. Many programs are written in loops.

- Spatial locality <br>
  Memory locations close to a recently used location are likely to be accessed again in the near future. When a process access an element of an array, it is very likely to access the next element of that array next.

## Memory hierarchy

The memory hierarchy can be drawn and looks like this:

<!-- Diagram -->

Without the cache, we would have a very large distance between the main memory and the processor so memory access would take much longer. This latency gap could be up to 100x.

## Modern processors

We have a small, fast cache next to the processor backed up by a larger, slower cache and main memory. This gives the impression of a single, large & fast memory.

- To take advantage of temporal locality <br>
  If accessing data from slower memory, move it to faster memory. If data is in faster memory and has not been used in a while, move it to slower memory.

- To take advantage of spatial locality <br>
  If we move a word from slower to faster memory, move adjacent words at the same time. This gives rise to 'blocks' and 'pages', units of storage within the memory hierarchy composed of multiple continuous words.

## Data transfers

Both the software and hardware should be responcible for moving data between different levels of memory. There is a trade-off between programming, hardware complexity and performance.

Compiler software is used to transfer data between registers and main memory. Hardware is used to transfer data between caches and main memory, software is usually unware of caches. OS software is used to transfer data between main memory and disk.

## Management between levels

The programmer and processor are both oblivious to where data resides. They just issue load and store commands to generic 'memory'. Hardware manages the rest.

Data is moved or copied between levels automatically in response to the program's memory accesses. Memory always has a copy of cached data, but data in cache may be more recent.

Essentially, hardware queries the cache for the data and if the data is in the cache, great. Otherwise, we have to go to memory as if the cache doesn't exist. We then put that block of data in the cache and return whatever the load instruction asked for.

## Cache terminology

- Block <br>
  The unit of data stored in the cache between 32-128 bytes, 64 average.

- Hit <br>
  Data is found in cache, memory access completed quickly.

- Miss <br>
  Data not found in cache, must continue the search at the next level of memory hierarchy. Once the data is found, it is copies into cache.

- Hit rate <br>
  Fraction of accesses that resulted in hits at a given level.

- Miss rate <br>
  Fraction of accesses that resulted in misses at a given level.

- Allocation <br>
  Placement of a new block into the cache, typically results in the eviction of another block.

- Eviction <br>
  Displacement of a block from the cache, commonly happens when a new block is allocated in its place.

## Cache basics

## Cache replacement

## Cache associativity

- Fully associative <br>
  The block can go into any location in the cache.

- Direct mapped <br>
  The block can only go into one location in the cache.

- Set associative <br>
  Split the cache into groups (sets) of $m$ blocks each ($m$-way set associative). A given block can only go into one set (based on block address), but within that set it can go anywhere.

## Writing to cache
