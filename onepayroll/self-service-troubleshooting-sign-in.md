---
title: Troubleshoot sign-in issues
description: Learn how to resolve common sign-in errors in the OnePayroll Employee Self-Service Portal.
author: LasseHerget
sws.service: onepayroll
sws.topic: troubleshooting
sws.date: 05/01/2026
---

# Troubleshoot sign-in issues

Find answers to common authentication-related questions in the Employee Self-Service Portal.

## "Looks like you're not signed up yet."

### When

After authenticating, the employee lands on the sign-in page with the message:

> Looks like you're not signed up yet.
> Please contact your payroll or HR department for further assistance.

### Why

The application was unable to find any connected employees in Business Central for the submitted user account.

### Steps

Confirm the employee is registered in Business Central with the correct private email address:

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **OnePayroll Self-Service Setup**, and then choose the related link.
1. Verify that the **Enabled** toggle is turned on.
1. Locate the employee in the list.
1. Verify that the **Email** column shows the correct email address.

   > [!NOTE]
   > If the email address is missing or incorrect, update the **Private Email** field on the employee card. The change takes effect immediately.

1. Verify that the **Status** column shows **Active**.

   > [!NOTE]
   > If the status shows **Unregistered**, the private email address was entered before the Self-Service Portal was enabled. To re-trigger the registration process, open the employee card, clear the **Private Email** field, and save. Then re-enter the correct email address and save again. After saving, refresh the **OnePayroll Self-Service Setup** page and confirm the status has changed to **Active**.

## "We could not load all required employee information for your account."

### When

One of the following occurs after authenticating:

- The employee lands on the sign-in page with the message: *We could not load all required employee information for your account. Please contact your payroll or HR department for further assistance.*
- The employee can use the Self-Service Portal but a warning symbol appears in the bottom-right corner. Choosing it shows: *We could not load all required employee information for your account.*

### Why

The account was successfully linked to an employee in Business Central, but an error occurred while fetching the employee's information. The connection was deactivated as a result.

### Steps

1. Check whether OnePayroll needs to be updated. API changes can disrupt the data flow between Business Central and the Self-Service Portal.
1. Verify that the OnePayroll Self-Service Portal API has access to Business Central:
   1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Microsoft Entra Applications**, and then choose the related link.
   1. Open the application with the Client ID `9bcc839b-d6fa-4641-b961-2dc9919449c9`.

      > [!NOTE]
      > If this application is not in the list, set it up by following the steps in [Set up the Self-Service Portal](self-service-setup.md).

   1. Verify that the **State** field is set to **Enabled**.
   1. Verify that the **D365 BUS FULL ACCESS** and **PAYROLL ADMIN** permission sets are still assigned.
1. Verify that the Self-Service Portal is enabled in Business Central:
   1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **OnePayroll Self-Service Setup**, and then choose the related link.
   1. Verify that the **Enabled** toggle is turned on.
1. If the company, environment, or tenant was deleted, the employee connection may not have been cleaned up automatically. In this case, contact the OnePayroll team for manual deactivation.

## Employee keeps getting signed out

### When

The employee is unexpectedly signed out while using the Self-Service Portal and must sign in again.

### Why

Sessions are bound to the user's IP address at sign-in. If a request arrives from a different IP address using the same session, the portal rejects it and treats the request as unauthenticated.

This can occur when:

- Switching between Wi-Fi and mobile data
- The internet provider assigns a new IP address
- Connecting to or disconnecting from a VPN

### Steps

This is expected behavior. There is nothing to configure or fix.

## See also

- [Self-Service Portal overview](self-service-overview.md)
- [Troubleshoot document issues](self-service-troubleshooting-documents.md)
- [Set up the Self-Service Portal](self-service-setup.md)
