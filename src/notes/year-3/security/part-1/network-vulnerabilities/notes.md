## Packet switching

When data is passed over a network, it is split into packets. Each packet is transported independently and handled on a 'best efforts' basis on each device. There is no guarantee that any given packet will be delivered to its destination. Packets can also follow different routes to the same endpoints.

## Stack of layers

Network communication models use a stack of layers to send and receive packets. Think of it like sending a physical letter in the real world and all the transit steps it must go through. Higher layers use the services of lower layers with the bottommost layer being physical channels. The bottom layer is called the 'actual' channel and the others are called 'virtual' channels.

One network device implements multiple layers. A communication channel between two devices is established for each layer.

<!-- A simple internet stack may look something like this: -->

<!-- diagram -->

## The OSI model

The Open System Interconnect reference model consists of seven layers. It was created in 1983 and was promoted by the International Standard Organisation (ISO).

<!-- Diagram -->

In reality, the internet actually functions on protocols called TCP / IP which can both be mapped onto OSI.

## Encapsulation

Encapsulation helps packets traverse the various layers. Each packet typically consists of some control information in the header and footer as well as a data payload.

A protocol P can use the services of another protocol Q through encapsulation.

![Encapsulated packet](/img/encapsulated-packet.svg)

The packet p of P is encapsulated into a packet q of Q. The payload of q is p. The control information of q is derived from that of p.

## Internet packet encapsulation

## Network interfaces

A network interface is a device used to connect a computer to a network. This could take the form of:

- An ethernet card
- A wifi adapter
- A DSL modem

A computer could have multiple network interfaces and these are used to transfer packets between computers. Most local area networks broadcast frames.

Each device has a Media Access Control (MAC) address which is a 48-bit number usually represented in hex. The first three octets of each address are assigned by the IEEE as organisationally unique identifiers. The other three can be assigned by the manufacturer with the only condition being uniqueness.

## Network switches

A switch performs routing in a local area network. It operates at the link layer and has multiple interfaces which are each connected to a computer or segment. The operation of a switch is to learn to the MAC addresses of each computer connected to it and forward frames only to the destination computer. This should not be confused with a hub that broadcasts all frames to all computers on its network.

Switches can be combined and arranged in a tree. Each switch forwards frames for the MAC addresses of the machines in the segments connected to it. Frames to unknown MAC addresses are broadcast. Frames to MAC addresses in the same segment as the sender are ignored.

## Internet protocol

The Internet Protocol (IP) needs to know where to send data so it has an addressing system. It also uses routing to be able to communicate across networks or with networks not directly connected to the current network.

When data is being sent across networks it may need to be broken down into smaller packets and reassembled. This process is called fragmentation. Each network may have a different maximum packet size.

IP addresses come in two forms:

- IPv4: 32-bit addresses
- IPv6: 128-bit addresses

Each address is divided into network, subnet and host. This allows us to give networks structure and be able to navigate them. There is a special address where the host is 255 which is the broadcast address. Some addresses are for private networks which are not routed outside a LAN.

IP addresses are stored inside the header of an IP packet. Each header includes:

- The source address
- The destination address
- The packet length (up to 64KB)
- The time to live (the maximum number of steps up to 255)
- The IP version
- Fragmentation information
- Transport layer protocol information

## IP routing

A router is a device that bridges two or more networks. It operates at the network layer and maintains tables to forward packets to the appropriate network based on the destination address.

The Internet Control Message Protocol (ICMP) is used to test and debug networks. This sends simple messages encapsulated in single IP packets. Some tools that use ICMP include Ping which sends a series of echo requests and provides statistics on roundtrip times and packet loss, as well as Traceroute which sends ICMP packets with increasing TTL value to discover routes.

## Network attacks

There are many possible attacks that could be launched on a network. Here are some common ones:

- Block (DoS)  
  By cutting cables or destroying a router the attackers can prevent traffic from reaching their intended destination.

- Wiretapping (sniffing)  
  As the traffic is being sent to the destination it is copied and sent to a secondary destination.

- Wiretapping (passive)  
  If an attacker adds themselves to the path that the traffic takes to the destination then they can see what traffic gets through.

- Tampering (active)  
  This is very similar to the one above but this time the attacker might start changing the data being sent to the intended destination.

- Spoofing  
  When an attacker sends data to a destination pretending to be another sender on the network.
