# Cloud Practitioner

## What is Cloud Computing

*Cloud Computing* is the practice of using a network of remote server hosted on the Internet to store, manage, and process data, rather than a local server on a personal computer. 
On demand delivery of IT resources and applications via the internet
Before, there were data centers based on guessing what peaks might be. If the design wouldn't meet the actual peak, the customers will suffer. If we exceeded our maximum mean, we ended up paying for the resources that we didn't really need.

| On-Premise                      | Cloud Providers                                                                                          |
|---------------------------------|----------------------------------------------------------------------------------------------------------|
| You own the servers             | Someone else owns the servers                                                                            |
| You hire the IT People          | Someone else hires the IT People                                                                         |
| You pay or rent the real-estate | Someone else pays or rents the real-estate                                                               |
| You take all the risks          | You are responsible for your Cloud configuration services and code. Someone else takes care of the rest. |

## Six Advantages and Benefits of Cloud Computing

*Why go with a Cloud Provider over On-Premise?*

| **1. Trade capital expense for variable expense**                  | **No upfront-cost** Instead of paying for data centers and servers<br/><br/> **Pay On-Demand** Pay only when you consume computing resources                                                                                                                                                                                                                                                                                                                           |
|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **2. Benefit from massive economies of scale**                     | Usage from hundreds of thousands of customers aggregated in the cloud. You are **sharing the cost with other customers** to get unbeatable savings.                                                                                                                                                                                                                                                                                                                    |
| **3. Stop guessing capacity**                                      | Eliminate guesswork about infrastructure capacity needs. **Instead of paying for idle or under-utilised servers**, you can scale up or down to meet the current need. Scalability. Use service at your own pace. Resize resources as necessary.                                                                                                                                                                                                                        |
| **4. Increase speed and agility**                                  | Launch resources within a few clicks in minutes instead of waiting days or weeks of your IT to implement the solution on-premise. Being able to learn and quickly adapt to change. Agility reduces the cost of change.<br/><br/> You insist on results while the investment is being made, and you pivot as soon as possible if you aren't seeing those results.<br/><br/> How do you reduce security risk? Test often, patch quickly to incidents at lightning speed. |
| **5. Stop spending money on running and maintaining data centers** | **Focus on your own customers**, rather than on the heavy lifting of racking, stacking, and powering servers                                                                                                                                                                                                                                                                                                                                                           |
| **6. Go global in minutes**                                        | Deploy your app in **multiple regions around the world with a few clicks**. Provide lower latency and a better experience for you customers at minimal cost.                                                                                                                                                                                                                                                                                                           |

These facilitates **scalability**, **agility**, and **innovation**.
* **Increase agility**
  * increasingspeed
  * easeofexperimentation
  * cultivatingacultureofinnovation
* **Elasticity**
  * powertoscaleresourcesupordowneasily
  * quicklydeployapplications
  * instantlyscaleupastheworkloadgrows
  * instantlyshutdownresourcesthatarenolongerrequired
* **Reliability**
  * abilityofasystemtorecoverfrominfrastructureorservicefailures
  * beingabletoacquirecomputingresourcestomeetdemandandmitigatedisruptions
  * toachievethis,yourarchitectureandsystemsmusthaveawellplannedfoundationthat handles changes in demand, detect failures, and automatically heals itself
* **Fault Tolerance**
  * asystemcanremainoperationalevenifsomeofthecomponentsofthatsystemfail. 
  * builtinredundancyofanapplicationscomponents
* **High availability**
  * ensureyoursystemarealwaysfunctioningandaccessible,andthatdowntimeisminimized as much as possible without the need of human intervention
* **Security**
  * retaincompletecontrolandownershipofdata
  * includingregionstoredin
  * howyouhandleencryptionandwhoholdstheencryptionkeys
  * electronicsurveillanceandmulti factoraccesscontrolsystems

## AWS Managed Interfaces

