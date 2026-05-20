---
title: Self-Service Portal overview
description: Learn about the OnePayroll Employee Self-Service Portal, where employees can securely view their personal information, payment methods, and documents including paychecks.
author: LasseHerget
sws.service: onepayroll
sws.topic: overview
sws.date: 05/01/2026
---

# Self-Service Portal overview

The Employee Self-Service Portal, sometimes abbreviated as `ESS`, is a web application that gives employees secure access to their payroll information directly from Business Central. Employees can view their personal and contact information, payment methods, and documents, including paychecks.

Authentication is handled exclusively through Microsoft Entra External ID. The portal does not store employee data.

## What employees can access

| Information | Details |
|-------------|--------|
| **General information** | Name, date of birth, and social security number. |
| **Contact information** | Company and personal email addresses, phone numbers, and home address. |
| **Payment methods** | Bank accounts and direct deposit details where the employee receives payment. |
| **Documents** | Documents from the employee dossier in Business Central that have **Employee Access** turned on and whose **Available On** date has passed. This includes paychecks. |

## Employee registration

Registration is triggered automatically from within Business Central. When you enter a private email address on an employee card and the Self-Service Portal is enabled, the portal sends an invitation email to that address. The employee follows the link in the email to set up their account.

You can monitor registration status for all employees from the **OnePayroll Self-Service Setup** page:

| Status | Description |
|--------|-------------|
| **Unregistered** | A private email address has not been entered, or it was entered before the portal was enabled. |
| **Registered** | The invitation has been sent but the employee has not yet completed account setup. |
| **Registration Failed** | An error occurred during registration. Review the error details on the employee card. |
| **Active** | The employee has completed setup and can sign in to the portal. |

## In this section

| Article | Description |
|---------|-------------|
| [Set up the Self-Service Portal](self-service-setup.md) | Grant Entra app access and enable the portal in Business Central. |
| [Register an employee](self-service-register-employee.md) | Add a private email address to trigger employee registration. |
| [Security](self-service-security.md) | Authentication, session management, and security verification tools. |
| [Troubleshoot sign-in issues](self-service-troubleshooting-sign-in.md) | Common sign-in errors and how to resolve them. |
| [Troubleshoot document issues](self-service-troubleshooting-documents.md) | Documents not appearing or being inaccessible. |

## See also

- [Employee dossier and documents](employee-dossier.md)
- [Set up employees](employee-setup.md)
