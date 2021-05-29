# AZ-900 Azure Fundamentals

* Notes taken from:
  * Exam Reference AZ-900: Microsoft Azure Fundamentals
  * Classroom sessions
* [Study Guide](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE3WzVA)

## Describe Cloud Concepts (20-25%)

### Cloud Models

#### Define Cloud Computing

* The delivery of Computing Services over the internet (Compute, Network, Storage, Analytics), enabling faster innovation, flexible resources, and economies of scale.

#### Describe Public Cloud

* Owned by cloud services or hosting provider
* Provides resources and services to multiple organisations and users
* Accessed via secure network connection (Typically over the Internet)

#### Describe Private Cloud

* Organisations create a cloud environment in their data center
* Organisation is responsible for operating the services they provide
* Does not provide access to users outside of the organisation

#### Describe Hybrid Cloud

* Combines Public and Private Clouds to allow applications to run in the most appropriate location

#### Compare and Contrast the 3 Different Cloud Models

* **Public Cloud**
  * No capital expenditures to scale up
  * Applications can be quickly provisioned and deprovisioned
  * Organisataions pay only for what they use
* **Private Cloud**
  * Hardware must be purchased for start-up and maintenance
  * Organisations have complete control over resources and security
  * Organisations are responsible for hardware maintenance and updates
* **Hybrid Cloud**
  * Provides the most flexibility
  * Organisations determine where to run their applications 
  * Organisations control security, compliance, or legal requirements

### Cloud Benefits and Considerations

#### Cloud Benefits

* High Availability
* Fault Tolerance
* Scalability
* Elasticity
* Global Reach 
* Customer Latency Capabilities
* Agility
* Predictive Cost Considerations

#### Difference between Capital Expenditure (CapEx) and Operational Expenditure (OpEx)

* **Capital Expenditure (CapEx)**
  * The up-front spending of money on physical infrastructure
  * Costs from CapEx have a value that reduces over time
* **Operational Expenditure (OpEx)**
  * The spending and billing of services or products as needed
  * Expenses are deducted in the same year

#### Consumption Based Model

* Cloud service providers operate on a consumption-based model, which means that end users only pay for the resources that they use. Whatever they use is what they pay for.
  * Better cost prediction
  * Prices for individual resources and services are provided
  * Billing is based on actual usage

### Cloud Services

| IaaS | PaaS | SaaS |
|------|------|------|
| The most flexible cloud service<br/><br/> | Focus on Application development<br/><br/> | Pay-as-you-go pricing model<br/><br/> |
| You configure and manage the hardware for your application | Platform management is handled by the cloud provider | Users pay for the software they use on a subscription model |


#### Infrastructure as a Service (IaaS)

![image](img/IaaS.png)<br/>
* Build pay-as-you-go IT Infrastructure by renting services, virtual machines, storage, networks, and operating systems from a cloud provider

#### Platform as a Service (PaaS)

![image](img/PaaS.png)<br/>
* Provides environment for building, testing, and deploying software applications; without focusing on managing underlying infrastructure

#### Software as a Service (SaaS)

![image](img/SaaS.png)<br/>
* Users connect to and use cloud-based apps over the Internet: for example, Microsoft Office 365 email and calendar

#### Identify a Service Type Based on a Use Case

#### Describe the Shared Responsibility Model

![](img/shared_responsibility_model.PNG)

There are different Cloud Models available: **On Premise**, **Hybrid**, and **Private**. <br />

There are also different Services available **Infrastructure as a Service (IaaS)**, **Platform as a Service (PaaS)**, **Software as a Service**.

#### Describe Serverless Computing

* With **Serverless Computing Applications** the cloud service provider automatically provisions, scales and managess the infrastructure required to run the code. 
* **Azure Functions**
  * Code running your service and not the underlying platform or infrastructure. It creates infrastructure based on an event
* **Azure Logic Apps**
  * Cloud Service that helps you automate and orchestrate tasks, business processes, and workflows when you need to integreate apps, data, systems, and services

---

## Describe Core Azure Services (15-20%)

---

## Describe Core Solutions and Management Tools on Azure (10-15%)

---

## Describe General Security and Netowrk Security Features (10-15%)

---

## Describe Identity, Governance, Privacy, and Compliance Features (20-25%)

---

## Describe Azure Cost Management and Service Level Agreements (10-15%)