Three ways to use AWS: 
* AWS Management Console - Easy-to-use graphical interface that supports majority of
Amazon Web Services
  * Navigation
  * Usability
  * Convenient mobile app
* Command Line Interface (CLI)
  * Access to services via discrete command, open source
  * Allow you to automate and repeat deployment of AWS resources
  * Flexibility to create scripts
  * Environments:
    * Linux: Linux, macOS or Unix
    * Windows: PowerShell or Windows Command Processor
    * Remotely: Run commands on Amazon EC2 instances, SSH, or with Amazon EC2 systems manager
* Software Development Kits (SDKs) - Incorporate the connectivity and functionality of the
wide range of AWS Cloud services into your code
  * Ability to use AWS in existing applications
  * Flexibility to create applications

```
Console
  : Pin Icon
Resource Groups
- specifictoidentities
- eachusercancreatetheirownresourcegroups - shareresourcegroupbyURL
Tag editor
- managetagsofresourcesthatsupporttag - {key:value}pair
- globaltag
Helpful resources
1. Build a solution section - get started with simple wizards and automated workflows
2. Learn to build - learn to deploy your solutions through step-by-step guides, labs and videos
```

## Types of Cloud Computing

### SaaS For Customers (Software as a Service)
A completed product that is run and managed by the service provider
Don't worry about how the service is maintained. It just works and remains available.

### PaaS For Developers (Platform as a Service)
Removes the need for your organization to manage the underlying infrastructure. Focus on the deployment and management of your applications.
Don't worry about provisioning, configuring or understanding the hardware or OS

### IaaS For Admins (Infrastructure as a Service)
The basic building blocks for cloud IT. Provides access to networking features, computers and data storage space.
Don't worry about IT staff, data centers and hardware.

## Cloud Computing Deployment Models

| CLOUD                                                    | HYBRID                                                                                             | ON-PREMISE                                                                                                                     |
|----------------------------------------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Fully utilizing cloud computing                          | Using both Cloud and On-Premise                                                                    | Deploying resources on-premises, using virtualization and resource management tools, is sometimes called "private cloud".      |
| - Startups - SaaS offerings - New projects and companies | - Banks - FinTech,Investment Management - Large Professional Service providers - Legacy on-premise | - PublicSectore.g.Government - SuperSensitiveDatae.g. Hospitals - LargeEnterprisewithheavy regulation e.g. Insurance Companies |
| Dropbox                                                  | Deloitte, CIBC                                                                                     | AIG, Canada                                                                                                                    |

## AWS Global Infrastructure

*Where does all this Cloud Computing Run?*<br/>
**69 Availability Zones** within **22 Geographic Regions** around the world Way More **Edge Locations** than AZs!<br/><br/>
AWS serves over **a million** active customers in more than **190 countries**<br/><br/>
Steadily expanding global global infrastructure to help customers achieve lower latency and
higher throughput.<br/><br/>
**Regions** physical location in the world with multiple Availability Zones.<br/><br/>
**Availability Zones** one or more discrete data centers.<br/><br/>
**Edge Location** datacenter owned by a trusted partner of AWS.

## Regions
A **geographically distinct** location which has multiple datacenter (AZs).<br /><br />
Every region is **physically isolated** from and independent of every other region in terms of location, power, water supply.<br /><br />
Each region has at least **2 two AZs**,<br /><br />
Which region?
* latency
* cost
* regulatoryrequirements
  * GDPR
  * HIPAA
  * PCI DSS
Resources in one region are NOT automatically duplicated in other regions and not all services are available in all regions.<br /><br />
AWS largest region is **US-EAST**<br /><br />
**NEW** services almost always become available first is **US-EAST** <br /><br />
**US-EAST-1** is the reqion where you see all your billing information

