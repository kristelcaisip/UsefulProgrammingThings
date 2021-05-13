# AWS RDS

## Setting up a PostgreSQL Database with Amazon RDS

* Follow the instructions to [Create and Connect to a PostgreSQL Database with Amazon RDS](https://amzn.to/3hqonX8)
* The following steps allows you to [access your Amazon RDS instance via a SQL Client](https://stackoverflow.com/questions/65242145/encountering-error-08001-when-attempting-to-connect-to-database)
   * On the Amazon RDS Dashboard, click on on your newly created database and under Connectivity & Security > Security > VPC security groups > click on the link of your security group (e.g `default(sg-f1eb6c8c`)
   * This will then take you the Security Groups in EC2 Dashboard
   * Click on the Security Group ID of your database to see the details for it
   * Under Inbound Rules tab click on **Edit inbound rules** button to display the list of inbound rules
   * Click on the **Add Rule** button and a new row will appear
   * Enter the following Details:
       * **Type:** PostgreSQL
       * **Protocol:** TCP (this is auto-selected)
       * **Port Range:** 5432 (this is auto-selected)
       * **Source:** Anywhere
       * **Description:** (you can leave this blank)
   * This will create 2 new entries in the inbound rules with Sources `0.0.0.0/0` and `::/0`

### Accessing via a SQL Client

* **Database Type:** PostgreSQL
* **Drive (JDBC):** PostgreSQL
* **Database Server:** (Copy the Endpoint under the Database > Connectivity & security > Endpoint & port)
* **Database:** (Name of the database)
* **Authentication:** (Username and password you've set up)

### Adding to a Spring Boot application

* In the `application.yml` enter the following details
    
    ```yaml
    spring:
        datasource:
            driver-class-name: org.postgresql.Driver
            url: jdbc:postgresql://[AMAZON_RDS_DB_ENDPOINT]:5432/[DB_NAME]
            username: [AMAZON_RDS_USERNAME]
            password: [AMAZON_RDS_PASSWORD]
    ```
