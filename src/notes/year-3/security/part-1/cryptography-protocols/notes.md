## Introduction

Encryption can be a great tool to maintain the confidentiality of information. However, all encryption methods have flaws that don't protect the authenticity or integrity. This is where we can use cryptographic hash functions and message authentication codes.

## One-way functions

A one-way function (ONF) is a function $f$ that for all $y$ there is no efficient algorithm to compute $x$ such that $f(x) = y$. One example of an ONF is the multiplication of large primes.

## Collision-resistant functions

A collision-resistant functions (CRF) is a function $f$ that there is no efficient algorithm that can find two messages $m_1$ and $m_2$ such that $f(m_1) = f(m_2)$. This is not saying it is impossible like injective functions, just that it's hard to find them. Cases where this occours are called collisions. The successor function and large prime multiplication are examples of CRFs.

## Cryptographic hash functions

A cryptographic hash function takes messages of arbitrary length and returns a fixed-size bit string such that any change in the data will (with very high probability) change the corresponding hash value. A hash function $H: M \to T$ satisfies the following properties:

- $|M| << |T|$
- It is easy to compute the hash value for any given input message
- It is hard to retrieve a message from its hashed value (OWF)
- It is hard to find two different messages with the same hashed value (CRF)

Collisions are unavoidable in hash functions since such a large input is being mapped to a smaller output. We still say they are collision resistant because finding the collisions is extremely difficult.

## Hash applications

Some applications of hash functions include:

- Commitment  
  If you wanted to prove there was a secret value to be revealed at a later date then you could release the hash which can be checked afterwards. This is the premise for electronic voting and digital signatures.

- File integrity  
  Hashes are sometimes posted along with files on "read-only" spaces to allow verification of file integrity.

- Password verification  
  In general, servers should not store passwords in plaintext and so most modern servers hash passwords and only store that. To authenticate a user, their entered password is hashed and compared to the stored hash. It can also sort them which makes it harder to attack.

- Key derivation  
  Derive new keys or passwords from a single secure key or password.

- Building blocks  
  Hash functions are building blocks for other cryptographic primitives such as message authentication codes, block ciphers and pseudo-random generators.

## Hash function attacks

The main attack which is better than brute force against a hash function is called the birthday attack. This takes $\sqrt{|M|}$ messages and computes the hashes. By the birthday paradox, the probability of getting a collision in this many messages is greater than $0.5$ and this can be computed in $O(2^{\frac{n}{2}})$ time.

To combat this, cryptographic functions used in new projects should have output length $n \ge 256$.

<!-- ## Hash construction -->

<!-- ## Message authentication codes -->