## Availability Zones (AZs)
AZs are collection of data centers in a specific region.<br/><br/>
An AZ is a datacenter owned and operated by AWS in which AWS services run<br/><br/>
Each region has at least 2 two AZs<br/><br/>
AZs are represented by a Region Code, followed by a letter identifier eg. **us-east-1a**<br/><br/>
**Multi-AZ** Distributing your instance across multiple AZs allows failover configuration for handling requests when one goes down.<br/><br/>
Physically isolated but connected by fast, <10ms low latency network between AZs.<br/><br/>
AZs are physically distinct, independent infrastructure. They have own discrete, uninterruptible power supply, onsite backup generators, cooling equipment and networking connectivity. Supplied by different grids.<br/><br/>
Provision data on multiple AZs as best practice.

## Edge Locations
*Get Data Fast or Upload Data Fast to AWS* <br/><br/>
Host CDN.<br/><br/>
An Edge Location is a datacenter owned by a trusted partner of AWS which has a **direct connection** to the AWS network<br/><br/>
These locations serve requests for **CloudFront** and **Route 53**. Requests going to either of
these services will be routed to the nearest edge location automatically<br/><br/>
**S3 Transfer Acceleration** traffic and **API Gateway** endpoint traffic also use the AWS Edge Network.<br/><br/>
This allows for **low latency** no matter where the end user is geographically located. 

## GovCloud (US)

AWS GovCloud Regions allow customers to host sensitive **Controlled Unclassified** Information and other types of regulated workloads.<br/><br/>
GovCloud Regions are only operated by employees who are U.S. citizens, on U.S. soil.<br/><br/>
They are only accessible to U.S. entities and root account holders who pass a screening process.<br/><br/>
Customers can architect secure cloud solutions that comply with:<br/><br/>
* FedRAMPHighbaseline
* DOJ'sCriminalJusticeInformationSystems(CJIS)SecurityPolicy
* U.S.InternationalTrafficinArmsRegulations(ITAR)
* ExportAdministrationRegulations(EAR)
* DepartmentofDefense(DoD)CloudComputingSecurityRequirementsGuide

## Amazon Virtual Private Cloud (VPC)
VPC is the networking AWS service that will meet your networking requirements.<br /><br />
Pay as you go, on demand compute services<br /><br />
* Aprivate,virtualnetworkintheAWSCloud
  * Usessameconceptsasonpremisenetworking
* Allowscompletecontrolofnetworkconfiguration
  * AbilitytoisolateandexposeresourcesinsideVPC
* Offersseverallayersofsecuritycontrols
  * Abilitytoallowanddenyspecificinternetandinternaltraffic
* OtherAWSservicesdeployintoVPC
  * Servicesinherentsecuritybuiltintothenetwork

### VPC is a foundational service and integrates with numerous AWS services.

**Features** <br /><br />
1. Builds upon high availability of AWS Regions and Availability Zones (AZ)
  * Amazon VPC lives within a Region
  * Multiple VPCs per account
2. Subnets
  * Used to divide Amazon VPC
  * Allows Amazon VPC to span multiple AZs
3. Route tables
  * Control traffic going out of the subnets 
4. Internet Gateway (IGW)
  * Allows access to the Internet from Amazon VPC 
5. NAT Gateway
  * Allows private subnet resources to access Internet 
6. Network Access Control Lists (NACL)
  * Control access to subnets, stateless

### Example VPC
1. VPC is region based, select region eg. Oregon.
2. Create VPC, then give name Test-VPC
3. Define IP address for the VPC 10.0.0.0/16 is the classless inter-domain routing format, with
65,000 IP addresses to use in the VPC.
4. Create a subnet Subnet A1 with IP address space containing 256 IP addresses 10.0.0.0/24.
5. Subnet A1 lives in AZ A.
6. Create another subnet Subnet B1 containing 512 IP addresses 10.0.2.0/23.
7. Add Internet Gateway Test-IGW.
8. Subnet A1 will become a public subnet, where nonlocal traffic is routed through the internet
gateway
10 of 64
9. B1 will be a private subnet isolated from the internet.
