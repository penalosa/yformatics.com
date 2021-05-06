## Introduction

Here are some facts about the internet:

- It's a public network  
  Network routers see all traffic that passes through them

- Routing information is public  
  IP packet headers contain source and destination information

- Encryption does not hide identities  
  Encrypting data hides the payload but not the routing information

Routing information can reveal who you are even if your actual identity is not explicit. This is the basis of a lot of targeted advertising.

## Three-party DC

Three-party dining cryptographers (3DC) has some weird NSA story behind it. The main point is they are out at dinner, the bill gets mysteriously paid and they want to know if it was one of them without revealing which one, or someone else that paid.

1. Each pair secretly flip a fair coin, noted in binary (0/1)

2. Each of the three xor the two flips they witnessed

3. If they didn't pay the bill then they announce the xor result, if they did they announce the inverse

4. If the xor of the announcements is 0 then none of them paid, if the xor of the announcements is 1 then we know for sure one of them paid we do not know who without seeing all the coin flip results

This also scales to nDC.

However, this protocol is quite impractical. It requires pair-wise shared keys to create secure channels, a large amount of randomness and only one person can transmit at once.

## Crowds

A way to relay network requests through a bunch of people.

Vulnerable to a global adversary.

## Chaum's mix

The main vulnerability in the crowd approach can be solved by a Chaum mix. Lots of encryption and timing breaks with random ordering.

It can do anonymous return messages.

There is a thing called a mix cascade where it passes messages through multiple mixes.

## Routing privacy

Internet routing exposed the user's privacy through meta-data like IP addresses. All routers between source and destination know the origin and destination of forwarded packets. Core internet routers are managed by governments and big corporations so they large quantities of internet traffic.

## Tor

The Tor browser is designed to solve a lot of privacy concerns around internet routing. It combines the advantages of mixes and proxies. Some key features include:

- Using public-key cryptography to establish the circuit
- Using symmetric-key cryptography to exchange data
- Distribute trust like mixes
- Do not delay or batch like mixes

However, these features do not defend against an adversary who can observe the whole network.

## Onion routing

The main thing that makes Tor work is called 'onion routing'. The idea is to layer encryption like an onion. Layers are peeled off at each relay until the message reaches its destination. The steps of the process look like:

- Circuit setup  
  The client knows the different paths through the Tor network. They select one router to start and then tunnel through to a second and again to a third. Three hops are most common. As long as at least one router in the chain is honest then the reply is relatively secure.

- Actual communication  
  Each reply hop unwraps the onion a little bit. You can see the formal explanation in the lecture. Each router only knows the previous source and next destination.

Tor provides privacy, not confidentiality. Everything inside the Tor network is encrypted but not across the whole internet. To achieve confidentiality you would still need to use SSL/TLS end-to-end encryption.

## DNS resolution

Tor only anonymises TCP streams, but DNS resolutions are executed over UDP. If someone could observe your DNS requests then that could break your privacy even before you've tried to connect to a server over the Tor network. To solve this you need to package your DNS query inside the onion and have the last relay do the DNS look-up for us. The Tor browser is designed to manage all of this.

## Avoiding censorship

Tor relays are listed on a public directory. This makes them easy to use but could also make it easier for an organisation such as a national government to target them to block or take over the Tor network. Your ISP also knows that you are communicating with Tor nodes. To prevent the network from being blocked even if certain nodes are, there is also a private list of relays called bridge relays. Entering the Tor network through one of these bridge relays prevents ISPs or governments from knowing that you are using it and blocking your access.

## Onion services
