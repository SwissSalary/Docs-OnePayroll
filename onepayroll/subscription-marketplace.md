---
title: Subscribe to OnePayroll on Microsoft Commercial Marketplace
description: Learn how to purchase a OnePayroll subscription on Microsoft Commercial Marketplace, activate it, change plans, and manage your subscription lifecycle.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 07/07/2026
---

# Subscribe to OnePayroll on Microsoft Commercial Marketplace

OnePayroll subscriptions are purchased and managed through Microsoft Commercial Marketplace. The subscription is linked to your organization's Microsoft Entra ID tenant, so all Business Central users in your organization benefit from the same subscription.

## Purchase a subscription

> [!NOTE]
> To purchase a subscription, you need an Azure account with permission to purchase Marketplace offers (typically a subscription owner or contributor role).

1. Go to [Microsoft Commercial Marketplace](https://marketplace.microsoft.com/) and find the **OnePayroll Subscription** offer.
1. Choose **Get it now**.
1. Select the plan that fits your organization.
1. Complete the purchase in the Azure portal — choose the Azure subscription and resource group to associate the billing with, and confirm the order.

## Activate your subscription

After purchase, Microsoft Commercial Marketplace redirects your browser to the OnePayroll activation page. This page confirms your subscription details — offer ID, plan, and the Microsoft Entra ID tenant that will be licensed.

No action is required on this page. Activation happens automatically. Close the page once you have confirmed the details.

## Verify the subscription in Business Central

After activation, the subscription is available in Business Central. To confirm it is active:

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **OnePayroll Usage**, and then choose the related link.
1. Check the **Status** field at the top of the page. It should show **Subscribed**.

> [!TIP]
> If Status shows **NotFound** shortly after purchasing, wait a few minutes and reload the page. Subscription activation can take a moment to propagate.

## Change your plan

To change to a different subscription plan:

1. Sign in to the [Azure portal](https://portal.azure.com) and navigate to your OnePayroll Subscription resource.
1. Choose **Change plan** and select the new plan.
1. Confirm the change.

The new plan takes effect immediately and is applied from the next posted payroll run. The updated plan ID is reflected on the **OnePayroll Usage** page in Business Central once the change is processed.

## Suspend or cancel your subscription

If you suspend or cancel through Microsoft Commercial Marketplace, OnePayroll will block payroll run posting and stop reporting usage. Existing payroll data is not affected.

- **Suspended**: Reinstate the subscription through the Azure portal to restore full access. Payroll posting is unblocked at the next sign-in.
- **Cancelled**: A cancelled SaaS subscription cannot be reinstated. To restore full access, re-subscribe using the steps in [Purchase a subscription](#purchase-a-subscription).

> [!IMPORTANT]
> Cancelling your subscription does not delete any payroll data in Business Central. Your historical payroll data remains available.

## Related information

- [Subscription and licensing overview](subscription-overview.md)
- [View subscription usage](subscription-usage.md)
