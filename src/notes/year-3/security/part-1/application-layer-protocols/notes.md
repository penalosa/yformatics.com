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

## DNS caching

## Cache poisoning

## Firewalls

## Stateless vs stateful

## Network address translation

Network address translation (NAT) can help to hide the number of machines on the private network.

## Intrusion detection
