---
title: OnePayroll REST API
description: Learn about the OnePayroll REST API and how to integrate with OnePayroll services.
author: keresse1
sws.service: onepayroll
sws.topic: overview
sws.date: 08/19/2026
---

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

For guidance on configuring OAuth for the OnePayroll REST API, watch the [OnePayroll OAuth setup video](https://www.youtube.com/watch?v=b7t3hnelLy0).

---

## REST API and OAuth

REST API and OAuth work together to provide a secure and scalable way for OnePayroll to communicate with external applications.

The REST API provides the integration framework used to exchange information, while OAuth provides the authorization mechanism used to control access to that information.

Together, they allow customers, partners, and approved applications to build automated integrations with OnePayroll while maintaining appropriate security and access controls.

---

## OData
Please see [OData Documentation](https://learn.microsoft.com/en-us/odata/) for more details

---

## REST API vs. OData

Although REST APIs and OData both allow external applications to access data over HTTP, they serve different integration purposes.

### REST API

Please see [Azure REST API Documentation](https://learn.microsoft.com/en-us/rest/api/azure/) for more details

For most new OnePayroll integrations, the **OnePayroll REST API** should be the preferred integration method when an appropriate endpoint is available.

### OData

OData provides a standardized method for accessing exposed Business Central data.

It includes built-in query capabilities such as:

- Filtering
- Sorting
- Field selection
- Record querying

OData should be used where specifically supported or where the required information is not available through the OnePayroll REST API.

---

