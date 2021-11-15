# Hybrid Load Balancing Lambda and EC2

## Architecture

<p align="center">
  <img src="/architecture-diagram.drawio.svg" />
</p>


## Info 

This handles deployment for an application load balance, ec2 instance, lambda function, internet gateway, vpc with associated services (subnets, security group, route table, etc), s3 bucket, and appropriate iam roles.

Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you need, configure security and networking, and manage storage. Amazon EC2 enables you to scale up or down to handle changes in requirements or spikes in popularity, reducing your need to forecast traffic.

An Application Load Balancer makes routing decisions at the application layer (HTTP/HTTPS), supports path-based routing, and can route requests to one or more ports on each container instance in your cluster. Application Load Balancers support dynamic host port mapping, which allows you to have multiple tasks from a single service on the same container instance.

An Application Load Balancer has multiple components;
- A **load balancer** serves as the single point of contact for clients. The load balancer distributes incoming application traffic across multiple targets, in multiple Availability Zones. This increases the availability of your application. You add one or more listeners to your load balancer.
- A **listener** checks for connection requests from clients, using the protocol and port that you configure. The rules that you define for a listener determine how the load balancer routes requests to its registered targets. Each rule consists of a priority, one or more actions, and one or more conditions. When the conditions for a rule are met, then its actions are performed. You must define a default rule for each listener, and you can optionally define additional rules.
- Each **target group** routes requests to one or more registered targets, such as EC2 instances or Lambda functions, using the protocol and port number that you specify. You can register a target with multiple target groups. 
- **Health checks** can be configured on a per target group basis. Health checks are performed on all targets registered to a target group that is specified in a listener rule for your load balancer.

Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

The following are the key concepts for VPCs:
- **Virtual private cloud (VPC)** : A virtual network dedicated to your AWS account.
- **Subnet** : A range of IP addresses in your VPC.
- **Route table** : A set of rules, called routes, that are used to determine where network traffic is directed.
- **Internet gateway** : A gateway that you attach to your VPC to enable communication between resources in your VPC and the internet.
- **VPC endpoint** : Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.
- **CIDR block** : Classless Inter-Domain Routing. An internet protocol address allocation and route aggregation methodology. 

For more information...
- [Serverless Framework: Application Load Balancer Events](https://www.serverless.com/framework/docs/providers/aws/events/alb)
- [AWS Documentation: What is an Application Load Balancer?](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
- [AWS Documentation: What is Amazon VPC?](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [AWS Documentation: What is Amazon EC2?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
- [AWS Documentation: Using credentials for Amazon EC2 instance metadata](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-metadata.html)
- [AWS Documentation: Using an IAM role to grant permissions to applications running on Amazon EC2 instances ](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)


## Usage 

### Credentials:
```bash
export AWS_PROFILE=<profile_name>
```

### Install Dependencies:

```bash
yarn run install
```

### Deploy:

```bash
yarn run deploy
```

### Test:

```bash
curl -X GET <application-load-balancer-domain-name>/lambda
```

```bash
curl -X GET <application-load-balancer-domain-name>/ec2
```

### Remove:

```bash
yarn run remove
```
