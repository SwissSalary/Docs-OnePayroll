---
title: Set up remittance groups
description: Learn how to create and configure remittance groups in OnePayroll to automate payment collection for taxes, benefits, and other payroll obligations.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 04/06/2026
---

# Set up remittance groups

Remittance groups define how often you pay and report on payroll obligations such as taxes and benefit premiums. Once configured, OnePayroll automatically accumulates payment amounts into batches when payroll runs are created.

For a conceptual overview, see [About remittance groups](remittance-groups-overview.md).

## Prerequisites

Before creating remittance groups, make sure the following are configured:

- **Pay cycles** — at least one pay cycle for your payment deposit schedule, and one for your filing schedule if different. See [Set up pay cycles](pay-cycles-setup.md).
- **Payment methods** — a Business Central payment method for how the payment is transmitted (check, ACH, etc.). See [Set up payment methods](payment-methods-setup.md).

## Create a remittance group

1. Search for and open **Remittance Groups**.
2. Select **New** to open a blank Remittance Group card.
3. Fill in the required fields:

   | Field | Description |
   |-------|-------------|
   | **Code** | Enter a short unique code, such as `FED-TAX` or `HEALTH-INS`. |
   | **Description** | Enter a descriptive name, such as *Federal Payroll Taxes* or *Health Insurance – Carrier A*. |

4. In the **Payment** group, set the schedule and method:

   | Field | Description |
   |-------|-------------|
   | **Payment Cycle** | Select the pay cycle that determines how often payment batches are consolidated and when they are due. If you leave this blank, one batch is created per payroll run. |
   | **Filing Cycle** | Select the pay cycle that determines how often reporting forms are generated. This can differ from the payment cycle—for example, monthly deposits with quarterly reports. |
   | **Payment Method** | Select the Business Central payment method code stored on payment batches for this group. This controls the payment processing mode, but the actual payee and posting details still come from the underlying source records. |
   | **Filing Method** | Select the method used to produce remittance reports or files. See [Filing methods](#filing-methods) below. |

5. Optionally, enter the agency or carrier's remittance portal URL in the **Home Page** field.
6. Select **Save** or navigate away to save.

## Assign sources to a remittance group

After creating the remittance group, assign it to the income tax jurisdictions and benefits whose amounts belong in this group.

### Assign an income tax jurisdiction

1. Open the income tax jurisdiction record (search for **Income Tax Jurisdictions**).
2. Set the **Remittance Group** field to your new remittance group code.
3. Save the record.

### Assign a benefit

1. Open the benefit record (search for **Benefits**).
2. Set the **Remittance Group** field to your remittance group code.

   > [!TIP]
   > For benefits that use benefit rate records per employee, you can assign the remittance group directly on the **Benefit Rate** record instead. This allows different rates to be remitted to different groups (for example, multiple carriers).

3. Save the record.

After assigning sources, the **Sources** factbox on the Remittance Group card will list all assigned jurisdictions and benefits.

> [!IMPORTANT]
> If you want to use the **Pay** action on a remittance-group batch, group together only sources that have compatible payout setup. For example, if one benefit provider vendor is configured for electronic payment and another is configured for checks, the batch's payment method does not normalize those vendor settings into one unified payment.

## Filing methods

The **Filing Method** on the remittance group determines what report or file is produced when you select **Report** on a payment batch.

| Method | Description |
|--------|-------------|
| **Default** | Produces a standard payment batch summary report. |
| **Localized filing methods** | Can generate country- or region-specific remittance files and forms. See your localization documentation for details. |

## Example: Payroll tax remittance

Here is a typical setup for a payroll tax remittance group where payments are made monthly and filings are submitted quarterly:

| Field | Value |
|-------|-------|
| Code | `PAYROLL-TAX` |
| Description | Payroll Taxes |
| Payment Cycle | `MONTHLY` |
| Filing Cycle | `QUARTERLY` |
| Payment Method | `ACH` |
| Filing Method | A localization-specific tax filing method, if available |

Then assign the applicable payroll tax jurisdictions to this remittance group.

> [!NOTE]
> Country- or region-specific tax filing methods and deposit schedules vary by localization. For US-specific guidance, see [US localization and compliance](us-localization.md) and [IRS Form 941 (US)](irs-form-941.md).

## Example: Quarterly regional income tax

| Field | Value |
|-------|-------|
| Code | `REGION-TAX` |
| Description | Regional Income Tax |
| Payment Cycle | `MONTHLY` |
| Filing Cycle | `QUARTERLY` |
| Payment Method | `ACH` |
| Filing Method | A localization-specific regional tax filing method, if available |

## Related pages

- [About remittance groups](remittance-groups-overview.md)
- [Work with payroll payments](payroll-payments.md)
- [US localization and compliance](us-localization.md)
- [Set up pay cycles](pay-cycles-setup.md)
- [Set up payment methods](payment-methods-setup.md)
