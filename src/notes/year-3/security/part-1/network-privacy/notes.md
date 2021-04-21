## Address translation

The standardised solution that was created is called the Address Resolution Protocol (ARP). It connects the network layer to the data link layer and maps IP addresses to MAC addresses. Its process is based on broadcast messages and local caching. However, it does not support confidentiality, integrity or authentication. Anyone can see which IP belongs to which MAC and anyone can change this information. There is no security built-in at all.

## ARP cache poisoning

Also know an APR spoofing, ARP cache poisoning is the process of attackers sending incorrect ARP responses to a machine. Since requests are not tracked, machines trust each other and there is no authentication. The cache is updated every time a machine receives a reply even if it did not send a request. This can lead to a mal-actor-in-the-middle (MitM) attack where the attacker can eavesdrop.

## IP vulnerabilities

There are many potential vulnerabilities in IP. Some include:

- Unencrypted transmission  
  Anyone can read the IP packets.

- No secure authentication  
  A sender can spoof source addresses making it difficult to trace a packet back to an attacker.

- No integrity checking  
  The entire packet, header and payload, can be modified. This enables content forgeries, redirections and MitM attacks.

- No bandwidth constraints  
  A large number of packets could be injected into the network to cause a denial of service attack. Broadcast addresses could also provide additional leverage.

## User datagram protocol

While we use IP to deliver packets to a device, this does not allow the device to distinguish between a web server, an email server or other source. For this, we can use the user datagram protocol (UDP) which is built on top of IP and uses the transport layer. UDP is stateless and unreliable but its lack of delivery guarantee or acknowledgement does make it efficient.

The lack of reliability of UDP means that applications using it must accept the risk of lost or corrupted data. If an application requires reliability then UDP is not a good choice. Streaming video or audio are good uses for UDP.

## Transmission control protocol

This is another protocol that works at the transport layer, with the key difference that it is reliable. TCP provides in-order delivery of messages and can distinguish multiple applications on the same host. Http and ssh are both built on TCP.

TCP is stateful so it can keep track of the connection state in memory. It packages a data stream into segments transported by IP. Order is maintained by giving each packet a sequence number. Every time TCP receives a packet it sends out an acknowledgement (ACK) to indicate successful receipt of the packet which provides reliability. Transmitted data is checked by comparing a checksum of the data with a checksum encoded in the packet which provides some level of integrity.

## Ports

Both UDP and TCP support concurrent applications on the same server. Ports are 16-bit numbers that identify where data is directed. TCP headers include both the source and destination port. Ports 0 through 1023 are reserved for use by known protocols. Ports 1024 through 46151 are known as user ports which can be used for listening to connections.

<!-- ## TCP data transfer -->
