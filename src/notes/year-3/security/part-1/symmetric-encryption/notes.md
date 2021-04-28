## Introduction

A symmetric cipher consists of two functions:

- A encryption function $E: K \times M \to C$
- A decryption function $D: K \times C \to M$

The key $k$ is the same for both of these functions. The key is also secret and known only to the two parties passing the message $m$. The algorithm of the functions are not secret however, it doesn't contribute to the security.

An encryption scheme is secure if an adversary cannot:

- Recover the secret key
- Recover the plaintext of the message from the ciphertext
- Recover any bits of the plaintext of the message from the ciphertext

## Frequency analysis

## One-time pad

## Perfect secrecy

## Two-time pad attack

## Limitations of OTP

The drawbacks of using a one-time pad include:

- The key length must be equal to the message so if you have a long message then the key length must also be that long.

- The keys must be truely random to prevent an attacker from guessing them. Bad keys may allow frequency analysis to be used.

- Perfect secracy does not protect from all kinds of possible attacks.

- The one-time pad is malleable, meaning if given a message ciphertext pair then it is possible to compute the ciphertext for a new message that may contain elements of original.

## Stream ciphers

The goal of stream ciphers is to make the one-time pad practical and address the first drawback of key length. It uses pseudorandom keys rather than really random keys. These can be created by usimng a Pseudo-Random Generator (PRG) which takes a really random short bit string and outputs a longer bit string which looks random. It is applied to the one-time pad like this:

$$E(k,m) = G(k) \oplus m$$

Stream ciphers are still vulnerable to two-time pad attacks and they are still malleable.

One famous use of stream ciphers is alled RC4 which was created for https and wifi encrytion (WEP) in the 80s. It works in two phases by initialising a seed $k$ and then iterating keystream generation. In 2015 RC4 was completely removed due to its mounting weaknesses.

## Block ciphers

Since stream ciphers are still suseptable to two-time pad attacks and malleablity, cryptographers proposed what are alled block ciphers. Some examples of schemes built on this include Data Encryption Standard (DES) and Advnaced Encryption Standard (AES).

DES was broken by exhaustive search in 1997 so it was replaced by AES for some applications. However an improved form called 3DES is still used for banking and commerce applications.

AES

Come back to this and use better explainations from the internet 

## More block stuff

Padding

Electronic code book (ECB)

Cipher-block chaining (CBC)

Counter mode (CTR)

Block size problems?

<!-- ## Key management -->
