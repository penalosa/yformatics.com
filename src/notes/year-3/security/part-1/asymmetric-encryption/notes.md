## Trusted third party

Symmetric encryption replies on both parties sharing the key securely. One way to do this is through a trusted third party (TTP).

The way this is done also authenticates the identities of each party to ensure messages are coming from the correct source.

## Public-key encryption

The idea behind public-key encryption is what happens if you don't have a trusted third party. The basic premise is that one user Alice has a secret she wants to send another user Bob. Imagine Alice has her secret in a box, and Bob has a padlock and a key. Bob can send Alice the padlock open but keep the key. When Alice then padlocks the box shut and sends it to Bob nobody else can open it without the key. Now Bob has the secret and can ensure its integrity.

Practically, we have two key generation algorithms which create a public and a private key. The encryption algorithm uses the public key and the decryption algorithm uses the private key.

## Prime maths

The main point you need to know is that any $n \in \N$ can be calculated as a product of prime numbers. While multiplication is very easy to calculate, factorisation is extremely difficult to do efficiently.

## Diffie-Hellman protocol

This prime maths is what makes it possible for two parties to share keys without a trusted third party. One method for doing this is called the Diffie-Hellman protocol. It works like this:

1. Alice thinks of a large number $a$ and Bob thinks of a large number $b$. These must be kept secret and not sent to anyone.

2. A generator number $g$ and a large prime $n$ are shared between them and so are publicly visible.

3. Alice calculates $g^a \text{ mod } n$ and Bob calculates $g^b \text{ mod } n$.

4. They then share these numbers with each other, making them publicly visible. However, there is no efficient way to discover $a$ or $b$ from these numbers so they are still secret.

5. Alice can now calculate $(g^a)^b \text{ mod } n$ and Bob can calculate $(g^b)^a \text{ mod } n$. By the laws of indices, both of these numbers are equal and is a key they now both possess.

## Weakness in DHP

Despite its clever maths, there is a vulnerability in the Diffie-Hellman protocol that stems from the fact that neither Alice nor Bob actually authenticate each other's identities at any point. This opens the possibility of a man-in-the-middle attack where an attacker poses as the other person to each user before passing the messages on.

## Public-key infrastructure

Public keys are only secure if we can authenticate they are from the source they claim to be. One way to do this that does not lead to other issues is with public-key certificates. Each certificate contains:

- A public key
- A subject identifying the owner of the key
- A signature by the certificate authority (CA)

A certificate needs to be revoked if the corresponding private key has been compromised.
