---
title: Troubleshooting sign-in
description: Common sign-in errors in the OnePayroll Employee Self-Service Portal and how to resolve them.
author: LasseHerget
sws.service: onepayroll
sws.topic: troubleshooting
sws.date: 04/27/2026
---

# Sign-In & Access Errors

Find answers to common authentication-related questions in the Employee Self-Service Portal.

---

## Looks like you're not signed up yet.

### When

After authenticating, the employee ends up on the sign-in page with the message:<br/>
 > Looks like you're not signed up yet.<br/>
 > Please contact your payroll or HR department for further assistance.

### Why

Upon authentication, the application was unable to determine any connected employees in Business Central for the submitted user account.

### Steps

Confirm the employee has been registered in Business Central with the correct private email address. 
1. Open "OnePayroll Self-Service Setup"
   > Tip: You can click on the lens in the top right corner to open the search.
2. Ensure that the Employee Self-Service Portal is enabled.
3. Search for the desired employee
   > Tip: You can use `ctrl + F` to open the search function.
4. Verify that the "Email" field shows the correct email address of the employee.
   > If the email address is missing or incorrect, update the private email address field in the employee card.
   > The changes should immediately take effect.
5. Verify that the "Status" field shows "Active"
   > If the status is "Unregistered", the private email address has been added before the Self-Service Portal was enabled.<br/>
   > Open the employee card and clear the private email address field.
   > Make sure you leave the field after clearing it, so that the changes get saved.<br/>
   > Then, re-enter the correct private email address and save the changes to trigger the registration process.<br/>
   > This may take a few seconds. You can track the registration by looking at the top right corner of the employee card, 
   > which should first say "Saving..." and then switch to "✓ Saved" once it's done.<br/>
   > Then simply refresh the "OnePayroll Self-Service Setup" and make sure the status has changed to "Active".

---

## We could not load all required employee information for your account.

### When

1. After authenticating, the employee ends up on the sign-in page with the message:<br/>
   > We could not load all required employee information for your account.<br/>
   > Please contact your payroll or HR department for further assistance.
2. After authenticating, the employee can use the Self-Service Portal, but there is a warning symbol in the bottom right corner.
   Upon clicking it, the user sees a notification about an incomplete sign-in, along with the details:
   > We could not load all required employee information for your account.

### Why

The account was successfully associated with an employee in Business Central, but there was an error while trying to fetch the employee's information.
The connection was therefore considered invalid and deactivated.

### Steps

1. Check if OnePayroll needs to be updated.
   > API changes may cause disruptions in the data flow between Business Central and the Self-Service Portal.

2. Make sure that the Business Central environment is properly connected to the OnePayroll API and that the API is accessible.
   a. Verify that OnePayroll has access to the Business Central API.
      - Open "Microsoft Entra Applications"
        > Tip: You can click on the lens in the top right corner to open the search.

      - Open the application with the Client ID "9bcc839b-d6fa-4641-b961-2dc9919449c9"
        > This is the fixed ID of the OnePayroll Self-Service Portal API.
        > If it is not present in the list, you need to set it up, following the steps in the [Get Started Guide](../get-started.md).

      - Verify that the state is "Enabled".
      - Verify that the required permissions are still assigned to the application.
        - "D365 BUS FULL ACCESS"
        > This grants access to the Business Central API, which is required to fetch basic information about the employee, such as their name, date of birth, and the company they work for.
        - "PAYROLL ADMIN"
        > This grants access to the OnePayroll API, which is required to fetch payroll information about the employee, such as their payslips and tax documents.

   b. Make sure the Self-Service Portal is enabled in Business Central.
      - Open "OnePayroll Self-Service Setup"
        > Tip: You can click on the lens in the top right corner to open the search.
      - Verify that the switch is set to "Enabled"

3. If the company, environment or tenant have been deleted...
    > Not all deletions provide the required triggers for us to clean up the data accordingly,
    > so the employee connection might have not been cleaned up properly.
    > In this case, the connection requires manual deactivation by the OnePayroll Team.

---

## User keeps getting signed out.

### When

The employee is signed out unexpectedly while using the Self-Service Portal, and needs to sign in again.

### Why

When you sign in to the Self-Service Portal, a session ticket is created and tied to your device's current IP address.
If a request comes in from a different IP address, using that same ticket, the application rejects that ticket and treats the request as unauthenticated.

This can happen whenever your IP address changes, such as when:
- Switching between Wi-Fi and mobile data
- Your internet provider assigns you a new IP address
- Connecting to or disconnecting from a VPN

### Steps

This is expected behavior and not a bug. There is nothing to configure or fix at this point in time.
