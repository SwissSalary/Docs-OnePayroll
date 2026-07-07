---
title: View subscription usage
description: Learn how to view your subscription status, monitor employee usage by month, and interpret billing data on the OnePayroll Usage page.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 07/07/2026
---

# View subscription usage

The **OnePayroll Usage** page shows your current subscription status and a full history of billable employee activity. Use it to verify that monthly employee counts are correct and to check whether charges were submitted on time.

## Open the OnePayroll Usage page

Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **OnePayroll Usage**, and then choose the related link.

## Subscription status

The top section of the page shows your current subscription details:

| Field | Description |
|-------|-------------|
| **Offer ID** | The Microsoft Commercial Marketplace offer identifier for your OnePayroll subscription |
| **Plan ID** | The identifier of your active subscription plan |
| **Status** | Current subscription status, color-coded for quick review |
| **Company** | The Business Central company the data applies to |

**Status values:**

| Status | Meaning |
|--------|---------|
| **Subscribed** | Your subscription is active. Full payroll functionality is available. |
| **Suspended** | The subscription has been suspended in Microsoft Commercial Marketplace. Payroll posting is blocked until reinstated. |
| **Unsubscribed** | The subscription has been cancelled. Contact your Azure administrator to resubscribe. |
| **NotFound** | No subscription is linked to this tenant and offer. This is expected in sandbox environments. In production, it means a subscription has not been purchased or has not yet activated. |

## Usage list

The middle section shows a hierarchical breakdown of all billable employee activity:

- **Year level** — Total employee-month count for the year (e.g., 2025: 177 means 177 employee-month pairs across all months)
- **Month level** — Number of charges submitted in that calendar month. Each charge represents one employee paid in a specific calendar month. A month's total may include charges for earlier months if those runs were posted late (see [Usage per Period chart](#usage-per-period-chart)).
- **Employee level** — Expand a month row to see individual employee entries

**Columns in the usage list:**

| Column | Description |
|--------|-------------|
| **Description** | Year, month name, or employee number depending on the level |
| **Count** | Number of employees at the year or month level |
| **Employee No.** | The employee identifier (visible at the employee level) |
| **Reported** | Ticked when the entry has been successfully submitted to Microsoft Commercial Marketplace for billing |
| **Counted At** | When the employee was recorded for this billing period |

### To view usage for a specific month

1. On the **OnePayroll Usage** page, locate the year you want to review.
1. Choose the expand arrow next to the year to show monthly rows.
1. Choose the expand arrow next to a month to see individual employee entries.

## Usage per Period chart

The **Usage per Period** chart at the bottom of the page shows employee counts by billing month with two series:

| Series | Description |
|--------|-------------|
| **Billed on time** | Charges for employees paid in a month, submitted in that same month |
| **Billed late** | Charges for employees paid in a month but submitted later because the payroll run was posted after the month closed. |

Use this chart to:
- Verify that employee counts align with your expectations for each month
- Spot months where billing was delayed (high "Billed late" proportion)
- Track usage trends over time to anticipate billing costs

## Related information

- [Subscription and licensing overview](subscription-overview.md)
- [Subscribe to OnePayroll on Microsoft Commercial Marketplace](subscription-marketplace.md)
