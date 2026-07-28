---
title: Set up the Self-Service Portal
description: Learn how to set up the OnePayroll Employee Self-Service Portal in Business Central, including granting Entra consent and enabling the portal.
author: LasseHerget
sws.service: onepayroll
sws.topic: how-to
sws.date: 05/04/2026
---

# Set up the Self-Service Portal

Learn how to set up your Business Central environment for the Self-Service Portal.

## Grant consent and enable the Entra application

Before employees can sign in, you must grant admin consent in your Microsoft Entra tenant and enable the application in Business Central:

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Microsoft Entra Applications**, and then choose the related link.
1. Open the application with the description **OnePayroll Self-Service Portal (API)**.
1. Choose **Grant Consent** and follow the on-screen instructions.

   > [!IMPORTANT]
   > The account you sign in with must have at least the **Cloud Application Administrator** role in Microsoft Entra. This is a Microsoft Entra requirement — Business Central does not enforce it. Contact your IT or Microsoft 365 administrator if you do not have this role.

1. Set the **State** field to **Enabled**.

   > [!NOTE]
   > The **Self-Service Portal** permission set should already be assigned to the application automatically. If it is not there, then add it now.

## Enable the Self-Service Portal

After enabling the Entra application, turn on the Self-Service Portal in Business Central:

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **OnePayroll Self-Service Setup**, and then choose the related link.
1. Turn on the **Enabled** toggle.

## See also

- [Self-Service Portal overview](self-service-overview.md)
- [Register an employee](self-service-register-employee.md)
- [Troubleshoot sign-in issues](self-service-troubleshooting-sign-in.md)
