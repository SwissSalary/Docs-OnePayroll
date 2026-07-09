---
title: Subscription and licensing overview
description: Learn how OnePayroll licensing works, including trial limits, Microsoft Commercial Marketplace subscription plans, and usage-based billing for active employees.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 07/07/2026
---

# Subscription and licensing overview

OnePayroll uses a subscription-based licensing model through Microsoft Commercial Marketplace. A free trial lets you explore core functionality before purchasing, and billing is based on the number of active employees processed each month.

## Trial period

Without an active subscription, OnePayroll operates in trial mode with the following limits:

| Feature | Trial limit |
|---------|-------------|
| Payroll runs | Up to 2 total (1 posted, 1 unposted) |
| Self-Service employee registrations | Up to 2 employees |

While in trial mode, a notification banner appears on the Payroll Activities page and the Self-Service Setup page to remind you that limits apply.

Once you reach a trial limit, attempting to post an additional payroll run or register a new Self-Service employee is blocked. An error message is shown with a **Subscribe now** action that takes you to the purchase page.

## Subscribing

Subscriptions are purchased through Microsoft Commercial Marketplace. After purchase, the subscription is automatically linked to your organization's Microsoft Entra ID tenant — no manual activation is required in Business Central. See [Subscribe to OnePayroll on Microsoft Commercial Marketplace](subscription-marketplace.md).

## Subscription plans

OnePayroll offers three plans through Microsoft Commercial Marketplace. All plans are billed per active employee per month. For current pricing, see the OnePayroll offer on Microsoft Commercial Marketplace.

| Feature | Basic | Advanced | Premium |
|---------|:-----:|:--------:|:-------:|
| Payroll | ✓ | ✓ | ✓ |
| Direct Deposit | ✓ | ✓ | ✓ |
| Employee Self-Service (ESS) | ✓ | ✓ | ✓ |
| Retropay | ✓ | ✓ | ✓ |
| Pro rata calculation | ✓ | ✓ | ✓ |
| Time Tracking | — | ✓ | ✓ |
| Time Tracking & Projects | — | — | ✓ |
| Accounting integrations | — | ✓ | ✓ |
| Email support | ✓ | ✓ | ✓ |
| Phone support | — | ✓ | ✓ |
| Expert support | — | — | ✓ |
| Dedicated support | — | — | ✓ |

Your active plan is shown on the **OnePayroll Usage** page. You can upgrade or downgrade your plan at any time from the Azure portal — no cancellation required. The new plan takes effect immediately and is applied from the next posted payroll run. See [Change your plan](subscription-marketplace.md#change-your-plan) for steps.

## Usage-based billing

After subscribing, you are charged once for each employee per calendar month they are paid. An employee paid in January and February generates two charges — one for January and one for February.

Charges are submitted when a payroll run is **posted**. If a January payroll run is posted in February, the January charge is submitted at that point — at the same time as any February charges. Both appear in February's billing submission, but cover different months. This is shown as **Billed late** on the **OnePayroll Usage** page.

Cancelled payroll runs do not generate charges.

## Sandbox environments

Licensing checks and usage metering are automatically disabled in Business Central sandbox environments. You can use all features without restriction and no usage data is sent to Microsoft Commercial Marketplace.

## Related information

- [Subscribe to OnePayroll on Microsoft Commercial Marketplace](subscription-marketplace.md)
- [View subscription usage](subscription-usage.md)
- [Set up the Self-Service Portal](self-service-setup.md)
