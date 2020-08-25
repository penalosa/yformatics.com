## Introduction

Many computing problems often involve working with some kind of data and in many cases that data will need to be sorted. As algorithms used for this can deal with huge quantities of data, there is a huge efficiency benefit in using one method over another.

This topic will look at some specific algorithms and in particular the principle of 'divide and conquer'. Be aware that heap sort and quick sort may require you to cover the later topic on heaps and priority queues.

For all of these algorithms, we assume that the data is supplied in an array which we call A with length n.

## Insertion sort

To begin with, we will look at a simpler sorting algorithm which does not apply the divide and conquer principle. You will likely have seen insertion sort before, if not used it in your code.

```
function insertionSort(A)
    for (j = 1 to A.length - 1) do
        a = A[j]
        i = j - 1
        while (i >= 0 and A[i].key > a.key) do
            A[i + 1] = A[i]
            i = i - 1
        A[i + 1] = a
```

The asymptotic worst-case runtime of insertion sort is $\Theta(n^2)$.

## Merge sort

Merge sort takes a very different approach to sorting. It splits the array to be sorted into halves, sorts both halves recursively, and then merges the two sorted subarrays together into one fully sorted array. This is an example of a divide and conquer method.

In order to make the recursion part possible, we need to add two additional arguments $i$ and $j$ to set the boundaries of the subarrays to be sorted.

```
function mergeSort(A, i, j)
    if (i < j) then
        mid = floor((i + j)/2)
        mergeSort(A, i, mid)
        mergeSort(A, (mid + 1), j)
        merge(A, i, mid, j)
```

This requires an extra function to actually do the merging.

```
function merge(A, i, mid, j)
    new array B of length (j - i + 1)
    k = i
    l = mid + 1
    m = 0
    while (k <= mid and l <= j ) do
        if (A[k].key <= A[l].key) then
            B[m] = A[k]
            k = k + 1
        else
            B[m] = A[l]
            l = l + 1
        m = m + 1
    while (k <= mid) do
        B[m] = A[k]
        k = k + 1
        m = m + 1
    while (l <= j) do
        B[m] = A[l]
        l = l + 1
        m = m + 1
    for (m = 0 to j - 1) do
        A[m + 1] = B[m]
```

The asymptotic worst-case runtime of merge sort is $\Theta(n \text{ } lg(n))$.

## Max sort

Max sort picks the maximum key in the subarray it currently considers and puts it in the last place of the subarray. Then it continues with the subarray containing all but the last item.

```
function maxSort(A)
    for (j = A.length downto 1) do
        m = 0
        for (i = 1 to j) do
            if (A[i].key > A[m].key) then
                m = i
        exchange (A[m],A[j])
```

Max sort has a worst case runtime of $\Theta(n^2)$.

## Heap sort

The algorithm for heap sort follows the same principle as max sort, but uses a heap to efficiently find the maximum in each step. We will define heap sort by building on the methods of Priority Queues:

- removeMax()
- heapify()

These are used as follows:

```
function heapSort(A)
    buildHeap(A)
    for (j = A.length - 1 downto 0) do
        A[j] = removeMax()
```

Heap sort uses the buildHeap which has a worst case runtime $\Theta(n)$ and so heap sort also has a worst case runtime of $\Theta(n \text{ } lg(n))$.

## Quick sort

Quick sort also takes a divide-and-conquer approach. The array being sorted is partitioned at an element called the 'pivot' and divided into subarrays which are then each sorted recursively in this way.

```
function quickSort(A, i, j)
    if (i < j) then
        split = partition(A, i, j)
        quickSort(A, i, split)
        quickSort(A, split + 1, j)
```

Where the partition function is defined as:

```
function partition(A, i, j)
    pivot = A[i].key
    p = i - 1
    q = j + 1
    while (TRUE) do
        while (A[q].key > pivot) do
            q = q - 1
        while (A[p].key < pivot) do
            p = p + 1
        if (p < q) then
            exchange (A[p],A[q])
        else
            return q
```

Quick sort actually has a worst case runtime of $\Theta(n^2)$ but it is much faster than that in practice. In the average case the runtime for quick sort is $\Theta(n \text{ } lg(n))$.
