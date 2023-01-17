# AWS - Intro

## History
Launched as an infrastructure for internal, then launched publically as SQS, S3, EC2, etc. Expanded outwards.  

## How to choose an AWS region?
- compliance: government agency want data to stay local to respected country
- latency: close to customers = reduced latency
- available services: not all regions have ***all AWS*** available
- pricing: pricing varies from region to region

### AWS availability zones
3 is min, 6 is max
- each availability zone AZ is one or more discrete data centers with redundant power, networking, and connectivity. 
- each AZ is separate from each other so they're isolated from incidents/disasters. (One goes down, the others will stay up)
- they are connected via high-speed

### AWS points of presence (Edge locations)
- 216 Points of Presence

- Most AWS are region scoped.