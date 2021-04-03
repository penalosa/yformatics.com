## Introduction

## Category partitions

1. Identify independently testable units  
   The high level things the program needs to achive regardless of implementation.

2. Identify parameters  
   The inputs which can be split up into relevant paramaters and environment variables.

3. Identify catagories  
   This is any good way to segment the input based on the paramaters available. You may need to make a choice how you define this but it can often be obvious from the information provided.

4. Identify relevant values  
   For each catagory, indentify specific ranges which bounds the catagories and includes normal values, boundary values, special values and error values.

5. Identify constraints  
   This can rule out impossible combinations and reduce the size of test cases required.

6. Create test specifications  
   The actual test suite run must be conrete so you need to specific pick values that satisfy the catagories being tested within their different value ranges.

## Pairwise testing

Category partition testing works well when there are well defined constraints to cut down the number of test cases required. Where there are not obvious constraints, pairwise testing can help by testing specific pairs of paramerters at a time rather than exaustively going through all the combinations combined.

Even though you only care about two constraints at a time, you still need to select values to fill in all the input fields for each case. Your goal with the test cases is to cover as many pair combinations as possible - the most pairs in the fewst tests. The most tests you might need is the total number of pairs, significantly less than the total number of combinations (without constraints).

You an also add constraints to pairwise testing if you know that certain pairs are not possible. These could be handled by creating sparate tables where only allowed pairs can be in a table with each other.

## Catalog based testing

This will not be assessed but could be useful to know.
