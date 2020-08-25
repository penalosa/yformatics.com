## Introduction

Data representation in a computer affects:

- Complexity of circuits
- Cost
- Speed
- Reliability

We must consider how to design hardware for storing data and manipulating it.

## The bit

BIT is an acronym for Binary Digit, referring to it being a single 1 or 0. This is a good data form as it makes easy computation and only needs simple, reusable circuits. However, this does mean that there are storage implications as there is not much information in a single bit and so we require many to be useful.

## Natural numbers

Non-negative integers can be directly converted from decimal to binary.

<!-- Image table -->

The most significant bit is on the left and the least significant bit is on the right.

Addition and subtraction with unsigned binary numbers is also easy and done as expected with base 2 computation.

The largest number that can be represented by $N$ bits is $2^N - 1$.

## Negative numbers

One method of representing negative numbers in binary is called sign-magnitude representation. This means that the most significant bit is used as the sign where 1 means negative and 0 means positive. This may seem like a simple concept but it complicates addition and subtraction as the operation depends on the sign. This also creates two 0s as the MSB can be either 1 or 0.

Another method of representing negative numbers is called Two's Complement. This is based around the idea that you could add together a positive number and negative of the same number to get 0.

$$x + (-x) = 0$$

This works off of a quirk in the numbers where the full answer does not need to be 0 but we can make the fixed-length binary value equal to 0. Suppose we represent the negation of $x$ as $2^N - x$.

$$x + (2^N - x) = 2^N$$

Recall that a binary number with $N$ bits can only represent numbers up to $2^N - 1$. The $N$ lowest bits of the answer are all 0.

When converting decimal to Two's Complement binary manually, a trick you can use is to convert it directly and then flip the bits and add 1.

Sometimes, Two's Complement numbers can overflow. There are two types of this:

- Positive overflow <br>
  This produces negative numbers.

- Negative underflow <br>
  This produces positive numbers.

## Shifting

This is the process of moving bits left or right. Shifting left $n$ places is equivalent to multiplying by $2^n$ and the empty places are filled with 0s.

When shifting right there are two options:

- Logical shift <br>
  Fill the empty places with 0s, this is used for non-numerical data.

- Arithmetic shift <br>
  Fill the empty places with the MSB, this is used for Two's Complement numbers.

A shift right $n$ places is equivalent to dividing by $2^n$.

## Hexadecimal notation

Binary is long and tedious for humans to use so we sometimes use the hexadecimal system to make it more readable. To convert binary to hex we translate each set of four bits into a single hex digit.

<!-- Example -->

Hex is never parsed by computers, it is only for humans to use and is then processed in binary.

## Normalisation

This is essentially using scientific notation.

<!-- Example -->

There are three main benefits to normalisation:

- It simplifies machine representation as we don't need to represent the fraction separator.
- It simplifies comparisons as there is no need to count preceding 0s.
- It keeps very small or very large numbers compact.

## Floating point

This is another data type that involves converting a number into binary and then normalising it. For this course, we specifically focus on the IEEE 754 floating point standard. This includes:

- 32 bit representation
- 1 sign bit
- 8 bits for the exponent
- 23 bits for the mantissa

This has the caveat that it can only store unsigned exponents. To counter this, we add a bias to the exponent so that 127 is the value for 0. So any given exponent will be stored as 127 + exp.

When using a 64 bit representation:

- 1 sign bit
- 11 bits for the exponent
- 52 bits for the mantissa

Any unfilled digits in the mantissa at this longer length are just filled with 0s.

Floating point numbers can also have overflow occur.

## Characters & strings

Characters also need to be encoded in binary but operations on them are far simpler. The most common representation for characters is to use ASCII. Each character is held in a byte. Unicode is also used as it can encode characters from all languages using 16 bits per character.

These characters are then put together in strings order to store words and sentences. However, the end of each string is identified differently in each programming language. For example, in C a special character called the NULL character is used, encoded as 0x00. Whereas in Java, the string length is stored with the string itself as the string is an object and length is one of its member properties.
