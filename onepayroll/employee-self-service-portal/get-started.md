---
title: Get Started with OnePayroll's Employee Self-Service Portal
description: Set up the Business Central environment for the use of OnePayroll's Employee Self-Service Portal.
author: LasseHerget
sws.service: onepayroll
sws.topic: article
sws.date: 04/27/2026
---

# Set up the OnePayroll Self-Service Portal

Learn how to set up your Business Central environment for the use of the Employee Self-Service Portal.

## Grant Access to the Entra App

In order to enable the Employee Self-Service Portal, you will need to grant access to the application in your Microsoft Entra tenant:
1. Open "Microsoft Entra Applications"
   > Tip: You can click on the lens in the top right corner to open the search.

2. Click on "New"
   > This will open up the "Microsoft Entra Application Card" wizard.

3. Enter the Client ID: "9bcc839b-d6fa-4641-b961-2dc9919449c9"
   > This is the fixed ID of the OnePayroll Self-Service Portal API.

4. Declare a description
   > e.g. "OnePayroll Self-Service Portal (API)"

5. Assign the following permission sets:
   - "D365 BUS FULL ACCESS"
     > This grants access to the Business Central API, which is required to fetch basic information about the employee, such as their name, date of birth, and the company they work for.
   - "PAYROLL ADMIN"
     > This grants access to the OnePayroll API, which is required to fetch payroll information about the employee, such as their payslips and tax documents.

6. Set the state to "Enabled"
7. Click on "Grant Consent" and follow the instructions.

## Enable the Self-Service Portal

Once the permissions for the application have been granted, you can enable the Employee Self-Service Portal in Business Central:

1. Open "OnePayroll Self-Service Setup"
   > Tip: You can click on the lens in the top right corner to open the search.

2. Toggle the switch to "Enabled"
