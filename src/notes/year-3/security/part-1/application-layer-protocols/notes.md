## Introduction

In the internet stack, the application layer sits on top and is directly responsible for data passed from servers to clients. Some protocols that work over the application layer include:

- Domain name system (DNS)
- Hypertext transfer protocol (HTTP)
- SSL/TLS protocol used for secure encrypted browsing (HTTPS)
- IMAP/POP/SMTP internet email protocols
- File transfer protocol (FTP), an old but still used protocol for uploading and downloading files
- Telnet, an early remote access protocol
- SSH, a more recent secure remote access protocol

## Uniform resource locators

Uniform Resource Locators (URLs) are a standardized format for describing the location and access method of resources via the internet. They take the form:

```
<scheme>://<user>:<password>@<host>:<port>/<url-path>?<query-string>
```
Where `<host>` is given by:

```
<subdomain>.<domain>.<topdomain>
```

## Domain name system

The domain name system (DNS) provides the service for mapping domain names to IP addresses. This mapping is many to many, meaning you can have multiple domain names link to one IP address and one domain link to multiple IP addresses. DNS servers can be soft targets for attackers since if they take out the mapping then the website goes 'offline'.

More generally, DNS is a distributed database that stores resource records:

- Address (A) record  
  IP address associated with a host name

- Mail exchange (MX) record  
  Mail server of a domain

- Name server (NS) record  
  Authoritative server for a domain

## Name servers

## Name resolution

## Glue records

A circular trap where you don't have the IP address of the server you need to ask for the IP address.

## DNS caching

To reduce the traffic loads of DNS queries, clients can cache the results they recieve. When it goes to make a DNS query it will check its cache and only make a request to the name server if it doesn't already have it. Each cached record has a time-to-live field that means the cache can be updated in case IP addresses have changed.

## Cache privacy

Other users on the system will be able to see the DNS cache.

Incognito browsing also does not clear DNS cache as it is at the operating system level, not in the browser. If someone was to look at a system DNS cache within the time to live they would still be able to see the domains visited.

## Cache poisoning

If you can give a DNS server a false address and get it to cache then it may serve that false address to others. People looking for the real address will be redirected to the false one. Queries are issued over UDP on port 53. There is a 16-bit request identifier in the payload to match answers with queries. However there is no authentication and a client will not check if the server that responds is the name server that it sent its request to. If the identifier can be guessed then, then an attacker can respond to a server as long as the fraudulent response arrives before the real reponse.

## Firewalls

## Stateless vs stateful

## Network address translation

Network address translation (NAT) can help to hide the number of machines on the private network.

## Intrusion detection
