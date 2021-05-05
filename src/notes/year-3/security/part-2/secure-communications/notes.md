## Introduction

On the internet, our traffic goes through various nodes controlled by people who can't be trusted. They could eavesdrop, make changes to messages and launch attacks on our systems. What we need is a point to point secure channel that protects the confidentiality and integrity of our messages.

## Threat model

Our situation is that we have a client and we are trying to connect to a server over some port. Our adversary fully controls the network which means that they:

- Can redirect traffic to its own server (DNS rebinding)
- Can passively read all our data (IP monitoring)
- Can play an active man-in-the-middle (TCP hijacking)

## Authentication problem

The authentication problem is that on the Internet we can not be sure if we are talking to the person we intended to talk to. Someone could be impersonating that person or machine. The problem to solve is to be sure that you are communicating with the party you intended to using only network communications. TLS solves this with public key cryptography and certificates.

## Certificate authority

Similar to the trusted third party approach to encryption, this is a way to verify that a webpage comes from the source that it claims.

There are three phases certificates go through:

- Creation  
  A website owner will ask for a certificate issued for their domain. The CA will ask for proof of control of that domain. One way to do this is to ask the domain owner to put a file at a particular path in the URL. If the CA is able to visit that URL and see the expected contents then they have proof that they own the domain. Some websites such as banks may require further checks and be asked to provide business documents to show that they are legitimate. If all goes well, the CA will issue a certificate that has the domain name and signature of the CA along with other data like the expiry date.

- Usage  
  When a user visits a website, they receive that website's certificate. The user’s browser verifies the signature on the certificate using the CA’s verification key. If this check passes then the browser allows the loading of the website. If not then the website will be blocked by an error message.

- Revocation  
  CAs and other entities maintain a revocation list of certificates that have not yet expired but are nonetheless not to be used. This can happen because it was issued in error or some malicious activity is noticed. The user’s browser checks the revocation list when it does the certificate verification step to make sure the certificate has not been revoked.

## Chain of trust

A certificate is designed to help you establish a chain of trust. If you are checking a certificate against a CAs list then how do you authenticate the CA? The idea is that CAs can all authenticate each other so you know that you are checking certificates against a reliable list.

This chain is broken if a rogue CA issues certificates that can dupe your browser to accepting websites from bad actors pretending to be another website. There are cases where this has happened but it is normally found out pretty quickly. This is where revocation lists become vital.

The root of trust is embedded in our operating systems and in our browsers which contain root certificates. You are relying on your machine to do all of these checks securely for the system to work.

## TLS overview

The main steps that happen in the TLS protocol are:

1. The browser sends the server a message telling it what versions of cryptography it supports.

2. The server sends back the version of cryptography it selected and a certificate so that the browser can authenticate it.

3. Once the browser has verified the certificate, it and the server do a key exchange. This key is required for symmetric encryption of any files sent between them.

4. Now encrypted data can be transferred.

## Key exchange

One property that we need from the key exchange step is forward secrecy. This means that if a private key was compromised in the future that an attacker could not decrypt any historic messages that they may have intercepted and collected.

Modern browsers use the Diffie-Hellman key exchange which does provide forward secrecy. It works the same way described in the asymmetric chapter. This process is carried out with each new connection to a server.

This can still be vulnerable to man-in-the-middle attacks and also something called a padding attack.

<!-- ## TLS handshake -->
