## What is cryptography

Cryptography is the practice of creating and understanding codes that keep information secret. More broadly, it can include the scientific study of techniques for securing digital information, transactions, and distributed computations. However, it is not the solution to all security problems and is only effective if implemented properly.

## Types of cryptography

- Symmetric Encryption
- Asymmetric (public-key) Encryption
- Hash functions and Message Authentication Codes (MACs)
- Digital Signatures
- Public Key Infrastructure (PKI)

## Kerckhoff's principle

There is no security through obscurity!

Security systems should be made public to be scrutinised by white-hat hackers and academics who can find flaws before they become a problem. No system is free of vulnerabilities but you can patch them once you know about them.

## Symmetric encryption

A symmetric cipher consists of two functions:

- A encryption function $E: K \times M \to C$
- A decryption function $D: K \times C \to M$

The key $k$ is the same for both of these functions. The key is also secret and known only to the two parties passing the message $m$. The algorithm of the functions are not secret however, it doesn't contribute to the security.

An encryption scheme is secure if an adversary cannot:

- Recover the secret key
- Recover the plaintext of the message from the ciphertext
- Recover any bits of the plaintext of the message from the ciphertext

## Adversary's capabilities

A cryptographic scheme is secure under some assumptions. It may be vulnerable to certain types of attacks and attackers. The attacker may have:

- Access to the public algorithm
- Access to the ciphertext (ciphertext only attack)
- Access to some ciphertext plaintext pairs (known plaintext attack)
- Access to an encryption oracle (chosen plaintext attack)
- Access to a decryption oracle (chosen ciphertext attack)
- Potentially unlimited computational power

## Brute force attack

Some attackers may attempt to try all possible keys $k \in K$. This would require knowledge of the structure of the plaintext and a lot of compute power. You can prevent this by making an exhaustive search unfeasible:

- $K$ should be sufficiently large, the keys sufficiently long
- Keys should be sampled uniformly at random from $K$

For example with a simple substitution cipher, the key space is very large.

$$|K| = 26! \approx 2^{88}$$
