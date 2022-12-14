# what's the hubglub around serverless ?
- serverless is an execution model where the clud provider is responsible fro executing a piece of code by **dynamically allocating the resources** and only **charging for the amount of resources used to run the code**

## When to use?
### optimal use cases
- microservice based architecture
- streaming and data processing apps
- AI and ML
- IoT apps, monitoring etc.
- short real-time or near real time processes, 
- Apps with quiet and peaks

### non-optimal use
- statefull apps
- apps with synchronous
- programming apps that make OS level calls
- monolithic applications

## Lambdas - AWS service
- is a compute service that lets you run code without provisioning or managing servers. it lets you run your code on a highly available infrastructure and performs all of the admin of the resoruces, in cluding server and OS maintenance, capacity provisioning, and automatic scaling, code monitoring and logging.
### charges 4 lambdas
- for # of executions and duration
- up to 1 million free requests per month and 400,000 GB compute time
### lambda trigger services
- http reqs
- DB events
- queueing services
- monitoring alerts
- file events
- scheduled events

### key lambdas terms
- cold start - needs to allocat EE for your function ro run, 5-10 mins
- warm start, the EE is running and code exists on the EE
- unreserved concurrency, has 1k unreserved, soft limit
- provisioned concurrency,, keeps functions initialized and ready
- throttling - intentionally reject 

### how lambdas work?
- customer checks in, C1 gateway, cold start, the EE is created and the readcheckimage function, AWS moves to INIT and INVOKE phases, code is packaged in a container, the interpreter is intialized and handler is called, 
-