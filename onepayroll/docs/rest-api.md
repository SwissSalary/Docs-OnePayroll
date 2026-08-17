# OnePayroll REST API

## Introduction

The **OnePayroll REST API** enables external applications and services to securely integrate with OnePayroll.

Using the API, approved systems can exchange payroll and related data directly with OnePayroll without relying on manual file transfers.

This allows organizations to connect other systems with OnePayroll, for example:

- HR and HRIS platforms
- Finance and ERP systems
- Time and attendance applications
- Benefits providers
- Expense management systems
- Reporting platforms
- Other payroll-related applications

The REST API provides a standardized integration layer for retrieving and, where supported, creating or updating OnePayroll data.

Detailed information about available resources, endpoints, request parameters, and response structures is provided in the **OnePayroll API Reference**.

---

## What is a REST API?

**REST API** stands for **Representational State Transfer Application Programming Interface**.

A REST API allows different applications to communicate securely over the internet using standard HTTP methods.

Common HTTP methods include:

| Method | Description |
|---|---|
| `GET` | Retrieve information |
| `POST` | Create information or initiate an action |
| `PATCH` | Update existing information |
| `DELETE` | Remove information when supported |

OnePayroll API requests and responses use standard web technologies and JSON-formatted data, making it easier for external systems and integration partners to communicate with OnePayroll.

REST APIs can be used to automate the exchange of information between OnePayroll and other business applications without requiring manual imports or exports.

---

## Authentication

### What is OAuth?

**OAuth 2.0** is an industry-standard authorization framework used to securely provide applications with access to protected resources.

Instead of providing a user's OnePayroll credentials directly to another application, the requesting application receives an **access token** that authorizes it to access permitted resources.

OAuth helps ensure that integrations are authenticated and that access can be controlled based on the permissions assigned to the application.

OnePayroll integrations should use the supported OAuth authentication method when connecting to the REST API.

Detailed authentication and configuration instructions are provided in the [Authentication](./authentication.md) section of the OnePayroll API documentation.

---

## REST API and OAuth

REST API and OAuth work together to provide a secure and scalable way for OnePayroll to communicate with external applications.

The REST API provides the integration framework used to exchange information, while OAuth provides the authorization mechanism used to control access to that information.

Together, they allow customers, partners, and approved applications to build automated integrations with OnePayroll while maintaining appropriate security and access controls.

---

## OData

### What is OData?

**OData**, or **Open Data Protocol**, is a standardized protocol that allows applications to access and work with data through HTTP.

OData supports capabilities such as:

- Retrieving records
- Filtering results
- Sorting results
- Selecting specific fields
- Querying exposed data

Within Microsoft Dynamics 365 Business Central environments, OData services can be used to expose supported Business Central data to external applications.

Depending on the integration requirement, OnePayroll integrations may use either dedicated REST API endpoints or supported OData services.

---

## REST API vs. OData

Although REST APIs and OData both allow external applications to access data over HTTP, they serve different integration purposes.

### REST API

A dedicated REST API provides a defined set of resources and operations designed specifically for supported OnePayroll integration scenarios.

The API defines:

- Which information is available
- How the information is structured
- Which actions an external application can perform
- Which fields can be created or updated
- Which validation rules apply

For most new OnePayroll integrations, the **OnePayroll REST API should be the preferred integration method when an appropriate endpoint is available**.

### OData

OData provides a standardized method for accessing exposed Business Central data.

It includes built-in query capabilities such as:

- Filtering
- Sorting
- Field selection
- Record querying

OData should be used where specifically supported or where the required information is not available through the OnePayroll REST API.

---

## API Structure

The OnePayroll REST API is organized into logical resources.

Planned API areas may include:

### Company

Resources related to OnePayroll companies and company configuration.

### Employees

Resources related to employee information, including:

- Employee details
- Employment information
- Contact information
- Payroll configuration
- Employee status

### Payroll

Resources related to payroll processing and payroll information.

Examples may include:

- Pay periods
- Payroll calculations
- Payroll results
- Earnings
- Deductions
- Employer contributions

### Pay Elements

Resources related to payroll earnings and deductions.

Examples may include:

- Earnings
- Deductions
- Benefits
- Reimbursements
- Allowances

### Direct Deposit

Resources related to employee payment information.

Examples may include:

- Bank accounts
- Direct deposit allocations
- Payment priorities

### Benefits

Resources related to employee benefit enrollment and payroll benefit deductions.

### Absence and Leave

Resources related to employee absence and leave information.

Examples may include:

- Paid time off
- Sick leave
- Leave of absence
- Absence balances
- Absence transactions

### Paychecks

Resources related to employee paycheck information.

Examples may include:

- Paycheck history
- Gross pay
- Net pay
- Taxes
- Earnings
- Deductions
- Employer contributions

### Tax and Compliance

Resources related to payroll tax and compliance information.

Examples may include:

- Employee tax configuration
- Tax jurisdictions
- Tax calculations
- Employer taxes
- Payroll compliance data


