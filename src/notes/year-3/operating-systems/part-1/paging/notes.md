## Memory allocation

There are two different ways to allocate memory:

- Contiguous  
  With contiguous memory, allocation granularity is the entire logical address space and the request to physical memory is for the entire program at once. However, some issues with this include external fragmentation, long swap times and long compaction times.

- Non-contiguous  
  This splits the logical address space into chunks and physical memory is requested for each chunk at a time. It is contiguous in logical memory but non-contiguous in physical memory. The key mechanisms for this are segmentation and paging.

## Segmentation

To achieve non-contiguous memory allocation, the address space is partitioned into variable-size chunks. Some examples of these 'logical units' include the stack, heap, data, code and subroutines. Each segment logical address is composed of a segment number and an offset.

<!-- Diagram? -->

## Hardware support

Segmentation is implemented using a 'segment table' in which every entry has base/limit pair, one per segment. Segments are named by their segment number which is the index of the table. The physical address of each segment is given by the sum of the logical address and the base address.

This method reduces segmentation by varying hole sizes and enables sharing as the same segment can be shared across processes. However, segmentation is rarely used today and x86 CPUs don't support it on 64-bit systems.

## Paging

Here, the logical address space and physical address space are both partitioned into fixed-size chunks. The chunks of logical memory are called pages and the chunks of physical memory are called frames, but they are the same size.

Each logical address is assigned:

- A page number  
  Index into a page table which contains frame base addresses

- A page offset  
  Summed to frame base address to make physical memory address

<!-- The logical address space normally has a size of $2^m$ bytes -->

## Paging hardware

Paging requires some special hardware.

<!-- Diagram -->

## Advantages of paging

The advantages of paging include that there is no external fragmentation since everything is using the chunk size. Internal fragmentation depends on the page size, on average half the frame size and only the frame size minus one byte in the worst case.

## Free frames

Although paging has no external fragmentation, not all frames of physical memory may be allocated. A list of 'free frames' is kept for use when a new process is being brought into memory.

## Many processes

Each process has a page table to provide that process's mapping from logical to physical addresses. So when multiple processes are running, they each need their own page table.

## Page tables

Page tables are kept in main memory. There are also two registers in the CPU which assist it. The page table base register (PTBR) points to the page table and the page table length register (PTLR) indicates the length of the page table.

Every data access requires two memory accesses. One to fetch the page table entry and another to fetch the actual data content. If the data is already in cache then this is not required.

To avoid having to do two memory accesses, a translation look-aside buffer (TLB) can be used. This is a fast lookup hardware cache in which every entry contains a page number and a frame number. It's typically quite small, only 64 or 1024 entries. If a translation exists in the TLB (hit), then it can be used at no extra cost. If it is not found (miss) then the translation must be fetched from memory.

## Memory access time

The time it takes to access data is called the 'effective access time' (EAT). This can be calculated to see the effectiveness of different TLB replacement strategies. Think back to caching in inf-2C.

The time it takes the CPU to access main memory directly is called the 'memory access time'. A 'hit ratio' ($\alpha$) can also be defined as the percentage of hits in the TLB. Similarly, there is a miss ratio ($1 - \alpha$). The hit and miss ratios should be written as decimals.

$$\text{EAT } = (\alpha \times \text{ MAT }) + ((1 - \alpha) \times (2 \times \text{ MAT }))$$

MAT is not a real acronym but it seemed useful here. The answer has the same unit as MAT provided in the question.

## Memory protection

Memory security is especially important in modern systems and paging is a good way to provide this. Page table entries (PTE) also contain protection bits that define what kind of access is allowed. This could mean read-only, write-only or execute-only. There is also a bit defines if a translation is valid or not, meaning if the page is in the logical address space or not. Any violations result in a trap to the OS kernel.

## Shared pages

A neat trick of paging is that one page can be shared between multiple processes. If two applications need to use a common code library then it only needs to be loaded into memory once as a read-only chunk. Each process will still have its own data kept separate.

Another reason to use this might be that we want two processes to share some data. This starts to sound similar to multithreaded processes but it is quite different.

## Hierarchical page tables

Page tables can get extremely big and can start to clutter memory. Hierarchical page tables offer another way to structure them. The idea is to break up the entire logical address space into multiple page tables and then construct another table that refers to each of the other tables.

<!-- Something about bits and the way the address is split up. -->

<!-- Diagram? -->

## Hashed page tables

Another option for an alternative page table structure is a hashed table. The logical page number is hashed into a page table index and each entry chains elements hashing to the same location. Each element contains the logical page number, the value of the mapped page frame and a pointer to the next element. Logical page numbers are compared searching for a match and if a match is found then the corresponding physical frame is extracted.

## Inverted page table

The final alternative page table structure in this course is the inverted page table. Rather than each process having a page table and keeping track of all possible logical pages, there is a single page table that tracks all physical pages. One entry for each physical page in memory with each entry containing the virtual address of the page and information about the process that owns it.

This decreases the memory needed to store translations but increases the time needed to search the table. Many implementations of this use a hash table to limit the search to one or a few entries.

## Reasons why

Some reasons why paging is good include:

- Inter-process memory protection
- Code can be reused
- Detect null pointer dereferencing at runtime
- Reduce memory usage
- Generalise the use of shared memory

There is some more stuff in the slides if you need it.
